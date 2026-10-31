# Screen Connection Matrix: Fintech Mobile App

This matrix documents the complete screen-to-screen interaction pathways for `fintech-mobile-app`. Every interactive trigger, destination, transition curve, and expected behavior is specified.

| Source Screen | Interactive Element | Action / Event | Destination Screen | Trigger | Transition Type | Expected Behavior & Feedback |
|---|---|---|---|---|---|---|
| `ONB-01` | Screen Canvas | Automatic timer completion | `ONB-02` | After 1500ms delay | Smart Animate (`450ms`, cubic-bezier) | Logo moves to navigation bar; hero artwork scales from 0.92 → 1.0; headlines fade in. |
| `ONB-02` | `PrimaryButton` | Tap "Get Started" | `AUTH-01` | On Tap | Push Left (`320ms`, ease-out) | Button expands horizontally into the phone input field on the next screen. |
| `ONB-02` | `SecondaryButton` | Tap "Already have an account? Sign In" | `AUTH-01` | On Tap | Push Left (`320ms`, ease-out) | Navigates directly into phone input with "Welcome Back" greeting text variant. |
| `AUTH-01` | `BackButton` | Tap `<` back icon | `ONB-02` | On Tap | Pop Right (`280ms`, ease-out) | Clears any entered digits and returns to onboarding hero. |
| `AUTH-01` | `OTPInputBlock` | Input 6th valid digit | `AUTH-02` | On Text Change (6 chars) | Push Left (`300ms`, ease-out) | Keyboard dismisses; soft haptic success tap; advances to Biometric Enrollment. |
| `AUTH-01` | `OTPInputBlock` | Enter incorrect code | `AUTH-01-ERROR` | On Validation Failure | Micro-shake (`350ms`, spring) | Input borders turn red `#FF3B30`; subtle error haptic; countdown resets to 45s. |
| `AUTH-02` | `EnableFaceIDButton`| Tap "Enable FaceID" | `HOME-01` | On Tap | Cross-fade (`350ms`, ease-out) | Native iOS biometric prompt appears; upon approval, enters Home Dashboard. |
| `AUTH-02` | `GhostButton` | Tap "Set up later in Settings" | `HOME-01` | On Tap | Cross-fade (`250ms`, ease-out) | Sets local preference to passcode fallback; advances to Home Dashboard. |
| `HOME-01` | `QuickSendPill` | Tap "Send" action pill | `TXN-01` | On Tap | Slide Up Sheet (`300ms`, spring) | Background dashboard blurs (8px) and dims to 40% opacity; payee drawer opens. |
| `HOME-01` | `BottomNavBar` | Tap "Cards" tab icon | `WALLET-01` | On Tap | Instant Tab Switch (`0ms`) | Active indicator pill transitions under Cards icon; reveals virtual cards carousel. |
| `HOME-01` | `BalanceCard` | Tap "Eye" hide/reveal icon | `HOME-01` (In-place) | On Tap | Smart Animate (`200ms`, ease-in-out) | Balance toggles between `$24,850.40` and `••••••••`; preserves balance privacy. |
| `WALLET-01` | `CardFreezeSwitch` | Toggle "Freeze Card" switch | `WALLET-01` (In-place) | On Tap | Smart Animate (`250ms`, ease-out) | Card visual changes from glossy frosted glass to monochrome translucent ice tint. |
| `WALLET-01` | `EmptyCTA` | Tap "Request Virtual Card" (when 0 cards) | `WALLET-01` | On Tap | Scale Fade (`300ms`) | Spawns card generation modal, animates new 3D card into user's wallet carousel. |
| `TXN-01` | `CloseSheetButton` | Tap "Cancel" or swipe down | `HOME-01` | On Tap / Drag Down | Slide Down Sheet (`280ms`) | Dismisses payee drawer; removes background blur and restores dashboard focus. |
| `TXN-01` | `KeypadDigit` | Tap numeric keypad buttons | `TXN-01` (In-place) | On Tap | Haptic feedback (`50ms`) | Appends digit to amount display; calculates real-time currency conversion below. |
| `TXN-01` | `ReviewButton` | Tap "Review Transfer" | `TXN-02` | On Tap | Push Left inside Sheet (`250ms`) | Sheet expands to large detent; reveals fee breakdown, delivery time, and FaceID button. |
| `TXN-02` | `BackButton` | Tap `<` back arrow | `TXN-01` | On Tap | Pop Right inside Sheet (`250ms`) | Preserves entered amount and recipient; returns to keypad adjustment. |
| `TXN-02` | `BiometricConfirm` | Double-click side button / FaceID | `TXN-03` | Biometric Event | Morph / Smart Animate (`550ms`) | Progress spinner snaps into celebratory green checkmark; displays transaction ID. |
| `TXN-02` | `BiometricConfirm` | Insufficient funds / Timeout | `TXN-02-FAILED` | Error Event | Shake & Red Alert (`350ms`) | Displays error modal with "Try Again" or "Top Up Account" CTA buttons. |
| `TXN-03` | `PrimaryButton` | Tap "Done" | `HOME-01` | On Tap | Fade to Root (`300ms`, ease-out) | Closes all modal sheets; returns to `HOME-01` with newly updated transaction item at top. |
