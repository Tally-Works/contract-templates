#!/usr/bin/env node
/*
 * build-docx.js — give every template a downloadable Word file.
 *
 *   node scripts/build-docx.js            write <template>.docx beside every <template>.md that lacks a publisher original
 *   node scripts/build-docx.js --check    fail if any template has no .docx beside it
 *   node scripts/build-docx.js --force    regenerate every generated .docx (publisher originals are never touched)
 *
 * A template's .docx is the publisher's original file when front-matter `source.file` points at it; otherwise it is
 * generated here from the Markdown body, with the template's source and licence in the footer.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { Lexer } = require('marked');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ExternalHyperlink, Table, TableRow, TableCell,
  WidthType, BorderStyle, Footer, PageNumber, LevelFormat, TabStopType,
} = require('docx');

const ROOT = path.resolve(__dirname, '..');
const TEMPLATES_DIR = path.join(ROOT, 'templates');
const TAXONOMY = yaml.load(fs.readFileSync(path.join(ROOT, 'taxonomy.yaml'), 'utf8'));
const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const FORCE = args.includes('--force');

const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.isFile() && e.name.endsWith('.md') && e.name !== 'README.md') out.push(p);
  }
  return out.sort();
}

function parseFrontmatter(text) {
  const m = text.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---[ \t]*\n?([\s\S]*)$/);
  if (!m) return null;
  return { meta: yaml.load(m[1]) || {}, body: m[2] };
}

// ---------------------------------------------------------------- inline rendering

function inlineRuns(tokens, style = {}) {
  const runs = [];
  for (const t of tokens || []) {
    switch (t.type) {
      case 'text':
        if (t.tokens && t.tokens.length) runs.push(...inlineRuns(t.tokens, style));
        else runs.push(new TextRun({ text: decode(t.text), ...style }));
        break;
      case 'escape':
        runs.push(new TextRun({ text: decode(t.text), ...style }));
        break;
      case 'strong':
        runs.push(...inlineRuns(t.tokens, { ...style, bold: true }));
        break;
      case 'em':
        runs.push(...inlineRuns(t.tokens, { ...style, italics: true }));
        break;
      case 'del':
        runs.push(...inlineRuns(t.tokens, { ...style, strike: true }));
        break;
      case 'codespan':
        runs.push(new TextRun({ text: decode(t.text), font: 'Consolas', ...style }));
        break;
      case 'br':
        runs.push(new TextRun({ text: '', break: 1 }));
        break;
      case 'link': {
        const inner = inlineRuns(t.tokens, { ...style, style: 'Hyperlink' });
        const label = inner.length ? inner : [new TextRun({ text: t.href, style: 'Hyperlink' })];
        runs.push(new ExternalHyperlink({ children: label, link: t.href }));
        break;
      }
      case 'image':
        runs.push(new TextRun({ text: t.text ? `[${t.text}]` : '', ...style }));
        break;
      case 'html':
        runs.push(new TextRun({ text: decode(t.text.replace(/<[^>]+>/g, '')), ...style }));
        break;
      default:
        if (t.tokens) runs.push(...inlineRuns(t.tokens, style));
        else if (t.text) runs.push(new TextRun({ text: decode(t.text), ...style }));
    }
  }
  return runs;
}

function decode(s) {
  return String(s)
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
}

// ---------------------------------------------------------------- block rendering

const HEADINGS = [HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3, HeadingLevel.HEADING_4, HeadingLevel.HEADING_5, HeadingLevel.HEADING_6];

function blocks(tokens, ctx) {
  const out = [];
  for (const t of tokens || []) {
    switch (t.type) {
      case 'space':
        break;
      case 'heading':
        out.push(new Paragraph({ heading: HEADINGS[Math.min(t.depth, 6) - 1], children: inlineRuns(t.tokens) }));
        break;
      case 'paragraph':
        out.push(new Paragraph({ children: inlineRuns(t.tokens), spacing: { after: 160 }, indent: ctx.indent ? { left: ctx.indent } : undefined }));
        break;
      case 'text':
        out.push(new Paragraph({ children: inlineRuns(t.tokens && t.tokens.length ? t.tokens : [{ type: 'text', text: t.text }]), spacing: { after: 120 } }));
        break;
      case 'blockquote':
        out.push(...blocks(t.tokens, { ...ctx, indent: (ctx.indent || 0) + 480 }).map((p) => p));
        break;
      case 'list':
        out.push(...listBlocks(t, ctx.level || 0, ctx));
        break;
      case 'code':
        for (const line of String(t.text).split('\n')) out.push(new Paragraph({ children: [new TextRun({ text: line, font: 'Consolas', size: 18 })], spacing: { after: 0 } }));
        out.push(new Paragraph({ text: '' }));
        break;
      case 'hr':
        out.push(new Paragraph({ border: { bottom: { color: '999999', space: 1, style: BorderStyle.SINGLE, size: 6 } }, spacing: { before: 200, after: 200 } }));
        break;
      case 'table':
        out.push(tableBlock(t));
        out.push(new Paragraph({ text: '' }));
        break;
      case 'html':
        out.push(new Paragraph({ children: [new TextRun({ text: decode(String(t.text).replace(/<[^>]+>/g, '')) })] }));
        break;
      default:
        if (t.tokens) out.push(...blocks(t.tokens, ctx));
        else if (t.text) out.push(new Paragraph({ children: [new TextRun({ text: decode(t.text) })] }));
    }
  }
  return out;
}

function listBlocks(list, level, ctx) {
  const out = [];
  const ref = list.ordered ? 'numbers' : 'bullets';
  for (const item of list.items) {
    const inlineParts = [];
    const nested = [];
    for (const sub of item.tokens || []) {
      if (sub.type === 'list') nested.push(sub);
      else if (sub.type === 'text' || sub.type === 'paragraph') inlineParts.push(...(sub.tokens && sub.tokens.length ? sub.tokens : [{ type: 'text', text: sub.text }]), { type: 'br' });
      else nested.push(sub);
    }
    if (inlineParts.length && inlineParts[inlineParts.length - 1].type === 'br') inlineParts.pop();
    out.push(new Paragraph({ children: inlineRuns(inlineParts), numbering: { reference: ref, level: Math.min(level, 3) }, spacing: { after: 100 } }));
    for (const n of nested) {
      if (n.type === 'list') out.push(...listBlocks(n, level + 1, ctx));
      else out.push(...blocks([n], { ...ctx, indent: 720 * (level + 1) }));
    }
  }
  return out;
}

function tableBlock(t) {
  const makeRow = (cells, header) => new TableRow({
    tableHeader: header,
    children: cells.map((c) => new TableCell({
      children: [new Paragraph({ children: inlineRuns(c.tokens, header ? { bold: true } : {}) })],
      shading: header ? { fill: 'EEEEEE' } : undefined,
    })),
  });
  const rows = [makeRow(t.header, true), ...t.rows.map((r) => makeRow(r, false))];
  return new Table({ rows, width: { size: 100, type: WidthType.PERCENTAGE } });
}

// ---------------------------------------------------------------- document

function buildDocument(meta, body, relMd) {
  const tokens = new Lexer({ gfm: true }).lex(body);
  const hasH1 = tokens.some((t) => t.type === 'heading' && t.depth === 1);
  const children = [];
  if (!hasH1) children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(String(meta.title))] }));
  children.push(...blocks(tokens, {}));

  const src = meta.source || {};
  const licUrl = (TAXONOMY.license_urls || {})[meta.license] || '';
  const footerLines = [
    `${meta.title}. Published by ${src.name || 'unknown source'}${src.url ? ` (${src.url})` : ''} under ${meta.license}${licUrl ? ` (${licUrl})` : ''}. Text as published; converted to this format by goHeather without changes.`,
    `goHeather did not write this document and holds no rights in it; it is collected in the contract-templates library (${relMd}), see ATTRIBUTION.md. Not legal advice.`,
  ];
  const when = /^\d{4}-\d{2}-\d{2}$/.test(String(meta.last_reviewed)) ? new Date(`${meta.last_reviewed}T00:00:00Z`) : new Date('2026-01-01T00:00:00Z');

  return new Document({
    creator: 'goHeather contract-templates',
    title: String(meta.title),
    description: String(meta.summary || ''),
    created: when,
    modified: when,
    styles: {
      default: { document: { run: { font: 'Calibri', size: 22 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 32, bold: true }, paragraph: { spacing: { before: 240, after: 200 } } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 26, bold: true }, paragraph: { spacing: { before: 240, after: 120 } } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 23, bold: true }, paragraph: { spacing: { before: 200, after: 100 } } },
        { id: 'Heading4', name: 'Heading 4', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 22, bold: true, italics: true }, paragraph: { spacing: { before: 160, after: 80 } } },
      ],
    },
    numbering: {
      config: [
        { reference: 'bullets', levels: [0, 1, 2, 3].map((l) => ({ level: l, format: LevelFormat.BULLET, text: ['•', '◦', '▪', '•'][l], alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720 * (l + 1), hanging: 360 } } } })) },
        { reference: 'numbers', levels: [0, 1, 2, 3].map((l) => ({ level: l, format: [LevelFormat.DECIMAL, LevelFormat.LOWER_LETTER, LevelFormat.LOWER_ROMAN, LevelFormat.DECIMAL][l], text: `%${l + 1}.`, alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720 * (l + 1), hanging: 360 } } } })) },
      ],
    },
    sections: [{
      properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({ children: [new TextRun({ text: footerLines[0], size: 15, color: '666666' })], spacing: { after: 40 } }),
            new Paragraph({ children: [new TextRun({ text: footerLines[1], size: 15, color: '666666' }), new TextRun({ text: '\tPage ', size: 15, color: '666666' }), new TextRun({ children: [PageNumber.CURRENT], size: 15, color: '666666' })], tabStops: [{ type: TabStopType.RIGHT, position: 9360 }] }),
          ],
        }),
      },
      children,
    }],
  });
}

// ---------------------------------------------------------------- main

async function main() {
  const files = walk(TEMPLATES_DIR);
  let generated = 0, kept = 0, missing = 0, failed = 0;
  for (const md of files) {
    const docx = md.replace(/\.md$/, '.docx');
    const parsed = parseFrontmatter(fs.readFileSync(md, 'utf8'));
    if (!parsed) { console.error(`skip (no front-matter): ${rel(md)}`); failed++; continue; }
    const { meta, body } = parsed;
    const isOriginal = meta.source && meta.source.file && path.join(ROOT, String(meta.source.file)) === docx;
    if (CHECK) {
      if (!fs.existsSync(docx)) { console.error(`MISSING ${rel(docx)}`); missing++; }
      continue;
    }
    if (isOriginal) { kept++; continue; }
    if (fs.existsSync(docx) && !FORCE) { kept++; continue; }
    try {
      const doc = buildDocument(meta, body, rel(md));
      const buf = await Packer.toBuffer(doc);
      fs.writeFileSync(docx, buf);
      generated++;
    } catch (e) {
      console.error(`FAILED ${rel(md)}: ${e.message}`);
      failed++;
    }
  }
  if (CHECK) {
    console.log(`${files.length} template(s): ${missing} without a .docx.`);
    process.exit(missing ? 1 : 0);
  }
  console.log(`${files.length} template(s): ${generated} .docx generated, ${kept} kept (publisher originals or already present), ${failed} failed.`);
  process.exit(failed ? 1 : 0);
}

main();
