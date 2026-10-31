# Beginner Figma & Mobile UI/UX Learning Reference

This reference is your companion manual while designing with your AI Agent in Figma. It is designed to bridge your manual and automation QA background directly into product design and Figma mastery.

---

## Module 1: Figma Interface & Navigation

Figma's workspace is organized into four distinct functional zones:

```
+-----------------------------------------------------------------------------------+
| Top Toolbar: Tools (Frame, Shapes, Pen, Text), Assets, Comments, Share, Play     |
+---------------------+---------------------------------------+---------------------+
| Left Sidebar        | Canvas (Infinite Workspace)           | Right Sidebar       |
|                     |                                       |                     |
| 1. Layers Panel     | Zoom: Z or Cmd + Scroll               | Context-Sensitive:  |
| 2. Assets Panel     | Pan: Spacebar + Drag                  | - Design Tab        |
| 3. Pages Panel      | Select: V                             | - Prototype Tab     |
|                     | Measure Distances: Hold Option (Alt)  | - Export Options    |
+---------------------+---------------------------------------+---------------------+
```

### Essential Keyboard Shortcuts (macOS)

| Action                   | Shortcut                     | Why It Matters                                           |
| :----------------------- | :--------------------------- | :------------------------------------------------------- |
| **Move Tool**            | `V`                          | Default selection pointer                                |
| **Frame Tool**           | `F`                          | Create artboards and screen containers                   |
| **Text Tool**            | `T`                          | Add text layers                                          |
| **Auto Layout**          | `Shift + A`                  | Convert selection to dynamic flexbox container           |
| **Remove Auto Layout**   | `Option + Shift + A`         | Detach Auto Layout                                       |
| **Create Component**     | `Cmd + Option + K`           | Convert selection into reusable Master Component         |
| **Detach Instance**      | `Cmd + Option + B`           | Unlink an instance from its component                    |
| **Inspect Distances**    | Hold `Option` while hovering | View pixel measurements between objects (crucial for QA) |
| **Deep Select**          | `Cmd + Click`                | Directly select a nested child layer inside frames       |
| **Duplicate Object**     | `Option + Drag` or `Cmd + D` | Quick duplicate and smart repeat                         |
| **Toggle UI Visibility** | `Cmd + \`                    | Hide panels to see clean full canvas                     |

---

## Module 2: Frames vs. Groups (The Fundamental Architectural Rule)

| Feature                      | Group (`Cmd + G`) ⚠️                                                           | Frame (`F` or `Cmd + Option + G`) ✅                            |
| :--------------------------- | :----------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| **Definition**               | A simple wrapper around items                                                  | An independent container with its own bounds                    |
| **Resizing Behavior**        | Stretches, skews, and distorts contents                                        | Preserves child constraints & Auto Layout rules                 |
| **Background Fill & Stroke** | Cannot have fills or strokes directly                                          | Can have fills, strokes, corner radius, clipping                |
| **Auto Layout Support**      | No                                                                             | Full support (Flexbox equivalent)                               |
| **Clipping Content**         | No                                                                             | Yes (`Clip content` checkbox in right panel)                    |
| **Best Practice Rule**       | **Never use Groups for UI layouts.** Use Groups only for vector illustrations. | **Always use Frames for screens, cards, bars, and components.** |

---

## Module 3: Auto Layout (The Heart of Modern UI Design)

Auto Layout turns static drawing layers into dynamic, responsive web/mobile flexbox containers. When text changes or buttons expand, Auto Layout handles spacing automatically.

### Key Auto Layout Properties (Right Panel)

1. **Direction**:
   - Vertical (`↓`): Stacks items in a column (e.g., forms, lists).
   - Horizontal (`→`): Stacks items in a row (e.g., buttons with icons, navbars).
   - Wrap (`↩`): Wraps elements onto the next line (e.g., tags, chips).
2. **Padding**:
   - Internal space between container boundary and its contents.
   - Set individual values: Top, Right, Bottom, Left.
3. **Item Spacing (Gap)**:
   - Distance between consecutive child items.
4. **Resizing Modes (Child vs Parent)**:
   - **`FIXED`**: Exact pixel width/height (e.g., 375px width screen, 48px height button).
   - **`HUG`**: Shrink-wraps tightly around its children.
   - **`FILL`**: Expands to take up all remaining available parent space (equivalent to `flex: 1` or `width: 100%`).
5. **Alignment Grid**:
   - 9-point grid controlling where children sit inside the container (Top-Left, Center, Space-Between, etc.).

---

## Module 4: Components, Variants, & Component Properties

Components are Figma's building blocks, analogous to classes and instances in object-oriented code.

### The Hierarchy

- **Main / Master Component** (`❖` icon in purple): The single source of truth. Edits made here propagate everywhere.
- **Instance** (`◇` icon in purple): A reusable copy of the main component. Inherits changes from the main component but allows text, color, and icon overrides.
- **Component Set / Variants**: A collection of variations of the same component grouped together (e.g., `Button` with variants: `Style = Primary | Secondary | Danger`, `State = Default | Hover | Pressed | Disabled`, `Size = Small | Medium | Large`).

### Modern Component Properties (Right Panel → Component Section)

1. **Variant**: Switches between visual configurations.
2. **Boolean Property**: Toggles visibility on/off (e.g., `hasLeadingIcon: true/false`).
3. **Text Property**: Exposes an editable text label in the right panel without having to double-click into layers.
4. **Instance Swap Property**: Allows swapping nested icons or sub-components with a single dropdown picker.

---

## Module 5: Typography, Color Tokens, & Variables

### The 8-Point Spatial Grid

In mobile design, almost every measurement should be a multiple of **8** (or 4 for fine micro-spacing):

- Spacing: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.
- Why? Screens on modern devices have varying pixel densities (@1x, @2x, @3x). Multiples of 8 scale cleanly across all screens without rendering half-pixel blurriness.

### Typographic Hierarchy (Mobile Standard)

| Role                      | Recommended Size | Weight         | Line Height | Mobile Use Case                 |
| :------------------------ | :--------------- | :------------- | :---------- | :------------------------------ |
| **Large Title / Display** | 32–34 pt         | Bold (700)     | 40 pt       | Screen Header / Hero numbers    |
| **Title 1 / Headline**    | 22–24 pt         | SemiBold (600) | 28 pt       | Card headers, Modal titles      |
| **Title 2 / Subhead**     | 18–20 pt         | SemiBold (600) | 24 pt       | Section headers                 |
| **Body (Default)**        | 16 pt            | Regular (400)  | 22 pt       | Primary readable content        |
| **Body Medium**           | 14 pt            | Medium (500)   | 20 pt       | Secondary descriptions, forms   |
| **Caption / Footnote**    | 12 pt            | Regular (400)  | 16 pt       | Timestamps, helper text, badges |

---

## Module 6: Variables & Design Tokens

Figma Variables live in the **Local Variables** modal (click background canvas → right panel → _Local variables_).

### Variable Types

1. **Color**: Defines semantic palettes (`color/primary`, `color/background/page`, `color/text/muted`). Supports **Modes** (e.g., Light Mode vs Dark Mode switching with 1 click).
2. **Number**: Spacing units, corner radiuses (`radius/sm = 4px`, `radius/md = 8px`, `radius/pill = 999px`).
3. **String**: Reusable text strings and localized copy.
4. **Boolean**: Feature flag visibility controllers.

---

## Module 7: Mobile Prototyping

Transform static screens into functional click-through apps for usability testing:

1. **Switch to Prototype Tab**: Click **Prototype** in the top of the right sidebar (shortcut: `Shift + E`).
2. **Create Connection**: Select a button or layer → hover over its edge → drag the blue circular handle `+` to the destination screen.
3. **Trigger**:
   - `On Tap` (Standard mobile tap)
   - `On Drag` (Swipe gestures)
   - `While Pressing` (Tactile feedback)
4. **Action**:
   - `Navigate To`: Moves to the destination screen.
   - `Open Overlay`: Displays a modal dialog, bottom sheet, or dropdown on top of the current screen.
5. **Animation**:
   - `Instant`: Immediate cut.
   - `Slide In / Push`: Standard mobile navigation transition (left-to-right push).
   - `Smart Animate`: Figma automatically tracks layers with matching names and smoothly morphs their size, position, and opacity.

---

## Module 8: Mobile UI/UX Fundamentals

### Screen Canvas Dimensions

- **iOS Standard (iPhone 16 / 15 / 14 Pro)**: **393 × 852 pt**
- **Android Standard**: **360 × 800 dp** or **412 × 915 dp** (Pixel 8)

### Safe Area Insets (Crucial for Mobile QA)

Mobile phones have hardware camera notches, Dynamic Islands, and software home swipe bars:

- **Top Safe Area**: Reserve **54–59 pt** for the iOS Status Bar (clock, Wi-Fi, battery).
- **Bottom Safe Area**: Reserve **34 pt** for the iOS Home Indicator swipe bar.
- **Interactive Thumb Zone**: Keep high-priority interactive elements (primary action buttons, tab bars) in the lower half of the screen where one-handed thumb reach is natural.

---

## Module 9: iOS (Human Interface Guidelines) vs. Android (Material Design 3)

| Dimension                | Apple iOS (HIG)                                         | Google Android (Material 3)                             |
| :----------------------- | :------------------------------------------------------ | :------------------------------------------------------ |
| **System Font**          | SF Pro                                                  | Roboto / Google Sans                                    |
| **Minimum Touch Target** | **44 × 44 pt**                                          | **48 × 48 dp**                                          |
| **Bottom Navigation**    | **Tab Bar** (icons + small text, fixed)                 | **Navigation Bar** (pill indicators, animated)          |
| **Top Navigation**       | **Navigation Bar** (Title centered or large left title) | **Top App Bar** (Action icons, hamburger or back arrow) |
| **Primary Action**       | Fixed bottom button bar or top-right navbar action      | **Floating Action Button (FAB)** bottom-right           |
| **Corner Radius Style**  | Continuous smooth "squircle" rounded corners            | Dynamic rounded corners (small, medium, large, full)    |
| **Haptic & Feedback**    | Subtle iOS haptics, spring animations                   | Ripple effects, expressive easing                       |

---

## Module 10: Design QA Inspection Protocol

As a QA professional, apply these automated and manual verification heuristics before any design review:

```markdown
### 📋 Design QA Checklist

1. [ ] **Screen Dimensions**: Verified standard mobile dimensions (e.g. 393×852).
2. [ ] **Safe Areas**: Status bar (top) and home indicator (bottom) respected.
3. [ ] **Touch Targets**: All tappable icons and buttons have at least 44×44 pt bounding boxes.
4. [ ] **Auto Layout Constraints**: All containers resize smoothly without overlapping when text grows.
5. [ ] **8pt Spatial Rhythm**: Margin and padding values conform strictly to 4/8/16/24/32px.
6. [ ] **Contrast Validation**: Minimum 4.5:1 ratio verified using WCAG tools.
7. [ ] **Edge Case States Provided**:
   - Normal / Happy path
   - Loading skeleton / Spinner
   - Empty state with illustration & call to action
   - Error state with clear inline message and retry button
```

---

## Module 11: Developer Handoff

When designs are ready for iOS (SwiftUI), Android (Jetpack Compose), or React Native developers:

1. **Dev Mode**: Press `Shift + D` in Figma to switch from Design Mode to Dev Mode.
2. **Inspect Code**: Developers can click any layer to inspect CSS, Swift, or Compose layout code.
3. **Code Connect**: Directly links Figma components to the exact GitHub/code repository component.
4. **Asset Export**: Mark icons as SVG / PDF vector exports so engineers can download them in 1 click.
