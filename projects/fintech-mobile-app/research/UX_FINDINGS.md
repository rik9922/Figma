# UX Findings & Friction-Reduction Heuristics

## 1. Friction Points Discovered in Mobile Fintech

1. **The "Where is my money?" Anxiety**: When users open a financial app, cognitive load spikes if the primary liquid balance is hidden behind accounts or carousels.
   - _Design Response_: Screen `HOME-01` features an anchored hero card presenting total converted liquid assets with an instant currency toggle.
2. **Keypad Ergonomics & Fat-Finger Errors**: Entering transfer amounts on tiny text fields leads to miskeyed digits.
   - _Design Response_: Screen `TXN-01` uses custom 48×48 pt numeric buttons adhering to natural one-handed thumb reach (bottom 40% of the viewport).
3. **Modal Confirmation Fatigue**: Multi-page checkout screens cause abandonment.
   - _Design Response_: Screen `TXN-02` employs a slide-up bottom sheet with clear line-item fee breakdowns and inline FaceID trigger, keeping the user in their visual context.

## 2. Accessibility & Ergonomics Heuristics

- **Thumb Zone Compliance**: Primary action buttons ("Get Started", "Send", "Confirm") are placed strictly in the natural thumb sweep zone (bottom 120 pt of screen).
- **Dynamic Type & Scaling**: All typography scales with system font settings without clipping parent containers.
- **Color Independence**: Every success state features an icon checkmark + green badge; every error state features an alert triangle + red badge.
