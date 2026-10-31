---
name: web-ui-design
description: Guides responsive web design and desktop application UI in Figma. Covers responsive breakpoint ramps (1440, 1024, 768, 393px), fluid 12-column layouts, web typography ramps, complex form/table design, navigation headers/sidebars, and modal dialogs.
---

# Responsive Web & Desktop UI Design Guidelines

Web application design requires responsive flexibility, distinct information density, and structured layout architecture across desktop, tablet, and mobile viewports.

---

## 1. Responsive Breakpoint Ramp & Column Grids

Always design responsive web applications with intentional adaptations across four canonical breakpoints:

| Breakpoint Tier      | Canvas Width | Column Grid | Margin | Gutter | Primary Layout Paradigm               |
| :------------------- | :----------- | :---------: | :----: | :----: | :------------------------------------ |
| **Desktop Wide**     | `1440 × 900` |  12-column  |  80px  |  24px  | Persistent sidebar + fluid main hub   |
| **Tablet Landscape** | `1024 × 768` |  12-column  |  32px  |  16px  | Collapsible sidebar or top navigation |
| **Tablet Portrait**  | `768 × 1024` |  8-column   |  24px  |  16px  | Top header with hamburger / drawer    |
| **Mobile Companion** | `393 × 852`  |  4-column   |  16px  |  12px  | Vertical single-column stack          |

---

## 2. Web Container Architecture in Figma

Every web page frame in Figma must follow a semantic Auto Layout hierarchy:

```text
[PAGE: Desktop_1440] (1440 × FIXED, Auto Layout Vertical)
├── [GLOBAL_HEADER] (FILL width, FIXED 64–72px height, Horizontal Auto Layout)
│   ├── [BRAND_LOGO]
│   ├── [PRIMARY_NAV_LINKS] (HUG width, Gap: 24px)
│   └── [USER_ACTIONS / PROFILE] (HUG width)
├── [BODY_CONTAINER] (FILL width, FILL / HUG height, Horizontal Auto Layout)
│   ├── [SIDEBAR_NAVIGATION] (FIXED 240–280px width, optional by product type)
│   └── [MAIN_CONTENT] (FILL width, Vertical Auto Layout, Padding: 32–48px)
│       ├── [PAGE_HEADER_TITLE & CTAS] (FILL width)
│       ├── [METRICS_OVERVIEW_CARDS] (12-column grid or Horizontal Auto Layout with Wrap)
│       ├── [DATA_TABLE_OR_FEED] (FILL width)
│       └── [PAGINATION_CONTROLS] (FILL width)
└── [GLOBAL_FOOTER] (FILL width, HUG height, Padding: 40px)
```

---

## 3. Web UI Component Patterns

### A. Complex Data Tables

- Header row: Bold or Medium weight, uppercase or muted secondary color (`14px`), fixed height 44–48px.
- Table row: Border hairline (`1px #E5E7EB`), hover state (`surface/card`), vertical height 52–60px.
- Numerical columns: Right-aligned with tabular numerals.
- Text & ID columns: Left-aligned with truncation handling.
- Action column: Right-aligned icons / dropdown triggers.

### B. Responsive Forms

- Desktop: Multi-column fields (e.g. First Name / Last Name side-by-side, each 50% width).
- Tablet & Mobile: Auto-collapse to 100% full-width single-column stack.
- Input height: Standard **40–44px** desktop, **48px** touch target on mobile.
- Labels: Always persistent top-aligned labels (`14px`, SemiBold/Medium).

### C. Modal Dialogs & Drawers

- Centered Modal: Fixed width (`480px`, `560px`, or `680px`), rounded corners (`12–16px`), elevation shadow.
- Scrim / Backdrop: Solid black with **40–50% opacity**, covers the entire canvas.
- Slide-over Drawer: Fixed width (`400–480px`) anchored to the right edge for deep filter/edit workflows.

---

## 4. Web Typographic Ramp (8pt Spatial Grid)

| Level               | Font Size | Line Height | Weight         | Common Web Usage                       |
| :------------------ | :-------- | :---------- | :------------- | :------------------------------------- |
| **Display / Hero**  | `36–44px` | `48–52px`   | Bold (700)     | Marketing hero headers, landing pages  |
| **H1 / Page Title** | `28–32px` | `36–40px`   | Bold (700)     | Main page headers                      |
| **H2 / Section**    | `22–24px` | `28–32px`   | SemiBold (600) | Section headings, card titles          |
| **H3 / Subheader**  | `18–20px` | `24–28px`   | SemiBold (600) | Modal titles, table group headers      |
| **Body Large**      | `16px`    | `24px`      | Regular (400)  | Primary reading content (150% leading) |
| **Body Medium**     | `14px`    | `20px`      | Regular (400)  | Form inputs, table cells, secondary    |
| **Caption / Meta**  | `12px`    | `16px`      | Medium (500)   | Badges, timestamps, helper copy        |

---

## 5. Web Auto Layout Resizing Rules

1. **Top Page Frame**: Width is `FIXED` (`1440px`), Height is `HUG` (grows as content lengthens).
2. **Main Layout Container**: Width is `FILL` horizontally. Max-width constraint applied via inner centering container (e.g., `1280px` max with Auto margins).
3. **Cards & Table Containers**: Set to `FILL` horizontally so they stretch with the grid.
4. **Action Buttons**: Width is `HUG` with horizontal padding (`16–20px`), never stretched arbitrarily across the whole desktop screen!
