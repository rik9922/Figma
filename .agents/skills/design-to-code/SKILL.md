---
name: design-to-code
description: Guides the translation of Figma mobile designs into production code (SwiftUI, Jetpack Compose, React Native/HTML), Dev Mode inspection, asset export optimization with SVGO, and multi-scale image generation.
---

# Design-to-Code & Developer Handoff

Bridge the gap between Figma design and engineering implementation.

## 1. Dev Mode in Figma

- Shortcut: Press `Shift + D` to toggle **Dev Mode**.
- Click any layer to see exact CSS, iOS SwiftUI, or Android Jetpack Compose snippets.
- Inspect box model dimensions, token bindings, spacing, and font properties directly.

## 2. Asset Export Optimization Pipeline

Exported SVGs and images often contain bloated metadata, comments, and non-standard DPI.
Use the project's local CLI tools:

```bash
# 1. Optimize an exported SVG:
pnpm run optimize

# 2. SVGO CLI directly:
pnpm exec svgo input.svg -o output.svg --multipass

# 3. Generate @1x, @2x, @3x PNGs via sharp:
node ./tools/asset-optimization/optimize.js scales input.png ./output-dir
```

## 3. Platform Code Translation Cheat Sheet

| Figma Property               | iOS SwiftUI                                   | Android Jetpack Compose                      | CSS / React Native                                  |
| :--------------------------- | :-------------------------------------------- | :------------------------------------------- | :-------------------------------------------------- |
| **Auto Layout (Vertical)**   | `VStack(spacing: 16)`                         | `Column(verticalArrangement = ...)`          | `display: flex; flex-direction: column; gap: 16px;` |
| **Auto Layout (Horizontal)** | `HStack(spacing: 8)`                          | `Row(horizontalArrangement = ...)`           | `display: flex; flex-direction: row; gap: 8px;`     |
| **Padding**                  | `.padding(.horizontal, 16)`                   | `Modifier.padding(horizontal = 16.dp)`       | `padding: 0 16px;`                                  |
| **Corner Radius**            | `.cornerRadius(12)`                           | `Modifier.clip(RoundedCornerShape(12.dp))`   | `border-radius: 12px;`                              |
| **Color Token**              | `Color.accentColor`                           | `MaterialTheme.colorScheme.primary`          | `var(--color-action-primary)`                       |
| **Font Style**               | `.font(.system(size: 16, weight: .semibold))` | `style = MaterialTheme.typography.bodyLarge` | `font-size: 16px; font-weight: 600;`                |
