---
title: goHeather Generic Services Agreement Clause Library
jurisdiction: CA
category: commercial
subcategory: master-services
type: clause-library
parties:
  - service-provider
  - client
tags:
  - services-agreement
  - clause-library
  - question-flow
  - developer-guide
  - fees
  - intellectual-property
  - termination
  - canada
language: en
source:
  name: goHeather
  url: https://goheather.io
  file: templates/ca/commercial/master-services/goheather-generic-services-agreement-clause-library.docx
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
  goHeather's clause library for assembling a generic services agreement: mandatory and optional sections, the user
  question for each, the exact clause text for each answer, and the default used when the user gives none.
---

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

Below is a library of clauses. **DO NOT** invent or draft new text yourself. **Always** copy/paste the text exactly as shown if the user chooses that clause. Some references like “[Effective Date]” or “[X days]” get replaced by the user’s numeric or text input.

A. PARTIES & EFFECTIVE DATE (MANDATORY)

**User Questions**

-   “What is the Agreement’s Effective Date?”
-   “What is the Service Provider’s name, address, and entity type?”
-   “What is the Client’s name, address, and entity type?”

**Exact Text**
“This Generic Services Agreement (“Agreement”) is entered into as of [Effective Date], by and between [Service Provider Name] (“Service Provider”) and [Client Name] (“Client”).”

B. SERVICE PROVIDER STATUS (MANDATORY)

If user indicates “individual,” use:

“Service Provider is an individual, operating under [Name]. Nothing in this Agreement creates an employment or partnership relationship with the Client.”

If user indicates “company,” use:

“Service Provider is [Entity Name], a [State or Province] [type of entity], with its principal place of business at [Address], and will act solely as an independent contractor.”

C. SCOPE OF SERVICES (MANDATORY)

**User Question**: “Describe the services. Any additional details in an attached SOW?” (Yes/No)

**Exact Text**
“Scope of Services. Service Provider shall provide the following services: [User’s description].
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

-   **Hourly**:
    “Client shall pay Service Provider at a rate of [Rate] per hour. Service Provider shall invoice [weekly/monthly], and payment is due within [X] days of invoice date.”
-   **Fixed Fee**:
    “Client shall pay a total fee of [Amount] for the services. Payment schedule: [e.g., 50% upfront, 50% upon completion], unless otherwise agreed.”
-   **Retainer**:
    “Client shall pay a retainer of [Amount] upon signing. This retainer will be credited against future invoices. Any unused portion is refunded at Agreement’s end.”

**Optional: Escrow Payment**
If user says “Yes,” add:
“All payments shall be processed via [Escrow Service]. Escrow fees shall be borne by [Client/Service Provider/both].”

**Optional: Late Payment Fees**
If user says “Yes,” add:
“Any invoice not paid within [X days] of its due date shall accrue interest at [Y% per month], or the maximum legal rate, whichever is lower.”

**Optional: Payment Milestones**
If user says “Yes,” ask them for each milestone. Then add lines like:
“Payment Milestones:

-   Milestone 1: [Amount] due upon completion of [Deliverable], no later than [Date].
-   Milestone 2: [Amount] due upon completion of [Deliverable], no later than [Date].
    Invoices for each milestone are due [net X days].”

**Default Fallback**
“If no info is provided, insert:
Client shall pay Service Provider **$50/hr**, invoiced monthly. Payment is due **net 30** days. No escrow or late fees apply.”

E. EXPENSES & MATERIALS (OPTIONAL)

**User Question**: “Reimburse out-of-pocket expenses?” (Yes/No)

If “Yes,” use EXACT text:

“Expenses. Client shall reimburse Service Provider for reasonable and necessary expenses directly related to the services, provided any single expense exceeding [X amount] has prior written approval. Service Provider shall submit receipts with invoices.”

**If user never answers**: skip this section or fallback to “No expense reimbursement.”

F. INTELLECTUAL PROPERTY (MANDATORY, CHOOSE ONE)

**User Question**

-   “Who owns the deliverables? (Client, Provider, or Joint)”

Pick from these EXACT blocks:

1.  **Provider Retains IP + License**
    “Intellectual Property. Service Provider retains all rights to any deliverables or work product (“Work Product”) created under this Agreement. Service Provider grants Client a perpetual, non-exclusive, worldwide license to use the Work Product for Client’s internal business purposes.”
2.  **Client Owns IP**
    “Intellectual Property. Any deliverables or work product created under this Agreement shall be owned exclusively by Client. Service Provider hereby assigns all right, title, and interest in the Work Product to Client.”
3.  **Joint IP**
    “Intellectual Property. The Work Product is jointly owned by both Parties, each holding [user-defined] ownership interest. Each Party may use or license the Work Product independently, so long as it does not violate any confidentiality or other obligations herein.”

**Refined Default**
If user omits, use:
“Client owns the deliverables; however, Service Provider may display the deliverables in its portfolio or promotional materials, provided that no confidential Client data is revealed.”

G. CONFIDENTIALITY (OPTIONAL)

**User Question**: “Confidentiality Clause? (Yes/No). If yes, mutual or one-way? Duration?”

If user says “Yes” and “One-Way,” use:

“Confidentiality. Service Provider shall not disclose or use any confidential or proprietary information of Client except as required to perform the services. This obligation continues for [X years] after termination.”

If user says “Yes” and “Mutual,” use:

“Confidentiality (Mutual). Each Party agrees not to disclose or use the other’s confidential information except to perform obligations under this Agreement, for [X years] after termination.”

**Refined Default**
If user doesn’t pick any confidentiality preference, default to a **one-way** clause (protecting Client’s info) for 2 years.

H. NON-SOLICITATION / NON-COMPETE (OPTIONAL)

**User Question**: “Include non-solicitation or non-compete? If yes, how long or which region?”

1.  Non-Solicitation (if yes):
    “During this Agreement and for [X months/years] thereafter, Service Provider shall not solicit or hire any employee or contractor of Client or induce any client of Client to discontinue or diminish its relationship with Client.”
2.  Non-Compete (if yes):
    “For [X months/years] after termination, Service Provider shall not engage in any activity that directly competes with Client’s [industry/business] within [geographic region], subject to applicable law.”

I. TERM & TERMINATION (MANDATORY, WITH OPTIONALS)

**User Questions**:

-   “Fixed end date or indefinite?”
-   “Any early termination notice? (Yes/No) If yes, how many days?”
-   “Termination fee if Client ends early?”

**Text**:

Term. This Agreement begins on [Effective Date] and continues until [date/completion], unless terminated earlier as provided below.

Termination by Notice. Either Party may terminate this Agreement by giving [X days’] written notice to the other.

**Optional: Termination Fee**
If user picks “Yes,” add:
“If Client terminates for reasons other than Service Provider’s breach, Client shall pay a termination fee of [X% or $X], in addition to fees for services performed up to termination.”

**Optional: Mutual Termination**
If user picks “Yes,” add:
“This Agreement may also be terminated at any time upon mutual written consent of the Parties.”

**Refined Default Term Clause**
If user does not specify, indefinite term with 30 days’ notice, no termination fee, no mutual termination.

J. REPRESENTATIONS & WARRANTIES (OPTIONAL)

**User Question**: “Include standard R&Ws for skill, authority, no conflict?” (Yes/No)

If “Yes,” use:

“Representations & Warranties. Service Provider represents having the necessary skill and expertise to perform the services in a professional manner and that the Work Product does not knowingly infringe any third-party rights. Client represents having the authority to enter this Agreement.”

K. DISCLAIMERS (IMPORTANT FOR PROVIDER)

**User Question**: “Which disclaimers do you want? (No Guarantee of Results, No Legal/Financial Advice, Intangible Outcomes?)”

**Exact Text Options**:

1.  No Guarantee of Results:
    “Service Provider makes no guarantee of any particular outcome or business results from the services, as multiple factors beyond Provider’s control may affect final outcomes.”
2.  No Legal/Financial Advice:
    “These services are consultative and do not constitute legal, financial, or accounting advice. Client should seek appropriate professional counsel for such matters.”
3.  Intangible Outcomes Disclaimer:
    “Where deliverables involve creative or strategic concepts, outcomes may be subjective or intangible. Service Provider is not liable if subjective expectations are not met, provided deliverables align with agreed descriptions.”

**Enhanced Default**
If user’s services are advisory and disclaimers are left blank, insert the first two disclaimers automatically.

L. INDEMNIFICATION (OPTIONAL)

**User Questions**: “Indemnification for IP infringement, negligence? One-way or mutual?”

**Exact Text**:

-   One-Way (Provider indemnifies Client):
    “Indemnification. Service Provider shall indemnify, defend, and hold harmless Client from claims arising out of Service Provider’s gross negligence, willful misconduct, or infringement of third-party IP.”
-   Mutual (both sides):
    “In addition, Client shall indemnify Service Provider from claims arising out of Client’s misuse of the Work Product or material breach of this Agreement.”

M. LIABILITY CAP (OPTIONAL)

**User Question**: “Limit Provider’s liability? (Yes/No). If yes, specify amount.”

**Exact Text**:

“Limitation of Liability. Except for fraud or willful misconduct, each Party’s total liability under this Agreement shall not exceed [X amount] or the total fees paid, whichever is lower.”

N. DELIVERABLES ACCEPTANCE (OPTIONAL)

**User Question**: “Include an acceptance period? (Yes/No). If yes, how many days?”

**Exact Text**:

“Deliverables Acceptance. Client has [X days] after receiving each deliverable to review and provide written objections if it fails to conform to agreed specifications. Absent any objection, the deliverable is deemed accepted.”

O. PERFORMANCE METRICS (OPTIONAL)

**User Question**: “Do you want to define performance metrics?” (Yes/No). If yes, ask them to list.

**Exact Text**:

“Performance Standards. Service Provider shall use commercially reasonable efforts to meet the following metrics: [user-provided items]. Failure to meet these non-critical metrics does not constitute a material breach unless otherwise specified.”

P. TAX COMPLIANCE (OPTIONAL)

If user picks “Yes,” insert:

“Tax Obligations. Service Provider is solely responsible for all taxes, withholdings, and obligations arising from the fees paid under this Agreement.”

Q. INSURANCE REQUIREMENTS (OPTIONAL)

**User Question**: “Require Provider to carry insurance?” (Yes/No). If yes, type and coverage.

**Exact Text**:

“Insurance. Service Provider shall maintain [type(s)/amount(s)] of insurance during the term and provide proof upon request.”

R. DISPUTE RESOLUTION & GOVERNING LAW (MANDATORY, BUT OPTIONS)

**User Questions**:

-   “Which jurisdiction’s law?”
-   “How to resolve disputes: arbitration, mediation, or court?”
-   “Who bears legal costs?”

**Exact Text** (Example if user picks “Arbitration,” etc.):

“Governing Law. This Agreement shall be governed by the laws of [Chosen Jurisdiction].
Dispute Resolution. Any dispute shall be settled by [Arbitration / Mediation / Courts], located in [City, State].
Costs of Dispute. Each Party bears its own legal costs, unless otherwise required by law.”

S. FORCE MAJEURE (OPTIONAL)

**User Question**: “Include force majeure coverage?” If yes, “Any exclusions?”

**Exact Text**:

“Force Majeure. Neither Party is liable for delays or failures due to events beyond their control (acts of God, war, governmental actions), except that payment obligations remain due. The affected Party shall promptly notify the other of such event.”

If user does not specify, default to the same text above with no additional exclusions.

T. WORK HOURS & AVAILABILITY (OPTIONAL)

**User Question**: “Specify certain hours/days Provider must be available?”

**Exact Text**:

“Work Hours. Service Provider shall generally be available [days/hours], and shall notify Client in advance of significant unavailability.”

U. REMEDIES FOR BREACH (OPTIONAL)

**User Question**: “Include a cure period for material breach?” (Yes/No). If yes, how many days?

**Exact Text**:

“Remedies for Breach. If either Party materially breaches this Agreement, the breaching Party has [X days] from receipt of written notice to cure. If not cured, the non-breaching Party may terminate and seek available legal remedies.”

V. SIGNATURES (MANDATORY)

**Exact Text**:

CLIENT:
[Signature]
Name: [Client Name]
Title: [Client Title, if a business]
Date: \_\_\_\_\_\_\_\_\_\_\_\_

SERVICE PROVIDER:
[Signature]
Name: [Service Provider Name]
Title: [If applicable]
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
