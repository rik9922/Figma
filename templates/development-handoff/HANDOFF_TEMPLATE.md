# Development Handoff Specification

## 1. Project Reference
- **Figma File**:
- **Design Tokens**: `design-system/TOKENS.json`
- **Target Framework**: [SwiftUI / Jetpack Compose / React Native / Flutter / Web]

## 2. Component Inventory
| Component | Variants | Interactive States | Figma Node | Code Symbol |
|---|---|---|---|---|
| `PrimaryButton` | Solid, Outlined, Ghost | Default, Hover, Pressed, Disabled, Loading | `—` | `<Button />` |
| `InputField` | Default, Error, Success | Idle, Focused, Filled, Disabled, Error | `—` | `<Input />` |

## 3. Spacing & Spatial Rhythm
Strict 8pt/4pt spatial scale:
- `4px`, `8px`, `16px`, `24px`, `32px`, `48px`

## 4. Asset Export Manifest
All raster assets exported at `@1x`, `@2x`, `@3x` or optimized vector SVGs located in `assets/approved/`.
