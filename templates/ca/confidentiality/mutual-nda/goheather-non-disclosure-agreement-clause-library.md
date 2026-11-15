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
language: en
source:
  name: goHeather
  url: https://goheather.io
  file: templates/ca/confidentiality/mutual-nda/goheather-non-disclosure-agreement-clause-library.docx
  retrieved: "2026-11-15"
  notes: >-
    Written by goHeather (Tally Works Inc.) as a clause library: for each section it gives the question to ask the user,
    the exact text to use for each answer and the fallback when the user gives no answer. It is meant for goHeather's
    app and for assistants to build a complete agreement from, not to be signed as it stands. The Word file beside this
    template is goHeather's original. Published by goHeather under CC BY 4.0: anyone may use, adapt and share it, including commercially, with credit to goHeather.
license: CC-BY-4.0
status: draft
version: 1.0.0
last_reviewed: "2026-11-15"
reviewed_by: ""
summary: >-
  goHeather's clause library for assembling a unilateral, mutual or multi-party non-disclosure agreement: the form flow,
  the user question for each section, and the exact text for each option.
---

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

**Effective Date**: [User’s chosen date]

**Sample Language**

This Non-Disclosure Agreement (“Agreement”) is entered into as of [Effective Date] by and between the following parties: (Then proceed to list the parties, as described below.)

**2\. NDA TYPE (UNILATERAL, MUTUAL, MULTI-PARTY)**

**User Question**

“What type of NDA is needed?”

-   Unilateral (one party disclosing)
-   Mutual (two parties disclosing)
-   Multi-Party (3+ parties)

**NDA Implementation**

Choose **one** of the following openings, based on the user’s selection:

1.  **Unilateral NDA Opening**

This Non-Disclosure Agreement is made and entered into by and between:

\- [Disclosing Party Name] (the “Disclosing Party”), and

\- [Receiving Party Name] (the “Receiving Party”).

WHEREAS, the Disclosing Party possesses certain Confidential Information (as defined herein)

that it desires to protect from unauthorized disclosure or use, and the Receiving Party

is willing to receive and hold such information in confidence.

1.  **Mutual NDA Opening**

This Non-Disclosure Agreement is made and entered into by and between:

\- [Party A Name] (“Party A”) and

\- [Party B Name] (“Party B”).

WHEREAS, each Party has Confidential Information that may be disclosed to the other

in connection with the Purpose (as defined herein), and each Party is willing to

protect the other’s Confidential Information in accordance with this Agreement.

1.  **Multi-Party NDA Opening**

This Non-Disclosure Agreement (“Agreement”) is made and entered into by and among

the following parties (collectively, the “Parties”):

\- [List of All Party Names]

WHEREAS, each Party may disclose Confidential Information to the others,

and each Party desires to ensure that all Confidential Information is kept

confidential under the terms of this Agreement.

**3\. PARTY TYPE: INDIVIDUAL OR BUSINESS**

**User Question**

“Are you signing as an individual or on behalf of a business entity?”

**NDA Implementation**

-   If **Individual**: Insert language referencing an individual, e.g.:
    “John Smith, an individual residing at [Address].”
-   If **Business**: Insert language referencing a business entity, e.g.:
    “XYZ Inc., a [State/Province] corporation (or LLC, etc.) with its principal place of business at [Address].”

*(For multi-party NDAs, repeat for each party.)*

**4\. PURPOSE OF THE NDA**

**User Question**

“What is the main reason or context for disclosing Confidential Information?” (Freelance/Consulting, Partnership, Investor Pitch, Employee/Contractor Onboarding, etc.)

**NDA Implementation**

Insert the user’s provided text into a statement such as:

Purpose: The Parties wish to disclose certain confidential information in connection with [User’s Provided Purpose].

*(No additional text needed unless you have specialized language for each scenario.)*

**5\. DEFINING “CONFIDENTIAL INFORMATION”**

**User Question**

“How do you want to define ‘Confidential Information’?”

-   Standard Broad Definition
-   List of Specific Categories
-   Custom Definition

**NDA Implementation**

-   **If Standard Broad**:

Definition of Confidential Information:

“Confidential Information” means any non-public, proprietary, or confidential information

disclosed by one Party to another, including but not limited to technical, financial,

business, or strategic information.

-   **If Specific Categories**:

Definition of Confidential Information:

“Confidential Information” includes, without limitation, the following categories

selected by the user: [User’s list, e.g., technical data, financial info, software code].

Any other information that should reasonably be understood as confidential also qualifies.

-   **If Custom**:

mathematica

Definition of Confidential Information:

“[User’s custom definition text].”

**6\. EXCLUSIONS FROM CONFIDENTIAL INFORMATION**

**User Question**

“Use standard exclusions (public domain, known prior, etc.) or provide custom exclusions?”

**NDA Implementation**

-   **If Standard**: Insert this block:

Confidential Information does not include information that:

1\. Is or becomes publicly available without breach of this Agreement;

2\. Was already known by the Receiving Party prior to disclosure, as evidenced by documentation;

3\. Is independently developed by the Receiving Party without reference to the Confidential Information;

4\. Is obtained from a third party not under a duty of confidentiality;

5\. Must be disclosed under law or court order, provided the Receiving Party promptly notifies

the Disclosing Party (if permitted).

-   **If Custom**: Use the user’s typed text in place of the above bullet points.

**7\. SCOPE & USE OF INFORMATION**

*(Usually always included—no user question.)*

The Receiving Party shall use the Confidential Information solely for the Purpose described

and shall not use it for any other purpose without the Disclosing Party’s prior written consent.

**8\. CONFIDENTIALITY OBLIGATIONS & OPTIONAL CLAUSES**

The following clauses are **optional**. Present each as a **Yes/No** question; if “Yes,” include the text verbatim.

**8.1 No Reverse Engineering**

**User Question**: “Do you want to prohibit reverse engineering?”

-   **If Yes**, insert:

The Receiving Party shall not decompile, disassemble, or reverse engineer

any Confidential Information, nor permit any third party to do so,

without the Disclosing Party’s express written permission.

**8.2 Non-Competition / Non-Circumvention**

**User Question**: “Include a non-competition or non-circumvention clause?”

-   **If Yes**, insert:

The Receiving Party shall not use the Disclosing Party’s Confidential Information

to directly or indirectly compete with or circumvent the Disclosing Party

in any business opportunity arising from such information.

**8.3 Non-Solicitation**

**User Question**: “Should the NDA include a non-solicitation clause?”

-   If “Yes,” also ask “For how long?”
-   **If Yes**, insert:

For a period of [X months/years] from the Effective Date (or from the date of disclosure),

the Receiving Party shall not solicit or attempt to solicit for employment or contract

any employee or client of the Disclosing Party that the Receiving Party became aware of

through Confidential Information.

**8.4 Non-Disparagement**

**User Question**: “Include a non-disparagement clause?”

-   **If Yes**, insert:

The Parties agree not to disparage, defame, or publicly criticize each other

based on any Confidential Information disclosed under this Agreement.

**9\. REPRESENTATIONS & WARRANTIES**

**User Question**

“Include a clause that the Disclosing Party has the right to disclose this info, and disclaim that it’s ‘as is’?”

**NDA Implementation**

-   If user wants both, insert **both** sub-clauses. If only one, insert just that one.

**9.1 Representation of Rights to Disclose**

The Disclosing Party represents and warrants that it has the right to disclose

the Confidential Information and that such disclosure does not breach any obligation

to a third party.

**9.2 Liability Disclaimer (“as is”)**

All Confidential Information is provided on an ‘as is’ basis without any warranty,

express or implied, including warranties of accuracy, completeness,

or fitness for a particular purpose.

**10\. INDEMNIFICATION (OPTIONAL)**

**User Question**

“Should the NDA include an indemnification clause for claims arising from the disclosed information?”

**NDA Implementation**

-   **If Yes**, insert:

The Disclosing Party agrees to indemnify and hold harmless the Receiving Party

from any claims, damages, or liabilities arising out of the use or disclosure

of the Confidential Information, except in cases of the Receiving Party’s

gross negligence or willful misconduct.

**11\. TERM & TERMINATION**

**11.1 Duration (Term of Confidentiality)**

**User Question**: “How long should confidentiality last?”
(1 year, 3 years, 5 years, indefinite, custom, etc.)

**Implementation**:

The obligations under this Agreement shall remain in effect for [user’s chosen duration]

from the Effective Date (or from disclosure), unless otherwise agreed in writing.

**11.2 Early Termination Clause (Optional)**

**User Question**: “Should we allow for early termination?”

-   If “Yes,” add:

Either Party may terminate this Agreement upon mutual written consent

or upon completion of the Purpose, provided that all confidentiality obligations

remain in effect for any information disclosed prior to termination.

**12\. SURVIVAL CLAUSE**

**User Question**: “Should we explicitly state that confidentiality survives termination?”

**Implementation**:

The confidentiality obligations set forth in this Agreement shall survive

the termination or expiration of this Agreement for the full duration

specified in Section [Term & Termination].

**13\. BREACH NOTIFICATION (OPTIONAL)**

**User Question**: “Include a requirement for the Receiving Party to notify the Disclosing Party of any unauthorized disclosure?”

**Implementation**:

-   **If “Yes,”** add:

The Receiving Party shall promptly notify the Disclosing Party in writing

upon becoming aware of any unauthorized use or disclosure of Confidential Information,

and shall cooperate in any reasonable remedial efforts.

**14\. RETURN OR DESTRUCTION OF MATERIALS (OPTIONAL)**

**User Question**: “Should the NDA require the Receiving Party to return or destroy confidential materials after the agreement ends or upon request?”

**Implementation**:

-   **If “Yes,”** add:

Upon the Disclosing Party’s request or upon termination, the Receiving Party

shall promptly return or destroy all copies of Confidential Information

and shall certify such destruction in writing.

**15\. REMEDIES**

**15.1 Injunctive Relief (Optional)**

**User Question**: “Include a statement that a breach may cause irreparable harm, allowing for injunctive relief?”

**Implementation**:

-   **If “Yes,”** insert:

The Parties acknowledge that a breach of this Agreement may cause irreparable harm

for which monetary damages may be inadequate. Accordingly, the non-breaching Party

shall be entitled to seek injunctive relief in addition to any other remedies.

**16\. DISPUTE RESOLUTION & GOVERNING LAW**

**16.1 Dispute Resolution Method**

**User Question**: “How should disputes be resolved (Arbitration, Mediation, or Court)?”

-   **If “Arbitration,”** add:

Any dispute shall be resolved by binding arbitration administered

by [arbitration body], and judgment on the award may be entered

in any court with jurisdiction.

-   **If “Mediation,”** add:

The Parties shall first attempt to resolve disputes by good faith mediation

before pursuing other legal remedies.

-   **If “Court,”** add:

The Parties consent to the jurisdiction of the courts in [Chosen Jurisdiction]

for any dispute arising under or related to this Agreement.

**16.2 Governing Law**

**User Question**: “Which jurisdiction’s laws govern this NDA?”

This Agreement shall be governed by and construed in accordance with

the laws of [Jurisdiction], without regard to conflict of laws principles.

**17\. FORCE MAJEURE (OPTIONAL)**

**User Question**: “Include a force majeure clause covering unexpected events like natural disasters, government actions?”

**Implementation**:

-   **If “Yes,”** add:

Neither Party shall be liable for failure or delay in performing obligations

due to causes beyond their reasonable control, including acts of God, war,

government orders, or other unforeseeable events.

**18\. SIGNATURES**

**Implementation**:

-   For unilateral or mutual NDAs, provide signature lines for each Party.
-   For multi-party, list each Party with a line to sign.

Example:

[Disclosing Party / Party A Name] \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_\_

[Receiving Party / Party B Name] \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_\_

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
    -   Where the text shows [User’s chosen date], [Disclosing Party Name], [Jurisdiction], etc., you simply insert the user’s input.
3.  **Never Invent Language**
    -   All paragraphs above are **final**. Developers only add or omit them based on user choices.
4.  **Combine**
    -   In the final NDA, arrange the selected clauses in this order.
5.  **Check**
    -   If user’s choices conflict with the required logic (e.g., a “Mutual” NDA but only one party), show an error and ask them to fix it.
