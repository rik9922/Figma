# 10-Step AI-First Design Workflow

This workflow governs how you and your AI UI/UX Design Agent collaborate to produce professional, editable, production-grade mobile designs in Figma.

---

## The 10-Step Process Overview

| Step   | Phase                        | Key Output                                        | Design QA Gate                          |
| :----- | :--------------------------- | :------------------------------------------------ | :-------------------------------------- |
| **01** | **Requirement Analysis**     | Functional brief, constraints, success criteria   | Clear problem definition & scope        |
| **02** | **UX Research & References** | 3-5 real-world mobile app benchmarks              | Proven design patterns identified       |
| **03** | **User Flows & IA**          | Flowchart of steps, screen hierarchy              | Frictionless task completion path       |
| **04** | **Wireframing**              | Structural layout & content zones                 | Clear spatial budgeting & hierarchy     |
| **05** | **Visual Design Direction**  | Moodboard, palette, typography selection          | Cohesive visual language & tone         |
| **06** | **Design System & Tokens**   | Variables (color/radius/spacing), Base components | Strict reusable atomic foundations      |
| **07** | **Editable Figma Screens**   | High-fidelity native mobile artboards             | 100% editable vector/Auto Layout layers |
| **08** | **Prototyping & Motion**     | Clickable links, screen transitions               | Realistic mobile interaction feel       |
| **09** | **Design QA & Audit**        | QA inspection report, contrast & touch checks     | Zero misalignments, WCAG AA compliant   |
| **10** | **Concept Walkthrough**      | 6-point educational summary for user              | Designer understanding & handoff ready  |

---

## Detailed Step-by-Step Execution Guide

### STEP 1 — Requirement Analysis

- **Goal**: Clarify what we are building, for whom, and why.
- **Actions**:
  1. Identify primary user persona and emotional state (e.g., rushed commuter, meticulous shopper).
  2. Define the core user job to be done (JTBD).
  3. List must-have fields, actions, and validation rules.
- **QA Check**: Are edge cases (network offline, expired session, invalid input) documented upfront?

### STEP 2 — UX Research & Reference Analysis

- **Goal**: Benchmark against best-in-class mobile products.
- **Actions**:
  1. Analyze iOS Human Interface Guidelines and Google Material 3 conventions.
  2. Study reference patterns from leading apps (Apple Wallet, Airbnb, Revolut, Linear).
  3. Avoid desktop SaaS patterns; prioritize one-handed mobile ergonomics.
- **QA Check**: Is the pattern native to the target platform (iOS vs Android)?

### STEP 3 — User Flows & Information Architecture

- **Goal**: Map the journey before touching Figma.
- **Actions**:
  1. Map user flow: `Entry -> Step 1 -> Validation -> Success -> Next Screen`.
  2. Establish screen hierarchy: What is primary? What is secondary? What is tertiary?
- **QA Check**: Can the user achieve the goal in minimal taps without ambiguity?

### STEP 4 — Wireframes (Low-Fidelity Layout)

- **Goal**: Focus purely on layout, spacing, and typography weight without color distraction.
- **Actions**:
  1. Allocate spatial budgets (header, content scroll container, sticky action bar).
  2. Validate content density on a standard 393×852 pt mobile frame.
- **QA Check**: Does content fit comfortably above the fold without truncation?

### STEP 5 — Visual Design Direction

- **Goal**: Define the aesthetic mood and branding.
- **Actions**:
  1. Establish primary brand color, neutral grayscale, and semantic alert colors (Success, Warning, Error).
  2. Choose high-legibility system fonts (SF Pro for iOS, Roboto/Google Sans for Android, or Inter).
  3. Define corner radius personality (e.g., subtle 8px vs playful 16px).
- **QA Check**: Does the color palette pass WCAG AA contrast against dark and light backgrounds?

### STEP 6 — Design System & Reusable Components

- **Goal**: Create the building blocks before assembling full screens.
- **Actions**:
  1. Define Figma Color & Spacing Variables (`bg/surface`, `text/primary`, `radius/md`, `space/16`).
  2. Create atomic components:
     - `Button` (Primary, Secondary, Text; Default, Pressed, Disabled, Loading)
     - `InputField` (Idle, Focused, Filled, Error with helper text)
     - `NavigationBar` / `TabBar`
- **QA Check**: Are all components using Auto Layout and exposed component properties?

### STEP 7 — Actual Editable Figma Screen Creation

- **Goal**: Assemble high-fidelity mobile screens directly on the Figma canvas.
- **Actions**:
  1. Create a top-level mobile frame (`393 × 852 pt`).
  2. Place native component instances and bind layout properties.
  3. Use Auto Layout throughout with `FILL` and `HUG` rules.
  4. Ensure all layers are semantic, clean, and individually selectable.
- **QA Check**: Are there any detached instances, hardcoded raw hex colors, or fixed-width text layers that break on resize?

### STEP 8 — Prototype & Interactions

- **Goal**: Make the flow interactive and testable.
- **Actions**:
  1. Switch to the **Prototype** tab (`Shift + E`).
  2. Connect interactive hotspots (e.g., "Log In" button -> Home Dashboard).
  3. Configure realistic mobile transitions (`Push`, `Smart Animate`, 300ms ease-out).
- **QA Check**: Do overlays, bottom sheets, and keyboard dismissals feel natural?

### STEP 9 — Design QA & Corrections

- **Goal**: Validate pixel precision, alignment, and accessibility.
- **Actions**:
  1. Inspect 8pt grid compliance.
  2. Verify touch targets (min 44×44 pt).
  3. Test error states, empty states, and loading states.
  4. Correct any discovered defects directly on the canvas.
- **QA Check**: Full completion of the Design QA checklist.

### STEP 10 — Concept Walkthrough & Educational Handoff

- **Goal**: Teach the user what was created and how to control it manually.
- **Actions**:
  1. Provide the 6-point educational breakdown for every key concept.
  2. Point out exact Figma right-panel locations and keyboard shortcuts.
  3. Invite the user to test, override, and adjust properties on the canvas.
