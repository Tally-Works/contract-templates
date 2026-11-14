# File naming

```
<slug>[--<sub-jurisdiction>][--<variant>].md
```

- **slug**: the document title in kebab-case, ASCII only, no jurisdiction, no dates, no version numbers.
  `executive-employment-agreement`, `mutual-nda`, `saas-subscription-agreement`.
- **sub-jurisdiction** (only when `jurisdiction` has a subdivision): the full code in lower case, e.g. `us-ca`, `ca-on`, `gb-sct`.
- **variant** (only when `variant` is set): the `variant` value, e.g. `employer-favorable`, `short-form`.

Segments are separated by a double hyphen `--` so the parts can be split unambiguously. Single hyphens separate words inside a segment.

Examples:

| Jurisdiction | Variant | Filename |
| --- | --- | --- |
| `US` | | `executive-employment-agreement.md` |
| `US-CA` | | `executive-employment-agreement--us-ca.md` |
| `US-CA` | `short-form` | `executive-employment-agreement--us-ca--short-form.md` |
| `CA` | `employee-favorable` | `employment-offer-letter--employee-favorable.md` |
| `CA-ON` | | `employment-offer-letter--ca-on.md` |

Rules the validator enforces:

1. Every segment is `[a-z0-9]+(-[a-z0-9]+)*`.
2. If `jurisdiction` has a subdivision, the second segment must be that code in lower case.
3. If `jurisdiction` has no subdivision, no segment may look like a jurisdiction code.
4. If `variant` is set, the last segment must equal it; if the last segment is not a jurisdiction code, `variant` must be set to it.
5. `README.md` is the only non-template Markdown file allowed under `templates/`.

Original source files (docx, pdf) use the same name under `sources/` with their own extension:

```
templates/us/employment/executive/executive-employment-agreement--us-ca.md
sources/us/employment/executive/executive-employment-agreement--us-ca.docx
```
