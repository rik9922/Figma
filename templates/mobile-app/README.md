# Mobile Application Design Template

## Platform Standards & Viewport Targets
- **iOS Viewport**: iPhone 16 Pro (`393 × 852 pt` @3x)
  - Top Safe Area (Dynamic Island / Status Bar): `59 pt`
  - Bottom Safe Area (Home Indicator): `34 pt`
  - Minimum Touch Target: `44 × 44 pt`
  - Typography: SF Pro / System Sans
- **Android Viewport**: Pixel 8 / 9 (`412 × 915 dp` @3x)
  - Top Safe Area (Status Bar): `24–48 dp`
  - Bottom Safe Area (System Nav / Gesture Bar): `24–48 dp`
  - Minimum Touch Target: `48 × 48 dp`
  - Typography: Roboto / Google Sans

## Mobile Container Hierarchy
Every mobile screen frame in Figma must follow this semantic layer structure:
```text
[SCREEN] 393 × 852 (Auto Layout: Vertical)
├── [STATUS_BAR] 393 × 59 (FIXED height)
├── [NAVIGATION_BAR] 393 × 56 (Auto Layout: Horizontal, HUG height)
├── [CONTENT_SCROLL_VIEW] (Auto Layout: Vertical, FILL width, FILL height)
│   ├── [HERO_SECTION]
│   ├── [CARD_CONTAINER]
│   └── [FORM_GROUP]
├── [BOTTOM_ACTION_BAR] 393 × 80 (Auto Layout: Horizontal, FIXED height)
└── [HOME_INDICATOR] 393 × 34 (FIXED height)
```
