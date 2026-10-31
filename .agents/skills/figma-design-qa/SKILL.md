---
name: figma-design-qa
description: Applies a rigorous manual and automation test engineering QA inspection protocol to Figma designs. Validates layout grids, alignment, state coverage (idle, loading, error, empty), responsive constraints, and platform compliance.
---

# Design QA Inspection Protocol

Leverage QA engineering discipline to systematically audit every design before handoff.

## The 8-Point Design QA Audit

```markdown
### 📋 Design QA Audit Card

| #   | Audit Item              | Verification Rule                                                                        | Pass / Fail |
| --- | :---------------------- | :--------------------------------------------------------------------------------------- | :---------: |
| 1   | **Viewport Geometry**   | Exact standard mobile canvas: 393×852 pt (iOS) or 412×915 dp (Android)                   |     [ ]     |
| 2   | **Safe Area Insets**    | Top 54pt status bar and bottom 34pt home indicator respected; no overlapping controls    |     [ ]     |
| 3   | **8pt Spatial Grid**    | All padding and gap values conform strictly to 4, 8, 12, 16, 24, 32, 48px                |     [ ]     |
| 4   | **Touch Targets**       | All buttons, icons, and chips have ≥ 44×44 pt (iOS) or ≥ 48×48 dp (Android) touch bounds |     [ ]     |
| 5   | **Contrast Ratio**      | Body copy ≥ 4.5:1; Headers/Icons ≥ 3:1 verified against WCAG 2.1 AA                      |     [ ]     |
| 6   | **Auto Layout Health**  | No broken fixed-width children; text containers set to FILL with textAutoResize: HEIGHT  |     [ ]     |
| 7   | **Component Instances** | Repeated elements are instances of Master Components, not detached frames                |     [ ]     |
| 8   | **Full State Coverage** | All required states designed and documented                                              |     [ ]     |
```

## State Coverage Matrix

Never consider a user flow complete with only the "Happy Path". Audit all 7 states:

1. **Default / Idle**: Initial clean state before interaction.
2. **Focused / Active**: User is typing in input or tapping button.
3. **Filled**: Valid data entered.
4. **Error State**: Validation fails; displays descriptive red helper text and error border.
5. **Disabled State**: Button inactive until required fields are filled (opacity 40–50%).
6. **Loading State**: Activity spinner or animated skeleton loading placeholders.
7. **Empty State**: No data available; displays friendly illustration, explanation, and clear CTA.
