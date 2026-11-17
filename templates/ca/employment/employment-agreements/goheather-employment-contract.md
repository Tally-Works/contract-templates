---
title: goHeather Employment Contract
jurisdiction: CA
category: employment
subcategory: employment-agreements
type: agreement
parties:
  - employer
  - employee
tags:
  - probation
  - fixed-term
  - bonus
  - vacation
  - termination
  - non-solicitation
  - confidentiality
  - intellectual-property
  - background-check
  - build-notes
language: en
source:
  name: goHeather
  url: https://goheather.io
  retrieved: "2026-11-17"
  notes: >-
    Written by goHeather (Tally Works Inc.) for its own Canadian employment contract builder, where it is a web
    template with fill-in fields and conditional sections. Converted to Markdown by goHeather: the clause text, the
    sentences the builder generates from code (work location, probation, delayed benefits) and the province lookups
    (statute, probationary period, background check period) are reproduced from the builder's source; the inputs
    table and the option and optional-section markers were added for this Markdown version. Published by goHeather
    under CC BY 4.0: anyone may use, adapt and share it, including commercially, with credit to goHeather.
license: CC-BY-4.0
status: draft
version: 1.2.0
last_reviewed: "2026-11-17"
reviewed_by: ""
summary: >-
  goHeather's Canadian employment contract for salaried or hourly, full-time or part-time staff in one of eight
  provinces (Ontario, British Columbia, Alberta, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, Newfoundland and
  Labrador), with province-specific statute, probation and background check periods, position, term (indefinite or fixed), hours, temporary layoff, salary,
  benefits, vacation and non-disparagement terms, optional probation, exclusivity, bonus, resignation notice,
  termination (statutory minimum or enhanced), confidentiality, intellectual property, non-solicitation and background
  check clauses. Starts with a table of every input and the clauses it drives; optional clauses and alternative
  wordings are marked with build notes.
---

> **How to build a contract from this template.** Fill-in fields are placeholders in square brackets and capitals; the Inputs table below lists every one with its format. Instructions are italic build notes in square brackets, `*[Build note: ...]*`, and come in four kinds: an optional section runs from `*[Build note: Optional section: ...]*` to `*[Build note: End of optional section.]*`; alternative wordings run from `*[Build note: Option A: ...]*` through `*[Build note: Option B: ...]*` to `*[Build note: End of options.]*`, and exactly one option is kept; an insertion point, `*[Build note: Insertion point: ...]*`, is where extra paragraphs go; any other build note is a plain instruction. Clause numbers are for reference only: after removing what does not apply, renumber the clauses consecutively. Delete every build note before use.

**INPUTS**

| Placeholder | Question the builder asks | Format | Used in |
| --- | --- | --- | --- |
| `[EMPLOYER LEGAL NAME]` | Employer's legal name | text | preamble |
| `[EMPLOYEE FIRST NAME]`, `[EMPLOYEE LAST NAME]` | Employee's name | text | preamble |
| `[START DATE]` | Start date | month, two-digit day and year, e.g. January 06, 2027 | preamble, clause 5 |
| `[POSITION TITLE]` | Position | text | clause 1 |
| `[EMPLOYER ADDRESS]` | Work location | street address, city, province name, e.g. 100 King Street West, Toronto, Ontario | clause 2, option A |
| (choice) | Location type: Employer's location, remote, or hybrid | picks option A, B or C | clause 2 |
| `[HYBRID REMOTE DAYS]` | Hybrid: days per week worked remotely | number from one to four, in words | clause 2, option C |
| (yes/no, list) | Job description: custom paragraphs about the position | one paragraph each | insertion point after clause 3 |
| (yes/no) | Probationary period | includes or removes clause 4 | clause 4 |
| `[PROBATION LENGTH]` | (derived from the province) | from the Province table below | clause 4 |
| (choice) | Term: indefinite or fixed | picks option A or B | clause 5 |
| `[FIXED END DATE]` | Fixed end date | YYYY-MM-DD, e.g. 2027-12-31 | clause 5, option B |
| `[FULL-TIME OR PART-TIME]` | Full-time or part-time | the words "full-time" or "part-time" | clause 7 |
| (choice) | Hours: regular, casual, or neither | picks option A, option B, or removes clause 8 | clause 8 |
| `[REGULAR HOURS OF WORK]` | Regular hours of work: the days and hours | free text, e.g. Monday to Friday, 9-5 | clause 8, option A |
| `[PROVINCE]` | Province the Employee will work in | one of the eight provinces in the Province table below | clauses 9, 18, 28, 35 |
| `[EMPLOYMENT STANDARDS STATUTE]` | (derived from the province) | from the Province table below | clauses 9, 18 |
| (yes/no) | Exclusivity clause | includes or removes clause 10 | clause 10 |
| `[SALARY AMOUNT]` | Salary | number with thousands separators, no currency symbol, e.g. 80,000 | clause 11 |
| (choice) | Salary type: annual or hourly | picks "per year" or "per hour" | clause 11 |
| `[PAY FREQUENCY]` | Pay frequency | one of: a weekly basis; a biweekly basis; a monthly basis; 1st and the 15th of the month; 15th and the 30th of the month | clause 12 |
| (yes/no) | Group benefits | includes or removes the first sentence of clause 13 | clause 13 |
| `[OTHER BENEFIT]` | Other benefits | one list item each; none removes the second sentence and the list | clause 13 |
| `[BENEFITS WAITING PERIOD]` | When benefits begin | "on the first day" picks option A; otherwise one of: 30 days; 60 days; 90 days; 6 months; 1 year | clause 14 |
| (yes/no) | Bonus | includes or removes clause 15 | clause 15 |
| `[BONUS AMOUNT]` or `[BONUS PERCENTAGE]` | Bonus amount or percentage of base salary | number; percentage picks option B | clause 15 |
| `[BONUS FREQUENCY]` | Bonus frequency | "per year", "per quarter" or similar | clause 15 |
| `[FISCAL YEAR END]` | Employer's fiscal year end | month and two-digit day, e.g. December 31 | clause 15 |
| (yes/no, list) | Custom paragraphs about benefits | one paragraph each | insertion point after clause 15 |
| `[VACATION WEEKS]` | Vacation weeks per year | numeral, e.g. 3; the builder offers the province's statutory minimum (2 weeks in most provinces, 3 in Saskatchewan) or more | clause 16 |
| `[RESIGNATION NOTICE WEEKS]` | Notice of resignation | number in words, e.g. two; "none" removes the Resignation section | clause 17 |
| (choice) | Termination clause: none, minimum statutory notice, or enhanced | removes the Termination section, or picks option A or B | clauses 18 to 19 |
| `[ADDITIONAL WEEKS PER YEAR OF SERVICE]` | Enhanced termination: weeks of base salary per year of completed service, on top of the statutory minimum | number with unit, e.g. 1 week, 3 weeks. In goHeather's builder the user answers a total number of notice weeks and the builder shows that number minus one; an answer of 1 gives option A | clause 18, option B |
| (yes/no) | Confidentiality clause | includes or removes clauses 21 to 23 | Confidential Information |
| (yes/no) | Intellectual property clause | includes or removes clauses 24 to 25 | Intellectual Property |
| (yes/no) | Non-solicitation clause | includes or removes clauses 26 to 27 | Non-Solicitation |
| (yes/no) | Background check | includes or removes clause 35 | clause 35 |
| `[BACKGROUND CHECK PERIOD]` | (derived from the province) | from the Province table below | clause 35 |

**PROVINCE TABLE**

goHeather's builder covers these eight provinces. The three right-hand columns are the values it writes for `[EMPLOYMENT STANDARDS STATUTE]`, `[PROBATION LENGTH]` and `[BACKGROUND CHECK PERIOD]`.

| Province | Employment standards statute | Probationary period | Background check period |
| --- | --- | --- | --- |
| Ontario | Employment Standards Act | three months | three months |
| British Columbia | Employment Standards Act | three months | three months |
| Alberta | Employment Standards Code | 90 days | 90 days |
| Manitoba | The Employment Standards Code | 30 days | 30 days |
| Saskatchewan | The Saskatchewan Employment Act | 13 weeks | 13 weeks |
| Nova Scotia | Labour Standards Code | three months | three months |
| New Brunswick | Employment Standards Act | six months | six months |
| Newfoundland and Labrador | Labour Standards Act | one month | month |

*[Build note: Clauses 9 and 18 already say "the" before the statute, so the builder's output for Manitoba and Saskatchewan reads "the The Employment Standards Code" and "the The Saskatchewan Employment Act"; drop the second "The" when assembling by hand. The words "and severance pay (if applicable)" in clause 18 are kept only when the province is Ontario. The builder also asks for the fiscal start date and whether the bonus is discretionary; neither answer changes the text.]*

**EMPLOYMENT CONTRACT**

THIS AGREEMENT, between [EMPLOYER LEGAL NAME] (the "Employer") and [EMPLOYEE FIRST NAME] [EMPLOYEE LAST NAME] (the "Employee"), is effective as of [START DATE] (the "Effective Date");

WHEREAS the Employee wants to be employed by the Employer and the parties have agreed to enter into this Employment Contract ("Agreement").

**POSITION, TERM AND DUTIES**

1. The Employer agrees to employ the Employee and the Employee accepts employment with the Employer under the terms and conditions outlined in this Agreement. The Employee's position shall be [POSITION TITLE].

*[Build note: Option A: location type is the Employer's location.]*

2. The Employee shall work at the Employer's location at [EMPLOYER ADDRESS].

*[Build note: Option B: location type is remote.]*

2. The Employee shall work on a remote basis. The Employer may recall the Employee to work at the Employer's location, with notice, indefinitely, without breaching this Agreement.

*[Build note: Option C: location type is hybrid.]*

2. The Employee shall work [HYBRID REMOTE DAYS] days per week remotely, with the balance of the workweek at the Employer's location.

*[Build note: End of options.]*

3. The Employer may require the Employee to work at the Employer's location or remotely, within reason and with notice, indefinitely, without breaching this Agreement.

*[Build note: Insertion point: each custom paragraph about the position goes here as its own numbered clause.]*

*[Build note: Optional section: include only if there is a probationary period.]*

4. The Employee's first [PROBATION LENGTH] are probationary. During this probationary period, the Employee's employment may be terminated without notice.

*[Build note: End of optional section. For Newfoundland and Labrador the first sentence is "The first month is probationary."]*

*[Build note: Option A: term is indefinite.]*

5. The Employee will begin employment on the Effective Date and employment shall continue indefinitely.

*[Build note: Option B: term is fixed. If the Termination section is removed, also remove the last sentence of this option.]*

5. The Employee will begin employment on the Effective Date and employment shall continue until a fixed end date of [FIXED END DATE]. The employment relationship automatically terminates on [FIXED END DATE] without any obligation of the parties to provide notice or payment in lieu of notice. If employment is terminated before [FIXED END DATE], the parties agree that the termination entitlements as set out below in the Termination section of this Agreement apply, not the balance of the fixed term.

*[Build note: End of options.]*

6. The Employee agrees that the Employer has the right to change the Employee's job title, position, duties and/or place of employment in the same city, with notice, without any such change constituting a breach of this Agreement, a constructive dismissal, or a change in the rights and obligations of the parties under this Agreement.

7. The Employee agrees to provide their services and perform their duties faithfully and diligently to the best of their ability on a [FULL-TIME OR PART-TIME] basis, and to devote all their attention, skill and effort to such services and duties at all times in compliance with the policies, practices, directions, and instructions, written or oral, of the Employer.

*[Build note: Option A: the Employee has regular hours.]*

8. The Employee agrees their regular hours of work shall be [REGULAR HOURS OF WORK]. The Employee further agrees that the Employer may require the Employee to work outside of their regular hours of work on occasion.

*[Build note: Option B: the Employee has casual hours.]*

8. The Employee agrees their hours of work shall be irregular. The number of hours per week may vary. There could be zero hours of work in any given week and there could be a full set of hours in any given week.

*[Build note: End of options. If the Employee has neither regular nor casual hours, remove clause 8.]*

9. The Employer may place the Employee on a temporary layoff in accordance with the [EMPLOYMENT STANDARDS STATUTE] as amended from time to time, without it being a constructive dismissal or a breach of this Agreement.

*[Build note: Optional section: include only if the Employer wants an exclusivity clause.]*

10. The Employee agrees that their employment is on an exclusive basis. Notwithstanding the preceding, nothing in this Agreement shall preclude the Employee from public service endeavours or managing their investments outside standard work time. Moreover, the Employee shall be permitted to engage in other activities on behalf of another organization on an infrequent basis only, provided such activities are disclosed to the Employer, and the Employer agrees.

*[Build note: End of optional section.]*

**REMUNERATION**

11. The Employer shall pay the Employee a salary of $[SALARY AMOUNT] per year, less applicable statutory withholdings and deductions. *[Build note: Write "per year" for an annual salary and "per hour" for an hourly one.]*

12. The Employee's salary shall be paid on [PAY FREQUENCY].

*[Build note: Optional section: include only if the Employee gets group benefits or other benefits. Keep the first sentence of clause 13 only if the Employee gets group benefits. Keep the second sentence and the list only if other benefits are listed, and drop the word "also" when there is no first sentence.]*

13. The Employee is eligible for standard group benefits. The Employee is also eligible for:

    - [OTHER BENEFIT]

*[Build note: Option A: benefits begin on the first day.]*

14. The Employee's benefits will begin on the first day of employment.

*[Build note: Option B: benefits begin after a waiting period.]*

14. The Employee's benefits will not begin until the Employee has served [BENEFITS WAITING PERIOD].

*[Build note: End of options.]*

*[Build note: End of optional section.]*

*[Build note: Optional section: include only if there is a bonus.]*

*[Build note: Option A: the bonus is a fixed amount.]*

15. The Employee may be entitled to a bonus in the amount of $[BONUS AMOUNT] [BONUS FREQUENCY] based upon the attainment of targets to be determined by the Employer from time to time. All bonus amounts will be prorated based on the Employee's months of employment in the first fiscal year, and the Employer's fiscal year ends on [FISCAL YEAR END]. Any bonus which may be paid to the Employee is entirely at the discretion of the Employer, does not accrue, and is only earned and payable on the date that it is provided to the Employee by the Employer. In the event the Employee is terminated before the bonus is ordinarily paid because they have been guilty of willful misconduct, disobedience or willful neglect of duty that is not trivial and has not been condoned by the Employer, the Employee waives any claim to the bonus or any portion thereof. If the Employee's employment is terminated without cause, and the bonus would ordinarily be paid after the expiration of the statutory notice period, the Employee hereby waives any claim to that bonus or any portion thereof. If the Employee resigns before the date the bonus would ordinarily be paid, they forfeit any claim to the bonus or any portion thereof. The Employee also hereby waives any claim to constructive dismissal because the bonus is not paid, is less than was previously paid, or is less than is paid to another employee. The Employer may amend this bonus plan from time to time without breach of this Agreement.

*[Build note: Option B: the bonus is a percentage of base salary. Identical to option A except for the opening words.]*

15. The Employee may be entitled to a bonus in the amount of [BONUS PERCENTAGE] percent of their base salary [BONUS FREQUENCY] based upon the attainment of targets to be determined by the Employer from time to time. All bonus amounts will be prorated based on the Employee's months of employment in the first fiscal year, and the Employer's fiscal year ends on [FISCAL YEAR END]. Any bonus which may be paid to the Employee is entirely at the discretion of the Employer, does not accrue, and is only earned and payable on the date that it is provided to the Employee by the Employer. In the event the Employee is terminated before the bonus is ordinarily paid because they have been guilty of willful misconduct, disobedience or willful neglect of duty that is not trivial and has not been condoned by the Employer, the Employee waives any claim to the bonus or any portion thereof. If the Employee's employment is terminated without cause, and the bonus would ordinarily be paid after the expiration of the statutory notice period, the Employee hereby waives any claim to that bonus or any portion thereof. If the Employee resigns before the date the bonus would ordinarily be paid, they forfeit any claim to the bonus or any portion thereof. The Employee also hereby waives any claim to constructive dismissal because the bonus is not paid, is less than was previously paid, or is less than is paid to another employee. The Employer may amend this bonus plan from time to time without breach of this Agreement.

*[Build note: End of options.]*

*[Build note: End of optional section.]*

*[Build note: Insertion point: each custom paragraph about benefits goes here as its own numbered clause.]*

**VACATION**

16. The Employee will be entitled to [VACATION WEEKS] weeks of paid vacation per year during the term of this Agreement, or as entitled by law, whichever is greater. Any unused vacation at the end of a calendar year, after the first year of employment, will not carry over to the next year. The times and dates for any vacation will be determined by mutual agreement between the Employer and the Employee.

*[Build note: Optional section: include the heading and clause 17 only if the Employee must give notice of resignation. Write "week" instead of "weeks" if the notice is one week.]*

**RESIGNATION**

17. The Employee may resign at any time by providing the Employer [RESIGNATION NOTICE WEEKS] weeks notice of their resignation.

*[Build note: End of optional section.]*

*[Build note: Optional section: include the heading and clauses 18 to 19 unless the termination clause type is "No Termination Clause".]*

**TERMINATION**

*[Build note: Option A: minimum statutory notice, or an enhanced clause whose additional weeks would be zero.]*

18. The Employer may terminate this Agreement at any time and will follow the [EMPLOYMENT STANDARDS STATUTE], as amended from time to time, by providing the Employee only with minimum notice of termination or termination pay in lieu of notice of termination and severance pay (if applicable) and benefit continuation (if applicable) and any other statutory standard in effect.

*[Build note: Option B: enhanced termination with additional weeks per year of service.]*

18. The Employer may terminate this Agreement at any time and will follow the [EMPLOYMENT STANDARDS STATUTE], as amended from time to time, by providing the Employee only with minimum notice of termination or termination pay in lieu of notice of termination and severance pay (if applicable) and benefit continuation (if applicable) and any other statutory standard in effect; and

    (A) The Employer shall also pay the Employee an additional amount equal to [ADDITIONAL WEEKS PER YEAR OF SERVICE] of base salary per year of completed service upon termination.

*[Build note: End of options. In both options, keep "and severance pay (if applicable)" only when the province is Ontario.]*

19. The Employee acknowledges, understands and agrees that the provision of the above termination of employment entitlements constitute full and final satisfaction of any claim or entitlement that the Employee may have against the Employer arising from or related to their employment's termination, whether according to statute, contract, common law or otherwise.

*[Build note: End of optional section.]*

**NON-DISPARAGEMENT**

20. The Employee agrees that they shall not, both during and following the termination of their employment, make or publish or post written or oral statements on any medium which are damaging to the reputation of the Employer or any of its employees, customers, contractors, or affiliates.

*[Build note: Optional section: include the heading and clauses 21 to 23 only if the Employer wants a confidentiality clause.]*

**CONFIDENTIAL INFORMATION**

21. The Employee acknowledges that the Employee will or may obtain or develop Confidential Information of the Employer, as defined in this section and that Confidential Information is the exclusive property of the Employer.

22. "Confidential Information" includes: All information relating to the management of the Employer, including but not limited to trade secrets, accounting records, work product, software, business operations plans, marketing, development, customer information, information that has been disclosed by a third party to the Employer that is protected by a non-disclosure or confidentiality agreement, and any other information reasonably held out or ought to be known as confidential.

23. The Employee will not disclose Confidential Information to any other person, otherwise than in the performance of their employment, unless compelled by law. The Employee agrees that if there is any question as to such disclosure, or if the Employee is compelled by law to disclose such Confidential Information, then the Employee will seek out senior management of the Employer before making any disclosure of the Employer's Confidential Information. The Employee agrees that, upon request of the Employer or upon the termination of this Agreement, the Employee will return to the Employer all Confidential Information in their possession or control.

*[Build note: End of optional section.]*

*[Build note: Optional section: include the heading and clauses 24 to 25 only if the Employer wants an intellectual property clause.]*

**INTELLECTUAL PROPERTY**

24. All inventions, designs, ideas, works, creations, developments, programs, codes, drawings, sketches, compilations of information, analysis, experiments, data, formulas, methods, processes, techniques, prototypes, products, samples, equipment, tools and any modifications or improvements thereto (collectively, the "Intellectual Property") created by the Employee during the course of their employment with the Employer, whether at the Employer's place of business or otherwise, shall be, and remain, the exclusive property of the Employer and the Employee irrevocably and unconditionally acknowledges and agrees that they have no right, title or interest therein.

25. The Employee hereby assigns to the Employer any right, title, and interest to the Intellectual Property that they may have by having created, made, conceived, or contributed to any such Intellectual Property, either solely or with others, in whole or in part, in the course of their employment with the Employer.

*[Build note: End of optional section.]*

*[Build note: Optional section: include the heading and clauses 26 to 27 only if the Employer wants a non-solicitation clause. The words "(if applicable)" are part of the clause text, not a build instruction.]*

**NON-SOLICITATION**

26. Definitions: "Competitive Business" means any entity in the same business niche of the Employer within the Geographic Area; "Geographic Area" for the purposes of this Agreement is restricted to the 150km zone within the area of the Employer's location that the Employee works or would work but for them working remotely (if applicable).

27. The Employee understands and agrees that any attempt on the part of the Employee to induce current customers, reasonable customer leads (if applicable), employees and contractors to leave the Employer, or any effort by the Employee to interfere with the Employer's relationship with its current customers, reasonable customer leads (if applicable), employees and contractors would be damaging to the Employer. The Employee agrees that during the Employee's term of employment with the Employer and for twelve months after the end of that term, the Employee will not in any way, directly or indirectly:

    (a) Solicit, entice, or induce or attempt to solicit, entice, or induce any current customers, reasonable customer leads (if applicable), employees and contractors to leave the Employer for a Competitive Business in the Geographic Area.

*[Build note: End of optional section.]*

**GENERAL**

28. This Agreement shall be governed in accordance with the laws of the Province of [PROVINCE]. The Employee consents to the jurisdiction of [PROVINCE] and of the Courts of [PROVINCE] for the purpose of any claims arising under this Agreement.

29. This Agreement may be executed either by original signature, or by electronic signature attached to this document, an e-mail, website, application, PDF, server, or by facsimile signature and may be executed by the parties in one or more counterparts, each of which when so executed and delivered, shall be an original and such counterparts shall together constitute one and the same agreement.

30. No amendment, modification or alteration of this Agreement shall be valid unless made in writing and signed by an authorized representative of both the Employee and the Employer.

31. The provisions of this Agreement, and any portion thereof, are severable; it being the intention of the parties that if for any reason, any such provision is held to be invalid, such invalidity shall not affect the remaining provisions, which shall remain in full force and effect as though such invalid provision had not been contained herein.

32. The Employer encourages the Employee to seek independent legal advice before signing this Agreement.

33. The Employee warrants to the Employer that there are no restrictive covenants which restrict them from performing their duties for the Employer, or that they have disclosed such restrictive covenants to the Employer, in connection with:

    (a) being employed by the Employer;

    (b) soliciting competitor clients or other third parties; and

    (c) using outside confidential information within their knowledge which may be useful in the performance of their duties for the Employer.

34. The Employee acknowledges that they have read and understood this Agreement and have been given the opportunity to seek independent legal advice concerning the terms contained in this Agreement.

*[Build note: Optional section: include only if the Employer wants a background check.]*

35. The Employer may arrange for a background check that may include social media, work history, education, credit and a criminal record check on the Employee (collectively, "the Background Check"). The Employee consents to a social media, work history, education, credit and criminal record check. The Employee further agrees to help the Employer obtain a criminal record check as a condition of employment. Lastly, if, within the first [BACKGROUND CHECK PERIOD] of employment, it is determined, in line with provincial human rights protections, that on the basis of reasonableness, the Employee failed the Background Check, the Employer may terminate the Employee's employment without notice.

*[Build note: End of optional section.]*

Employee Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Employer Representative Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
