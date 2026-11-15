---
title: Sourcegraph Contributor License Agreement
jurisdiction: US
category: technology
subcategory: open-source
type: policy
parties:
  - company
  - contributor
tags:
  - cla
  - contributor-license
  - contributor-agreement
  - handbook
  - copyleft
  - patent
language: en
source:
  name: Sourcegraph
  url: >-
    https://github.com/sourcegraph/handbook/blob/main/content/departments/engineering/dev/process/contributor-license-agreement.md
  retrieved: "2026-11-14"
  notes: >-
    Text taken verbatim from the archived Sourcegraph handbook repository (github.com/sourcegraph/handbook), LICENSE:
    Apache License 2.0; the file's site front-matter block is omitted, nothing else changed.
license: Apache-2.0
status: draft
version: 1.0.0
last_reviewed: "2026-11-14"
reviewed_by: ""
summary: >-
  Sourcegraph's handbook page explaining its contributor license agreement policy, not the CLA text itself. Describes
  what a CLA is for (confirming the contributor's right to license, securing use and redistribution rights, guarding
  against revocation and patent claims), then an FAQ on which Sourcegraph repositories require a CLA (proprietary and
  copyleft ones) and which do not (permissively licensed), with links to the signing form and the signatory list.
---

# CLA

CLA stands for Contributor License Agreement. It is a [legal document](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/CLA.txt) that some open source projects require contributors to sign before they can contribute code.

The primary purposes of a CLA are:

- To ensure the contributor has the right to license their contribution under the project's license. This avoids legal issues if someone contributes code they don't have rights to.
- Ensure the project has the rights to use, modify, and redistribute the contributed code.
- To protect the project from contributors trying to revoke the license or enforce their patents against it.

## FAQ

### Which Sourcegraph repositories DO NOT require a CLA?

For permissively licensed projects, contributors do **not** need to sign a CLA given that permissive license terms govern the use of such contributions. Read more about permissive licenses [here](licenses.md#allowed-licenses-permissive-licenses).

### Examples of Sourcegraph repositories that DO NOT require CLAs:

- [sourcegraph/cody](https://sourcegraph.com/github.com/sourcegraph/cody)
- [sourcegraph/zoekt](https://github.com/sourcegraph/zoekt)
- [sourcegraph/conc](https://github.com/sourcegraph/conc)

### Which Sourcegraph repositories DO require a CLA?

For all other repositories, including (a) proprietary or (b) copyleft-licensed projects, contributors need to sign a CLA.

Read more about copyleft licenses [here](licenses.md#not-allowed-licenses-copyleft-licenses).

### What repository owned by Sourcegraph requires a CLA?

- [sourcegraph/sourcegraph](https://sourcegraph.com/github.com/sourcegraph/sourcegraph)

### Why do some projects require a CLA and others don’t?

We decided not to add CLAs to permissive open source projects to onboard contributors faster and show that we are committed to keeping the project open source.

### What is the link to the CLA form?

To sign the Sourcegraph CLA, please fill out [this form](https://forms.gle/YnmetmopXNxFxsDUA).

### Who has signed the form already?

You can view all contributors that have signed here: [https://sourcegraph.com/github.com/sourcegraph/clabot-config@main/-/blob/.clabot](https://sourcegraph.com/github.com/sourcegraph/clabot-config@main/-/blob/.clabot)

You can read more about [CLA-bot here](https://docs.sourcegraph.com/dev/contributing/accepting_contribution#cla-bot).
