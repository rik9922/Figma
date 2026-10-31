# Product Requirements Document (PRD): Crust & Q

## 1. Project Overview & Business Objectives

- **Product Name**: Crust & Q (Food Chain Restaurant Delivery Platform)
- **Target Market**: United States
- **Brand Identity & Culinary Concept**: A high-growth US restaurant chain famous for signature artisanal wood-fired crusts (pizzas, calzones) and slow-smoked craft BBQ (steaks, ribs, brisket, gourmet smoked burgers).
- **Target Platform**: Cross-Platform Mobile Application (Canonical UI with native iOS & Android adaptations).
- **Primary Roles**:
  1. **User (Customer)**: Main ordering customer browsing dishes, customizing pizzas/steaks, managing delivery addresses, and tracking orders.
  2. **Delivery Boy (Rider)**: Secondary operations role for order dispatch, pickup, and delivery fulfillment.

---

## 2. Core Functional Requirements (Customer Journey)

### 2.1 Splash & Sign In Screen (`ONB-01`)
- **Brand Hero Header**: Crust & Q logo and tagline ("Artisanal Crusts & Slow-Smoked BBQ").
- **Authentication Inputs**:
  - Email address field (with email validation).
  - Password field (with show/hide password toggle).
  - "Remember me" checkbox.
- **Primary Action**: "Sign In" button (high-emphasis primary CTA).
- **Secondary Actions**:
  - Text link: *"Don't have an account? Sign Up"*.
  - Divider / secondary CTA: *"Continue as Guest User"*.

### 2.2 Sign Up Screen (`AUTH-01`)
- **Header**: Back button to Login + "Create Account" headline.
- **User Information Form**:
  - First Name & Last Name (side-by-side or stacked).
  - Phone Number (formatted US E.164, e.g. `+1 (555) 019-2834`).
  - Email Address.
  - Password.
  - Confirm Password.
- **Primary Action**: "Sign Up" button.
- **Flow Transition**: Upon entering valid details and tapping "Sign Up", user is routed back to the Sign In screen with a success confirmation toast / banner ("Account created successfully! Please sign in.").

### 2.3 Guest User Browsing & Order Gating (`GUEST-01`)
- **Unrestricted Discovery**: Guests can freely explore the Home Screen, search dishes, view categories, open dish details, and add items to their Cart.
- **Order Gate Interception**: When a guest user attempts to proceed to Checkout / Place Order, an authorization modal or bottom sheet intercepts the action:
  - Headline: *"Sign in to place your order"*.
  - Subtitle: *"Log in or create a Crust & Q account to save delivery addresses, earn smokehouse points, and track your order."*
  - Actions: "Sign In" (Primary), "Create Account" (Secondary), "Continue Browsing" (Dismiss/Text link).

### 2.4 Main Home Screen (`HOME-01`)
- **Top Header Bar**:
  - **Left Section**: Location pin icon + Label ("Home", "Office", etc.) as bold heading + subtitle with full street address (e.g., *"Orlando, 7th Street, Suite 402"*). Tapping triggers the **Location / Address Selector Sheet (`LOC-01`)**.
  - **Right Section**: Profile circular avatar button. Displays user profile photo if uploaded; otherwise renders the first letter of user's First Name in uppercase (e.g., **"R"** on a warm ember badge). Tapping routes to Profile / Settings.
- **Middle Section**:
  - **Search Bar**: Centered rounded search input with search icon, placeholder (*Search "Wood-Fired Pizza, Smoked Ribs, Brisket..."*), and voice/mic icon.
  - **Hero Promotional Carousel**:
    - Slidable horizontal cards showcasing 5 signature promotions / highlights:
      1. *"Order Now: Signature Smoked Ribeye"*
      2. *"Build Your Own Artisanal Pizza"*
      3. *"Weekend Smoked Brisket & Craft BBQ Box"*
      4. *"About Crust & Q Heritage: Wood Smoke & Sourdough"*
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

### 2.6 Full Menu Screen (`MENU-01`)
- Accessed via *"See All"* on category bar.
- Sticky category tabs (`All`, `Steak`, `Pizza`, `Burger`, `BBQ & Ribs`, `Sides`).
- Vertical list of categorized dishes with dietary badges, prices, customization options, and Add buttons.

---

## 3. Visual Identity & Design Direction: "Char & Crust"

> [!IMPORTANT]
> **User Mandate on Color**: The user uploaded reference screenshots from an Indian delivery app (Zomato/Swiggy dark red/burgundy theme with Diwali banners) and explicitly instructed:  
> *"do not use that color combinations for us"*
> 
> We reject the dark burgundy / festival red palette and engineer a bespoke, premium American culinary palette:

- **Theme**: **"Char & Crust"** (Premium Smokehouse & Craft Pizzeria)
- **Primary Ground**: Deep Smoked Cast-Iron (`#141312`) & Warm Charcoal Slate (`#1E1B18`) providing rich contrast for vibrant food imagery.
- **Surface Cards**: Warm Toasted Hearth (`#26221E`) with subtle hairlines (`#3A342E`).
- **Signature Accent**: Flame Ember Orange (`#FF5C1A`) for primary CTAs, active badges, and cart indicators.
- **Secondary Accent**: Golden Honey Crust (`#F2A93B`) for ratings, promo tags, and highlights.
- **Feedback & Freshness**: Fresh Garden Herb Green (`#2E7D32`) for ratings and vegetarian badges.
- **Typography Scale**: Modern structural sans-serif (*Inter* / *SF Pro* / *Roboto*) with clean tabular figures for prices and bold display headers.

---

## 4. Ergonomics & Platform Standards
- **Viewport**: Canonical iPhone 16 Pro (`393 × 852 pt`), adapting to Android (`412 × 915 dp`).
- **Safe Area Insets**: Top `59 pt` (iOS Dynamic Island) / `40 dp` (Android Punch Hole); Bottom `34 pt` (iOS Home Indicator) / `24 dp` (Android Gesture bar).
- **Touch Target Ergonomics**: All interactive elements (Category pills, `+ Add` buttons, bottom tabs, search input) strictly adhere to minimum **44×44 pt (iOS)** and **48×48 dp (Android)**.
