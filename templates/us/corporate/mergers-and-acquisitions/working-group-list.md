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
  - openagreements
language: en
source:
  name: OpenAgreements
  url: https://github.com/open-agreements/open-agreements/tree/main/templates/openagreements-working-group-list
  retrieved: "2026-11-14"
  notes: >-
    OpenAgreements Working Group List. Licensed under CC0 1.0. Taken from template.md in the OpenAgreements repository
    (metadata.yaml: license CC0-1.0, allow_derivatives true). Changes by goHeather: {field} placeholders rendered as
    [BRACKETED] placeholders and [[defined terms]] rendered bold; wording unchanged.
license: CC0-1.0
status: draft
version: 1.0.0
last_reviewed: "2026-11-14"
reviewed_by: ""
summary: >-
  Standalone working group roster for a transaction. Tracks staffed deal team members and their contact details outside
  the closing checklist document. (OpenAgreements version 1.0, marked experimental by its authors.)
---


# Working Group List

Updated: [UPDATED AT]

## Members

| Name | Organization | Role | Email |
| --- | --- | --- | --- |
| {FOR m IN working_group}{$m.name} | {$m.organization} | {$m.role} | {$m.email}{END-FOR m} |

---

OpenAgreements Working Group List. Licensed under CC0 1.0. Source: [https://github.com/open-agreements/open-agreements/tree/main/templates/openagreements-working-group-list](https://github.com/open-agreements/open-agreements/tree/main/templates/openagreements-working-group-list) (version 1.0, experimental). Changes by goHeather: template fields rendered as `[BRACKETED]` placeholders and defined terms rendered in bold; wording unchanged.
