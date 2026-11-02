# Product Requirements Document (PRD): Crust & Q

## 1. Product Overview & Strategic Objectives

- **Product Name**: Crust & Q
- **Product Category**: Fast-Casual Restaurant Food Ordering & Operational Delivery Platform
- **Target Market**: United States (Initial flagship market: Orlando, Florida metropolitan area)
- **Primary Business Objective**: Connect hungry dine-at-home customers directly with Crust & Q's wood-fired craft pizza and slow-smoked artisanal BBQ through an appetite-driven, highly intuitive cross-platform mobile application, while equipping delivery partners with real-time dispatch and turn-by-turn navigation tools.
- **Value Proposition**: 
  1. *For Customers*: Eliminates third-party aggregator markups, provides interactive 7-step custom pizza creation, and delivers live daylight Google Maps GPS order tracking.
  2. *For Delivery Partners*: Transparent guaranteed earnings with 100% tip pass-through, clear 15-second radial dispatch offers, and frictionless doorstep photo proof of delivery.

---

## 2. Target Platforms & Viewport Constraints

- **Platform Architecture**: Cross-Platform Mobile Application (React Native with TypeScript)
- **Canonical Frame Dimensions**: **390 × 844 pt** (Apple iPhone 14/15/16 baseline)
- **Responsive Target**: **360 × 800 dp** (Google Android standard baseline)
- **Safe Area Insets**:
  - Top: **47 pt** (Dynamic Island / System Status Bar)
  - Bottom: **34 pt** (Home Indicator touch clearance)
- **Touch Target Ergonomics**: Minimum **44 × 44 pt** (iOS) and **48 × 48 dp** (Android); 48 × 48 pt used as unified design standard.
- **Theme Standard**: **Strictly Light Theme Only**. Warm Cream (`#FFF8F0`) ground, pure white (`#FFFFFF`) card surfaces, and Tomato Flame (`#D93B18`) action tokens. Zero dark mode surfaces.

---

## 3. User Personas & Pain Points

### Primary Persona: Sarah Jenkins (The Busy Dine-At-Home Foodie)
- **Role**: Customer (28, Senior Marketing Manager, Orlando, FL)
- **Goals**: Order high-quality craft dinner quickly after work, customize toppings seamlessly, and track the driver live to know exactly when to open the front door.
- **Pain Points**: Frustrated by inaccurate delivery ETAs on aggregators, confusing hidden fees, cold pizza crusts, and cluttered interfaces that force sign-in before browsing.

### Secondary Persona: Marcus Vance (The Dedicated Delivery Partner)
- **Role**: Delivery Partner (32, Courier, 1,420 completed deliveries)
- **Goals**: Accept orders with clear earnings transparency, avoid long kitchen waits, navigate directly to customer doorsteps with clear gate/dropoff instructions, and collect tips reliably.
- **Pain Points**: Lack of payout transparency on incoming offers, clunky navigation handoffs, and customer disputes over dropped-off orders.

---

## 4. Core Functional Modules & Scope

### 4.1 Customer Experience Scope
1. **Module A — Onboarding & Auth**: Splash reveal, email/password login, "Remember Me", account creation with US phone formatting, password recovery (`AUTH-02`), and guest checkout intercept sheet (`GUEST-01`).
2. **Module B — Home & Discovery**: Delivery location header, search entry with voice mic and veg toggle, 5-dot hero promotion carousel, 3D porcelain category plates with active red underline, 2 full rows of recommended dish cards with discount tags and green rating badges, floating sticky cart bar, and 2-option floating navigation dock (Delivery & History).
3. **Module C — Location & Address Management**: GPS permission explanation, "Device location not enabled" banner with coral "Enable" CTA, saved address bottom sheet (Home, Office), and manual search.
4. **Module D — Menu & Category Catalog**: Full restaurant menu catalog with category tabs, dish item cards with price, badges, and ADD+ button, and dedicated Steak & Craft BBQ category exploration.
5. **Module E — Food Customization & 7-Step Pizza Builder**: Interactive dish detail modal (patty doneness, add-ons, quantity stepper) and dedicated 7-stage custom pizza builder (1. Size, 2. Crust, 3. Sauce, 4. Cheese, 5. Meats, 6. Veggies/Toppings, 7. Review & Add).
6. **Module F — Cart & Promotions**: Itemized feast cart drawer with quantity steppers, `CRUST50` promo voucher with mathematically reconciled discount deductions, driver partner tip selector pills ($3, $4, $5, Custom), and transparent fee breakdown.
7. **Module G — Checkout & Payment**: Address confirmation, delivery instructions note, payment method selection (Apple Pay, Card), and frictionless order submission.
8. **Module H — Live Google Maps Tracking**: Order confirmed celebration, daylight Lake Eola / Orlando cartography, royal blue GPS polyline, live driver marker, ETA card (reconciled times: 6:01 PM status, 14 min ETA -> 6:15 PM delivery), 4-stage step tracker, and driver call/message card.
9. **Module I — Order History**: Active & past order receipts with 1-click reorder.
10. **Module J — Customer Profile**: Account overview, personal details, address manager, and Pitmaster Rewards points balance.

### 4.2 Delivery Partner Experience Scope
1. **Module A — Driver Auth & Onboarding**: Driver login, vehicle details, driver's license upload, and verification status tracking.
2. **Module B — Shift Dashboard**: Online/offline toggle, today's earnings ($142.50), completed trips (9), active hours (4.2h), and radar search indicator.
3. **Module C — Incoming 15-Second Dispatch Radar**: 15s radial countdown ring (active at 12s), guaranteed earnings ($12.50 with $4.00 tip included), pickup & dropoff route details, Accept and Decline CTAs.
4. **Module D — Restaurant Pickup & Customer Navigation**: Turn-by-turn navigation HUD ("In 200 ft Turn Right on Orange Ave"), customer gate/delivery notes, and 1-tap customer call button.
5. **Module E — Proof of Delivery**: Doorstep photo capture viewfinder with reticle corners, GPS confirmation badge, and digital signature pad.

---

## 5. Non-Functional, Accessibility & Quality Standards

- **WCAG 2.1 AA Compliance**: All text and critical UI elements must achieve a minimum mathematical contrast ratio of 4.5:1 against their backgrounds (Primary Text #292824 on #FFF8F0 achieves 14.01:1).
- **Zero Unicode Emojis**: All icons are 100% pure vector SVG geometry from official Lucide vector paths.
- **Mathematical Accuracy**: All pricing, discounts, taxes, tips, and totals must calculate with zero discrepancy.
