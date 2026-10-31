# Fintech Mobile App Asset Manifest

Tracks all visual assets generated, reviewed, approved, and imported into Figma for `fintech-mobile-app`.

## Approval Workflow Statuses

- `PENDING_REVIEW`: Asset generated, awaiting user review.
- `APPROVED`: Explicitly approved for design use.
- `REJECTED`: Declined asset; stored in `assets/rejected/`.
- `IMPORTED_TO_FIGMA`: Placed and verified on Figma canvas.
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

| ID         | Asset Name              | Category        | Intended Screen                     | Dimensions | Format | Provider & Model           | Approval Status       | License Status            | Figma Node |
| ---------- | ----------------------- | --------------- | ----------------------------------- | ---------- | ------ | -------------------------- | --------------------- | ------------------------- | ---------- |
| `ONB-001A` | `hero_wallet_variant_a` | Onboarding Hero | `ONB-02` (Consumer / Rewards Theme) | 1024×1024  | JPG    | Google DeepMind (Imagen 3) | `IMPORTED_FOR_REVIEW` | `VERIFIED_COMMERCIAL_USE` | `5:2`      |
| `ONB-001B` | `hero_wallet_variant_b` | Onboarding Hero | `ONB-02` (Minimalist / Clean Theme) | 1024×1024  | JPG    | Google DeepMind (Imagen 3) | `IMPORTED_FOR_REVIEW` | `VERIFIED_COMMERCIAL_USE` | `5:3`      |
| `ONB-001C` | `hero_wallet_variant_c` | Onboarding Hero | `ONB-02` (Premium Wealth Theme)     | 1024×1024  | JPG    | Google DeepMind (Imagen 3) | `IMPORTED_FOR_REVIEW` | `VERIFIED_COMMERCIAL_USE` | `5:4`      |

---

## Detailed Asset Records

### Record: `ONB-001A` (3D Character & Rewards Onboarding)

- **Approved File**: `assets/approved/onboarding/hero_wallet_variant_a.jpg`
- **Figma Placement**: Node `5:2` (`hero_wallet_variant_a`, 400×300 px frame)
- **Theme**: Consumer Friendly / Gamified Rewards Onboarding.
- **Visual Style**: 3D Isometric Character with glowing digital wallet card and floating coins.
- **Palette**: Cyan `#00D2FF`, Purple, Gold, Clean White.
- **Provider**: Google DeepMind via Antigravity Cloud
- **Model**: Imagen 3 (3.0)
- **Generation Date**: 2026-10-31
- **Provider Terms**: `https://policies.google.com/terms/generative-ai`
- **Model License**: Google Generative AI Additional Terms
- **Commercial Use Permission**: `VERIFIED_COMMERCIAL_USE`
- **Attribution Required**: No
- **Additional Restrictions**: Standard AUP applies; do not represent output as human photographic identity.
- **Approval Status**: `IMPORTED_TO_FIGMA`

### Record: `ONB-001B` (Minimalist Flat 2D Vector)

- **Approved File**: `assets/approved/onboarding/hero_wallet_variant_b.jpg`
- **Figma Placement**: Node `5:3` (`hero_wallet_variant_b`, 400×300 px frame)
- **Theme**: Clean SaaS / Accessibility / Low-bandwidth mode.
- **Visual Style**: Flat 2D outline vector illustration of smartphone and pastel tokens.
- **Palette**: Mint `#A8E6CF`, Lavender, Coral, Solid White.
- **Provider**: Google DeepMind via Antigravity Cloud
- **Model**: Imagen 3 (3.0)
- **Generation Date**: 2026-10-31
- **Provider Terms**: `https://policies.google.com/terms/generative-ai`
- **Model License**: Google Generative AI Additional Terms
- **Commercial Use Permission**: `VERIFIED_COMMERCIAL_USE`
- **Attribution Required**: No
- **Additional Restrictions**: None.
- **Approval Status**: `IMPORTED_TO_FIGMA`

### Record: `ONB-001C` (Premium 3D Clay & Frosted Glass)

- **Approved File**: `assets/approved/onboarding/hero_wallet_variant_c.jpg`
- **Figma Placement**: Node `5:4` (`hero_wallet_variant_c`, 400×300 px frame)
- **Theme**: Premium Banking & Wealth Management (Primary Hero).
- **Visual Style**: Abstract 3D clay and frosted glass with light refraction and golden tokens.
- **Palette**: Frosted crystal, iridescent reflections, metallic gold, studio white.
- **Provider**: Google DeepMind via Antigravity Cloud
- **Model**: Imagen 3 (3.0)
- **Generation Date**: 2026-10-31
- **Provider Terms**: `https://policies.google.com/terms/generative-ai`
- **Model License**: Google Generative AI Additional Terms
- **Commercial Use Permission**: `VERIFIED_COMMERCIAL_USE`
- **Attribution Required**: No
- **Additional Restrictions**: None.
- **Approval Status**: `IMPORTED_TO_FIGMA`

---

## Imported Figma Native Screen Boards (Live on Canvas)

| Board ID | File / Board Name                      | Platform | Screen IDs Contained                                                                                                    | Dimensions | Format                      | Placed Node ID | Status              |
| -------- | -------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- | ---------- | --------------------------- | -------------- | ------------------- |
| `BRD-01` | `03-ios-onboarding-authentication`     | iOS      | `ONB-01`, `ONB-02`, `AUTH-01`, `AUTH-01-OTP`, `AUTH-01-ERROR`, `AUTH-02`                                                | 3078×1272  | SVG (Editable Vector Trees) | `8:2`          | `IMPORTED_TO_FIGMA` |
| `BRD-02` | `04-ios-home-cards-account`            | iOS      | `HOME-01`, `HOME-01-LOADING`, `HOME-01-OFFLINE`, `WALLET-01`, `WALLET-01-FROZEN`, `WALLET-01-EMPTY`, `ACT-01`, `SET-01` | 4056×1272  | SVG (Editable Vector Trees) | `8:448`        | `IMPORTED_TO_FIGMA` |
| `BRD-03` | `05-ios-payments`                      | iOS      | `TXN-01`, `TXN-01-INSUFFICIENT`, `TXN-02`, `TXN-02-FAILED`, `TXN-03`, `TXN-04`                                          | 3078×1272  | SVG (Editable Vector Trees) | `8:1414`       | `IMPORTED_TO_FIGMA` |
| `BRD-04` | `06-android-onboarding-authentication` | Android  | `ONB-01`, `ONB-02`, `AUTH-01`, `AUTH-01-OTP`, `AUTH-01-ERROR`, `AUTH-02`                                                | 3192×1335  | SVG (Editable Vector Trees) | `8:2054`       | `IMPORTED_TO_FIGMA` |
| `BRD-05` | `07-android-home-cards-account`        | Android  | `HOME-01`, `HOME-01-LOADING`, `HOME-01-OFFLINE`, `WALLET-01`, `WALLET-01-FROZEN`, `WALLET-01-EMPTY`, `ACT-01`, `SET-01` | 4208×1335  | SVG (Editable Vector Trees) | `8:2486`       | `IMPORTED_TO_FIGMA` |
| `BRD-06` | `08-android-payments`                  | Android  | `TXN-01`, `TXN-01-INSUFFICIENT`, `TXN-02`, `TXN-02-FAILED`, `TXN-03`, `TXN-04`                                          | 3192×1335  | SVG (Editable Vector Trees) | `8:3464`       | `IMPORTED_TO_FIGMA` |
