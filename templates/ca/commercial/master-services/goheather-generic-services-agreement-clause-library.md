---
title: goHeather Generic Services Agreement Clause Library
jurisdiction: CA
category: commercial
subcategory: master-services
type: clause-library
parties:
  - provider
  - client
tags:
  - services-agreement
  - question-flow
  - developer-guide
  - fees
  - intellectual-property
  - termination
  - build-notes
language: en
source:
  name: goHeather
  url: https://goheather.io
  file: templates/ca/commercial/master-services/goheather-generic-services-agreement-clause-library.docx
  retrieved: "2026-11-15"
  notes: >-
    Written by goHeather (Tally Works Inc.) as the developer guide for its contract builder: for each section it gives
    the question to ask the user, the exact text to use for each answer and the fallback when the user gives no answer.
    It is meant for goHeather's app and for assistants to build a complete agreement from, not to be signed as it
    stands. The Word file beside this template is goHeather's original. In this Markdown version the fill-ins are named
    placeholders listed in the Inputs table, and the alternatives and optional clauses carry the library's build-note
    markers; the clause text is unchanged. Published by goHeather under CC BY 4.0: anyone may use, adapt and share it,
    including commercially, with credit to goHeather.
license: CC-BY-4.0
status: draft
version: 1.1.0
last_reviewed: "2026-11-17"
reviewed_by: ""
summary: >-
  goHeather's clause library for assembling a generic services agreement: mandatory and optional sections, the user
  question for each, the exact clause text for each answer, and the default used when the user gives none. Starts with
  a table of every input and the sections it drives; alternative wordings and optional clauses are marked with build
  notes.
---

> **How to build an agreement from this clause library.** Each lettered section below gives the question the builder asks, the exact clause text for each answer, and the default used when the user gives no answer. Fill-in fields are placeholders in square brackets and capitals; the Inputs table below lists every one with its format. Instructions are italic build notes in square brackets, `*[Build note: ...]*`, and come in three kinds here: an optional section runs from `*[Build note: Optional section: ...]*` to `*[Build note: End of optional section.]*`; alternative wordings run from `*[Build note: Option A: ...]*` through `*[Build note: Option B: ...]*` to `*[Build note: End of options.]*`, and exactly one option is kept; any other build note is a plain instruction. Only the quoted clause text goes into the agreement; the guide's own prose (user questions, "If user says", defaults, sections X to Z) does not. Section letters are for reference only: assemble the kept clauses in the order section Z gives. Delete every build note before use.

**INPUTS**

| Placeholder | Question the builder asks | Format | Used in |
| --- | --- | --- | --- |
| `[EFFECTIVE DATE]` | What is the Agreement's Effective Date? | date written in full, e.g. January 6, 2027 | sections A, I |
| `[SERVICE PROVIDER NAME]` | What is the Service Provider's name, address, and entity type? | name of the individual or entity | sections A, B (both options), V |
| `[SERVICE PROVIDER JURISDICTION OF FORMATION]` | (part of the Service Provider question) | state or province, e.g. Ontario | section B, option B |
| `[SERVICE PROVIDER ENTITY TYPE]` | (part of the Service Provider question) | type of entity, e.g. corporation | section B, option B |
| `[SERVICE PROVIDER ADDRESS]` | (part of the Service Provider question) | street address | section B, option B |
| `[CLIENT NAME]` | What is the Client's name, address, and entity type? | name of the individual or entity; the Client's address and entity type are asked but no clause in this library uses them | sections A, V |
| (choice) | Is the Service Provider an individual or a company? | picks option A or B; the guide gives no default | section B |
| `[SERVICES DESCRIPTION]` | Describe the services. | text | section C |
| (yes/no) | Any additional details in an attached SOW? | the SOW sentence in section C applies on its own terms when a SOW is attached | section C |
| (choice) | Which payment model? (Hourly, Fixed Fee, Retainer, etc.) | picks option A, B or C; default if unanswered: the Default Fallback paragraph at the end of section D | section D |
| `[HOURLY RATE]` | What is the rate? | amount with currency symbol, e.g. $50 | section D, option A |
| `[INVOICE FREQUENCY]` | How is payment due? | the word "weekly" or "monthly" | section D, option A |
| `[PAYMENT DAYS]` | When is payment due? | number of days, e.g. 30 | section D, option A |
| `[FIXED FEE AMOUNT]` | What is the total amount? | amount with currency symbol | section D, option B |
| `[PAYMENT SCHEDULE]` | How/when is payment due? | text, e.g. 50% upfront, 50% upon completion | section D, option B |
| `[RETAINER AMOUNT]` | What is the retainer amount? | amount with currency symbol | section D, option C |
| (yes/no) | Escrow Payment? | includes or removes the escrow paragraph; default if unanswered: no | section D |
| `[ESCROW SERVICE]` | Which escrow service? | name of the service | section D, escrow |
| `[ESCROW FEE PAYER]` | Who bears the escrow fees? | "Client", "Service Provider" or "both" | section D, escrow |
| (yes/no) | Late Payment Fees? | includes or removes the late fees paragraph; default if unanswered: no | section D |
| `[LATE PAYMENT GRACE PERIOD]` | How long after the due date do late fees start? | number with unit, e.g. 15 days | section D, late fees |
| `[LATE INTEREST RATE]` | What interest rate applies? | rate per month, e.g. 1.5% per month | section D, late fees |
| (yes/no) | Payment Milestones? | includes or removes the milestones paragraph; default if unanswered: no | section D |
| `[MILESTONE AMOUNT]`, `[MILESTONE DELIVERABLE]`, `[MILESTONE DATE]` | For each milestone: amount, deliverable and date | amount with currency symbol; text; date written in full; one line per milestone, all three required | section D, milestones |
| `[MILESTONE PAYMENT TERMS]` | When are milestone invoices due? | payment terms, e.g. net 30 days | section D, milestones |
| (yes/no) | Reimburse out-of-pocket expenses? | includes or removes section E; default if unanswered: no | section E |
| `[EXPENSE APPROVAL THRESHOLD]` | Above what amount does an expense need prior approval? | amount with currency symbol | section E |
| (choice) | Who owns the deliverables? (Client, Provider, or Joint) | picks option A, B or C; default if unanswered: option D | section F |
| `[JOINT OWNERSHIP SPLIT]` | What ownership interest does each Party hold? | text, e.g. an equal | section F, option C |
| (yes/no) | Confidentiality Clause? | includes or removes section G; default if unanswered: include, one-way, 2 years | section G |
| (choice) | If yes, mutual or one-way? | picks option A or B; default if unanswered: option A | section G |
| `[CONFIDENTIALITY PERIOD]` | Duration? | number with unit, e.g. 2 years | section G, both options |
| (yes/no) | Include non-solicitation? | includes or removes the non-solicitation paragraph in section H | section H |
| `[NON-SOLICITATION PERIOD]` | How long? | number with unit, e.g. 12 months | section H, non-solicitation |
| (yes/no) | Include non-compete? | includes or removes the non-compete paragraph in section H | section H |
| `[NON-COMPETE PERIOD]` | How long? | number with unit, e.g. 12 months | section H, non-compete |
| `[CLIENT INDUSTRY]` | Which industry or business? | text | section H, non-compete |
| `[NON-COMPETE REGION]` | Which region? | geographic region, e.g. the Province of Ontario | section H, non-compete |
| `[TERM END]` | Fixed end date or indefinite? | a date written in full or the word "completion"; the guide gives no separate wording for an indefinite term, which is its default | section I |
| (yes/no) | Any early termination notice? | includes or removes the Termination by Notice paragraph; default if unanswered: include, with 30 days' notice | section I |
| `[TERMINATION NOTICE PERIOD]` | If yes, how many days? | number of days in the possessive, e.g. 30 days' | section I |
| (yes/no) | Termination fee if Client ends early? | includes or removes the termination fee paragraph; default if unanswered: no | section I |
| `[TERMINATION FEE]` | What is the termination fee? | percentage or amount, e.g. 10% or $500 | section I, termination fee |
| (yes/no) | Mutual termination? | includes or removes the mutual termination paragraph; default if unanswered: no | section I |
| (yes/no) | Include standard R&Ws for skill, authority, no conflict? | includes or removes section J | section J |
| (yes/no, each) | Which disclaimers do you want? (No Guarantee of Results, No Legal/Financial Advice, Intangible Outcomes?) | includes or removes each of the three disclaimers; default if left blank and the services are advisory: the first two | section K |
| (yes/no) | Indemnification for IP infringement, negligence? | includes or removes section L | section L |
| (choice) | One-way or mutual? | mutual adds the second paragraph to the first | section L |
| (yes/no) | Limit Provider's liability? | includes or removes section M | section M |
| `[LIABILITY CAP AMOUNT]` | If yes, specify amount. | amount with currency symbol | section M |
| (yes/no) | Include an acceptance period? | includes or removes section N | section N |
| `[ACCEPTANCE PERIOD]` | If yes, how many days? | number with unit, e.g. 10 days | section N |
| (yes/no) | Do you want to define performance metrics? | includes or removes section O | section O |
| `[PERFORMANCE METRICS]` | If yes, list them. | list of metrics | section O |
| (yes/no) | Tax compliance clause? | includes or removes section P | section P |
| (yes/no) | Require Provider to carry insurance? | includes or removes section Q | section Q |
| `[INSURANCE TYPES AND AMOUNTS]` | If yes, type and coverage. | text, e.g. $2,000,000 of commercial general liability | section Q |
| `[GOVERNING LAW JURISDICTION]` | Which jurisdiction's law? | jurisdiction, e.g. the Province of Ontario | section R |
| `[DISPUTE FORUM]` | How to resolve disputes: arbitration, mediation, or court? | the word "Arbitration", "Mediation" or "Courts" | section R |
| `[DISPUTE LOCATION]` | Where are disputes resolved? | city and state or province | section R |
| (information) | Who bears legal costs? | asked, but the clause text fixes it: each Party bears its own costs | section R |
| (yes/no) | Include force majeure coverage? If yes, any exclusions? | includes or removes section S; default if unanswered: the text as written with no additional exclusions | section S |
| (yes/no) | Specify certain hours/days Provider must be available? | includes or removes section T | section T |
| `[AVAILABILITY HOURS]` | Which days and hours? | text, e.g. Monday to Friday, 9 a.m. to 5 p.m. | section T |
| (yes/no) | Include a cure period for material breach? | includes or removes section U | section U |
| `[CURE PERIOD]` | If yes, how many days? | number with unit, e.g. 30 days | section U |
| `[SIGNATURE]` | (signature line, not asked) | signed by hand or electronically | section V |
| `[CLIENT SIGNATORY TITLE]` | Client signatory's title | title, if the Client is a business; otherwise remove | section V |
| `[SERVICE PROVIDER SIGNATORY TITLE]` | Service Provider signatory's title | title, if applicable; otherwise remove | section V |

**GENERIC SERVICES AGREEMENT (GSA) DEVELOPER INSTRUCTIONS**

1.  **MANDATORY SECTIONS**
    These sections always appear in the final contract, regardless of user choices:

(1) Parties & Effective Date
(2) Scope of Services
(3) Fees & Payment (at least one default must be used)
(4) Term & Termination (at least a default scenario)
(5) Signatures
(6) Miscellaneous (Entire Agreement, Severability, etc.)

1.  **OPTIONAL SECTIONS**
    The user might say “Yes” or “No” to each. If “Yes,” you add the **exact** text from the library below. If “No,” you skip it entirely. If user gives no answer, use the fallback defaults specified.
2.  **CLAUSE LIBRARY**

Below is a library of clauses. **DO NOT** invent or draft new text yourself. **Always** copy/paste the text exactly as shown if the user chooses that clause. Some references like “[EFFECTIVE DATE]” or “[PAYMENT DAYS]” get replaced by the user’s numeric or text input; the Inputs table above lists every one.

A. PARTIES & EFFECTIVE DATE (MANDATORY)

**User Questions**

-   “What is the Agreement’s Effective Date?”
-   “What is the Service Provider’s name, address, and entity type?”
-   “What is the Client’s name, address, and entity type?”

**Exact Text**
“This Generic Services Agreement (“Agreement”) is entered into as of [EFFECTIVE DATE], by and between [SERVICE PROVIDER NAME] (“Service Provider”) and [CLIENT NAME] (“Client”).”

B. SERVICE PROVIDER STATUS (MANDATORY)

*[Build note: Option A: the Service Provider is an individual.]*

If user indicates “individual,” use:

“Service Provider is an individual, operating under [SERVICE PROVIDER NAME]. Nothing in this Agreement creates an employment or partnership relationship with the Client.”

*[Build note: Option B: the Service Provider is a company.]*

If user indicates “company,” use:

“Service Provider is [SERVICE PROVIDER NAME], a [SERVICE PROVIDER JURISDICTION OF FORMATION] [SERVICE PROVIDER ENTITY TYPE], with its principal place of business at [SERVICE PROVIDER ADDRESS], and will act solely as an independent contractor.”

*[Build note: End of options. The guide gives no default for this choice.]*

C. SCOPE OF SERVICES (MANDATORY)

**User Question**: “Describe the services. Any additional details in an attached SOW?” (Yes/No)

**Exact Text**
“Scope of Services. Service Provider shall provide the following services: [SERVICES DESCRIPTION].
If a Statement of Work (“SOW”) is attached, it is incorporated herein by reference. In the event of any conflict between this Agreement and the SOW, this Agreement controls.”

D. FEES & PAYMENT (MANDATORY, WITH OPTIONALS)

**User Questions**

1.  “Which payment model? (Hourly, Fixed Fee, Retainer, etc.)”
2.  “What is the rate or total amount? How/when is payment due?”
3.  (Optional) “Escrow Payment?”
4.  (Optional) “Late Payment Fees?”
5.  (Optional) “Payment Milestones?”

Include the relevant text below based on user’s choices. If the user **skips everything**, fallback to “Hourly at $50/hr, monthly invoice, net 30,” with no escrow, no late fees, no milestones.

**Exact Text Options**:

*[Build note: Option A: payment model is hourly. Default if unanswered: the Default Fallback paragraph at the end of this section.]*

**Hourly**: “Client shall pay Service Provider at a rate of [HOURLY RATE] per hour. Service Provider shall invoice [INVOICE FREQUENCY], and payment is due within [PAYMENT DAYS] days of invoice date.”

*[Build note: Option B: payment model is a fixed fee.]*

**Fixed Fee**: “Client shall pay a total fee of [FIXED FEE AMOUNT] for the services. Payment schedule: [PAYMENT SCHEDULE], unless otherwise agreed.”

*[Build note: Option C: payment model is a retainer.]*

**Retainer**: “Client shall pay a retainer of [RETAINER AMOUNT] upon signing. This retainer will be credited against future invoices. Any unused portion is refunded at Agreement’s end.”

*[Build note: End of options. If the user gave no payment information, use the Default Fallback paragraph at the end of this section instead of options A to C, with no escrow, no late fees and no milestones.]*

*[Build note: Optional section: include only if the user says “Yes” to escrow payment. Default if unanswered: no.]*

**Optional: Escrow Payment**
If user says “Yes,” add:
“All payments shall be processed via [ESCROW SERVICE]. Escrow fees shall be borne by [ESCROW FEE PAYER].”

*[Build note: End of optional section.]*

*[Build note: Optional section: include only if the user says “Yes” to late payment fees. Default if unanswered: no. If escrow is also chosen, see section Y.]*

**Optional: Late Payment Fees**
If user says “Yes,” add:
“Any invoice not paid within [LATE PAYMENT GRACE PERIOD] of its due date shall accrue interest at [LATE INTEREST RATE], or the maximum legal rate, whichever is lower.”

*[Build note: End of optional section.]*

*[Build note: Optional section: include only if the user says “Yes” to payment milestones. Default if unanswered: no. Repeat the milestone line once per milestone; every milestone needs an amount, a deliverable and a date (see section Y).]*

**Optional: Payment Milestones**
If user says “Yes,” ask them for each milestone. Then add lines like:
“Payment Milestones:

-   Milestone 1: [MILESTONE AMOUNT] due upon completion of [MILESTONE DELIVERABLE], no later than [MILESTONE DATE].
-   Milestone 2: [MILESTONE AMOUNT] due upon completion of [MILESTONE DELIVERABLE], no later than [MILESTONE DATE].
    Invoices for each milestone are due [MILESTONE PAYMENT TERMS].”

*[Build note: End of optional section.]*

**Default Fallback**
“If no info is provided, insert:
Client shall pay Service Provider **$50/hr**, invoiced monthly. Payment is due **net 30** days. No escrow or late fees apply.”

E. EXPENSES & MATERIALS (OPTIONAL)

**User Question**: “Reimburse out-of-pocket expenses?” (Yes/No)

*[Build note: Optional section: include only if the user says “Yes” to expense reimbursement. Default if unanswered: skip the section (no expense reimbursement).]*

If “Yes,” use EXACT text:

“Expenses. Client shall reimburse Service Provider for reasonable and necessary expenses directly related to the services, provided any single expense exceeding [EXPENSE APPROVAL THRESHOLD] has prior written approval. Service Provider shall submit receipts with invoices.”

*[Build note: End of optional section.]*

**If user never answers**: skip this section or fallback to “No expense reimbursement.”

F. INTELLECTUAL PROPERTY (MANDATORY, CHOOSE ONE)

**User Question**

-   “Who owns the deliverables? (Client, Provider, or Joint)”

Pick from these EXACT blocks:

*[Build note: Option A: the Provider owns the deliverables. Default if unanswered: option D.]*

**Provider Retains IP + License**
“Intellectual Property. Service Provider retains all rights to any deliverables or work product (“Work Product”) created under this Agreement. Service Provider grants Client a perpetual, non-exclusive, worldwide license to use the Work Product for Client’s internal business purposes.”

*[Build note: Option B: the Client owns the deliverables.]*

**Client Owns IP**
“Intellectual Property. Any deliverables or work product created under this Agreement shall be owned exclusively by Client. Service Provider hereby assigns all right, title, and interest in the Work Product to Client.”

*[Build note: Option C: the deliverables are jointly owned.]*

**Joint IP**
“Intellectual Property. The Work Product is jointly owned by both Parties, each holding [JOINT OWNERSHIP SPLIT] ownership interest. Each Party may use or license the Work Product independently, so long as it does not violate any confidentiality or other obligations herein.”

*[Build note: Option D: the user did not answer. This is the default.]*

**Refined Default**
If user omits, use:
“Client owns the deliverables; however, Service Provider may display the deliverables in its portfolio or promotional materials, provided that no confidential Client data is revealed.”

*[Build note: End of options.]*

G. CONFIDENTIALITY (OPTIONAL)

**User Question**: “Confidentiality Clause? (Yes/No). If yes, mutual or one-way? Duration?”

*[Build note: Optional section: include only if the user says “Yes” to a confidentiality clause. Default if unanswered: include option A with [CONFIDENTIALITY PERIOD] set to 2 years.]*

*[Build note: Option A: the clause is one-way, protecting the Client. Default if unanswered.]*

If user says “Yes” and “One-Way,” use:

“Confidentiality. Service Provider shall not disclose or use any confidential or proprietary information of Client except as required to perform the services. This obligation continues for [CONFIDENTIALITY PERIOD] after termination.”

*[Build note: Option B: the clause is mutual.]*

If user says “Yes” and “Mutual,” use:

“Confidentiality (Mutual). Each Party agrees not to disclose or use the other’s confidential information except to perform obligations under this Agreement, for [CONFIDENTIALITY PERIOD] after termination.”

*[Build note: End of options.]*

*[Build note: End of optional section.]*

**Refined Default**
If user doesn’t pick any confidentiality preference, default to a **one-way** clause (protecting Client’s info) for 2 years.

H. NON-SOLICITATION / NON-COMPETE (OPTIONAL)

**User Question**: “Include non-solicitation or non-compete? If yes, how long or which region?”

*[Build note: Optional section: include only if the user wants a non-solicitation clause.]*

Non-Solicitation (if yes):
“During this Agreement and for [NON-SOLICITATION PERIOD] thereafter, Service Provider shall not solicit or hire any employee or contractor of Client or induce any client of Client to discontinue or diminish its relationship with Client.”

*[Build note: End of optional section.]*

*[Build note: Optional section: include only if the user wants a non-compete clause.]*

Non-Compete (if yes):
“For [NON-COMPETE PERIOD] after termination, Service Provider shall not engage in any activity that directly competes with Client’s [CLIENT INDUSTRY] within [NON-COMPETE REGION], subject to applicable law.”

*[Build note: End of optional section.]*

I. TERM & TERMINATION (MANDATORY, WITH OPTIONALS)

**User Questions**:

-   “Fixed end date or indefinite?”
-   “Any early termination notice? (Yes/No) If yes, how many days?”
-   “Termination fee if Client ends early?”

**Text**:

Term. This Agreement begins on [EFFECTIVE DATE] and continues until [TERM END], unless terminated earlier as provided below.

*[Build note: Optional section: include only if the user wants an early termination notice. Default if unanswered: include, with [TERMINATION NOTICE PERIOD] set to 30 days'.]*

Termination by Notice. Either Party may terminate this Agreement by giving [TERMINATION NOTICE PERIOD] written notice to the other.

*[Build note: End of optional section.]*

*[Build note: Optional section: include only if the user says “Yes” to a termination fee. Default if unanswered: no. If mutual termination is also chosen, see section Y.]*

**Optional: Termination Fee**
If user picks “Yes,” add:
“If Client terminates for reasons other than Service Provider’s breach, Client shall pay a termination fee of [TERMINATION FEE], in addition to fees for services performed up to termination.”

*[Build note: End of optional section.]*

*[Build note: Optional section: include only if the user says “Yes” to mutual termination. Default if unanswered: no.]*

**Optional: Mutual Termination**
If user picks “Yes,” add:
“This Agreement may also be terminated at any time upon mutual written consent of the Parties.”

*[Build note: End of optional section.]*

**Refined Default Term Clause**
If user does not specify, indefinite term with 30 days’ notice, no termination fee, no mutual termination.

J. REPRESENTATIONS & WARRANTIES (OPTIONAL)

**User Question**: “Include standard R&Ws for skill, authority, no conflict?” (Yes/No)

*[Build note: Optional section: include only if the user says “Yes” to representations and warranties.]*

If “Yes,” use:

“Representations & Warranties. Service Provider represents having the necessary skill and expertise to perform the services in a professional manner and that the Work Product does not knowingly infringe any third-party rights. Client represents having the authority to enter this Agreement.”

*[Build note: End of optional section.]*

K. DISCLAIMERS (IMPORTANT FOR PROVIDER)

**User Question**: “Which disclaimers do you want? (No Guarantee of Results, No Legal/Financial Advice, Intangible Outcomes?)”

**Exact Text Options**:

*[Build note: Optional section: include only if the user chooses the No Guarantee of Results disclaimer. Default if left blank and the services are advisory: include.]*

No Guarantee of Results:
“Service Provider makes no guarantee of any particular outcome or business results from the services, as multiple factors beyond Provider’s control may affect final outcomes.”

*[Build note: End of optional section.]*

*[Build note: Optional section: include only if the user chooses the No Legal/Financial Advice disclaimer. Default if left blank and the services are advisory: include.]*

No Legal/Financial Advice:
“These services are consultative and do not constitute legal, financial, or accounting advice. Client should seek appropriate professional counsel for such matters.”

*[Build note: End of optional section.]*

*[Build note: Optional section: include only if the user chooses the Intangible Outcomes disclaimer.]*

Intangible Outcomes Disclaimer:
“Where deliverables involve creative or strategic concepts, outcomes may be subjective or intangible. Service Provider is not liable if subjective expectations are not met, provided deliverables align with agreed descriptions.”

*[Build note: End of optional section.]*

**Enhanced Default**
If user’s services are advisory and disclaimers are left blank, insert the first two disclaimers automatically.

L. INDEMNIFICATION (OPTIONAL)

**User Questions**: “Indemnification for IP infringement, negligence? One-way or mutual?”

**Exact Text**:

*[Build note: Optional section: include only if the user wants indemnification. The one-way paragraph is always included; the mutual paragraph is added to it.]*

One-Way (Provider indemnifies Client):
“Indemnification. Service Provider shall indemnify, defend, and hold harmless Client from claims arising out of Service Provider’s gross negligence, willful misconduct, or infringement of third-party IP.”

*[Build note: Optional section: include only if the indemnification is mutual.]*

Mutual (both sides):
“In addition, Client shall indemnify Service Provider from claims arising out of Client’s misuse of the Work Product or material breach of this Agreement.”

*[Build note: End of optional section.]*

*[Build note: End of optional section.]*

M. LIABILITY CAP (OPTIONAL)

**User Question**: “Limit Provider’s liability? (Yes/No). If yes, specify amount.”

*[Build note: Optional section: include only if the user says “Yes” to a liability cap.]*

**Exact Text**:

“Limitation of Liability. Except for fraud or willful misconduct, each Party’s total liability under this Agreement shall not exceed [LIABILITY CAP AMOUNT] or the total fees paid, whichever is lower.”

*[Build note: End of optional section.]*

N. DELIVERABLES ACCEPTANCE (OPTIONAL)

**User Question**: “Include an acceptance period? (Yes/No). If yes, how many days?”

*[Build note: Optional section: include only if the user says “Yes” to an acceptance period.]*

**Exact Text**:

“Deliverables Acceptance. Client has [ACCEPTANCE PERIOD] after receiving each deliverable to review and provide written objections if it fails to conform to agreed specifications. Absent any objection, the deliverable is deemed accepted.”

*[Build note: End of optional section.]*

O. PERFORMANCE METRICS (OPTIONAL)

**User Question**: “Do you want to define performance metrics?” (Yes/No). If yes, ask them to list.

*[Build note: Optional section: include only if the user says “Yes” to performance metrics.]*

**Exact Text**:

“Performance Standards. Service Provider shall use commercially reasonable efforts to meet the following metrics: [PERFORMANCE METRICS]. Failure to meet these non-critical metrics does not constitute a material breach unless otherwise specified.”

*[Build note: End of optional section.]*

P. TAX COMPLIANCE (OPTIONAL)

*[Build note: Optional section: include only if the user says “Yes” to a tax compliance clause.]*

If user picks “Yes,” insert:

“Tax Obligations. Service Provider is solely responsible for all taxes, withholdings, and obligations arising from the fees paid under this Agreement.”

*[Build note: End of optional section.]*

Q. INSURANCE REQUIREMENTS (OPTIONAL)

**User Question**: “Require Provider to carry insurance?” (Yes/No). If yes, type and coverage.

*[Build note: Optional section: include only if the user says “Yes” to an insurance requirement.]*

**Exact Text**:

“Insurance. Service Provider shall maintain [INSURANCE TYPES AND AMOUNTS] of insurance during the term and provide proof upon request.”

*[Build note: End of optional section.]*

R. DISPUTE RESOLUTION & GOVERNING LAW (MANDATORY, BUT OPTIONS)

**User Questions**:

-   “Which jurisdiction’s law?”
-   “How to resolve disputes: arbitration, mediation, or court?”
-   “Who bears legal costs?”

**Exact Text** (Example if user picks “Arbitration,” etc.):

“Governing Law. This Agreement shall be governed by the laws of [GOVERNING LAW JURISDICTION].
Dispute Resolution. Any dispute shall be settled by [DISPUTE FORUM], located in [DISPUTE LOCATION].
Costs of Dispute. Each Party bears its own legal costs, unless otherwise required by law.”

S. FORCE MAJEURE (OPTIONAL)

**User Question**: “Include force majeure coverage?” If yes, “Any exclusions?”

*[Build note: Optional section: include only if the user wants force majeure coverage. Default if unanswered: the text as written, with no additional exclusions.]*

**Exact Text**:

“Force Majeure. Neither Party is liable for delays or failures due to events beyond their control (acts of God, war, governmental actions), except that payment obligations remain due. The affected Party shall promptly notify the other of such event.”

*[Build note: End of optional section.]*

If user does not specify, default to the same text above with no additional exclusions.

T. WORK HOURS & AVAILABILITY (OPTIONAL)

**User Question**: “Specify certain hours/days Provider must be available?”

*[Build note: Optional section: include only if the user specifies hours or days of availability.]*

**Exact Text**:

“Work Hours. Service Provider shall generally be available [AVAILABILITY HOURS], and shall notify Client in advance of significant unavailability.”

*[Build note: End of optional section.]*

U. REMEDIES FOR BREACH (OPTIONAL)

**User Question**: “Include a cure period for material breach?” (Yes/No). If yes, how many days?

*[Build note: Optional section: include only if the user says “Yes” to a cure period.]*

**Exact Text**:

“Remedies for Breach. If either Party materially breaches this Agreement, the breaching Party has [CURE PERIOD] from receipt of written notice to cure. If not cured, the non-breaching Party may terminate and seek available legal remedies.”

*[Build note: End of optional section.]*

V. SIGNATURES (MANDATORY)

**Exact Text**:

CLIENT:
[SIGNATURE]
Name: [CLIENT NAME]
Title: [CLIENT SIGNATORY TITLE]
Date: \_\_\_\_\_\_\_\_\_\_\_\_

SERVICE PROVIDER:
[SIGNATURE]
Name: [SERVICE PROVIDER NAME]
Title: [SERVICE PROVIDER SIGNATORY TITLE]
Date: \_\_\_\_\_\_\_\_\_\_\_\_

W. MISCELLANEOUS (MANDATORY)

**Exact Text** (Always include):

“Entire Agreement. This Agreement, together with any SOW, constitutes the entire understanding and supersedes all prior communications.
Severability. If any provision is held invalid, the remaining provisions remain in effect.
Waiver. No waiver of any provision is a waiver of any subsequent breach.
Survival. Obligations regarding confidentiality, IP, disclaimers, indemnification, and liability caps survive termination.
No Third-Party Beneficiaries. This Agreement does not create rights for any third party.”

X. DEFAULT FALLBACKS (REFINED)

If user **skips** certain questions, apply these stronger defaults:

1.  Payment Terms:
    “Hourly at $50/hr, no upfront payment, invoiced monthly, net 30 days.”
2.  Confidentiality:
    One-Way, protecting Client’s info, for 2 years.
3.  Force Majeure:
    Acts of God, war, except payment obligations remain due.
4.  IP Ownership:
    Client owns deliverables, but Provider may display them in portfolio.
5.  Disclaimers:
    Insert “No Guarantee of Results” and “No Legal/Financial Advice” if user’s services are consultative or advisory.

Y. EDGE CASES & CONFLICT RESOLUTION

• Indemnification Conflict: If user picks “No Indemnification” but chooses IP infringement coverage, show error: “Cannot select IP infringement indemnification with ‘No Indemnification.’ Revise selection.”
• Late Fees + Escrow: Prompt: “Do late fees apply under escrow?” If user doesn’t clarify, default to “Late fees do not apply while funds remain in escrow.”
• Payment Milestones but no details: Error. Must have milestone amounts/dates.
• Termination Fee + Mutual Termination: Confirm if the fee applies even if both parties mutually agree to terminate.

Z. DOCUMENT ASSEMBLY LOGIC

1.  **Mandatory Sections** in order:
    (1) Parties & Effective Date, (2) Provider Status, (3) Scope, (4) Fees & Payment, (5) Term, (6) Signatures, (7) Miscellaneous.
2.  **Insert** optional sections (Expenses, Confidentiality, Non-Solicit, etc.) in a logical order between mandatory ones.
3.  **Apply** the user’s toggles. If they choose “Yes” for disclaimers, insert each chosen disclaimer verbatim. If “No,” skip disclaimers.
4.  **Fallback** text if user omits any crucial info, per section X above.
5.  **Check** for edge case conflicts; prompt user if conflicting.
