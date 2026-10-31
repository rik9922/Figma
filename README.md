# 🎨 Smart AI Figma Designer & Creator

[![Figma MCP](https://img.shields.io/badge/Figma-Remote%20MCP-F24E1E?logo=figma&logoColor=white)](https://mcp.figma.com/mcp)
[![Git Branch: Main Only](https://img.shields.io/badge/Git-Main%20Branch%20Only-blue?logo=git&logoColor=white)](#-strict-git-policy--single-main-branch-only)
[![Node.js](https://img.shields.io/badge/Node.js-26.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Budget: $0](https://img.shields.io/badge/Budget-$0%20Policy-green)](#-0-budget-policy)

A reusable, AI-powered UI/UX design workspace and bridge designed for **Google Antigravity**, **Figma Remote MCP**, and native editable Figma design creation across mobile and web applications.

---

## 🎯 Workspace Objective: Smart AI Figma Designer & Creator

This repository is **NOT** a customer-facing software application, a fintech product, or an automated testing system. It is your personal **Smart AI Figma Designer & Creator**.

- **Actual Figma Design Creation**: The primary output is real, editable Figma frames, Auto Layout hierarchies, text layers, vector assets, master components, variants, and design tokens in live Figma files.
- **The User is the Sole Review & Approval Authority**: Automated scripts never approve designs on your behalf. The AI agent creates, presents the work with direct file links and visual previews, incorporates your feedback, and waits for your explicit approval.
- **Zero Manual Work for You**: As a Figma beginner, you do not need to manually draw frames, fiddle with Auto Layout, build components, connect prototypes, or organize pages. Antigravity executes these operations autonomously through verified MCP tools and scripts.
- **Multi-Project Isolation**: A single workspace capable of managing multiple independent mobile and web projects (`projects/<projectName>/`) with complete separation of assets, requirements, tokens, and Figma files.
- **$0 Budget Policy**: Strictly zero paid API subscriptions, zero free trial sign-ups, and zero consumption of paid Figma AI credits (`generate_image` is strictly prohibited). All assets are generated via Antigravity's free cloud subagent and imported directly into Figma via MCP `upload_assets`.

---

## 🔒 Strict Git Policy — SINGLE MAIN BRANCH ONLY

This workspace operates strictly on a **single branch**:

- **Use ONLY `main`**: All work, configurations, documentation, and assets are committed directly to `main`.
- **Zero Extra Branches**: Never create feature branches (`feat/*`), development branches (`dev`), fix branches, or PR branches.
- **No Branch Switching**: Work trees remain clean and stable without Git-flow complexity.
- **Preserve All Work**: Always verify `git status` before committing. Never force-push or overwrite uncommitted changes.

---

## 🏗️ Repository Architecture

```text
Figma/
├── README.md                      # Workspace documentation & creator guide
├── AGENTS.md                      # AI agent operating instructions & production rules
├── FIGMA_AGENT_RULES.md           # Guardrails, platform ergonomics, and git constraints
├── FIGMA_LEARNING_GUIDE.md        # Educational curriculum: QA to Product Design mastery
├── FIGMA_QA_CHECKLIST.md          # Designer pre-review quality reference checklist
├── FIGMA_TOOLKIT.md               # Quick-reference locator for Figma features & shortcuts
├── FIGMA_WORKFLOW.md              # The canonical creator workflow & lifecycle states
├── package.json                   # Workspace scripts & dependencies
├── pnpm-lock.yaml                 # Lockfile for reproducible builds
│
├── docs/                          # Architecture specifications & verification logs
│   ├── APPROVAL_WORKFLOW.md       # User review & approval lifecycle specification
│   ├── TOOL_VERIFICATION.md       # Honest tool verification & MCP audit log
│   ├── WORKSPACE_ARCHITECTURE.md  # Multi-project directory isolation rules
│   └── WORKSPACE_AUDIT.md         # Workspace health audit log
│
├── .agents/skills/                # Modular design, architecture & Figma skills
│   ├── figma-design-agent/        # Master coordinator skill
│   ├── figma-auto-layout/         # Auto Layout flexbox mastery
│   ├── figma-components/          # Variant sets and component properties
│   ├── figma-design-systems/      # Variables, tokens, and color themes
│   ├── figma-accessibility/       # WCAG 2.1 AA audit protocols
│   ├── mobile-ui-design/          # Safe areas, thumb zones, viewports
│   ├── figma-research/            # Competitor benchmarking & UX heuristics
│   ├── figma-prototyping/         # Interactive connections & Smart Animate
│   ├── figma-tool-guide/          # Exact Figma UI paths & shortcuts
│   ├── figma-design-qa/           # Pre-flight designer craft checklist
│   └── design-to-code/            # Developer handoff & token export
│
├── tools/                         # Project-agnostic creator utilities
│   ├── common/                    # Safe project-path resolver & lifecycle manager
│   ├── asset-generation/          # Free AI image generation helpers (strict licensing)
│   ├── asset-optimization/        # Safe SVGO + Sharp scaler (non-destructive)
│   ├── figma-integration/         # Figma URL parser & token export formatters
│   └── technical-validation/      # Architecture syntax & token contrast calculators
│
├── templates/                     # Neutral scaffolding blueprints for new projects
│   ├── mobile-app/                # Mobile container hierarchies & safe areas
│   ├── web-app/                   # Responsive 12-column grid breakpoints
│   ├── design-system/             # Design token JSON schema (W3C format)
│   ├── asset-library/             # Asset manifest & tracking templates
│   ├── project-documentation/     # PRD & Screen Architecture templates
│   └── development-handoff/       # Developer specs & tokens handoff
│
├── projects/                      # Independent project workspaces
│   ├── PROJECT_TEMPLATE/          # Neutral golden blueprint cloned by ./scripts/new-project
│   └── fintech-mobile-app/        # Existing project (Status: ON_HOLD)
│
└── scripts/                       # Executable CLI tools
    ├── new-project                # Platform-aware safe project initializer
    ├── validate-project           # Structure & config validator
    ├── validate-assets            # Asset size & manifest auditor
    ├── audit-architecture         # Screen inventory & navigation validator
    ├── verify-figma-mcp           # Non-fabricating Figma MCP status auditor
    └── generate-project-report    # Authoritative lifecycle status report
```

---

## ⚡ The Creator Workflow Sequence

```text
Research → Architecture → Design → Figma Implementation → User Review → User Feedback → Revision → User Approval
```

### The 9 Authoritative Project Lifecycle States

1. **`DISCOVERING`**: Identifying product objectives, target users, and functional stories.
2. **`RESEARCHING`**: Benchmarking market leaders, UX heuristics, and platform conventions.
3. **`READY_FOR_DESIGN`**: Screen inventory, flows, and design tokens established; ready for canvas work.
4. **`DESIGN_IN_PROGRESS`**: Actively constructing native Figma frames, components, and variables.
5. **`AWAITING_USER_REVIEW`**: Completed designs presented to the user with links, screenshots, and rationales.
6. **`REVISION_REQUESTED`**: Modifying canvas based on specific user feedback and critiques.
7. **`USER_APPROVED`**: Explicit sign-off received from the user.
8. **`ON_HOLD`**: Work paused; no canvas or asset operations permitted without explicit instruction.
9. **`BLOCKED`**: Dependency or technical access barrier preventing progress.

---

## 🚀 Quickstart Guide

### 1. Installation

```bash
git clone https://github.com/rik9922/Figma.git
cd Figma
pnpm install
```

### 2. Scaffold a New Project

```bash
# Mobile iOS Project:
./scripts/new-project my-app ios swiftui

# Mobile Android Project:
./scripts/new-project my-app android compose

# Responsive Web Project:
./scripts/new-project my-web web react
```

### 3. Interact with Antigravity

In the chat, use natural language:

- **"Start a new project named health-fitness"**: Initializes an isolated workspace.
- **"Continue project health-fitness"**: Restores project state and next action items.
- **"Research this project"**: Benchmarks competitors and maps user personas.
- **"Create the screen architecture"**: Defines screen inventory, user journeys, and navigation matrix.
- **"Create the Figma design"**: Constructs native editable frames, Auto Layout, and components in Figma.
- **"Present design for review"**: Shows you the frames, screenshots, and design rationales for your review.

---

## 🛠️ CLI Tooling & Technical Diagnostics

| Command                                                    | Purpose                                                                     |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| `./scripts/new-project <name> [platform] [framework]`      | Scaffolds an isolated project from the neutral template                     |
| `./scripts/validate-project <name>`                        | Validates directory structure, config JSON, and lifecycle state             |
| `./scripts/validate-assets <name>`                         | Verifies asset formats, file sizes (< 10MB), and manifest records           |
| `./scripts/audit-architecture <name>`                      | Verifies screen IDs, navigation matrix, flows, and edge states              |
| `pnpm run audit:contrast <name>`                           | Mathematically evaluates color token contrast ratios (WCAG 2.1 AA)          |
| `./scripts/verify-figma-mcp <name>`                        | Reports honest Figma MCP connection status, registered tools, and file link |
| `./scripts/generate-project-report <name>`                 | Displays authoritative lifecycle state, inventories, and history            |
| `pnpm run optimize <svg\|raster\|scales> <input> <output>` | Safe SVGO optimization or Sharp mobile `@1x/@2x/@3x` generation             |

---

## 🔒 Security & Workspace Principles

- **Main Branch Exclusively**: Never create separate git branches; keep history linear and clean.
- **Zero Credentials in Git**: All tokens and secrets are strictly ignored in `.gitignore`.
- **Zero Paid AI Credits**: Images are generated using free cloud engines in Antigravity, and uploaded to Figma via the free `upload_assets` MCP tool.
- **Project Isolation**: Assets, branding, and Figma file keys are never shared between projects.
- **Human Approval Authority**: The human user is the sole design reviewer and approval authority.

---

## 📄 License

This project is licensed under the ISC License.
