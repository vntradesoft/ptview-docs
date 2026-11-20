---
sidebar_position: 2
title: Privacy & Data Protection Policy
---

# Privacy & Data Protection Statement

:::info Policy Metadata
- **Policy Version:** `v1.1.1`
- **Effective Date:** `2026-11-18`
- **Source:** Synchronized with the in-app Privacy Statement (`LegalDocumentsCatalog.GetPrivacyPolicyText` in **PtView Workstation**).
:::

---

## 1. Local-First Architecture

Your chart workspaces, custom drawings, indicator templates, and user-configured **AI Provider API keys** and **Telegram Bot tokens** are stored strictly locally on your machine under your user data directory (`%LocalAppData%\PTView` or the `data\` folder in Portable builds).

## 2. Public Market Data & Direct AI / Telegram Connectivity

- **Public Exchange Feeds Only:** PTView connects directly from your device solely to public market-data endpoints of supported multi-exchange providers enabled for your region and build configuration.
- **Zero Exchange Account Credentials & Zero Key Harvesting:** PTView does not support order execution, never requests exchange trading account credentials or exchange API keys, does not hold user funds, and never transmits your local **AI Provider API keys**, **Telegram Bot tokens**, or chart workspaces to any PTView server (AI prompts are sent solely to the AI provider endpoint you explicitly configure).

## 3. Remote Care Configuration Sync & Fleet Telemetry (`https://remote-care.ptview.app`; Opt-Out)

To deliver cryptographically signed runtime configurations (`PTV-RC1`), regional compliance rules (supported exchanges and contract types per jurisdiction and exchange terms), curated public news updates, and maintenance notices, the Software periodically sends non-personal technical metadata to PTView's Remote Care service:

- Pseudonymous hardware fingerprint (`MachineId` formatted as `PTM-...`)
- Application version and running build channel (`Stable` or `Beta`)
- Edition tier, operating system version, and UI locale
- Active Remote Care revision, enabled exchange names, and active news source count

This channel never collects or transmits AI API keys, Telegram Bot tokens, workspaces, drawings, trading activity, email addresses, or personal identities. You can **disable Remote Care device telemetry & check-ins at any time** under **Settings → General → Privacy & Diagnostics** or **Help → Remote Care & Support...** to stop sending your `MachineId`, OS/edition telemetry, and maintenance banners—the Software will only fetch anonymous global compliance manifests (`anon=1` without device identifiers) or rely on verified cached/local defaults when offline.

## 4. Voluntary Diagnostics Support Bundle (`Help → Remote Care & Support...`)

Only when you **actively submit a support request** inside the Remote Care dialog does PTView upload your written issue description, system environment summary, and up to the last `180` log lines—after `SecretRedactor` automatically masks AI API keys, Telegram Bot tokens, passwords, and local username paths—to generate a tracking ticket (`CARE-...`) for PTView Support.

## 5. Anonymous Crash & Error Telemetry (Sentry; Opt-Out)

- By default, anonymous crash stack traces and deduplicated background errors are sent to **Sentry** to help diagnose application stability issues.
- **Automatic PII Scrubbing:** IP addresses, machine identifiers, credentials, and user profile paths are automatically scrubbed before transmission.
- **Full Control:** You can disable crash and error telemetry at any time inside the app under **Settings → General → Privacy & Diagnostics**.

## 6. Compliance & Consent Audit Trail

When you accept the EULA & Risk Agreement inside PtView Workstation, the Software records a verifiable local consent audit entry (UTC timestamp, policy version, document SHA-256 hash, and environment metadata) in your local configuration folder to verify regulatory and license compliance.

## 7. Privacy Inquiries

For any questions regarding data handling or this Privacy Statement, please contact [support@ptview.app](mailto:support@ptview.app).
