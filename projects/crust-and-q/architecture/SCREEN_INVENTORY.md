# Screen Inventory: crust-and-q

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
| `CAT-01` | Dedicated Category Exploration (Pizza) | Customer | Category Browsing | `CONFIRMED` | 390x844 pt |
| `SRCH-01` | Live Search & Empty State | Customer | Search & Discovery | `PROPOSED` | 390x844 pt |
| `DISH-01` | Dish Customization Modal | Customer | Customization | `CONFIRMED` | 390x844 pt |
| `PIZZA-01` | Build Your Own Pizza 7-Step Builder | Customer | Product Feature | `CONFIRMED` | 390x844 pt |
| `CART-01` | Review Cart & Add-Ons | Customer | Cart Management | `CONFIRMED` | 390x844 pt |
| `CHECK-01` | Itemized Checkout & Tip Selector | Customer | Checkout | `CONFIRMED` | 390x844 pt |
| `ORDER-SUCC-01` | Order Placed Confirmation | Customer | Order Lifecycle | `CONFIRMED` | 390x844 pt |
| `TRACK-01` | Live Customer Google Maps Tracking | Customer | Delivery Tracking | `CONFIRMED` | 390x844 pt |
| `HIST-01` | Order History & Reorder | Customer | Account & History | `CONFIRMED` | 390x844 pt |
| `PROF-01` | Customer Profile & Saved Addresses | Customer | Profile | `PROPOSED` | 390x844 pt |
| `DRV-AUTH-01` | Delivery Partner Login & Verification | Partner | Partner Auth | `PROPOSED` | 390x844 pt |
| `DRV-DASH-01` | Partner Shift Dashboard & Metrics | Partner | Operational Hub | `PROPOSED` | 390x844 pt |
| `DRV-REQ-01` | Incoming Dispatch Request Radar | Partner | Dispatch Acceptance | `PROPOSED` | 390x844 pt |
| `DRV-NAV-01` | Driver Turn-by-Turn Navigation | Partner | Navigation | `CONFIRMED` | 390x844 pt |
| `DRV-COMP-01` | Proof of Delivery & Completion | Partner | Delivery Handoff | `PROPOSED` | 390x844 pt |

---

## State Variations & Edge Cases

| State ID | Parent Screen | State Description | Requirement Status |
| :--- | :--- | :--- | :--- |
| `HOME-01-LOADING` | `HOME-01` | Shimmer skeleton loading state for carousel and shelves | `PROPOSED` |
| `SRCH-01-EMPTY` | `SRCH-01` | Zero results state with suggested popular dishes | `PROPOSED` |
| `CART-01-EMPTY` | `CART-01` | Empty cart illustration with Browse Menu CTA | `PROPOSED` |
| `AUTH-01-ERROR` | `AUTH-01` | Inline form validation and credential mismatch error | `PROPOSED` |
