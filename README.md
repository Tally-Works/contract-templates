# Contract Templates

A free, curated collection of openly licensed contract templates from publishers such as Common Paper, Bonterms, OpenAgreements and General Legal, gathered and organised by [goHeather](https://goheather.io) (Tally Works Inc.). Every template is a Markdown file with structured metadata, filed by **jurisdiction → category → subcategory**, and checked by CI so the collection stays neat as it grows to hundreds of documents.

**None of these documents were written by goHeather.** This is a collection: each template was published openly by its author (Common Paper, Bonterms, OpenAgreements, General Legal and others), is reproduced here under that author's licence, and is credited in [ATTRIBUTION.md](ATTRIBUTION.md). What goHeather adds is the organisation: one place, one taxonomy, consistent metadata, and a validator that keeps it that way. The text here is free to use, copy and adapt under each template's own licence, always. goHeather is building editable Word versions and an assistant connector for Claude and ChatGPT on top of this library; those will ask for a free goHeather account. This repository never will.

This repository exists for two reasons. goHeather's own product uses these templates as starting points when its users build a contract. And anyone else can use them too, straight from this repository or through the assistant connector goHeather is building on top of it, because every template's licence already allows that. goHeather owns none of the documents; it helps people find and use them.

Browse the **[Catalog](CATALOG.md)** or jump straight into the tree:

```
templates/
├── us/                         United States
│   ├── employment/
│   │   ├── offer-letters/
│   │   │   ├── employment-offer-letter.md
│   │   │   └── employment-offer-letter--us-ca.md     (California-specific)
│   │   ├── restrictive-covenants/
│   │   │   └── employee-restrictive-covenant-agreement--us-tx.md
│   │   └── confidentiality-and-ip/
│   ├── confidentiality/
│   │   └── mutual-nda/
│   │       ├── common-paper-mutual-nda.md
│   │       └── bonterms-mutual-nda.md
│   ├── technology/
│   └── ...
├── ca/                         Canada
├── gb/                         United Kingdom
└── intl/                       Jurisdiction-neutral
```

The full list of jurisdictions, categories and subcategories is in [docs/taxonomy.md](docs/taxonomy.md), generated from [`taxonomy.yaml`](taxonomy.yaml).

## How a template is marked

Each file opens with a YAML front-matter block that says exactly what it is, where it came from, and whether it has been reviewed:

```yaml
---
title: Common Paper Mutual NDA
jurisdiction: US
category: confidentiality
subcategory: mutual-nda
type: agreement
parties: [disclosing-party, receiving-party]
tags: [nda, mutual, confidentiality, cover-page]
language: en
source:
  name: Common Paper
  url: https://commonpaper.com/standards/mutual-nda/
  retrieved: 2026-11-14
  notes: Text taken from github.com/CommonPaper/Mutual-NDA, unchanged; attribution line kept.
license: CC-BY-4.0
status: draft
version: 1.0.0
last_reviewed: 2026-11-14
summary: Two-way NDA in cover-page-plus-standard-terms form.
---
```

The validator refuses any file whose metadata disagrees with its folder or filename, so a template can only be in one place and that place is always right. Field-by-field reference: [docs/metadata.md](docs/metadata.md). Filename rules: [docs/naming.md](docs/naming.md).

## Using a template

1. Find it in the [Catalog](CATALOG.md) (or search `catalog.json` programmatically).
2. Download the Word file beside it. Every template has one, in this repository, with no account and no other website involved.
3. Check its `status` and `reviewed_by`. Everything is `draft` unless a named person has reviewed it.
4. Check its `jurisdiction`. A `US` template is state-neutral; `US-CA` is written for California.
5. Replace every `[BRACKETED]` placeholder and delete the drafting notes.
6. Have a lawyer in your jurisdiction review it before you sign it. See the disclaimer below.

Every template is complete on its own. Where a document is designed to incorporate another set of terms (an order form, a cover page, a statement of work), those terms are in this library too and the template says where.

## Adding templates

```bash
npm install
npm run new -- --title "Mutual Non-Disclosure Agreement" --jurisdiction US \
               --category confidentiality --subcategory mutual-nda \
               --parties company,counterparty --tags nda,mutual,startup
npm run validate
npm run build
```

`npm run new` creates the file in the correct folder with a complete front-matter block. To file a document you dropped into `_intake/`, add `--from _intake/the-file.md`. `npm run build` then writes the Word file beside it and regenerates the catalog. The full intake workflow and licensing rules are in [CONTRIBUTING.md](CONTRIBUTING.md).

## What is accepted

The library only accepts templates their authors have clearly allowed everyone to redistribute and adapt:

- **Published under an open licence** that permits commercial use and modified redistribution: CC0, CC BY, MIT, Apache 2.0, or an equivalent permissive form licence.
- **Public domain**, such as US federal government forms.
- **Written permission** from the author, quoted or linked in the template's metadata.

That excludes ShareAlike, NonCommercial and NoDerivatives licences, and every "free template" published under a website's terms of use rather than an open licence. The validator refuses a template that has no source URL and retrieval date, and `ATTRIBUTION.md` is regenerated from that metadata on every build.

Every template is filed with `status: draft`. Nothing in this library has been reviewed by a lawyer unless a template's `reviewed_by` field names one.

## Repository layout

| Path | What it is |
| --- | --- |
| `templates/` | The library. For every template, a Markdown file and a Word file of the same name, filed by jurisdiction / category / subcategory. The Word file is the publisher's original where one exists, otherwise generated from the Markdown. |
| `_intake/` | Local drop zone for documents not yet filed. Git-ignored. |
| `taxonomy.yaml` | The allowed jurisdictions, categories, subcategories, types, statuses and licences. |
| `CATALOG.md`, `catalog.json` | Generated index of every template. Do not edit by hand. |
| `ATTRIBUTION.md` | Generated credit to every source author and licence. Do not edit by hand. |
| `docs/` | Taxonomy (generated), metadata schema, naming rules. |
| `scripts/catalog.js` | The librarian: `validate`, `build`, `new`. |
| `scripts/build-docx.js` | Writes the Word file for every template that has no publisher original. |
| `.github/` | CI that runs the validator on every pull request. |

## Licence

goHeather did not write these templates and does not own them. Every template was written by someone else and is reproduced here under the open licence its author published it under: that licence is recorded in the file's `license` field, the author is named in its `source` field, and every author is credited in [ATTRIBUTION.md](ATTRIBUTION.md). The library only accepts sources whose licence permits commercial use and modified redistribution.

What goHeather made is the filing system around the documents: the taxonomy, the metadata, the catalog and the scripts. Those are released under the [MIT License](LICENSE). That licence does not cover the templates.

## Disclaimer

These templates are general forms, not legal advice, and no lawyer-client relationship is created by using them. Laws differ by jurisdiction and change over time. Have a qualified lawyer review any document before you rely on it.
