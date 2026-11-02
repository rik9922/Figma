# Navigation Architecture & View Hierarchy: Crust & Q

## 1. Global Navigation Hierarchy

Crust & Q employs a dual-role mobile navigation architecture designed for high-speed food ordering and turn-by-turn operational logistics:

### 1.1 Customer Application Navigation Stack
1. **Authentication & Onboarding Stack** (Linear Modal Flow):
   - `ONB-01` (Splash & Sign In) -> `AUTH-01` (Create Account) or `AUTH-02` (Forgot Password).
   - `GUEST-01` (Contextual Intercept Sheet) presents modally over cart checkout when unauthenticated.
2. **Primary Delivery Hub & Discovery** (Floating Dual Dock):
   - `HOME-01` is the central operational anchor.
   - Persistent floating bottom navigation dock provides two primary modes:
     - **Delivery**: Main food discovery, category shelves, and active ordering.
     - **History**: Historical receipts, order status, and 1-click reorder.
3. **Modal Sheets & Overlays** (Context-Preserving Tasks):
   - `LOC-01` (Saved Address Sheet): Slides up from bottom over Home Hub.
   - `DISH-01` (Dish Customizer): Slides up modal with backdrop scrim.
   - `CART-01` (Feast Cart Drawer): Slides up from bottom above floating dock.
4. **Dedicated Fullscreen Flows** (Focused Deep Tasks):
   - `PIZZA-01` (7-Step Custom Pizza Builder): Fullscreen step progression.
   - `CHECK-01` (Checkout & Payment): Fullscreen step with masked payment entry.
   - `ORDER-SUCC-01` & `TRACK-01`: Fullscreen order celebration and live daylight Google Maps tracking.
   - `PROF-01`: Fullscreen profile, saved addresses, and Pitmaster rewards.

### 1.2 Delivery Partner Application Navigation Stack
1. **Driver Auth & Onboarding Stack**:
   - `DRV-AUTH-01` (Driver Login) -> `DRV-ONB-01` (Vehicle & Document Upload).
2. **Operational Shift Hub**:
   - `DRV-DASH-01` (Shift Dashboard) anchors online availability, earnings, and completed trips.
3. **Dispatch & Navigation Modal Sequence**:
   - `DRV-REQ-01` (15s Incoming Offer): High-priority modal overlay with countdown ring.
   - `DRV-NAV-01` (Turn-by-Turn GPS Navigation): Live full-screen cartography HUD with customer delivery notes.
   - `DRV-COMP-01` (Proof of Delivery): Camera photo capture viewfinder and signature confirmation sheet.

---

## 2. Navigation & Dismissal Rules

| Screen ID | Back Target | Trigger / Gesture | Transition Behavior |
| :--- | :--- | :--- | :--- |
| `ONB-01` | None (Root Auth) | N/A | Root view |
| `AUTH-01` | `ONB-01` | Tap `<` or Right Swipe | Pop Right (`280ms`, ease-out) |
| `AUTH-02` | `ONB-01` | Tap `<` or Right Swipe | Pop Right (`280ms`, ease-out) |
| `GUEST-01` | `CART-01` | Tap `✕` or Swipe Down | Dismiss Sheet (`280ms`, ease-in) |
| `HOME-01` | None (Root Home) | System Exit / App Background | Platform standard |
| `LOC-01` | `HOME-01` | Tap `✕` or Swipe Down | Dismiss Sheet (`280ms`, ease-in) |
| `MENU-01` | `HOME-01` | Tap `<` or Edge Swipe | Pop Right (`280ms`, ease-out) |
| `CAT-01` | `MENU-01` | Tap `<` or Edge Swipe | Pop Right (`280ms`, ease-out) |
| `DISH-01` | `HOME-01` / `MENU-01` | Tap `<` or `✕` icon | Slide Down Modal (`280ms`, ease-in) |
| `PIZZA-01` | `HOME-01` | Tap `<` back icon | Pop Right (`300ms`, ease-out) |
| `CART-01` | `HOME-01` | Tap `<` or `✕` icon | Slide Down Drawer (`300ms`, ease-in) |
| `CHECK-01` | `CART-01` | Tap `<` back icon | Pop Right (`280ms`, ease-out) |
| `ORDER-SUCC-01` | `HOME-01` | Tap "Return to Home" | Fade to Root (`300ms`, ease-out) |
| `TRACK-01` | `HOME-01` | Tap `<` back icon | Fade to Root (`300ms`, ease-out) |
| `HIST-01` | `HOME-01` | Tap "Delivery" in dock | Crossfade (`250ms`, ease-out) |
| `PROF-01` | `HOME-01` | Tap `<` back icon | Pop Right (`280ms`, ease-out) |
| `DRV-AUTH-01` | None (Root Driver) | N/A | Root view |
| `DRV-DASH-01` | None (Root Shift) | N/A | Root view |
| `DRV-REQ-01` | `DRV-DASH-01` | Tap "Decline" / 15s Timeout | Slide Down Overlay (`280ms`) |
| `DRV-NAV-01` | `DRV-DASH-01` | Emergency cancel | Slide Down Navigation (`300ms`) |
| `DRV-COMP-01` | `DRV-NAV-01` | Retake photo | Slide Down Sheet (`280ms`) |
