# Animation & Micro-Interaction Inventory: Fintech Mobile App

| Animation ID | Category           | Target Component / Screen | Trigger                | Purpose                                                            | Reduced-Motion Fallback         |
| ------------ | ------------------ | ------------------------- | ---------------------- | ------------------------------------------------------------------ | ------------------------------- |
| `MOT-01`     | Screen Transition  | `ONB-01` → `ONB-02`       | After 1500ms delay     | Ambient logo morph and hero artwork entrance.                      | 200ms simple cross-fade         |
| `MOT-02`     | Screen Transition  | `ONB-02` → `AUTH-01`      | Tap "Get Started"      | Fluid push transition and button-to-input morph.                   | Standard 200ms slide            |
| `MOT-03`     | Modal Transition   | `HOME-01` → `TXN-01`      | Tap "Send" Action      | Tactile spring sheet slide-up with background blur.                | Instant modal appearance        |
| `MOT-04`     | State Transition   | `TXN-02` → `TXN-03`       | FaceID signature event | Biometric progress ring morphs into checkmark with particle burst. | Static checkmark + 150ms fade   |
| `MOT-05`     | Micro-Interaction  | `HOME-01` Balance Card    | Tap "Eye" icon         | Smooth scale and opacity flip of balance numeric digits.           | Instant text replace            |
| `MOT-06`     | Component Feedback | `WALLET-01` Freeze Switch | Toggle switch          | Card texture desaturates from frosted gloss to icy monochrome.     | Instant color switch            |
| `MOT-07`     | Loading State      | `HOME-01-LOADING`         | Feed fetch trigger     | Continuous 1.2s shimmer pulse across card and row skeletons.       | Static opacity 0.6              |
| `MOT-08`     | Error Feedback     | `AUTH-01-ERROR`           | Invalid code submit    | 350ms horizontal spring shake with border color tint.              | Static red border without shake |
