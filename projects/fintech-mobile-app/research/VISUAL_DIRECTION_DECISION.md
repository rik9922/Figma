# Visual Direction Decision — "Quiet Precision"

- **Date**: 2026-10-31
- **Decided by**: Antigravity (lead product designer), per user instruction to decide independently
- **Status**: Recommended direction, applied to the iOS + Android screen set. Visual direction review and approval still belongs to the user.

---

## 1. Evaluation of the existing concepts (Figma nodes 5:2, 5:3, 5:4)

| Criterion (weight)              | A — 3D isometric character                   | B — flat 2D vector                         | C — 3D clay + frosted glass                      |
| ------------------------------- | -------------------------------------------- | ------------------------------------------ | ------------------------------------------------ |
| Financial trust (25%)           | Low — a mascot makes money feel like a game  | Medium — clear but anonymous               | High — feels like a physical, valuable object    |
| Premium feel (20%)              | Medium                                       | Low                                        | High                                             |
| Readability of data (20%)       | n/a (illustration only)                      | High                                       | Low when glass sits behind text (contrast drops) |
| Scalability to 38 screens (15%) | Low — every state needs a new character pose | High                                       | Low — raster renders can't be edited or themed   |
| Distinctiveness (10%)           | Medium                                       | Low — the generic "SaaS illustration" look | Medium — popular glass/clay trend                |
| Accessibility (10%)             | Medium                                       | High                                       | Low                                              |
| **Weighted result**             | **2.3 / 5**                                  | **3.3 / 5**                                | **3.2 / 5**                                      |

**Conclusion**: none should be adopted as-is. B wins on usability, C wins on trust and value perception. A contributes only warmth, which can be carried by copy and motion instead of a mascot.

## 2. What the research says

- **Revolut**: dense, widget-based, dark premium tiers — powerful but heavy. Lesson: premium = restraint on dark surfaces, not more effects.
- **Monzo**: one signature colour (hot coral) on calm neutrals; spending is not coloured red. Lesson: a single signal colour is enough for recognition.
- **Wise**: total fee/rate transparency _before_ confirming. Lesson: the review screen must show fee, rate, recipient amount and arrival time.
- **N26**: whitespace, hairline borders, architectural calm. Lesson: hairlines over shadows.
- **Apple Wallet**: the card is the hero object; dimension lives only in the card.
- **Common rule across all four**: numbers are the primary graphic element — balances and amounts get the largest, heaviest type.
- **Apple HIG**: 3–5 tabs for top-level destinations only; sheets with medium/large detents for focused tasks; explain _why_ Face ID is requested; always offer a passcode fallback; hide balances in the app switcher.
- **Material 3 / Android 15**: edge-to-edge by default (content draws under system bars, insets must be handled); navigation bar 80 dp with an active-indicator pill; small top app bar 64 dp; bottom sheets with 28 dp top corners and a drag handle; system back instead of on-screen "Cancel".

## 3. The decision: "Quiet Precision"

**Premium minimalism (from B) + one dimensional hero object, the card (from C) + warmth through copy and motion (from A).**

| Principle                       | How it shows up                                                                                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Ink & paper                     | Warm paper background `#F6F4EF`, near-black ink `#0F1115`. Calm, editorial, unlike typical blue banking apps.                                   |
| One signal colour               | **Citrine `#D9F26B`** — used only on ink surfaces (contrast 15.7:1) and for the active nav indicator. Never used for text on light backgrounds. |
| Dimension only in the card      | The graphite card with a citrine light sweep is the only "3D" object. Everything else is flat.                                                  |
| Hairlines, not shadows          | 1 px `#E4E0D6` borders and tonal surfaces create depth. (Also matches what SVG import can render.)                                              |
| Editorial voice                 | _Instrument Serif_ for display headlines; _Inter_ for all UI and numbers.                                                                       |
| Numbers are heroes              | Balance 40/44 Inter Semibold, tight tracking; amounts right-aligned.                                                                            |
| Colour is never the only signal | Incoming amounts get a `+` sign and an arrow icon; status chips have icons and labels.                                                          |
| Spending is neutral             | Outgoing amounts are ink, not red. Red is reserved for actual errors.                                                                           |

### Things this direction deliberately avoids

Full-screen glassmorphism, purple/blue gradients, mascots, heavy drop shadows, red for normal spending, tiny grey financial text.

## 4. Platform strategy

Shared identity (colour, type, card, iconography, content) with **native structure**:

| Element      | iOS                                                    | Android                                                    |
| ------------ | ------------------------------------------------------ | ---------------------------------------------------------- |
| Frame        | 393 × 852 pt, status 59, home indicator 34             | 412 × 915 dp, status 40, gesture inset 24 (edge-to-edge)   |
| Top bar      | Large serif title / 44 pt nav bar, chevron + text back | Medium top app bar (112 dp) with serif title, ← arrow back |
| Tabs         | Tab bar 49 + 34, ink active state                      | Navigation bar 80 dp, citrine active-indicator pill        |
| Buttons      | 56 pt, 16 pt corner radius                             | 56 dp, full pill (M3 shape)                                |
| Sheets       | Grabber 36×5, "Cancel" text button                     | Drag handle 32×4, 28 dp corners, dismiss with system back  |
| Dialogs      | iOS alert (270 pt, stacked buttons)                    | M3 dialog (28 dp radius, icon, right-aligned text buttons) |
| Biometrics   | Face ID                                                | BiometricPrompt (fingerprint / face, Class 3)              |
| Switches     | iOS switch 51×31                                       | M3 switch 52×32 with thumb icon                            |
| Feedback     | Inline confirmation                                    | Snackbar                                                   |
| OTP autofill | "From Messages" keyboard suggestion                    | SMS autofill chip                                          |
