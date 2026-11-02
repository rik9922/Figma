# Crust & Q — Google Stitch Master Prompt and Screen-by-Screen Generation Prompts

This document is the execution prompt pack for Google Stitch. Use `DESIGN.md` in the same Stitch project as the visual source of truth.

## How to use this prompt pack

1. Create a new Stitch project named **Crust & Q — Customer & Delivery Partner Mobile Apps**.
2. Add the companion `DESIGN.md` to the project context if the current Stitch workflow supports project design instructions. Otherwise paste its full content into Stitch's design-system/instructions area.
3. Paste the **Master Project Prompt** below first.
4. Generate screens in the numbered batches. Use each individual screen prompt separately when you need more precise results. Do not ask Stitch to generate the entire product in one enormous image.
5. Generate one primary screen at a time or a small related batch, then ask Stitch to refine it against the preceding screens.
6. Use the exact screen ID in the generated screen name. Keep the same design system and shared synthetic data.
7. For flows with variants, generate the default screen first, then ask Stitch for the state variants as separate screens or states.
8. After a batch, use the Batch QA Prompt to check the screens before continuing.

**Important:** Stitch outputs are design-generation results. A design screen is not proof that a backend, live GPS, payment, authentication, driver verification or other service is implemented. Mark integrations as illustrative when they are not connected.

---

# PART A — MASTER PROJECT PROMPT

Copy this prompt into Stitch as the initial project prompt.

```text
PROJECT: CRUST & Q — COMPLETE CROSS-PLATFORM MOBILE PRODUCT DESIGN

You are the lead product design system and mobile UX design agent for Crust & Q, a premium-casual American restaurant ordering and delivery platform.

Create a complete, coherent mobile product design covering TWO distinct but brand-consistent applications:
1. Customer App — discover food, customize meals, order, pay, track delivery, manage account, rewards and support.
2. Delivery Partner App — register, complete onboarding, manage availability, accept delivery offers, collect orders, navigate to customers, complete handoff, review earnings and manage account.

This is not a marketing website and not an admin dashboard. Design actual mobile app screens with complete user tasks and realistic states.

MANDATORY DESIGN SYSTEM:
Read and obey the project DESIGN.md. It defines the visual theme, colors, typography, spacing, components, imagery, interaction states, accessibility and banned patterns. Do not create a competing visual system.

PRODUCT IDENTITY:
Crust & Q combines wood-fired pizza and slow-smoked craft BBQ with burgers, steaks and restaurant sides. Its personality is warm, artisanal, confident, fresh, premium-casual and approachable.

VISUAL DIRECTION:
Bright Warm Casual Dining Light Theme. Strict light theme only. Warm cream canvases, clean white surfaces, Tomato Flame primary accent, warm charcoal text, restrained herb-green semantic success and rare honey promotion markers. Use natural photorealistic food imagery. Use Manrope for display and DM Sans for body. No Inter, no emojis, no neon, no pure black, no dark mode and no generic SaaS look.

CANONICAL MOBILE STANDARD:
390 × 844 logical points, responsive to 360 × 800 dp. Respect safe areas, use a 4 px base / 8 px major spacing rhythm, readable typography and minimum 44 px touch targets (aim for 48 px).

PRODUCT STRUCTURE:
Customer modules: Authentication; Home and Discovery; Location and Address; Search; Menu and Categories; Food Details; Pizza Builder; Cart and Promotions; Checkout and Payment; Order Confirmation; Live Order Tracking; Order History; Profile; Saved Addresses; Payment Methods; Rewards; Notifications; Support; Settings.

Delivery Partner modules: Authentication; Registration; Identity/Document Onboarding; Verification Status; Driver Profile; Vehicle; Dashboard; Shift Management; Location Permissions; Dispatch Offers; Accepted Delivery; Restaurant Pickup; Pickup Exceptions; Navigation; Customer Handoff; Proof of Delivery; Delivery Exceptions; Completion; Earnings; Payout History; Delivery History; Notifications; Support; Settings.

REQUIREMENT DISCIPLINE:
Treat existing core ordering and delivery concepts as the established product direction. New account, driver verification, payment, cancellation, refund, tips, promotions, payout, OTP, signature and proof-of-delivery policies may be proposals until confirmed. Do not invent a confirmed business rule. Where uncertain, visibly mark the design as a proposed interaction in project documentation rather than presenting the policy as approved.

CONTINUITY DATA:
Use one synthetic demo scenario consistently across connected screens:
Customer Alex Morgan; Delivery Partner Morgan Reed; Restaurant Crust & Q — Downtown Oven; Order CQ-20481; Hot Honey Pepperoni Pizza $18.99; Double Wagyu Smash Burger $21.00; cart subtotal $39.99; illustrative WELCOME5 discount $5.00; illustrative delivery fee $2.99; illustrative tip $4.00; illustrative tax $2.80; illustrative total $44.78. Driver offer example $12.50 = illustrative $8.50 base + $4.00 tip. These are prototype consistency values, not approved business pricing or payout policy. Do not change the values between connected screens unless the state explicitly changes them.

NAVIGATION PROPOSAL:
Customer bottom navigation: Home, Menu, Orders, Profile. Cart is available globally by a bag icon with badge and a contextual sticky cart bar.
Driver bottom navigation: Dashboard, Deliveries, Earnings, Profile. During active navigation, prioritize the task view and avoid distracting controls. These navigation structures are proposed pending owner approval.

DESIGN EXECUTION RULES:
- Make every screen feel like part of one real product.
- Build screens as independent 390 × 844 mobile frames.
- Generate the screens in journey order and reuse established components.
- Give each screen a clear title, screen ID, entry point, main task, primary action and back/exit behavior.
- Preserve content hierarchy and safe areas.
- Design every important empty, loading, error, permission, disabled, success, timeout and exception state.
- Do not squeeze too much content into one screen; split long workflows into clear steps.
- Use bottom sheets for focused selections only when appropriate.
- Keep all primary actions obvious and reachable.
- Use realistic imagery with consistent art direction.
- Do not use placeholder text or generic invented brand names.
- Do not use three equal feature cards in a row.
- Do not produce overlapping, clipped or tiny text.
- Do not use fake live GPS or payment states; label them as prototype/simulated where applicable.
- Do not treat all proposed features as confirmed requirements.

DELIVERABLE STRUCTURE:
Create distinct sections for:
A. Customer App screens.
B. Delivery Partner App screens.
C. Shared components and state variants.
D. End-to-end prototype flows.
E. Outstanding proposed/TBD decisions.

FIRST GENERATION TASK:
Start by generating a polished Customer Home screen (HOME-01) and a Driver Dashboard screen (DRV-DASH-01) as the two visual anchors. Make them clearly related but optimized for their different tasks. Then use them as visual references for all remaining screens. Do not generate all screens in one canvas as a collage. Generate independent mobile screens with consistent framing.

QUALITY BAR:
The result should look like a professionally art-directed food-ordering product, not a generic AI app. Food should look appetizing and realistic. Text must be readable. Navigation must be predictable. Driver tasks must be operationally clear. Every screen must have a reason to exist and connect to a documented journey.
```


---

# PART A.1 — EXISTING DESIGN AND ASSET REUSE MAP

The repository already contains 17 exported mobile screens across seven artboards. Use them as reference material when available. Preserve strong compositions and food photography; improve defective hierarchy, typography, arithmetic, statuses and missing states. Do not assume an SVG export is already a native editable Stitch screen.

| Existing exported screen | New prompt to use | Reuse direction |
|---|---|---|
| ONB-01 Sign In | CUS-01 | Preserve the brand-entry idea; refine the login hierarchy and guest route. |
| AUTH-01 Create Account | CUS-02 | Preserve the form concept; improve keyboard-aware layout and field readability. |
| GUEST-01 Guest Intercept | CUS-05 | Preserve cart context behind the sheet; avoid unnecessarily blocking guest checkout. |
| HOME-01 Home Hub | CUS-06 | Primary Customer visual reference; keep the food-led hero and discovery idea, but improve dense metadata and navigation. |
| LOC-01 Address Selector | CUS-07 | Preserve the saved-address sheet concept and permission distinction. |
| MENU-01 Full Menu | CUS-09 | Preserve menu browsing and categories; correct small text and card density. |
| CAT-01 Steak / BBQ | CUS-10 | Preserve category-specific food exploration. |
| PIZZA-01 Builder, currently represented at crust step | PIZ-01 through PIZ-07 | Expand into seven consistent sequential frames, not one frame that only shows step 2. |
| DISH-01 Burger Customization | CUS-12 | Preserve dish detail and add-on selection concept; clarify required/optional options and price changes. |
| CART-01 Cart | CUS-13 | Preserve itemized cart and tip selector; correct discount and total arithmetic. |
| CHECK-01 Checkout | CUS-15 | Preserve address/payment structure; align the final payable total with cart. |
| ORDER-SUCC-01 Confirmation | CUS-17 | Preserve confirmation composition; align order ID, items and amount. |
| TRACK-01 Customer Live Map | CUS-18 | Preserve daylight cartography; label simulated GPS honestly and reconcile ETA. |
| DRV-DASH-01 Driver Dashboard | DRV-08 | Preserve earnings/availability idea; make task priority clearer. |
| DRV-REQ-01 Delivery Offer | DRV-11 | Preserve offer timer and payout preview; add accepted/declined/expired states. |
| DRV-NAV-01 Driver Navigation | DRV-18 | Preserve daylight navigation HUD; remove distractions and add pickup navigation separately. |
| DRV-COMP-01 Delivery Completion / Proof | DRV-21 and DRV-23 | Separate evidence capture from successful completion; keep proof requirements Proposed/TBD until confirmed. |

## Existing repository food-image assets

When these files are made available to Stitch as reference images, prefer them over random stock photos when they suit the screen:

- `assets/thumbnails/angus_ribeye.jpg`
- `assets/thumbnails/bbq_chicken_pizza.jpg`
- `assets/thumbnails/chicken_sandwich.jpg`
- `assets/thumbnails/hero_bbq_feast.jpg`
- `assets/thumbnails/hero_heritage.jpg`
- `assets/thumbnails/hero_margherita.jpg`
- `assets/thumbnails/hero_promo_20.jpg`
- `assets/thumbnails/hero_ribeye.jpg`
- `assets/thumbnails/hot_honey_pepperoni.jpg`
- `assets/thumbnails/smash_burger.jpg`
- `assets/thumbnails/smoked_ribs.jpg`
- `assets/thumbnails/texas_brisket.jpg`
- `assets/thumbnails/truffle_pizza.jpg`

Do not assume these assets have commercially verified licenses. Record their provenance/approval status separately. If Stitch cannot directly read the repository, upload the specific required images as project references rather than assuming it can access GitHub paths.

---

# PART B — SHARED SCREEN GENERATION TEMPLATE

Use this template when asking Stitch to generate or refine any screen. Replace the bracketed fields.

```text
Create one independent mobile app screen for Crust & Q.

SCREEN ID: [ID]
SCREEN NAME: [Name]
APPLICATION: [Customer App / Delivery Partner App]
MODULE: [Module]
REQUIREMENT STATUS: [Confirmed / Proposed / TBD]
FRAME: 390 × 844 logical px, responsive to 360 × 800.

PURPOSE:
[One sentence describing what the user needs to accomplish.]

ENTRY:
[Where the user arrives from.]

CONTENT HIERARCHY:
[Exact top-to-bottom structure, content blocks, labels, values and visual order.]

PRIMARY ACTION:
[Main CTA, what it does and destination/state.]

SECONDARY ACTIONS:
[Other actions and behavior.]

STATES TO REPRESENT:
[Default, selected, disabled, loading, empty, error, success, offline, permission, timeout, etc.]

DATA CONTINUITY:
Use the shared Crust & Q synthetic demo data and preserve it consistently with adjacent screens. Do not invent business rules.

VISUAL RULES:
Follow DESIGN.md exactly. Light theme only, Manrope + DM Sans, Tomato Flame primary accent, warm cream canvas, white surfaces, readable text, realistic food imagery where appropriate, no emojis, no Inter, no neon, no pure black and no generic SaaS styling.

LAYOUT RULES:
Use safe-area-aware top and bottom spacing, 16–20 px horizontal gutters, 8 px major rhythm, 48 px or larger primary controls, no clipping, no overlap and no horizontal overflow. Use Auto Layout-like grouping and clear alignment.

OUTPUT:
Create a polished, realistic, independent screen named [ID — Name]. Do not return a collage. Make its hierarchy and controls clear enough for a developer to understand and a product owner to review.
```

---

# PART C — CUSTOMER APP: SCREEN-BY-SCREEN PROMPTS

## Customer navigation and authentication

### CUS-01 — ONB-01 Sign In / Welcome

```text
Create the Crust & Q Customer Sign In screen, ID ONB-01, 390 × 844.

Purpose: returning customers sign into their account, while new or guest users can continue through appropriate secondary routes.

Layout:
- Warm cream canvas.
- Compact brand header with a clean Crust & Q wordmark and a small wood-fired/pitmaster descriptor.
- Food-led hero composition: one high-quality, natural-light image of a wood-fired pepperoni pizza and smoked BBQ side, cropped as a tasteful editorial image, not a full-bleed ad.
- Heading: “Welcome back”. Supporting line: “Sign in to pick up where your next great meal begins.”
- Email field with visible label.
- Password field with visible label and show/hide control.
- Remember me checkbox and Forgot password text action on one balanced row.
- Full-width Tomato Flame “Sign In” primary button.
- Secondary account creation link: “New to Crust & Q? Create an account”.
- Quiet “Continue as Guest” action below, visually secondary.

Behavior:
- Sign In → authenticated Home (HOME-01) in prototype.
- Create account → CUS-02.
- Forgot password → CUS-03.
- Continue as Guest → HOME-01 in guest mode.
- Include disabled/loading state, invalid credentials state and inline field errors as variants.

Do not add social login unless confirmed. No fake authentication success copy beyond prototype state.
```

### CUS-02 — AUTH-01 Create Account

```text
Create Customer Create Account screen AUTH-01.

Use a clear, single-column registration form on warm cream. Title “Create your account”; short value statement about faster checkout, order history and rewards (rewards eligibility remains a proposed feature).

Fields in order: First name, Last name, Mobile number with US country code, Email address, Password, Confirm password. Labels above each field; helper text only where useful. Include password visibility and concise password requirements without inventing an overly complex policy.

Show a consent row for Terms and Privacy with tappable text. Primary CTA “Create Account”. Secondary link “Already have an account? Sign in”. Back control in the top bar.

Make the form scrollable and keyboard-aware. Place inline validation directly below incorrect fields. Include default, field-error, password-mismatch, loading and registration-success variants. Successful prototype action proceeds to account verification only if the product owner confirms it; otherwise proceed to HOME-01 with a clearly simulated state.
```

### CUS-03 — AUTH-02 Forgot Password

```text
Create AUTH-02 Forgot Password screen.

Purpose: let an existing customer recover access without confusion.

Layout: back arrow; modest brand mark; title “Reset your password”; supportive explanation; one labeled Email address field; one primary button “Send reset link”; secondary “Back to sign in”. Keep the layout calm, compact and trustworthy, with no irrelevant food imagery competing with the form.

States: default, invalid email, sending/loading, reset link sent, network failure. Success state must say the message was requested/sent only as a prototype state; do not imply a real email service is connected. Preserve entered email when navigating back.
```

### CUS-04 — AUTH-03 Reset Password

```text
Create AUTH-03 Reset Password screen.

Show title “Choose a new password”, short security guidance, New Password and Confirm New Password fields, visibility controls, inline password guidance and a strong primary “Save new password” CTA. Add an expired/invalid reset-link state with “Request a new link” action. Use a simple security-focused illustration only if it does not distract. After successful prototype action, show a concise success state and return to sign-in. Do not invent MFA or password requirements beyond clearly labeled design assumptions.
```

### CUS-05 — GUEST-01 Guest Checkout Intercept

```text
Create GUEST-01 as a focused bottom-sheet intercept shown when a guest customer attempts checkout or wants a feature requiring an account.

Keep the cart visible behind a soft warm scrim so context is preserved. Sheet includes a drag handle, close button, headline “Keep your order moving”, concise explanation of guest checkout limitations, primary “Sign in or create account”, and secondary “Continue as guest”. Explain only the actual limitation: account features such as saved order history or persistent addresses may require sign-in. If guest ordering is supported, do not block checkout unnecessarily.

Actions: sign in → ONB-01; create account → AUTH-01; continue as guest → CHECK-01. Preserve cart items and total. Include close/dismiss state.
```

## Customer discovery and location

### CUS-06 — HOME-01 Customer Home / Delivery Hub

```text
Create HOME-01, the primary Crust & Q Customer Home screen. This is the visual anchor for the Customer App.

Top region:
- Safe-area-aware app header with Crust & Q wordmark.
- Delivery destination summary with pin icon, “Delivering to” label and selected address, plus change affordance.
- Profile/avatar control and bag/cart icon with a quantity badge.
- Search field with placeholder “Search pizza, BBQ, burgers…” and an explicit search icon.

Main content:
- Editorial promotional hero with rich but realistic wood-fired pizza / craft BBQ photo. Add one short promotion message and one primary “Explore menu” CTA. Never cover the food with too much text.
- Compact category discovery row: Pizza, BBQ, Burgers, Steaks, Sides. Use distinctive food photography/icon treatment; do not create generic three equal feature cards.
- A “Popular at Crust & Q” horizontal product shelf with 3–4 product cards showing image, name, price, rating and estimated prep/delivery time.
- A second “Made for your next meal” or “Pitmaster picks” shelf with a different layout density.
- A compact offer row only if useful; avoid stacking many promotional banners.

Bottom navigation proposal: Home, Menu, Orders, Profile. Active Home state. Cart remains accessible globally and may appear as a sticky bottom cart bar when items exist.

States: first-load skeleton; no products; restaurant temporarily unavailable; delivery unavailable; guest mode; cart populated. Main actions navigate to LOC-01, SRCH-01, MENU-01, CAT-01, DISH-01, CART-01, HIST-01 and PROF-01. Keep the screen breathable and thumb-friendly.
```

### CUS-07 — LOC-01 Saved Address Selector

```text
Create LOC-01 as a bottom sheet over HOME-01.

Sheet title “Choose delivery address”; close button and drag handle. First show a location-permission explanation card only when needed, with a clear “Use current location” action and no fake enabled status. Then show saved address rows with label, address, selected indicator and edit affordance: Home, Work/Office and Add a new address. Include a manual “Search an address” row.

Selected address must be visually obvious using icon and label, not color alone. Primary CTA “Deliver to this address” appears only when a valid address is selected. Include GPS denied, locating, location unavailable and empty saved-address variants. Routes: search/manual → LOC-02; manage addresses → ADDR-01; confirm → HOME-01 with updated address.
```

### CUS-08 — LOC-02 Search Address and Select Map Pin

```text
Create LOC-02 Address Search and Map Pin Selection.

Top app bar with back control and title “Set delivery location”. Search input anchored near top with clear button. Below, show a light daylight map with streets, a movable center pin and a bottom address confirmation panel. Provide search suggestions and “Use current location” only when permission state allows it.

Bottom panel: resolved address, optional apartment/unit field, “Confirm location” primary CTA. Include invalid address, no result, outside delivery area, GPS denied and network failure variants. Do not imply geocoding or live map integration is connected; it is a prototype visualization. Save selection and return to the address book or HOME-01.
```

## Customer menu, search and food details

### CUS-09 — MENU-01 Full Restaurant Menu

```text
Create MENU-01 Full Restaurant Menu Catalog.

Header with back/home context, “Our menu” title and cart badge. Search field remains available. Use a horizontal category tab bar: All, Wood-Fired Pizza, Craft BBQ, Burgers, Steaks, Sides. Active tab uses Tomato Flame underline and clear text contrast.

Main menu uses a readable vertical product list with high-quality thumbnail, product name, one-line description, price and Add/Customize action. Use section headers such as “Most ordered pizzas” and “Slow-smoked favourites”. Include a filter/sort control only if useful. Do not show ratings, discount, delivery estimate and multiple badges at the same visual priority.

Sticky cart strip appears only when cart has items and displays item count, subtotal and “View cart”. States: category selected, loading, no results, item unavailable, cart populated. Product tap → DISH-01; category → CAT-01; search → SRCH-01; cart → CART-01.
```

### CUS-10 — CAT-01 Category Exploration: Steak and Craft BBQ

```text
Create CAT-01 category discovery screen for Steak & Craft BBQ.

Use a category-specific hero image of realistic smoked brisket/ribs or seared steak, with a compact category title and short descriptor. Provide scrollable subcategory chips such as Brisket, Ribs, Steak, Wagyu and Sides. Use a featured dish section followed by a clean vertical product list.

Each item: image, name, concise ingredient description, price, optional rating and realistic preparation-time placeholder. Provide clear “Add” or “Customize” CTA. Avoid 3-column microcards that make names unreadable. Include filter drawer as a proposed overlay. Actions return to MENU-01 or open DISH-01. Add loading, no category items and unavailable item variants.
```

### CUS-11 — SRCH-01 Search Results and Suggestions

```text
Create SRCH-01 unified menu search.

Top: back control, search field with typed query “pepperoni”, clear button. Below: recent searches when query empty; suggested terms while typing; filter chips for category, dietary preference and availability only where supported. Results appear as readable product rows or a balanced 2-column food image layout with adequate card width.

Show result count and sorting control in a quiet hierarchy. Each result needs name, image, price and optional rating/availability. Do not use tiny product labels. Variants: initial search, suggestions, populated results, zero results with useful alternatives, search failure and offline. Selecting a product opens DISH-01; clearing search returns to discovery.
```

### CUS-12 — DISH-01 Food Detail and Customization

```text
Create DISH-01 product detail/customization screen for Double Wagyu Smash Burger.

Top image area: appetizing close-up food image with correct crop, back button and favorite action only if supported. Under image: item name, price, concise description, optional rating/review count and availability estimate.

Customization sections should be grouped with explicit required/optional labels: patty preparation where the restaurant actually supports it; add-ons such as smoked bacon or truffle fries as illustrative options; quantity stepper; selected add-on subtotal. Make price changes visible before adding.

Bottom sticky action: “Add to cart • $[live total]”. Include unavailable item state, required option missing, quantity update and add-to-cart confirmation. Do not invent ingredient or allergy claims. Tapping Add to Cart updates CART-01 in the prototype.
```

## Customer seven-step pizza builder

### PIZ-01 — Size Selection

```text
Create PIZ-01 Pizza Builder Step 1 of 7 — Choose Size.

Header: back, “Build your own pizza”, clear step progress 1/7. Main hero shows one large realistic wood-fired pizza visual with a clean size comparison treatment. Offer available size choices with diameter, serving/slice count and price delta only when known. Selected option must have a strong check/outline state. Bottom summary shows current base price and a sticky “Next: Choose crust” button. Include an accessible selected state and a no-size-available error. Prices remain proposed until confirmed.
```

### PIZ-02 — Crust Selection

```text
Create PIZ-02 Pizza Builder Step 2 of 7 — Choose Crust.

Reuse the same persistent wizard header and progress style from PIZ-01. Main area contains a clear list of available crust options with small appetizing cross-section images or illustrations, title, brief texture description, included/extra price indicator and selectable radio/check state. Example options may include Signature Wood-Fired, Garlic Herb Stuffed and Gluten-Free only as proposed until confirmed. Bottom price summary updates from selected crust and CTA says “Next: Choose sauce”. Keep all options readable; do not turn them into tiny horizontal pills.
```

### PIZ-03 — Sauce Selection

```text
Create PIZ-03 Pizza Builder Step 3 of 7 — Choose Sauce.

Show progress 3/7 and persistent selected size/crust summary in a compact sticky summary or collapsible selection chip. Present sauce options as readable rows with small ingredient imagery, a short description and selection control. Include “No sauce” only if the restaurant offers it. Explain any extra charge where applicable. CTA “Next: Choose cheese”. Back returns to PIZ-02 with the prior choice preserved. Do not invent allergen or dietary claims.
```

### PIZ-04 — Cheese Selection

```text
Create PIZ-04 Pizza Builder Step 4 of 7 — Choose Cheese.

Show a clear single-select or multi-select control according to the product rule; if unknown, label the selection behavior as Proposed in the design spec. Use high-quality ingredient imagery sparingly. Provide selection, optional extra cheese and quantity/additional charge only where configured. Keep the selected pizza preview and price summary visible. CTA “Next: Choose toppings”. Include unavailable-option and selection validation states.
```

### PIZ-05 — Meat and Protein Toppings

```text
Create PIZ-05 Pizza Builder Step 5 of 7 — Choose Meats.

Show available meat/protein toppings as readable rows with small natural ingredient photos, title, short description, add/remove control and price delta. Use a clear maximum-selection indicator only if the business defines a limit; otherwise do not invent one. Maintain selected topping chips or a compact selection summary. Keep price arithmetic visible and update the running total. CTA “Next: Add vegetables”.
```

### PIZ-06 — Vegetables and Additional Toppings

```text
Create PIZ-06 Pizza Builder Step 6 of 7 — Choose Vegetables.

Present vegetables and approved extra toppings in a structured list with add/remove controls, optional groups and concise descriptions. Use consistent spacing and selection states from previous steps. Avoid a dense wall of tiny ingredients. Show allergy/dietary disclaimers only if confirmed; otherwise do not imply allergen safety. Running price summary and CTA “Review your pizza”.
```

### PIZ-07 — Pizza Review and Add to Cart

```text
Create PIZ-07 Pizza Builder Step 7 of 7 — Review Your Pizza.

Show a beautiful but realistic top-down/three-quarter pizza preview. Below it, show a structured summary: size, crust, sauce, cheese, meat toppings and vegetables. Each section has an Edit action that returns to the exact step while preserving choices. Show base price, extra charges and final item price in a clear breakdown. Quantity stepper and primary sticky “Add pizza to cart • $[total]”. Include validation if a required selection is missing and a success confirmation after adding. Ensure the total equals the sum of displayed options.
```

## Customer cart, checkout and order tracking

### CUS-13 — CART-01 Cart Overview

```text
Create CART-01 Customer Cart.

Top app bar “Your cart” with continue browsing action. Show restaurant/source context. Each item row must contain thumbnail, name, selected customization summary, unit price, quantity stepper, Edit and Remove. Provide remove confirmation as an overlay.

Below: promo code entry, applied-promotion row if valid, item subtotal, discount, delivery fee, taxes/restaurant charges, driver tip and final total. Keep math consistent with the shared demo data: subtotal $39.99, illustrative discount -$5.00, delivery $2.99, tip $4.00, tax $2.80, total $44.78. Label these as illustrative values in project documentation, not as approved policies. Add a prominent “Proceed to checkout” CTA. Variants: empty cart, item unavailable, promotion invalid, price changed and cart loading.
```

### CUS-14 — PROMO-01 Apply Promotion Sheet

```text
Create PROMO-01 as a bottom sheet launched from Cart.

Title “Offers and promo codes”. Include a labeled code input, Apply button and a small list of available offers only as illustrative proposed examples. Show distinct applied, invalid, expired, minimum-order-not-met and not-eligible states. Explain the reason in plain language. Do not invent promotion terms, stacking rules or expiration dates. Applying the illustrative WELCOME5 discount changes the shared demo total only if the prototype flow explicitly selects it. Provide close and return-to-cart behavior.
```

### CUS-15 — CHECK-01 Checkout Overview

```text
Create CHECK-01 final checkout screen.

Header “Checkout” with back action. Top card: delivery address and Change action. Add delivery instructions field and a short delivery contact summary. Payment section shows selected masked payment method and Change. Order summary shows item count, item subtotal, promotion, delivery fee, tip, taxes and total. Keep all values consistent with CART-01. Primary CTA “Place order • $44.78” with a clear secure-payment context. If payment provider is unknown, use generic masked method and label integration as proposed. Include processing, payment failure, retry and address validation variants. Never expose full card number/CVV.
```

### CUS-16 — PAY-01 Payment Methods

```text
Create PAY-01 customer payment method management screen.

Title “Payment methods”, back action and a clean list of saved masked cards/wallets using synthetic values. Each method shows brand mark, masked digits, expiry where appropriate and default indicator. Primary “Add payment method” action. Secondary actions: choose default and remove with confirmation. Include no saved methods, invalid/expired method, add-method form and failed-save variants. Never show full payment-card number or CVV. Do not claim a particular payment provider integration exists.
```

### CUS-17 — ORDER-SUCC-01 Order Confirmation

```text
Create ORDER-SUCC-01 Order Placed Confirmation.

Use a warm celebratory success composition that remains restrained. Clear success icon, title “Your order is in”, order number CQ-20481, restaurant Crust & Q — Downtown Oven, expected arrival estimate and concise message that the restaurant is preparing the order. Show a compact order summary with the two demo items and total $44.78. Primary CTA “Track your order”; secondary “Back to home”. Do not show a driver identity before assignment. Include order submission failure as a separate variant, not a success state.
```

### CUS-18 — TRACK-01 Live Order Tracking

```text
Create TRACK-01 Customer Live Delivery Tracking.

Use a light daylight urban map around the illustrative Downtown Orlando / Lake Eola area. Keep map labels legible and route visible. Show pickup marker, customer destination marker, driver marker and a clear route line. Do not copy Google Maps logos or claim a live Google Maps integration.

Overlay a compact order status card with “On the way”, remaining estimate and ETA; include a 4-step order progress tracker such as Placed, Preparing, Picked up, Delivered. Show driver card only after assignment: Morgan Reed, vehicle summary and call/message actions only as prototype controls. Keep map controls accessible and avoid covering the route.

Use consistent order CQ-20481 and the shared demo address context. Include GPS unavailable, delayed, driver reassigned, approaching and delivered variants. Clearly identify map movement as simulated if no live location integration exists.
```

### CUS-19 — ORDER-DETAIL-01 Active Order Details

```text
Create ORDER-DETAIL-01 Active Order Details.

Show order ID CQ-20481, placed time, restaurant, item list, selected customizations, delivery destination, payment summary and current order status. Give a strong “Track order” action while active. Provide support/report issue entry. Cancellation action must be shown only as a proposed control until the actual cancellation policy is confirmed. Distinguish preparing, accepted, ready, assigned, picked up, delivered and failed states. Keep all data consistent with confirmation and tracking.
```

## Customer order history, profile and account

### CUS-20 — HIST-01 Order History

```text
Create HIST-01 Customer Order History screen.

Top title “Your orders”, filter tabs Active, Completed and Cancelled, with clear selected state. Each order card shows order ID, restaurant, date, item summary, total, status and one contextual action: Track, View details or Reorder. Use a clean readable list; no tiny status labels. Include initial loading, no history, active order and failed-load variants. Tap an order → HIST-02 or TRACK-01; reorder → HIST-03.
```

### CUS-21 — HIST-02 Order Detail and Receipt

```text
Create HIST-02 Past Order Detail / Receipt.

Show order ID, date/time, restaurant, order status, itemized order with customizations, quantity, item price, discounts, fees, taxes, tip, payment summary and total. Provide “Reorder” and “Get help” actions. Keep all arithmetic consistent with the displayed receipt. Include cancelled/refunded status variants only as proposed until policies are confirmed. Use a structured receipt layout, not a cluttered floating-card stack.
```

### CUS-22 — HIST-03 Reorder Review

```text
Create HIST-03 Reorder Review.

Show the previously ordered items with current availability and current pricing. Mark unavailable or changed-price items clearly. Allow the user to remove unavailable items or review substitutions only if substitutions are supported. Show updated estimated total and destination address. Primary CTA “Add available items to cart”. Never silently add unavailable products or use historical prices as current prices. Include empty reorder and price-changed variants.
```

### CUS-23 — PROF-01 Customer Profile Overview

```text
Create PROF-01 Customer Profile Overview. This is a major account hub, not a small settings menu.

Top: title “My account”, synthetic customer avatar, Alex Morgan, masked/contact summary and Edit profile action. Use clearly separated sections:
- Personal information.
- Saved addresses.
- Payment methods.
- Orders and reorder.
- Pitmaster Rewards with current illustrative points balance.
- Notifications.
- Help and support.
- Settings and privacy.

Each row uses a clear icon, label, concise secondary description and chevron. Use no more than two groups of menu rows visible at once if the screen becomes dense; allow scrolling. Bottom nav Profile selected. Use restrained surface treatments and readable text. Links open PROF-02, ADDR-01, PAY-01, HIST-01, REW-01, NOTIF-01, SUPPORT-01 and SET-01. Include a profile-loading and missing-profile-image state.
```

### CUS-24 — PROF-02 Edit Personal Information

```text
Create PROF-02 Edit Personal Information.

Title “Personal information”, back action. Fields: first name, last name, email, mobile phone. Show current synthetic profile values and explicit editable controls. Add helper copy for fields that require verification only if applicable; otherwise do not invent a verification mechanism. Sticky “Save changes” CTA. Include field error, unsaved changes, saving, save success and save failure variants. Preserve data on failure.
```

### CUS-25 — ADDR-01 Saved Address Book

```text
Create ADDR-01 Manage Saved Addresses.

Title “Saved addresses”, back action and prominent Add address control. Display Home, Work and other saved locations as readable rows/cards with label, address, default indicator, edit action and overflow menu for removal. Make the default address clearly visible. Provide add, edit and delete-confirmation flows. Include no saved addresses, address unavailable and loading states. Do not show full personal details beyond what the app needs.
```

### CUS-26 — ADDR-02 Add or Edit Address

```text
Create ADDR-02 Add/Edit Delivery Address.

Top: back and title “Add address” or “Edit address”. Provide address search entry, optional map pin selection, resolved street address, apartment/unit, delivery label (Home/Work/Other) and delivery instruction field. Include “Set as default” control. Primary “Save address”. Field validation must explain missing/invalid address. Include GPS permission denied and address outside service-area variants. Preserve typed values if the user returns to search.
```

### CUS-27 — REW-01 Pitmaster Rewards Overview

```text
Create REW-01 Pitmaster Rewards Overview.

Use warm editorial brand styling, not a casino/loyalty-game look. Show a clear illustrative points balance, short explanation of how points work, progress toward the next reward only if the rule is confirmed, recent points activity and available rewards. Provide “View rewards” and “Points history” actions. Mark reward values, accrual and expiry as proposed until confirmed. Include new member, no activity and unavailable reward states.
```

### CUS-28 — REW-02 Reward Detail and Redemption

```text
Create REW-02 Reward Detail.

Show reward name, clear benefit, points required, eligibility and any restrictions only when known. Primary “Redeem reward” with confirmation overlay. Show insufficient points, expired reward and redemption success as separate states. Do not invent reward economics or guarantee a discount. Use the shared rewards design system.
```

### CUS-29 — NOTIF-01 Notification Center

```text
Create NOTIF-01 Customer Notification Center.

Title “Notifications”, tabs or filters All and Orders, grouped by Today/Earlier. Each notification has a meaningful icon, short title, one-line explanation, timestamp and unread indicator. Example content can include order accepted, driver assigned and order delivered using order CQ-20481. Tapping order notifications opens active order detail or tracking. Include empty, unread/read and load-error states. Do not flood the screen with promotional noise.
```

### CUS-30 — NOTIF-02 Notification Preferences

```text
Create NOTIF-02 Notification Preferences.

Title “Notification preferences”. Separate operational order updates from promotional/marketing messages. Provide clearly labeled switches, brief explanation and permission state if device notification access is denied. Do not make essential order updates appear equivalent to marketing opt-ins. Include saved, saving, permission denied and save failure variants. Marketing defaults are TBD until confirmed.
```

### CUS-31 — SUPPORT-01 Customer Help Center

```text
Create SUPPORT-01 Help and Support hub.

Title “How can we help?”. Show a clear search/help entry, order-related help, payments and refunds information, account help, delivery help, FAQs and contact support. The screen must prioritize support for the active order if one exists. Do not invent refund guarantees, operating hours or response times. Use concise category rows and helpful empty-search state. Links to SUPPORT-02 and active order detail.
```

### CUS-32 — SUPPORT-02 Contact Support / Report Issue

```text
Create SUPPORT-02 Contact Support.

Provide context selector (order CQ-20481 if entered from an order), issue category, concise description field and attachment/photo option only where supported. Show clear privacy guidance and a primary “Submit request” action. Include validation, attaching, submitting, success with reference number placeholder, and failure with preserved message. Do not invent a guaranteed response time. Label support-channel integration as prototype if not connected.
```

### CUS-33 — SET-01 Customer Settings and Security

```text
Create SET-01 Customer Settings.

Group account security, password, privacy, terms, about and logout in a clean settings list. Include “Change password” route, privacy/terms rows and a distinct sign-out action at the bottom. Show sign-out confirmation dialog and session-expired variant. Account deletion is not a primary control; if included, classify it as Proposed and add a separate confirmation design. Do not invent legal policy text.
```

---

# PART D — DELIVERY PARTNER APP: SCREEN-BY-SCREEN PROMPTS

## Driver authentication, registration and onboarding

### DRV-01 — DRV-AUTH-01 Driver Sign In

```text
Create DRV-AUTH-01 Delivery Partner Sign In.

This is an operational app entry screen, not the customer sign-in screen copied with a new title. Use the same Crust & Q brand but a more task-focused layout. Show driver wordmark/descriptor, title “Driver sign in”, labeled email/phone field, password field with visibility control, Forgot password and primary “Sign in” CTA. Secondary “Apply to deliver” action. Add concise trust/security note. Include validation, loading, invalid credentials and session-expired variants. Successful prototype path opens DRV-DASH-01 only for an already approved driver; otherwise route to verification status.
```

### DRV-02 — DRV-AUTH-02 Driver Registration

```text
Create DRV-AUTH-02 Driver Registration Start.

Title “Become a Crust & Q delivery partner”. Explain the application process without promising approval or earnings. Show a concise step indicator: Personal details → Vehicle → Documents → Review. Fields for full name, email, phone and password. Primary “Continue”. Include returning applicant sign-in link, form validation and application-resume state. Do not claim specific eligibility rules unless confirmed.
```

### DRV-03 — DRV-ONB-01 Personal Details

```text
Create DRV-ONB-01 Driver Personal Details.

Show onboarding progress step 1 of 4. Collect required identity/contact fields only as defined by confirmed requirements. Use labeled inputs, clear helper text, country code, date input only if required and consent/acknowledgement rows only when policy is supplied. Primary “Continue”. Include incomplete form and validation states. Protect sensitive information visually; do not show sample government ID numbers.
```

### DRV-04 — DRV-ONB-02 Vehicle Information

```text
Create DRV-ONB-02 Vehicle Information.

Progress step 2 of 4. Provide vehicle type selection as clear selectable rows/cards, vehicle make/model, color and registration information only where required. Use concise help text and a small vehicle illustration or icon. Show selected state, validation and unsupported-vehicle state. Do not invent vehicle eligibility rules. Continue to document upload.
```

### DRV-05 — DRV-ONB-03 Document Upload

```text
Create DRV-ONB-03 Driver Document Upload.

Progress step 3 of 4. Show each required document as a separate upload row with document title, why it is needed only if confirmed, accepted file type/size only if known, upload status, preview/replace action and clear error state. Do not show or generate realistic personal ID numbers. Use placeholder/redacted sample document previews. Include not uploaded, uploading, uploaded, rejected/replace and upload failure states. Exact required documents remain TBD until business confirmation.
```

### DRV-06 — DRV-ONB-04 Review and Submit

```text
Create DRV-ONB-04 Driver Application Review.

Progress step 4 of 4. Display a structured summary of personal details, vehicle and document completion, each with Edit action. Primary “Submit application”. Explain that submission does not mean approval. Include incomplete application warning, submitting/loading and submission confirmation variants. Avoid fabricated service-level timelines.
```

### DRV-07 — DRV-ONB-05 Verification Status

```text
Create DRV-ONB-05 Driver Verification Status as one screen design with three clearly documented variants: Pending Review, Approved and Action Required/Rejected.

Pending: calm status icon, “Application under review”, submitted date if known, next-step explanation and support route.
Approved: success status, “You’re approved”, clear “Go to driver dashboard” action.
Action required: precise document issue placeholder, “Update documents” action and support route. Do not invent rejection reasons or approval timelines. The approved variant routes to DRV-DASH-01; pending state does not expose active dispatch functionality.
```

## Driver dashboard, availability and offers

### DRV-08 — DRV-DASH-01 Driver Dashboard

```text
Create DRV-DASH-01 Driver Shift Dashboard. This is the visual anchor for the Delivery Partner App.

Top: driver greeting “Good afternoon, Morgan”, profile/avatar control and clear account/verification status. Prominent availability panel with Online/Offline control and a plain-language explanation of current state. Show current shift summary with earnings, completed deliveries and time online using realistic hierarchy. If online, show a subtle “Looking for nearby orders” panel; if offline, explain how to go online. Add current active delivery panel when one exists. Include today’s completed deliveries list and a clear earnings shortcut.

Proposed bottom navigation: Dashboard, Deliveries, Earnings, Profile. The Online control must be easy to reach and unambiguous. Do not make the entire dashboard look like a dense analytics product. Include offline, searching, no orders, active delivery, GPS unavailable, network failure and shift-complete states. Use synthetic example values and label earnings rules as illustrative.
```

### DRV-09 — DRV-SHIFT-01 Shift Summary

```text
Create DRV-SHIFT-01 Shift Summary.

Show shift start/end if available, time online, completed deliveries, illustrative gross earnings, tips and any adjustments only if supported. Include clear “Go online” or “End shift” action depending on current state. End-shift confirmation should explain whether an active delivery prevents leaving. Do not invent break, scheduling or labor policies. Include empty shift and loading states.
```

### DRV-10 — DRV-LOCATION-01 Location Permission and GPS Status

```text
Create DRV-LOCATION-01 Location Access Required.

Explain why location access is needed for nearby delivery offers and navigation. Show a clear permission illustration, concise privacy-conscious explanation and “Enable location” CTA. Include permission denied, device location turned off, approximate/inaccurate location and network unavailable variants. Provide “Open device settings” as a prototype action only. Do not imply GPS works until permission and device services are actually enabled.
```

### DRV-11 — DRV-REQ-01 Incoming Delivery Offer

```text
Create DRV-REQ-01 Incoming Delivery Offer.

The screen must support rapid decision-making. Use a large but compact offer panel with visible countdown ring/bar and “12 seconds remaining” as one example state in a 15-second offer window. Show pickup restaurant, drop-off area, trip distance, estimated time if available, payout breakdown and customer tip as separate figures. Use a light mini-map route preview. Primary “Accept delivery” and secondary “Decline” controls must be visually distinct and easy to tap.

Example demo payout: $12.50 total = $8.50 illustrative base + $4.00 illustrative tip. Do not present the breakdown as approved policy. Include initial offer, countdown running, accepted, declined, expired and offer-reassigned variants. Never make the expired offer appear actionable.
```

### DRV-12 — DRV-REQ-02 Offer Declined or Expired

```text
Create DRV-REQ-02 Delivery Offer Closed state.

Design two variants: Declined and Expired. Use concise confirmation, explain that the offer is no longer available, and provide a clear return to dashboard/searching state. Do not use alarming error styling for a normal decline. Do not allow an expired offer to be accepted. If another offer is available, show it as a separate new offer, not as the same expired one.
```

### DRV-13 — DRV-ORDER-01 Accepted Delivery Details

```text
Create DRV-ORDER-01 Accepted Delivery Details.

Show order CQ-20481, restaurant name and pickup address, customer drop-off area/address as permitted, route distance, estimated time, delivery instructions when available, payout summary and current assignment status. Provide the next action “Navigate to restaurant”. Include issue/report action in secondary menu. Sensitive customer details should be revealed only when operationally necessary. Include assignment loading and assignment changed states.
```

## Driver restaurant pickup and customer delivery

### DRV-14 — DRV-PICK-01 Navigate to Restaurant

```text
Create DRV-PICK-01 Driver Navigation to Restaurant.

Use a daylight map with a clear route to Crust & Q — Downtown Oven. Top maneuver card gives one clear next instruction and distance, with readable street labels. Bottom panel shows restaurant destination, estimated arrival and next action. Provide accessible map controls and an option to open external navigation only as a prototype action. Keep the screen distraction-minimal. Include rerouting, GPS weak and route unavailable variants. No dark map theme.
```

### DRV-15 — DRV-PICK-02 Restaurant Arrival

```text
Create DRV-PICK-02 Arrived at Restaurant.

Show a clear arrival confirmation, restaurant identity, pickup instructions and order ID CQ-20481. Primary action “I’m at the restaurant”. Provide secondary “Report an issue”. Include wrong location, restaurant not found and arrival confirmation states. Do not invent a geofence confirmation if it is not implemented.
```

### DRV-16 — DRV-PICK-03 Pickup Verification and Order Ready

```text
Create DRV-PICK-03 Pickup Order Verification.

Show order ID, restaurant, item summary, pickup status and a simple checklist for confirming the correct packaged order. Include “Confirm pickup” as primary action and “Order not ready” / “Problem with order” as secondary actions. Barcode, PIN or QR verification must be omitted or visibly Proposed until confirmed. Include ready, waiting and incorrect/missing item variants.
```

### DRV-17 — DRV-PICK-04 Pickup Delay or Issue

```text
Create DRV-PICK-04 Restaurant Pickup Issue.

Allow the driver to choose a clear issue category such as order still preparing, restaurant closed, incorrect order or other issue. Show order context, optional short note and a safe “Contact support” path. Do not invent compensation or automatic cancellation behavior. Include issue submitted and retry/error states. Preserve the accepted order context.
```

### DRV-18 — DRV-NAV-01 Navigate to Customer

```text
Create DRV-NAV-01 Customer Turn-by-Turn Navigation.

This is an active task screen. Use a light daylight map, high-contrast route and one large next-turn instruction card. Show remaining distance and estimated arrival only as illustrative demo values. Keep customer destination information visible but privacy-conscious. Provide map controls, rerouting state and GPS unavailable state. A compact bottom panel shows order CQ-20481 and the next action “Arrived at customer”. No distracting analytics, promotional banners or decorative animations.
```

### DRV-19 — DRV-DROP-01 Customer Delivery Details

```text
Create DRV-DROP-01 Customer Delivery Details.

Show the delivery address, building/unit information only where necessary, customer delivery note, safe contact options and delivery method instructions. Use a clear arrival status and one primary action “I’ve arrived”. Mask or minimize sensitive data. Include address unclear, customer note present and contact unavailable variants. Do not fabricate a real phone number.
```

### DRV-20 — DRV-DROP-02 Arrival and Handoff Method

```text
Create DRV-DROP-02 Delivery Handoff Selection.

After arrival, show the accepted handoff methods as configured choices only: hand to customer, leave at door or other supported method. If the actual policy is unknown, mark leave-at-door as Proposed and do not make it the default. Display customer instructions clearly. Primary action continues to the matching proof/completion requirement. Include customer not present and method not allowed variants.
```

### DRV-21 — DRV-PROOF-01 Proof of Delivery

```text
Create DRV-PROOF-01 Proof of Delivery.

Design an operationally clear capture screen. If photo proof is approved, show a large camera preview area with framing guide, capture/retake action and uploaded status. If signature or OTP is not confirmed, show these as Proposed variants in the design notes rather than mandatory controls. Include GPS/time confirmation only as a simulated prototype detail unless integration exists. Provide a concise privacy notice and clear completion action. Include camera permission denied, upload failure, retake and evidence submitted states. Do not display real customer documents or sensitive identifiers.
```

### DRV-22 — DRV-EXC-01 Customer Unavailable / Delivery Exception

```text
Create DRV-EXC-01 Delivery Exception.

Show order CQ-20481 and a clear “Unable to complete delivery” title. Provide issue options such as customer unavailable, unsafe/blocked access, address issue or other. Include contact attempt status only if represented as a prototype. Primary next step should route to the approved support/exception handling process. Do not invent waiting periods, automatic return-to-store steps, penalties or cancellation policies. Include submitted, pending guidance and network failure variants.
```

### DRV-23 — DRV-COMP-01 Delivery Completion

```text
Create DRV-COMP-01 Delivery Completion.

Show a clear success confirmation, order ID CQ-20481, completion time, delivery destination summary and illustrative payout $12.50. Provide a compact breakdown if appropriate, and primary “Back to dashboard” action. Secondary “View delivery details”. Do not imply payout is immediately transferred unless confirmed. Include completion submission failure and confirmation state. Once completed, the order must not remain in the active-delivery list.
```

## Driver earnings, history and account

### DRV-24 — DRV-EARN-01 Earnings Overview

```text
Create DRV-EARN-01 Driver Earnings Overview.

Title “Earnings”, clear current period selector (Today / Week / Month only as proposed if reporting supports it). Show total earnings prominently, completed trips, illustrative tips and a concise earnings trend. Use readable chart labels and avoid a generic finance-dashboard overload. Provide earnings history and payout details links. Mark calculations and payout policies as illustrative until confirmed. Include no earnings, loading and unavailable data variants.
```

### DRV-25 — DRV-EARN-02 Earnings Transaction Detail

```text
Create DRV-EARN-02 Earnings Detail.

Show date/time, delivery ID, restaurant/customer delivery area as permitted, base payout, tip and any other approved adjustments, then total. Make clear whether the amount is estimated, earned or paid. Do not invent fees, bonuses or deductions. Include pending/paid/adjusted status only if those concepts are confirmed. Provide back navigation to earnings history.
```

### DRV-26 — DRV-PAYOUT-01 Payout History

```text
Create DRV-PAYOUT-01 Payout History.

List payout records with date, amount, destination label masked appropriately and status. Filter or group by recent periods only if supported. Show a clean empty state and a payout unavailable state. Do not invent payout frequency, provider, minimum threshold or settlement time. Any example records must be labeled synthetic in design documentation.
```

### DRV-27 — DRV-PAYOUT-02 Payout Detail

```text
Create DRV-PAYOUT-02 Payout Detail.

Show payout reference, payout date, amount, masked destination, status and linked earning summary. Provide support action for a payout issue. Do not expose bank account numbers or invent a payout provider. Distinguish pending, processed and failed variants only where the business confirms those statuses.
```

### DRV-28 — DRV-HIST-01 Delivery History

```text
Create DRV-HIST-01 Delivery History.

Use list sections for Recent, Completed and other approved statuses. Each row shows order/delivery ID, date, destination area, distance if available, completion state and earned amount. Provide search/filter only if useful. Include empty, loading and error variants. Tap row opens DRV-HIST-02.
```

### DRV-29 — DRV-HIST-02 Delivery Detail

```text
Create DRV-HIST-02 Delivery Detail.

Show delivery ID, restaurant pickup, destination summary, timeline of accepted/picked-up/completed events, distance and earnings breakdown. Include support link for a delivery issue. Do not expose more customer personal data than necessary. Maintain consistency with the history record and synthetic order data.
```

### DRV-30 — DRV-PROF-01 Driver Profile Overview

```text
Create DRV-PROF-01 Driver Profile Overview.

Show driver identity summary, profile photo/avatar, verification status and account access. Group menu links: Personal details, Vehicle, Documents and verification, Earnings/payouts, Delivery history, Notifications, Help and support, Settings. Display a clear online/offline status only if relevant. Keep the driver profile separate from the customer profile architecture. Bottom nav Profile active. Use clear rows and restrained dividers.
```

### DRV-31 — DRV-PROF-02 Edit Driver Profile

```text
Create DRV-PROF-02 Edit Driver Profile.

Show editable personal details and contact information based on approved fields. Use visible labels, helper copy and safe verification prompts only where required. Primary Save changes. Include validation, saving, success and failure states. Do not display real driver identity numbers or personal contact data.
```

### DRV-32 — DRV-PROF-03 Vehicle and Documents

```text
Create DRV-PROF-03 Vehicle and Documents management.

Use two clearly separated sections or tabs: Vehicle information and Submitted documents. Show vehicle type/summary, registration details masked where appropriate, each document's current review status, expiry reminder only if expiry rules are confirmed, and replace/update actions. Include approved, pending, rejected/action-required and expired variants as business-confirmed states only. Do not invent document requirements.
```

### DRV-33 — DRV-NOTIF-01 Driver Notifications

```text
Create DRV-NOTIF-01 Driver Notification Center.

Group operational alerts such as new delivery assignment, verification status, payout update and support response. Show unread state, timestamp and one clear next action. Do not mix marketing promotions into critical operational alerts. Include empty, read, unread and loading states. A notification must open the correct workflow rather than a generic dashboard.
```

### DRV-34 — DRV-SUPPORT-01 Driver Support and Issue Reporting

```text
Create DRV-SUPPORT-01 Driver Help and Support.

Provide categories for delivery assignment, restaurant pickup, navigation/location, customer handoff, earnings/payout and account/document verification. Include search, FAQ links and contact support. When entered from an active delivery, preserve the delivery ID context. Provide report issue form with category, description and optional attachment only when supported. Do not invent response-time guarantees or emergency policies.
```

### DRV-35 — DRV-SET-01 Driver Settings

```text
Create DRV-SET-01 Driver Settings.

Include account/security, notifications, location permissions, privacy, terms, app information and sign out. Keep location permission state understandable and provide open-settings path as a prototype action. Place sign out at the bottom with confirmation. Do not add unapproved shift, payout or account-deletion policies.
```

---

# PART E — SHARED STATES AND OVERLAY PROMPTS

Generate these as separate screens or component-state variants where Stitch supports it. Do not create duplicate full screens when a focused overlay or reusable component is more appropriate.

## SH-01 — Global Loading Skeletons

```text
Create a reusable Crust & Q loading-state system: home hero skeleton, product-row skeleton, profile-list skeleton, order-card skeleton and driver dashboard skeleton. Each skeleton must match the geometry of the real content, use a subtle warm-neutral shimmer and avoid generic oversized spinners. Include reduced-motion treatment.
```

## SH-02 — Empty States

```text
Create a consistent empty-state family for: empty cart, no search results, no order history, no notifications, no rewards activity, no available delivery offers and no earnings records. Each state needs a concise title, short explanation and one relevant next action. Use original restrained illustrations or product imagery; no emojis and no generic empty-box clip art.
```

## SH-03 — Error and Offline States

```text
Create reusable inline error, full-screen recoverable error, offline banner, retry action, address validation error, payment failure and upload failure states. Use warm, accessible error styling, plain language and clear recovery actions. Preserve user-entered data wherever possible. Never blame the user or hide the reason for failure.
```

## SH-04 — Confirmation Dialogs

```text
Create reusable confirmation dialogs for remove cart item, delete saved address, remove payment method, discard unsaved form, sign out and any approved cancellation flow. Each dialog needs a specific title, concise consequence, safe secondary action and clearly differentiated destructive action. Do not use one generic dialog for all decisions.
```

## SH-05 — Status and Progress Components

```text
Create reusable status badges, four-stage order progress tracker, driver application progress, seven-step pizza builder progress, countdown offer indicator and delivery timeline. Use text labels plus icon/shape cues; never rely on color alone. Ensure labels remain readable at mobile scale.
```

---

# PART F — END-TO-END PROTOTYPE FLOW PROMPTS

## FLOW-01 — Customer discovery to checkout

```text
Connect the Customer prototype: ONB-01 → HOME-01 → LOC-01/LOC-02 when changing address → MENU-01 or CAT-01 → SRCH-01 where relevant → DISH-01 or PIZ-01 through PIZ-07 → CART-01 → PROMO-01 → CHECK-01 → ORDER-SUCC-01. Preserve cart selections, address, quantity and total across all screens. Back actions must preserve state. Include guest and authenticated entry paths. Ensure no primary action is a dead end.
```

## FLOW-02 — Customer order tracking and history

```text
Connect ORDER-SUCC-01 → TRACK-01 → ORDER-DETAIL-01 → HIST-01 → HIST-02 → HIST-03. Use the same order CQ-20481, items, customer and demo values. Order status must progress logically. Use simulated map movement only as a prototype. Add support entry from active and completed order detail.
```

## FLOW-03 — Customer profile and account management

```text
Connect HOME-01 → PROF-01 → PROF-02, ADDR-01 → ADDR-02, PAY-01, REW-01 → REW-02, NOTIF-01 → NOTIF-02, SUPPORT-01 → SUPPORT-02 and SET-01. Ensure a logical return path from every sub-screen. Preserve unsaved edits and distinguish account settings from order history.
```

## FLOW-04 — Driver onboarding and approval

```text
Connect DRV-AUTH-01 → DRV-AUTH-02 → DRV-ONB-01 → DRV-ONB-02 → DRV-ONB-03 → DRV-ONB-04 → DRV-ONB-05. Pending and rejected/action-required states must not lead to active dispatch. Approved state may continue to DRV-DASH-01. Do not invent verification backend behavior or approval timelines.
```

## FLOW-05 — Driver delivery lifecycle

```text
Connect DRV-DASH-01 → DRV-REQ-01 → DRV-ORDER-01 → DRV-PICK-01 → DRV-PICK-02 → DRV-PICK-03 → DRV-NAV-01 → DRV-DROP-01 → DRV-DROP-02 → DRV-PROOF-01 → DRV-COMP-01. Add alternate branches for decline/expiry, pickup delay, GPS unavailable and customer unavailable using the corresponding exception screens. A completed delivery must leave the active queue. Do not allow accepting an expired offer.
```

## FLOW-06 — Driver account and earnings

```text
Connect DRV-DASH-01 → DRV-EARN-01 → DRV-EARN-02, DRV-PAYOUT-01 → DRV-PAYOUT-02, DRV-HIST-01 → DRV-HIST-02, DRV-PROF-01 → DRV-PROF-02 / DRV-PROF-03, DRV-NOTIF-01, DRV-SUPPORT-01 and DRV-SET-01. Preserve order and payout references consistently.
```

---

# PART G — BATCH QA PROMPT

Use this after each related batch, not only at the end.

```text
Audit the latest Crust & Q Stitch screens against DESIGN.md and the screen-by-screen prompt requirements.

Check:
1. Correct 390 × 844 mobile frame and safe areas.
2. No clipping, overlap, horizontal overflow or unreadable text.
3. Typography uses Manrope and DM Sans; no Inter.
4. Warm cream / white light theme is consistent.
5. Tomato Flame is the dominant brand accent; semantic green/honey are used sparingly.
6. Buttons, inputs, cards, navigation and spacing are consistent with earlier approved screens.
7. Every CTA has a defined destination or state.
8. The screen has the correct entry, exit and back behavior.
9. Shared order, customer, driver, address and financial demo data remain consistent.
10. No fake backend integration, live GPS, payment processing or approved business policy is implied.
11. Important empty, loading, error, disabled, permission and exception states are represented.
12. The Customer App remains photo-led and welcoming; the Delivery Partner App remains task-first and safe to scan.

List defects by severity and revise the actual screens. Do not merely describe the fixes. Preserve correct existing work and do not redesign screens that already pass.
```

---

# PART H — FINAL COVERAGE REVIEW PROMPT

```text
Perform a final Crust & Q product-design coverage audit.

Inventory every generated Stitch screen by exact screen ID and compare it with the design modules in this prompt pack.

Produce separate tables for:
- Customer App.
- Delivery Partner App.
- Shared components and states.
- Prototype flows.

For each item, report: Generated, Revised, Connected, QA Passed, Proposed/TBD and Remaining Work.

Verify the complete customer journey from sign-in/guest entry through food discovery, customization, cart, checkout, order status, tracking, history and profile management.

Verify the complete driver journey from sign-in and registration through verification, dashboard, availability, dispatch, pickup, customer delivery, proof/completion, earnings, history and profile management.

Identify missing screens and missing states by exact ID. Do not say “complete” merely because a large number of screens exists. Do not claim live service integration from a visual prototype. Provide an honest final gap list and revise any screens that fail the visual or interaction checks.
```

---

# PART I — RECOMMENDED GENERATION ORDER

Generate in this order so Stitch can learn and reuse a stable visual language:

1. Generate HOME-01 and DRV-DASH-01 as the two visual anchors.
2. Refine `DESIGN.md` only if a genuine conflict is discovered; do not drift from the established brand.
3. Generate Customer authentication and location screens.
4. Generate menu, category, search and dish-detail screens.
5. Generate the seven pizza builder screens as a consistent sequence.
6. Generate cart, promotion, checkout and payment screens.
7. Generate order confirmation, tracking, active order and history screens.
8. Generate the full customer profile, addresses, payments, rewards, notification, support and settings screens.
9. Generate driver authentication, registration and verification screens.
10. Generate driver dispatch, pickup, navigation, handoff, proof and completion screens.
11. Generate driver earnings, payout, history, profile, notifications, support and settings screens.
12. Generate shared empty, loading, error, confirmation and status components.
13. Connect all six prototype flows.
14. Run Batch QA on each group and Final Coverage Review.

Do not generate a contact sheet or a collage as a substitute for independent screens. Keep screen IDs visible in the project organization, not as oversized UI content in the product interface.

## Owner-review decisions that must remain visible

The following are design proposals until confirmed:

- Four-tab Customer navigation.
- Four-tab Delivery Partner navigation.
- Rewards earning, redemption and expiration rules.
- Promotion eligibility, discount math and stacking.
- Cancellation and refund rules.
- Delivery fees, taxes and tip behavior.
- Driver document requirements and verification criteria.
- Driver offer timing and decline consequences.
- Pickup PIN, QR or barcode requirements.
- Leave-at-door permission.
- Photo, signature or OTP proof-of-delivery requirements.
- Driver payout schedule and settlement rules.
- Customer and driver contact/support policy.

The design must show where these decisions affect the UI without inventing business approval.
