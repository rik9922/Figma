# Mobile Design QA Inspection Checklist

Use this QA checklist to inspect every mobile screen before declaring it complete.

---

## 1. Spatial Geometry & Viewport Checks

- [ ] **Target Screen Size**: Verified standard mobile dimensions:
  - iOS standard: **393 × 852 pt**
  - Android standard: **412 × 915 dp**
- [ ] **Hardware Safe Area Insets**:
  - Top: 54 pt reserved for status bar / dynamic island.
  - Bottom: 34 pt reserved for home swipe indicator.
  - Actionable buttons and inputs sit strictly inside the safe zone.
- [ ] **Spatial Grid Adherence**:
  - Margin & padding values are multiples of 8 (or 4 for micro-spacing): 4, 8, 12, 16, 24, 32, 48px.
  - No arbitrary one-off values (e.g. 17px, 23px).

---

## 2. Touch Ergonomics & Accessibility

- [ ] **Minimum Touch Targets**:
  - iOS: All interactive hitboxes are at least **44 × 44 pt**.
  - Android: All interactive hitboxes are at least **48 × 48 dp**.
- [ ] **Color Contrast (WCAG 2.1 AA)**:
  - Body text (< 18 pt): Minimum **4.5:1** contrast ratio against background.
  - Headers / Icons (≥ 18 pt or bold): Minimum **3.0:1** contrast ratio.
- [ ] **Color Independence**:
  - No status or error relies solely on color; accompanied by an icon or text label.
- [ ] **Typography Readability**:
  - Primary body text is at least 15–16 pt.
  - Line height is 130%–150% of font size.
  - Text containers have `textAutoResize: HEIGHT` and horizontal `FILL` to prevent truncation.

---

## 3. Architecture & Auto Layout Health

- [ ] **Native Primitives**: Built entirely from semantic Frames, Auto Layout containers, and Text layers (zero Groups, zero flattened images).
- [ ] **Responsive Resizing**:
  - Top-level screen is `FIXED` width.
  - Nested cards and rows are set to `FILL` horizontally.
  - Buttons and badges are set to `HUG` horizontally.
- [ ] **Componentization**:
  - Repeated elements (Buttons, Inputs, Row items) are instances of defined Master Components (`❖`).
  - Variables bound to semantic tokens rather than raw hex colors.

---

## 4. State Coverage Matrix

Verify all 7 states have been designed and validated:

- [ ] **Default / Idle State**: Clean initial appearance.
- [ ] **Focused / Active State**: Highlighted border, active cursor.
- [ ] **Filled State**: Text entered and formatted correctly.
- [ ] **Error State**: Red accent border, descriptive inline error text.
- [ ] **Disabled State**: Muted appearance (opacity 40–50%), non-actionable.
- [ ] **Loading / Skeleton State**: Shimmer or activity spinner.
- [ ] **Empty State**: Friendly illustration, explanation, and clear CTA.

---

## 5. Automated Validation Commands

Run local automated checks on rendered implementations:

```bash
# 1. Run Playwright Mobile Viewport & Axe A11y Audit:
pnpm run qa

# 2. Format JSON, Markdown, and Token files:
pnpm run format
```
