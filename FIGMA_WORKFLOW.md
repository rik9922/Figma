# The 15-Step AI-First Mobile Design Workflow

This document details the complete 15-step design lifecycle executed by you and your AI UI/UX Design Agent.

---

## The Complete 15-Step Cycle

```
[01. Requirement Analysis] ──> [02. Product & UX Research] ──> [03. Competitor Benchmarking]
          │
          ▼
[04. User Journeys] ─────────> [05. Information Architecture] ─> [06. User Flows]
          │
          ▼
[07. Wireframes] ────────────> [08. Visual Direction] ─────────> [09. Design Tokens & Variables]
          │
          ▼
[10. Components & Variants] ──> [11. Editable Figma Screens] ──> [12. Interactive Prototypes]
          │
          ▼
[13. Accessibility Checks] ──> [14. Design QA & Audit] ───────> [15. Developer Handoff]
```

---

## Detailed Step-by-Step Instructions

### Step 01: Requirement Analysis

- Clarify business objectives, user goals, and constraints.
- Document inputs, outputs, validation rules, and error states.

### Step 02: Product & UX Research

- Identify user mental models, emotional context, and environmental factors (e.g. mobile use outdoors in bright sunlight).

### Step 03: Competitor & Reference Benchmarking

- Study real-world pattern implementations in top mobile apps (Apple, Airbnb, Uber, Duolingo, Revolut).
- Benchmark against Apple Human Interface Guidelines and Material Design 3.

### Step 04: User Journeys

- Map user steps from entry point (push notification, onboarding, home tab) to goal achievement.

### Step 05: Information Architecture (IA)

- Establish content hierarchy: What information is vital? What is secondary? What belongs behind a disclosure button or bottom sheet?

### Step 06: User Flows

- Diagram explicit screen-to-screen branching logic, including success paths and failure recovery loops.

### Step 07: Wireframes (Low-Fidelity)

- Allocate spatial budgets on a standard 393×852 pt mobile frame.
- Validate content density and hierarchy without color distraction.

### Step 08: Visual Direction

- Define brand personality, color palettes, typographic pairings, and corner radius language (squircle vs pill).

### Step 09: Design Tokens & Variables

- Create primitive and semantic tokens in Figma Local Variables (`color/surface/page`, `color/action/primary`, `radius/md`, `space/16`).

### Step 10: Components & Variants

- Build atomic master components (`❖`) using Auto Layout.
- Configure component properties (Boolean toggles, text properties, instance swap properties, variant sets).

### Step 11: Editable Figma Screens

- Assemble screens in the target Figma file using component instances (`◇`).
- Enforce strict Auto Layout (`FILL` on children, `HUG` on wrapping containers).

### Step 12: Interactive Prototypes

- Wire screen transitions (`Shift + E`): `On Tap` -> `Navigate To` or `Open Overlay`.
- Apply realistic mobile motion curves (`Push`, `Smart Animate`, 300ms ease-out).

### Step 13: Accessibility (A11y) Checks

- Audit contrast ratios (WCAG 2.1 AA minimum 4.5:1 for body copy).
- Audit touch targets (≥ 44×44 pt on iOS, ≥ 48×48 dp on Android).

### Step 14: Design QA & Audit

- Run the 8-point Design QA checklist. Correct any layout shift, spacing defects, or missing states.

### Step 15: Developer Handoff

- Document redlines, export optimized SVGs using SVGO, generate @1x/@2x/@3x raster scales, and link components in Dev Mode (`Shift + D`).
