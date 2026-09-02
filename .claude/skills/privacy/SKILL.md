---
name: privacy
description: "Use when reviewing code for privacy compliance, data handling, sensitive data exposure, telemetry, analytics, or cloud service usage. Covers GDPR principles, data minimization, and local-only processing."
---

# Privacy Skill

## Core Principle

This tool processes SQL dumps that may contain personal and sensitive data. All processing must happen locally. No data leaves the user's machine.

## Data Handling Rules

### Never
- Send SQL contents to external services
- Store uploaded files permanently
- Log personal data, passwords, API keys, or tokens
- Add analytics or telemetry
- Use cloud storage for processed data
- Include real production data in tests or examples

### Always
- Process files locally
- Use synthetic data for tests and examples
- Discard processed data after use
- Minimize data retention
- Give users control over their data

## Sensitive Data Types

SQL dumps may contain:
- **Personal data**: names, emails, phone numbers, addresses
- **Credentials**: passwords, API keys, tokens, database credentials
- **Business data**: company names, financial data, internal identifiers
- **Technical data**: IP addresses, session tokens, device identifiers

## Logging Restrictions

Never log:
- SQL content or INSERT values
- Passwords, tokens, or API keys
- Personal information (names, emails, phones)
- Database credentials or connection strings
- File contents beyond metadata

Safe to log:
- File names and sizes (not contents)
- Table names and row counts (not data)
- Processing duration
- Error types (not sensitive error details)
- Configuration options (not secrets)

## Telemetry and Analytics

Do not add:
- Usage analytics
- Error tracking services
- Crash reporting to external services
- Feature flags that phone home
- Any network requests for "improvement" purposes

## Local Processing

The MVP must:
- Parse SQL files entirely on the client
- Extract tables in the browser or locally
- Generate output files locally
- Never require a server connection for core functionality
- Work completely offline after initial load

## Third-Party Dependencies

Before adding any dependency:
1. Does it make network requests?
2. Does it collect telemetry?
3. Does it store data externally?
4. Is it privacy-respecting?

Prefer dependencies that are local-only and privacy-respecting.
