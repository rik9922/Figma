# Navigation Architecture & View Hierarchy: crust-and-q

## 1. Global Navigation Hierarchy

The application utilizes a standard hierarchical navigation model:

1. **Stack Navigation** (Onboarding & Authentication):
   - Strict linear forward push and backward pop.
   - Standard swipe-to-go-back gesture enabled on sub-screens.
2. **Primary Navigation Hub** (Authenticated Experience):
   - Structured hub with persistent primary navigation (Tab Bar on mobile / Sidebar or Header on web).
   - Core modules accessible directly from the primary navigation.
3. **Modal Sheets & Overlays** (Focused & Transient Actions):
   - Action workflows (`ACT-01`, `ACT-02`) present as contextual sheets or dialogs, preserving user context beneath a dimmed scrim.

---

## 2. Navigation & Dismissal Rules

| Screen ID   | Back Target            | Trigger / Gesture           | Transition Behavior           |
| ----------- | ---------------------- | --------------------------- | ----------------------------- |
| `ONB-01`    | None (Splash)          | Automatic timeout           | Auto-advances to `ONB-02`     |
| `ONB-02`    | None (Root Onboarding) | N/A                         | Root view                     |
| `AUTH-01`   | `ONB-02`               | Tap Back `<` or Right Swipe | Pop Right                     |
| `AUTH-02`   | `AUTH-01`              | Tap Back `<`                | Pop Right                     |
| `MAIN-01`   | App Background / Root  | System Navigation           | Platform standard             |
| `DETAIL-01` | `MAIN-01`              | Tap Back `<` or Edge Swipe  | Pop Right                     |
| `ACT-01`    | `MAIN-01`              | Tap Cancel or Swipe Down    | Dismiss Sheet / Modal         |
| `ACT-02`    | `ACT-01`               | Tap Back `<`                | Push Right inside modal stack |
| `ACT-03`    | `MAIN-01`              | Tap Done                    | Dismiss Modal & Return to Hub |
| `SET-01`    | `MAIN-01`              | Tap Back `<`                | Pop Right                     |
