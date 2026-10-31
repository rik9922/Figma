# Screen Architecture & Navigation Specification: Crust & Q

## 1. Executive Summary & Product Objective
`crust-and-q` is a premier food order delivery mobile application for a renowned US restaurant chain famous for artisanal wood-fired crusts (pizza) and slow-smoked craft BBQ (steaks, ribs, burgers). The app delivers a high-speed, appetite-inducing ordering experience across iOS and Android with support for both authenticated users and guest discovery.

- **Design Direction**: "Char & Crust" (Deep smoked cast-iron `#141312`, warm toasted hearth `#26221E`, flame ember orange `#FF5C1A`, golden crust `#F2A93B`).
- **Viewport**: Canonical iPhone 16 Pro (`393 × 852 pt`) with adaptive Android Material 3 parity (`412 × 915 dp`).
- **Ergonomics**: Minimum 44×44 pt touch targets across all categories, keypad cells, and bottom tabs.

---

## 2. Complete Screen & State Inventory

| Screen ID | Screen Name | Flow / Journey | Viewport | Primary Purpose | Entry Point | Primary Action |
|---|---|---|---|---|---|---|
| `ONB-01` | Splash & Sign In | Authentication | 393×852 | Brand intro, Email/Password login, Remember me, Guest bypass | App Launch | Tap "Sign In" or "Guest" |
| `AUTH-01` | Sign Up Screen | Authentication | 393×852 | User registration form (Name, Phone, Email, Password) | `ONB-01` Link | Tap "Sign Up" (→ `ONB-01`) |
| `HOME-01` | Home Delivery Hub | Core Ordering | 393×852 | Location header, search, 5-card hero slider, categories, 2-row recommended grid, 2-tab floating nav | `ONB-01` / Launch | Tap Dish `+ Add` or Category |
| `LOC-01` | Address Selector Sheet | Location Flow | 393×852 | Device GPS toggle, saved addresses (Home, Office), manual search | `HOME-01` Header | Select address / Save |
| `MENU-01` | Full Menu Catalog | Discovery | 393×852 | Comprehensive categorized menu (Steak, Pizza, Burger, BBQ, Sides) | `HOME-01` "See All" | Tap Category / Dish |
| `GUEST-01` | Guest Checkout Modal | Auth Intercept | 393×852 | Prompts guest to Sign In or Sign Up to finalize order | Cart Checkout | Tap "Sign In to Order" |
| `HIST-01` | Order History Screen | Past Orders | 393×852 | Itemized past delivery orders with delivery status and reorder CTA | Bottom Nav [History] | Tap "Reorder" |

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
    ONB01["ONB-01 Splash & Sign In"] -->|Tap 'Sign Up'| AUTH01["AUTH-01 Sign Up Form"]
    AUTH01 -->|Submit Valid Form| ONB01
    ONB01 -->|Valid Sign In or Guest| HOME01["HOME-01 Home Delivery Hub"]
    
    HOME01 -->|Tap Location Header| LOC01["LOC-01 Address Bottom Sheet"]
    LOC01 -->|Select Address| HOME01
    
    HOME01 -->|Tap 'See All' / 'Full Menu'| MENU01["MENU-01 Full Menu Catalog"]
    MENU01 -->|Select Category| MENU01
    
    HOME01 -->|Add Items + Checkout (Guest)| GUEST01["GUEST-01 Checkout Auth Modal"]
    GUEST01 -->|Tap Sign In| ONB01
    
    HOME01 <-->|Bottom Nav: History| HIST01["HIST-01 Order History"]
    HIST01 -->|Tap 'Reorder'| HOME01
```

---

## 5. Motion & Animation Specifications

| Animation ID | Source Screen | Destination | Trigger | Duration | Easing / Physics | Visual Transition Behavior | Reduced-Motion Alternative |
|---|---|---|---|---|---|---|---|
| `MOT-01` | `ONB-01` | `AUTH-01` | Tap "Sign Up" | 320ms | `ease-out` (Smart Animate) | Push from right; form fields fade and slide up (+8px Y) | Instant transition 150ms |
| `MOT-02` | `HOME-01` | `LOC-01` | Tap Header Address | 300ms | Spring `(mass: 1, stiffness: 220, damping: 24)` | Address sheet slides up from bottom with 50% dark backdrop blur | Standard slide without blur |
| `MOT-03` | `HOME-01` | `MENU-01` | Tap "See All" | 350ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Shared element transition; category bar docks to top sticky header | Push transition from right |
| `MOT-04` | `HOME-01` | Cart Bar | Tap `+ Add` on Dish | 250ms | Spring `(mass: 1, stiffness: 300, damping: 20)` | Floating cart bar scales up (0.95 → 1.0) and badge pulses with ember glow | Instant cart appearance |

---

## 6. Proposed Figma Canvas Layout (8-Page Architecture)

```text
Figma File: E65NxrHoQQXipS7twBs9sl (Crust & Q)
├── 00 Cover & Project Overview       # Title, restaurant brand story, platform targets (iOS & Android)
├── 01 Visual Research & References   # Benchmark boards, food photography styling, "Char & Crust" palette
├── 02 User Flows & Architecture      # Screen inventory, Mermaid flow diagrams, connection matrix
├── 03 Design Exploration            # Hero carousel exploration, dish card depth, typography tests
├── 04 Approved UI Screens           # Production frames arranged left-to-right (ONB, AUTH, HOME, LOC, MENU, GUEST, HIST)
├── 05 Components & Design System    # Master food cards, category pills, search bar, bottom nav, badges
├── 06 Prototype & Interaction       # Smart animate connections & transitions
└── 07 Ready for Development         # Token handoff specs, layout parameters
```
