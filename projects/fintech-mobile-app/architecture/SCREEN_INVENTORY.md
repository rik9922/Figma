# Complete Screen Inventory: Fintech Mobile App

| Screen ID | Screen Name | Feature / Module | User Role | Purpose | Entry Point | Exit Point | Actions | Status |
|---|---|---|---|---|---|---|---|---|
| `ONB-01` | Splash Screen | Onboarding | All | Brand reveal & app state init | App Launch | `ONB-02` | None (auto-advance) | Planned |
| `ONB-02` | Onboarding Hero | Onboarding | First-time | Value proposition & theme artwork | `ONB-01` | `AUTH-01` | "Create Account", "Sign In" | Ready for canvas |
| `AUTH-01` | Mobile & OTP Auth | Authentication | Guest | E.164 phone & 6-digit OTP entry | `ONB-02` | `AUTH-02` | Input OTP, Resend code | Planned |
| `AUTH-02` | Biometric Setup | Authentication | Authenticated | FaceID / Passcode enrollment | `AUTH-01` | `HOME-01` | "Enable FaceID", "Skip" | Planned |
| `HOME-01` | Main Dashboard | Core Product | Account Holder | Total balance, quick actions, feed | `AUTH-02` / Launch | `TXN-01`, `WALLET-01` | "Send", "Top Up", Tap Card | Planned |
| `HOME-01-LOADING` | Dashboard Skeleton | Core Product | Account Holder | Loading placeholder state | App Open | `HOME-01` | None | Planned |
| `WALLET-01` | Digital Cards Hub | Cards & Assets | Account Holder | Virtual card details & controls | `HOME-01` Nav Tab | `WALLET-01-EMPTY` | Freeze card, copy CVV | Planned |
| `WALLET-01-EMPTY` | Empty Cards View | Cards & Assets | Account Holder | Empty state when no cards exist | `WALLET-01` | New Card Flow | "Request Virtual Card" | Planned |
| `TXN-01` | Payee & Amount Keypad| Payments | Account Holder | Select recipient & enter amount | `HOME-01` "Send" | `TXN-02` | Tap Payee, Keypad entry | Planned |
| `TXN-02` | Transfer Confirm Modal| Payments | Account Holder | Fee breakdown & FaceID signing | `TXN-01` | `TXN-03`, `TXN-02-FAILED`| Double-click / FaceID sign | Planned |
| `TXN-02-FAILED` | Transfer Error Modal | Payments | Account Holder | Failure state & retry handling | `TXN-02` | `TXN-01` | "Try Again", "Choose Card" | Planned |
| `TXN-03` | Success Receipt | Payments | Account Holder | Confirmation & micro-celebration | `TXN-02` | `HOME-01` | "Done", "Share Receipt" | Planned |
| `AUTH-01-ERROR` | OTP Error State | Authentication | Guest | Invalid OTP countdown state | `AUTH-01` | `AUTH-01` | "Resend Code" | Planned |

