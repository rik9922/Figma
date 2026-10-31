# Responsive Web Application Template

## Breakpoint Ramp
- **Desktop (Wide)**: `1440 × 900 px` (12-column grid, 80px margin, 24px gutter)
- **Laptop / Tablet Landscape**: `1024 × 768 px` (12-column grid, 32px margin, 16px gutter)
- **Tablet Portrait**: `768 × 1024 px` (8-column grid, 24px margin, 16px gutter)
- **Mobile Companion**: `393 × 852 px` (4-column grid, 16px margin, 12px gutter)

## Layout Hierarchy
```text
[PAGE] (Auto Layout: Vertical)
├── [GLOBAL_HEADER] (FILL width, FIXED 72px)
├── [MAIN_CONTENT] (FILL width, HUG height)
└── [GLOBAL_FOOTER] (FILL width, HUG height)
```
