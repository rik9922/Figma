# Motion & Physics Specifications: Fintech Mobile App

This document provides exact mathematical easing curves, duration parameters, and code implementation snippets for engineers building the motion system.

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
| `motion.duration.deliberate` | `450ms`                                          | High-impact branded moments            | Onboarding hero, brand reveals    |

---

## 2. Detailed Animation Specifications

### Spec: `MOT-01` (Brand Reveal to Hero Transition)

- **Trigger**: Automatic timer completion (`1500ms` after splash mount).
- **Initial State**: Logo centered at `(X: 196, Y: 426)`, scale `1.0`. Hero artwork opacity `0.0`, translateY `+24px`.
- **Final State**: Logo positioned in top bar at `(X: 196, Y: 72)`, scale `0.75`. Hero artwork opacity `1.0`, translateY `0px`, scale `1.0`.
- **Duration**: `450ms`
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **Figma Representation**: Smart Animate (`Ease-out`, 450ms) between `ONB-01` and `ONB-02`.
- **Reduced Motion**: Logo transitions instantly; text and hero graphic cross-fade over `200ms` with zero translation.

### Spec: `MOT-03` (Transaction Bottom Sheet Presentation)

- **Trigger**: User taps "Send" pill on `HOME-01`.
- **Initial State**: Bottom sheet translateY `+100%` (below viewport). Background scrim opacity `0%`, blur `0px`.
- **Final State**: Bottom sheet translateY `0%` (resting at `540pt` height). Background scrim opacity `40%`, blur `8px`.
- **Duration**: `300ms`
- **Physics**: Spring `(mass: 1.0, stiffness: 220, damping: 24)`
- **Figma Representation**: Open Overlay → Bottom Sheet → Move In from Bottom (`Ease out`, 300ms).

### Spec: `MOT-04` (Biometric Signature & Celebration)

- **Trigger**: Native iOS LocalAuthentication FaceID success callback.
- **Initial State**: Circular progress track `strokeDashoffset: 100%`. Checkmark invisible.
- **Final State**: Circular track fills `100%` (`250ms`). Morph into green checkmark (`#34C759`) with `1.15` elastic scale overshoot (`200ms`). 8 subtle micro-particles radiate outward `16px` and fade (`100ms`).
- **Total Duration**: `550ms`
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **SwiftUI Reference**:

```swift
withAnimation(.interpolatingSpring(stiffness: 220, damping: 18)) {
    self.isConfirmed = true
}
```
