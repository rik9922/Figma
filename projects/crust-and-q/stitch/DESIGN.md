# Crust & Q — Stitch Design System

> **Purpose:** The single visual and interaction source of truth for generating the Crust & Q Customer and Delivery Partner mobile experiences in Google Stitch.
>
> **Product:** Crust & Q — a premium-casual American restaurant ordering and delivery experience for wood-fired pizza, craft BBQ, burgers, steaks and sides.
>
> **Platforms:** One canonical cross-platform mobile design for iOS and Android. Do not duplicate every screen into separate iOS and Android versions.
>
> **Design status:** This is a design specification. Items marked Proposed or TBD are not approved business rules.

---

## 1. Visual theme and atmosphere

Create a **bright, warm, appetite-led restaurant experience**. The visual identity should feel like a contemporary wood-fired neighbourhood restaurant: welcoming, tactile, carefully art-directed, premium without being formal, and operationally clear.

The interface should combine:

- Editorial-quality food photography with natural light and believable food texture.
- Warm cream backgrounds and clean white content surfaces.
- Tomato-red brand emphasis used decisively, not sprayed across every component.
- Compact but readable information hierarchy suitable for a daily-use mobile application.
- Clear operational interfaces for delivery partners, with less decorative treatment and stronger task hierarchy.

**Atmosphere calibration**

- Density: 5/10 — balanced daily-use app, not a sparse marketing page and not a dense admin dashboard.
- Variance: 4/10 — controlled asymmetry in food photography and promotional composition; predictable navigation and form layouts.
- Motion: 5/10 — responsive, tactile transitions with restrained meaningful motion.
- Visual warmth: high.
- Decorative complexity: low to medium.
- Functional clarity: very high.

The Customer App may be more editorial and photo-led. The Delivery Partner App must prioritize legibility, speed, safe one-handed operation and clear next actions while remaining part of the same brand family.

Do not turn the application into a generic food-delivery clone. Build a recognizable Crust & Q identity around wood-fired pizza and craft-smoked BBQ.

## 2. Color palette and semantic roles

Use one consistent palette across every screen. Do not invent a new palette for each module.

| Semantic token | Hex | Role |
|---|---|---|
| Tomato Flame | `#D93B18` | Primary brand accent; main CTA, active navigation, selected controls, key emphasis |
| Warm Cream | `#FFF8F0` | Main app canvas and warm background |
| Pure Surface | `#FFFFFF` | Cards, sheets, input surfaces where contrast is needed |
| Sand Input | `#F4E9D9` | Quiet input fill and neutral inset surfaces |
| Warm Charcoal | `#292824` | Primary text and high-priority icons; never use pure black |
| Stone Text | `#57534E` | Secondary readable text |
| Muted Stone | `#716E68` | Tertiary metadata only when contrast is sufficient |
| Sand Border | `#EAE0D2` | Dividers, subtle outlines and separators |
| Herb Green | `#3F795F` | Semantic success, available/positive states and confirmed dietary indicators only |
| Honey Crust | `#D97706` | Rare promotion, offer or food-category marker; not a second primary CTA color |
| Error Red | `#B42318` | Form and operational errors |
| Error Surface | `#FDECEA` | Error background |
| Success Surface | `#E8F3EC` | Quiet success background |
| Warning Amber | `#A15C07` | Time-sensitive or attention-required status |
| Warning Surface | `#FFF3D9` | Warning background |

Color rules:

1. Tomato Flame is the only dominant brand accent.
2. Herb Green is semantic, not decorative. Do not make green buttons compete with the primary brand CTA.
3. Honey Crust is reserved for promotional or food-related emphasis.
4. Do not use neon, purple, electric-blue gradients or glowing CTA treatments.
5. Do not use pure black `#000000`.
6. Do not use color alone to communicate success, warning, error, availability or selection. Pair color with labels and icons.
7. Use the same token values on Customer and Delivery Partner screens.
8. Do not substitute arbitrary greens such as `#16A34A` for the Herb Green token without an explicit semantic reason.

## 3. Typography system

Use a consistent type system with clear hierarchy.

- Display and major screen headings: **Manrope**, weight 700–800.
- Body, labels and controls: **DM Sans**, weight 400–700.
- Do not use Inter in this design system.
- Do not use generic serif fonts.
- Use tabular numerals for prices, countdowns, order IDs, timestamps and earnings where supported.

| Style | Size / line height | Weight | Typical usage |
|---|---:|---:|---|
| Display | 30 / 36 px | 800 | Rare welcome or campaign headline |
| H1 | 26 / 32 px | 800 | Main screen title or major confirmation |
| H2 | 22 / 28 px | 700 | Section or sheet title |
| H3 | 18 / 24 px | 700 | Card title or module heading |
| Body Large | 16 / 24 px | 500–600 | Important instructions and item names |
| Body | 15 / 22 px | 400–500 | Primary body copy |
| Body Small | 14 / 20 px | 400–500 | Secondary explanatory copy |
| Label | 12 / 16 px | 600–700 | Input labels, badges and short metadata |
| Caption | 12 / 16 px | 500 | Secondary information; do not use for critical instructions |

Typography constraints:

- Primary body text must not be reduced to fit. Reflow the layout instead.
- Important prices, product names, delivery estimates and button labels must remain readable.
- Avoid content below 11 px inside actual app screens. Only non-interactive legal metadata may use a smaller size when genuinely necessary.
- Do not use uppercase for long phrases. Use uppercase only for compact status labels or micro-labels.
- Never put long paragraphs inside narrow cards. Use readable line lengths and clear line breaks.
- Avoid clipping, ellipses on essential information and text over busy photography.

## 4. Layout, frame and safe areas

Canonical mobile frame: **390 × 844 logical points**.

Responsive reference: **360 × 800 dp**.

Use a 4 px base increment and an 8 px major spacing rhythm.

Recommended spacing tokens:

- 4 px: icon/text micro-gap.
- 8 px: compact internal gap.
- 12 px: compact control spacing.
- 16 px: standard card padding and screen gutters where appropriate.
- 20 px: section separation.
- 24 px: large section separation.
- 32 px: major section separation.

Recommended radii:

- Small: 8 px.
- Medium: 14 px.
- Large: 18 px.
- Bottom sheet: 28 px top corners.
- Pill: full radius.

Mobile layout rules:

- Design for 390 × 844 first; check that the layout adapts to 360 × 800 without horizontal overflow.
- Respect top and bottom safe areas. Use approximately 47 px top and 34 px bottom as design references, but do not hard-code status-bar content into every platform implementation.
- Main screen gutters should usually be 16–20 px.
- Keep primary actions in reachable lower portions of the screen when the flow benefits from a sticky CTA.
- Do not let bottom navigation overlap scrollable content.
- Use scroll containers for long forms, history and menus.
- Keep sticky purchase/checkout actions above the bottom safe area.
- Use full-width layouts for forms and one-column lists. Use horizontal carousels or intentionally asymmetric 2-column compositions for food discovery.
- Do not use generic three-equal-card feature rows.
- Avoid absolute-positioned content stacking. Overlays are allowed only for genuine modal/sheet behavior.
- Each designed screen must look complete at the target frame, not like a cropped desktop web page.

## 5. Navigation patterns

### Customer App

Proposed bottom navigation for review:

1. Home.
2. Menu.
3. Orders.
4. Profile.

Cart remains globally accessible through a bag icon with quantity badge and through the sticky cart/checkout affordance when the cart contains items.

This four-tab structure is a **Proposed IA**, not a confirmed business requirement. Use it consistently in the generated exploration and record it for owner review.

### Delivery Partner App

Proposed bottom navigation:

1. Dashboard.
2. Deliveries.
3. Earnings.
4. Profile.

During an active delivery, the task/navigation experience may replace or temporarily simplify the persistent navigation so the main action remains obvious.

This is also Proposed pending business confirmation.

### Back and dismissal

- Use a clear back control on hierarchical detail screens.
- Use a close control for dismissible sheets and dialogs.
- Preserve entered form values when the user returns to a previous step.
- Destructive actions require confirmation and a clear cancel path.
- Do not create dead ends.

## 6. Component styling and behavior

### Buttons

- Primary: Tomato Flame fill, white label, medium-to-large height, strong contrast, radius 14–16 px.
- Secondary: white or cream surface with charcoal label and subtle border.
- Tertiary: text or quiet icon action; do not compete with the primary CTA.
- Destructive: clear error styling, separated from ordinary navigation.
- Disabled: visibly disabled, readable and non-interactive.
- Pressed: subtle scale/translate feedback, no glow.
- Large primary actions should be at least 48 px high; aim for 48–52 px where practical.

### Inputs

- Label above field.
- Input height approximately 50–54 px.
- Clear focus state.
- Helper/error message below field.
- Password visibility control when relevant.
- Never rely only on placeholder text as the label.
- Keep validation next to the field that needs correction.

### Food cards

- Use large, appetizing, photorealistic food imagery with a consistent crop strategy.
- Product name and price should be easy to scan.
- Rating and preparation/delivery estimate are secondary, not the most prominent content.
- Promotion badges must not obscure the food photography.
- Use clear Add / Customize actions.
- Avoid overloading every card with too many badges.

### Order cards and operational panels

- Use clear status labels, timestamps and next actions.
- Distinguish active from completed orders.
- Use dividers and restrained surface elevation rather than endless floating cards.
- Make order IDs and totals readable.

### Sheets and dialogs

- Use rounded top corners and a visible drag handle only when appropriate.
- Keep content scrollable if necessary.
- A sheet must have a clear title, clear close/dismiss behavior and a clear primary action.
- Do not hide important actions below the fold.

### Maps

- Use a light daylight cartographic treatment.
- Maintain strong contrast for route, driver marker, pickup/drop-off markers and map controls.
- Map overlays must not block the route or critical labels.
- Use a simplified illustrative map for prototype-only states unless a real map asset/service is connected.
- Label simulated tracking as illustrative/demo. Never imply actual live GPS is connected when it is not.

### Loading, empty and error states

- Loading: use skeletons matching the final layout. No oversized generic spinner as the entire screen.
- Empty: explain what is empty and provide a relevant next action.
- Error: explain what failed, what the user can do and whether data is preserved.
- Offline: explain which capability is unavailable and provide retry or a safe fallback.
- Permission denied: explain why location/camera/notification access is needed and provide a path to settings where applicable.

## 7. Imagery and art direction

Use genuine-looking, premium casual dining photography:

- Wood-fired pizza with visible blistering and natural crust texture.
- Craft-smoked brisket and ribs with realistic smokehouse bark and sauce sheen.
- Wagyu or smash burgers with believable ingredients and natural lighting.
- Golden fries and sides with realistic texture.
- Clean restaurant and kitchen environment imagery where appropriate.

Photo direction:

- Natural warm daylight or believable warm restaurant light.
- Realistic food color and appetizing detail.
- Shallow depth of field only where it helps the subject.
- Consistent photography style across the app.
- Avoid fake-looking CGI, plastic food, oversaturated orange filters and generic stock imagery.
- Do not use broken remote image links.
- Do not create an image-heavy screen when it harms task completion.

For maps, use a clean daytime visual style inspired by an urban Orlando setting because the current project artwork uses Downtown Orlando and Lake Eola as an illustrative location. Do not claim that the map is connected to Google Maps or a live location service unless that integration exists.

## 8. Motion and interaction principles

Use restrained, intentional motion that communicates state:

- Spring-like sheet presentation and dismissal.
- Short opacity/transform transitions for navigation.
- Subtle tactile button press feedback.
- Staggered appearance for food lists only when it does not slow scanning.
- A restrained pulse for a genuinely live driver marker.
- Countdown progress for an incoming delivery offer.
- Skeleton shimmer only while content is loading.
- Reduced-motion alternative for every significant motion treatment.

Do not animate layout geometry in a way that causes content movement or reflow. Prefer transform and opacity. Avoid decorative perpetual animation on passive screens. Motion must never distract a driver from an active delivery task.

## 9. Accessibility and usability rules

- Maintain WCAG 2.1 AA contrast targets for text and relevant UI controls.
- Interactive targets should be at least 44 × 44 px; aim for 48 × 48 px on shared mobile controls.
- Pair colors with text or icon cues for status.
- Keep labels visible.
- Use clear focus, selected, error and disabled states.
- Keep important content readable at 360 × 800.
- Respect device safe areas and keyboard behavior.
- Do not put critical actions behind gesture-only interaction.
- Use plain language and concise labels.
- Support one-handed operation for the driver experience.
- Do not use color-only distinctions for driver task status.

## 10. Data and content consistency

Use one shared synthetic demonstration scenario across related screens:

- Restaurant: Crust & Q — Downtown Oven (illustrative brand location).
- Customer: Alex Morgan (synthetic demo identity).
- Delivery partner: Morgan Reed (synthetic demo identity).
- Order: `CQ-20481`.
- Example items: Hot Honey Pepperoni Pizza and Double Wagyu Smash Burger.
- Cart line examples: Pizza `$18.99`; Burger with selected side `$21.00`; subtotal `$39.99`.
- Example promotion: `WELCOME5`, shown as a proposed illustrative `$5.00` discount only; actual eligibility and discount rules are TBD.
- Example delivery fee: `$2.99` (illustrative only).
- Example tip: `$4.00` (illustrative only).
- Example tax: `$2.80` (illustrative only).
- Example demo total after the `$5.00` discount: `$44.78` (`39.99 - 5.00 + 2.99 + 4.00 + 2.80`).
- Driver payout example: `$12.50`, consisting of illustrative `$8.50` base + `$4.00` tip. Do not treat as a confirmed payout rule.

The numbers above are a prototype consistency dataset, not a business-approved pricing, tax, promotion or payout policy. Display a subtle “Illustrative demo data” annotation in internal design documentation, not on every customer-facing screen.

Never use the project owner's private personal contact details in sample interfaces.

## 11. Strict anti-patterns — never generate

- No emojis as interface icons.
- No Inter font.
- No pure-black backgrounds or text.
- No dark mode.
- No purple/blue neon aesthetic.
- No glowing buttons or neon outer shadows.
- No excessive gradients or gradient text.
- No generic SaaS/admin dashboard aesthetic for the customer app.
- No generic three-equal-card rows.
- No tiny 7–10 px critical content.
- No labels that exist only as placeholders.
- No text over busy imagery without a readability treatment.
- No overlapping or clipped content.
- No randomly inconsistent icon styles.
- No random unrelated card radii.
- No unnecessary glassmorphism.
- No endless floating cards.
- No generic stock imagery or broken image URLs.
- No fake live GPS, payment processing, document verification or payout behavior.
- No invented cancellation, refund, tip, promotion, identity verification or delivery-proof policies.
- No meaningless “Lorem ipsum”, “John Doe”, “Acme”, “Nexus”, “Next-Gen”, “Seamless”, “Elevate” or similar filler copy.
- No empty decorative screens with no next action.
- No isolated screens with no defined entry and exit behavior.
- No complete screen represented only by one flattened image.

## 12. Screen-generation acceptance checklist

Before accepting any generated screen, verify:

1. It follows this design system.
2. It uses the correct 390 × 844 mobile frame or a clearly justified variant.
3. It has safe-area-aware content and no clipping.
4. It uses a clear hierarchy and readable type.
5. The screen purpose is obvious within a few seconds.
6. Every primary action has a defined outcome.
7. It includes the necessary loading, empty, error, disabled or confirmation states.
8. It uses consistent synthetic data where connected to other screens.
9. It does not invent a confirmed business policy.
10. It connects to the correct journey and preserves navigation context.
11. It remains visually consistent with the Customer or Delivery Partner system.
12. It is editable as native design elements in the destination tool, not just a screenshot.

