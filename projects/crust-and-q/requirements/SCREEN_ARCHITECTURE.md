# Screen Architecture & Navigation Specification: crust-and-q

## 1. Executive Summary & Product Objective

`crust-and-q` is a premier food ordering and delivery mobile application for an artisanal wood-fired crust (pizza) and craft BBQ restaurant chain operating in the United States. The platform supports both Customer ordering and Delivery Partner operational workflows with bi-directional real-time cartography.

---

## 2. Complete Screen & State Inventory

| Screen ID | Screen Name | Module / Flow | Viewport | Primary Purpose | Entry Point | Primary Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ONB-01` | Splash & Sign In | Customer Auth | 390x844 pt | Brand entry, email/password login, remember me, guest bypass | App Launch | Tap "Sign In" / "Continue as Guest" |
| `AUTH-01` | Create Account Form | Customer Auth | 390x844 pt | First/last name, phone, email, password registration | `ONB-01` | Tap "Create Account" |
| `GUEST-01` | Guest Login Intercept Sheet | Guest Flow | 390x844 pt | Modal gating guest users at checkout while preserving cart | Cart Checkout | Tap "Sign In" / "Sign Up" |
| `HOME-01` | Delivery & Discovery Hub | Core Customer | 390x844 pt | Location header, Delivery/History tabs, search, 5-dot carousel, categories, recommended shelves | `ONB-01` / `AUTH-01` | Browse, tap dish, add to cart |
| `LOC-01` | Address Selection Sheet | Location | 390x844 pt | Saved address bottom sheet modal with Home/Office cards and GPS prompt | `HOME-01` Header | Select address / Search manually |
| `MENU-01` | Full Restaurant Menu Catalog | Menu Catalog | 390x844 pt | Comprehensive food catalog with active category filters | `HOME-01` "Full Menu" | Filter dishes, tap item |
| `CAT-01` | Dedicated Category (Pizza) | Category Flow | 390x844 pt | Category view with back nav, active category bar, and recommended pizzas | `HOME-01` Category Tab | Browse category dishes |
| `SRCH-01` | Search & Dish Discovery | Search | 390x844 pt | Search bar with recent queries, auto-suggestions, and filter chips | `HOME-01` Search Bar | Search dishes |
| `DISH-01` | Dish Customization Modal | Customization | 390x844 pt | Dish photo, crust selection, smokehouse toppings, quantity adjuster | Food Card Tap | Tap "Add to Feast" |
| `PIZZA-01` | 7-Step Build Your Own Pizza | Customization | 390x844 pt | Dedicated multi-step wizard (Size, Crust, Sauce, Cheese, Meats, Veggies, Review) | Carousel CTA | Tap "Add Custom Pie" |
| `CART-01` | Cart & Order Review | Cart | 390x844 pt | Itemized list, promo code (`CRUST20`), driver tip selector, bill summary | Sticky Cart / Header | Tap "Proceed to Checkout" |
| `CHECK-01` | Itemized Checkout & Payment | Checkout | 390x844 pt | Address confirmation, delivery notes, Apple Pay selection, total breakdown | `CART-01` Checkout | Tap "Place Order" |
| `ORDER-SUCC-01` | Order Placed Confirmation | Order Lifecycle | 390x844 pt | Wood-fired kitchen confirmation with order #CQ-8924 | `CHECK-01` Place Order | Tap "Track Live on Google Maps" |
| `TRACK-01` | Live Customer Google Maps Tracking | Order Lifecycle | 390x844 pt | Real daylight Orlando Google Maps with Lake Eola, vehicle marker, stepper, and driver info | `ORDER-SUCC-01` | Track driver live / Call driver |
| `HIST-01` | Order History & Reorder | Customer Account | 390x844 pt | Past orders, receipt view, reorder 1-tap action | `HOME-01` Segment Tab | Tap "Reorder" / View details |
| `PROF-01` | Customer Profile & Settings | Customer Account | 390x844 pt | User profile details, saved addresses, notification switches | `HOME-01` Avatar Tap | Edit profile |
| `DRV-AUTH-01` | Driver Login & Approval | Driver Partner | 390x844 pt | Driver credentials and vehicle onboarding portal | Role Switch | Tap "Driver Sign In" |
| `DRV-DASH-01` | Driver Shift Hub & Metrics | Driver Partner | 390x844 pt | Online/offline toggle, today's earnings, completed trips, online hours | `DRV-AUTH-01` | Toggle shift online |
| `DRV-REQ-01` | Incoming Dispatch Radar Card | Driver Partner | 390x844 pt | 15-second radar alert for pickup with payout, distance, and accept CTA | `DRV-DASH-01` | Tap "Accept Delivery Dispatch" |
| `DRV-NAV-01` | Driver Live Turn Navigation | Driver Partner | 390x844 pt | Daylight Google navigation with green turn card and customer instructions | `DRV-REQ-01` Accept | Tap "I Have Arrived" |
| `DRV-COMP-01` | Proof of Delivery & Payout | Driver Partner | 390x844 pt | Delivery completion confirmation with tip breakdown and return to hub | `DRV-NAV-01` Arrive | Tap "Complete Delivery" |

---

## 3. Comprehensive State & Edge Case Coverage

| State ID | Parent Screen | State Type | Purpose & Handling |
| :--- | :--- | :--- | :--- |
| `HOME-01-LOADING` | `HOME-01` | Loading | Pulse shimmer skeleton across hero carousel, category plates, and dish cards |
| `SRCH-01-EMPTY` | `SRCH-01` | Empty State | Zero-search results state with artisanal recommendations |
| `CART-01-EMPTY` | `CART-01` | Empty State | Empty feast basket illustration with "Explore Smokehouse Menu" button |
| `AUTH-01-ERROR` | `AUTH-01` | Error State | Field validation error highlight with descriptive guidance |
| `CHECK-01-RETRY` | `CHECK-01` | Failure State | Payment retry dialog preserving cart contents and address selections |

---

## 4. Screen-to-Screen Navigation Matrix

```mermaid
flowchart TD
    ONB01["ONB-01 Splash & Sign In"] -->|Tap 'Continue as Guest'| HOME01["HOME-01 Home Hub"]
    ONB01 -->|Tap 'Sign In'| HOME01
    ONB01 -->|Tap 'Sign Up'| AUTH01["AUTH-01 Create Account"]
    AUTH01 -->|Complete Reg| ONB01

    HOME01 -->|Tap Location Header| LOC01["LOC-01 Saved Address Sheet"]
    HOME01 -->|Tap 'Full Menu'| MENU01["MENU-01 Full Catalog"]
    HOME01 -->|Tap Category Chip| CAT01["CAT-01 Category View"]
    HOME01 -->|Tap Dish Card| DISH01["DISH-01 Customization Modal"]
    HOME01 -->|Tap Carousel CTA| PIZZA01["PIZZA-01 Build Your Own Pizza"]
    HOME01 -->|Tap History Tab| HIST01["HIST-01 Order History"]
    HOME01 -->|Tap Profile Avatar| PROF01["PROF-01 Customer Profile"]

    DISH01 -->|Tap 'Add to Feast'| CART01["CART-01 Feast Cart"]
    PIZZA01 -->|Complete 7 Steps| CART01
    CART01 -->|Tap Checkout (Guest)| GUEST01["GUEST-01 Auth Intercept"]
    GUEST01 -->|Sign In / Up| CHECK01["CHECK-01 Checkout"]
    CART01 -->|Tap Checkout (Auth)| CHECK01

    CHECK01 -->|Tap 'Place Order'| ORDERSUCC01["ORDER-SUCC-01 Order Placed"]
    ORDERSUCC01 -->|Tap 'Track Live'| TRACK01["TRACK-01 Live Google Maps"]

    DRVAUTH01["DRV-AUTH-01 Driver Login"] --> DRVDASH01["DRV-DASH-01 Driver Hub"]
    DRVDASH01 -->|Incoming Dispatch| DRVREQ01["DRV-REQ-01 Radar Alert"]
    DRVREQ01 -->|Accept (15s)| DRVNAV01["DRV-NAV-01 Turn Navigation"]
    DRVNAV01 -->|Tap 'I Have Arrived'| DRVCOMP01["DRV-COMP-01 Delivery Proof"]
    DRVCOMP01 -->|Complete| DRVDASH01
```

---

## 5. Proposed Figma Canvas Layout

The screens are arranged horizontally by complete user journeys on the canonical canvas:

| Section | Artboard Name | Width x Height | Screen IDs Included |
| :--- | :--- | :--- | :--- |
| **Section 01** |  | 960 x 1020 | ,  |
| **Section 02** |  | 960 x 1020 | ,  |
| **Section 03** |  | 500 x 1020 |  |
| **Section 04** |  | 960 x 1020 | ,  |
| **Section 05** |  | 960 x 1020 | ,  |
| **Section 06** |  | 960 x 1020 | ,  |
| **Section 07** |  | 1420 x 1020 | , ,  |
