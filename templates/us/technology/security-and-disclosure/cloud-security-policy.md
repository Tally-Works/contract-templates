---
title: Cloud Security Policy
jurisdiction: US
category: technology
subcategory: security-and-disclosure
type: policy
parties:
  - employer
  - employee
tags:
  - cloud-security
  - information-security
  - cloud
  - soc-2
  - iam
  - encryption
  - infrastructure-as-code
  - company-policy
language: en
source:
  name: Sourcegraph
  url: https://github.com/sourcegraph/handbook/blob/main/content/company-info-and-process/policies/cloud-security-policy.md
  retrieved: "2026-11-14"
  notes: >-
    Text taken verbatim from the archived Sourcegraph handbook repository (github.com/sourcegraph/handbook), LICENSE:
    Apache License 2.0; the file's site front-matter block is omitted, nothing else changed.
    Apache License 2.0 notice: goHeather added the YAML front-matter above the text and changed nothing in the text; the licence text is in LICENSES/Apache-2.0.txt.
license: Apache-2.0
status: draft
version: 1.0.0
last_reviewed: "2026-11-14"
reviewed_by: ""
summary: >-
  Sourcegraph's internal cloud security policy for all assets it owns or manages at any cloud service provider,
  aligned to CIS, Cloud Security Alliance and SOC 2 controls. Short sections on asset ownership, annually tested
  disaster recovery plans, least-privilege IAM with MFA, infrastructure-as-code and approved changes, secure
  baselines, encryption at rest and in transit, logging and incident response, exceptions via the risk register.
---

# Cloud Security Policy

## Purpose

Sourcegraph uses solely Cloud-based infrastructure and is moving towards holding customer data (our highest risk assets) in multiple Cloud Service Providers (CSPs). This policy outlines controls to be followed across all CSPs according to the data classification held or processed by the assets. The policy follows industry best-practices such as Center for Internet Security (CIS) and Cloud Security Alliance (CSA), along with ensuring several SOC2 controls.

## Scope

This document covers all Cloud assets owned and/or managed by Sourcergaph in any Cloud provider. The responsibilities and requirements are broken into the following areas:

- Ownership
- Disaster recovery
- Access controls
- Infrastructure-as-code and change management
- Secure baselines
- Data protection
- Logging, monitoring and incident response

## Ownership

All Cloud assets must have defined owners internally. The owner is responsible for ensuring that the asset is compliant with internal policies. An owner can be an individual (DRI) or a team. The creator of an asset is its owner unless clearly stated otherwise.

## Disaster recovery

We will maintain a documented Disaster Recovery plan for Cloud assets containing Restricted data, or any assets under compliance that requires so. The Disaster Recovery plans are tested on an annual basis and tests properly documented.

## Access controls

Our Cloud IAM is designed to enforce the principles of least privilege and segregation of duties. Access to any non-public data must require MFA options. Access to Restricted and Private data must require approval. Wherever possible access logs should be collected and monitored.

## Infrastructure-as-code and change management

All assets containing Private or Restricted data should be defined and config through Infrastructure-as-Code (IaC). All changes to the infrastructure must be approved. Wherever possible changes should be made through automation and manual operations limited.

## Secure baselines

Assets should be configured to an approved secure baseline, based on industry standards such as Cloud Security Alliance (CSA), Center for Internet Security (CIS) and the National Institute of Standards Technology (NIST).

Internet-facing assets must be behind a Load Balancer (or similar) or be designed for being exposed externally, such as storage buckets.

## Data protection

We enforce data encryption at-rest and in-transit for assets containing Restricted and Private data. Data should be properly segregated given its sensitivity and purpose.

## Logging, monitoring and incident response

Assets containing Restricted or Private data should be logged. Logs should be monitored and designed to be alerted upon through detection mechanisms. Sourcegraph shall maintain trained Incident Response teams with documented playbooks and incident management practices. The [Security Incident Response Policy](../../departments/security/security-incident-response.md) defines who should report incidents and how.

## Policy compliance

Sourcegraph will measure and verify compliance to this policy through various methods, including but not limited to, business tool reports, and both internal and external audits.

## Exceptions

Exceptions to this policy must be documented in the Risk Register and approved by the Policy Owner.

## Violations and enforcement

Any known violations of this policy should be reported to report-policy-violation@sourcegraph.com. Failure to follow this policy can result in disciplinary action, up to and including termination.

**Policy Owner: Head of Security**

| Version | Date       | Author/Reviewer | Comments      |
| ------- | ---------- | --------------- | ------------- |
| 1.0     | 2023-03-23 | Andre Eleuterio | First version |
