# templates/

For every template, a Markdown file and a Word file of the same name, filed as:

```
templates/<country>/<category>/<subcategory>/<slug>[--<sub-jurisdiction>][--<variant>].md
```

Do not create folders by hand. `npm run new -- ...` creates the right one from the metadata you give it, and `npm run validate` refuses files whose front-matter disagrees with their path. Allowed values live in [`../taxonomy.yaml`](../taxonomy.yaml); the readable version is [`../docs/taxonomy.md`](../docs/taxonomy.md).

The index of everything in here is [`../CATALOG.md`](../CATALOG.md) for people and [`../catalog.json`](../catalog.json) for software; [`../llms.txt`](../llms.txt) explains both to an AI assistant.
