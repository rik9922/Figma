# Design References & Visual Identity Exploration

## 1. Visual Direction & Aesthetic Pillars

### A. Materiality: Tactile Frosted Glass & Subtle Depth
- Translucent surface layers with gentle background blurs (`backdrop-filter: blur(20px)` in code, Background Blur `20` in Figma).
- Multi-layered soft drop shadows to create realistic floating depth:
  - Ambient Shadow: `0px 4px 12px rgba(0, 0, 0, 0.04)`
  - Elevated Card Shadow: `0px 12px 32px rgba(0, 0, 0, 0.08)`
  - Floating Action Shadow: `0px 8px 24px rgba(0, 122, 255, 0.24)`

### B. Color System & Emotional Resonance
- **Electric Cobalt (`#007AFF`)**: Primary brand anchor, signifying high security, trust, and clarity.
- **Deep Iris (`#5856D6`)**: Secondary brand accent, adding a contemporary, premium wealth aesthetic.
- **Cyber Gold (`#FF9500`)**: Tactical transaction highlight, card chip accents, and reward states.
- **Emerald Mint (`#34C759`)**: Positive financial gain, successful transaction verification.
- **Surface Hierarchy**:
  - Base: `#F8F9FB` (Light) / `#121214` (Dark)
  - Card: `#FFFFFF` (Light) / `#1C1C1E` (Dark)
  - Border: `rgba(0, 0, 0, 0.06)` (Light) / `rgba(255, 255, 255, 0.08)` (Dark)

### C. Typographic Ramp (SF Pro / System Sans)
- **Large Title**: 34 pt / Bold / Tracking -0.4px (Used on Splash & Total Balances)
- **Title 1**: 28 pt / Semibold / Tracking -0.2px (Screen Headers)
- **Headline**: 17 pt / Semibold (Card titles & action labels)
- **Body Regular**: 16 pt / Regular (Feeds & descriptive body copy)
- **Subheadline**: 15 pt / Regular (Secondary labels & timestamps)
- **Caption**: 12 pt / Medium (Tags, badges, & metadata)
