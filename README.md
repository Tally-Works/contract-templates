# Contract Templates

A library of openly licensed contract templates, filed by **jurisdiction → category → subcategory**, with the same structured metadata on every file. Each template is a Markdown file with a Word file beside it. The library is maintained by [goHeather](https://goheather.io/).

The templates were published under open licences by Common Paper, Bonterms, OpenAgreements, the UK Government, US federal agencies and others. Each is reproduced under its own licence and credited in [ATTRIBUTION.md](ATTRIBUTION.md). Five were written by goHeather and are published under CC BY 4.0.

goHeather's product builds contracts from this library. Any AI assistant or agent can do the same by fetching the catalog and the files; see [For AI assistants and agents](#for-ai-assistants-and-agents).

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

Each file opens with a YAML front-matter block that says what it is and where it came from:

```yaml
---
title: Common Paper Mutual NDA
jurisdiction: US
category: confidentiality
subcategory: mutual-nda
type: agreement
parties:
  - disclosing-party
  - receiving-party
tags:
  - nda
  - mutual
  - standard-terms
  - cover-page
language: en
source:
  name: Common Paper
  url: https://commonpaper.com/standards/mutual-nda/
  retrieved: "2026-11-14"
  notes: >-
    Text taken verbatim from Mutual-NDA.md in github.com/CommonPaper/Mutual-NDA (HTML span markup used for Common Paper's web styling removed; words unchanged). goHeather added nothing and removed nothing; this Markdown file is the publisher's file.
license: CC-BY-4.0
status: draft
version: 1.0.0
last_reviewed: "2026-11-14"
reviewed_by: ""
related:
  - templates/us/confidentiality/mutual-nda/common-paper-mutual-nda-cover-page.md
summary: >-
  Two-way non-disclosure agreement in cover-page-plus-standard-terms form. The cover page (included) sets the purpose,
  term and governing law; the standard terms are meant to be used unchanged. Version 1.0. Governing law and business
  terms are chosen on the cover page.
---
```

The validator refuses any file whose metadata disagrees with its folder or filename, so a template can only be in one place. Field-by-field reference: [docs/metadata.md](docs/metadata.md). Filename rules: [docs/naming.md](docs/naming.md). Machine-readable schema: [schema/template.schema.json](schema/template.schema.json).

## Using a template

1. Find it in the [Catalog](CATALOG.md), or search [`catalog.json`](catalog.json).
2. Download the Word file beside it. Every template has one, in this repository, with no account and no other website involved.
3. Check its `jurisdiction`. A `US` template is state-neutral; `US-CA` is written for California.
4. Replace every `[BRACKETED]` placeholder and delete the drafting notes.
5. Have a lawyer in your jurisdiction review it before you sign it. See the disclaimer below.

Every document is reproduced as its publisher released it, notices and credits included. Where a document is designed to incorporate another set of terms (an order form, a cover page, a statement of work), those terms are in this library too and are listed in the template's `related` metadata.

## For AI assistants and agents

Start with [`llms.txt`](llms.txt). The short version:

- [`catalog.json`](catalog.json) has one entry per template: a stable `id`, the Markdown and Word paths and their raw URLs, title, jurisdiction, category, subcategory, type, parties, tags, governing law, summary, the document's heading outline, its bracketed placeholders, the licence with its URL, and the source.
- [`llms-full.txt`](llms-full.txt) is the same guide followed by one entry per template (title, jurisdiction, type, publisher, licence, summary, raw URL), for assistants that prefer to ingest a single file.
- Any file can be fetched raw at `https://raw.githubusercontent.com/Tally-Works/contract-templates/main/<path>`. Every folder under `templates/` has a README listing what is in it.
- Narrow by `jurisdiction`, then `category` and `subcategory`, then `parties` and `tags`. `INTL` templates are written to be used in any jurisdiction. [`docs/tags.md`](docs/tags.md) lists every tag with its count.
- The body of each Markdown file is the template text, publisher's notices included. Keep those notices when you build a document from it; the `license` field says what the publisher requires.
- The front-matter follows [`schema/template.schema.json`](schema/template.schema.json), and the allowed values are in [`taxonomy.yaml`](taxonomy.yaml).

## How templates are added

goHeather adds and maintains the templates. The library does not take outside pull requests at the moment. If a template has a problem, is misattributed, or you would like it removed, or if you want a template the library does not have, [open an issue](https://github.com/Tally-Works/contract-templates/issues/new/choose) or email help@goheather.io.

The **[Catalog](CATALOG.md)** and [`catalog.json`](catalog.json) link to the Word file beside every template; on GitHub it is the `.docx` of the same name in the same folder.

## What the library contains

Every template was published by its author under terms that let everyone redistribute and adapt it:

- **Published under an open licence** that permits commercial use and modified redistribution: CC0, CC BY, MIT, Apache 2.0, the Open Government Licence, or an equivalent permissive form licence.
- **Public domain**, such as US federal government forms.
- **Written permission** from the author, quoted or linked in the template's metadata.

The library does not include documents under ShareAlike, NonCommercial or NoDerivatives licences, or "free templates" published under a website's terms of use rather than an open licence. Every file records its source URL and retrieval date, and `ATTRIBUTION.md` is regenerated from that metadata on every build.

## Repository layout

| Path | What it is |
| --- | --- |
| `templates/` | The library. For every template, a Markdown file and a Word file of the same name, filed by jurisdiction / category / subcategory, with a generated README in every folder. The Word file is the publisher's original where one exists, otherwise generated from the Markdown. |
| `catalog.json` | Generated machine-readable index of every template. Do not edit by hand. |
| `CATALOG.md` | The same index for reading. Generated. |
| `ATTRIBUTION.md` | Generated credit to every source author and licence. |
| `llms.txt`, `llms-full.txt` | Generated guides for AI assistants and agents; the full version lists every template. |
| `taxonomy.yaml` | The allowed jurisdictions, categories, subcategories, types, statuses and licences. |
| `schema/` | JSON Schema for the front-matter, generated from the taxonomy. |
| `LICENSES/` | Reference copies of every licence the templates are published under. |
| `docs/` | Metadata reference and naming rules, and the generated taxonomy and tag lists. |
| `scripts/catalog.js` | The librarian: `validate`, `build`, `new`. |
| `scripts/build-docx.js` | Writes the Word file for every template that has no publisher original. |
| `_intake/` | Local drop zone for documents not yet filed. Git-ignored. |
| `.github/` | CI that runs the validator on every push and pull request, and the issue forms. |

## Licence

Each template belongs to its publisher and is reproduced here under the licence that publisher chose. That licence is recorded in the file's `license` field, the publisher is named in its `source` field, and every publisher is credited in [ATTRIBUTION.md](ATTRIBUTION.md). The documents goHeather wrote are marked `source.name: goHeather` and published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Reference copies of the licence texts are in [LICENSES/](LICENSES/).

The filing system around the documents, meaning the taxonomy, the metadata, the catalog and the scripts, is released under the [MIT License](LICENSE).

## Disclaimer

These templates are general forms, not legal advice, and using them creates no lawyer-client relationship. Laws differ by jurisdiction and change over time. Have a qualified lawyer review any document before you rely on it.
