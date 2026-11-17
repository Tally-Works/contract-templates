# Template metadata

Every template is a Markdown file that starts with a YAML front-matter block. The front-matter is what "marks" the template: it is validated by `npm run validate`, it drives `catalog.json`, `CATALOG.md`, `llms.txt` and `docs/tags.md`, and it must agree with the folder the file sits in. The same rules are published as a JSON Schema at [`schema/template.schema.json`](../schema/template.schema.json), generated from `taxonomy.yaml`.

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
| `type` | yes | `agreement`, `letter`, `policy`, `notice`, `form`, `clause`, `clause-library`, `checklist`, `schedule`, `charter`, `resolution` | See `taxonomy.yaml` for definitions. |
| `variant` | no | kebab-case | Distinguishes two templates of the same kind in the same folder (e.g. `employer-favorable`, `short-form`, `with-equity`). Must appear in the filename. |
| `parties` | yes | list of kebab-case role names | Roles, not names, singular: `employer`, `employee`, `company`, `contractor`, `client`, `provider`, `customer`, `disclosing-party`, `receiving-party`, `licensor`, `licensee`, `landlord`, `tenant`, `investor`, `agency`, `party-a`, `party-b`. Use the role the document itself uses; a government body is `agency` or `authority`, not its name. |
| `tags` | yes | list of kebab-case keywords | 3 to 10 tags: the subject matter and the things someone would search for (`severance`, `non-compete`, `saas`, `gdpr`, `series-seed`). Do not repeat what other fields already say: the publisher (`source.name`), the type, the category or subcategory, the parties, or the template's own jurisdiction. A place name is a tag only when the document fixes it and the jurisdiction field does not, e.g. `delaware` on a US-neutral agreement governed by Delaware law. Reuse an existing tag from [tags.md](tags.md) before coining one. |
| `language` | yes | ISO 639-1 code | `en`, `fr`, `es` ... |
| `governing_law` | no | free text | The governing law the document itself names, written as a place (`Delaware`, `England and Wales`, `Finland`). Leave it unset when the document leaves it blank or offers a choice. |
| `source.name` | yes | free text | Who published the original. `goHeather` only for the documents goHeather wrote, which are published under CC BY 4.0. |
| `source.url` | yes | URL | Where the original was published. |
| `source.file` | no | repo path | Set only when the `.docx` beside the template is the publisher's original file; it must be that path. When unset, the `.docx` is generated from the Markdown. |
| `source.retrieved` | yes | `YYYY-MM-DD` | Date the original was downloaded. |
| `source.notes` | no | free text | Licence evidence, permission links, what was changed from the original. |
| `license` | yes | a key under `licenses` in `taxonomy.yaml` | The licence the **original author** published the template under, which is what lets anyone redistribute it. goHeather holds no rights in the template text. |
| `status` | yes | `draft`, `reviewed`, `approved`, `deprecated` | Every new template starts as `draft`. |
| `version` | yes | semver `MAJOR.MINOR.PATCH` | Bump PATCH for typos, MINOR for clause changes, MAJOR for restructures. |
| `last_reviewed` | yes | `YYYY-MM-DD` | Date the template or its metadata was last checked or changed. |
| `reviewed_by` | no | free text | Name or handle of the reviewer. Required to move to `reviewed` or `approved`. |
| `summary` | no | one to three sentences | What the document is and who it is between, what it covers, and what distinguishes it. Derived from the text; no praise and no claims the text does not support. It is what an assistant reads to choose between templates, so make it specific. |
| `supersedes` | no | repo path | Path of the template this one replaces (the old one should be `deprecated`). |
| `related` | no | list of repo paths | Templates commonly used together (e.g. an offer letter and its confidentiality agreement). |

## Build templates

Some of goHeather's own documents (tag `build-notes`) are templates with optional clauses and alternative wordings, converted from goHeather's contract builder. They use one convention so an assistant can assemble a document without guessing:

- Fill-in fields are `[PLACEHOLDERS]` in capitals. An **Inputs** table at the top lists every placeholder, the question it answers, its format, and the clauses it appears in. Inputs that pick between wordings rather than fill a field are listed as "(choice)" or "(yes/no)".
- Instructions are italic build notes in square brackets, `*[Build note: ...]*`, in four kinds: an optional section runs from `*[Build note: Optional section: ...]*` to `*[Build note: End of optional section.]*`; alternative wordings run from `*[Build note: Option A: ...]*` through `*[Build note: Option B: ...]*` to `*[Build note: End of options.]*`, and exactly one option is kept, each option being a complete paragraph; an insertion point, `*[Build note: Insertion point: ...]*`, is where extra paragraphs go; any other build note is a plain instruction.
- Clause numbers are for reference only: after removing what does not apply, renumber consecutively. Delete every build note before use.

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
