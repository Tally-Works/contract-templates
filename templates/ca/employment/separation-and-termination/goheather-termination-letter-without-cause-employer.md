---
title: goHeather Termination Letter Without Cause (Employer)
jurisdiction: CA
category: employment
subcategory: separation-and-termination
type: letter
parties:
  - employer
  - employee
tags:
  - termination
  - without-cause
  - severance
  - notice-period
  - release
  - build-notes
language: en
source:
  name: goHeather
  url: https://goheather.io
  file: templates/ca/employment/separation-and-termination/goheather-termination-letter-without-cause-employer.docx
  retrieved: "2026-11-15"
  notes: >-
    Written by 2836014 Ontario Inc., operating as goHeather, for its own contract builder. The Word file beside this template is
    goHeather's original, margin comments included. In this Markdown the comments became build notes, the fill-ins
    became named placeholders listed in the Inputs table at the top, and the alternative wordings and optional
    paragraphs are marked. Published by goHeather under CC BY 4.0: anyone may use, adapt and share it, including
    commercially, with credit to goHeather.
license: CC-BY-4.0
status: draft
version: 1.1.0
last_reviewed: "2026-11-17"
reviewed_by: ""
summary: >-
  goHeather's Canadian employer letter terminating employment without cause, with a notice or lump-sum package
  conditional on a signed release, and the build notes that drive goHeather's question flow. Starts with a table of
  every input and marks the alternative wordings and optional paragraphs with build notes.
---

> **How to build a letter from this template.** Fill-in fields are placeholders in square brackets and capitals; the Inputs table below lists every one with its format. Instructions are italic build notes in square brackets, `*[Build note: ...]*`, and come in three kinds: an optional section runs from `*[Build note: Optional section: ...]*` to `*[Build note: End of optional section.]*`; alternative wordings run from `*[Build note: Option A: ...]*` through `*[Build note: Option B: ...]*` to `*[Build note: End of options.]*`, and exactly one option is kept; any other build note is a plain instruction. Delete every build note before use.

**INPUTS**

| Placeholder | Question the builder asks | Format | Used in |
| --- | --- | --- | --- |
| `[EMPLOYER NAME]` | Employer's name | text | first paragraph, signature |
| (address) | Employer's address | street address | not written in the letter text; goHeather's margin comment places it at the address block, which the letter labels as the Employee's |
| `[LETTER DATE]` | Date of the termination letter | date written in full, e.g. January 6, 2027 | date line |
| `[EMPLOYEE NAME]` | Name of the employee being terminated | first and last name | address block, salutation |
| `[EMPLOYEE STREET ADDRESS]`, `[EMPLOYEE CITY AND PROVINCE]`, `[EMPLOYEE POSTAL CODE]` | Employee's address (the letter's address block; goHeather's builder has no step for it) | street number and name; city and province; postal code | address block |
| (date) | Date the employee is terminated | date | not a separate fill-in: the letter makes the termination effective "today", so the letter date is the Effective Termination Date |
| `[LAST DAY OF WORK]` | Does the employee stop working today or on a future date? | the word "today", or a date written in full | first paragraph |
| (choice) | Termination package as a lump sum or a salary continuance | picks option A or B | Notice Period |
| `[SALARY CONTINUANCE END DATE]` | For how many weeks to maintain the Employee's salary and benefits | a number of weeks from 1 to 104, written as the date that many weeks after the Effective Termination Date, in full | Notice Period, option A |
| (number) | Employee's annual salary | number; not written in the letter, used to calculate `[LUMP SUM AMOUNT]` | Notice Period, option B |
| `[WEEKS OF NOTICE]` | How many weeks of notice to provide the Employee | number from 1 to 104 | Notice Period, option B (twice) |
| `[LUMP SUM AMOUNT]` | (derived) | amount: the annual salary divided by 52.1, times the weeks of notice | Notice Period, option B |
| `[COMPANY PROPERTY]` | Specific property items the Employee must return | one or more items, written in sentence form rather than as a list | Return of Property |
| `[CUSTOM PARAGRAPH HEADING]`, `[CUSTOM PARAGRAPH]` | Any other custom paragraphs, each with its own heading | heading text and paragraph text; one pair per paragraph; none removes the optional section | optional section after Return of Property |
| `[MANAGER NAME]`, `[MANAGER EMAIL ADDRESS]` | Employee's manager's name and email address | first and last name; email address | Final Steps |
| `[RELEASE DEADLINE]` | When the employee must sign the release by | date written in full | Final Steps |

**Private & Confidential**

[LETTER DATE]

[EMPLOYEE NAME]

[EMPLOYEE STREET ADDRESS]

[EMPLOYEE CITY AND PROVINCE]

[EMPLOYEE POSTAL CODE]

*[Build note: goHeather's margin comments at the four lines above ask for the Employer's name and address (steps 1 and 2 of its builder); the lines themselves are the Employee's name and address. The Employer's name goes in the first paragraph and the signature; the Employer's address is not written anywhere in the letter text.]*

**Re: Termination Without Cause**

Dear [EMPLOYEE NAME]:

This letter will confirm that your employment with [EMPLOYER NAME] (the “Company”), is terminated without cause effective today. (“Effective Termination Date”). Your last day of work is [LAST DAY OF WORK].

*[Build note: goHeather's builder also asks for the date the employee is terminated; the letter makes the termination effective on the day of the letter, so the letter date is the Effective Termination Date. The last day of work sets the working notice given to the employee; it is not where the pay in lieu of notice or severance is entered.]*

**Notice Period**

*[Build note: Option A: the termination package is a salary continuance.]*

We are offering the following termination package in connection with the termination of your employment. Should you sign and return our full and final release, your pay shall continue until [SALARY CONTINUANCE END DATE] (the “Gratuitous Notice Period”). If you do not sign our full and final release, your salary and benefits will continue only until the minimum statutory notice period only.

*[Build note: The salary continuance end date is where the notice (that is, the severance) offered is set: for four months' notice, the date exactly four months after the Effective Termination Date. The notice period must be greater than the minimum under employment standards legislation, otherwise the release will be unenforceable for lack of consideration.]*

*[Build note: Option B: the termination package is a lump sum.]*

We are offering the following termination package in connection with the termination of your employment. Should you sign and return our full and final release, the Company shall provide you a lump sum payment of [LUMP SUM AMOUNT] reflecting pay in lieu of notice for [WEEKS OF NOTICE] weeks. In addition, your benefits will be continued for [WEEKS OF NOTICE] weeks. If you do not sign our full and final release, your salary and benefits will continue only until the minimum statutory notice period only.

*[Build note: End of options. The lump sum amount is the Employee's annual salary divided by 52.1, times the weeks of notice. goHeather's margin comments marked the lump sum alternative "do not build yet".]*

**Your Accrued Salary, Vacation, and Expenses**

You will be paid your accrued salary and vacation pay up to the Effective Termination Date in accordance with the Company’s standard payroll practice. In addition, we ask that you submit all outstanding expense claims, if any.

**Record of Employment**

We will submit your Record of Employment through Service Canada.

**Confidentiality & Non-Disparagement**

You are reminded to refrain from using or disclosing confidential information which you learned or came into your possession during the course of your employment with the Company and you are obliged to refrain from, directly or indirectly, either orally or in writing, making any comments of a negative or disparaging nature whatsoever about the Company or its employees.

**Return of Property**

You are required to return to the Company any and all Company property in your possession, including: [COMPANY PROPERTY]

*[Build note: Optional section: include only if the Employer adds a custom paragraph. Each custom paragraph has its own heading; repeat the heading and paragraph for each one.]*

**[CUSTOM PARAGRAPH HEADING]**

[CUSTOM PARAGRAPH]

*[Build note: End of optional section.]*

**Final Steps**

Should you have any questions with respect to these matters pertaining to the termination of your employment, please contact [MANAGER NAME] at [MANAGER EMAIL ADDRESS].

Once you have reviewed this termination package, please return a signed copy of our full and final release by [RELEASE DEADLINE]. If you do not accept the Company’s offer by that date, this severance package is revoked.

We wish you well in your future endeavours. Thank you for your contributions.

Yours very truly,

[EMPLOYER NAME]
