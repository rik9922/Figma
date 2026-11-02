# Motion & Physics Specifications: Crust & Q

This document provides mathematical easing curves, duration parameters, and implementation guidance for Crust & Q.

---

## 1. Global Motion Curves & Physics Tokens

| Token Name | Curve / Physics Parameters | Description | Recommended Usage |
| :--- | :--- | :--- | :--- |
| `motion.ease.entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | Swift entrance with rapid deceleration | Screen push, modal slide-in |
| `motion.ease.exit` | `cubic-bezier(0.7, 0, 0.84, 0)` | Rapid departure | Dismissing sheets, pop navigation |
| `motion.spring.sheet` | `Spring(mass: 1.0, stiffness: 220, damping: 24)` | High-damping organic spring | Bottom sheets (`LOC-01`, `CART-01`) |
| `motion.spring.bouncy` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic overshoot | Success checkmarks (`ORDER-SUCC-01`) |
| `motion.duration.fast` | `150ms` | Instant visual response | Button pressed states, toggles |
| `motion.duration.normal` | `300ms` | Standard screen transitions | Push navigation, sheet reveal |
| `motion.duration.deliberate`| `450ms` | High-impact moments | Order celebration, brand reveal |

---

## 2. Key Animation Specifications

### Spec: `MOT-02` (Address Bottom Sheet Presentation)
- **Trigger**: User taps location header on `HOME-01`.
- **Initial State**: Sheet translateY `+100%` (below viewport). Scrim opacity `0%`.
- **Final State**: Sheet translateY `0%` (resting in viewport). Scrim opacity `50%`.
- **Duration**: `300ms`
- **Physics**: Spring `(mass: 1.0, stiffness: 220, damping: 24)`
- **Figma Representation**: Open Overlay → Bottom Sheet (`Move In from Bottom`, 300ms).

### Spec: `MOT-04` (15s Radial Dispatch Countdown)
- **Trigger**: Dispatch event received in `DRV-REQ-01`.
- **Initial State**: Stroke offset `0` (full 15s red ring).
- **Final State**: Stroke offset `289` (depleted ring at 0s).
- **Duration**: `15000ms` linear.
- **Reduced Motion**: Static ring with numerical text decrement ("12s", "11s"...).

### Spec: `MOT-05` (Order Success Celebration)
- **Trigger**: User taps "Pay & Place Order" on `CHECK-01`.
- **Initial State**: Green crest scale `0.4`, opacity `0.0`.
- **Final State**: Green crest scale `1.0`, opacity `1.0`.
- **Duration**: `450ms`
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)` (elastic overshoot).
