# Template metadata

Every template is a Markdown file that starts with a YAML front-matter block. The front-matter is what "marks" the template: it is validated by `npm run validate`, it drives `CATALOG.md` and `catalog.json`, and it must agree with the folder the file sits in.

A complete example:

```yaml
---
title: Executive Employment Agreement
jurisdiction: US-DE
category: employment
subcategory: executive
type: agreement
variant: employer-favorable
parties: [employer, executive]
tags: [ceo, severance, change-of-control, equity, non-compete]
language: en
governing_law: Delaware
source:
  name: Example Publisher
  url: https://example.org/templates/executive-employment-agreement
  file: templates/us/employment/executive/executive-employment-agreement--us-de--employer-favorable.docx
  retrieved: 2026-11-14
  notes: Published under CC BY 4.0 (licence notice on the page). Wording unchanged.
license: CC-BY-4.0
status: draft
version: 1.0.0
last_reviewed: 2026-11-14
reviewed_by: ""
summary: One-paragraph plain-English description shown in the catalog.
---
```

## Fields

| Field | Required | Allowed values | Notes |
| --- | --- | --- | --- |
| `title` | yes | free text | Title case. What a lawyer would call the document. No jurisdiction in the title (that is what `jurisdiction` is for). |
| `jurisdiction` | yes | `US`, `US-CA`, `CA`, `CA-ON`, `GB`, `EU`, `INTL` ... | ISO 3166-1 alpha-2 country, optionally followed by `-` and the ISO 3166-2 subdivision. Country must be listed in `taxonomy.yaml`. Upper case. |
| `category` | yes | a key under `categories` in `taxonomy.yaml` | Must match the folder. |
| `subcategory` | yes | a key under that category's `subcategories` | Must match the folder. |
| `type` | yes | `agreement`, `letter`, `policy`, `notice`, `form`, `clause`, `checklist`, `schedule` | See `taxonomy.yaml` for definitions. |
| `variant` | no | kebab-case | Distinguishes two templates of the same kind in the same folder (e.g. `employer-favorable`, `short-form`, `with-equity`). Must appear in the filename. |
| `parties` | yes | list of kebab-case role names | Roles, not names: `employer`, `employee`, `contractor`, `client`, `licensor`, `licensee`, `landlord`, `tenant`, `company`, `investor`. |
| `tags` | yes | list of kebab-case keywords | 3 to 10 tags. Think "what would someone search for". |
| `language` | yes | ISO 639-1 code | `en`, `fr`, `es` ... |
| `governing_law` | no | free text | Named governing law if the template fixes one. |
| `source.name` | yes | free text | Who published the original. `goHeather` only for the documents goHeather wrote, which are published under CC BY 4.0. |
| `source.url` | yes | URL | Where the original was published. |
| `source.file` | no | repo path | Set only when the `.docx` beside the template is the publisher's original file; it must be that path. When unset, the `.docx` is generated from the Markdown. |
| `source.retrieved` | yes | `YYYY-MM-DD` | Date the original was downloaded. |
| `source.notes` | no | free text | Licence evidence, permission links, what was changed from the original. |
| `license` | yes | a key under `licenses` in `taxonomy.yaml` | The licence the **original author** published the template under, which is what lets anyone redistribute it. goHeather holds no rights in the template text. |
| `status` | yes | `draft`, `reviewed`, `approved`, `deprecated` | Every new template starts as `draft`. |
| `version` | yes | semver `MAJOR.MINOR.PATCH` | Bump PATCH for typos, MINOR for clause changes, MAJOR for restructures. |
| `last_reviewed` | yes | `YYYY-MM-DD` | Date of the last substantive review. |
| `reviewed_by` | no | free text | Name or handle of the reviewer. Required to move to `reviewed` or `approved`. |
| `summary` | no | one paragraph | Plain-English description shown in the catalog. Strongly recommended. |
| `supersedes` | no | repo path | Path of the template this one replaces (the old one should be `deprecated`). |
| `related` | no | list of repo paths | Templates commonly used together (e.g. an offer letter and its confidentiality agreement). |

## Path rule

The front-matter and the file path must agree:

```
templates/<country>/<category>/<subcategory>/<slug>[--<sub-jurisdiction>][--<variant>].md
           │          │           │
           │          │           └─ subcategory
           │          └─ category
           └─ jurisdiction country code, lower case
```

The validator refuses a file whose `jurisdiction`, `category` or `subcategory` do not match its folder, and a file whose name is missing the sub-jurisdiction or variant suffix. See [naming.md](naming.md).
