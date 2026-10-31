---
name: figma-accessibility
description: Enforces WCAG 2.1 AA and AAA accessibility compliance in Figma designs. Covers color contrast ratios, touch target sizes, dynamic type scaling, focus indicators, and accessible form input design.
---

# Mobile Accessibility (A11y) Design Standards

Accessibility is not an afterthought; it is built into the foundation of every mobile design.

## 1. Color Contrast Standards (WCAG 2.1 AA)

- **Normal Text (< 18 pt or < 14 pt bold)**: Minimum **4.5:1** contrast ratio against its background.
- **Large Text (≥ 18 pt or ≥ 14 pt bold)**: Minimum **3.0:1** contrast ratio.
- **Interactive UI Components & Icons**: Minimum **3.0:1** contrast ratio for button borders, toggle states, and actionable iconography.
- _Rule_: Never convey critical state using color alone! Always pair color changes with an icon or clear text (e.g. error icon + "Invalid email address").

## 2. Touch Target Ergonomics

Fat-finger errors cause frustration. Ensure every interactive element meets minimum physical touch target dimensions:

- **Apple iOS (HIG)**: Minimum **44 × 44 pt**.
- **Google Android (Material 3)**: Minimum **48 × 48 dp**.
- _Technique_: If a visual icon is only 20×20 pt, wrap it in a transparent 44×44 pt Auto Layout frame so the hitbox is accessible.

## 3. Typography & Readability

- Minimum readable body size on mobile: **14 pt** (prefer **16 pt** for primary content).
- Line height (leading): Set to **130%–150%** of font size (e.g., 16 pt font with 22–24 pt line height).
- Avoid center-aligning long paragraphs (more than 3 lines); use left-aligned text for scanning.

## 4. Accessible Form Inputs

- Always provide a permanent visible label (floating label or top label). Never rely solely on placeholder text which disappears on typing.
- Provide descriptive inline error messages directly beneath the offending input field.
- Ensure error messages have sufficient color contrast (red `#D32F2F` or `#E53E3E` against white provides > 4.5:1).
