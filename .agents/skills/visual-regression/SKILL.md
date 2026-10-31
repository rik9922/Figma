---
name: visual-regression
description: Executes automated visual regression testing, mobile viewport emulation (iPhone 16 Pro, Google Pixel), touch target auditing, and accessibility compliance testing via Playwright and axe-core.
---

# Visual Regression & Mobile QA Automation

Use local headless browser automation to audit rendered implementations of mobile screens and components.

## 1. Local QA Automation Engine

The project includes a ready-to-use testing engine powered by **Playwright** and **@axe-core/playwright**:
Located at: `scripts/design-qa.js`.

## 2. Capabilities

1. **Mobile Viewport Emulation**:
   - iOS: 393 × 852 pt @ 3x Retina (`iPhone 16 Pro`).
   - Android: 412 × 915 dp @ 3x density (`Google Pixel 8`).
2. **Touch Target Auditing**: Automatically inspects every `button`, `a`, `input`, and interactive control; flags any element with width or height under 44 pt (iOS) or 48 dp (Android).
3. **Accessibility Auditing**: Runs `axe-core` across WCAG 2.1 A, AA standards (color contrast, missing form labels, invalid roles).
4. **Visual Snapshot Capture**: Generates full-page high-resolution PNG screenshots saved directly to `qa-reports/`.

## 3. How to Run Design QA

```bash
# Run the local mobile QA suite:
pnpm run qa

# Run directly with Node:
node -e 'import("./scripts/design-qa.js").then(m => m.runDesignQA({ filePath: "./preview.html", device: "ios" }))'
```
