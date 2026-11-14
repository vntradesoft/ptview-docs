---
sidebar_position: 2
title: Privacy & Data Protection Policy
---

# Privacy & Data Protection Statement

:::info Policy Metadata
- **Policy Version:** `v1.0.1`
- **Effective Date:** `2026-11-12`
- **Source:** Synchronized with the in-app Privacy Statement (`LegalDocumentsCatalog.GetPrivacyPolicyText` in **PtView Workstation**).
:::

---

## 1. Local-First Architecture

Your chart workspaces, custom drawings, indicator templates, Telegram Bot settings, and AI API keys are stored locally on your machine under your user data directory (`%LocalAppData%\PTView` or the `data\` folder in Portable builds).

## 2. Direct Exchange & AI Connectivity

- **Direct Connections:** PTView connects directly from your device to public exchange APIs (OKX, Binance, Bybit) and to your configured AI provider endpoints.
- **No Central Key Harvesting:** PTView does not request exchange trading API keys, does not hold user funds, and never transmits your private AI API keys or trading workspaces to any PTView or third-party server (other than the AI provider you explicitly configured when sending a prompt).

## 3. Anonymous Crash & Error Telemetry (Opt-Out)

- By default, anonymous crash stack traces and deduplicated background errors are sent to **Sentry** to help diagnose application stability issues.
- **Automatic PII Scrubbing:** IP addresses, machine identifiers, credentials, and user profile paths are automatically scrubbed before transmission.
- **Full Control:** You can disable crash and error telemetry at any time inside the app under **Settings → General → Privacy & Diagnostics**.

## 4. Compliance & Consent Audit Trail

When you accept the EULA & Risk Agreement inside PtView Workstation, the Software records a verifiable local consent audit entry (UTC timestamp, policy version, document SHA-256 hash, and environment metadata) in your local configuration folder to verify regulatory and license compliance.

## 5. Privacy Inquiries

For any questions regarding data handling or this Privacy Statement, please contact [support@ptview.app](mailto:support@ptview.app).
