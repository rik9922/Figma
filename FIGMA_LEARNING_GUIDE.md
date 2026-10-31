# Beginner's Figma Learning Guide: From QA to Product Design

This guide leverages your software testing engineering background to accelerate your Figma and UI/UX design mastery.

---

## 1. How QA Concepts Map Directly to Figma Design

| Software Testing Concept         | Figma Design Equivalent              | Why You Already Understand This                                                   |
| :------------------------------- | :----------------------------------- | :-------------------------------------------------------------------------------- |
| **Object-Oriented Class**        | **Master Component (`❖`)**           | Defined once; contains the core structure and styling rules.                      |
| **Object Instance**              | **Component Instance (`◇`)**         | Reusable object placed in screens; inherits from class, allows field overrides.   |
| **Polymorphism / States**        | **Variants & Component Properties**  | Same component taking different forms (Default, Hover, Error, Disabled).          |
| **CSS Flexbox / Dynamic Layout** | **Auto Layout (`Shift + A`)**        | Flow direction, padding, gap, and alignment rules that adapt to content.          |
| **Environment Variables (.env)** | **Figma Variables & Tokens**         | Centralized values (colors, spacing, radiuses) mapped across Light/Dark modes.    |
| **Boundary Value Analysis**      | **Responsive Resizing & Safe Areas** | Testing how UI behaves at 320px vs 393px vs 430px; avoiding notch overlaps.       |
| **Negative Testing**             | **Error & Empty State Design**       | Designing explicit UI states for validation failure, offline mode, and zero data. |
| **Regression Testing**           | **Design QA & Visual Regression**    | Verifying pixel alignment, contrast ratios, and touch targets before release.     |

---

## 2. Core Mental Models for Figma Mastery

### Mental Model 1: "Everything is a Frame, Nothing is a Group"

- In QA automation, a container is a `<div>` with styling and layout rules.
- In Figma, a **Frame** is a `<div>`. It has width, height, background fill, border, corner radius, and Auto Layout.
- A **Group** is merely a selection marquee that distorts when resized. Always press `F` for Frame; avoid `Cmd + G` for UI containers.

### Mental Model 2: "Hug vs. Fill"

- **Hug**: "I shrink-wrap tightly around my children." (Buttons hug their text + padding).
- **Fill**: "I stretch to take all available parent space." (Form fields expand to 100% card width).

### Mental Model 3: "Tokens over Raw Hex"

- Just as hardcoded strings in test scripts create maintenance nightmares, hardcoding `#007AFF` across 50 screens is anti-pattern.
- Bind fills to `color/action/primary`. When branding shifts or dark mode activates, 1 change updates every screen instantly.

---

## 3. Recommended 30-Day Practical Milestones

- **Week 1: Layout & Spatial Control**
  - Build a mobile login screen using only Frames and Auto Layout (`Shift + A`).
  - Master `HUG` vs `FILL` resizing.
- **Week 2: Component Architecture**
  - Build an atomic Button component with `Style` (Primary/Secondary) and `State` (Default/Pressed/Disabled) variants.
  - Add Boolean and Text properties.
- **Week 3: Mobile Patterns & Navigation**
  - Design a mobile card feed with safe area insets (54pt top, 34pt bottom).
  - Construct a reusable Bottom Tab Bar.
- **Week 4: Interactive Prototyping & Design QA**
  - Connect login flow to feed screen with `On Tap` -> `Navigate To` (Push 300ms).
  - Run the Design QA checklist and automated Playwright + Axe audit.
