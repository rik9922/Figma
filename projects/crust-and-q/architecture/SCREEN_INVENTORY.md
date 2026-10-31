# Complete Screen Inventory: crust-and-q

| Screen ID         | Screen Name          | Feature / Module | User Role     | Purpose                                        | Entry Point        | Exit Point                | Actions                   | Status  |
| ----------------- | -------------------- | ---------------- | ------------- | ---------------------------------------------- | ------------------ | ------------------------- | ------------------------- | ------- |
| `ONB-01`          | Splash Screen        | Onboarding       | All           | Brand reveal & app initialization              | App Launch         | `ONB-02`                  | None (auto-advance)       | Planned |
| `ONB-02`          | Onboarding Hero      | Onboarding       | First-time    | Value proposition & theme artwork              | `ONB-01`           | `AUTH-01`                 | "Get Started", "Sign In"  | Planned |
| `AUTH-01`         | Authentication       | Authentication   | Guest         | Identifier & password/OTP entry                | `ONB-02`           | `AUTH-02`                 | Submit, "Forgot Password" | Planned |
| `AUTH-01-ERROR`   | Auth Error State     | Authentication   | Guest         | Validation or credential failure               | `AUTH-01`          | `AUTH-01`                 | "Retry", "Reset"          | Planned |
| `AUTH-02`         | Verification / MFA   | Authentication   | Authenticated | Code verification or multi-factor confirmation | `AUTH-01`          | `MAIN-01`                 | "Verify", "Skip"          | Planned |
| `MAIN-01`         | Primary Hub          | Core Product     | User          | Overview cards, metrics/status, feed           | `AUTH-02` / Launch | `DETAIL-01`, `ACT-01`     | Primary action CTAs       | Planned |
| `MAIN-01-LOADING` | Hub Loading Skeleton | Core Product     | User          | Shimmer skeleton placeholder                   | App Open           | `MAIN-01`                 | None                      | Planned |
| `MAIN-01-EMPTY`   | Hub Empty State      | Core Product     | User          | Zero-data empty state                          | `MAIN-01`          | Action Flow               | Primary creation CTA      | Planned |
| `DETAIL-01`       | Item Detail View     | Core Product     | User          | Deep item inspection & actions                 | `MAIN-01`          | `MAIN-01`                 | Edit, share, secondary    | Planned |
| `ACT-01`          | Primary Action Flow  | Actions          | User          | Parameter entry & form inputs                  | `MAIN-01`          | `ACT-02`                  | "Review & Confirm"        | Planned |
| `ACT-02`          | Action Confirmation  | Actions          | User          | Summary breakdown & authorization              | `ACT-01`           | `ACT-03`, `ACT-02-FAILED` | "Confirm Action"          | Planned |
| `ACT-02-FAILED`   | Action Error Modal   | Actions          | User          | Failure handling & retry options               | `ACT-02`           | `ACT-01`                  | "Try Again", "Cancel"     | Planned |
| `ACT-03`          | Success Celebration  | Actions          | User          | Confirmation receipt & celebration             | `ACT-02`           | `MAIN-01`                 | "Done", "Share"           | Planned |
| `SET-01`          | Settings & Profile   | Account          | User          | Account settings, preferences                  | `MAIN-01`          | `MAIN-01`                 | Toggle switches, update   | Planned |
