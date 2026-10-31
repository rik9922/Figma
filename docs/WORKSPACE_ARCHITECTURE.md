# Workspace Architecture & Multi-Project Specification

## 1. System Philosophy

The Smart AI Figma Designer & Creator workspace (`https://github.com/rik9922/Figma`) is an AI-powered design environment bridging project requirements into high-end, editable Figma designs using **Google Antigravity**, **Figma Remote MCP**, and native Figma primitives.

### Core Architecture Axioms:

1. **Design Creation Over QA Automation**: The primary output is real, editable Figma designs (frames, components, Auto Layout, variables). Automated QA pipelines are not the product; technical checks are strictly support diagnostics.
2. **Human Approval Sole Authority**: The user personally reviews and decides whether to accept or reject any design. Automated scripts never approve designs.
3. **Strict Multi-Project Isolation**: Reusable creator tools and neutral templates live at the root; each project lives self-contained under `projects/<projectName>/`.
4. **Non-Destructive Asset Safety**: Source assets are protected by default. Separate input/output paths required.
5. **$0 Budget Enforcement**: Never consume paid Figma AI credits or paid APIs. Use Antigravity's free AI generation and Figma MCP's free `upload_assets`.
6. **Strict Git Policy**: Single `main` branch exclusively.

---

## 2. Directory Layout & Roles

```text
Figma/
├── .agents/skills/                 # Modular design, architecture & Figma skills
├── docs/                           # Architecture, lifecycle, and tool verification docs
│   ├── APPROVAL_WORKFLOW.md        # User review & approval lifecycle specification
│   ├── TOOL_VERIFICATION.md        # Honest tool verification & MCP audit
│   ├── WORKSPACE_ARCHITECTURE.md   # System architecture & multi-project isolation
│   └── WORKSPACE_AUDIT.md          # Workspace audit log
├── tools/                          # Project-agnostic creator utilities
│   ├── common/                     # Safe project path resolver & lifecycle utilities
│   ├── asset-generation/           # Brief formulation & licensing tracking
│   ├── asset-optimization/         # Safe SVGO & Sharp scaler (non-destructive)
│   ├── figma-integration/          # Figma MCP URL parsing & payload formatting
│   └── technical-validation/       # Architecture syntax & token contrast calculators
├── templates/                      # Neutral scaffolding blueprints for new projects
│   ├── mobile-app/                 # Mobile container hierarchies & safe areas
│   ├── web-app/                    # Responsive grid standards
│   ├── design-system/              # Design tokens schema (W3C standard)
│   ├── asset-library/              # Asset manifest & tracking templates
│   ├── project-documentation/      # PRD, Benchmarks, & Screen Architecture templates
│   └── development-handoff/        # Handoff spec templates
├── projects/                       # Isolated project workspaces
│   ├── PROJECT_TEMPLATE/           # Golden neutral blueprint cloned by ./scripts/new-project
│   └── fintech-mobile-app/         # Existing project (Status: ON_HOLD)
└── scripts/                        # Root CLI commands
    ├── new-project                 # Safe platform-aware project initializer
    ├── validate-project            # Structure & config validator
    ├── validate-assets             # Asset size & manifest auditor
    ├── audit-architecture          # Screen inventory & navigation validator
    ├── verify-figma-mcp            # Non-fabricating Figma MCP status auditor
    └── generate-project-report     # Authoritative lifecycle status summary
```

---

## 3. The Creator Workflow

```text
Research → Architecture → Design → Figma Implementation → User Review → User Feedback → Revision → User Approval
```

The 9 authoritative lifecycle states:

- `DISCOVERING`
- `RESEARCHING`
- `READY_FOR_DESIGN`
- `DESIGN_IN_PROGRESS`
- `AWAITING_USER_REVIEW`
- `REVISION_REQUESTED`
- `USER_APPROVED`
- `ON_HOLD`
- `BLOCKED`

---

## 4. Multi-Project Isolation Contract

Each project in `projects/<name>/` is completely self-contained:

- **`project.config.json`**: Target platform, framework, language, visual direction, lifecycle state, and dedicated Figma file URL/key.
- **`requirements/`**: Project-specific PRD and feature inventory.
- **`research/`**: Benchmark analysis, user personas, and UX heuristics.
- **`architecture/`**: Screen inventory, Mermaid flow diagrams, connection matrix.
- **`assets/`**: Distinct `generated/`, `approved/`, `rejected/`, and `manifest/` directories.
- **`design-system/`**: Dedicated `TOKENS.json` with semantic variable bindings.
- **`revisions/`**: Dedicated `REVISION_HISTORY.md` tracking user feedback and approval history.

A project **NEVER** inherits or leaks assets, colors, or Figma node IDs from another project. All project CLI utilities access paths exclusively through the shared safe path resolver (`tools/common/project-utils.js`).
