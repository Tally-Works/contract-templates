# Contract Templates

An open library of contract templates, curated by [goHeather](https://goheather.io) (Tally Works Inc.). Every template is a Markdown file with structured metadata, filed by **jurisdiction → category → subcategory**, and checked by CI so the library stays neat as it grows to hundreds of documents.

Browse the **[Catalog](CATALOG.md)** or jump straight into the tree:

```
templates/
├── us/                         United States
│   ├── employment/
│   │   ├── offer-letters/
│   │   ├── employment-agreements/
│   │   ├── executive/
│   │   │   └── executive-employment-agreement.md
│   │   ├── restrictive-covenants/
│   │   └── separation-and-termination/
│   ├── contractors/
│   ├── confidentiality/
│   └── ...
├── ca/                         Canada
│   └── employment/
│       └── offer-letters/
│           └── employment-offer-letter--ca-on.md     (Ontario-specific)
├── gb/                         United Kingdom
└── intl/                       Jurisdiction-neutral
```

The full list of jurisdictions, categories and subcategories is in [docs/taxonomy.md](docs/taxonomy.md), generated from [`taxonomy.yaml`](taxonomy.yaml).

## How a template is marked

Each file opens with a YAML front-matter block that says exactly what it is, where it came from, and whether it has been reviewed:

```yaml
---
title: Executive Employment Agreement
jurisdiction: US
category: employment
subcategory: executive
type: agreement
parties: [employer, executive]
tags: [ceo, severance, change-of-control, equity]
language: en
source:
  name: goHeather
license: CC-BY-4.0
status: draft
version: 1.0.0
last_reviewed: 2026-11-14
summary: Full-form agreement for a C-level hire with severance and change-of-control terms.
---
```

The validator refuses any file whose metadata disagrees with its folder or filename, so a template can only be in one place and that place is always right. Field-by-field reference: [docs/metadata.md](docs/metadata.md). Filename rules: [docs/naming.md](docs/naming.md).

## Using a template

1. Find it in the [Catalog](CATALOG.md) (or search `catalog.json` programmatically).
2. Check its `status`. `approved` and `reviewed` templates have been looked over; `draft` templates have not.
3. Check its `jurisdiction`. A `US` template is state-neutral; `US-CA` is written for California.
4. Replace every `[BRACKETED]` placeholder and delete the drafting notes.
5. Have a lawyer in your jurisdiction review it before you sign it. See the disclaimer below.

## Adding templates

```bash
npm install
npm run new -- --title "Mutual Non-Disclosure Agreement" --jurisdiction US \
               --category confidentiality --subcategory mutual-nda \
               --parties company,counterparty --tags nda,mutual,startup
npm run validate
npm run build
```

`npm run new` creates the file in the correct folder with a complete front-matter block. To file a document you dropped into `_intake/`, add `--from _intake/the-file.md`. The full intake workflow, licensing rules and review checklist are in [CONTRIBUTING.md](CONTRIBUTING.md).

## Repository layout

| Path | What it is |
| --- | --- |
| `templates/` | The library. One Markdown file per template, filed by jurisdiction / category / subcategory. |
| `sources/` | Original files (docx, pdf) a template was converted from, mirroring the `templates/` path. |
| `_intake/` | Local drop zone for documents not yet filed. Git-ignored. |
| `taxonomy.yaml` | The allowed jurisdictions, categories, subcategories, types, statuses and licences. |
| `CATALOG.md`, `catalog.json` | Generated index of every template. Do not edit by hand. |
| `docs/` | Taxonomy (generated), metadata schema, naming rules. |
| `scripts/catalog.js` | The librarian: `validate`, `build`, `new`. |
| `.github/` | CI that runs the validator on every pull request. |

## Licence

Original templates and the compilation are released under [Creative Commons Attribution 4.0](LICENSE). Templates sourced from elsewhere carry their own licence, recorded in each file's `license` field; the library only accepts sources that permit redistribution and modification.

## Disclaimer

These templates are general forms, not legal advice, and no lawyer-client relationship is created by using them. Laws differ by jurisdiction and change over time. Have a qualified lawyer review any document before you rely on it.
