---
title: Closing Checklist
jurisdiction: US
category: corporate
subcategory: mergers-and-acquisitions
type: checklist
parties:
  - company
  - counsel
tags:
  - closing-checklist
  - financing
  - transaction
  - startup
  - openagreements
language: en
source:
  name: OpenAgreements
  url: https://github.com/open-agreements/open-agreements/tree/main/templates/openagreements-closing-checklist
  retrieved: "2026-11-14"
  notes: >-
    OpenAgreements Closing Checklist. Licensed under CC0 1.0. Taken from template.md in the OpenAgreements repository
    (metadata.yaml: license CC0-1.0, allow_derivatives true). Changes by goHeather: {field} placeholders rendered as
    [BRACKETED] placeholders and [[defined terms]] rendered bold; wording unchanged.
license: CC0-1.0
status: draft
version: 1.0.0
last_reviewed: "2026-11-14"
reviewed_by: ""
summary: >-
  A stage-first, document-first closing checklist that tracks canonical documents, action items, and open issues for a
  transaction, and renders a formatted document for distribution to the working group. (OpenAgreements version 2.1,
  marked experimental by its authors.)
---


# Closing Checklist

Updated: [UPDATED AT]

## Documents

| ID | Title | Link | Status | Responsible |
| --- | --- | --- | --- | --- |
| {FOR d IN documents}{$d.entry_id} | {$d.title} | {$d.link} | {$d.status} | {$d.responsible}{END-FOR d} |

## Action Items

| ID | Description | Status | Assigned To | Due Date |
| --- | --- | --- | --- | --- |
| {FOR a IN action_items}{$a.item_id} | {$a.description} | {$a.status} | {$a.assigned_to} | {$a.due_date}{END-FOR a} |

## Open Issues

| ID | Title | Status | Summary | Citation |
| --- | --- | --- | --- | --- |
| {FOR i IN open_issues}{$i.issue_id} | {$i.title} | {$i.status} | {$i.summary} | {$i.citation}{END-FOR i} |

---

OpenAgreements Closing Checklist. Licensed under CC0 1.0. Source: [https://github.com/open-agreements/open-agreements/tree/main/templates/openagreements-closing-checklist](https://github.com/open-agreements/open-agreements/tree/main/templates/openagreements-closing-checklist) (version 2.1, experimental). Changes by goHeather: template fields rendered as `[BRACKETED]` placeholders and defined terms rendered in bold; wording unchanged.
