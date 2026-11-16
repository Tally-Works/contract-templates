---
title: Working Group List
jurisdiction: US
category: corporate
subcategory: mergers-and-acquisitions
type: form
parties:
  - company
  - counsel
tags:
  - working-group-list
  - transaction
  - contacts
  - startup
language: en
source:
  name: OpenAgreements
  url: https://github.com/open-agreements/open-agreements/tree/main/templates/openagreements-cc0-1.0/openagreements-working-group-list
  retrieved: "2026-11-14"
  attribution: OpenAgreements Working Group List. Licensed under CC0 1.0.
  notes: >-
    Text taken verbatim from template.md in the OpenAgreements repository (https://github.com/open-agreements/open-agreements/tree/main/templates/openagreements-cc0-1.0/openagreements-working-group-list); OpenAgreements' own {field} and [[term]] markup is left exactly as published. goHeather added nothing and removed nothing; this Markdown file is the publisher's file. The publisher's file opens with its own metadata block and uses docx-templates loop tags ({FOR ...}{END-FOR}), both reproduced as published.
license: CC0-1.0
status: draft
version: 1.0.0
last_reviewed: "2026-11-14"
reviewed_by: ""
summary: >-
  Standalone working group roster for a transaction. Tracks staffed deal team members and their contact details outside
  the closing checklist document. (OpenAgreements version 1.0, marked experimental by its authors.)
---

---
template_id: openagreements-working-group-list
title: Working Group List
document:
  title: Working Group List
  version: "1.0"
  license: CC0-1.0
---

# {deal_name} — Working Group List

Updated: {updated_at}

## Members

| Name | Organization | Role | Email |
| --- | --- | --- | --- |
| {FOR m IN working_group}{$m.name} | {$m.organization} | {$m.role} | {$m.email}{END-FOR m} |
