# Contributing

This library will hold hundreds of templates. It stays useful only if every file is marked correctly and sits in the right folder, so the process below is strict on purpose. The validator enforces most of it; the rest is judgement, and this page is the guide.

## 1. Before you add anything: licensing

Only add a template if you can show we are allowed to redistribute **and** adapt it **and** do so commercially. goHeather is a business; a licence that allows only non-commercial use does not cover us.

goHeather does not write templates for this library and never claims to; everything here was published by someone else, and the job of a contributor is to record who, where and under what licence.

| Situation | Add it? | `license` value |
| --- | --- | --- |
| Published under CC0, CC BY (3.0 or 4.0), MIT, Apache 2.0 or Mitchell's Law Form License | yes | the matching key |
| US federal government form, or statute-prescribed wording | yes | `Public-Domain` |
| Author gave written permission to redistribute and adapt | yes, quote or link it in `source.notes` | `Permission-Granted` |
| Published under CC BY-SA | no (share-alike would bind every adaptation we make) | |
| Published under CC BY-NC or CC BY-ND | no | |
| "Free template" on a law firm, HR vendor or template site with no open licence | no, however good it looks | |
| Filed with the SEC or a court (public record, but the drafter still holds copyright) | no; study it, do not copy it | |
| Found in a paid product, a book, or behind a login | no | |

Record where it came from in `source.url` and the date in `source.retrieved`; the validator rejects third-party templates without them. If you change the original substantively, say so in `source.notes` (CC BY requires it). Credit is generated into `ATTRIBUTION.md` from these fields, so get the author's name exactly right in `source.name`.

If a template you want is only available under terms that fail this table, leave it out and, if it is worth it, ask the author for permission in writing. Do not copy its wording.

## 2. Intake workflow

1. **Drop the raw file in `_intake/`.** Any format. This folder is git-ignored.
2. **Convert to Markdown** if it is not already text:
   ```bash
   pandoc _intake/original.docx -t gfm --wrap=none -o _intake/original.md
   ```
   For PDFs, extract the text first (any tool), then clean it up by hand.
3. **Decide where it goes.** Use the decision guide in section 3 and the lists in [docs/taxonomy.md](docs/taxonomy.md).
4. **File it** with the librarian, which creates the file in the right folder with complete front-matter and deletes the intake copy:
   ```bash
   npm run new -- --from _intake/original.md \
     --title "Executive Employment Agreement" \
     --jurisdiction US-CA --category employment --subcategory executive \
     --type agreement --parties employer,executive \
     --tags ceo,severance,change-of-control,equity \
     --license CC-BY-4.0 --source-name "Example Publisher" \
     --source-url https://example.org/template \
     --summary "Full-form agreement for a C-level hire under California law."
   ```
   Keep the original under `sources/` at the mirrored path and point `source.file` at it when the docx or pdf has formatting worth keeping.
5. **Clean up the body** (section 4).
6. **Validate and rebuild the catalog:**
   ```bash
   npm run validate
   npm run build
   ```
7. **Commit** the template, any `sources/` file, and the regenerated `CATALOG.md`, `catalog.json`, `ATTRIBUTION.md` and `docs/taxonomy.md`. Commit message format:
   ```
   add(us/employment/executive): executive employment agreement
   update(ca/employment/offer-letters): fix ESA notice wording in Ontario offer letter
   deprecate(gb/privacy-and-data/data-processing): pre-2021 SCCs
   taxonomy: add employment/collective-and-union
   ```
8. **Open a pull request.** CI runs `npm run check`; the PR template has the review checklist.

## 3. Decision guide: where does it go?

Work top-down. Each answer narrows the path.

**Jurisdiction.** Which law is it drafted for?
- Written for one country, no state or province specifics → that country (`US`, `CA`, `GB` ...).
- Mentions a specific state or province's statutes, notice periods or required disclosures → the sub-jurisdiction (`US-CA`, `CA-ON`). The file still lives in the country folder; the code goes in the filename.
- EU-wide instrument (GDPR DPA, SCCs) → `EU`. A German or French template goes under that country, not `EU`.
- Could be used anywhere with a governing-law blank → `INTL`.
- If you are unsure between a country and `INTL`, pick the country. Neutral drafting is rare.

**Category.** What relationship does the document govern?
- Employer and employee → `employment`. Employer and contractor → `contractors`. If the document calls someone an "independent contractor", it is `contractors` even if it looks like an employment agreement.
- Only about keeping secrets, nothing else → `confidentiality`. An employee confidentiality agreement is `employment/confidentiality-and-ip`, not `confidentiality`.
- Software or online service is the subject → `technology`, not `commercial`.
- Company ownership, governance or equity → `corporate`. Borrowing money → `financing`.
- A single clause meant to be pasted into something else → `clauses`.

**Subcategory.** Pick the most specific one that fits. If two fit, pick the one a lawyer would name first. If none fits, do not invent a folder: propose a new subcategory in `taxonomy.yaml` in the same pull request and explain why in the PR.

**Type.** `agreement` is signed by everyone. `letter` is sent by one party and may be countersigned. `policy` is unilateral. `notice` is served. `form` is filled in. `clause` is pasted. `checklist` is for drafters. `schedule` attaches to a parent.

**Variant.** Two templates of the same kind in the same folder for the same jurisdiction must differ by `variant`: `short-form`, `long-form`, `employer-favorable`, `employee-favorable`, `with-equity`, `mutual`. Do not use a variant to encode the jurisdiction or the source.

## 4. Body conventions

- Start with a single `# Title` that matches `title`.
- Placeholders in `[SQUARE BRACKETS]`, upper case: `[EMPLOYER NAME]`, `[START DATE]`, `[AMOUNT]`. Never leave a real name, address or amount from a source document in the body.
- Drafting notes as blockquotes starting with `> **Drafting note:**`. Keep them short; they are for the person filling in the template.
- Numbered sections as `## 1. Heading`, sub-clauses as `1.1`, `1.2` in ordinary paragraphs or lists. Do not nest deeper than `###`.
- Defined terms in **bold** at first definition, Title Case afterwards.
- Signature blocks as a two-column table at the end.
- No HTML, no images, no page-break comments. The Markdown must read cleanly on GitHub.
- Plain ASCII punctuation except where the document needs otherwise.

## 5. Review and status

| Status | Who sets it | What it means |
| --- | --- | --- |
| `draft` | whoever files it | In the library, unreviewed. The default. |
| `reviewed` | a reviewer, with `reviewed_by` set | Structure, completeness and obvious legal issues checked for the stated jurisdiction. |
| `approved` | a lawyer qualified in the jurisdiction, with `reviewed_by` set | Safe to recommend as a starting point. |
| `deprecated` | a maintainer | Reference only. Set `supersedes` on the replacement. |

Moving a template up a status is its own pull request: bump `version`, set `last_reviewed` and `reviewed_by`, and describe what was checked.

## 6. Changing the taxonomy

`taxonomy.yaml` is the only place categories, subcategories, jurisdictions, types, statuses and licences are defined. To change it, edit the file, run `npm run build` to regenerate `docs/taxonomy.md`, and move any affected templates in the same pull request so `npm run validate` still passes. Renaming a subcategory means renaming its folder; the validator will tell you which files disagree.

## 7. Pull request checklist

- [ ] Licence allows redistribution and is recorded in `license`; `source.url` and `source.retrieved` are filled in for third-party material.
- [ ] Front-matter complete; `npm run validate` passes with no errors.
- [ ] Filed in the right jurisdiction / category / subcategory per the decision guide.
- [ ] Filename follows [docs/naming.md](docs/naming.md).
- [ ] Body cleaned up: placeholders bracketed, no real names or amounts, drafting notes marked.
- [ ] `npm run build` run and the generated files committed, including `ATTRIBUTION.md`.
