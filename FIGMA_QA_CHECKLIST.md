# Designer Quality Reference Checklist

A pre-flight reference guide for designers and creators to inspect visual hierarchy, spatial geometry, accessibility standards, and state coverage before presenting work for human review.

> [!IMPORTANT]
> **Human Review & Approval Sole Authority**:
> This checklist is an engineering and craftsmanship reference guide. Automated scripts never approve designs on the user's behalf. The human user personally evaluates designs and is the sole review and approval authority.

---

## 1. Spatial Geometry & Viewport Standards

- [ ] **Target Screen Size**: Verified canonical viewport dimensions:
  - iOS standard: **393 × 852 pt** (iPhone 16 Pro)
  - Android standard: **412 × 915 dp** (Google Pixel 8/9)
  - Web responsive breakpoints: **1440px** (Desktop), **1024px** (Tablet landscape), **768px** (Tablet portrait), **393px** (Mobile)
- [ ] **Hardware Safe Area Insets**:
  - Top: 59 pt reserved for status bar / Dynamic Island on modern iPhones (or 24–48 dp on Android).
  - Bottom: 34 pt reserved for home swipe indicator.
  - Actionable buttons and inputs sit strictly inside the safe zone.
- [ ] **8pt Spatial Grid Adherence**:
  - Margin & padding values are multiples of 8 (or 4 for micro-spacing): 4, 8, 12, 16, 24, 32, 48px.
  - No arbitrary one-off values (e.g. 17px, 23px).

---

## 2. Accessibility & Platform Ergonomics

- [ ] **Minimum Touch Targets**:
  - iOS: All interactive hitboxes are at least **44 × 44 pt**.
  - Android: All interactive hitboxes are at least **48 × 48 dp**.
  - Web: Interactive targets at least **32 × 32 px** (desktop) or **44 × 44 px** (mobile).
- [ ] **Color Contrast (WCAG 2.1 AA Standards)**:
  - Body text (< 18 pt): Minimum **4.5:1** contrast ratio against its background.
  - Headers / Actionable Icons (≥ 18 pt or bold): Minimum **3.0:1** contrast ratio.
- [ ] **Color Independence**:
  - No status, error, or confirmation relies solely on color; always accompanied by an icon or text label.
- [ ] **Typography Readability**:
  - Primary body text is at least 15–16 pt on mobile.
  - Line height is 130%–150% of font size.
  - Text containers have `textAutoResize: HEIGHT` and horizontal `FILL` to prevent clipping.

---

## 3. Native Figma Layer Architecture

- [ ] **Native Primitives**: Built from semantic Frames, Auto Layout containers, and Text layers (avoid flattened screenshots as mockups).
- [ ] **Responsive Resizing**:
  - Top-level screen is `FIXED` width.
  - Nested cards and rows are set to `FILL` horizontally.
  - Buttons and badges are set to `HUG` horizontally.
- [ ] **Componentization & Reusability**:
  - Repeated elements (Buttons, Inputs, Cards, Row items) are instances of defined Master Components (`❖`).
  - Colors and spacing bound to design tokens / Figma variables rather than disconnected raw hex values.

---

## 4. State & Boundary Coverage

Verify visual treatments for all relevant states before submitting for user review:

- [ ] **Default / Idle State**: Clean initial appearance.
- [ ] **Focused / Active State**: Highlighted border, active cursor.
- [ ] **Filled State**: Text entered and formatted correctly.
- [ ] **Error State**: Accent border, descriptive inline error helper text.
- [ ] **Disabled State**: Muted appearance (opacity 40–50%), non-actionable.
- [ ] **Loading / Skeleton State**: Shimmer or activity indicator placeholder.
- [ ] **Empty State**: Zero-data illustration, helpful explanation, and clear primary CTA.

---

## 5. Creator Technical Diagnostics

Run local technical checks to verify files and configuration before presenting designs:

```bash
# 1. Verify project structure and configuration:
./scripts/validate-project <project-name>

# 2. Check asset sizes and manifest records:
./scripts/validate-assets <project-name>

# 3. Validate screen architecture and navigation structure:
./scripts/audit-architecture <project-name>

# 4. Mathematically check design token contrast ratios:
pnpm run audit:contrast <project-name>

# 5. Check Figma MCP tool availability and file connection:
./scripts/verify-figma-mcp <project-name>

# 6. Format workspace code and documentation:
pnpm run format
```
