# Screen Inventory: Crust & Q

This document defines the canonical screen inventory and technical screen IDs for Crust & Q.

> [!NOTE]
> Requirement classifications:
> - `CONFIRMED`: Explicitly specified in the product brief.
> - `PROPOSED`: Standard mobile food delivery pattern recommended for flow completeness.
> - `TBD`: Requires business-owner operational or policy confirmation.

---

## Screen Inventory Table

| Screen ID | Screen Name | Role | Journey Stage | Requirement Status | Viewport |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `ONB-01` | Splash & Welcome Sign In | Customer | Authentication | `CONFIRMED` | 390x844 pt |
| `AUTH-01` | Create Account Registration | Customer | Authentication | `CONFIRMED` | 390x844 pt |
| `AUTH-02` | Forgot & Reset Password | Customer | Authentication | `PROPOSED` | 390x844 pt |
| `GUEST-01` | Guest Login Intercept Sheet | Customer | Guest Experience | `CONFIRMED` | 390x844 pt |
| `HOME-01` | Home Delivery & Discovery Hub | Customer | Core Discovery | `CONFIRMED` | 390x844 pt |
| `LOC-01` | Saved Address Selection Sheet | Customer | Location / Fulfillment | `CONFIRMED` | 390x844 pt |
| `MENU-01` | Full Restaurant Menu Catalog | Customer | Menu Browsing | `CONFIRMED` | 390x844 pt |
| `CAT-01` | Dedicated Category Exploration (Pizza / BBQ) | Customer | Category Browsing | `PROPOSED` | 390x844 pt |
| `SRCH-01` | Live Search & Empty State | Customer | Search & Discovery | `PROPOSED` | 390x844 pt |
| `DISH-01` | Dish Customization Modal | Customer | Customization | `CONFIRMED` | 390x844 pt |
| `PIZZA-01` | Build Your Own Pizza 7-Step Builder | Customer | Product Feature | `CONFIRMED` | 390x844 pt |
| `CART-01` | Review Cart & Add-Ons | Customer | Cart Management | `CONFIRMED` | 390x844 pt |
| `CHECK-01` | Itemized Checkout & Tip Selector | Customer | Checkout | `CONFIRMED` | 390x844 pt |
| `ORDER-SUCC-01` | Order Placed Confirmation | Customer | Order Lifecycle | `CONFIRMED` | 390x844 pt |
| `TRACK-01` | Live Customer Google Maps Tracking | Customer | Order Tracking | `CONFIRMED` | 390x844 pt |
| `HIST-01` | Order History & Receipts | Customer | Customer Account | `CONFIRMED` | 390x844 pt |
| `PROF-01` | Customer Profile & Loyalty Rewards | Customer | Customer Account | `CONFIRMED` | 390x844 pt |
| `DRV-AUTH-01` | Driver Login & Shift Access | Delivery Partner | Driver Authentication | `CONFIRMED` | 390x844 pt |
| `DRV-ONB-01` | Driver Onboarding & Document Verification | Delivery Partner | Driver Onboarding | `PROPOSED` | 390x844 pt |
| `DRV-DASH-01` | Driver Shift Hub & Live Status | Delivery Partner | Operational Core | `CONFIRMED` | 390x844 pt |
| `DRV-REQ-01` | 15s Radial Incoming Dispatch Radar | Delivery Partner | Dispatch & Orders | `CONFIRMED` | 390x844 pt |
| `DRV-PICK-01` | Restaurant Arrival & Pickup Verification | Delivery Partner | Restaurant Pickup | `PROPOSED` | 390x844 pt |
| `DRV-NAV-01` | Live Turn-by-Turn GPS Navigation HUD | Delivery Partner | Customer Drop-off | `CONFIRMED` | 390x844 pt |
| `DRV-COMP-01` | Doorstep Photo Proof of Delivery | Delivery Partner | Delivery Completion | `CONFIRMED` | 390x844 pt |
| `DRV-EARN-01` | Courier Earnings & Payout History | Delivery Partner | Earnings & Finance | `PROPOSED` | 390x844 pt |
| `HOME-01-LOADING` | Shimmer Skeleton Feed Loader | Customer | Core Discovery | `PROPOSED` | 390x844 pt |
| `SRCH-01-EMPTY` | Search No Results Fallback | Customer | Search & Discovery | `PROPOSED` | 390x844 pt |
| `CART-01-EMPTY` | Empty Feast Cart State | Customer | Cart Management | `PROPOSED` | 390x844 pt |
| `AUTH-01-ERROR` | Inline Field Error Recovery | Customer | Authentication | `PROPOSED` | 390x844 pt |
| `CHECK-01-RETRY` | Payment Decline & Alternative Selector | Customer | Checkout | `PROPOSED` | 390x844 pt |
