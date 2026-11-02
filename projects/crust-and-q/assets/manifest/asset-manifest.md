# Crust & Q Asset Manifest

Tracks all visual assets generated, reviewed, approved, and imported into Figma for Crust & Q.

## Approval Workflow Statuses

- `PENDING_REVIEW`: Asset generated, awaiting user review.
- `APPROVED`: Explicitly approved for design use.
- `REJECTED`: Declined asset; moved to `assets/rejected/`.
- `IMPORTED_TO_FIGMA`: Placed on Figma canvas.
- `REQUIRES_REVISION`: Needs parameter/prompt modifications.
- `LICENSE_BLOCKED`: Commercial license issue detected.

## Commercial License Statuses

- `VERIFIED_COMMERCIAL_USE`: Explicitly cleared for commercial production.
- `VERIFIED_NONCOMMERCIAL_ONLY`: Evaluation/personal use only.
- `RESTRICTED`: Specific trademark or usage restrictions.
- `UNKNOWN`: Unverified.
- `PENDING_VERIFICATION`: Under review; **must NOT be treated as commercially approved**.

---

## Asset Inventory

| ID | Asset Name | Category | Intended Screen | Dimensions | Format | Provider & Model | Approval Status | License Status | Figma Node |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `AST-01` | `hot_honey_pepperoni.jpg` | Photography | `HOME-01`, `MENU-01`, `CART-01` | 480 × 480 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 02_Home_and_Location_Artboard` |
| `AST-02` | `truffle_pizza.jpg` | Photography | `HOME-01`, `DISH-01` | 480 × 480 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 02_Home_and_Location_Artboard` |
| `AST-03` | `smoked_ribs.jpg` | Photography | `HOME-01`, `MENU-01`, `CAT-01` | 480 × 480 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 02_Home_and_Location_Artboard` |
| `AST-04` | `texas_brisket.jpg` | Photography | `HOME-01`, `MENU-01`, `CAT-01` | 480 × 480 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 02_Home_and_Location_Artboard` |
| `AST-05` | `smash_burger.jpg` | Photography | `HOME-01`, `DISH-01`, `CART-01` | 480 × 480 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 02_Home_and_Location_Artboard` |
| `AST-06` | `angus_ribeye.jpg` | Photography | `HOME-01`, `CAT-01` | 480 × 480 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 02_Home_and_Location_Artboard` |
| `AST-07` | `bbq_chicken_pizza.jpg` | Photography | `MENU-01`, `PIZZA-01` | 480 × 480 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 03_Category_and_Menu_Artboard` |
| `AST-08` | `chicken_sandwich.jpg` | Photography | `HOME-01`, `MENU-01` | 480 × 480 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 03_Category_and_Menu_Artboard` |
| `AST-09` | `hero_margherita.jpg` | Photography | `ONB-01`, `ORDER-SUCC-01` | 480 × 480 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 01_Customer_Onboarding_Artboard` |
| `AST-10` | `hero_promo_20.jpg` | Photography | `HOME-01` (Hero Carousel) | 480 × 300 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 02_Home_and_Location_Artboard` |
| `AST-11` | `hero_bbq_feast.jpg` | Photography | `HOME-01` (Carousel Slide 2) | 480 × 300 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 04_Assets_Page` |
| `AST-12` | `hero_heritage.jpg` | Photography | `HOME-01` (Carousel Slide 3) | 480 × 300 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 04_Assets_Page` |
| `AST-13` | `hero_ribeye.jpg` | Photography | `CAT-01` (Featured Header) | 480 × 300 | JPG | Imagen 3 (Cloud AI) | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 03_Category_and_Menu_Artboard` |
| `AST-14` | `crust_and_q_master_logo.svg`| Branding | Global / Cover / Onboarding | Vector SVG | SVG | Native Vector Engine | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 00_Cover_Page` |
| `AST-15` | `daylight_orlando_map.svg`| Illustration | `TRACK-01`, `DRV-NAV-01` | 390 × 600 | SVG | Native Cartography Engine | `APPROVED` | `VERIFIED_COMMERCIAL_USE` | `# 06_Live_Google_Maps_Artboard` |

---

## Detailed Asset Records

### Food Studio Assets (AST-01 through AST-13)
- **Provenance**: Generated via Antigravity Google Cloud AI (Imagen 3) at $0 cost; downscaled and optimized via macOS `sips` to 480px width to ensure lightweight (<75KB), retina-crisp mobile display without blurring or canvas lag.
- **Licensing**: Free cloud generation cleared for commercial evaluation and production under Google AI studio terms.

### Vector Cartography & Branding (AST-14 & AST-15)
- **Provenance**: Handcrafted pure SVG vectors modeling real Orlando avenues (Orange Ave, Robinson St, Central Blvd, Lake Eola).
- **Licensing**: 100% proprietary vector assets created for Crust & Q.
