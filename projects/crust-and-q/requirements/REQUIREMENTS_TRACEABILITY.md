# Requirements Traceability Matrix: Crust & Q

This matrix traces business requirements and user stories to their implementing screen IDs, reusable design system components, and automated validation tests.

## 1. Customer Experience Traceability

| Req ID | Requirement Description | Classification | Target Screen ID(s) | Design System Component | Test / Audit Verification |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `REQ-CUST-01` | Splash reveal, branding, and sign-in credentials input | `CONFIRMED` | `ONB-01` | `HeaderBar`, `InputField`, `PrimaryButton` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-02` | New customer account creation with US phone formatting | `CONFIRMED` | `AUTH-01` | `InputField`, `PrimaryButton`, `PhoneInput` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-03` | Password recovery and security reset link | `PROPOSED` | `AUTH-02` | `InputField`, `AlertBanner` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-04` | Guest user checkout intercept modal explaining account value | `CONFIRMED` | `GUEST-01` | `BottomSheet`, `PrimaryButton` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-05` | Home delivery hub with location header, 5-dot carousel, 3D categories, 2-tab dock | `CONFIRMED` | `HOME-01` | `TopAppBar`, `HeroCarousel`, `CategoryPlate`, `FoodCard`, `StickyCartBar`, `BottomDock` | `pnpm run audit:contrast crust-and-q` |
| `REQ-CUST-06` | Location permission prompt and saved address bottom sheet | `CONFIRMED` | `LOC-01` | `BottomSheet`, `AddressCard`, `EnableGPSBanner` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-07` | Comprehensive restaurant menu catalog with category filtering | `CONFIRMED` | `MENU-01` | `CategoryTabs`, `MenuItemCard`, `CounterStepper` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-08` | Dedicated category exploration for Steaks & Slow-Smoked BBQ | `PROPOSED` | `CAT-01` | `CategoryPlate`, `FilterChipGroup`, `FoodCard` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-09` | Food item customization modal (doneness, toppings, quantity) | `CONFIRMED` | `DISH-01` | `ModalDialog`, `RadioGroup`, `CheckboxGroup`, `QuantityStepper` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-10` | Interactive 7-Step "Build Your Own Pizza" customizer | `CONFIRMED` | `PIZZA-01` | `StepProgressIndicator`, `PizzaStageVisualizer`, `CrustSelector` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-11` | Itemized review cart with mathematically accurate promo discount | `CONFIRMED` | `CART-01` | `CartItemRow`, `PromoVoucher`, `TipPillGroup`, `BillBreakdown` | `Mathematical audit (subtotal net math)` |
| `REQ-CUST-12` | Address confirmation and payment method selection (Apple Pay/Card) | `CONFIRMED` | `CHECK-01` | `AddressCard`, `PaymentMethodSelector`, `PrimaryButton` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-13` | Order placed celebratory confirmation with estimated arrival | `CONFIRMED` | `ORDER-SUCC-01` | `SuccessCelebrationBadge`, `PrimaryButton` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-14` | Live Google Maps customer tracking with daylight Orlando cartography | `CONFIRMED` | `TRACK-01` | `DaylightMapView`, `GPSPolyline`, `MovingDriverMarker`, `ETAStatusCard`, `DriverContactCard` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-15` | Customer order history with active orders, past receipts, and 1-click reorder | `CONFIRMED` | `HIST-01` | `SegmentedControl`, `OrderReceiptCard`, `ReorderButton` | `./scripts/audit-architecture crust-and-q` |
| `REQ-CUST-16` | Customer profile overview, saved address management, Pitmaster rewards | `CONFIRMED` | `PROF-01` | `ProfileHeader`, `AccountNavigationList`, `RewardPointsCard` | `./scripts/audit-architecture crust-and-q` |

---

## 2. Delivery Partner Experience Traceability

| Req ID | Requirement Description | Classification | Target Screen ID(s) | Design System Component | Test / Audit Verification |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `REQ-DRV-01` | Delivery partner authentication and shift credentials | `CONFIRMED` | `DRV-AUTH-01` | `HeaderBar`, `InputField`, `PrimaryButton` | `./scripts/audit-architecture crust-and-q` |
| `REQ-DRV-02` | Driver onboarding, vehicle registration, and document submission | `PROPOSED` | `DRV-ONB-01` | `DocumentUploadCard`, `ProgressStepper`, `PrimaryButton` | `./scripts/audit-architecture crust-and-q` |
| `REQ-DRV-03` | Operational shift dashboard with online/offline toggle and earnings | `CONFIRMED` | `DRV-DASH-01` | `ShiftStatusSwitch`, `MetricTile`, `RecentTripRow` | `pnpm run audit:contrast crust-and-q` |
| `REQ-DRV-04` | 15-second radial incoming dispatch radar offer with payout breakdown | `CONFIRMED` | `DRV-REQ-01` | `RadarCountdownRing`, `RouteSummaryCard`, `AcceptDeclineButtons` | `./scripts/audit-architecture crust-and-q` |
| `REQ-DRV-05` | Restaurant arrival, kitchen pickup instructions, and order verification | `PROPOSED` | `DRV-PICK-01` | `PickupVerificationCard`, `OrderChecklist`, `ConfirmPickupButton` | `./scripts/audit-architecture crust-and-q` |
| `REQ-DRV-06` | Live turn-by-turn Google Maps navigation HUD with customer delivery notes | `CONFIRMED` | `DRV-NAV-01` | `TurnByTurnBanner`, `DaylightNavMap`, `CustomerNoteCard` | `./scripts/audit-architecture crust-and-q` |
| `REQ-DRV-07` | Doorstep photo proof of delivery viewfinder and optional recipient signature | `CONFIRMED` | `DRV-COMP-01` | `CameraViewfinder`, `GPSConfirmationBadge`, `SignaturePad` | `./scripts/audit-architecture crust-and-q` |
| `REQ-DRV-08` | Comprehensive driver earnings overview, weekly summary, and delivery history | `PROPOSED` | `DRV-EARN-01` | `EarningsChart`, `TripHistoryCard`, `PayoutDetailsCard` | `./scripts/audit-architecture crust-and-q` |
