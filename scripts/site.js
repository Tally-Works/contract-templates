/*
 * site.js — generated pages for people, crawlers and assistants. Called by catalog.js build; never run by hand.
 *
 *   docs/index.html and docs/templates/<id>.html   a static site (GitHub Pages from /docs) with one page per template,
 *                                                  meta description, canonical URL, schema.org JSON-LD and the full text
 *   docs/sitemap.xml, docs/robots.txt, docs/.nojekyll, docs/llms.txt
 *   llms-full.txt                                  llms.txt plus one line per template, for assistants that ingest one file
 *   templates/<country>/README.md, templates/<country>/<category>/README.md, templates/<country>/<category>/<subcategory>/README.md
 *                                                  an index at every folder someone can land in
 */
'use strict';

const path = require('path');
const { marked } = require('marked');

const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = esc;
const mdCell = (v) => String(v == null ? '' : v).replace(/\r?\n/g, ' ').replace(/\|/g, '\\|').trim();

const CSS = `:root{color-scheme:light dark;--fg:#1b1b1b;--muted:#5f6368;--bg:#fff;--line:#e3e3e3;--link:#0b57d0}@media(prefers-color-scheme:dark){:root{--fg:#e8e8e8;--muted:#a0a0a0;--bg:#121212;--line:#2a2a2a;--link:#8ab4f8}}
body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}a{color:var(--link)}main,header,footer{max-width:60rem;margin:0 auto;padding:0 1rem}
header{border-bottom:1px solid var(--line);padding:.75rem 1rem}header nav a{margin-right:.75rem}h1{font-size:1.7rem;line-height:1.25;margin:1.25rem 0 .5rem}h2{font-size:1.25rem;margin-top:2rem}h3{font-size:1.05rem}
dl.meta{display:grid;grid-template-columns:max-content 1fr;gap:.25rem 1rem;font-size:.95rem;margin:1rem 0}dl.meta dt{color:var(--muted)}dl.meta dd{margin:0}
.actions a{display:inline-block;margin:.25rem .75rem .25rem 0}.notice{color:var(--muted);font-size:.9rem;border-top:1px solid var(--line);padding-top:.75rem;margin-top:2rem}
article{border-top:1px solid var(--line);margin-top:1.5rem;padding-top:1rem}article img{max-width:100%}article table{border-collapse:collapse}article td,article th{border:1px solid var(--line);padding:.25rem .5rem;vertical-align:top}
ul.list{padding-left:1.1rem}ul.list li{margin:.35rem 0}.sum{color:var(--muted);font-size:.93rem}footer{color:var(--muted);font-size:.9rem;padding:2rem 1rem}`;

function page({ title, description, canonical, jsonLd, crumbs, body, siteBase }) {
  const nav = crumbs.map(([t, h]) => (h ? `<a href="${attr(h)}">${esc(t)}</a>` : `<span>${esc(t)}</span>`)).join(' › ');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${attr(description)}">
<link rel="canonical" href="${attr(canonical)}">
<meta name="robots" content="index, follow">
<meta property="og:type" content="article">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(description)}">
<meta property="og:url" content="${attr(canonical)}">
<link rel="alternate" type="text/plain" href="${attr(siteBase)}llms.txt" title="llms.txt">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<style>${CSS}</style>
</head>
<body>
<header><nav>${nav}</nav></header>
<main>
${body}
</main>
<footer>Part of the <a href="${attr(siteBase)}">contract-templates</a> library maintained by <a href="https://goheather.io/">goHeather</a>. Each template is reproduced under its publisher's licence; see <a href="https://github.com/Tally-Works/contract-templates/blob/main/ATTRIBUTION.md">ATTRIBUTION.md</a>. These are general forms, not legal advice.</footer>
</body>
</html>
`;
}

function buildAll(ctx) {
  const { results, taxonomy, ROOT, RAW_BASE, BLOB_BASE, SITE_BASE, splitJurisdiction, llmsTxt } = ctx;
  const entries = results.filter((r) => r.meta && r.errors.length === 0);
  const out = [];
  const idOf = (e) => e.relPath.replace(/^templates\//, '').replace(/\.md$/, '');
  const pageUrl = (e) => `${SITE_BASE}templates/${idOf(e)}.html`;
  const jurName = (code) => (taxonomy.jurisdictions[code] || {}).name || code.toUpperCase();
  const licUrl = (k) => (taxonomy.license_urls || {})[k] || '';
  const fullJur = (e) => { const { country, sub } = splitJurisdiction(e.meta.jurisdiction); return sub ? `${jurName(country)} (${e.meta.jurisdiction})` : jurName(country); };

  // ---- one HTML page per template ------------------------------------------------------------------------------
  for (const e of entries) {
    const m = e.meta; const src = m.source || {}; const cat = taxonomy.categories[m.category] || { name: m.category, subcategories: {} };
    const { country } = splitJurisdiction(m.jurisdiction);
    const title = `${m.title}${m.variant ? ` (${String(m.variant).replace(/-/g, ' ')})` : ''}`;
    const description = String(m.summary || `${title}, a ${m.type} template for ${fullJur(e)}.`).replace(/\s+/g, ' ').trim().slice(0, 300);
    const docxRaw = RAW_BASE + e.relPath.replace(/\.md$/, '.docx');
    const docxBlob = BLOB_BASE + e.relPath.replace(/\.md$/, '.docx');
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'DigitalDocument',
      name: title,
      headline: title,
      description,
      url: pageUrl(e),
      inLanguage: m.language || 'en',
      license: licUrl(m.license) || m.license,
      author: { '@type': 'Organization', name: src.name, ...(src.url ? { url: src.url } : {}) },
      isBasedOn: src.url || undefined,
      keywords: (m.tags || []).join(', '),
      about: `${cat.name}: ${m.subcategory}`,
      genre: m.type,
      dateModified: String(m.last_reviewed || ''),
      encodingFormat: ['text/markdown', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      sameAs: [RAW_BASE + e.relPath, docxBlob],
      isPartOf: { '@type': 'Dataset', name: 'Contract Templates', url: SITE_BASE },
      maintainer: { '@type': 'Organization', name: 'goHeather', url: 'https://goheather.io/' },
    };
    const meta = [
      ['Jurisdiction', esc(fullJur(e))],
      ['Category', `${esc(cat.name)} › ${esc(m.subcategory)}`],
      ['Type', esc(m.type)],
      ['Parties', esc((m.parties || []).join(', '))],
      ['Tags', esc((m.tags || []).join(', '))],
      m.governing_law ? ['Governing law', esc(m.governing_law)] : null,
      ['Publisher', src.url ? `<a href="${attr(src.url)}" rel="external">${esc(src.name)}</a>` : esc(src.name)],
      ['Licence', licUrl(m.license) ? `<a href="${attr(licUrl(m.license))}" rel="license">${esc(m.license)}</a>` : esc(m.license)],
      src.attribution ? ['Attribution', esc(src.attribution)] : null,
      ['Status', `${esc(m.status)}${m.reviewed_by ? `, reviewed by ${esc(m.reviewed_by)}` : ''}`],
      ['Retrieved', esc(src.retrieved || '')],
    ].filter(Boolean).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('\n');
    const bodyHtml = marked.parse(e.body || '', { gfm: true, async: false });
    const body = `<h1>${esc(title)}</h1>
<p class="sum">${esc(description)}</p>
<dl class="meta">
${meta}
</dl>
<p class="actions"><a href="${attr(docxRaw)}">Download the Word file</a><a href="${attr(RAW_BASE + e.relPath)}">Markdown (raw)</a><a href="${attr(BLOB_BASE + e.relPath)}">View on GitHub</a>${src.url ? `<a href="${attr(src.url)}" rel="external">Publisher's page</a>` : ''}</p>
<p class="notice">The text below is the document as ${esc(src.name)} published it, under ${esc(m.license)}; ${src.notes ? esc(String(src.notes).replace(/\s+/g, ' ').trim()) : 'see the notes in the Markdown file.'}</p>
<article>
${bodyHtml}
</article>`;
    out.push([path.join(ROOT, 'docs', 'templates', ...idOf(e).split('/')) + '.html', page({
      title: `${title} · ${fullJur(e)} · Contract Templates`, description, canonical: pageUrl(e), jsonLd, siteBase: SITE_BASE,
      crumbs: [['Contract Templates', SITE_BASE], [jurName(country), `${SITE_BASE}#${country}`], [cat.name, `${SITE_BASE}#${country}-${m.category}`], [m.subcategory, null]],
      body,
    })]);
  }

  // ---- index page ----------------------------------------------------------------------------------------------
  const sections = [];
  for (const [code, info] of Object.entries(taxonomy.jurisdictions)) {
    const inJur = entries.filter((e) => splitJurisdiction(e.meta.jurisdiction).country === code);
    if (!inJur.length) continue;
    let s = `<h2 id="${attr(code)}">${esc(info.name)} <span class="sum">(${inJur.length})</span></h2>\n`;
    for (const [catKey, cat] of Object.entries(taxonomy.categories)) {
      const inCat = inJur.filter((e) => e.meta.category === catKey); if (!inCat.length) continue;
      s += `<h3 id="${attr(code)}-${attr(catKey)}">${esc(cat.name)} <span class="sum">(${inCat.length})</span></h3>\n`;
      for (const [subKey, subDesc] of Object.entries(cat.subcategories)) {
        const inSub = inCat.filter((e) => e.meta.subcategory === subKey); if (!inSub.length) continue;
        s += `<p><strong>${esc(subKey)}</strong> <span class="sum">${esc(subDesc)}</span></p>\n<ul class="list">\n`;
        for (const e of inSub) {
          const m = e.meta; const { sub } = splitJurisdiction(m.jurisdiction);
          s += `<li><a href="${attr(pageUrl(e))}">${esc(m.title)}${m.variant ? ` (${esc(String(m.variant).replace(/-/g, ' '))})` : ''}</a>${sub ? ` <span class="sum">${esc(m.jurisdiction)}</span>` : ''} <span class="sum">· ${esc(m.type)} · ${esc(m.source.name)} · ${esc(m.license)}</span>${m.summary ? `<br><span class="sum">${esc(String(m.summary).replace(/\s+/g, ' ').trim())}</span>` : ''}</li>\n`;
        }
        s += '</ul>\n';
      }
    }
    sections.push(s);
  }
  const cats = Object.entries(taxonomy.categories).map(([k, c]) => c.name);
  const indexDescription = `${entries.length} openly licensed contract templates, filed by jurisdiction, category and subcategory: ${cats.slice(0, 8).join(', ').toLowerCase()} and more. Each with its Markdown text, a Word file, the publisher's licence and a JSON catalog.`;
  const indexLd = {
    '@context': 'https://schema.org', '@type': 'Dataset', name: 'Contract Templates', url: SITE_BASE, description: indexDescription,
    keywords: ['contract templates', 'NDA', 'employment agreement', 'SaaS agreement', 'data processing agreement', 'privacy policy', 'terms of service', 'open licence', 'Creative Commons', 'legal templates'],
    isAccessibleForFree: true,
    maintainer: { '@type': 'Organization', name: 'goHeather', url: 'https://goheather.io/' },
    distribution: [
      { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: RAW_BASE + 'catalog.json', name: 'catalog.json' },
      { '@type': 'DataDownload', encodingFormat: 'text/plain', contentUrl: RAW_BASE + 'llms.txt', name: 'llms.txt' },
    ],
    hasPart: entries.slice(0, 50).map((e) => ({ '@type': 'DigitalDocument', name: e.meta.title, url: pageUrl(e) })),
  };
  const indexBody = `<h1>Contract Templates</h1>
<p>${esc(indexDescription)}</p>
<p>Every template is a Markdown file with a Word file beside it, reproduced as its publisher released it under that publisher's own licence and credited in <a href="https://github.com/Tally-Works/contract-templates/blob/main/ATTRIBUTION.md">ATTRIBUTION.md</a>. The library is maintained by <a href="https://goheather.io/">goHeather</a>.</p>
<p class="actions"><a href="https://github.com/Tally-Works/contract-templates">GitHub repository</a><a href="${attr(RAW_BASE)}catalog.json">catalog.json</a><a href="${attr(SITE_BASE)}llms.txt">llms.txt</a><a href="${attr(RAW_BASE)}llms-full.txt">llms-full.txt</a><a href="https://github.com/Tally-Works/contract-templates/blob/main/CATALOG.md">Catalog on GitHub</a></p>
<p class="sum">For assistants and agents: read <a href="${attr(SITE_BASE)}llms.txt">llms.txt</a>, then fetch <a href="${attr(RAW_BASE)}catalog.json">catalog.json</a> (one entry per template with raw URLs, summary, heading outline, placeholders, licence and source) or any file at ${esc(RAW_BASE)}&lt;path&gt;.</p>
<h2>Contents</h2>
<ul class="list">
${Object.entries(taxonomy.jurisdictions).filter(([code]) => entries.some((e) => splitJurisdiction(e.meta.jurisdiction).country === code)).map(([code, info]) => `<li><a href="#${attr(code)}">${esc(info.name)}</a> (${entries.filter((e) => splitJurisdiction(e.meta.jurisdiction).country === code).length})</li>`).join('\n')}
</ul>
${sections.join('\n')}`;
  out.push([path.join(ROOT, 'docs', 'index.html'), page({ title: 'Contract Templates: open, openly licensed, filed by jurisdiction and category', description: indexDescription, canonical: SITE_BASE, jsonLd: indexLd, siteBase: SITE_BASE, crumbs: [['Contract Templates', null]], body: indexBody })]);

  // ---- sitemap, robots, nojekyll, llms.txt copy ---------------------------------------------------------------
  const urls = [{ loc: SITE_BASE, lastmod: entries.map((e) => String(e.meta.last_reviewed)).sort().pop() }].concat(entries.map((e) => ({ loc: pageUrl(e), lastmod: String(e.meta.last_reviewed) })));
  out.push([path.join(ROOT, 'docs', 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${esc(u.loc)}</loc>${/^\d{4}-\d{2}-\d{2}$/.test(u.lastmod || '') ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`]);
  out.push([path.join(ROOT, 'docs', 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_BASE}sitemap.xml\n`]);
  out.push([path.join(ROOT, 'docs', '.nojekyll'), '']);
  out.push([path.join(ROOT, 'docs', 'llms.txt'), llmsTxt]);

  // ---- llms-full.txt --------------------------------------------------------------------------------------------
  const L = [llmsTxt.trimEnd(), '', '## Every template', '', 'One line per template: title, jurisdiction, type, publisher, licence, then the summary, then the raw Markdown URL (replace .md with .docx for the Word file).', ''];
  for (const [code, info] of Object.entries(taxonomy.jurisdictions)) {
    const inJur = entries.filter((e) => splitJurisdiction(e.meta.jurisdiction).country === code); if (!inJur.length) continue;
    L.push(`### ${info.name} (${code})`, '');
    for (const [catKey, cat] of Object.entries(taxonomy.categories)) {
      const inCat = inJur.filter((e) => e.meta.category === catKey); if (!inCat.length) continue;
      L.push(`#### ${cat.name} (${catKey})`, '');
      for (const [subKey] of Object.entries(cat.subcategories)) {
        const inSub = inCat.filter((e) => e.meta.subcategory === subKey); if (!inSub.length) continue;
        L.push(`${subKey}:`);
        for (const e of inSub) {
          const m = e.meta;
          L.push(`- ${m.title}${m.variant ? ` (${m.variant})` : ''} | ${m.jurisdiction} | ${m.type} | ${m.source.name} | ${m.license}${m.governing_law ? ` | governing law: ${m.governing_law}` : ''}\n  ${String(m.summary || '').replace(/\s+/g, ' ').trim()}\n  ${RAW_BASE + e.relPath}`);
        }
        L.push('');
      }
    }
  }
  out.push([path.join(ROOT, 'llms-full.txt'), L.join('\n') + '\n']);

  // ---- folder READMEs under templates/ ---------------------------------------------------------------------------
  const gen = '<!-- GENERATED by scripts/catalog.js from the templates\' front-matter. Do not edit by hand: run `npm run build`. -->';
  for (const [code, info] of Object.entries(taxonomy.jurisdictions)) {
    const inJur = entries.filter((e) => splitJurisdiction(e.meta.jurisdiction).country === code); if (!inJur.length) continue;
    const J = [`# ${info.name}`, '', gen, '', `${inJur.length} templates. Each folder below is a category; inside, each subcategory folder holds the templates with a Markdown file and a Word file of the same name.`, '', '| Category | Templates |', '| --- | ---: |'];
    for (const [catKey, cat] of Object.entries(taxonomy.categories)) {
      const inCat = inJur.filter((e) => e.meta.category === catKey); if (!inCat.length) continue;
      J.push(`| [${cat.name}](${catKey}/) | ${inCat.length} |`);
      const C = [`# ${info.name}: ${cat.name}`, '', gen, '', cat.description, '', '| Subcategory | Templates |', '| --- | ---: |'];
      for (const [subKey, subDesc] of Object.entries(cat.subcategories)) {
        const inSub = inCat.filter((e) => e.meta.subcategory === subKey); if (!inSub.length) continue;
        C.push(`| [${subKey}](${subKey}/) | ${inSub.length} |`);
        const S = [`# ${info.name}: ${cat.name}: ${subKey}`, '', gen, '', subDesc, '', '| Template | Type | Publisher | Licence | Summary | Word |', '| --- | --- | --- | --- | --- | --- |'];
        for (const e of inSub) {
          const m = e.meta; const file = path.basename(e.relPath); const { sub } = splitJurisdiction(m.jurisdiction);
          S.push(`| [${mdCell(m.title)}${m.variant ? ` (${m.variant})` : ''}${sub ? ` · ${m.jurisdiction}` : ''}](${file}) | ${m.type} | ${mdCell(m.source.name)} | ${m.license} | ${mdCell(m.summary)} | [docx](${file.replace(/\.md$/, '.docx')})${m.source.file ? ' · original' : ''} |`);
        }
        S.push('');
        out.push([path.join(ROOT, 'templates', code, catKey, subKey, 'README.md'), S.join('\n')]);
      }
      C.push('');
      out.push([path.join(ROOT, 'templates', code, catKey, 'README.md'), C.join('\n')]);
    }
    J.push('');
    out.push([path.join(ROOT, 'templates', code, 'README.md'), J.join('\n')]);
  }
  return out;
}

module.exports = { buildAll };
