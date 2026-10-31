---
name: figma-design-systems
description: Sets up design tokens, Figma Variables (Color, Number, String, Boolean), semantic color palettes, light/dark mode collections, typography ramps, and spatial scales.
---

# Design Systems, Variables & Tokens in Figma

A robust design system separates primitive values (e.g. Blue `#007AFF`) from semantic tokens (e.g. `action/primary`), enabling instant theming and dark mode.

## 1. Local Variables vs Styles

- **Styles**: Composite packages (e.g., a Text Style bundles font family, weight, size, and line height).
- **Variables**: Atomic values (single color, single number, single string, single boolean). Variables can be linked to other variables (token aliasing) and support **Modes** (e.g. Light Mode column vs Dark Mode column).

## 2. Setting Up Variable Collections

Organize variables into logical collections:

### A. Primitive Tokens (Raw Values)

- `blue/500 = #007AFF`
- `gray/100 = #F3F4F6`
- `gray/900 = #111827`
- `radius/sm = 4px`, `radius/md = 8px`, `radius/lg = 16px`, `radius/full = 999px`
- `space/8 = 8px`, `space/16 = 16px`, `space/24 = 24px`

### B. Semantic Tokens (Purpose-Driven, Mode-Aware)

| Semantic Token   | Light Mode Value | Dark Mode Value | Scope              |
| :--------------- | :--------------- | :-------------- | :----------------- |
| `surface/page`   | `#FFFFFF`        | `#121212`       | Frame fill         |
| `surface/card`   | `#F8F9FA`        | `#1E1E1E`       | Frame / shape fill |
| `text/primary`   | `#111827`        | `#F9FAFB`       | Text fill          |
| `text/secondary` | `#6B7280`        | `#9CA3AF`       | Text fill          |
| `action/primary` | `blue/500`       | `blue/400`      | Frame / shape fill |
| `border/subtle`  | `#E5E7EB`        | `#2D3748`       | Stroke fill        |

## 3. Typographic Scale (Mobile Standard)

Define reusable text styles in Figma:

- `Display/Large`: 34 pt, Bold, Line Height 41 pt (Hero numbers, large headers)
- `Title/1`: 24 pt, SemiBold, Line Height 28 pt (Screen titles)
- `Headline`: 18 pt, SemiBold, Line Height 24 pt (Card headings)
- `Body/Default`: 16 pt, Regular, Line Height 22 pt (Primary reading copy)
- `Body/Medium`: 14 pt, Medium, Line Height 20 pt (Secondary info, input text)
- `Caption`: 12 pt, Regular, Line Height 16 pt (Timestamps, badges, helper copy)
