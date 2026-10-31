# The Canonical Creator Workflow & Design Lifecycle

This document details the design creation lifecycle executed by you and the AI UI/UX Design Agent in this workspace.

The workflow is strictly:

```text
Research → Architecture → Design → Figma Implementation → User Review → User Feedback → Revision → User Approval
```

The human user is the sole design reviewer and approval authority.

---

## The 9 Authoritative Project Lifecycle States

1. **`DISCOVERING`**:
   - Understand the core business objective and customer problem.
   - Clarify target users, user roles, functional expectations, and platform constraints.
   - Initialized in `requirements/PRD.md` and `requirements/FEATURE_INVENTORY.md`.

2. **`RESEARCHING`**:
   - Benchmark market leaders and direct competitors.
   - Analyze UX patterns, navigation conventions, and interaction paradigms.
   - Evaluate platform guidelines: Apple Human Interface Guidelines (HIG), Google Material Design 3, or Responsive Web standards.
   - Documented in `research/COMPETITIVE_RESEARCH.md` and `research/USER_PERSONAS.md`.

3. **`READY_FOR_DESIGN`**:
   - Establish complete screen inventory with standardized IDs (`ONB-01`, `MAIN-01`, `DETAIL-01`, `ACT-01`).
   - Construct screen connection matrix, navigation flows, and state coverage (Idle, Active, Error, Loading, Empty).
   - Establish visual identity, custom palette, typography ramp, and 8pt spatial tokens in `design-system/TOKENS.json`.
   - Validated via `./scripts/audit-architecture <project-name>`.

4. **`DESIGN_IN_PROGRESS`**:
   - Generate project-specific visual assets via free cloud AI (Imagen 3) and log licensing.
   - Safe asset optimization (SVGO / Sharp) with source asset protection.
   - Create real, editable Figma frames, Auto Layout containers, text layers, components, and variables.
   - Wire prototype connections and document motion physics in `motion/MOTION_SPECIFICATIONS.md`.

5. **`AWAITING_USER_REVIEW`**:
   - Design creation completed for requested scope.
   - Present live Figma file link, canvas node IDs, visual screenshots, and design rationales.
   - Agent pauses execution and awaits user review.

6. **`REVISION_REQUESTED`**:
   - User reviews the design and requests adjustments, layout changes, or style tweaks.
   - Agent modifies actual Figma frames, updates components/tokens, and preserves unrelated approved work.
   - Logs revisions in `revisions/REVISION_HISTORY.md` and returns to `AWAITING_USER_REVIEW`.

7. **`USER_APPROVED`**:
   - Explicit user acceptance granted in chat.
   - State transitions to `USER_APPROVED`. Ready for development handoff or final asset export.

8. **`ON_HOLD`**:
   - Project paused. No canvas or asset operations permitted without explicit user instruction.

9. **`BLOCKED`**:
   - Progression halted due to external dependency, missing access, or required clarification.

---

## Natural Language Commands & Workflow Mapping

| Natural Language Command               | Lifecycle Phase        | Operational Execution                                                                                 | Artifacts & Output                 |
| -------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **`"Start a new project <name>"`**     | `DISCOVERING`          | Runs `./scripts/new-project <name> [platform] [framework]`, scaffolds isolated workspace              | `projects/<name>/` scaffolding     |
| **`"Continue project <name>"`**        | Current State          | Loads `project.config.json`, displays status report and next action items                             | Status report & action plan        |
| **`"Research this project"`**          | `RESEARCHING`          | Analyzes competitors, maps user personas, audits HIG / Material 3                                     | `research/COMPETITIVE_RESEARCH.md` |
| **`"Create the screen architecture"`** | `READY_FOR_DESIGN`     | Builds standardized screen IDs, navigation matrix, and runs `./scripts/audit-architecture`            | `architecture/SCREEN_INVENTORY.md` |
| **`"Generate design concepts"`**       | `READY_FOR_DESIGN`     | Creates custom color palette, typography ramp, and tokens                                             | `design-system/TOKENS.json`        |
| **`"Show me asset previews"`**         | `DESIGN_IN_PROGRESS`   | Generates candidate variants via free cloud AI; creates preview artifact for user review              | `assets/generated/`, chat preview  |
| **`"Create the Figma design"`**        | `DESIGN_IN_PROGRESS`   | Constructs native frames, optimizes assets, uploads via `upload_assets` ($0 cost), builds editable UI | Live editable frames in Figma      |
| **`"Present design for review"`**      | `AWAITING_USER_REVIEW` | Presents Figma link, screenshots, design decisions, and awaits user feedback                          | Set to `AWAITING_USER_REVIEW`      |
| **`"Audit technical configuration"`**  | Technical Diagnostic   | Runs `./scripts/verify-figma-mcp <name>` and `./scripts/validate-project <name>`                      | Technical verification report      |

---

## The 6-Point Educational Walkthrough

Whenever introducing, configuring, or explaining a Figma feature or pattern, always follow this breakdown:

1. **What Feature Was Used**: Simple name and definition.
2. **Why It Was Used Here**: Design rationale for this specific screen/element.
3. **What Problem It Solves**: Prevents content overflow, maintains 8pt grid, enables dark mode.
4. **Where to Find It in Figma**: Exact navigation path in the Figma UI.
5. **How You Can Modify It Manually**: Step-by-step instructions with values/controls to adjust.
6. **Designer Takeaway**: Core UX/UI rule or architectural principle to remember.
