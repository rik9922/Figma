# Screen Connection & Interaction Matrix: Crust & Q

This matrix specifies exact navigation pathways, interactive triggers, transition curves, and target destinations for all customer and delivery partner screens.

## 1. Customer Ordering Journeys

| Source Screen | UI Element Trigger | Interaction Gesture | Destination Screen | Trigger Event | Transition Curve & Duration | Interaction Rationale / Outcome |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ONB-01` | `SignInButton` | Tap "Sign In" | `HOME-01` | On Tap | Push Left (`300ms`, ease-out) | Authenticates customer credentials and enters master home hub. |
| `ONB-01` | `SignUpLink` | Tap "Sign Up" | `AUTH-01` | On Tap | Push Left (`280ms`, ease-out) | Navigates to new account creation registration form. |
| `ONB-01` | `GuestButton` | Tap "Continue as Guest" | `HOME-01` | On Tap | Fade In (`250ms`, ease-out) | Bypasses auth with guest session enabled. |
| `AUTH-01` | `BackButton` | Tap `<` back icon | `ONB-01` | On Tap | Pop Right (`280ms`, ease-out) | Returns to splash sign-in screen. |
| `AUTH-01` | `RegisterButton`| Tap "Sign Up" | `HOME-01` | On Tap | Push Left (`320ms`, ease-out) | Submits user registration and lands on home hub. |
| `HOME-01` | `LocationPill` | Tap location header | `LOC-01` | On Tap | Slide Up Sheet (`300ms`, spring) | Opens saved address bottom sheet with GPS prompt. |
| `LOC-01` | `CloseButton` | Tap `✕` icon or swipe down | `HOME-01` | On Tap / Drag | Slide Down Sheet (`280ms`, ease-in) | Dismisses location sheet and updates active address. |
| `HOME-01` | `FoodCard` | Tap recommended food card | `DISH-01` | On Tap | Slide Up Modal (`320ms`, spring) | Opens dish customization modal with doneness & sides. |
| `DISH-01` | `CloseButton` | Tap `<` or `✕` icon | `HOME-01` | On Tap | Slide Down Modal (`280ms`, ease-in) | Cancels customization and returns to home hub. |
| `DISH-01` | `AddToCartBtn` | Tap "Add to Cart" | `HOME-01` | On Tap | Morph & Pop (`250ms`, ease-out) | Adds configured dish to cart; updates floating cart bar. |
| `HOME-01` | `PizzaHeroCard`| Tap "Build Your Own Pizza"| `PIZZA-01` | On Tap | Push Left (`300ms`, ease-out) | Launches 7-step interactive pizza customizer. |
| `PIZZA-01` | `BackButton` | Tap `<` back icon | `HOME-01` | On Tap | Pop Right (`280ms`, ease-out) | Exits pizza builder and restores home hub. |
| `PIZZA-01` | `NextStepBtn` | Tap "Next: Choose Sauce" | `PIZZA-01` | On Tap | Smart Animate (`300ms`, spring) | Advances builder step and updates 3D pizza stage. |
| `HOME-01` | `SeeAllLink` | Tap "See All ▸" | `MENU-01` | On Tap | Push Left (`280ms`, ease-out) | Opens full restaurant menu catalog. |
| `MENU-01` | `CategoryTab` | Tap "Craft BBQ" | `CAT-01` | On Tap | Instant Tab Switch (`200ms`) | Filters menu to display Steak & BBQ category cuts. |
| `HOME-01` | `StickyCartBar`| Tap "View Cart" | `CART-01` | On Tap | Slide Up Drawer (`320ms`, spring) | Opens itemized feast cart with promo voucher & tips. |
| `CART-01` | `CheckoutBtn` | Tap "Proceed to Checkout" (Guest) | `GUEST-01` | On Tap | Slide Up Intercept (`280ms`, spring) | Intercepts guest to prompt for sign-in or SMS tracking. |
| `GUEST-01` | `AuthButton` | Tap "Sign In or Sign Up" | `AUTH-01` | On Tap | Push Left (`280ms`, ease-out) | Navigates to auth while preserving cart items. |
| `GUEST-01` | `GuestBtn` | Tap "Continue as Guest" | `CHECK-01` | On Tap | Push Left (`280ms`, ease-out) | Advances to checkout with guest SMS delivery. |
| `CART-01` | `CheckoutBtn` | Tap "Proceed to Checkout" (Auth) | `CHECK-01` | On Tap | Push Left (`300ms`, ease-out) | Opens checkout with address and payment method. |
| `CHECK-01` | `PayButton` | Tap "Pay & Place Order" | `ORDER-SUCC-01` | On Tap | Crossfade Celebration (`400ms`) | Confirms payment and reveals order #CQ-98241. |
| `ORDER-SUCC-01`| `TrackButton`| Tap "Track Order Live" | `TRACK-01` | On Tap | Push Left (`320ms`, ease-out) | Opens live Google Maps tracking with daylight Orlando view. |
| `TRACK-01` | `HomeButton` | Tap `<` or back icon | `HOME-01` | On Tap | Fade to Root (`300ms`, ease-out) | Returns to home hub with persistent tracking banner. |
| `HOME-01` | `HistoryTab` | Tap "History" in floating dock | `HIST-01` | On Tap | Crossfade (`250ms`, ease-out) | Switches to customer order history and receipt ledger. |
| `HOME-01` | `ProfileCircle`| Tap user avatar ("R") | `PROF-01` | On Tap | Push Left (`280ms`, ease-out) | Opens customer profile, addresses, and Pitmaster rewards. |

---

## 2. Delivery Partner Journeys

| Source Screen | UI Element Trigger | Interaction Gesture | Destination Screen | Trigger Event | Transition Curve & Duration | Interaction Rationale / Outcome |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `DRV-AUTH-01` | `LoginButton` | Tap "Sign In as Driver" | `DRV-DASH-01` | On Tap | Push Left (`300ms`, ease-out) | Authenticates courier and opens shift dashboard. |
| `DRV-DASH-01` | `OnlineSwitch` | Toggle "ONLINE" switch | `DRV-DASH-01` | On Change | Smart Animate (`250ms`, spring) | Sets driver status to searching with radar animation. |
| `DRV-DASH-01` | `IncomingOffer` | Dispatch event received | `DRV-REQ-01` | Push Event | Slide Up Overlay (`350ms`, spring) | Presents 15s radar offer with $12.50 payout & route. |
| `DRV-REQ-01` | `DeclineButton`| Tap "Decline" | `DRV-DASH-01` | On Tap | Slide Down Overlay (`280ms`) | Declines offer and resumes order search radar. |
| `DRV-REQ-01` | `AcceptButton` | Tap "Accept Delivery Offer" | `DRV-NAV-01` | On Tap | Crossfade to Nav (`300ms`, ease-out) | Locks dispatch and starts live turn-by-turn navigation HUD. |
| `DRV-NAV-01` | `ArrivedBtn` | Tap "Arrived at Customer" | `DRV-COMP-01` | On Tap | Slide Up Sheet (`300ms`, spring) | Opens doorstep photo capture and signature pad. |
| `DRV-COMP-01` | `CompleteBtn` | Tap "Complete Delivery" | `DRV-DASH-01` | On Tap | Confetti Celebration (`450ms`) | Completes trip, credits $12.50 to earnings, resets shift. |
