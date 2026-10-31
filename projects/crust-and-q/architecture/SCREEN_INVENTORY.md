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
| `GUEST-01` | Guest Checkout Modal | Auth Intercept | Guest | Intercepts guest checkout: prompts Sign In / Sign Up to complete order | Cart Checkout | `ONB-01`, `AUTH-01` | "Sign In to Order", "Sign Up", "Keep Browsing" | Ready for Design |
| `HOME-01` | Home Delivery Hub | Core Ordering | Customer / Guest | Location header, search, 5-card carousel, categories, 2-row recommended grid, 2-tab bottom nav | `ONB-01` | `LOC-01`, `MENU-01`, `HIST-01` | Search, Carousel, Filter, Add to Cart, Bottom Nav | Ready for Design |
| `LOC-01` | Address Selection Sheet | Location Flow | Customer / Guest | GPS toggle, Saved addresses (Home, Office), search location manually | `HOME-01` Header | `HOME-01` | Select address, Add address | Ready for Design |
| `MENU-01` | Full Menu Catalog | Discovery | Customer / Guest | All categorized dishes (Steak, Pizza, Burger, BBQ, Sides) with filters | `HOME-01` "See All" | `HOME-01` | Filter category, Add to cart | Ready for Design |
| `DISH-01` | Dish Customization Modal | Customization | Customer / Guest | Dish detail, crust options, meat doneness, toppings, special instructions | `HOME-01` / `MENU-01` | `HOME-01` / `CART-01` | Select crust, toppings, "Add to Order" | Ready for Design |
| `CART-01` | Cart & Checkout Screen | Checkout & Pay | Customer / Guest | Itemized order review, address summary, promo code, tip, payment method | Floating Cart Pill | `ORDER-SUCC-01`, `GUEST-01`| Stepper `[- 1 +]`, "Place Order" | Ready for Design |
| `ORDER-SUCC-01` | Order Confirmation Screen | Feedback | Customer | Celebratory confirmation, Order ID `#CQ-8492`, estimated arrival time | `CART-01` Place Order | `TRACK-01`, `HOME-01` | "Track Order Live", "Back to Home" | Ready for Design |
| `TRACK-01` | Customer Live Google Maps Tracking | Real-Time Map | Customer | Full-bleed Google Map with live driver marker, route polyline, ETA, driver card | `ORDER-SUCC-01` / `HIST-01` | `HOME-01` | Call Driver, Chat Driver, Share | Ready for Design |
| `HIST-01` | Order History Hub | Orders Management | Customer | Active orders tracking card and past orders with reorder CTA | Bottom Nav [History]| `HOME-01`, `TRACK-01` | "Reorder", "Track Live" | Ready for Design |
| `DRV-AUTH-01` | Driver Dashboard & Shift Toggle | Operations | Delivery Driver | Online / Offline status toggle, shift earnings, completed trips, dispatch radar | Driver App Launch | `DRV-01` | "Go Online", "Go Offline" | Ready for Design |
| `DRV-01` | Order Dispatch & Kitchen Pickup | Pickup Flow | Delivery Driver | Incoming order card, pickup counter, item checklist verification | `DRV-AUTH-01` Dispatch | `DRV-02` | Swipe "Confirm Pickup & Start" | Ready for Design |
| `DRV-02` | Reverse Live Google Maps Navigation | Routing | Delivery Driver | Turn-by-turn navigation overlay, route polyline, customer notes, call customer | `DRV-01` Confirmation | `DRV-03` | "I Have Arrived", Call Customer | Ready for Design |
| `DRV-03` | Proof of Delivery & Completion | Fulfillment | Delivery Driver | Contactless photo capture / signature verification, completion trigger | `DRV-02` Arrival | `DRV-AUTH-01` | "Complete Delivery" | Ready for Design |

---

## 2. Secondary & Edge States

| State ID | Parent Screen | State Type | Purpose & Handling | Status |
|---|---|---|---|---|
| `HOME-01-LOADING` | `HOME-01` | Loading | Pulse shimmer skeleton across carousel, category bar, and food cards | Ready for Design |
| `HIST-01-EMPTY` | `HIST-01` | Empty State | "No past orders yet" with smoking grill graphic and "Explore Menu" CTA | Ready for Design |
| `AUTH-01-ERROR` | `AUTH-01` | Error State | Field validation error highlight and helper feedback | Ready for Design |
| `HOME-01-OFFLINE` | `HOME-01` | Offline Warning | Disconnected warning banner with cached offline menu | Ready for Design |
