---
title: Service Level Agreement
jurisdiction: US
category: technology
subcategory: hosting-and-cloud
type: policy
parties:
  - company
  - customer
tags:
  - sla
  - uptime
  - service-credits
  - enterprise
  - saas
  - basecamp
language: en
source:
  name: Basecamp (37signals)
  url: https://github.com/basecamp/policies/blob/master/sla/index.md
  retrieved: "2026-11-14"
  notes: >-
    From the Basecamp open-source policies repository, released under CC BY 4.0 with the request that adaptations carry
    the line "Adapted from the Basecamp open-source policies / CC BY 4.0", which is included. Wording unchanged apart
    from the title heading; a drafting note is added at the top. The repository is archived and the live policies are at
    37signals.com/policies.
license: CC-BY-4.0
status: draft
version: 1.0.0
last_reviewed: "2026-11-14"
reviewed_by: ""
summary: >-
  Uptime commitment for an enterprise SaaS plan with the measurement method, exclusions and credit remedy, written in
  plain English.
---

> **Drafting note:** This is 37signals' live policy as published in the Basecamp open-source policies repository, kept verbatim as an example of a plain-English service level agreement. Replace the company and product names, the dates, and the links with your own, and have the result reviewed for your jurisdiction.

[support]: https://basecamp.com/support
[uptime]: https://www.37status.com/uptime
[status]: https://www.37status.com

# Basecamp Big SLA
Thousands of companies rely on Basecamp. Just like you, Basecamp is our company's lifeline. It’s where we make decisions, share designs, debate ideas, broadcast companywide announcements, and keep up to date on what everyone's working on. That's why we guarantee 99.99% monthly uptime to teams on Basecamp Big.

## What is “uptime”?
“Uptime” refers to the period of time when Basecamp is up and running.

## How do I find Basecamp’s uptime?
We make our [uptime public here][uptime].

## What happens if it’s below 99.99%?
Our Ops team is working so that we won’t find ourselves in that situation. But stuff happens, so if our uptime drops below 99.99%, we will provide an automatic credit under our SLA to our Big customers on their next billing cycle. For any given day where an outage exceeds 5 minutes, we’ll credit your account 10x for a full hour that is equal to the hourly rate you pay us for use of Basecamp.  You can always check up on us [here][uptime]. That is the full limit of our liability under this SLA. Now you can get back to your work with the peace of mind knowing that we’ve got you covered.

## How do we track that uptime?
We track uptime by measuring the server side error rate along with using server monitoring software to look at results from ping tests, web server tests, TCP port tests, and website tests. Any changes to Basecamp's uptime are immediately shown on our [Status site][status].

## Will this change in the future?
Basecamp may update this SLA once in a blue moon — we’ll notify you about significant changes by emailing the account owner or by placing a prominent notice on our site.

## What if I have questions about this SLA?
Please get in touch with [our friendly support team][support] and we’ll be happy to answer them!

---

Adapted from the [Basecamp open-source policies](https://github.com/basecamp/policies) / [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The current versions live at [37signals.com/policies](https://37signals.com/policies).
