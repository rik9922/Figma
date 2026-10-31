---
name: figma-tool-guide
description: Complete Figma Tool Locator System. Answers "where is this in Figma?", providing exact navigation steps, right-panel sections, keyboard shortcuts, property controls, and practical examples for every Figma feature.
---

# Figma Tool Locator & Navigation Guide

When locating features and properties in the Figma interface, reference this exact location map:

---

## 1. Where is Auto Layout?

- **Exact UI Location**: Right Sidebar → **Design** tab → **Auto Layout** section (third section down).
- **Navigation Steps**: Select any frame or multiple layers → Look at the right panel → Click the `+` icon on the Auto layout header.
- **Keyboard Shortcut**: `Shift + A` (Add Auto Layout) | `Option + Shift + A` (Remove).
- **Controls Available**: Direction arrows (Vertical `↓`, Horizontal `→`, Wrap `↩`), Item spacing (gap), Horizontal/Vertical padding, 9-point alignment grid.
- **When to Use**: Whenever grouping 2 or more elements that should reflow automatically when content changes.

---

## 2. How Do I Create a Component?

- **Exact UI Location**: Top Toolbar (Center) OR Right Sidebar.
- **Navigation Steps**: Select the frame/layer → Click the four-diamond icon in the top toolbar.
- **Keyboard Shortcut**: `Cmd + Option + K` (macOS).
- **Properties Panel**: The layer turns purple with a `❖` icon in the left Layers panel. The Right Panel gains a **Component** properties section.
- **When to Use**: Any repeated button, card, input, header, or icon.

---

## 3. How Do I Create Variants?

- **Exact UI Location**: Right Sidebar → Component section.
- **Navigation Steps**:
  1. Select a Master Component (`❖`).
  2. Look at the Right Panel → Under the component header, click the **`+ Add variant`** button (or click the diamond with `+` in the top toolbar).
  3. A dashed purple container (`Component Set`) appears around the component with a new variant instance.
- **When to Use**: Grouping different states of the same button (Primary, Secondary, Pressed, Disabled).

---

## 4. Where are Variables?

- **Exact UI Location**: Right Sidebar (when **nothing** is selected on the canvas).
- **Navigation Steps**:
  1. Click on the gray canvas background (deselect all objects with `Esc`).
  2. Look at the Right Panel → Find the **Local variables** section.
  3. Click the open-book / sliders icon next to "Local variables".
  4. The Variables modal opens showing Collections, Modes, and token types (Color, Number, String, Boolean).
- **When to Use**: Creating semantic design tokens for colors, spacing, and dark mode theming.

---

## 5. How Do I Configure Constraints?

- **Exact UI Location**: Right Sidebar → **Constraints** section.
- **Navigation Steps**: Select a child layer inside a regular Frame (note: Auto Layout replaces traditional constraints with Hug/Fill/Fixed). Look at the right panel under Frame dimensions.
- **Controls**: Pinning grid (Left, Right, Center, Left & Right, Scale; Top, Bottom, Center, Top & Bottom, Scale).
- **When to Use**: Non-Auto Layout artboards where elements need to pin to screen edges.

---

## 6. How Do I Create a Prototype Interaction?

- **Exact UI Location**: Top Right Sidebar → **Prototype** tab.
- **Navigation Steps**:
  1. Click **Prototype** tab at the top of the right sidebar (or press `Shift + E`).
  2. Select the button or card.
  3. Hover over its boundary until a small blue circle with `+` appears.
  4. Click and drag the blue wire to the target screen.
  5. The **Interaction details** popup opens. Configure Trigger (`On tap`) and Action (`Navigate to`).
- **When to Use**: Making interactive click-through user flows.

---

## 7. How Do I Change Text Properties?

- **Exact UI Location**: Right Sidebar → **Text** section.
- **Navigation Steps**: Select a text layer (`T`) → Inspect the Text section in the right panel.
- **Controls**:
  - Font Family dropdown (e.g. SF Pro, Inter).
  - Font Weight dropdown (Regular, Medium, SemiBold, Bold).
  - Font Size (e.g. 16, 24).
  - Line Height (e.g. 24px or 140%).
  - Letter Spacing (tracking).
  - Text Auto-Resize: Auto Width (`|←→|`), Auto Height (`|↕|`), or Fixed Size (`[ ]`).
  - Advanced Typography (click the 3 dots `...`): Case, decorations, paragraph spacing.

---

## 8. How Do I Create Reusable Navigation?

- **Exact UI Location**: Bottom or Top of the mobile screen frame.
- **Navigation Steps**:
  1. Create a frame for the Tab Bar (`393 × 49 pt` for content + `34 pt` safe area = `83 pt` total height).
  2. Add Auto Layout (`Shift + A`, Horizontal `→`).
  3. Add Tab items, setting each item to **`FILL`** horizontally so they space evenly.
  4. Turn the entire Tab Bar into a Component (`Cmd + Option + K`).
- **When to Use**: Universal bottom navigation bar across all main screens.

---

## 9. How Do I Create Responsive Mobile Layouts?

- **Exact UI Location**: Right Sidebar → Auto Layout resizing options.
- **Navigation Steps**:
  1. Parent screen frame: Width = `FIXED` (393px).
  2. All nested cards/forms: Width = **`FILL`**.
  3. Card contents: Width = **`FILL`**; Text layers set to Auto-Height (`|↕|`).
  4. Now when you resize the parent screen frame from 375px to 430px, every card stretches proportionally without breaking!

---

## 10. How Do I Export Assets?

- **Exact UI Location**: Right Sidebar → Bottom-most section (**Export**).
- **Navigation Steps**:
  1. Select the icon, frame, or image you want to export.
  2. Scroll to the very bottom of the Right Panel.
  3. Click the `+` on the **Export** header.
  4. Choose format: `PNG`, `JPG`, `SVG`, or `PDF`.
  5. Choose scale: `1x`, `2x`, `3x`.
  6. Click **Export [Layer Name]**.
