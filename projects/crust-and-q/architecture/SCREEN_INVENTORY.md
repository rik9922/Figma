# Complete Screen & State Inventory: Crust & Q

**Target Figma File**: [`E65NxrHoQQXipS7twBs9sl`](https://www.figma.com/design/E65NxrHoQQXipS7twBs9sl)  
**Active Page**: `Page 1` (`0:1`)  
**Design Direction**: "Char & Crust" (Smoked cast-iron `#141312`, warm hearth `#26221E`, flame ember orange `#FF5C1A`, golden crust `#F2A93B`)  
**Target Viewport**: Canonical Mobile (`393 × 852 pt` iOS / `412 × 915 dp` Android)

---

## 1. Primary Screens & Modal States

| Screen ID | Screen Name | Feature / Module | User Role | Purpose | Entry Point | Exit Point | Actions | Status |
|---|---|---|---|---|---|---|---|---|
| `ONB-01` | Splash & Sign In | Authentication | All / Guest | Brand reveal, Email/Password login, Remember me, Guest bypass | App Launch | `HOME-01`, `AUTH-01` | "Sign In", "Continue as Guest", "Sign Up" | Ready for Design |
| `AUTH-01` | Sign Up Screen | Authentication | New Customer | First Name, Last Name, Phone, Email, Password, Confirm Password | `ONB-01` Link | `ONB-01` | Input form, "Sign Up" | Ready for Design |
| `HOME-01` | Home Delivery Hub | Core Ordering | Customer / Guest | Location header, search, 5-card carousel, categories, 2-row recommended grid, 2-tab bottom nav | `ONB-01` | `LOC-01`, `MENU-01`, `HIST-01` | Search, Carousel, Filter, Add to Cart, Bottom Nav | Ready for Design |
| `LOC-01` | Address Selection Sheet | Location Flow | Customer / Guest | GPS toggle, Saved addresses (Home, Office), search location manually | `HOME-01` Header | `HOME-01` | Select address, Add address | Ready for Design |
| `MENU-01` | Full Menu Catalog | Discovery | Customer / Guest | All categorized dishes (Steak, Pizza, Burger, BBQ, Sides) with filters | `HOME-01` "See All" | `HOME-01` | Filter category, Add to cart | Ready for Design |
| `GUEST-01` | Guest Checkout Modal | Auth Intercept | Guest | Intercepts guest checkout: prompts Sign In / Sign Up to complete order | Cart Checkout | `ONB-01`, `AUTH-01` | "Sign In to Order", "Sign Up", "Keep Browsing" | Ready for Design |
| `HIST-01` | Order History Screen | Past Orders | Customer | Itemized past orders with dates, items, amounts, and reorder CTA | Bottom Nav [History]| `HOME-01` | "Reorder", "View Receipt" | Ready for Design |

---

## 2. Secondary & Edge States

| State ID | Parent Screen | State Type | Purpose & Handling | Status |
|---|---|---|---|---|
| `HOME-01-LOADING` | `HOME-01` | Loading | Pulse shimmer skeleton across carousel, category bar, and food cards | Ready for Design |
| `HIST-01-EMPTY` | `HIST-01` | Empty State | "No past orders yet" with smoking grill graphic and "Explore Menu" CTA | Ready for Design |
| `AUTH-01-ERROR` | `AUTH-01` | Error State | Field validation error highlight and helper feedback | Ready for Design |
| `HOME-01-OFFLINE` | `HOME-01` | Offline Warning | Disconnected warning banner with cached offline menu | Ready for Design |
