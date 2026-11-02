# Screen Architecture & Navigation Specification: Crust & Q

## 1. Executive Summary & Product Objective

`crust-and-q` is a premier food ordering and delivery mobile application for an artisanal wood-fired crust (pizza) and craft slow-smoked BBQ restaurant chain operating in the United States. The platform supports both Customer ordering and Delivery Partner operational workflows with bi-directional real-time daylight cartography.

---

## 2. Complete Screen & State Inventory

| Screen ID | Screen Name | Module / Flow | Viewport | Primary Purpose | Entry Point | Primary Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ONB-01` | Splash & Sign In | Customer Auth | 390x844 pt | Brand entry, email/password credentials, and guest access | App Launch | "Sign In" |
| `AUTH-01` | Create Account | Customer Auth | 390x844 pt | New customer registration with US phone format | `ONB-01` | "Sign Up" |
| `AUTH-02` | Forgot & Reset Password | Customer Auth | 390x844 pt | Email password reset link request and confirmation | `ONB-01` | "Send Reset Link" |
| `GUEST-01` | Guest Login Intercept Sheet | Customer Guest | 390x844 pt | Explains value of account creation during cart checkout | `CART-01` (Guest) | "Sign In or Sign Up" |
| `HOME-01` | Home Delivery & Discovery Hub | Customer Core | 390x844 pt | Location header, 5-dot carousel, 3D plates, 2 food rows, dock | `ONB-01` / Launch | Tap Category / Add Dish |
| `LOC-01` | Saved Address Selection Sheet | Customer Location | 390x844 pt | GPS prompt banner, saved address cards, and manual search | `HOME-01` | "Enable" / Select Address |
| `MENU-01` | Full Restaurant Menu Catalog | Customer Menu | 390x844 pt | Category tabs, dish items with badges, and ADD+ buttons | `HOME-01` ("See All") | "ADD +" |
| `CAT-01` | Steak & BBQ Category View | Customer Menu | 390x844 pt | Subcategory plates, quick filter chips, and featured cuts | `MENU-01` | "ADD +" |
| `SRCH-01` | Live Search & Results | Customer Search | 390x844 pt | Search bar, recent searches, and real-time dish results | `HOME-01` | Tap search result |
| `DISH-01` | Dish Customization Modal | Customer Customizer | 390x844 pt | Patty doneness, toppings, add-ons, and quantity stepper | `HOME-01` / `MENU-01` | "Add to Cart • $21.00" |
| `PIZZA-01` | 7-Step "Build Your Own Pizza" | Customer Customizer | 390x844 pt | 7-stage customizer with 3D pizza stage visualizer | `HOME-01` | "Next: Choose Sauce >" |
| `CART-01` | Itemized Feast Cart | Customer Checkout | 390x844 pt | Itemized dishes, promo voucher (`CRUST50`), tip pills, subtotal | `HOME-01` | "Proceed to Checkout" |
| `CHECK-01` | Checkout & Payment | Customer Checkout | 390x844 pt | Delivery address review, dropoff instructions, Apple Pay/Card | `CART-01` | "Pay & Place Order" |
| `ORDER-SUCC-01`| Order Confirmed Celebration | Customer Lifecycle | 390x844 pt | Order celebration with #CQ-98241, ETA, and tracking CTA | `CHECK-01` | "Track Order Live on Map" |
| `TRACK-01` | Live Customer Google Maps Tracking | Customer Lifecycle | 390x844 pt | Daylight Orlando Lake Eola map, blue route polyline, moving driver | `ORDER-SUCC-01` | Contact Driver / Support |
| `HIST-01` | Order History & Receipts | Customer Account | 390x844 pt | Past order archive, digital receipts, and 1-click reordering | `HOME-01` (Dock) | "Reorder in 1-Click" |
| `PROF-01` | Customer Profile & Rewards | Customer Account | 390x844 pt | Personal details, saved addresses, and Pitmaster Points | `HOME-01` (Avatar) | "Manage Addresses" |
| `DRV-AUTH-01` | Driver Login | Driver Auth | 390x844 pt | Delivery courier credentials and shift sign-in | Driver Launch | "Sign In as Driver" |
| `DRV-ONB-01` | Driver Registration & Documents | Driver Onboarding | 390x844 pt | Vehicle info, license upload, and background check | `DRV-AUTH-01` | "Submit Application" |
| `DRV-DASH-01` | Driver Shift Dashboard | Driver Ops | 390x844 pt | Online/offline switch, $142.50 earnings, completed trips, radar | `DRV-AUTH-01` | Toggle "ONLINE" |
| `DRV-REQ-01` | 15s Radial Dispatch Offer | Driver Ops | 390x844 pt | 15s countdown ring, $12.50 payout, pickup/dropoff route | `DRV-DASH-01` | "Accept Delivery Offer" |
| `DRV-PICK-01` | Restaurant Pickup Verification | Driver Ops | 390x844 pt | Kitchen arrival confirmation and order item verification | `DRV-REQ-01` | "Confirm Order Pickup" |
| `DRV-NAV-01` | Turn-by-Turn GPS Navigation HUD | Driver Ops | 390x844 pt | "In 200 ft Turn Right on Orange Ave" and customer dropoff note | `DRV-PICK-01` | "Arrived at Customer" |
| `DRV-COMP-01` | Doorstep Proof of Delivery | Driver Ops | 390x844 pt | Camera photo capture viewfinder and signature pad | `DRV-NAV-01` | "Complete Delivery" |
| `DRV-EARN-01` | Courier Earnings & Payout History | Driver Ops | 390x844 pt | Weekly summary, completed trip ledger, and instant cash-out | `DRV-DASH-01` | "Cash Out Now" |
| `HOME-01-LOADING` | Home Skeleton Loader | Customer Core | 390x844 pt | Shimmer placeholder loading state for home feed | `HOME-01` | Automatic dismiss |
| `SRCH-01-EMPTY` | Search No Results | Customer Search | 390x844 pt | Friendly empty state with popular dish suggestions | `SRCH-01` | "Browse Top Rated" |
| `CART-01-EMPTY` | Empty Feast Cart | Customer Checkout | 390x844 pt | Empty cart illustration with "Start Browsing" CTA | `CART-01` | "Explore Menu" |
| `AUTH-01-ERROR` | Form Validation Error | Customer Auth | 390x844 pt | Inline error highlights and validation recovery | `AUTH-01` | "Fix Errors" |
| `CHECK-01-RETRY`| Payment Retry Sheet | Customer Checkout | 390x844 pt | Card decline recovery with alternative payment selector | `CHECK-01` | "Try Another Method" |

---

## 3. Proposed Figma Canvas Layout

The official Figma design file (`bNSKseBgPp7vjoK0wszJwA`) is structured across nine dedicated pages:

- **Page 00**: `00 — Cover & Index`
- **Page 01**: `01 — Research & Product Architecture`
- **Page 02**: `02 — Foundations`
- **Page 03**: `03 — Components`
- **Page 04**: `04 — Assets`
- **Page 05**: `05 — Customer App`
- **Page 06**: `06 — Delivery Partner App`
- **Page 07**: `07 — Prototype Flows`
- **Page 08**: `08 — Specifications & Handoff`
