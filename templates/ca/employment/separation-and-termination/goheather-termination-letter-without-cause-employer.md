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
  - canada
  - build-notes
language: en
source:
  name: goHeather
  url: https://goheather.io
  file: templates/ca/employment/separation-and-termination/goheather-termination-letter-without-cause-employer.docx
  retrieved: "2026-11-15"
  notes: >-
    Written by goHeather (Tally Works Inc.) for its own contract builder. The Word file beside this template is
    goHeather's original, margin comments included; in this Markdown each comment appears as a bracketed build note at
    the point it refers to, and the instruction lines in the body are goHeather's own. Published by goHeather under CC BY 4.0: anyone may use, adapt and share it, including commercially, with credit to goHeather.
license: CC-BY-4.0
status: draft
version: 1.0.0
last_reviewed: "2026-11-15"
reviewed_by: ""
summary: >-
  goHeather's Canadian employer letter terminating employment without cause, with a notice or lump-sum package
  conditional on a signed release, and the build notes that drive goHeather's question flow.
---

**Private & Confidential**

Month Date, Year *[Build note (Jeff Dutton): Step 3: App to ask: “What shall be the date of the termination letter”. App should have a date picker.]*

Employee Name *[Build note (Jeff Dutton): Step 1: App to ask: “What is the name of the Employer?” App should have a text box.]*

Employee Street Number and Street Name

Employee City, Province

Employee Postal Code *[Build note (Jeff Dutton): Step 2: App to ask: “What is the address of the Employer?” App should have an address box, using Google Maps API, preferably.]*

**Re: Termination Without Cause**

Dear Employee First Name and Last Name: *[Build note (Jeff Dutton): Step 4: App to ask: “What is the name of the employee who is being terminated?” There should be a text box here.] [Build note (Jeff Dutton): Step: App to ask: “What shall be the date the employee is terminated?” App to show a date widget.]*

This letter will confirm that your employment with Employer Name (the “Company”), is terminated without cause effective today. (“Effective Termination Date”). Your last day of work is Q Day, Month, Year *[Build note (Jeff Dutton): Tooltip: “This is the amount of working notice you want to provide the employee. This is not where you will enter the amount of pay in lieu of notice or severance you want to provide the employee.”]*. *[Build note (Jeff Dutton): App to ask: “Do you want the employee to stop working today or some other day in the future?” Today or Future Date radio buttons. If today, write “today” in the contract. If Future Date, insert a date picker.]*

**Notice Period**

We are offering the following termination package in connection with the termination of your employment. Should you sign and return our full and final release, Q [if salary continuance – see below] your pay shall continue *[Build note (Jeff Dutton): App to ask: Do you want to provide the employee’s termination package as a lump sum or a salary continuance? Lump Sum or Salary Continuance radio buttons.]* until Month Date, Year *[Build note (goHeather Canada): Tooltip: This is where you have to calculate how much notice (i.e. severance) you would like to offer the employee. If for example, you would like to offer them 4 months' notice, then make the date here exactly 4 months from the Effective Termination Date. Make sure the notice period is at least greater than minimum statutory employment standards otherwise the Release will be unenforceable for lack of consideration.]*(the “Gratuitous Notice Period”). If you do not sign our full and final release, your salary and benefits will continue only until the minimum statutory notice period only.

**If Lump Sum option:**

Ask: “What is the Employee’s Annual Salary?: Then add Number box.

Ask: How may weeks of notice do you want to provide the Employee? Thena add drop down menu of 1-104.

Then: Insert after, “Should you sign and return our full and final release”, the Company shall provide you a lump sum payment of XYZ (XYZ is annual salary/52.1 times weeks of notice) reflecting pay in lieu of notice for [number of weeks notice] weeks. In addition, your benefits will be continued for [number of weeks notice] weeks.

**If Salary Continuance:**

Ask: “For how many weeks do you want to maintain the Employee’s salary and benefits.” Then add drop down menu of 1-104.

Then state in the contract: Should you sign and return our full and final release, [if salary continuance – see below] your pay shall continue *[Build note (Jeff Dutton): App to ask: Do you want to provide the employee’s termination package as a lump sum or a salary continuance? Lump Sum or Salary Continuance radio buttons.]* *[Build note (goHeather Canada): DO NOT BUILD YET. .. Tooltip: If you like, here you could alternatively offer the employee a lump sum payment instead of a salary & benefits continuance. If you elect to offer a lump sum, say here: … "we shall provide you a lump sum payment reflecting X weeks' notice" instead of "your salary and benefits shall continue until X date".]*until Month Date, Year *[Build note (goHeather Canada): Tooltip: This is where you have to calculate how much notice (i.e. severance) you would like to offer the employee. If for example, you would like to offer them 4 months' notice, then make the date here exactly 4 months from the Effective Termination Date. Make sure the notice period is at least greater than minimum statutory employment standards otherwise the Release will be unenforceable for lack of consideration.]*

**Your Accrued Salary, Vacation, and Expenses**

You will be paid your accrued salary and vacation pay up to the Effective Termination Date in accordance with the Company’s standard payroll practice. In addition, we ask that you submit all outstanding expense claims, if any.

**Record of Employment**

We will submit your Record of Employment through Service Canada.

**Confidentiality & Non-Disparagement**

You are reminded to refrain from using or disclosing confidential information which you learned or came into your possession during the course of your employment with the Company and you are obliged to refrain from, directly or indirectly, either orally or in writing, making any comments of a negative or disparaging nature whatsoever about the Company or its employees.

**Return of Property**

You are required to return to the Company any and all Company property in your possession, including: *[Build note (Jeff Dutton): Step 6: App to ask: “Are there any specific property items that you would like to ask the Employee to return to the Employer?” There should be text boxes here, with ability to add new text boxes, and the text should go in sentence format, not bullet format, in the PDF letter.]*

**Extra Heading** *[Build note (Jeff Dutton): Step 7: Custom text. App to ask: “Is there any other custom paragraphs you want to include in your termination letter?” There should a text box here, but there also should be, and this is new, a requirement that the user has to use a heading for their paragrpah. So ask the user for the heading and the content of the paragraph.]*

Extra Space

**Final Steps**

Should you have any questions with respect to these matters pertaining to the termination of your employment, please contact Q Manager Name at Manager Email Address. *[Build note (Jeff Dutton): Step 8: App to ask: “What is the Employee’s Manager’s name?” App to show a text box for first name and last name, and email address.]*

Once you have reviewed this termination package, please return a signed copy of our full and final release by Q Month Date *[Build note (Jeff Dutton): App to ask: When would you like the employee to sign the release by? Then insert a date picker.]*, Year. If you do not accept the Company’s offer by that date, this severance package is revoked.

We wish you well in your future endeavours. Thank you for your contributions.

Yours very truly,

Employer Name
