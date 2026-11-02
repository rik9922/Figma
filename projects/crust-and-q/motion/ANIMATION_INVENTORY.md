# Animation & Micro-Interaction Inventory: Crust & Q

This inventory documents all screen transitions, modal presentations, and micro-interactions for Crust & Q.

| Animation ID | Category | Target Component / Screen | Trigger | Purpose | Reduced-Motion Fallback |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `MOT-01` | Screen Transition | `ONB-01` → `HOME-01` | Tap "Sign In" | Fluid push transition from brand login to home hub. | 200ms simple cross-fade |
| `MOT-02` | Modal Presentation | `HOME-01` → `LOC-01` | Tap location header | Bottom sheet slide-up with dimmed background scrim. | Instant sheet appearance |
| `MOT-03` | Morph Transition | `PIZZA-01` Step 1 → 7 | Tap "Next Step" | 3D Pizza visualizer smoothly morphs toppings on stage. | Instant image swap with 150ms fade |
| `MOT-04` | Countdown Radar | `DRV-REQ-01` | Offer received | 15-second SVG stroke-dashoffset radial countdown ring. | Numerical seconds countdown |
| `MOT-05` | Success Celebration | `CHECK-01` → `ORDER-SUCC-01` | Tap "Pay & Place Order"| Green checkmark scales up with elastic celebratory pop. | Static checkmark + 150ms fade |
| `MOT-06` | Live Telemetry | `TRACK-01` | Real-time GPS stream | Driver vehicle marker pulses and glides along route polyline. | Static marker repositioning |
| `MOT-07` | Loading Shimmer | `HOME-01-LOADING` | Feed network fetch | Shimmer gradient pulse across food card placeholders. | Static subtle opacity |
