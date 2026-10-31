# Feature Inventory & Functional Mapping: Fintech Mobile App

| Feature ID | Feature Name | Priority | Target Screen(s) | Description | Technical / UX Dependencies |
|---|---|---|---|---|---|
| `FEAT-01` | **Animated Brand Splash** | P1 (Must) | `ONB-01` | Ambient logo entrance, asset warm-up, and 1.5s automatic advance. | Motion spec `MOT-01` |
| `FEAT-02` | **Onboarding Value Prop Hero** | P1 (Must) | `ONB-02` | High-impact hero artwork (swappable themes), benefit copy, and primary signup CTA. | Approved asset `5:4` / `5:2` |
| `FEAT-03` | **Phone & SMS OTP Auth** | P1 (Must) | `AUTH-01` | E.164 phone input, 6-digit OTP autofill boxes, resend cooldown timer. | Input validation, error state `AUTH-01-ERROR` |
| `FEAT-04` | **Biometric Enrollment** | P1 (Must) | `AUTH-02` | FaceID / TouchID activation with fallback PIN setup. | iOS LocalAuthentication API |
| `FEAT-05` | **Hero Balance Card** | P1 (Must) | `HOME-01` | Frosted glass multi-currency card, hide/unhide balance toggle, quick action pills. | Auto Layout horizontal scroll |
| `FEAT-06` | **Recent Transaction Feed** | P1 (Must) | `HOME-01` | Chronological list of expenses with merchant logo, category tag, and timestamp. | Skeleton loader `HOME-01-LOADING` |
| `FEAT-07` | **Virtual Card Carousel** | P1 (Must) | `WALLET-01` | 3D card perspective preview, tap-to-reveal CVV, freeze card switch. | Empty state `WALLET-01-EMPTY` |
| `FEAT-08` | **Quick Send & Payee Select** | P1 (Must) | `TXN-01` | Horizontal avatar list of frequent payees, numeric amount keypad, note input. | Touch target ≥ 44pt keypad |
| `FEAT-09` | **Transfer Confirmation Sheet** | P1 (Must) | `TXN-02` | Modal sheet showing fee breakdown ($0 fee), exchange rate, and FaceID signing button. | Spring modal transition `MOT-03` |
| `FEAT-10` | **Success Receipt & Celebration** | P1 (Must) | `TXN-03` | Animated checkmark draw, transaction ID, PDF receipt export, and return home CTA. | Celebration micro-interaction `MOT-04` |
