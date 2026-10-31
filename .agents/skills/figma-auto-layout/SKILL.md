---
name: figma-auto-layout
description: Master Auto Layout in Figma. Covers direction (vertical, horizontal, wrap), padding, spacing (gap), child resizing modes (HUG, FILL, FIXED), alignment grids, and responsive mobile flexbox behavior.
---

# Figma Auto Layout Mastery

Auto Layout (`Shift + A`) is the single most important layout feature in Figma. It replicates CSS Flexbox and ensures designs respond dynamically when content or screen size changes.

## 1. The 3 Core Directions

- **Vertical (`↓`)**: Stacks elements on top of each other. Used for forms, screen layouts, cards, and feeds.
- **Horizontal (`→`)**: Places elements side by side. Used for buttons with icons, navigation bars, headers, and tabs.
- **Wrap (`↩`)**: Automatically wraps child items onto a new line when they run out of width. Used for tag clouds, interest chips, and multi-row filters.

## 2. Resizing Modes (Child vs Parent Relationship)

Every layer inside an Auto Layout container has a horizontal and vertical resizing behavior:

| Mode        | What It Does                                      | Common Mobile Use Case                              |
| :---------- | :------------------------------------------------ | :-------------------------------------------------- |
| **`HUG`**   | Container shrink-wraps tightly to fit its content | Buttons (width hugs text + padding), pill badges    |
| **`FILL`**  | Container expands to fill 100% of available space | Full-width mobile buttons, card widths, text labels |
| **`FIXED`** | Container maintains an exact pixel dimension      | Screen frames (393px), avatar circles (44x44px)     |

_Golden Rule for Mobile Screens_:
The top-level screen frame is `FIXED` (393px width).
All full-width sections and cards inside the screen MUST be set to **`FILL`** horizontally!

## 3. Padding & Spacing (8pt Spatial Grid)

- **Item Spacing (Gap)**: The distance between consecutive items.
- **Padding**: The internal breathing room around all children.
  - Set individual values: Top, Right, Bottom, Left (e.g. 16px horizontal, 24px vertical).
- Adhere strictly to the **8pt grid**: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`.

## 4. 9-Point Alignment Grid

Located in the right panel inside the Auto Layout section.

- **Top-Left**: Default for form content.
- **Center**: Standard for buttons, centered hero headers, and modals.
- **Space Between**: Set spacing to `Auto` to push elements to opposite edges (e.g., Back button on the left, Profile avatar on the right).

## 5. Absolute Positioning inside Auto Layout

Need a notification badge floating on the top-right corner of an icon inside an Auto Layout navbar?

- Select the badge layer inside the Auto Layout container.
- In the Right Panel (top of Frame section), click the **Absolute position** icon (`[+]`).
- The badge can now be freely positioned anywhere while preserving Auto Layout for the rest of the elements.
