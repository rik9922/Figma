---
name: figma-design-qa
description: Provides a pre-flight design quality and accessibility inspection guide for Figma designs before user review. Covers layout grids, touch targets, WCAG AA contrast, and state coverage.
---

# Designer Quality & Accessibility Inspection Protocol

Use this pre-flight inspection guide to verify visual craftsmanship, accessibility standards, and state coverage before presenting designs for human review.

> [!IMPORTANT]
> **Human Review Sole Authority**: This inspection protocol helps the creator verify craft standards. The AI agent cannot approve designs. The human user is the sole design reviewer and approval authority.

## The 8-Point Design Craft Checklist

```markdown
### 📋 Pre-Review Design Craft Card

| #   | Check Item              | Standard Specification                                                                   | Status |
| --- | :---------------------- | :--------------------------------------------------------------------------------------- | :----: |
| 1   | **Viewport Geometry**   | Exact standard canvas: 393×852 pt (iOS), 412×915 dp (Android), or responsive Web ramp    |  [ ]   |
| 2   | **Safe Area Insets**    | Top status bar and bottom home indicator respected; no overlapping controls              |  [ ]   |
| 3   | **8pt Spatial Grid**    | All padding and gap values conform strictly to 4, 8, 12, 16, 24, 32, 48px                |  [ ]   |
| 4   | **Touch Targets**       | All buttons, icons, and chips have ≥ 44×44 pt (iOS) or ≥ 48×48 dp (Android) touch bounds |  [ ]   |
| 5   | **Contrast Ratio**      | Body copy ≥ 4.5:1; Headers/Icons ≥ 3:1 verified against WCAG 2.1 AA                      |  [ ]   |
| 6   | **Auto Layout Health**  | No broken fixed-width children; text containers set to FILL with textAutoResize: HEIGHT  |  [ ]   |
| 7   | **Component Instances** | Repeated elements are instances of Master Components, bound to semantic design tokens    |  [ ]   |
| 8   | **Full State Coverage** | Documented treatments for Idle, Active, Error, Loading, and Empty states                 |  [ ]   |
```

## State & Boundary Coverage Matrix

Never present a user flow with only the "Happy Path". Inspect all relevant states:

1. **Default / Idle**: Initial clean state before interaction.
2. **Focused / Active**: User is typing in input or tapping button.
3. **Filled**: Valid data entered and formatted.
4. **Error State**: Validation failure; displays descriptive helper text and error border.
5. **Disabled State**: Button inactive until required fields are filled (opacity 40–50%).
6. **Loading State**: Activity spinner or animated skeleton loading placeholders.
7. **Empty State**: No data available; displays friendly illustration, explanation, and clear CTA.
