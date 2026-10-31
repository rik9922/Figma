# 🎨 Figma Design-to-Code Multi-Project Workspace

[![Figma MCP](https://img.shields.io/badge/Figma-Remote%20MCP-F24E1E?logo=figma&logoColor=white)](https://mcp.figma.com/mcp)
[![Playwright QA](https://img.shields.io/badge/QA-Playwright%20%2B%20axe--core-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-26.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A reusable, AI-powered UI/UX Design-to-Code Workspace designed for **Google Antigravity**, **Figma Remote MCP**, and automated **QA Design Verification**. 

This repository allows you to design, build, test, and ship multiple independent mobile and web applications without reinstalling tools, recreating prompts, or reconfiguring design infrastructure.

---

## 🏗️ Repository Architecture

```text
Figma/
├── README.md                      # Complete workspace documentation & guide
├── AGENTS.md                      # AI agent operating instructions & production rules
├── FIGMA_AGENT_RULES.md           # Figma Auto Layout, component & token constraints
├── FIGMA_LEARNING_GUIDE.md        # Educational design walkthrough curriculum
├── FIGMA_QA_CHECKLIST.md          # 8pt grid, WCAG AA, and touch target checklist
├── FIGMA_TOOLKIT.md               # Quick-reference locator for Figma features
├── FIGMA_WORKFLOW.md              # 10-step design production methodology
├── package.json                   # QA & optimization scripts + dependencies
├── pnpm-lock.yaml                 # Lockfile for reproducible builds
│
├── .agents/skills/                # 14 specialized design & QA skills
│   ├── figma-design-agent/        # Master coordinator skill
│   ├── figma-auto-layout/         # Auto Layout flexbox mastery
│   ├── figma-components/          # Variant sets and component properties
│   ├── figma-design-systems/      # Variables, tokens, and color themes
│   ├── figma-accessibility/       # WCAG 2.1 AA audit protocols
│   ├── mobile-ui-design/          # Safe areas, thumb zones, viewports
│   ├── visual-regression/         # Playwright screenshot comparison
│   └── design-to-code/            # SwiftUI / React Native translation
│
├── tools/                         # Reusable production utilities
│   ├── asset-generation/          # Free AI image generation helpers
│   ├── asset-optimization/        # SVGO + Sharp @1x/@2x/@3x raster scaler
│   ├── figma-integration/         # Figma MCP URL parser & token sync
│   ├── design-validation/         # Playwright + axe-core QA runner
│   └── visual-regression/         # Screenshot diffing harness
│
├── templates/                     # Project scaffolding templates
│   ├── mobile-app/                # iOS & Android semantic frame hierarchy
│   ├── web-app/                   # Responsive 12-column grid breakpoints
│   ├── design-system/             # Design token JSON schema
│   ├── asset-library/             # Manifest & category structure
│   ├── project-documentation/     # PRD & UX benchmark templates
│   └── development-handoff/       # Developer specs & tokens handoff
│
├── projects/                      # Independent project workspaces
│   ├── PROJECT_TEMPLATE/          # Golden template for new projects
│   └── fintech-mobile-app/        # Active iOS digital wallet project
│
└── scripts/                       # Automation CLI tools
    ├── new-project                # Scaffolds an isolated project from template
    ├── validate-project           # Verifies project JSON config & directories
    ├── validate-assets            # Audits asset sizes and manifest records
    └── generate-project-report    # Prints project status & pipeline gates
```

---

## ⚡ The 10-Step Mandatory Production Pipeline

Every project strictly follows this production lifecycle:

```text
1. PROJECT REQUIREMENTS  → Define personas, functional user stories & constraints
2. RESEARCH & UX         → Benchmark mobile leaders (Apple, Duolingo, Linear)
3. AI ASSET GENERATION   → Free cloud image generation (Antigravity Imagen 3)
4. ASSET APPROVAL GATE   → Present preview carousel; wait for user approval
5. APPROVED ASSET IMPORT → SVGO/Sharp optimize + Figma MCP upload_assets
6. FIGMA UI/UX DESIGN    → Build native screens with Auto Layout & Variables
7. FIGMA APPROVAL GATE   → Audit layout & accessibility; user design sign-off
8. CODE IMPLEMENTATION   → Translate to target framework (SwiftUI / RN / Compose)
9. DESIGN-TO-CODE QA     → Compare code screenshots against Figma frames
10. FINAL QA & DELIVERY  → Audit touch targets, WCAG AA contrast & git sync
```

---

## 🚀 Quickstart Guide

### 1. Prerequisites
- **Node.js**: `v20+` or `v26+` (`node -v`)
- **Package Manager**: `pnpm` or `npm`
- **Browsers**: Chromium for Playwright (`npx playwright install chromium`)
- **Figma Account**: Connected via Antigravity Figma Remote MCP (`https://mcp.figma.com/mcp`)

### 2. Installation
```bash
git clone https://github.com/rik9922/Figma.git
cd Figma
pnpm install
```

### 3. Create a New Project
Run the new-project script:
```bash
./scripts/new-project <project-name> [platform] [framework]

# Examples:
./scripts/new-project crypto-wallet iOS SwiftUI
./scripts/new-project ride-sharing Android "React Native"
./scripts/new-project saas-companion Web React
```

### 4. Working with Antigravity
In the Antigravity chat, interact naturally with the agent:
- **To start a new project**: `"Start a new project named e-commerce-app"`
- **To continue an existing project**: `"Continue project fintech-mobile-app"`
- **To run QA on an implemented screen**: `"Run QA audit on projects/fintech-mobile-app/source-code/index.html"`

---

## 🛠️ CLI Commands & Tooling

| Command | Description |
|---|---|
| `./scripts/new-project <name>` | Scaffolds a new project from `PROJECT_TEMPLATE` |
| `./scripts/validate-project <name>` | Validates project structure and `project.config.json` |
| `./scripts/validate-assets <name>` | Verifies asset formats, file sizes, and manifest |
| `./scripts/generate-project-report <name>` | Outputs project status, Figma references, and gate approvals |
| `pnpm run qa <file.html> [ios\|android]` | Runs Playwright accessibility (axe-core) and touch target audit |
| `pnpm run optimize <svg\|raster\|scales> <file>` | Runs SVGO optimization or Sharp mobile `@1x/@2x/@3x` generation |

---

## 🔒 Security & Portability Principles
- **Zero Credentials in Git**: All tokens, OAuth secrets, and personal access tokens are strictly ignored in `.gitignore`.
- **Zero Paid AI Credits**: Images are generated using free cloud engines in Antigravity, and uploaded to Figma via the free `upload_assets` MCP tool without burning paid Figma AI credits.
- **Project Isolation**: Assets, branding, and Figma file keys are never shared between projects unless explicitly authorized.

---

## 📄 License
This project is licensed under the ISC License.

