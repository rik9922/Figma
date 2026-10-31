# Screen Architecture & Navigation Specification: Crust & Q

## 1. Executive Summary & Product Objective
`crust-and-q` is a premier food order delivery mobile application for a renowned US restaurant chain famous for artisanal wood-fired crusts (pizza) and slow-smoked craft BBQ (steaks, ribs, burgers). The app delivers a high-speed, appetite-inducing ordering experience across iOS and Android with support for both authenticated users and guest discovery, combined with an integrated delivery driver operational flow and real-time bi-directional Google Maps tracking.

- **Design Direction**: "Char & Crust" (Deep smoked cast-iron `#141312`, warm hearth `#26221E`, flame ember orange `#FF5C1A`, golden crust `#F2A93B`).
- **Viewport**: Canonical iPhone 16 Pro (`393 × 852 pt`) with adaptive Android Material 3 parity (`412 × 915 dp`).
- **Ergonomics**: Minimum 44×44 pt touch targets across all categories, keypad cells, bottom tabs, and delivery triggers.

---

## 2. Complete Screen & State Inventory

| Screen ID | Screen Name | Flow / Journey | Viewport | Primary Purpose | Entry Point | Primary Action |
|---|---|---|---|---|---|---|
| `ONB-01` | Splash & Sign In | Authentication | 393×852 | Brand intro, Email/Password login, Remember me, Guest bypass | App Launch | Tap "Sign In" or "Guest" |
| `AUTH-01` | Sign Up Screen | Registration | 393×852 | User registration form (Name, Phone, Email, Password, Confirm) | `ONB-01` Link | Tap "Sign Up" (→ `ONB-01`) |
| `GUEST-01` | Guest Checkout Modal | Auth Intercept | 393×852 | Prompts guest to Sign In or Sign Up to finalize order | Cart Checkout | Tap "Sign In to Order" |
| `HOME-01` | Home Delivery Hub | Core Ordering | 393×852 | Location header, search, 5-card hero slider, categories, 2-row recommended grid, 2-tab floating nav | `ONB-01` / Launch | Tap Dish `+ Add` or Category |
| `LOC-01` | Address Selection Sheet | Location Flow | 393×852 | Device GPS toggle, saved addresses (Home, Office), manual search | `HOME-01` Header | Select address / Save |
| `MENU-01` | Full Menu Catalog | Discovery | 393×852 | Comprehensive categorized menu (Steak, Pizza, Burger, BBQ, Sides) | `HOME-01` "See All" | Tap Category / Dish |
| `DISH-01` | Dish Customization Modal | Customization | 393×852 | Dish photo, crust selection, sauce choices, toppings, steak doneness | `HOME-01` / `MENU-01` | Tap "Add to Order" |
| `CART-01` | Cart & Checkout Screen | Checkout & Pay | 393×852 | Itemized cart, promo code, tip selector, bill breakdown, payment method | Floating Cart Pill | Tap "Place Order" |
| `ORDER-SUCC-01` | Order Confirmation Screen | Feedback | 393×852 | Celebratory confirmation, Order ID `#CQ-8492`, arrival timer | `CART-01` Submit | Tap "Track Order Live" |
| `TRACK-01` | Customer Live Google Maps Tracking | Real-Time Map | 393×852 | Live map tracking with driver vehicle marker, route polyline, ETA, driver card | `ORDER-SUCC-01` / `HIST-01` | Call / Chat Driver |
| `HIST-01` | Order History Hub | Orders Management | 393×852 | Active orders (live progress) and past orders with reorder CTA | Bottom Nav [History] | Tap "Reorder" / Track |
| `DRV-AUTH-01` | Driver Dashboard & Shift Toggle | Driver Flow | 393×852 | Online / Offline status toggle, shift earnings, completed trips | Driver App Launch | Toggle "Go Online" |
| `DRV-01` | Order Dispatch & Kitchen Pickup | Driver Pickup | 393×852 | Incoming order card, pickup counter, item checklist verification | `DRV-AUTH-01` Dispatch | Swipe "Confirm Pickup" |
| `DRV-02` | Reverse Live Google Maps Navigation | Driver Routing | 393×852 | Turn-by-turn navigation overlay, route polyline, customer notes, call customer | `DRV-01` Confirmation | Tap "I Have Arrived" |
| `DRV-03` | Proof of Delivery & Completion | Driver Fulfillment | 393×852 | Contactless photo capture / signature verification, completion trigger | `DRV-02` Arrival | Tap "Complete Delivery" |

---

## 3. Comprehensive State & Edge Case Coverage

Every production screen defines explicit visual treatments for secondary and error states:

| State ID | Parent Screen | State Type | Visual & Ergonomic Treatment |
|---|---|---|---|
| `HOME-01-LOADING` | `HOME-01` | Loading | Pulse shimmer skeleton across hero carousel, category pills, and recommended cards |
| `HIST-01-EMPTY` | `HIST-01` | Empty State | "No past orders yet" with custom smoking grill illustration and "Explore Menu" CTA |
| `AUTH-01-ERROR` | `AUTH-01` | Error State | Field validation error (e.g. password mismatch or existing email) with crimson highlight |
| `HOME-01-OFFLINE` | `HOME-01` | Offline Warning | Network disconnected banner with cached menu view and disabled cart checkout |

---

## 4. Screen-to-Screen Navigation Matrix

```mermaid
flowchart TD
    subgraph AUTH_FLOW["Authentication & Onboarding"]
        ONB01["ONB-01 Splash & Sign In"] -->|Tap 'Sign Up'| AUTH01["AUTH-01 Sign Up Form"]
        AUTH01 -->|Submit Valid Form| ONB01
        ONB01 -->|Sign In or Guest| HOME01["HOME-01 Home Delivery Hub"]
    end

    subgraph ORDER_DISCOVERY["Discovery & Customization"]
        HOME01 -->|Tap Location Header| LOC01["LOC-01 Address Bottom Sheet"]
        LOC01 -->|Select Address| HOME01
        
        HOME01 -->|Tap 'See All' / Category| MENU01["MENU-01 Full Menu Catalog"]
        HOME01 -->|Tap Dish Card| DISH01["DISH-01 Customization Modal"]
        MENU01 -->|Tap Dish Card| DISH01
        
        DISH01 -->|Add to Order| HOME01
        DISH01 -->|Add to Order| MENU01
    end

    subgraph CHECKOUT_AND_TRACKING["Checkout & Live Tracking"]
        HOME01 -->|Tap Floating Cart Bar| CART01["CART-01 Cart & Checkout"]
        MENU01 -->|Tap Floating Cart Bar| CART01
        
        CART01 -->|Checkout as Guest| GUEST01["GUEST-01 Guest Auth Modal"]
        GUEST01 -->|Sign In / Sign Up| ONB01
        
        CART01 -->|Place Order (User)| ORDER01["ORDER-SUCC-01 Confirmation"]
        ORDER01 -->|Tap 'Track Order'| TRACK01["TRACK-01 Live Google Maps Tracking"]
        
        HOME01 <-->|Bottom Nav: History| HIST01["HIST-01 Order History Hub"]
        HIST01 -->|Tap Active Order| TRACK01
        HIST01 -->|Tap 'Reorder'| CART01
    end

    subgraph DRIVER_OPERATIONS["Delivery Driver Ecosystem"]
        DRVAUTH["DRV-AUTH-01 Driver Shift Hub"] -->|Accept Dispatch| DRV01["DRV-01 Kitchen Pickup"]
        DRV01 -->|Swipe 'Order Picked Up'| DRV02["DRV-02 Turn-by-Turn Navigation"]
        DRV02 -->|Tap 'I Have Arrived'| DRV03["DRV-03 Proof of Delivery"]
        DRV03 -->|Complete Delivery| DRVAUTH
    end
```

---

## 5. Motion & Animation Specifications

| Animation ID | Source Screen | Destination | Trigger | Duration | Easing / Physics | Visual Transition Behavior | Reduced-Motion Alternative |
|---|---|---|---|---|---|---|---|
| `MOT-01` | `ONB-01` | `AUTH-01` | Tap "Sign Up" | 320ms | `ease-out` (Smart Animate) | Push from right; form fields fade and slide up (+8px Y) | Instant transition 150ms |
| `MOT-02` | `HOME-01` | `LOC-01` | Tap Header Address | 300ms | Spring `(mass: 1, stiffness: 220, damping: 24)` | Address sheet slides up from bottom with 50% dark backdrop blur | Standard slide without blur |
| `MOT-03` | `HOME-01` | `MENU-01` | Tap "See All" | 350ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Shared element transition; category bar docks to top sticky header | Push transition from right |
| `MOT-04` | `HOME-01` | Cart Bar | Tap `+ Add` on Dish | 250ms | Spring `(mass: 1, stiffness: 300, damping: 20)` | Floating cart bar scales up (0.95 → 1.0) and badge pulses with ember glow | Instant cart appearance |
| `MOT-05` | `TRACK-01` | Driver Marker | Live GPS Stream | 2000ms | Loop `ease-out` | Concentric radar pulse rings expand outward from vehicle pin | Static vehicle pin |
| `MOT-06` | `DRV-01` | `DRV-02` | Swipe "Picked Up" | 400ms | `cubic-bezier(0.2, 0, 0, 1)` | Screen slides into full-screen Google Maps navigation with turn HUD | Crossfade transition |

---

## 6. Proposed Figma Canvas Layout (8-Page Architecture)

```text
Figma File: E65NxrHoQQXipS7twBs9sl (Crust & Q)
├── 00 Cover & Project Overview       # Title, restaurant brand story, platform targets (iOS & Android)
├── 01 Visual Research & References   # Benchmark boards, food photography styling, "Char & Crust" palette
├── 02 User Flows & Architecture      # Screen inventory, Mermaid flow diagrams, connection matrix
├── 03 Design Exploration            # Hero carousel exploration, dish card depth, typography tests
├── 04 Approved UI Screens           # Production frames arranged left-to-right:
│                                     #   - Customer Onboarding: ONB-01, AUTH-01
│                                     #   - Ordering Hub: HOME-01, LOC-01, MENU-01
│                                     #   - Customization & Cart: DISH-01, CART-01, GUEST-01
│                                     #   - Fulfillment: ORDER-SUCC-01, TRACK-01, HIST-01
│                                     #   - Driver Partner: DRV-AUTH-01, DRV-01, DRV-02, DRV-03
├── 05 Components & Design System    # Master food cards, category pills, search bar, bottom nav, badges
├── 06 Prototype & Interaction       # Smart animate connections & transitions
└── 07 Ready for Development         # Token handoff specs, layout parameters
```
