---
name: mobile-ui-design
description: Guides the structural creation of mobile applications in Figma. Covers standard mobile viewports, safe area insets (Status Bar, Home Indicator), thumb zones, mobile navigation patterns, and native mobile container hierarchies.
---

# Mobile UI Design Guidelines

## 1. Standard Mobile Viewport Dimensions

Always use current standard production mobile viewports:

- **iOS Standard (Default)**: **393 × 852 pt** (iPhone 16 / 15 / 14 Pro).
- **iOS Max**: **430 × 932 pt** (iPhone 16 Pro Max / Plus).
- **Android Standard**: **412 × 915 dp** (Google Pixel 8) or **360 × 800 dp**.

## 2. Hardware Safe Area Insets (Critical for QA)

Modern smartphones have edge-to-edge displays with camera notches/islands and software navigation bars:

- **iOS Top Inset**: Reserve **54 pt** for the Dynamic Island / Status Bar (Clock left, Wi-Fi & Battery right).
- **iOS Bottom Inset**: Reserve **34 pt** for the Home Indicator swipe bar.
- **Android Top Inset**: Reserve **40–48 dp** for the Status Bar.
- **Android Bottom Inset**: Reserve **24–48 dp** for system gesture navigation.

_Rule: Never place tappable buttons or inputs inside safe area insets! Content scrolls under them with translucent blur, but actionable controls must sit inside the safe zone._

## 3. Ergonomic Thumb Zones

- **Natural Zone (Bottom 40%)**: Tab bars, primary CTA buttons ("Continue", "Submit"), bottom sheets. Easy for one-handed thumb interaction.
- **Stretch Zone (Middle 35%)**: Scrollable feed items, cards, input fields.
- **Hard Reach Zone (Top 25%)**: Back buttons, titles, search bars, profile icons. Keep high-frequency taps out of this zone when possible.

## 4. Mobile Container Architecture in Figma

Every mobile screen must follow this layer hierarchy:

```
[FRAME: Screen_Name] (393x852 pt, Clip content: ON)
  ├── [FRAME: Top_Safe_Area] (393x54 pt, FIXED)
  ├── [FRAME: Navigation_Bar] (393x44 pt, FIXED or HUG)
  ├── [FRAME: Scrollable_Content] (393xFILL, Auto Layout Vertical, overflow scroll)
  │     ├── Hero / Title Section
  │     ├── Form Inputs Section
  │     └── Helper Links Section
  ├── [FRAME: Bottom_Action_Bar] (393xHUG, Auto Layout Vertical, padding: 16px)
  └── [FRAME: Bottom_Safe_Area] (393x34 pt, FIXED)
```
