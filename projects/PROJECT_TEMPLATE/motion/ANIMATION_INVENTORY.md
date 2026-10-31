# Animation & Micro-Interaction Inventory: {{PROJECT_NAME}}

This inventory documents intended screen transitions, modal presentations, and micro-interactions for `{{PROJECT_NAME}}`.

| Animation ID | Category          | Target Component / Screen | Trigger            | Purpose                                           | Reduced-Motion Fallback               |
| ------------ | ----------------- | ------------------------- | ------------------ | ------------------------------------------------- | ------------------------------------- |
| `MOT-01`     | Screen Transition | `ONB-01` → `ONB-02`       | After 1500ms delay | Brand reveal to onboarding hero transition.       | 200ms simple cross-fade               |
| `MOT-02`     | Screen Transition | `ONB-02` → `AUTH-01`      | Tap "Get Started"  | Fluid push transition into authentication.        | Standard 200ms slide                  |
| `MOT-03`     | Modal Transition  | `MAIN-01` → `ACT-01`      | Primary Action Tap | Tactile sheet slide-up with background dimming.   | Instant modal appearance              |
| `MOT-04`     | State Transition  | `ACT-02` → `ACT-03`       | Confirmation Tap   | Progress indicator morphs into success checkmark. | Static checkmark + 150ms fade         |
| `MOT-05`     | Micro-Interaction | Interactive Buttons       | Tap Down / Release | Subtle scale press feedback (`scale: 0.97`).      | Instant state highlight               |
| `MOT-06`     | Loading State     | `MAIN-01-LOADING`         | Data fetch trigger | Shimmer pulse across skeleton placeholders.       | Static subtle opacity                 |
| `MOT-07`     | Error Feedback    | `AUTH-01-ERROR`           | Validation failure | Subtle horizontal spring shake with border tint.  | Static border highlight without shake |
