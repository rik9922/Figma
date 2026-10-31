---
name: figma-prototyping
description: Wires realistic mobile click-through prototypes in Figma. Covers interaction triggers (On Tap, On Drag), actions (Navigate To, Open Overlay, Scroll To), mobile transition curves (Smart Animate, Push, Slide), and overflow scrolling.
---

# Interactive Mobile Prototyping

Transform static Figma screens into functional, tactile mobile prototypes that simulate native iOS and Android user experiences.

## 1. Prototype Mode Navigation

- Shortcut: Press `Shift + E` to toggle between **Design** and **Prototype** tabs.
- Selecting any layer in Prototype mode reveals blue circular attachment handles (`+`).

## 2. Interaction Triggers for Mobile

- **`On Tap`**: Default trigger for buttons, list rows, and tabs.
- **`On Drag`**: Used for bottom sheet dismissal, swipeable carousel cards, and slider handles.
- **`While Pressing`**: Used for button press-down feedback and tactile micro-interactions.
- **`After Delay`**: Used for splash screens, auto-advancing onboarding carousels, or loading spinners transitioning to content (e.g. 1500ms delay).

## 3. Transition Actions & Animations

- **`Navigate To`**: Standard full-screen transition.
  - Animation: `Push` (left-to-right on iOS) or `Slide In`. Duration: `300ms`, Easing: `Ease Out`.
- **`Open Overlay`**: Used for action sheets, modal dialogs, and bottom sheets.
  - Configuration: Position: `Bottom Center` for mobile sheets; check `Close when clicking outside`; check `Add background behind overlay` (40% black).
- **`Smart Animate`**: Figma smoothly morphs size, position, corner radius, and opacity between screens where layer names match identically.

## 4. Mobile Overflow Scrolling

To enable vertical scrolling within a mobile viewport:

1. Wrap scrollable cards/content in a frame.
2. In the Right Panel → Prototype section → **Overflow**: Set to **Vertical**.
3. Keep the Top Navigation Bar and Bottom Action Bar outside the scroll frame, anchored with `Position: Fixed`.
