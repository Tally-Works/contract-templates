#!/usr/bin/env node
/*
 * catalog.js — the librarian for the goHeather contract template library.
 *
 *   node scripts/catalog.js validate            check every template against taxonomy.yaml
 *   node scripts/catalog.js build [--check]     regenerate CATALOG.md, catalog.json, ATTRIBUTION.md, docs/taxonomy.md
 *   node scripts/catalog.js new ...             create (or file an intake document as) a new template
 *
 * `npm run validate`, `npm run build`, `npm run check` and `npm run new -- ...` wrap these.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.resolve(__dirname, '..');
const TEMPLATES_DIR = path.join(ROOT, 'templates');
const TAXONOMY_FILE = path.join(ROOT, 'taxonomy.yaml');
const CATALOG_MD = path.join(ROOT, 'CATALOG.md');
const CATALOG_JSON = path.join(ROOT, 'catalog.json');
const TAXONOMY_MD = path.join(ROOT, 'docs', 'taxonomy.md');
const ATTRIBUTION_MD = path.join(ROOT, 'ATTRIBUTION.md');

const REQUIRED_FIELDS = [
  'title', 'jurisdiction', 'category', 'subcategory', 'type', 'parties', 'tags',
  'language', 'source', 'license', 'status', 'version', 'last_reviewed',
];
const SEGMENT_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const JURISDICTION_RE = /^[A-Z]{2,4}(?:-[A-Z0-9]{1,3})?$/;
const SUBJURIS_SEGMENT_RE = /^[a-z]{2,4}-[a-z0-9]{1,3}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const SEMVER_RE = /^\d+\.\d+\.\d+$/;
const LANG_RE = /^[a-z]{2}(?:-[A-Z]{2})?$/;

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

function loadTaxonomy() {
  return yaml.load(fs.readFileSync(TAXONOMY_FILE, 'utf8'));
}

function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join('/');
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'README.md') out.push(p);
  }
  return out.sort();
}

function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?([\s\S]*)$/);
  if (!m) return null;
  let meta;
  try {
    meta = yaml.load(m[1]) || {};
  } catch (e) {
    return { error: `front-matter is not valid YAML: ${e.message.split('\n')[0]}` };
  }
  return { meta, body: m[2] };
}

function splitJurisdiction(j) {
  const [country, sub] = String(j || '').split('-');
  return { country: country.toLowerCase(), sub: sub ? sub.toLowerCase() : null, full: String(j || '').toLowerCase() };
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseArgs(argv) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) out[key] = true;
      else { out[key] = next; i++; }
    } else {
      out._.push(a);
    }
  }
  return out;
}

function asList(v) {
  if (Array.isArray(v)) return v;
  if (typeof v === 'string') return v.split(',').map((s) => s.trim()).filter(Boolean);
  return [];
}

// ---------------------------------------------------------------------------
// validate
// ---------------------------------------------------------------------------

function validateTemplate(file, taxonomy) {
  const errors = [];
  const warnings = [];
  const relPath = rel(file);
  const text = fs.readFileSync(file, 'utf8');
  const parsed = parseFrontmatter(text);

  if (!parsed) {
    errors.push('missing YAML front-matter block (file must start with ---)');
    return { relPath, meta: null, errors, warnings };
  }
  if (parsed.error) {
    errors.push(parsed.error);
    return { relPath, meta: null, errors, warnings };
  }
  const { meta, body } = parsed;

  for (const f of REQUIRED_FIELDS) {
    if (meta[f] === undefined || meta[f] === null || meta[f] === '') errors.push(`missing required field "${f}"`);
  }

  // jurisdiction
  const jur = String(meta.jurisdiction || '');
  const j = splitJurisdiction(jur);
  if (jur && !JURISDICTION_RE.test(jur)) errors.push(`jurisdiction "${jur}" must look like US, US-CA, CA-ON, EU or INTL (upper case)`);
  if (jur && !taxonomy.jurisdictions[j.country]) errors.push(`jurisdiction country "${j.country}" is not in taxonomy.yaml`);

  // category / subcategory
  const cat = taxonomy.categories[meta.category];
  if (meta.category && !cat) errors.push(`category "${meta.category}" is not in taxonomy.yaml`);
  if (cat && meta.subcategory && !cat.subcategories[meta.subcategory]) {
    errors.push(`subcategory "${meta.subcategory}" is not under category "${meta.category}" in taxonomy.yaml`);
  }

  // enumerations
  if (meta.type && !taxonomy.types[meta.type]) errors.push(`type "${meta.type}" is not one of: ${Object.keys(taxonomy.types).join(', ')}`);
  if (meta.status && !taxonomy.statuses[meta.status]) errors.push(`status "${meta.status}" is not one of: ${Object.keys(taxonomy.statuses).join(', ')}`);
  if (meta.license && !taxonomy.licenses[meta.license]) errors.push(`license "${meta.license}" is not one of: ${Object.keys(taxonomy.licenses).join(', ')}`);
  if (meta.category === 'clauses' && meta.type && meta.type !== 'clause') errors.push('files under the clauses category must have type "clause"');

  // lists
  for (const f of ['parties', 'tags']) {
    const v = meta[f];
    if (v === undefined) continue;
    if (!Array.isArray(v) || v.length === 0) errors.push(`"${f}" must be a non-empty list`);
    else for (const item of v) if (!SEGMENT_RE.test(String(item))) errors.push(`${f} entry "${item}" must be kebab-case`);
  }
  if (Array.isArray(meta.tags) && meta.tags.length > 12) warnings.push(`${meta.tags.length} tags; keep it to the 10 most useful`);

  // scalars
  if (meta.language && !LANG_RE.test(String(meta.language))) errors.push(`language "${meta.language}" must be an ISO 639-1 code such as en`);
  if (meta.version && !SEMVER_RE.test(String(meta.version))) errors.push(`version "${meta.version}" must be MAJOR.MINOR.PATCH`);
  if (meta.last_reviewed && !DATE_RE.test(String(meta.last_reviewed))) errors.push(`last_reviewed "${meta.last_reviewed}" must be YYYY-MM-DD (quote it if YAML turns it into a date)`);
  if (meta.variant !== undefined && !SEGMENT_RE.test(String(meta.variant))) errors.push(`variant "${meta.variant}" must be kebab-case`);
  if (['reviewed', 'approved'].includes(meta.status) && !meta.reviewed_by) errors.push(`status "${meta.status}" requires reviewed_by`);
  if (!meta.summary) warnings.push('no summary; the catalog entry will be blank');

  // source
  if (meta.source !== undefined) {
    if (typeof meta.source !== 'object' || Array.isArray(meta.source)) errors.push('"source" must be a mapping with at least "name"');
    else {
      if (!meta.source.name) errors.push('source.name is required');
      if (meta.source.retrieved && !DATE_RE.test(String(meta.source.retrieved))) errors.push('source.retrieved must be YYYY-MM-DD');
      if (meta.source.url && !/^https?:\/\//.test(String(meta.source.url))) errors.push('source.url must start with http:// or https://');
      if (meta.source.file) {
        const src = path.join(ROOT, String(meta.source.file));
        if (!fs.existsSync(src)) errors.push(`source.file "${meta.source.file}" does not exist`);
        else if (!String(meta.source.file).startsWith('sources/')) errors.push('source.file must live under sources/');
      }
      const inHouse = meta.source.name && String(meta.source.name).toLowerCase() === 'goheather';
      if (!inHouse && !meta.source.url) errors.push('third-party source requires source.url (where the original was published)');
      if (!inHouse && !meta.source.retrieved) errors.push('third-party source requires source.retrieved (date the original was downloaded)');
      if (meta.license === 'Permission-Granted' && !(meta.source.notes && String(meta.source.notes).trim())) {
        errors.push('license Permission-Granted requires source.notes quoting or linking the written permission');
      }
      if (inHouse && meta.license && meta.license !== 'CC-BY-4.0') errors.push('goHeather-drafted templates are released under CC-BY-4.0');
    }
  }

  // path vs metadata
  const parts = relPath.split('/'); // templates / country / category / subcategory / file
  if (parts.length !== 5) {
    errors.push(`must be exactly templates/<country>/<category>/<subcategory>/<file>.md (depth is ${parts.length - 1})`);
  } else {
    const [, dirCountry, dirCat, dirSub, filename] = parts;
    if (jur && dirCountry !== j.country) errors.push(`folder "${dirCountry}" does not match jurisdiction "${jur}" (expected templates/${j.country}/...)`);
    if (meta.category && dirCat !== meta.category) errors.push(`folder "${dirCat}" does not match category "${meta.category}"`);
    if (meta.subcategory && dirSub !== meta.subcategory) errors.push(`folder "${dirSub}" does not match subcategory "${meta.subcategory}"`);

    const base = filename.replace(/\.md$/, '');
    const segments = base.split('--');
    for (const s of segments) if (!SEGMENT_RE.test(s)) errors.push(`filename segment "${s}" must be kebab-case (segments are separated by --)`);
    if (segments.length > 3) errors.push('filename may have at most three segments: slug--sub-jurisdiction--variant');

    const tail = segments.slice(1);
    const jurisSeg = tail.find((s) => SUBJURIS_SEGMENT_RE.test(s));
    const variantSeg = tail.find((s) => !SUBJURIS_SEGMENT_RE.test(s));

    if (j.sub) {
      if (segments[1] !== j.full) errors.push(`jurisdiction ${jur} requires the filename to be "${segments[0]}--${j.full}[--variant].md"`);
    } else if (jurisSeg) {
      errors.push(`filename segment "${jurisSeg}" looks like a sub-jurisdiction but jurisdiction is "${jur}"`);
    }

    if (meta.variant && variantSeg !== String(meta.variant)) errors.push(`variant "${meta.variant}" must be the last filename segment`);
    if (!meta.variant && variantSeg) errors.push(`filename has variant segment "${variantSeg}" but front-matter has no variant`);
    if (meta.variant && segments[segments.length - 1] !== String(meta.variant)) errors.push('variant must be the final filename segment');

    if (meta.title) {
      const expected = slugify(meta.title);
      if (segments[0] !== expected) warnings.push(`slug "${segments[0]}" differs from slugified title "${expected}"`);
    }
  }

  // related / supersedes
  for (const f of ['supersedes']) {
    if (meta[f] && !fs.existsSync(path.join(ROOT, String(meta[f])))) errors.push(`${f} "${meta[f]}" does not exist`);
  }
  if (meta.related) {
    for (const r of asList(meta.related)) if (!fs.existsSync(path.join(ROOT, String(r)))) errors.push(`related "${r}" does not exist`);
  }

  // body
  if (!body || body.trim().length < 200) errors.push('body is empty or too short to be a template (under 200 characters)');
  if (body && !/^#\s+\S/m.test(body)) warnings.push('body has no top-level "# Title" heading');

  return { relPath, meta, body, errors, warnings };
}

function validateAll(taxonomy) {
  const files = walk(TEMPLATES_DIR);
  const results = files.map((f) => validateTemplate(f, taxonomy));

  // stray non-markdown files under templates/
  const strays = [];
  (function scan(dir) {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) scan(p);
      else if (!e.name.endsWith('.md')) strays.push(rel(p));
    }
  })(TEMPLATES_DIR);
  for (const s of strays) results.push({ relPath: s, meta: null, errors: ['only .md files belong under templates/ (originals go under sources/)'], warnings: [] });

  // duplicate titles in a folder
  const seen = new Map();
  for (const r of results) {
    if (!r.meta || !r.meta.title) continue;
    const key = `${path.dirname(r.relPath)}|${String(r.meta.title).toLowerCase()}|${r.meta.jurisdiction}|${r.meta.variant || ''}`;
    if (seen.has(key)) r.errors.push(`duplicate of ${seen.get(key)} (same title, jurisdiction and variant)`);
    else seen.set(key, r.relPath);
  }
  return results;
}

function report(results) {
  let errorCount = 0;
  let warnCount = 0;
  for (const r of results) {
    if (r.errors.length === 0 && r.warnings.length === 0) continue;
    console.log(r.relPath);
    for (const e of r.errors) { console.log(`  ERROR    ${e}`); errorCount++; }
    for (const w of r.warnings) { console.log(`  warning  ${w}`); warnCount++; }
  }
  const n = results.filter((r) => r.meta).length;
  console.log(`\n${n} template(s) checked: ${errorCount} error(s), ${warnCount} warning(s).`);
  return errorCount === 0;
}

// ---------------------------------------------------------------------------
// build
// ---------------------------------------------------------------------------

function buildCatalogJson(results, taxonomy) {
  const entries = results
    .filter((r) => r.meta && r.errors.length === 0)
    .map((r) => {
      const m = r.meta;
      return {
        path: r.relPath,
        title: m.title,
        jurisdiction: m.jurisdiction,
        category: m.category,
        subcategory: m.subcategory,
        type: m.type,
        variant: m.variant || null,
        parties: m.parties,
        tags: m.tags,
        language: m.language,
        governing_law: m.governing_law || null,
        license: m.license,
        status: m.status,
        version: String(m.version),
        last_reviewed: String(m.last_reviewed),
        summary: m.summary || null,
        source: { name: m.source.name, url: m.source.url || null, file: m.source.file || null },
      };
    });
  return JSON.stringify({ generated_from: 'taxonomy.yaml + templates/**', count: entries.length, templates: entries }, null, 2) + '\n';
}

function buildCatalogMd(results, taxonomy) {
  const entries = results.filter((r) => r.meta && r.errors.length === 0);
  const lines = [];
  lines.push('# Catalog');
  lines.push('');
  lines.push('<!-- GENERATED by scripts/catalog.js from the templates\' front-matter. Do not edit by hand: run `npm run build`. -->');
  lines.push('');
  lines.push(`${entries.length} template(s). Status key: draft = unreviewed, reviewed = checked, approved = recommended, deprecated = reference only.`);
  lines.push('');

  // summary by jurisdiction
  lines.push('## By jurisdiction');
  lines.push('');
  lines.push('| Jurisdiction | Templates |');
  lines.push('| --- | ---: |');
  for (const [code, info] of Object.entries(taxonomy.jurisdictions)) {
    const n = entries.filter((e) => splitJurisdiction(e.meta.jurisdiction).country === code).length;
    lines.push(`| ${info.name} (\`${code}\`) | ${n} |`);
  }
  lines.push('');

  lines.push('## By category');
  lines.push('');
  lines.push('| Category | Templates |');
  lines.push('| --- | ---: |');
  for (const [key, cat] of Object.entries(taxonomy.categories)) {
    const n = entries.filter((e) => e.meta.category === key).length;
    lines.push(`| ${cat.name} (\`${key}\`) | ${n} |`);
  }
  lines.push('');

  // full listing
  lines.push('## All templates');
  lines.push('');
  for (const [code, info] of Object.entries(taxonomy.jurisdictions)) {
    const inJur = entries.filter((e) => splitJurisdiction(e.meta.jurisdiction).country === code);
    if (inJur.length === 0) continue;
    lines.push(`### ${info.name} (\`${code}\`)`);
    lines.push('');
    for (const [catKey, cat] of Object.entries(taxonomy.categories)) {
      const inCat = inJur.filter((e) => e.meta.category === catKey);
      if (inCat.length === 0) continue;
      lines.push(`#### ${cat.name}`);
      lines.push('');
      for (const [subKey, subDesc] of Object.entries(cat.subcategories)) {
        const inSub = inCat.filter((e) => e.meta.subcategory === subKey);
        if (inSub.length === 0) continue;
        lines.push(`**${subKey}** — ${subDesc}`);
        lines.push('');
        lines.push('| Template | Jurisdiction | Type | Status | Licence | Tags |');
        lines.push('| --- | --- | --- | --- | --- | --- |');
        for (const e of inSub) {
          const m = e.meta;
          const title = m.variant ? `${m.title} (${m.variant})` : m.title;
          lines.push(`| [${title}](${e.relPath}) | ${m.jurisdiction} | ${m.type} | ${m.status} | ${m.license} | ${(m.tags || []).join(', ')} |`);
        }
        lines.push('');
      }
    }
  }
  return lines.join('\n');
}

function buildTaxonomyMd(taxonomy) {
  const L = [];
  L.push('# Taxonomy');
  L.push('');
  L.push('<!-- GENERATED by scripts/catalog.js from taxonomy.yaml. Edit taxonomy.yaml, then run `npm run build`. -->');
  L.push('');
  L.push('Every template lives at `templates/<jurisdiction>/<category>/<subcategory>/<file>.md`. This page lists every allowed value. To propose a new category or subcategory, open a pull request that edits `taxonomy.yaml`.');
  L.push('');
  L.push('## Jurisdictions');
  L.push('');
  L.push('| Folder | Jurisdiction | Notes |');
  L.push('| --- | --- | --- |');
  for (const [code, info] of Object.entries(taxonomy.jurisdictions)) L.push(`| \`${code}/\` | ${info.name} | ${info.note || ''} |`);
  L.push('');
  L.push('## Categories and subcategories');
  L.push('');
  for (const [key, cat] of Object.entries(taxonomy.categories)) {
    L.push(`### ${cat.name} — \`${key}/\``);
    L.push('');
    L.push(cat.description);
    L.push('');
    L.push('| Subcategory | What goes here |');
    L.push('| --- | --- |');
    for (const [sub, desc] of Object.entries(cat.subcategories)) L.push(`| \`${sub}/\` | ${desc} |`);
    L.push('');
  }
  L.push('## Document types');
  L.push('');
  L.push('| `type` | Meaning |');
  L.push('| --- | --- |');
  for (const [k, v] of Object.entries(taxonomy.types)) L.push(`| \`${k}\` | ${v} |`);
  L.push('');
  L.push('## Statuses');
  L.push('');
  L.push('| `status` | Meaning |');
  L.push('| --- | --- |');
  for (const [k, v] of Object.entries(taxonomy.statuses)) L.push(`| \`${k}\` | ${v} |`);
  L.push('');
  L.push('## Accepted licences');
  L.push('');
  L.push('| `license` | Meaning |');
  L.push('| --- | --- |');
  for (const [k, v] of Object.entries(taxonomy.licenses)) L.push(`| \`${k}\` | ${v} |`);
  L.push('');
  return L.join('\n');
}

function buildAttributionMd(results, taxonomy) {
  const entries = results.filter((r) => r.meta && r.errors.length === 0);
  const bySource = new Map();
  for (const e of entries) {
    const name = String(e.meta.source.name);
    const key = name.toLowerCase();
    if (!bySource.has(key)) bySource.set(key, { name, url: e.meta.source.url || (key === 'goheather' ? 'https://goheather.io' : null), templates: [] });
    const s = bySource.get(key);
    if (!s.url && e.meta.source.url) s.url = e.meta.source.url;
    s.templates.push(e);
  }
  const sources = [...bySource.values()].sort((a, b) => {
    if (a.name.toLowerCase() === 'goheather') return 1;
    if (b.name.toLowerCase() === 'goheather') return -1;
    return a.name.localeCompare(b.name);
  });

  const L = [];
  L.push('# Attribution');
  L.push('');
  L.push('<!-- GENERATED by scripts/catalog.js from each template\'s source and license fields. Do not edit by hand: run `npm run build`. -->');
  L.push('');
  L.push('Every template in this library was published by its original author under a licence that allows redistribution and adaptation. This page credits each of them. If you are an author and the credit, licence or link is wrong, [open an issue](../../issues) and it will be fixed.');
  L.push('');
  L.push('Where a template has been changed from the original, the change is described in the template\'s `source.notes` field.');
  L.push('');
  for (const s of sources) {
    L.push(`## ${s.url ? `[${s.name}](${s.url})` : s.name}`);
    L.push('');
    L.push('| Template | Licence | Original | Retrieved |');
    L.push('| --- | --- | --- | --- |');
    for (const e of s.templates) {
      const m = e.meta;
      const title = m.variant ? `${m.title} (${m.variant}, ${m.jurisdiction})` : `${m.title} (${m.jurisdiction})`;
      const lic = taxonomy.licenses[m.license] ? `${m.license}` : m.license;
      const original = m.source.url ? `[link](${m.source.url})` : (m.source.name.toLowerCase() === 'goheather' ? 'drafted in-house' : '');
      L.push(`| [${title}](${e.relPath}) | ${lic} | ${original} | ${m.source.retrieved || ''} |`);
    }
    L.push('');
  }
  L.push('## Licence texts');
  L.push('');
  L.push('| Licence | Terms |');
  L.push('| --- | --- |');
  L.push('| CC0-1.0 | https://creativecommons.org/publicdomain/zero/1.0/ |');
  L.push('| CC-BY-4.0 | https://creativecommons.org/licenses/by/4.0/ |');
  L.push('| MIT | https://opensource.org/license/mit |');
  L.push('| Apache-2.0 | https://www.apache.org/licenses/LICENSE-2.0 |');
  L.push('| Public-Domain | No licence; the work is not subject to copyright. |');
  L.push('| Permission-Granted | Written permission from the author, recorded in the template\'s `source.notes`. |');
  L.push('');
  return L.join('\n');
}

function build(taxonomy, check) {
  const results = validateAll(taxonomy);
  const ok = report(results);
  if (!ok) {
    console.error('\nFix the errors above before building the catalog.');
    process.exit(1);
  }
  const outputs = [
    [CATALOG_MD, buildCatalogMd(results, taxonomy)],
    [CATALOG_JSON, buildCatalogJson(results, taxonomy)],
    [TAXONOMY_MD, buildTaxonomyMd(taxonomy)],
    [ATTRIBUTION_MD, buildAttributionMd(results, taxonomy)],
  ];
  let stale = false;
  for (const [file, content] of outputs) {
    const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n') : null;
    if (current === content) continue;
    if (check) {
      console.error(`${rel(file)} is out of date. Run \`npm run build\` and commit the result.`);
      stale = true;
    } else {
      fs.writeFileSync(file, content);
      console.log(`wrote ${rel(file)}`);
    }
  }
  if (check && stale) process.exit(1);
  if (check) console.log('Generated files are up to date.');
}

// ---------------------------------------------------------------------------
// new
// ---------------------------------------------------------------------------

function usageNew() {
  console.log(`
Create a new template in the right folder with a complete front-matter block.

  npm run new -- --title "Executive Employment Agreement" --jurisdiction US-CA \\
                 --category employment --subcategory executive [options]

Required
  --title          Document title (Title Case)
  --jurisdiction   US, US-CA, CA, CA-ON, GB, EU, INTL ...
  --category       key from taxonomy.yaml
  --subcategory    key under that category

Optional
  --type           agreement | letter | policy | notice | form | clause | checklist | schedule (default: agreement)
  --variant        kebab-case variant suffix, e.g. employer-favorable
  --parties        comma list, e.g. employer,executive
  --tags           comma list
  --language       ISO 639-1 (default: en)
  --governing-law  e.g. "State of Delaware"
  --license        key from taxonomy.yaml (default: CC-BY-4.0)
  --source-name    who published the original (default: goHeather)
  --source-url     where it came from
  --source-file    path under sources/ to the original docx/pdf
  --summary        one-paragraph plain-English description
  --from <file>    use this Markdown/text file as the body and delete it (for filing from _intake/)
  --dry-run        print what would be created without writing
`);
}

function newTemplate(args, taxonomy) {
  const missing = ['title', 'jurisdiction', 'category', 'subcategory'].filter((k) => !args[k]);
  if (args.help || missing.length) {
    if (missing.length) console.error(`Missing: ${missing.map((m) => '--' + m).join(', ')}`);
    usageNew();
    process.exit(missing.length ? 1 : 0);
  }
  const jurisdiction = String(args.jurisdiction).toUpperCase();
  const j = splitJurisdiction(jurisdiction);
  if (!JURISDICTION_RE.test(jurisdiction) || !taxonomy.jurisdictions[j.country]) {
    console.error(`Unknown jurisdiction "${jurisdiction}". Countries: ${Object.keys(taxonomy.jurisdictions).join(', ')}`);
    process.exit(1);
  }
  const cat = taxonomy.categories[args.category];
  if (!cat) {
    console.error(`Unknown category "${args.category}". Categories: ${Object.keys(taxonomy.categories).join(', ')}`);
    process.exit(1);
  }
  if (!cat.subcategories[args.subcategory]) {
    console.error(`Unknown subcategory "${args.subcategory}" under ${args.category}. Options: ${Object.keys(cat.subcategories).join(', ')}`);
    process.exit(1);
  }
  const type = args.type || (args.category === 'clauses' ? 'clause' : 'agreement');
  if (!taxonomy.types[type]) {
    console.error(`Unknown type "${type}". Types: ${Object.keys(taxonomy.types).join(', ')}`);
    process.exit(1);
  }
  const license = args.license || 'CC-BY-4.0';
  if (!taxonomy.licenses[license]) {
    console.error(`Unknown license "${license}". Licences: ${Object.keys(taxonomy.licenses).join(', ')}`);
    process.exit(1);
  }
  const variant = args.variant ? slugify(args.variant) : null;

  const segments = [slugify(args.title)];
  if (j.sub) segments.push(j.full);
  if (variant) segments.push(variant);
  const filename = segments.join('--') + '.md';
  const dir = path.join(TEMPLATES_DIR, j.country, args.category, args.subcategory);
  const target = path.join(dir, filename);

  if (fs.existsSync(target)) {
    console.error(`${rel(target)} already exists. Use --variant to distinguish it, or edit the existing file.`);
    process.exit(1);
  }

  let body;
  if (args.from) {
    const from = path.resolve(ROOT, String(args.from));
    if (!fs.existsSync(from)) { console.error(`--from file not found: ${args.from}`); process.exit(1); }
    body = fs.readFileSync(from, 'utf8');
    const existing = parseFrontmatter(body);
    if (existing && !existing.error) body = existing.body; // strip any front-matter it already had
    if (!/^#\s+\S/m.test(body)) body = `# ${args.title}\n\n${body}`;
  } else {
    body = [
      `# ${args.title}`,
      '',
      '> **Drafting note:** Replace every `[BRACKETED]` placeholder. Delete drafting notes before use.',
      '',
      'This [AGREEMENT] is made on [DATE] between:',
      '',
      '1. **[PARTY A NAME]**, [a corporation incorporated under the laws of [JURISDICTION]] with its principal office at [ADDRESS] (the "[Party A]"); and',
      '2. **[PARTY B NAME]**, of [ADDRESS] (the "[Party B]").',
      '',
      '## 1. Definitions',
      '',
      '## 2. [Subject matter]',
      '',
      '## 3. Term and termination',
      '',
      '## 4. General',
      '',
      '**Signed** by the parties on the date first written above.',
      '',
      '| [PARTY A] | [PARTY B] |',
      '| --- | --- |',
      '| Signature: ______________________ | Signature: ______________________ |',
      '| Name: [NAME] | Name: [NAME] |',
      '| Title: [TITLE] | Date: [DATE] |',
      '',
    ].join('\n');
  }

  const meta = {
    title: args.title,
    jurisdiction,
    category: args.category,
    subcategory: args.subcategory,
    type,
  };
  if (variant) meta.variant = variant;
  meta.parties = asList(args.parties).length ? asList(args.parties).map(slugify) : ['party-a', 'party-b'];
  meta.tags = asList(args.tags).map(slugify);
  meta.language = args.language || 'en';
  if (args['governing-law']) meta.governing_law = args['governing-law'];
  meta.source = { name: args['source-name'] || 'goHeather' };
  if (args['source-url']) meta.source.url = args['source-url'];
  if (args['source-file']) meta.source.file = args['source-file'];
  if (args['source-url'] || args['source-file']) meta.source.retrieved = today();
  meta.source.notes = '';
  meta.license = license;
  meta.status = 'draft';
  meta.version = '1.0.0';
  meta.last_reviewed = today();
  meta.reviewed_by = '';
  meta.summary = args.summary || '';

  const front = yaml.dump(meta, { lineWidth: 120, quotingType: '"', forceQuotes: false, noRefs: true });
  const content = `---\n${front}---\n\n${body.replace(/\s*$/, '')}\n`;

  if (args['dry-run']) {
    console.log(`would create ${rel(target)}\n`);
    console.log(content);
    return;
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(target, content);
  if (args.from) fs.unlinkSync(path.resolve(ROOT, String(args.from)));
  console.log(`created ${rel(target)}`);
  if (!meta.tags.length) console.log('  next: add tags, a summary, and the source details, then run `npm run validate`');
  else console.log('  next: fill in the body and source.notes, then run `npm run validate`');
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

function main() {
  const args = parseArgs(process.argv.slice(2));
  const cmd = args._[0];
  const taxonomy = loadTaxonomy();

  switch (cmd) {
    case 'validate': {
      const ok = report(validateAll(taxonomy));
      process.exit(ok ? 0 : 1);
      break;
    }
    case 'build':
      build(taxonomy, Boolean(args.check));
      break;
    case 'new':
      newTemplate(args, taxonomy);
      break;
    default:
      console.log('usage: node scripts/catalog.js <validate | build [--check] | new ...>');
      process.exit(cmd ? 1 : 0);
  }
}

main();
