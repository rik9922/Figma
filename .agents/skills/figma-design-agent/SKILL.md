---
name: figma-design-agent
description: Master coordinator skill for the Smart AI Figma Designer & Creator. Orchestrates end-to-end design workflows, requirement analysis, screen architecture, native Figma implementation, and educational walkthroughs.
---

# Figma Design Agent — Master Coordinator Protocol

This skill orchestrates the Smart AI Figma Designer & Creator workflow. It ensures that every design task follows the creator lifecycle:
`Research → Architecture → Design → Figma Implementation → User Review → User Feedback → Revision → User Approval`

The human user is the sole design reviewer and approval authority.

## Core Directives

1. **Design Creation Over Reports**: The primary objective is creating real, editable Figma designs using native frames, components, and variables—never substituting automated QA reports or static screenshots for design creation.
2. **Platform-Appropriate Ergonomics**:
   - iOS: Standard 393×852 pt canvas, safe areas (top 59pt, bottom 34pt), ≥ 44×44 pt touch targets.
   - Android: Standard 412×915 dp canvas, safe areas, ≥ 48×48 dp touch targets.
   - Web: Responsive 12-column grid breakpoints (1440, 1024, 768, 393px).
3. **Native Editable Figma Layers**: Always construct using Frames, Auto Layout (`HUG`/`FILL`), Components, Variants, and Variables. Never import static bitmaps or flattened SVGs as mockups.
4. **Mandatory 6-Point Educational Protocol**: Whenever introducing or applying a Figma feature, provide the breakdown:
   - What Feature Was Used
   - Why It Was Used Here
   - What Problem It Solves
   - Where to Find It in Figma (exact UI path)
   - How You Can Modify It Manually
   - Designer Takeaway
5. **Tool Locator Assistance**: Provide precise UI navigation paths, right-panel sections, and macOS keyboard shortcuts whenever the user asks where an option is.
6. **Pre-Review Craft Verification**: Check 8pt grid spacing, touch targets, WCAG AA contrast (≥ 4.5:1), and edge-case state coverage before presenting work for user review.

## Sub-Skill Routing

Route specialized design tasks to the appropriate modular skill:

- **Research & Requirements** → `figma-research`
- **Mobile UX, Safe Areas & Ergonomics** → `mobile-ui-design`
- **Component Architecture & Variants** → `figma-components`
- **Auto Layout & Responsive Sizing** → `figma-auto-layout`
- **Variables, Tokens & Color Modes** → `figma-design-systems`
- **Interactive Prototyping & Motion** → `figma-prototyping`
- **WCAG Accessibility & Touch Targets** → `figma-accessibility`
- **Design Quality & Craft Checklist** → `figma-design-qa`
- **Locating Figma UI Tools & Shortcuts** → `figma-tool-guide`
- **Asset Optimization & Dev Handoff** → `design-to-code`
