# Authoritative Register of Open Business Decisions (TBD): Crust & Q

This document establishes the single source of truth for business, legal, operational, and financial rules that require business-owner confirmation.

> [!IMPORTANT]
> In accordance with Requirement Integrity standards, assumptions are **never** presented as approved business rules.
> Every item below uses a clearly labeled, conservative synthetic assumption in visual mockups and prototypes until explicitly confirmed.

---

## 1. Customer Ordering & Payment Decisions

| Decision ID | Area | Open Question | Conservative Demo Assumption Used | Business Owner Impact | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `TBD-CUST-01` | **Promotions** | Is the `CRUST50` promotion 50% off the total order or capped at item subtotal? | 50% discount applies to eligible item subtotal ($39.99 -> $20.00 subtotal). Delivery and taxes apply to net amount. | Changes cart calculation engine and maximum discount liability. | `TBD` |
| `TBD-CUST-02` | **Delivery Fee** | What is the minimum order threshold for free delivery? | Free delivery on orders over $35.00; standard $2.99 fee below $35.00. | Margin on small orders vs order conversion rate. | `TBD` |
| `TBD-CUST-03` | **Guest Checkout** | Can a guest user place an order without creating an account? | Guest checkout allowed with SMS-based live tracking link and order receipt. | Account acquisition vs friction during first order. | `TBD` |
| `TBD-CUST-04` | **Cancellation** | What is the cancellation window after an order is placed? | Full refund if cancelled within 60 seconds (before kitchen accepts); store credit or non-refundable once oven prep begins. | Food waste cost vs customer satisfaction. | `TBD` |
| `TBD-CUST-05` | **Alcohol Delivery** | Does Crust & Q deliver craft beers / wines requiring 21+ ID check? | Initial release is food & craft non-alcoholic beverages only; 21+ ID verification deferred to P2. | Regulatory compliance and driver training. | `TBD` |
| `TBD-CUST-06` | **Reward Valuation** | What is the earning and redemption rate for Pitmaster Points? | 10 points per $1.00 spent. 100 points = $1.00 reward credit. Points expire after 180 days of inactivity. | Financial liability and loyalty program liability. | `TBD` |

---

## 2. Delivery Partner Operational Decisions

| Decision ID | Area | Open Question | Conservative Demo Assumption Used | Business Owner Impact | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `TBD-DRV-01` | **Driver Onboarding** | Which background check provider (Checkr, Persona, etc.) is integrated? | UI shows standard 4-step document submission (Driver's License, Vehicle Registration, Insurance, W-9). | Integration cost and onboarding turnaround SLA. | `TBD` |
| `TBD-DRV-02` | **Dispatch Window** | What is the exact countdown timer for incoming delivery offers? | 15-second radial countdown timer before auto-reassignment to next courier. | Driver acceptance rate vs customer delivery ETA. | `TBD` |
| `TBD-DRV-03` | **Proof of Delivery** | Is photo proof required for all orders, or only "Leave at Door"? | Photo capture required for "Leave at Door"; optional recipient signature pad for high-value orders (>$75). | Delivery dispute resolution and driver delivery time. | `TBD` |
| `TBD-DRV-04` | **Delivery OTP** | Is a customer 4-digit PIN required upon delivery? | Proposed as optional anti-theft setting for high-density apartment drop-offs; disabled by default. | False delivery claims vs handoff friction. | `TBD` |
| `TBD-DRV-05` | **Payout Schedule** | When are driver earnings disbursed? | Weekly direct deposit (Mondays) with optional instant cash-out for a $0.50 processing fee. | Treasury cash-flow and banking partner integration. | `TBD` |
| `TBD-DRV-06` | **Tip Distribution** | Does the driver receive 100% of customer tips? | 100% of customer tip passes directly to driver with zero platform fee deduction. | Driver retention, legal compliance, and earnings transparency. | `TBD` |
