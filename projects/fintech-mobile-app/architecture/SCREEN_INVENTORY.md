# Complete Screen & State Inventory: Fintech Mobile App (iOS + Android Parity)

**Target Figma File**: [`gtamCkSGXtOpzj3XYcWzie`](https://www.figma.com/design/gtamCkSGXtOpzj3XYcWzie/Untitled?node-id=0-1)  
**Active Page**: `Page 1` (`0:1`)  
**Design Direction**: "Quiet Precision" (Warm paper `#F6F4EF`, deep obsidian ink `#0F1115`, electric citrine `#D9F26B`)  
**Total Production Screens**: 20 iOS screens + 20 Android screens = **40 Screens Total**  
**Canvas Realization**: Native editable Figma Frames, named vector layers, and editable text layers.

---

## 1. Onboarding & Authentication Module (Board 03 & Board 06)

| Screen ID       | Screen Name               | Flow / Journey | iOS Viewport & Node | Android Viewport & Node | Primary Purpose & Key Actions                                                                                   | Canvas Status      |
| --------------- | ------------------------- | -------------- | ------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------ |
| `ONB-01`        | Splash Screen             | Onboarding     | 393×852 (`8:7`)     | 412×915 (`8:2059`)      | Ambient brand reveal with tactile logomark and subtle light sweep. Auto-advance 1.5s.                           | Verified on Canvas |
| `ONB-02`        | Welcome & Onboarding Hero | Onboarding     | 393×852 (`8:32`)    | 412×915 (`8:2082`)      | Editorial headline (_Instrument Serif_), 3-card isometric perspective stack, "Create account" / "Sign in" CTAs. | Verified on Canvas |
| `AUTH-01`       | Phone Number Input        | Authentication | 393×852 (`8:93`)    | 412×915 (`8:2141`)      | Country selector (`+1`), phone input in focused state with active cursor, formatted legal note.                 | Verified on Canvas |
| `AUTH-01-OTP`   | 6-Digit OTP Verification  | Authentication | 393×852 (`8:180`)   | 412×915 (`8:2225`)      | 6 individual code cells with active focus border on digit 4, countdown timer ("Resend in 0:42").                | Verified on Canvas |
| `AUTH-01-ERROR` | OTP Verification Failure  | Authentication | 393×852 (`8:283`)   | 412×915 (`8:2325`)      | Crimson error border (`#C8372D`), shake feedback, alert badge, immediate "Resend code now" CTA.                 | Verified on Canvas |
| `AUTH-02`       | Biometric Security Setup  | Authentication | 393×852 (`8:391`)   | 412×915 (`8:2428`)      | Face ID (iOS) / Android BiometricPrompt glyph, security benefit chips, "Enable" & "Set up later" actions.       | Verified on Canvas |

---

## 2. Home, Cards & Account Module (Board 04 & Board 07)

| Screen ID          | Screen Name                  | Flow / Journey   | iOS Viewport & Node | Android Viewport & Node | Primary Purpose & Key Actions                                                                               | Canvas Status      |
| ------------------ | ---------------------------- | ---------------- | ------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------ |
| `HOME-01`          | Main Dashboard & Feed        | Core Banking     | 393×852 (`8:453`)   | 412×915 (`8:2491`)      | Total balance (`$14,250.80`), quick action pills (Send, Add, Cards, Insights), recent itemized feed.        | Verified on Canvas |
| `HOME-01-LOADING`  | Shimmer Skeleton Loader      | Core Banking     | 393×852 (`8:607`)   | 412×915 (`8:2638`)      | High-fidelity bone skeletons for balance card, action pills, and activity list.                             | Verified on Canvas |
| `HOME-01-OFFLINE`  | Offline / Disconnected State | Core Banking     | 393×852 (`8:696`)   | 412×915 (`8:2725`)      | Amber warning banner ("Offline — showing cached balance from 8:42 AM"), disabled send action.               | Verified on Canvas |
| `WALLET-01`        | Virtual Debit Card Hub       | Card Controls    | 393×852 (`8:839`)   | 412×915 (`8:2872`)      | Premium physical card render, quick controls (Freeze, Details, Limits, Settings), recent card transactions. | Verified on Canvas |
| `WALLET-01-FROZEN` | Frozen Card State            | Card Controls    | 393×852 (`8:947`)   | 412×915 (`8:2984`)      | Frosted card overlay, snowflake indicator, amber banner, immediate "Unfreeze Card" toggle.                  | Verified on Canvas |
| `WALLET-01-EMPTY`  | Empty Cards View             | Card Controls    | 393×852 (`8:1089`)  | 412×915 (`8:3132`)      | Dotted card placeholder outline, educational copy, primary "Order First Card" button.                       | Verified on Canvas |
| `ACT-01`           | Full Transaction Activity    | Account History  | 393×852 (`8:1155`)  | 412×915 (`8:3198`)      | Category filter pills (All, Spent, Income, Subscriptions), search bar, monthly grouped transaction list.    | Verified on Canvas |
| `SET-01`           | Profile & Security Settings  | Account Settings | 393×852 (`8:1281`)  | 412×915 (`8:3324`)      | User profile tile, Biometric toggle, Privacy mode switch, App Lock, Support & Sign Out rows.                | Verified on Canvas |

---

## 3. Payments & Transfer Module (Board 05 & Board 08)

| Screen ID             | Screen Name                   | Flow / Journey  | iOS Viewport & Node | Android Viewport & Node | Primary Purpose & Key Actions                                                                                     | Canvas Status      |
| --------------------- | ----------------------------- | --------------- | ------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------ |
| `TXN-01`              | Send Money & Keypad           | Payment Flow    | 393×852 (`8:1419`)  | 412×915 (`8:3469`)      | Horizontal recent payees carousel, large tabular amount input (`$250.00`), custom numeric keypad.                 | Verified on Canvas |
| `TXN-01-INSUFFICIENT` | Over Balance Warning          | Payment Flow    | 393×852 (`8:1560`)  | 412×915 (`8:3605`)      | Crimson balance indicator ("Available: $142.50 — exceeds balance by $107.50"), disabled review button.            | Verified on Canvas |
| `TXN-02`              | Transfer Confirmation Sheet   | Payment Flow    | 393×852 (`8:1710`)  | 412×915 (`8:3750`)      | Recipient details, transfer route, fee breakdown ($0 transfer fee), exchange rate lock, Face ID signing prompt.   | Verified on Canvas |
| `TXN-02-FAILED`       | Transfer Failure Modal        | Payment Flow    | 393×852 (`8:1814`)  | 412×915 (`8:3848`)      | System modal / dialog ("Transfer didn't go through — connection timeout"), "Try Again" & "Top Up" actions.        | Verified on Canvas |
| `TXN-03`              | Success Celebration & Receipt | Payment Flow    | 393×852 (`8:1928`)  | 412×915 (`8:3959`)      | Luminous citrine checkmark plate, "$250.00 sent" display, itemized reference, "Done" & "Share Receipt" CTAs.      | Verified on Canvas |
| `TXN-04`              | Itemized Transaction Detail   | Account History | 393×852 (`8:1973`)  | 412×915 (`8:4002`)      | Merchant logo tile (Blue Bottle Coffee), amount, status chip, timestamp, card used, "Download Receipt", "Report". | Verified on Canvas |

---

## 4. Canvas Hierarchy & Board Coordinates in Figma

```text
Figma File: gtamCkSGXtOpzj3XYcWzie (Page 1 "0:1")
├── 8:2     03-ios-onboarding-authentication       (x=3118,  y=0, w=3078, h=1272) -> 6 iOS Screens
├── 8:448   04-ios-home-cards-account              (x=6236,  y=0, w=4056, h=1272) -> 8 iOS Screens
├── 8:1414  05-ios-payments                        (x=10332, y=0, w=3078, h=1272) -> 6 iOS Screens
├── 8:2054  06-android-onboarding-authentication   (x=13450, y=0, w=3192, h=1335) -> 6 Android Screens
├── 8:2486  07-android-home-cards-account          (x=16682, y=0, w=4208, h=1335) -> 8 Android Screens
└── 8:3464  08-android-payments                    (x=20930, y=0, w=3192, h=1335) -> 6 Android Screens
```
