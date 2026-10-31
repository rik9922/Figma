#!/usr/bin/env node
import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.resolve("projects/crust-and-q/screens");
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Colors from "Char & Crust" design tokens
const C = {
  groundBase: "#141312",
  groundSec: "#1E1B18",
  card: "#26221E",
  cardElev: "#2E2A25",
  borderSubtle: "#332D27",
  borderStrong: "#4A423A",
  brandPrimary: "#FF5C1A",
  brandPrimaryHover: "#E0480A",
  brandSecondary: "#F2A93B",
  brandAccentMuted: "#382318",
  textPrimary: "#FFFFFF",
  textSecondary: "#B8B0A6",
  textMuted: "#7D756D",
  textInverse: "#141312",
  success: "#2E7D32",
  error: "#D32F2F"
};

function statusBar(time = "9:41") {
  return `
  <!-- iOS Dynamic Island & Status Bar -->
  <g id="StatusBar">
    <rect x="0" y="0" width="393" height="54" fill="${C.groundBase}"/>
    <text x="36" y="38" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="15" font-weight="600" fill="${C.textPrimary}">${time}</text>
    <rect x="134" y="11" width="125" height="34" rx="17" fill="#000000"/>
    <circle cx="238" cy="28" r="5.5" fill="#141312"/>
    <circle cx="238" cy="28" r="2.5" fill="#1A2035"/>
    <g transform="translate(325, 26)">
      <rect x="0" y="8" width="3" height="4" rx="0.5" fill="${C.textPrimary}"/>
      <rect x="4.5" y="6" width="3" height="6" rx="0.5" fill="${C.textPrimary}"/>
      <rect x="9" y="3" width="3" height="9" rx="0.5" fill="${C.textPrimary}"/>
      <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="${C.textPrimary}"/>
      <rect x="22" y="1" width="22" height="11" rx="3" stroke="${C.textPrimary}" stroke-width="1.5" fill="none"/>
      <rect x="24" y="3" width="16" height="7" rx="1.5" fill="${C.textPrimary}"/>
      <path d="M45 4.5 C45.5 4.5 46 5 46 5.5 V7.5 C46 8 45.5 8.5 45 8.5 Z" fill="${C.textPrimary}"/>
    </g>
  </g>`;
}

function homeIndicator() {
  return `
  <!-- iOS Home Indicator -->
  <g id="HomeIndicator">
    <rect x="120" y="838" width="153" height="5" rx="2.5" fill="#FFFFFF" opacity="0.4"/>
  </g>`;
}

// 7. MENU-01: Full Menu Catalog
function generateMENU01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">
  <rect width="393" height="852" fill="${C.groundBase}"/>
  ${statusBar()}

  <!-- Header -->
  <g transform="translate(20, 64)">
    <circle cx="18" cy="18" r="18" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="18" y="23" font-family="-apple-system, sans-serif" font-size="14" fill="#FFFFFF" text-anchor="middle">&lt;</text>
    <text x="48" y="24" font-family="-apple-system, sans-serif" font-size="20" font-weight="800" fill="${C.textPrimary}">Full Menu &amp; Hearth</text>
  </g>

  <!-- Sticky Category Pills -->
  <g transform="translate(20, 115)">
    <rect x="0" y="0" width="60" height="32" rx="16" fill="${C.brandPrimary}"/>
    <text x="30" y="20" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">All (24)</text>

    <rect x="68" y="0" width="76" height="32" rx="16" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="106" y="20" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">🍕 Pizza</text>

    <rect x="152" y="0" width="102" height="32" rx="16" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="203" y="20" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">🍖 BBQ &amp; Ribs</text>

    <rect x="262" y="0" width="91" height="32" rx="16" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="307" y="20" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">🍔 Burgers</text>
  </g>

  <!-- Filter Chips -->
  <g transform="translate(20, 160)">
    <rect x="0" y="0" width="100" height="26" rx="13" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="50" y="17" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">🌱 Vegetarian</text>

    <rect x="108" y="0" width="80" height="26" rx="13" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="148" y="17" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">🌶️ Spicy</text>

    <rect x="196" y="0" width="125" height="26" rx="13" fill="${C.brandAccentMuted}" stroke="${C.brandPrimary}" stroke-width="1"/>
    <text x="258" y="17" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.brandPrimary}" text-anchor="middle">🔥 Smokehouse Pick</text>
  </g>

  <!-- Vertical Dish Listing -->
  <g transform="translate(20, 202)">
    <!-- Dish 1 -->
    <g transform="translate(0, 0)">
      <rect width="353" height="96" rx="16" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <rect x="10" y="10" width="76" height="76" rx="12" fill="${C.groundSec}"/>
      <text x="48" y="54" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">🍕</text>

      <text x="96" y="32" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="700" fill="${C.textPrimary}">Smoked Truffle Pizza</text>
      <text x="96" y="48" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">Wild chanterelles, fontina, truffle</text>
      <text x="96" y="74" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.brandSecondary}">$21.50</text>

      <rect x="295" y="32" width="46" height="32" rx="10" fill="${C.brandPrimary}"/>
      <text x="318" y="52" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">+ Add</text>
    </g>

    <!-- Dish 2 -->
    <g transform="translate(0, 108)">
      <rect width="353" height="96" rx="16" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <rect x="10" y="10" width="76" height="76" rx="12" fill="${C.groundSec}"/>
      <text x="48" y="54" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">🍖</text>

      <text x="96" y="32" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="700" fill="${C.textPrimary}">Texas Smoked Prime Brisket</text>
      <text x="96" y="48" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">14-hour hickory bark, pickles, toast</text>
      <text x="96" y="74" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.brandSecondary}">$28.00</text>

      <rect x="295" y="32" width="46" height="32" rx="10" fill="${C.brandPrimary}"/>
      <text x="318" y="52" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">+ Add</text>
    </g>

    <!-- Dish 3 -->
    <g transform="translate(0, 216)">
      <rect width="353" height="96" rx="16" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <rect x="10" y="10" width="76" height="76" rx="12" fill="${C.groundSec}"/>
      <text x="48" y="54" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">🥩</text>

      <text x="96" y="32" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="700" fill="${C.textPrimary}">Dry-Aged Angus Ribeye (16oz)</text>
      <text x="96" y="48" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">Flame-seared, garlic herb butter</text>
      <text x="96" y="74" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.brandSecondary}">$34.00</text>

      <rect x="295" y="32" width="46" height="32" rx="10" fill="${C.brandPrimary}"/>
      <text x="318" y="52" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">+ Add</text>
    </g>

    <!-- Dish 4 -->
    <g transform="translate(0, 324)">
      <rect width="353" height="96" rx="16" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <rect x="10" y="10" width="76" height="76" rx="12" fill="${C.groundSec}"/>
      <text x="48" y="54" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">🍔</text>

      <text x="96" y="32" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="700" fill="${C.textPrimary}">Double Brisket Smash Burger</text>
      <text x="96" y="48" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">Lacy smash patties, cheddar, brisket</text>
      <text x="96" y="74" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.brandSecondary}">$16.50</text>

      <rect x="295" y="32" width="46" height="32" rx="10" fill="${C.brandPrimary}"/>
      <text x="318" y="52" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">+ Add</text>
    </g>
  </g>

  <!-- Floating Cart Dock -->
  <g transform="translate(20, 680)">
    <rect width="353" height="50" rx="16" fill="${C.brandPrimary}"/>
    <text x="20" y="31" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="700" fill="#FFFFFF">🛒 2 items in Cart • $48.00</text>
    <text x="333" y="31" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF" text-anchor="end">Checkout &gt;</text>
  </g>

  <!-- Floating 2-Tab Navigation -->
  <g transform="translate(68, 752)">
    <rect width="257" height="60" rx="30" fill="${C.groundSec}" stroke="${C.borderStrong}" stroke-width="1.5"/>
    <rect x="8" y="7" width="115" height="46" rx="23" fill="${C.brandPrimary}"/>
    <text x="65" y="35" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle">🛵 Delivery</text>
    <text x="190" y="35" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">🧾 History</text>
  </g>

  ${homeIndicator()}
</svg>`;
}

// 8. DISH-01: Dish Detail & Customization Modal
function generateDISH01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">
  <rect width="393" height="852" fill="#000000" fill-opacity="0.8"/>
  ${statusBar()}

  <!-- Modal Container -->
  <g transform="translate(0, 120)">
    <rect width="393" height="732" rx="28" fill="${C.cardElev}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
    <!-- Pull Pill -->
    <rect x="176" y="12" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.5"/>

    <!-- Hero Food Box -->
    <rect x="20" y="32" width="353" height="150" rx="18" fill="${C.groundSec}"/>
    <text x="196.5" y="115" font-family="-apple-system, sans-serif" font-size="54" text-anchor="middle">🍕</text>
    <!-- Close Button -->
    <circle cx="345" cy="52" r="14" fill="#000000" fill-opacity="0.6"/>
    <text x="345" y="57" font-family="-apple-system, sans-serif" font-size="14" fill="#FFFFFF" text-anchor="middle">✕</text>

    <!-- Dish Header -->
    <text x="24" y="212" font-family="-apple-system, sans-serif" font-size="20" font-weight="800" fill="${C.textPrimary}">Smoked Truffle Pizza</text>
    <text x="24" y="232" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Airy blistered sourdough crust, San Marzano base, fontina, wild mushrooms, fresh black truffle shavings.</text>
    <text x="24" y="258" font-family="-apple-system, sans-serif" font-size="17" font-weight="800" fill="${C.brandSecondary}">$21.50</text>

    <!-- Section 1: Choose Crust (Required) -->
    <g transform="translate(24, 276)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textPrimary}">Choose Crust Style <tspan fill="${C.brandPrimary}">*</tspan></text>
      
      <!-- Option 1 (Selected) -->
      <g transform="translate(0, 10)">
        <rect width="345" height="42" rx="12" fill="${C.groundSec}" stroke="${C.brandPrimary}" stroke-width="1.5"/>
        <circle cx="24" cy="21" r="8" fill="${C.brandPrimary}"/>
        <circle cx="24" cy="21" r="3" fill="#FFFFFF"/>
        <text x="44" y="26" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}">Wood-Fired Thin Neapolitan</text>
        <text x="325" y="26" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.brandSecondary}" text-anchor="end">Included</text>
      </g>

      <!-- Option 2 -->
      <g transform="translate(0, 58)">
        <rect width="345" height="42" rx="12" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <circle cx="24" cy="21" r="8" stroke="${C.borderStrong}" stroke-width="1.5" fill="none"/>
        <text x="44" y="26" font-family="-apple-system, sans-serif" font-size="13" font-weight="500" fill="${C.textSecondary}">Stuffed Mozzarella Crust</text>
        <text x="325" y="26" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.brandSecondary}" text-anchor="end">+$2.50</text>
      </g>
    </g>

    <!-- Section 2: Premium Extra Toppings -->
    <g transform="translate(24, 396)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textPrimary}">Add Premium Toppings</text>
      
      <!-- Checkbox 1 -->
      <g transform="translate(0, 10)">
        <rect width="345" height="38" rx="10" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <rect x="14" y="11" width="16" height="16" rx="4" fill="${C.brandPrimary}"/>
        <text x="22" y="23" font-family="-apple-system, sans-serif" font-size="11" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="40" y="24" font-family="-apple-system, sans-serif" font-size="13" font-weight="500" fill="${C.textPrimary}">Wood-Smoked Bacon</text>
        <text x="325" y="24" font-family="-apple-system, sans-serif" font-size="12" fill="${C.brandSecondary}" text-anchor="end">+$2.00</text>
      </g>

      <!-- Checkbox 2 -->
      <g transform="translate(0, 54)">
        <rect width="345" height="38" rx="10" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <rect x="14" y="11" width="16" height="16" rx="4" stroke="${C.borderStrong}" stroke-width="1.5" fill="none"/>
        <text x="40" y="24" font-family="-apple-system, sans-serif" font-size="13" font-weight="500" fill="${C.textSecondary}">Extra Fresh Buffalo Mozzarella</text>
        <text x="325" y="24" font-family="-apple-system, sans-serif" font-size="12" fill="${C.brandSecondary}" text-anchor="end">+$2.50</text>
      </g>
    </g>

    <!-- Bottom Add Bar -->
    <g transform="translate(24, 520)">
      <!-- Quantity Stepper -->
      <rect width="110" height="52" rx="14" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <text x="24" y="32" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="${C.textSecondary}">-</text>
      <text x="55" y="32" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="${C.textPrimary}" text-anchor="middle">1</text>
      <text x="86" y="32" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="${C.brandPrimary}">+</text>

      <!-- Add to Order CTA -->
      <rect x="124" y="0" width="221" height="52" rx="14" fill="${C.brandPrimary}"/>
      <text x="234.5" y="32" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Add to Order • $23.50</text>
    </g>
  </g>

  ${homeIndicator()}
</svg>`;
}

// 9. CART-01: Cart & Checkout Screen
function generateCART01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">
  <rect width="393" height="852" fill="${C.groundBase}"/>
  ${statusBar()}

  <!-- Header -->
  <g transform="translate(20, 64)">
    <circle cx="18" cy="18" r="18" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="18" y="23" font-family="-apple-system, sans-serif" font-size="14" fill="#FFFFFF" text-anchor="middle">&lt;</text>
    <text x="48" y="24" font-family="-apple-system, sans-serif" font-size="20" font-weight="800" fill="${C.textPrimary}">Your Order Cart</text>
  </g>

  <!-- Delivery Destination Summary -->
  <g transform="translate(20, 114)">
    <rect width="353" height="64" rx="16" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
    <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textPrimary}">🏠 Delivering to: Home</text>
    <text x="18" y="46" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">Orlando, 7th Street, Suite 402 • ⏱️ 25-35 mins</text>
    <text x="335" y="36" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandSecondary}" text-anchor="end">Change</text>
  </g>

  <!-- Itemized Dishes -->
  <g transform="translate(20, 192)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect width="353" height="78" rx="14" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="16" y="28" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textPrimary}">1x Smoked Truffle Pizza</text>
      <text x="16" y="44" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">Thin Neapolitan, Extra Bacon</text>
      <text x="16" y="62" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.brandSecondary}">$23.50</text>
      <text x="335" y="44" font-family="-apple-system, sans-serif" font-size="16" fill="${C.textMuted}" text-anchor="end">🗑️</text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(0, 88)">
      <rect width="353" height="78" rx="14" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="16" y="28" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textPrimary}">1x Double Brisket Smash Burger</text>
      <text x="16" y="44" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">Brioche bun, cheddar, pickles</text>
      <text x="16" y="62" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.brandSecondary}">$16.50</text>
      <text x="335" y="44" font-family="-apple-system, sans-serif" font-size="16" fill="${C.textMuted}" text-anchor="end">🗑️</text>
    </g>
  </g>

  <!-- Promo Code Box -->
  <g transform="translate(20, 372)">
    <rect width="353" height="46" rx="12" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}">🏷️ CRUST20 [Applied: 20% Off]</text>
    <text x="335" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandSecondary}" text-anchor="end">-$8.00</text>
  </g>

  <!-- Driver Tip Selector -->
  <g transform="translate(20, 432)">
    <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textPrimary}">Add Tip for Delivery Driver</text>
    <g transform="translate(0, 10)">
      <rect x="0" y="0" width="76" height="34" rx="10" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="38" y="22" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">$2.00</text>

      <rect x="86" y="0" width="76" height="34" rx="10" fill="${C.brandPrimary}"/>
      <text x="124" y="22" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">$3.50</text>

      <rect x="172" y="0" width="76" height="34" rx="10" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="210" y="22" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">$5.00</text>

      <rect x="258" y="0" width="95" height="34" rx="10" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="305" y="22" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">Custom</text>
    </g>
  </g>

  <!-- Bill Summary Breakdown -->
  <g transform="translate(20, 500)">
    <rect width="353" height="150" rx="16" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
    <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Item Subtotal</text>
    <text x="335" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}" text-anchor="end">$40.00</text>

    <text x="18" y="52" font-family="-apple-system, sans-serif" font-size="13" fill="${C.brandPrimary}">Promo Discount</text>
    <text x="335" y="52" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandPrimary}" text-anchor="end">-$8.00</text>

    <text x="18" y="76" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Delivery Fee</text>
    <text x="335" y="76" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}" text-anchor="end">$2.99</text>

    <text x="18" y="100" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Taxes &amp; Service Fee</text>
    <text x="335" y="100" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}" text-anchor="end">$3.50</text>

    <line x1="18" y1="114" x2="335" y2="114" stroke="${C.borderSubtle}" stroke-width="1"/>

    <text x="18" y="136" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.textPrimary}">Total Due</text>
    <text x="335" y="136" font-family="-apple-system, sans-serif" font-size="17" font-weight="900" fill="${C.brandSecondary}" text-anchor="end">$41.99</text>
  </g>

  <!-- Place Order CTA Button -->
  <g transform="translate(20, 670)">
    <rect width="353" height="56" rx="16" fill="${C.brandPrimary}"/>
    <text x="176.5" y="34" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Place Order • $41.99</text>
  </g>

  ${homeIndicator()}
</svg>`;
}

// 10. GUEST-01: Guest Checkout Auth Modal
function generateGUEST01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">
  <rect width="393" height="852" fill="#000000" fill-opacity="0.85"/>
  ${statusBar()}

  <!-- Modal Bottom Sheet -->
  <g transform="translate(0, 420)">
    <rect width="393" height="432" rx="28" fill="${C.cardElev}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
    <rect x="176" y="12" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.5"/>

    <!-- Chef / Padlock Icon -->
    <circle cx="196.5" cy="65" r="32" fill="${C.brandAccentMuted}" stroke="${C.brandPrimary}" stroke-width="2"/>
    <text x="196.5" y="74" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">🔥</text>

    <text x="196.5" y="130" font-family="-apple-system, sans-serif" font-size="21" font-weight="800" fill="${C.textPrimary}" text-anchor="middle">Sign In to Place Your Order</text>
    <text x="196.5" y="158" font-family="-apple-system, sans-serif" font-size="13.5" fill="${C.textSecondary}" text-anchor="middle">Log in or create an account to save delivery addresses,</text>
    <text x="196.5" y="176" font-family="-apple-system, sans-serif" font-size="13.5" fill="${C.textSecondary}" text-anchor="middle">track your driver live on Google Maps, and earn points.</text>

    <!-- Sign In Button -->
    <rect x="24" y="210" width="345" height="54" rx="16" fill="${C.brandPrimary}"/>
    <text x="196.5" y="243" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">Sign In to Continue</text>

    <!-- Create Account Button -->
    <rect x="24" y="276" width="345" height="52" rx="16" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
    <text x="196.5" y="308" font-family="-apple-system, sans-serif" font-size="15" font-weight="600" fill="${C.textPrimary}" text-anchor="middle">Create New Account</text>

    <!-- Dismiss -->
    <text x="196.5" y="360" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="600" fill="${C.textMuted}" text-anchor="middle">Continue browsing menu</text>
  </g>

  ${homeIndicator()}
</svg>`;
}

// 11. ORDER-SUCC-01: Order Confirmation Screen
function generateORDERSUCC01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">
  <rect width="393" height="852" fill="${C.groundBase}"/>
  ${statusBar()}

  <!-- Celebratory Center -->
  <g transform="translate(196.5, 230)">
    <circle cx="0" cy="0" r="54" fill="${C.brandAccentMuted}" stroke="${C.brandPrimary}" stroke-width="3"/>
    <text x="0" y="12" font-family="-apple-system, sans-serif" font-size="44" text-anchor="middle">🔥</text>
  </g>

  <text x="196.5" y="330" font-family="-apple-system, sans-serif" font-size="24" font-weight="900" fill="${C.textPrimary}" text-anchor="middle">Order Placed &amp; Baking!</text>
  <text x="196.5" y="356" font-family="-apple-system, sans-serif" font-size="14" fill="${C.textSecondary}" text-anchor="middle">Crust &amp; Q kitchen is preparing your wood-fired feast</text>

  <!-- Order Receipt Card -->
  <g transform="translate(24, 390)">
    <rect width="345" height="150" rx="18" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
    <text x="20" y="32" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.brandSecondary}">ORDER ID: #CQ-8492</text>
    
    <text x="20" y="60" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Estimated Delivery:</text>
    <text x="325" y="60" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}" text-anchor="end">28-35 mins (6:42 PM)</text>

    <text x="20" y="88" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Delivering to:</text>
    <text x="325" y="88" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}" text-anchor="end">Orlando, 7th Street, Apt 402</text>

    <line x1="20" y1="108" x2="325" y2="108" stroke="${C.borderSubtle}" stroke-width="1"/>

    <text x="20" y="130" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textPrimary}">Total Paid</text>
    <text x="325" y="130" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.brandSecondary}" text-anchor="end">$41.99 (Apple Pay)</text>
  </g>

  <!-- Primary CTA: Track Live -->
  <g transform="translate(24, 570)">
    <rect width="345" height="56" rx="16" fill="${C.brandPrimary}"/>
    <text x="172.5" y="34" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Track Order Live on Google Maps &gt;</text>
  </g>

  <!-- Secondary: Back to Home -->
  <text x="196.5" y="660" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">Back to Home Hub</text>

  ${homeIndicator()}
</svg>`;
}

// 12. HIST-01: Order History Hub
function generateHIST01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">
  <rect width="393" height="852" fill="${C.groundBase}"/>
  ${statusBar()}

  <!-- Header -->
  <g transform="translate(20, 64)">
    <text x="0" y="24" font-family="-apple-system, sans-serif" font-size="22" font-weight="800" fill="${C.textPrimary}">My Order History</text>
  </g>

  <!-- Sub-Tabs: Active Orders (1) | Past Orders (14) -->
  <g transform="translate(20, 108)">
    <rect x="0" y="0" width="168" height="36" rx="18" fill="${C.brandPrimary}"/>
    <text x="84" y="23" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Active Orders (1)</text>

    <rect x="180" y="0" width="168" height="36" rx="18" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="264" y="23" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">Past Orders (14)</text>
  </g>

  <!-- Active Order Card -->
  <g transform="translate(20, 160)">
    <rect width="353" height="150" rx="18" fill="${C.card}" stroke="${C.brandPrimary}" stroke-width="1.8"/>
    <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandSecondary}">ORDER #CQ-8492 • TODAY</text>
    <text x="335" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandPrimary}" text-anchor="end">ON THE WAY</text>

    <text x="18" y="54" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.textPrimary}">2 Items • $41.99</text>
    <text x="18" y="72" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">1x Smoked Truffle Pizza, 1x Double Smash Burger</text>

    <!-- Progress Bar -->
    <rect x="18" y="90" width="317" height="6" rx="3" fill="${C.borderSubtle}"/>
    <rect x="18" y="90" width="220" height="6" rx="3" fill="${C.brandPrimary}"/>

    <!-- Track Live Button -->
    <rect x="18" y="106" width="317" height="32" rx="10" fill="${C.brandPrimary}"/>
    <text x="176.5" y="126" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Track Live on Google Maps &gt;</text>
  </g>

  <!-- Past Orders List Heading -->
  <text x="20" y="340" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="${C.textPrimary}">Recent Delivered Orders</text>

  <!-- Past Order 1 -->
  <g transform="translate(20, 355)">
    <rect width="353" height="110" rx="16" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="18" y="26" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="700" fill="${C.textSecondary}">OCT 24, 2026 • 7:15 PM</text>
    <text x="335" y="26" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="700" fill="${C.success}" text-anchor="end">✓ Delivered</text>

    <text x="18" y="48" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="700" fill="${C.textPrimary}">Smoked Spare Ribs, Garlic Knots</text>
    <text x="18" y="68" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.brandSecondary}">$34.50</text>

    <rect x="255" y="60" width="80" height="32" rx="10" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="295" y="80" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.textPrimary}" text-anchor="middle">Reorder</text>
  </g>

  <!-- Floating Center Bottom Navigation Bar -->
  <g transform="translate(68, 752)">
    <rect width="257" height="60" rx="30" fill="${C.groundSec}" stroke="${C.borderStrong}" stroke-width="1.5"/>
    <text x="65" y="35" font-family="-apple-system, sans-serif" font-size="14" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">🛵 Delivery</text>
    <rect x="135" y="7" width="115" height="46" rx="23" fill="${C.brandPrimary}"/>
    <text x="192" y="35" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle">🧾 History</text>
  </g>

  ${homeIndicator()}
</svg>`;
}

// 13. DRV-AUTH-01: Driver Dashboard & Shift Hub
function generateDRVAUTH01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">
  <rect width="393" height="852" fill="${C.groundBase}"/>
  ${statusBar()}

  <!-- Driver Header Profile -->
  <g transform="translate(20, 64)">
    <circle cx="28" cy="28" r="28" fill="${C.card}" stroke="${C.brandSecondary}" stroke-width="2"/>
    <text x="28" y="36" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">👨🏻‍🍳</text>
    
    <text x="68" y="24" font-family="-apple-system, sans-serif" font-size="18" font-weight="800" fill="${C.textPrimary}">Marcus Vance</text>
    <text x="68" y="42" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.brandSecondary}">Gold Driver • ★ 4.94</text>
  </g>

  <!-- Online / Offline Toggle Banner -->
  <g transform="translate(20, 130)">
    <rect width="353" height="68" rx="18" fill="#1A2E1C" stroke="${C.success}" stroke-width="1.5"/>
    <circle cx="34" cy="34" r="10" fill="${C.success}"/>
    <text x="56" y="30" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF">You are Online</text>
    <text x="56" y="48" font-family="-apple-system, sans-serif" font-size="12" fill="#A3E6B4">Ready for Crust &amp; Q delivery dispatches</text>

    <!-- Toggle Switch -->
    <rect x="285" y="20" width="52" height="28" rx="14" fill="${C.success}"/>
    <circle cx="323" cy="34" r="11" fill="#FFFFFF"/>
  </g>

  <!-- Today's Shift Performance Grid -->
  <g transform="translate(20, 218)">
    <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="${C.textPrimary}">Today's Shift Earnings</text>
    
    <g transform="translate(0, 12)">
      <!-- Card 1: Earnings -->
      <rect width="110" height="90" rx="14" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="14" y="28" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textMuted}">EARNED</text>
      <text x="14" y="58" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.brandSecondary}">$142.50</text>

      <!-- Card 2: Deliveries -->
      <g transform="translate(121, 0)">
        <rect width="110" height="90" rx="14" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <text x="14" y="28" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textMuted}">TRIPS</text>
        <text x="14" y="58" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.textPrimary}">8</text>
      </g>

      <!-- Card 3: Online Hours -->
      <g transform="translate(242, 0)">
        <rect width="111" height="90" rx="14" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <text x="14" y="28" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textMuted}">HOURS</text>
        <text x="14" y="58" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.textPrimary}">4.2h</text>
      </g>
    </g>
  </g>

  <!-- Incoming Order Dispatch Radar Card -->
  <g transform="translate(20, 350)">
    <rect width="353" height="220" rx="20" fill="${C.cardElev}" stroke="${C.brandPrimary}" stroke-width="2"/>
    <text x="20" y="32" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.brandPrimary}">⚡ INCOMING DISPATCH READY</text>
    
    <text x="20" y="64" font-family="-apple-system, sans-serif" font-size="18" font-weight="800" fill="${C.textPrimary}">Crust &amp; Q Smokehouse</text>
    <text x="20" y="82" font-family="-apple-system, sans-serif" font-size="12.5" fill="${C.textSecondary}">Pickup: Counter 2 • 0.8 mi away</text>
    <text x="20" y="112" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.brandSecondary}">$11.25 <tspan font-size="12" font-weight="500" fill="${C.textMuted}">(incl. $3.50 tip)</tspan></text>

    <text x="20" y="142" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textPrimary}">Dropoff: Orlando, 7th Street (3.4 mi)</text>

    <!-- Accept CTA -->
    <rect x="20" y="160" width="313" height="46" rx="12" fill="${C.brandPrimary}"/>
    <text x="176.5" y="189" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF" text-anchor="middle">Accept Delivery Dispatch (15s)</text>
  </g>

  ${homeIndicator()}
</svg>`;
}

// 14. DRV-01: Driver Order Dispatch & Kitchen Pickup
function generateDRV01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">
  <rect width="393" height="852" fill="${C.groundBase}"/>
  ${statusBar()}

  <!-- Header -->
  <g transform="translate(20, 64)">
    <text x="0" y="24" font-family="-apple-system, sans-serif" font-size="20" font-weight="800" fill="${C.textPrimary}">Kitchen Pickup: Order #CQ-8492</text>
  </g>

  <!-- Restaurant Details Card -->
  <g transform="translate(20, 110)">
    <rect width="353" height="100" rx="16" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
    <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.textPrimary}">Crust &amp; Q - Downtown Orlando</text>
    <text x="18" y="48" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">120 S Orange Ave, Orlando, FL 32801</text>
    <text x="18" y="78" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandSecondary}">📍 Pickup at Counter 2 (Hearth Section)</text>
  </g>

  <!-- Checklist Verification -->
  <g transform="translate(20, 230)">
    <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.textPrimary}">Order Checklist Verification</text>

    <!-- Item 1 -->
    <g transform="translate(0, 12)">
      <rect width="353" height="52" rx="12" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <circle cx="24" cy="26" r="10" fill="${C.success}"/>
      <text x="24" y="30" font-family="-apple-system, sans-serif" font-size="10" fill="#FFFFFF" text-anchor="middle">✓</text>
      <text x="44" y="31" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="600" fill="${C.textPrimary}">1x Smoked Truffle Pizza (14")</text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(0, 72)">
      <rect width="353" height="52" rx="12" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <circle cx="24" cy="26" r="10" fill="${C.success}"/>
      <text x="24" y="30" font-family="-apple-system, sans-serif" font-size="10" fill="#FFFFFF" text-anchor="middle">✓</text>
      <text x="44" y="31" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="600" fill="${C.textPrimary}">1x Double Brisket Smash Burger</text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 132)">
      <rect width="353" height="52" rx="12" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <circle cx="24" cy="26" r="10" fill="${C.success}"/>
      <text x="24" y="30" font-family="-apple-system, sans-serif" font-size="10" fill="#FFFFFF" text-anchor="middle">✓</text>
      <text x="44" y="31" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="600" fill="${C.textPrimary}">Thermal Insulated Bag Verified</text>
    </g>
  </g>

  <!-- Swipe to Start Delivery -->
  <g transform="translate(20, 560)">
    <rect width="353" height="60" rx="30" fill="${C.cardElev}" stroke="${C.brandPrimary}" stroke-width="2"/>
    <circle cx="34" cy="30" r="24" fill="${C.brandPrimary}"/>
    <text x="34" y="36" font-family="-apple-system, sans-serif" font-size="16" fill="#FFFFFF" text-anchor="middle">&gt;&gt;</text>
    <text x="200" y="36" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF" text-anchor="middle">Swipe to Start Delivery Navigation</text>
  </g>

  ${homeIndicator()}
</svg>`;
}

// 15. DRV-03: Proof of Delivery & Completion
function generateDRV03() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">
  <rect width="393" height="852" fill="${C.groundBase}"/>
  ${statusBar()}

  <!-- Header -->
  <g transform="translate(20, 64)">
    <text x="0" y="24" font-family="-apple-system, sans-serif" font-size="20" font-weight="800" fill="${C.textPrimary}">Complete Delivery #CQ-8492</text>
  </g>

  <!-- Proof Selection Tab -->
  <g transform="translate(20, 110)">
    <rect x="0" y="0" width="168" height="36" rx="18" fill="${C.brandPrimary}"/>
    <text x="84" y="23" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="700" fill="#FFFFFF" text-anchor="middle">📸 Photo Drop-Off</text>

    <rect x="180" y="0" width="168" height="36" rx="18" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="264" y="23" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">✍️ Signature / PIN</text>
  </g>

  <!-- Photo Capture Preview Card -->
  <g transform="translate(20, 165)">
    <rect width="353" height="220" rx="18" fill="${C.card}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
    <circle cx="176.5" cy="95" r="32" fill="${C.groundSec}"/>
    <text x="176.5" y="104" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">📸</text>
    <text x="176.5" y="150" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textPrimary}" text-anchor="middle">Tap to Capture Doorstep Photo</text>
    <text x="176.5" y="170" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}" text-anchor="middle">Ensure package and house/apt number are visible</text>
  </g>

  <!-- Driver Notes Input -->
  <g transform="translate(20, 410)">
    <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textPrimary}">Driver Note (Optional)</text>
    <rect x="0" y="10" width="353" height="60" rx="14" fill="${C.groundSec}" stroke="${C.borderSubtle}" stroke-width="1"/>
    <text x="16" y="38" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textPrimary}">"Left order on front porch table by door #4B"</text>
  </g>

  <!-- Complete Delivery CTA -->
  <g transform="translate(20, 520)">
    <rect width="353" height="56" rx="16" fill="${C.brandPrimary}"/>
    <text x="176.5" y="34" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Confirm Drop-Off &amp; Complete Delivery</text>
  </g>

  <!-- Payout Notice -->
  <text x="196.5" y="605" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="700" fill="${C.brandSecondary}" text-anchor="middle">+$11.25 will be credited immediately to your balance</text>

  ${homeIndicator()}
</svg>`;
}

// Generate remaining 9 screens
fs.writeFileSync(path.join(OUTPUT_DIR, "MENU-01_Full_Menu_Catalog.svg"), generateMENU01());
fs.writeFileSync(path.join(OUTPUT_DIR, "DISH-01_Dish_Customization.svg"), generateDISH01());
fs.writeFileSync(path.join(OUTPUT_DIR, "CART-01_Cart_Checkout.svg"), generateCART01());
fs.writeFileSync(path.join(OUTPUT_DIR, "GUEST-01_Guest_Checkout_Modal.svg"), generateGUEST01());
fs.writeFileSync(path.join(OUTPUT_DIR, "ORDER-SUCC-01_Order_Success.svg"), generateORDERSUCC01());
fs.writeFileSync(path.join(OUTPUT_DIR, "HIST-01_Order_History.svg"), generateHIST01());
fs.writeFileSync(path.join(OUTPUT_DIR, "DRV-AUTH-01_Driver_Dashboard.svg"), generateDRVAUTH01());
fs.writeFileSync(path.join(OUTPUT_DIR, "DRV-01_Driver_Pickup.svg"), generateDRV01());
fs.writeFileSync(path.join(OUTPUT_DIR, "DRV-03_Driver_Proof_Delivery.svg"), generateDRV03());

console.log("✅ Successfully generated all remaining 9 screens in SVG format.");
