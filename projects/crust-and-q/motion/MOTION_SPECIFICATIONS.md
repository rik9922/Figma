# Motion & Physics Specifications: crust-and-q

This document provides mathematical easing curves, duration parameters, and implementation guidance for `crust-and-q`.

---

## 1. Global Motion Curves & Physics Tokens

| Token Name                   | Curve / Physics Parameters                       | Description                            | Recommended Usage                 |
| ---------------------------- | ------------------------------------------------ | -------------------------------------- | --------------------------------- |
| `motion.ease.entrance`       | `cubic-bezier(0.16, 1, 0.3, 1)`                  | Swift entrance with rapid deceleration | Hero entrance, screen push        |
| `motion.ease.exit`           | `cubic-bezier(0.7, 0, 0.84, 0)`                  | Rapid departure                        | Dismissing sheets, pop navigation |
| `motion.spring.sheet`        | `Spring(mass: 1.0, stiffness: 220, damping: 24)` | High-damping organic spring            | Bottom sheets, modal drawers      |
| `motion.spring.bouncy`       | `cubic-bezier(0.34, 1.56, 0.64, 1)`              | Elastic overshoot                      | Success checkmarks, badge pops    |
| `motion.duration.fast`       | `150ms`                                          | Instant visual response                | Button pressed states, toggles    |
| `motion.duration.normal`     | `300ms`                                          | Standard screen transitions            | Push, modal reveal                |
| `motion.duration.deliberate` | `450ms`                                          | High-impact moments                    | Onboarding hero, brand reveals    |

---

## 2. Key Animation Specifications

### Spec: `MOT-01` (Brand Reveal to Hero Transition)

- **Trigger**: Automatic timer completion (`1500ms` after splash mount).
- **Initial State**: Logo centered on canvas, scale `1.0`. Hero artwork opacity `0.0`, translateY `+20px`.
- **Final State**: Logo positioned in header bar, scale `0.75`. Hero artwork opacity `1.0`, translateY `0px`.
- **Duration**: `450ms`
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **Figma Representation**: Smart Animate (`Ease-out`, 450ms) between `ONB-01` and `ONB-02`.
- **Reduced Motion**: Logo transitions instantly; text and hero graphic cross-fade over `200ms`.

### Spec: `MOT-03` (Action Modal Presentation)

- **Trigger**: User taps primary action button on `MAIN-01`.
- **Initial State**: Modal translateY `+100%` (below viewport). Scrim opacity `0%`.
- **Final State**: Modal translateY `0%` (resting in viewport). Scrim opacity `40%`.
- **Duration**: `300ms`
- **Physics**: Spring `(mass: 1.0, stiffness: 220, damping: 24)`
- **Figma Representation**: Open Overlay → Bottom Sheet / Modal Dialog (`Move In from Bottom`, 300ms).
- **Reduced Motion**: Instant modal appearance with 150ms opacity fade.

### Spec: `MOT-04` (Action Confirmation & Success)

- **Trigger**: User confirms primary action on `ACT-02`.
- **Initial State**: Loading spinner active. Success icon invisible.
- **Final State**: Spinner resolves into success checkmark with subtle elastic overshoot.
- **Duration**: `450ms`
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Reduced Motion**: Static checkmark with 150ms cross-fade.
