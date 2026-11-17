# Working in this repository

This file is for AI agents that change the repository. Agents that only want to find and use a template should read [llms.txt](llms.txt) instead.

## What this is

A library of contract templates under `templates/<country>/<category>/<subcategory>/`. Every template is a Markdown file with YAML front-matter and a Word file of the same name beside it. `taxonomy.yaml` defines every allowed jurisdiction, category, subcategory, type, status and licence. `catalog.json`, `CATALOG.md`, `ATTRIBUTION.md`, `llms.txt`, `llms-full.txt`, `docs/taxonomy.md`, `docs/tags.md`, `schema/template.schema.json` and the README.md in every folder under `templates/` are generated; never edit them by hand.

## Commands

```bash
npm install
npm run validate     # check every template's front-matter, path and Word file
npm run build        # write missing Word files, regenerate every generated file
npm run check        # what CI runs: validate, and fail if a generated file is stale
npm run new -- ...   # create a template in the right folder (see docs/maintaining.md)
```

## Rules

1. **Do not change the text of a template.** The body of each Markdown file is the publisher's document, reproduced under its licence. Convert formats, fix the front-matter, move a file to the right folder; never reword, trim or add to the body. The only exception is a document goHeather wrote (`source.name: goHeather`).
2. **Keep every publisher notice, credit and licence line** that is in the text.
3. **Only add templates whose licence allows commercial use and modified redistribution**, verified on the publisher's own page, with `source.url`, `source.retrieved` and `license` filled in. CC BY-SA, CC BY-NC, CC BY-ND and "free templates" under a site's terms of use are not accepted. See [docs/maintaining.md](docs/maintaining.md) section 1.
4. **Metadata must agree with the path.** `jurisdiction`, `category` and `subcategory` decide the folder; `variant` and a sub-jurisdiction decide the filename suffix. `npm run validate` enforces this.
5. **Every template has a `.docx` of the same name.** Set `source.file` when it is the publisher's original; otherwise `npm run build` generates it.
6. **Write only what is true.** Summaries, tags and notes describe the document as it is. No marketing language and no claims about legal review or quality.
7. Run `npm run check` before committing. CI runs the same command.

Field reference: [docs/metadata.md](docs/metadata.md). Filename rules: [docs/naming.md](docs/naming.md).
