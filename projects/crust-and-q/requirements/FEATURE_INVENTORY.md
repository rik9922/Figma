# Feature Inventory & Functional Mapping: Crust & Q

This inventory maps all confirmed and proposed application features to their target screen IDs, user priorities, and technical dependencies.

## 1. Customer Ordering Features

| Feature ID | Feature Name | Priority | Target Screen(s) | Description | Technical / UX Dependencies | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `FEAT-CUST-01` | **Brand Launch & Sign In** | P0 (Must) | `ONB-01` | Brand identity reveal with email/password authentication, "Remember Me" toggle, and guest browsing entry. | Form validation, secure token storage | `CONFIRMED` |
| `FEAT-CUST-02` | **Customer Registration** | P0 (Must) | `AUTH-01` | Account creation with first/last name, US phone formatting (+1), email, and password confirmation. | Input formatting, `AUTH-01-ERROR` | `CONFIRMED` |
| `FEAT-CUST-03` | **Password Recovery** | P1 (Should) | `AUTH-02` | Email-based password reset dispatch and temporary link verification. | Mail service / Deep linking | `PROPOSED` |
| `FEAT-CUST-04` | **Guest Checkout Intercept** | P0 (Must) | `GUEST-01` | Contextual bottom modal intercepting guest checkout to explain tracking perks and reward points. | Cart state preservation | `CONFIRMED` |
| `FEAT-CUST-05` | **Home Delivery Hub** | P0 (Must) | `HOME-01` | Central discovery hub with location selector, 5-dot hero carousel, 3D category plates, and 2-row food card grid. | Location service, `HOME-01-LOADING` | `CONFIRMED` |
| `FEAT-CUST-06` | **Saved Address Bottom Sheet** | P0 (Must) | `LOC-01` | Bottom sheet with GPS prompt banner ("Enable"), saved addresses (Home, Office), and manual search. | Geolocation permissions | `CONFIRMED` |
| `FEAT-CUST-07` | **Full Restaurant Menu Catalog** | P0 (Must) | `MENU-01` | Comprehensive dish catalog with category tabs, item search, pricing, customization badges, and ADD+ buttons. | Menu data model | `CONFIRMED` |
| `FEAT-CUST-08` | **Steak & BBQ Category View** | P1 (Should) | `CAT-01` | Dedicated category exploration with porcelain plates, quick filter chips (Zero-Spill, Fast), and featured cuts. | Category filtering | `PROPOSED` |
| `FEAT-CUST-09` | **Dish Customization Modal** | P0 (Must) | `DISH-01` | In-depth dish configuration with patty doneness, add-on checkboxes, special instructions, and quantity stepper. | Price recalculation engine | `CONFIRMED` |
| `FEAT-CUST-10` | **7-Step Custom Pizza Builder** | P0 (Must) | `PIZZA-01` | Interactive 7-step builder (Size, Crust, Sauce, Cheese, Meats, Veggies, Review) with 3D pizza stage visualizer. | Multi-step state management | `CONFIRMED` |
| `FEAT-CUST-11` | **Itemized Cart & Promo Engine** | P0 (Must) | `CART-01` | Itemized order review, promo voucher application (`CRUST50`), driver tip pills, and verified net calculation. | Pricing engine, `CART-01-EMPTY` | `CONFIRMED` |
| `FEAT-CUST-12` | **Itemized Checkout & Payment** | P0 (Must) | `CHECK-01` | Delivery address confirmation, dropoff notes, and payment method selection (Apple Pay, Credit Card, COD). | Payment SDK, `CHECK-01-RETRY` | `CONFIRMED` |
| `FEAT-CUST-13` | **Order Confirmation Celebration** | P0 (Must) | `ORDER-SUCC-01` | Success celebration with order number (#CQ-98241), estimated arrival window, and link to live tracking. | Order dispatch service | `CONFIRMED` |
| `FEAT-CUST-14` | **Live Daylight Google Maps Tracking** | P0 (Must) | `TRACK-01` | Live cartography centered on Downtown Orlando & Lake Eola with royal blue GPS route, driver marker, and ETA card. | Google Maps SDK, WebSocket | `CONFIRMED` |
| `FEAT-CUST-15` | **Customer Order History & Reorder** | P1 (Should) | `HIST-01` | Historical order archive with active order cards, digital receipt inspection, and 1-click reorder CTA. | Historical order archive | `CONFIRMED` |
| `FEAT-CUST-16` | **Customer Profile & Rewards** | P1 (Should) | `PROF-01` | Account management hub with personal details, saved address manager, and Pitmaster Points loyalty rewards. | User account service | `CONFIRMED` |

---

## 2. Delivery Partner Operational Features

| Feature ID | Feature Name | Priority | Target Screen(s) | Description | Technical / UX Dependencies | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `FEAT-DRV-01` | **Driver Authentication** | P0 (Must) | `DRV-AUTH-01` | Dedicated courier login with shift credentials and vehicle profile verification. | Driver auth service | `CONFIRMED` |
| `FEAT-DRV-02` | **Driver Onboarding & Documents** | P1 (Should) | `DRV-ONB-01` | 4-step courier registration, vehicle information, driver's license upload, and background check submission. | Document OCR / Checkr API | `PROPOSED` |
| `FEAT-DRV-03` | **Shift Dashboard & Earnings** | P0 (Must) | `DRV-DASH-01` | Shift management hub with online/offline toggle, today's earnings ($142.50), completed trips, and radar status. | Real-time driver telemetry | `CONFIRMED` |
| `FEAT-DRV-04` | **15s Radial Dispatch Offer** | P0 (Must) | `DRV-REQ-01` | High-priority dispatch offer with 15s radial countdown ring (active at 12s), guaranteed payout ($12.50), and map route. | Push notification / Dispatch engine | `CONFIRMED` |
| `FEAT-DRV-05` | **Restaurant Pickup Verification** | P1 (Should) | `DRV-PICK-01` | Turn navigation to Crust & Q kitchen, order item verification checklist, and kitchen arrival confirmation. | Geofencing / Order status API | `PROPOSED` |
| `FEAT-DRV-06` | **Live Turn-by-Turn Navigation HUD** | P0 (Must) | `DRV-NAV-01` | Real-time GPS navigation with green turn banner ("In 200 ft Turn Right on Orange Ave") and customer dropoff notes. | Turn-by-turn navigation engine | `CONFIRMED` |
| `FEAT-DRV-07` | **Doorstep Proof of Delivery** | P0 (Must) | `DRV-COMP-01` | Camera photo capture viewfinder with reticle corners, GPS doorstep confirmation, and recipient signature pad. | Camera hardware / GPS verification | `CONFIRMED` |
| `FEAT-DRV-08` | **Courier Earnings & Payout History** | P1 (Should) | `DRV-EARN-01` | Weekly earnings breakdown, completed trip ledger, tip audits, and instant cash-out request modal. | Payment gateway / Stripe Payouts | `PROPOSED` |
