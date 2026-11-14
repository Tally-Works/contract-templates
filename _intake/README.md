# _intake/

Drop zone for documents that have not been filed yet. Everything in here except this README is git-ignored, so it is a private working area on your machine.

To file something:

```bash
pandoc _intake/original.docx -t gfm --wrap=none -o _intake/original.md   # if it is not Markdown yet
npm run new -- --from _intake/original.md --title "..." --jurisdiction US --category ... --subcategory ...
```

The librarian moves the body into the right folder under `templates/`, writes the front-matter, and deletes the intake copy. See [`../CONTRIBUTING.md`](../CONTRIBUTING.md) for the full workflow.
