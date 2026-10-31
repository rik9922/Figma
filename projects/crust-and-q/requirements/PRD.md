# Product Requirements Document (PRD): Crust & Q

## 1. Project Overview & Business Objectives

- **Product Name**: Crust & Q (Food Chain Restaurant Delivery Platform)
- **Target Market**: United States
- **Brand Identity & Culinary Concept**: A high-growth US restaurant chain famous for signature artisanal wood-fired crusts (pizzas, calzones) and slow-smoked craft BBQ (steaks, ribs, brisket, gourmet smoked burgers).
- **Target Platform**: Cross-Platform Mobile Application (Canonical UI with native iOS & Android adaptations).
- **Primary Roles**:
  1. **User (Customer)**: Main ordering customer browsing dishes, customizing pizzas/steaks, managing delivery addresses, placing orders, and tracking live driver progress on Google Maps.
  2. **Delivery Boy (Delivery Agent / Driver)**: Operational delivery partner managing shifts, picking up orders at Crust & Q kitchen counters, and using turn-by-turn reverse Google Maps navigation to deliver orders.

---

## 2. Core Functional Requirements (Customer Journey)

### 2.1 Splash & Sign In Screen (`ONB-01`)
- **Brand Hero Header**: Handcrafted Crust & Q logo and tagline (*"Artisanal Wood-Fired Crusts & Slow-Smoked BBQ"*).
- **Authentication Inputs**:
  - Email address field (with email format validation).
  - Password field (with show/hide toggle).
  - "Remember me" checkbox.
- **Primary Action**: "Sign In" button (high-emphasis primary CTA in flame ember `#FF5C1A`).
- **Secondary Actions**:
  - Text link: *"Don't have an account? Sign Up"*.
  - Divider / secondary CTA: *"Continue as Guest User"*.

### 2.2 Sign Up Screen (`AUTH-01`)
- **Header**: Back button to Login + "Create Account" headline.
- **User Information Form**:
  - First Name & Last Name (structured inputs).
  - Phone Number (formatted US E.164, e.g. `+1 (555) 019-2834`).
  - Email Address.
  - Password (minimum 8 characters with strength indicator).
  - Confirm Password.
- **Primary Action**: "Sign Up" button.
- **Flow Transition**: Upon entering valid details and tapping "Sign Up", user is routed back to the Sign In screen with a success confirmation toast / banner (*"Account created successfully! Please sign in."*).

### 2.3 Guest User Browsing & Order Gating (`GUEST-01`)
- **Unrestricted Discovery**: Guests can freely explore the Home Screen, search dishes, view categories, open dish customization modals, and add items to their Cart.
- **Order Gate Interception**: When a guest user attempts to proceed to Checkout / Place Order, an authorization bottom sheet modal intercepts the action:
  - Headline: *"Sign in to place your order"*.
  - Subtitle: *"Log in or create a Crust & Q account to save delivery addresses, earn smokehouse points, and track your order in real time."*
  - Actions: "Sign In" (Primary), "Create Account" (Secondary), "Continue Browsing" (Dismiss/Text link).

### 2.4 Main Home Screen (`HOME-01`)
- **Top Header Bar**:
  - **Left Section**: Location pin icon + Label ("Home", "Office", etc.) as bold heading + subtitle with full street address (e.g., *"Orlando, 7th Street, Suite 402"*). Tapping triggers the **Location / Address Selector Sheet (`LOC-01`)**.
  - **Right Section**: Profile circular avatar button. Displays user profile photo if uploaded; otherwise renders the first letter of user's First Name in uppercase (e.g., **"R"** on a warm ember badge). Tapping routes to Profile / Settings.
- **Middle Section**:
  - **Search Bar**: Centered rounded search input with search icon, placeholder (*Search "Wood-Fired Pizza, Smoked Ribs, Brisket..."*), and voice/mic icon.
  - **Hero Promotional Carousel**:
    - Slidable horizontal cards showcasing 5 signature promotions / highlights:
      1. *"Signature Smoked Ribeye & Flame Char"*
      2. *"Handcrafted Wood-Fired Margherita"*
      3. *"Weekend Smoked Brisket & BBQ Feast"*
      4. *"Heritage Story: Sourdough Fermentation & Hickory Smoke"*
      5. *"Special Offer: 20% Off Your First Handcrafted Pie"*
    - **Pagination Indicator**: 5 interactive indicator dots tracking active card index.
  - **Category Navigation Bar**:
    - Horizontal pill/icon categories: `All` (default), `Steak`, `Pizza`, `Burger`, `BBQ & Ribs`, `Sides & Craft Brews`.
    - **Header Link**: On the top-right of the category section, a *"See All"* / *"Full Menu"* redirect button that navigates directly to the **Full Menu Screen (`MENU-01`)** with the category bar pre-filtered.
  - **Recommended Dishes Section (2-Row Horizontal Slider)**:
    - Displayed when `All` category is active.
    - Two stacked horizontal scrolling rows (Row 1: 6 recommended cards, Row 2: 6 recommended cards = 12 total recommended dish cards).
    - **Dish Card Composition**:
      - High-appetite food photography.
      - Dish title & short description (e.g., *"Smoked Truffle Pizza"*, *"Dry-Aged Angus Ribeye"*, *"Double Smoked Brisket Burger"*).
      - Price (e.g., `$18.50`).
      - Customer rating with star icon (e.g., `★ 4.9`).
      - Estimated prep / delivery time (e.g., `20-25 mins`).
      - Quick `+ Add` button.
- **Floating Bottom Navigation**:
  - Anchored floating rounded capsule at bottom center with **exactly two primary destinations**:
    1. **Delivery** (Active tab with delivery bag / bike icon).
    2. **History** (Order history with receipt / clock icon).
- **Floating Cart Banner**:
  - When 1 or more items are added to cart, a floating cart pill (*"View Cart • 1 Item • $18.50"*) appears docked directly above the floating bottom navigation bar.

### 2.5 Location & Saved Address Bottom Sheet (`LOC-01`)
- Triggered by tapping the top header address.
- Location permission status tile (*"Device location enabled / Enable location for faster delivery"*).
- Saved addresses list:
  - "Home" (with house icon, full address, delivery instructions).
  - "Office" (with briefcase icon, full address).
- Action: "Add new address" or "Search location manually".

### 2.6 Full Menu Catalog (`MENU-01`)
- Accessed via *"See All"* on category bar.
- Sticky category tabs (`All`, `Steak`, `Pizza`, `Burger`, `BBQ & Ribs`, `Sides`).
- Dietary filter chips (All, Vegetarian, Spicy, Smokehouse Specials).
- Vertical list of categorized dishes with dietary badges, prices, customization options, and Add buttons.

### 2.7 Dish Detail & Customization Modal (`DISH-01`)
- Triggered by tapping any dish card in Home or Full Menu.
- High-res culinary hero image, dish name, description, calorie count, and allergens.
- **Pizza Customization Options**:
  - Crust Selection (Radio: *Wood-Fired Thin Neapolitan*, *Stuffed Crust +$2.50*, *Sourdough Hearth*, *Deep Dish Pan*).
  - Sauce Selection (Radio: *San Marzano Tomato*, *Smokey Hickory BBQ Swirl*, *White Garlic Truffle Cream*).
  - Premium Meats & Cheeses (Checkboxes: *Wood-Smoked Bacon*, *Spicy Pepperoni*, *Smoked Gouda*, *Fresh Buffalo Mozzarella*).
  - Garden Toppings (Checkboxes: *Charred Bell Peppers*, *Wild Mushrooms*, *Fresh Basil*, *Jalapeños*).
- **Steak & BBQ Customization Options**:
  - Cooking Doneness (Radio: *Rare*, *Medium-Rare*, *Medium*, *Well-Done*).
  - Craft BBQ Glaze (Radio: *Signature Hickory Brown Sugar*, *Texas Black Peppery*, *Carolina Tangy Gold*).
  - Side Choice (Radio: *Smoked Mac & Cheese*, *Garlic Dough Knots*, *House Slaw*).
- Special cooking instructions text field (*"Extra crispy crust, please!"*).
- Counter stepper `[- 1 +]` and dynamic primary action button: `Add to Order • $22.50`.

### 2.8 Cart & Checkout Screen (`CART-01`)
- Delivery address summary card with "Change" action link.
- Estimated delivery window (*"25–35 mins • Fast Delivery"*).
- Itemized dish cards with customization summary, unit pricing, quantity steppers `[- 1 +]`, and trash removal icon.
- "+ Add more items from Crust & Q" quick-link.
- Promo code input field with apply button (e.g. `CRUST20` -> 20% discount applied).
- Driver tip selector pills (`$2.00`, `$3.50`, `$5.00`, `Custom`).
- Bill Summary Breakdown:
  - Subtotal
  - Delivery Fee
  - Taxes & Estimated Service Fee
  - Driver Tip
  - **Total Amount Due**
- Payment Method Selector (Apple Pay, Google Pay, Credit/Debit Card, Cash on Delivery).
- Primary CTA: `Place Order • $38.25` (For guests: triggers `GUEST-01` modal).

### 2.9 Order Placed Confirmation (`ORDER-SUCC-01`)
- Celebratory confirmation screen with animated wood-fired checkmark.
- Order ID: `#CQ-8492`.
- Estimated arrival: *"Delivering in 28-35 mins"*.
- Primary action: `Track Order Live` (navigates directly to `TRACK-01`).
- Secondary action: `Return to Home`.

### 2.10 Customer Live Google Maps Order Tracking (`TRACK-01`)
- **Full-Bleed Dark Mode Google Map**:
  - Restaurant Hearth marker pin (Crust & Q kitchen location).
  - Customer destination marker pin (delivery address).
  - Live moving driver vehicle marker (car/scooter) with orientation heading and animated GPS radar pulse ring.
  - Dynamic glowing route polyline (`#FF5C1A` flame glow) tracking current delivery route.
- **Top Header**: Back button, Order ID (`#CQ-8492`), and Share Live Tracking button.
- **Floating Status Pill**: *"Arriving in 14 mins • On Time"*.
- **Sliding Bottom Sheet**:
  - **4-Stage Order Stepper**:
    1. Order Confirmed (Done)
    2. Baking in Wood-Fire Hearth (Done)
    3. Picked Up & On the Way (Active with live driver badge)
    4. Delivered (Pending)
  - **Driver Profile Card**:
    - Driver photo avatar, name (*Marcus Vance*), star rating (`★ 4.9 • 1,240 deliveries`).
    - Vehicle description: *Silver Toyota Prius • Plate: 7XYZ42*.
    - Contact Action Buttons: 📞 `Call Driver` (masked secure call) and 💬 `Message Driver` (in-app chat).
  - Expandable Order Items Summary drawer.

### 2.11 Order History Hub (`HIST-01`)
- Accessed via the floating bottom navigation tab `History`.
- Sub-Tab 1: **Active Orders** (Live card showing active progress, driver ETA, and direct tap to open `TRACK-01`).
- Sub-Tab 2: **Past Orders** (Itemized historical orders with date, store location, total amount, "Reorder" button that repopulates cart, and "View Receipt" link).

---

## 3. Core Functional Requirements (Delivery Agent / Driver Journey)

### 3.1 Driver Dashboard & Shift Toggle (`DRV-AUTH-01`)
- Online / Offline availability switch (*"You are Online - Ready for Dispatches"*).
- Today's shift performance stats:
  - Total earnings ($142.50)
  - Trips completed (8 deliveries)
  - Driver rating (`★ 4.94`)
- Active dispatch radar indicator searching for incoming orders.

### 3.2 Order Dispatch & Kitchen Pickup (`DRV-01`)
- Incoming order notification card:
  - Distance to Crust & Q kitchen (0.8 mi)
  - Delivery payout ($11.25 guaranteed including tip)
  - Crust & Q restaurant address and pickup counter (*Counter 2, Order #CQ-8492*)
  - Order readiness timer (*Ready in 3 mins*)
- Order item checklist verification (e.g., *1x Smoked Truffle Pizza, 1x Half-Rack Ribs, 2x Craft Brews*).
- Primary Action: Swipe to `Confirm Pickup & Start Delivery` -> Transitions immediately to turn-by-turn navigation.

### 3.3 Reverse Live Google Maps Navigation (`DRV-02`)
- **Turn-by-Turn Driver Navigation View**:
  - Top high-contrast navigation banner: *"In 300 ft, Turn Right onto Palm Ave"*.
  - Full-bleed dark mode Google Map with active route polyline from restaurant to customer delivery destination.
  - Driver vehicle marker smoothly tracking along route with real-time GPS heading.
  - Floating Speed & ETA HUD: *"11 min • 3.4 mi • ETA 6:42 PM"*.
- **Bottom Customer Delivery Drawer**:
  - Customer name (*Sarah Jenkins*).
  - Delivery address with gate / apartment notes (*"Apartment 4B, dial #0412 at callbox"*).
  - Direct contact actions: 📞 `Call Customer`, 💬 `Message Customer`.
  - Primary Action Button: `I Have Arrived at Location`.

### 3.4 Proof of Delivery & Order Completion (`DRV-03`)
- Drop-off verification choices:
  - Contactless Drop-off: In-app camera preview to capture photo of delivery placed at doorstep.
  - In-person Hand-off: Customer PIN or digital signature pad.
- Optional driver delivery notes.
- Primary Action: `Complete Delivery` button -> Triggers celebratory earnings credited sound/animation -> Returns to `DRV-AUTH-01` dispatch pool.

---

## 4. Visual Identity & Design Direction: "Char & Crust"

> [!IMPORTANT]
> **User Mandate on Color**: Dark burgundy/festival red is strictly forbidden. The platform uses the bespoke **"Char & Crust"** palette:

- **Theme**: **"Char & Crust"** (Premium Smokehouse & Craft Pizzeria)
- **Primary Ground**: Deep Smoked Cast-Iron (`#141312`) & Warm Charcoal Slate (`#1E1B18`).
- **Surface Cards**: Warm Toasted Hearth (`#26221E`) with subtle hairlines (`#3A342E`).
- **Signature Accent**: Flame Ember Orange (`#FF5C1A`) for primary CTAs, active badges, and cart indicators.
- **Secondary Accent**: Golden Honey Crust (`#F2A93B`) for ratings, promo tags, and highlights.
- **Feedback & Freshness**: Fresh Garden Herb Green (`#2E7D32`) for ratings and vegetarian badges.
- **Map Styling**: Dark night-mode cartography with slate roads (`#26221E`), charcoal blocks (`#1A1715`), and glowing flame route polyline (`#FF5C1A`).
- **Typography Scale**: Clean structural sans-serif (*Inter* / *SF Pro* / *Roboto*) with tabular figures for currency and bold display headers.

---

## 5. Ergonomics & Platform Standards
- **Viewport**: Canonical iPhone 16 Pro (`393 × 852 pt`), adapting cleanly to Android (`412 × 915 dp`).
- **Safe Area Insets**: Top `59 pt` (iOS Dynamic Island) / `40 dp` (Android Punch Hole); Bottom `34 pt` (iOS Home Indicator) / `24 dp` (Android Gesture bar).
- **Touch Target Ergonomics**: All interactive elements (Category pills, `+ Add` buttons, bottom tabs, search input) strictly adhere to minimum **44×44 pt (iOS)** and **48×48 dp (Android)**.
