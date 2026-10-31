# Navigation Architecture & View Hierarchy: Fintech Mobile App

## 1. Global Navigation Hierarchy

The application utilizes a hybrid navigation model:
1. **Linear Stack Navigation** (Onboarding & Authentication):
   - Strict forward push and backward pop.
   - Hardware swipe-to-go-back gesture enabled on all screens except Splash.
2. **Tabbed Primary Navigation** (Authenticated Core):
   - 3-Tab Bottom Navigation Bar:
     - Tab 1: **Home** (`HOME-01`)
     - Tab 2: **Cards** (`WALLET-01`)
     - Tab 3: **Activity / Profile**
3. **Modal Bottom Sheets** (Transactional & Transient Actions):
   - Transfers (`TXN-01`, `TXN-02`) open as non-full-screen interactive bottom sheets (detents: medium & large), preserving context beneath frosted glass background scrim.

---

## 2. Back Navigation & Dismissal Rules

| Screen ID | Back Target | Trigger / Gesture | Transition |
|---|---|---|---|
| `ONB-02` | None (Initial Root) | N/A | Root View |
| `AUTH-01` | `ONB-02` | Tap Top Left `<` or Right Swipe | Pop Right 280ms |
| `AUTH-02` | `AUTH-01` | Tap Top Left `<` | Pop Right 280ms |
| `HOME-01` | Minimize App | Home Indicator Swipe Up | OS Standard |
| `WALLET-01` | `HOME-01` | Tap Home Tab Bar Icon | Cross-fade 150ms |
| `TXN-01` | `HOME-01` | Tap Top Left `Cancel` or Swipe Down | Sheet Slide Down 300ms |
| `TXN-02` | `TXN-01` | Tap `< Back` | Push Right 250ms |
| `TXN-03` | `HOME-01` | Tap `Done` (Root Reset) | Fade to Root 300ms |
