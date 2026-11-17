---
title: goHeather Non-Disclosure Agreement Clause Library
jurisdiction: CA
category: confidentiality
subcategory: mutual-nda
type: clause-library
parties:
  - disclosing-party
  - receiving-party
tags:
  - nda
  - question-flow
  - developer-guide
  - unilateral
  - mutual
  - multi-party
  - build-notes
language: en
source:
  name: goHeather
  url: https://goheather.io
  file: templates/ca/confidentiality/mutual-nda/goheather-non-disclosure-agreement-clause-library.docx
  retrieved: "2026-11-15"
  notes: >-
    Written by goHeather (Tally Works Inc.) as the developer guide for its contract builder: for each section it gives
    the question to ask the user, the exact text to use for each answer and the fallback when the user gives no answer.
    It is meant for goHeather's app and for assistants to build a complete agreement from, not to be signed as it
    stands. The Word file beside this template is goHeather's original. In this Markdown version the fill-ins are named
    placeholders listed in the Inputs table, and the alternatives and optional clauses carry the library's build-note
    markers. Published by goHeather under CC BY 4.0: anyone may use, adapt and share it, including commercially, with
    credit to goHeather.
license: CC-BY-4.0
status: draft
version: 1.1.0
last_reviewed: "2026-11-17"
reviewed_by: ""
summary: >-
  goHeather's clause library for assembling a unilateral, mutual or multi-party non-disclosure agreement: the form flow,
  the user question for each section, and the exact text for each option. Starts with a table of every input and the
  sections it drives; optional clauses and alternative wordings are marked with build notes.
---

> **How to build an agreement from this clause library.** Each numbered section below gives the question the builder asks, the exact text to use for each answer and, where the guide gives one, the default when the question is not answered. Fill-in fields are placeholders in square brackets and capitals; the Inputs table below lists every one with its format. Instructions are italic build notes in square brackets, `*[Build note: ...]*`: an optional section runs from `*[Build note: Optional section: ...]*` to `*[Build note: End of optional section.]*`; alternative wordings run from `*[Build note: Option A: ...]*` through `*[Build note: Option B: ...]*` to `*[Build note: End of options.]*`, and exactly one option is kept; any other build note is a plain instruction. The guide's headings, user questions and implementation notes are not part of the agreement. Section numbers are for reference only: arrange the selected clauses in this order and renumber them consecutively. Delete every build note before use.

**INPUTS**

| Placeholder | Question the builder asks | Format | Used in |
| --- | --- | --- | --- |
| `[EFFECTIVE DATE]` | On what date does this NDA take effect? | date written in full, e.g. January 6, 2027; must not be in the past | section 1 |
| (choice) | What type of NDA is needed: unilateral, mutual or multi-party? | picks option A, B or C | section 2; section 18 |
| `[DISCLOSING PARTY NAME]`, `[RECEIVING PARTY NAME]` | Names of the two parties to a unilateral NDA | legal names | section 2, option A; section 18 |
| `[PARTY A NAME]`, `[PARTY B NAME]` | Names of the two parties to a mutual NDA | legal names | section 2, option B; section 18 |
| `[LIST OF ALL PARTY NAMES]` | Names of all parties to a multi-party NDA | three or more legal names, one per line | section 2, option C; section 18 |
| (choice, once per party) | Are you signing as an individual or on behalf of a business entity? | picks option A or B | section 3 |
| `[PARTY ADDRESS]` | The party's address | street address; for a business, its principal place of business | section 3, options A and B |
| `[PARTY STATE OR PROVINCE]` | The business party's state or province of incorporation | state or province name | section 3, option B |
| `[PURPOSE]` | What is the main reason or context for disclosing Confidential Information? | short phrase, e.g. freelance or consulting work, a partnership, an investor pitch, employee or contractor onboarding | section 4 |
| (choice) | How do you want to define "Confidential Information": standard broad definition, list of specific categories, or custom definition? | picks option A, B or C | section 5 |
| `[CONFIDENTIAL INFORMATION CATEGORIES]` | Categories of Confidential Information | comma-separated list, e.g. technical data, financial info, software code | section 5, option B |
| `[CUSTOM DEFINITION]` | Custom definition of Confidential Information | the user's own definition text | section 5, option C |
| (choice) | Use standard exclusions or provide custom exclusions? | picks option A or B | section 6 |
| `[CUSTOM EXCLUSIONS]` | Custom exclusions | the user's own text, in place of the five numbered items of option A | section 6, option B |
| (yes/no) | Do you want to prohibit reverse engineering? | includes or omits section 8.1 | section 8.1 |
| (yes/no) | Include a non-competition or non-circumvention clause? | includes or omits section 8.2 | section 8.2 |
| (yes/no) | Should the NDA include a non-solicitation clause? | includes or omits section 8.3 | section 8.3 |
| `[NON-SOLICITATION PERIOD]` | For how long? | length with unit, e.g. 12 months, 2 years | section 8.3 |
| (yes/no) | Include a non-disparagement clause? | includes or omits section 8.4 | section 8.4 |
| (yes/no, two answers) | Include a clause that the Disclosing Party has the right to disclose this info, and disclaim that it is "as is"? | includes or omits section 9.1 and section 9.2 separately | sections 9.1 and 9.2 |
| (yes/no) | Should the NDA include an indemnification clause for claims arising from the disclosed information? | includes or omits section 10 | section 10 |
| `[CONFIDENTIALITY TERM]` | How long should confidentiality last? | length with unit, e.g. 1 year, 3 years, 5 years, an indefinite period, or a custom length; a numeric term must be a positive number | section 11.1 |
| (yes/no) | Should we allow for early termination? | includes or omits section 11.2 | section 11.2 |
| (yes/no) | Should we explicitly state that confidentiality survives termination? | includes or omits section 12 | section 12 |
| `[TERM AND TERMINATION SECTION NUMBER]` | (derived) The number of the Term & Termination section in the assembled agreement | section number, e.g. 11 | section 12 |
| (yes/no) | Include a requirement for the Receiving Party to notify the Disclosing Party of any unauthorized disclosure? | includes or omits section 13 | section 13 |
| (yes/no) | Should the NDA require the Receiving Party to return or destroy confidential materials after the agreement ends or upon request? | includes or omits section 14 | section 14 |
| (yes/no) | Include a statement that a breach may cause irreparable harm, allowing for injunctive relief? | includes or omits section 15.1 | section 15.1 |
| (choice) | How should disputes be resolved: arbitration, mediation or court? The form flow lists this as optional | picks option A, B or C, or omits section 16.1 | section 16.1 |
| `[ARBITRATION BODY]` | Arbitration body | name of the arbitration institution | section 16.1, option A |
| `[COURT JURISDICTION]` | Courts of which jurisdiction | place name, e.g. Ontario | section 16.1, option C |
| `[GOVERNING LAW JURISDICTION]` | Which jurisdiction's laws govern this NDA? | jurisdiction name, e.g. the Province of Ontario | section 16.2 |
| (yes/no) | Include a force majeure clause covering unexpected events like natural disasters, government actions? | includes or omits section 17 | section 17 |
| `[DISCLOSING PARTY OR PARTY A NAME]`, `[RECEIVING PARTY OR PARTY B NAME]` | (derived from section 2) The names of the parties | the party names from section 2; for a multi-party NDA, one signature line per name in `[LIST OF ALL PARTY NAMES]` | section 18 |

**FORM FLOW**

1.  **NDA Type Selection**
2.  **Party Information Collection**
3.  **Purpose Definition**
4.  **Confidentiality Scope** (Definition & Exclusions)
5.  **Optional Clauses** (e.g., Non-Solicitation, Indemnification)
6.  **Duration and Termination**
7.  **Governing Law** (and optional Dispute Resolution details)

**DYNAMIC NDA TEMPLATE: DEVELOPER GUIDE**

Below is each section you must generate in the NDA, paired with the user question(s) in your form and the **exact** legal text to use, **if** the user selects that option.

**1\. EFFECTIVE DATE**

**User Question**

“On what date does this NDA take effect?”

**NDA Implementation**

-   Insert the user’s chosen date at the top of the NDA. For example:

**Effective Date**: [EFFECTIVE DATE]

**Sample Language**

This Non-Disclosure Agreement (“Agreement”) is entered into as of [EFFECTIVE DATE] by and between the following parties: (Then proceed to list the parties, as described below.)

**2\. NDA TYPE (UNILATERAL, MUTUAL, MULTI-PARTY)**

**User Question**

“What type of NDA is needed?”

-   Unilateral (one party disclosing)
-   Mutual (two parties disclosing)
-   Multi-Party (3+ parties)

**NDA Implementation**

Choose **one** of the following openings, based on the user’s selection:

*[Build note: Option A: the NDA is unilateral, with exactly two parties, one disclosing and one receiving.]*

1.  **Unilateral NDA Opening**

This Non-Disclosure Agreement is made and entered into by and between:

\- [DISCLOSING PARTY NAME] (the “Disclosing Party”), and

\- [RECEIVING PARTY NAME] (the “Receiving Party”).

WHEREAS, the Disclosing Party possesses certain Confidential Information (as defined herein)

that it desires to protect from unauthorized disclosure or use, and the Receiving Party

is willing to receive and hold such information in confidence.

*[Build note: Option B: the NDA is mutual, with exactly two parties, both disclosing.]*

1.  **Mutual NDA Opening**

This Non-Disclosure Agreement is made and entered into by and between:

\- [PARTY A NAME] (“Party A”) and

\- [PARTY B NAME] (“Party B”).

WHEREAS, each Party has Confidential Information that may be disclosed to the other

in connection with the Purpose (as defined herein), and each Party is willing to

protect the other’s Confidential Information in accordance with this Agreement.

*[Build note: Option C: the NDA is multi-party, with three or more parties.]*

1.  **Multi-Party NDA Opening**

This Non-Disclosure Agreement (“Agreement”) is made and entered into by and among

the following parties (collectively, the “Parties”):

\- [LIST OF ALL PARTY NAMES]

WHEREAS, each Party may disclose Confidential Information to the others,

and each Party desires to ensure that all Confidential Information is kept

confidential under the terms of this Agreement.

*[Build note: End of options. The guide gives no default; the NDA type must be chosen. The same choice decides the signature block in section 18.]*

**3\. PARTY TYPE: INDIVIDUAL OR BUSINESS**

**User Question**

“Are you signing as an individual or on behalf of a business entity?”

**NDA Implementation**

*[Build note: Option A: the party signs as an individual. Insert language referencing an individual, e.g.:]*

“John Smith, an individual residing at [PARTY ADDRESS].”

*[Build note: Option B: the party signs on behalf of a business entity. Insert language referencing a business entity, e.g.:]*

“XYZ Inc., a [PARTY STATE OR PROVINCE] corporation (or LLC, etc.) with its principal place of business at [PARTY ADDRESS].”

*[Build note: End of options. Ask and answer once for each party; the guide gives no default. John Smith and XYZ Inc. are the guide's examples and stand for the party's name from section 2.]*

*(For multi-party NDAs, repeat for each party.)*

**4\. PURPOSE OF THE NDA**

**User Question**

“What is the main reason or context for disclosing Confidential Information?” (Freelance/Consulting, Partnership, Investor Pitch, Employee/Contractor Onboarding, etc.)

**NDA Implementation**

Insert the user’s provided text into a statement such as:

Purpose: The Parties wish to disclose certain confidential information in connection with [PURPOSE].

*(No additional text needed unless you have specialized language for each scenario.)*

**5\. DEFINING “CONFIDENTIAL INFORMATION”**

**User Question**

“How do you want to define ‘Confidential Information’?”

-   Standard Broad Definition
-   List of Specific Categories
-   Custom Definition

**NDA Implementation**

*[Build note: Option A: Standard Broad Definition.]*

Definition of Confidential Information:

“Confidential Information” means any non-public, proprietary, or confidential information

disclosed by one Party to another, including but not limited to technical, financial,

business, or strategic information.

*[Build note: Option B: List of Specific Categories.]*

Definition of Confidential Information:

“Confidential Information” includes, without limitation, the following categories

selected by the user: [CONFIDENTIAL INFORMATION CATEGORIES].

Any other information that should reasonably be understood as confidential also qualifies.

*[Build note: Option C: Custom Definition.]*

Definition of Confidential Information:

“[CUSTOM DEFINITION].”

*[Build note: End of options. The guide gives no default; one definition must be chosen.]*

**6\. EXCLUSIONS FROM CONFIDENTIAL INFORMATION**

**User Question**

“Use standard exclusions (public domain, known prior, etc.) or provide custom exclusions?”

**NDA Implementation**

*[Build note: Option A: standard exclusions. Insert this block:]*

Confidential Information does not include information that:

1\. Is or becomes publicly available without breach of this Agreement;

2\. Was already known by the Receiving Party prior to disclosure, as evidenced by documentation;

3\. Is independently developed by the Receiving Party without reference to the Confidential Information;

4\. Is obtained from a third party not under a duty of confidentiality;

5\. Must be disclosed under law or court order, provided the Receiving Party promptly notifies

the Disclosing Party (if permitted).

*[Build note: Option B: custom exclusions. Use the user’s typed text in place of the above bullet points, keeping the lead-in line:]*

Confidential Information does not include information that:

[CUSTOM EXCLUSIONS]

*[Build note: End of options. The guide gives no default; one must be chosen.]*

**7\. SCOPE & USE OF INFORMATION**

*(Usually always included—no user question.)*

The Receiving Party shall use the Confidential Information solely for the Purpose described

and shall not use it for any other purpose without the Disclosing Party’s prior written consent.

**8\. CONFIDENTIALITY OBLIGATIONS & OPTIONAL CLAUSES**

The following clauses are **optional**. Present each as a **Yes/No** question; if “Yes,” include the text verbatim.

**8.1 No Reverse Engineering**

**User Question**: “Do you want to prohibit reverse engineering?”

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

The Receiving Party shall not decompile, disassemble, or reverse engineer

any Confidential Information, nor permit any third party to do so,

without the Disclosing Party’s express written permission.

*[Build note: End of optional section.]*

**8.2 Non-Competition / Non-Circumvention**

**User Question**: “Include a non-competition or non-circumvention clause?”

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

The Receiving Party shall not use the Disclosing Party’s Confidential Information

to directly or indirectly compete with or circumvent the Disclosing Party

in any business opportunity arising from such information.

*[Build note: End of optional section.]*

**8.3 Non-Solicitation**

**User Question**: “Should the NDA include a non-solicitation clause?”

-   If “Yes,” also ask “For how long?”

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

For a period of [NON-SOLICITATION PERIOD] from the Effective Date (or from the date of disclosure),

the Receiving Party shall not solicit or attempt to solicit for employment or contract

any employee or client of the Disclosing Party that the Receiving Party became aware of

through Confidential Information.

*[Build note: End of optional section.]*

**8.4 Non-Disparagement**

**User Question**: “Include a non-disparagement clause?”

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

The Parties agree not to disparage, defame, or publicly criticize each other

based on any Confidential Information disclosed under this Agreement.

*[Build note: End of optional section.]*

**9\. REPRESENTATIONS & WARRANTIES**

**User Question**

“Include a clause that the Disclosing Party has the right to disclose this info, and disclaim that it’s ‘as is’?”

**NDA Implementation**

-   If user wants both, insert **both** sub-clauses. If only one, insert just that one.

*[Build note: Optional section: include only if the user wants the representation of rights to disclose; default if unanswered: omit.]*

**9.1 Representation of Rights to Disclose**

The Disclosing Party represents and warrants that it has the right to disclose

the Confidential Information and that such disclosure does not breach any obligation

to a third party.

*[Build note: End of optional section.]*

*[Build note: Optional section: include only if the user wants the “as is” disclaimer; default if unanswered: omit.]*

**9.2 Liability Disclaimer (“as is”)**

All Confidential Information is provided on an ‘as is’ basis without any warranty,

express or implied, including warranties of accuracy, completeness,

or fitness for a particular purpose.

*[Build note: End of optional section.]*

**10\. INDEMNIFICATION (OPTIONAL)**

**User Question**

“Should the NDA include an indemnification clause for claims arising from the disclosed information?”

**NDA Implementation**

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

The Disclosing Party agrees to indemnify and hold harmless the Receiving Party

from any claims, damages, or liabilities arising out of the use or disclosure

of the Confidential Information, except in cases of the Receiving Party’s

gross negligence or willful misconduct.

*[Build note: End of optional section.]*

**11\. TERM & TERMINATION**

**11.1 Duration (Term of Confidentiality)**

**User Question**: “How long should confidentiality last?”
(1 year, 3 years, 5 years, indefinite, custom, etc.)

**Implementation**:

The obligations under this Agreement shall remain in effect for [CONFIDENTIALITY TERM]

from the Effective Date (or from disclosure), unless otherwise agreed in writing.

**11.2 Early Termination Clause (Optional)**

**User Question**: “Should we allow for early termination?”

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

Either Party may terminate this Agreement upon mutual written consent

or upon completion of the Purpose, provided that all confidentiality obligations

remain in effect for any information disclosed prior to termination.

*[Build note: End of optional section.]*

**12\. SURVIVAL CLAUSE**

**User Question**: “Should we explicitly state that confidentiality survives termination?”

**Implementation**:

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit. Write the number the Term & Termination section has in the assembled agreement.]*

The confidentiality obligations set forth in this Agreement shall survive

the termination or expiration of this Agreement for the full duration

specified in Section [TERM AND TERMINATION SECTION NUMBER].

*[Build note: End of optional section.]*

**13\. BREACH NOTIFICATION (OPTIONAL)**

**User Question**: “Include a requirement for the Receiving Party to notify the Disclosing Party of any unauthorized disclosure?”

**Implementation**:

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

The Receiving Party shall promptly notify the Disclosing Party in writing

upon becoming aware of any unauthorized use or disclosure of Confidential Information,

and shall cooperate in any reasonable remedial efforts.

*[Build note: End of optional section.]*

**14\. RETURN OR DESTRUCTION OF MATERIALS (OPTIONAL)**

**User Question**: “Should the NDA require the Receiving Party to return or destroy confidential materials after the agreement ends or upon request?”

**Implementation**:

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

Upon the Disclosing Party’s request or upon termination, the Receiving Party

shall promptly return or destroy all copies of Confidential Information

and shall certify such destruction in writing.

*[Build note: End of optional section.]*

**15\. REMEDIES**

**15.1 Injunctive Relief (Optional)**

**User Question**: “Include a statement that a breach may cause irreparable harm, allowing for injunctive relief?”

**Implementation**:

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

The Parties acknowledge that a breach of this Agreement may cause irreparable harm

for which monetary damages may be inadequate. Accordingly, the non-breaching Party

shall be entitled to seek injunctive relief in addition to any other remedies.

*[Build note: End of optional section.]*

**16\. DISPUTE RESOLUTION & GOVERNING LAW**

**16.1 Dispute Resolution Method**

**User Question**: “How should disputes be resolved (Arbitration, Mediation, or Court)?”

*[Build note: Optional section: the form flow lists the dispute resolution details as optional; include only if a method is chosen, and then keep exactly one of the options below.]*

*[Build note: Option A: disputes are resolved by arbitration.]*

Any dispute shall be resolved by binding arbitration administered

by [ARBITRATION BODY], and judgment on the award may be entered

in any court with jurisdiction.

*[Build note: Option B: disputes are resolved by mediation.]*

The Parties shall first attempt to resolve disputes by good faith mediation

before pursuing other legal remedies.

*[Build note: Option C: disputes are resolved in court.]*

The Parties consent to the jurisdiction of the courts in [COURT JURISDICTION]

for any dispute arising under or related to this Agreement.

*[Build note: End of options. The guide gives no default among the three methods.]*

*[Build note: End of optional section.]*

**16.2 Governing Law**

**User Question**: “Which jurisdiction’s laws govern this NDA?”

This Agreement shall be governed by and construed in accordance with

the laws of [GOVERNING LAW JURISDICTION], without regard to conflict of laws principles.

**17\. FORCE MAJEURE (OPTIONAL)**

**User Question**: “Include a force majeure clause covering unexpected events like natural disasters, government actions?”

**Implementation**:

*[Build note: Optional section: include only if the answer is “Yes”; default if unanswered: omit.]*

Neither Party shall be liable for failure or delay in performing obligations

due to causes beyond their reasonable control, including acts of God, war,

government orders, or other unforeseeable events.

*[Build note: End of optional section.]*

**18\. SIGNATURES**

**Implementation**:

-   For unilateral or mutual NDAs, provide signature lines for each Party.
-   For multi-party, list each Party with a line to sign.

Example:

*[Build note: Write the party names from section 2: the Disclosing and Receiving Party names for a unilateral NDA, the Party A and Party B names for a mutual NDA. For a multi-party NDA, give one line to each name in [LIST OF ALL PARTY NAMES].]*

[DISCLOSING PARTY OR PARTY A NAME] \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_\_

[RECEIVING PARTY OR PARTY B NAME] \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_\_

(For multi-party, repeat as needed.)

**19\. ENTIRE AGREEMENT, SEVERABILITY, WAIVER (Usually Standard)**

Typically **always** included, unless user explicitly insists on removing them:

1.  **Entire Agreement**

This Agreement constitutes the entire agreement between the Parties

relating to the subject matter and supersedes all prior understandings.

1.  **Severability**

If any provision is held invalid, the remaining provisions remain in full force and effect.

1.  **Waiver**

No waiver of any provision is a waiver of any subsequent or other provision.

**VALIDATION REQUIREMENTS**

1.  **Effective Date**
    -   Must not be in the past (or per your business logic).
2.  **Party Information** must match NDA Type:
    -   **Unilateral**: Exactly two parties (one disclosing, one receiving).
    -   **Mutual**: Exactly two parties (both disclosing).
    -   **Multi-party**: Three or more parties.
3.  **Duration** must be a positive number if user picks a numeric term.

**ERROR HANDLING**

-   If user selects **Mutual** NDA but enters only one party → “Mutual NDAs require two parties.”
-   If user enters an end date that precedes the start date → “End date must be after start date.”
-   If user selects **Multi-party** but enters fewer than 3 parties → “Multi-party NDAs require at least 3 parties.”

**FINAL IMPLEMENTATION NOTES**

1.  **Show/Hide Logic**
    -   For each optional clause (e.g., Indemnification, Non-Solicitation, Force Majeure), present a **Yes/No** toggle in the form. If “Yes,” include the exact language above. If “No,” skip that clause.
2.  **Insert Fields**
    -   Where the text shows [EFFECTIVE DATE], [DISCLOSING PARTY NAME], [GOVERNING LAW JURISDICTION], etc., you simply insert the user’s input.
3.  **Never Invent Language**
    -   All paragraphs above are **final**. Developers only add or omit them based on user choices.
4.  **Combine**
    -   In the final NDA, arrange the selected clauses in this order.
5.  **Check**
    -   If user’s choices conflict with the required logic (e.g., a “Mutual” NDA but only one party), show an error and ask them to fix it.
