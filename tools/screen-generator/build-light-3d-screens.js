#!/usr/bin/env node
import fs from "fs";
import path from "path";

const THUMB_DIR = path.resolve("projects/crust-and-q/assets/thumbnails");
const SCREENS_DIR = path.resolve("projects/crust-and-q/screens/light-3d");
const BOARDS_DIR = path.resolve("projects/crust-and-q/screens/artboards");

if (!fs.existsSync(SCREENS_DIR)) fs.mkdirSync(SCREENS_DIR, { recursive: true });
if (!fs.existsSync(BOARDS_DIR)) fs.mkdirSync(BOARDS_DIR, { recursive: true });

// Read image as base64 data URI
function getImgDataUri(filename) {
  const filePath = path.join(THUMB_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Thumbnail ${filename} not found at ${filePath}`);
    return "";
  }
  const b64 = fs.readFileSync(filePath).toString("base64");
  return `data:image/jpeg;base64,${b64}`;
}

// Pre-load all photorealistic food images
const IMGS = {
  heroRibeye: getImgDataUri("hero_ribeye.jpg"),
  heroMargherita: getImgDataUri("hero_margherita.jpg"),
  heroBbqFeast: getImgDataUri("hero_bbq_feast.jpg"),
  heroHeritage: getImgDataUri("hero_heritage.jpg"),
  heroPromo20: getImgDataUri("hero_promo_20.jpg"),
  trufflePizza: getImgDataUri("dish_truffle_pizza.jpg"),
  hotHoneyPepperoni: getImgDataUri("dish_hot_honey_pepperoni.jpg"),
  bbqChickenPizza: getImgDataUri("dish_bbq_chicken_pizza.jpg"),
  angusRibeye: getImgDataUri("dish_angus_ribeye.jpg"),
  smokedRibs: getImgDataUri("dish_smoked_ribs.jpg"),
  texasBrisket: getImgDataUri("dish_texas_brisket.jpg"),
  smashBurger: getImgDataUri("dish_smash_burger.jpg"),
  friedChicken: getImgDataUri("dish_fried_chicken_sandwich.jpg")
};

// Colors from "Bright Artisanal Light Theme Tokens" (100% WCAG AA Passing)
const C = {
  groundBase: "#F8F9FA",
  surfaceCard: "#FFFFFF",
  groundInput: "#F1F3F5",
  borderSubtle: "#E9ECEF",
  borderStrong: "#CED4DA",
  brandPrimary: "#D93B18",      // Vibrant Flame Ember
  brandPrimaryHover: "#C02E0E",
  brandSecondary: "#D97706",    // Golden Honey Crust
  brandAccentLight: "#FFF1EE",  // Warm flame tint
  textPrimary: "#111827",       // Deep Obsidian
  textSecondary: "#4B5563",     // Neutral Slate
  textMuted: "#9CA3AF",         // Helper gray
  textInverse: "#FFFFFF",
  success: "#16A34A",
  successBg: "#F0FDF4",
  mapRoad: "#FFFFFF",
  mapArterial: "#FFE082",       // Warm state road / highway yellow
  mapWater: "#AADAFF",          // Realistic Google Maps lake blue
  mapPark: "#C8E6C9"            // Realistic Google Maps park green
};

// Common SVG Filters for 3D realism, diffuse ambient shadows, and glassmorphism
function defs3D() {
  return `
  <defs>
    <!-- Realistic 3D Soft Shadow for Cards -->
    <filter id="shadow3D" x="-15%" y="-15%" width="130%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.06"/>
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#0F172A" flood-opacity="0.04"/>
    </filter>

    <!-- Deep Elevation Shadow for Modals & Floating Pills -->
    <filter id="shadowElevated" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#0F172A" flood-opacity="0.10"/>
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#0F172A" flood-opacity="0.06"/>
    </filter>

    <!-- 3D Car Marker Drop Shadow -->
    <filter id="carShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.25"/>
    </filter>

    <!-- Primary Button 3D Gradient -->
    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E6441F"/>
      <stop offset="100%" stop-color="#CA3212"/>
    </linearGradient>

    <!-- Gold Accent 3D Gradient -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>

    <!-- Clip Paths for Rounded Images -->
    <clipPath id="heroClip"><rect width="353" height="150" rx="18"/></clipPath>
    <clipPath id="dishCardClip"><rect width="170" height="100" rx="14"/></clipPath>
    <clipPath id="dishListClip"><rect width="76" height="76" rx="12"/></clipPath>
    <clipPath id="dishModalClip"><rect width="353" height="170" rx="18"/></clipPath>
  </defs>`;
}

// Apple iOS Status Bar (Light Mode)
function statusBarLight(time = "9:41") {
  return `
  <!-- iOS Light Dynamic Island & Status Bar -->
  <g id="StatusBar">
    <rect x="0" y="0" width="393" height="54" fill="transparent"/>
    <text x="36" y="38" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="15" font-weight="600" fill="${C.textPrimary}">${time}</text>
    <!-- Dynamic Island Pill -->
    <rect x="134" y="11" width="125" height="34" rx="17" fill="#000000"/>
    <circle cx="238" cy="28" r="5.5" fill="#141312"/>
    <circle cx="238" cy="28" r="2.5" fill="#1A2035"/>
    <!-- Signal, Wifi, Battery -->
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

function homeIndicatorLight() {
  return `
  <!-- iOS Light Home Indicator -->
  <g id="HomeIndicator">
    <rect x="120" y="838" width="153" height="5" rx="2.5" fill="${C.textPrimary}" opacity="0.3"/>
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 01: ONB-01 (Splash & Sign In - Light Theme)
// -------------------------------------------------------------
function screenONB01() {
  return `
  <g id="SCREEN_ONB-01">
    <!-- Screen Device Frame -->
    <rect width="393" height="852" rx="44" fill="${C.surfaceCard}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.surfaceCard}"/>
    ${statusBarLight()}

    <!-- Hero Culinary Header Image Pull with Subtle Gradient -->
    <g transform="translate(20, 68)" clip-path="url(#heroClip)">
      <image href="${IMGS.heroMargherita}" width="353" height="150" preserveAspectRatio="xMidYMid slice"/>
      <!-- Soft Gradient Overlay -->
      <rect width="353" height="150" fill="url(#btnGrad)" opacity="0.15"/>
    </g>

    <!-- Brand Emblem & Typography -->
    <g transform="translate(196.5, 245)">
      <circle cx="0" cy="0" r="32" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="1.5" filter="url(#shadow3D)"/>
      <text x="0" y="8" font-family="-apple-system, sans-serif" font-size="24" text-anchor="middle">🔥</text>
    </g>

    <text x="196.5" y="302" font-family="-apple-system, sans-serif" font-size="30" font-weight="900" letter-spacing="1" fill="${C.textPrimary}" text-anchor="middle">CRUST <tspan fill="${C.brandPrimary}">&amp;</tspan> Q</text>
    <text x="196.5" y="324" font-family="-apple-system, sans-serif" font-size="12" font-weight="800" letter-spacing="2.5" fill="${C.brandSecondary}" text-anchor="middle">WOOD-FIRED &amp; CRAFT SMOKEHOUSE</text>
    <text x="196.5" y="348" font-family="-apple-system, sans-serif" font-size="14" font-weight="500" fill="${C.textSecondary}" text-anchor="middle">Artisanal sourdough crusts &amp; slow-smoked Texas BBQ</text>

    <!-- Login Form Fields -->
    <g transform="translate(24, 380)">
      <!-- Email -->
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}">Email Address</text>
      <rect x="0" y="8" width="345" height="50" rx="14" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <text x="18" y="39" font-family="-apple-system, sans-serif" font-size="15" fill="${C.textPrimary}">alex.turner@example.com</text>

      <!-- Password -->
      <text x="0" y="82" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}">Password</text>
      <rect x="0" y="90" width="345" height="50" rx="14" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <text x="18" y="122" font-family="-apple-system, sans-serif" font-size="17" fill="${C.textSecondary}">••••••••••••</text>
      <circle cx="320" cy="115" r="5" stroke="${C.textMuted}" stroke-width="1.5" fill="none"/>

      <!-- Remember Me & Forgot Password -->
      <g transform="translate(0, 158)">
        <rect x="0" y="0" width="18" height="18" rx="5" fill="${C.brandPrimary}"/>
        <path d="M4 9 L7.5 12.5 L14 5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" fill="none"/>
        <text x="28" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="500" fill="${C.textSecondary}">Remember me</text>
        <text x="345" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandPrimary}" text-anchor="end">Forgot Password?</text>
      </g>

      <!-- 3D Primary Button: Sign In -->
      <rect x="0" y="196" width="345" height="54" rx="16" fill="url(#btnGrad)" filter="url(#shadow3D)"/>
      <text x="172.5" y="229" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Sign In to Crust &amp; Q</text>

      <!-- OR Divider -->
      <g transform="translate(0, 272)">
        <line x1="0" y1="0" x2="150" y2="0" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="172.5" y="4" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.textMuted}" text-anchor="middle">OR</text>
        <line x1="195" y1="0" x2="345" y2="0" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      </g>

      <!-- Guest Button -->
      <rect x="0" y="294" width="345" height="50" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.8" filter="url(#shadow3D)"/>
      <text x="172.5" y="325" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="${C.textPrimary}" text-anchor="middle">Continue as Guest User</text>

      <!-- Sign Up Link -->
      <text x="172.5" y="380" font-family="-apple-system, sans-serif" font-size="14" fill="${C.textSecondary}" text-anchor="middle">Don't have an account? <tspan fill="${C.brandPrimary}" font-weight="800">Sign Up</tspan></text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 02: AUTH-01 (Sign Up Screen - Light Theme)
// -------------------------------------------------------------
function screenAUTH01() {
  return `
  <g id="SCREEN_AUTH-01">
    <rect width="393" height="852" rx="44" fill="${C.surfaceCard}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.surfaceCard}"/>
    ${statusBarLight()}

    <!-- Header Navigation -->
    <g transform="translate(24, 70)">
      <circle cx="18" cy="18" r="18" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <path d="M21 12 L15 18 L21 24" stroke="${C.textPrimary}" stroke-width="2" stroke-linecap="round" fill="none"/>
      <text x="50" y="25" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Create Account</text>
    </g>

    <text x="24" y="130" font-family="-apple-system, sans-serif" font-size="14" fill="${C.textSecondary}">Join Crust &amp; Q Rewards &amp; track live orders</text>

    <!-- Registration Fields -->
    <g transform="translate(24, 155)">
      <!-- Name Grid -->
      <g>
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textPrimary}">First Name</text>
        <rect x="0" y="8" width="164" height="48" rx="12" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="14" y="38" font-family="-apple-system, sans-serif" font-size="15" fill="${C.textPrimary}">Alex</text>

        <text x="181" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textPrimary}">Last Name</text>
        <rect x="181" y="8" width="164" height="48" rx="12" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="195" y="38" font-family="-apple-system, sans-serif" font-size="15" fill="${C.textPrimary}">Turner</text>
      </g>

      <!-- Phone Number -->
      <g transform="translate(0, 76)">
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textPrimary}">Phone Number (US)</text>
        <rect x="0" y="8" width="345" height="48" rx="12" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="14" y="38" font-family="-apple-system, sans-serif" font-size="15" fill="${C.textPrimary}">+1 (407) 555-0192</text>
      </g>

      <!-- Email Address -->
      <g transform="translate(0, 152)">
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textPrimary}">Email Address</text>
        <rect x="0" y="8" width="345" height="48" rx="12" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="14" y="38" font-family="-apple-system, sans-serif" font-size="15" fill="${C.textPrimary}">alex.turner@example.com</text>
      </g>

      <!-- Password -->
      <g transform="translate(0, 228)">
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textPrimary}">Password</text>
        <rect x="0" y="8" width="345" height="48" rx="12" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="14" y="38" font-family="-apple-system, sans-serif" font-size="15" fill="${C.textPrimary}">••••••••••••</text>
      </g>

      <!-- Confirm Password -->
      <g transform="translate(0, 304)">
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textPrimary}">Confirm Password</text>
        <rect x="0" y="8" width="345" height="48" rx="12" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="14" y="38" font-family="-apple-system, sans-serif" font-size="15" fill="${C.textPrimary}">••••••••••••</text>
      </g>

      <text x="0" y="392" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textMuted}">By registering, you agree to Crust &amp; Q's <tspan fill="${C.brandPrimary}">Terms</tspan> &amp; <tspan fill="${C.brandPrimary}">Privacy</tspan>.</text>

      <!-- Primary Sign Up CTA -->
      <rect x="0" y="420" width="345" height="54" rx="16" fill="url(#btnGrad)" filter="url(#shadow3D)"/>
      <text x="172.5" y="453" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Create Account</text>

      <text x="172.5" y="515" font-family="-apple-system, sans-serif" font-size="14" fill="${C.textSecondary}" text-anchor="middle">Already have an account? <tspan fill="${C.brandPrimary}" font-weight="800">Sign In</tspan></text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 03: HOME-01 (Home Delivery Hub - Light 3D Theme)
// -------------------------------------------------------------
function screenHOME01() {
  return `
  <g id="SCREEN_HOME-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.groundBase}"/>
    ${statusBarLight()}

    <!-- Header Section (Location + Profile) -->
    <g transform="translate(20, 62)">
      <!-- Location Icon in Flame Gradient -->
      <circle cx="18" cy="18" r="18" fill="${C.brandAccentLight}"/>
      <text x="18" y="24" font-family="-apple-system, sans-serif" font-size="16" text-anchor="middle">📍</text>

      <text x="44" y="15" font-family="-apple-system, sans-serif" font-size="17" font-weight="900" fill="${C.textPrimary}">Home <tspan fill="${C.brandPrimary}" font-size="13">▼</tspan></text>
      <text x="44" y="32" font-family="-apple-system, sans-serif" font-size="12" font-weight="500" fill="${C.textSecondary}">Orlando, 7th Street, Suite 402</text>

      <!-- Profile Avatar Button (Right) -->
      <g transform="translate(315, 0)" filter="url(#shadow3D)">
        <circle cx="20" cy="20" r="20" fill="url(#goldGrad)"/>
        <text x="20" y="26" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">R</text>
      </g>
    </g>

    <!-- Search Bar with Shadow -->
    <g transform="translate(20, 116)" filter="url(#shadow3D)">
      <rect width="353" height="48" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <circle cx="24" cy="24" r="6" stroke="${C.textMuted}" stroke-width="1.8" fill="none"/>
      <line x1="28.5" y1="28.5" x2="34" y2="34" stroke="${C.textMuted}" stroke-width="1.8" stroke-linecap="round"/>
      <text x="44" y="29" font-family="-apple-system, sans-serif" font-size="13.5" fill="${C.textMuted}">Search "Wood-Fired Pizza, Ribs, Brisket..."</text>
      <circle cx="328" cy="24" r="12" fill="${C.brandAccentLight}"/>
      <text x="328" y="28" font-family="-apple-system, sans-serif" font-size="11" text-anchor="middle">🎙️</text>
    </g>

    <!-- Hero Promotional Carousel Card (Real Food Photo) -->
    <g transform="translate(20, 178)" filter="url(#shadow3D)">
      <rect width="353" height="150" rx="18" fill="${C.surfaceCard}"/>
      <g clip-path="url(#heroClip)">
        <image href="${IMGS.heroRibeye}" width="353" height="150" preserveAspectRatio="xMidYMid slice"/>
        <!-- Bottom Vignette Gradient -->
        <rect y="60" width="353" height="90" fill="black" opacity="0.6"/>
      </g>
      <!-- Pill Badge -->
      <rect x="16" y="16" width="96" height="24" rx="8" fill="${C.brandPrimary}"/>
      <text x="64" y="32" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="#FFFFFF" text-anchor="middle">CHEF'S CUT</text>

      <text x="18" y="104" font-family="-apple-system, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">Dry-Aged Angus Ribeye</text>
      <text x="18" y="124" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#FDE68A">Sizzling garlic herb butter • $34.00</text>

      <!-- 5 Pagination Dots -->
      <g transform="translate(145, 160)">
        <rect x="0" y="0" width="20" height="6" rx="3" fill="${C.brandPrimary}"/>
        <circle cx="28" cy="3" r="3" fill="${C.textMuted}" opacity="0.4"/>
        <circle cx="40" cy="3" r="3" fill="${C.textMuted}" opacity="0.4"/>
        <circle cx="52" cy="3" r="3" fill="${C.textMuted}" opacity="0.4"/>
        <circle cx="64" cy="3" r="3" fill="${C.textMuted}" opacity="0.4"/>
      </g>
    </g>

    <!-- Category Bar -->
    <g transform="translate(20, 358)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}">Categories</text>
      <text x="353" y="0" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandPrimary}" text-anchor="end">See All / Full Menu &gt;</text>

      <g transform="translate(0, 10)">
        <!-- All (Active) -->
        <rect x="0" y="0" width="64" height="36" rx="18" fill="url(#btnGrad)" filter="url(#shadow3D)"/>
        <text x="32" y="23" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle">All</text>

        <!-- Pizza -->
        <rect x="72" y="0" width="80" height="36" rx="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
        <text x="112" y="23" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">🍕 Pizza</text>

        <!-- BBQ & Ribs -->
        <rect x="160" y="0" width="104" height="36" rx="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
        <text x="212" y="23" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">🍖 BBQ &amp; Ribs</text>

        <!-- Burgers -->
        <rect x="272" y="0" width="81" height="36" rx="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
        <text x="312" y="23" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">🍔 Burger</text>
      </g>
    </g>

    <!-- Recommended 2-Card Grid (Row 1 with Real Photorealistic Food) -->
    <g transform="translate(20, 432)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}">Recommended Dishes</text>

      <!-- Dish Card 1: Smoked Truffle Pizza -->
      <g transform="translate(0, 12)" filter="url(#shadow3D)">
        <rect width="170" height="198" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g clip-path="url(#dishCardClip)">
          <image href="${IMGS.trufflePizza}" width="170" height="100" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <!-- Rating Badge -->
        <rect x="10" y="10" width="46" height="20" rx="6" fill="#000000" opacity="0.75"/>
        <text x="33" y="24" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="${C.brandSecondary}" text-anchor="middle">★ 4.9</text>

        <text x="12" y="124" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}">Smoked Truffle Pie</text>
        <text x="12" y="140" font-family="-apple-system, sans-serif" font-size="11" font-weight="500" fill="${C.textMuted}">20-25m • Sourdough</text>
        <text x="12" y="174" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.brandPrimary}">$21.50</text>

        <!-- Add Button -->
        <rect x="124" y="152" width="34" height="32" rx="10" fill="url(#btnGrad)"/>
        <text x="141" y="173" font-family="-apple-system, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" text-anchor="middle">+</text>
      </g>

      <!-- Dish Card 2: Smoked Spare Ribs -->
      <g transform="translate(183, 12)" filter="url(#shadow3D)">
        <rect width="170" height="198" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g clip-path="url(#dishCardClip)">
          <image href="${IMGS.smokedRibs}" width="170" height="100" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <rect x="10" y="10" width="46" height="20" rx="6" fill="#000000" opacity="0.75"/>
        <text x="33" y="24" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="${C.brandSecondary}" text-anchor="middle">★ 4.8</text>

        <text x="12" y="124" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}">Smoked Spare Ribs</text>
        <text x="12" y="140" font-family="-apple-system, sans-serif" font-size="11" font-weight="500" fill="${C.textMuted}">25-30m • Glazed BBQ</text>
        <text x="12" y="174" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.brandPrimary}">$26.50</text>

        <rect x="124" y="152" width="34" height="32" rx="10" fill="url(#btnGrad)"/>
        <text x="141" y="173" font-family="-apple-system, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" text-anchor="middle">+</text>
      </g>
    </g>

    <!-- Floating Cart Banner -->
    <g transform="translate(20, 686)" filter="url(#shadowElevated)">
      <rect width="353" height="52" rx="16" fill="url(#btnGrad)"/>
      <text x="20" y="32" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="800" fill="#FFFFFF">🛒 2 items in Cart • $48.00</text>
      <text x="333" y="32" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="end">View Cart &gt;</text>
    </g>

    <!-- Center Rounded Bottom Navigation Bar (2 Tabs) -->
    <g transform="translate(68, 752)" filter="url(#shadowElevated)">
      <rect width="257" height="60" rx="30" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <!-- Active Delivery Tab -->
      <rect x="8" y="7" width="115" height="46" rx="23" fill="url(#btnGrad)"/>
      <text x="65" y="35" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF" text-anchor="middle">🛵 Delivery</text>

      <text x="190" y="35" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">🧾 History</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 04: LOC-01 (Address Selection Bottom Sheet - Light Theme)
// -------------------------------------------------------------
function screenLOC01() {
  return `
  <g id="SCREEN_LOC-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="#000000" fill-opacity="0.35"/>
    ${statusBarLight()}

    <!-- Bottom Sheet Container (White with Shadow) -->
    <g transform="translate(0, 310)" filter="url(#shadowElevated)">
      <rect width="393" height="542" rx="32" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <rect x="176" y="12" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.4"/>

      <text x="24" y="48" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.textPrimary}">Select Delivery Address</text>
      <circle cx="360" cy="42" r="14" fill="${C.groundInput}"/>
      <text x="360" y="47" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}" text-anchor="middle">✕</text>

      <!-- GPS Tile -->
      <g transform="translate(24, 75)" filter="url(#shadow3D)">
        <rect width="345" height="74" rx="16" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <circle cx="36" cy="37" r="18" fill="${C.brandAccentLight}"/>
        <text x="36" y="43" font-family="-apple-system, sans-serif" font-size="18" text-anchor="middle">📍</text>
        
        <text x="66" y="31" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}">Device location not enabled</text>
        <text x="66" y="49" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">Enable GPS for live doorstep delivery</text>

        <rect x="265" y="21" width="68" height="32" rx="10" fill="url(#btnGrad)"/>
        <text x="299" y="42" font-family="-apple-system, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle">Enable</text>
      </g>

      <text x="24" y="180" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.textPrimary}">Saved Addresses</text>

      <!-- Home (Selected) -->
      <g transform="translate(24, 198)" filter="url(#shadow3D)">
        <rect width="345" height="74" rx="16" fill="${C.surfaceCard}" stroke="${C.brandPrimary}" stroke-width="2"/>
        <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}">🏠 Home</text>
        <text x="18" y="48" font-family="-apple-system, sans-serif" font-size="12.5" fill="${C.textSecondary}">Orlando, 7th Street, Suite 402, FL 32801</text>
        <circle cx="320" cy="37" r="11" fill="${C.brandPrimary}"/>
        <circle cx="320" cy="37" r="4" fill="#FFFFFF"/>
      </g>

      <!-- Office -->
      <g transform="translate(24, 284)" filter="url(#shadow3D)">
        <rect width="345" height="74" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}">🏢 Office</text>
        <text x="18" y="48" font-family="-apple-system, sans-serif" font-size="12.5" fill="${C.textSecondary}">400 S Orange Ave, 12th Floor, Orlando, FL</text>
        <circle cx="320" cy="37" r="10" stroke="${C.borderStrong}" stroke-width="2" fill="none"/>
      </g>

      <!-- Manual Search -->
      <g transform="translate(24, 372)">
        <rect width="345" height="50" rx="14" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="18" y="31" font-family="-apple-system, sans-serif" font-size="14" fill="${C.textMuted}">🔍 Search address or landmark manually...</text>
      </g>

      <!-- Add New Address CTA -->
      <rect x="24" y="440" width="345" height="54" rx="16" fill="url(#btnGrad)" filter="url(#shadow3D)"/>
      <text x="196.5" y="473" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF" text-anchor="middle">+ Add New Delivery Address</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 05: TRACK-01 (Customer Real-Time Google Maps Tracking - Light Theme)
// -------------------------------------------------------------
function screenTRACK01() {
  return `
  <g id="SCREEN_TRACK-01">
    <rect width="393" height="852" rx="44" fill="${C.mapRoad}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="#E8ECE9"/>

    <!-- REALISTIC GOOGLE MAPS LIGHT THEME CARTOGRAPHY -->
    <!-- City Residential & Commercial Blocks -->
    <g fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5">
      <rect x="15" y="70" width="95" height="120" rx="8"/>
      <rect x="125" y="70" width="135" height="80" rx="8"/>
      <rect x="275" y="70" width="100" height="100" rx="8"/>

      <rect x="15" y="210" width="130" height="95" rx="8"/>
      <rect x="160" y="170" width="100" height="135" rx="8"/>
      <rect x="275" y="190" width="100" height="160" rx="8"/>
    </g>

    <!-- Lake Eola (Realistic Google Maps Soft Blue Water) -->
    <path d="M140 230 C185 210 235 225 250 260 C265 295 245 320 205 325 C165 330 125 305 120 275 Z" fill="${C.mapWater}" stroke="#90CAF9" stroke-width="2"/>
    <!-- Lake Eola Park (Green Belt) -->
    <path d="M130 220 C185 195 245 215 260 255 C275 305 255 330 200 335 C150 340 115 315 110 270 Z" fill="${C.mapPark}" opacity="0.35"/>
    <text x="185" y="278" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#1565C0" text-anchor="middle">LAKE EOLA PARK</text>

    <!-- Google Maps Street Network (Crisp White with Soft Borders) -->
    <g stroke="#CBD5E1" stroke-width="14" stroke-linecap="round" stroke-linejoin="round">
      <line x1="115" y1="0" x2="115" y2="520"/>
      <line x1="0" y1="460" x2="393" y2="460"/>
      <line x1="265" y1="0" x2="265" y2="520"/>
    </g>
    <!-- Highway Yellow for Central Blvd -->
    <g stroke="${C.mapArterial}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
      <line x1="0" y1="460" x2="393" y2="460"/>
    </g>
    <g stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <line x1="115" y1="0" x2="115" y2="520"/>
      <line x1="265" y1="0" x2="265" y2="520"/>
    </g>

    <!-- Real Google Maps Navigation Polyline (Vibrant Blue & Flame) -->
    <path d="M60 460 L115 460 L265 460 L265 240 L310 240" stroke="#1D4ED8" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
    <path d="M60 460 L115 460 L265 460 L265 240 L310 240" stroke="${C.brandPrimary}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M60 460 L115 460 L265 460 L265 240 L310 240" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="6 6" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Restaurant Pin: Crust & Q Kitchen (60, 460) -->
    <g transform="translate(60, 460)" filter="url(#shadow3D)">
      <circle cx="0" cy="0" r="16" fill="${C.brandPrimary}" stroke="#FFFFFF" stroke-width="2.5"/>
      <text x="0" y="5" font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">🍕</text>
    </g>

    <!-- 3D Realistic Moving Driver Vehicle (265, 360) -->
    <g transform="translate(265, 360)" filter="url(#carShadow)">
      <!-- Radar Pulse Waves -->
      <circle cx="0" cy="0" r="32" stroke="${C.brandPrimary}" stroke-width="2" stroke-dasharray="4 4" opacity="0.5"/>
      <circle cx="0" cy="0" r="22" fill="${C.brandPrimary}" fill-opacity="0.15"/>
      
      <!-- 3D Car Body (Heading Forward) -->
      <rect x="-9" y="-16" width="18" height="32" rx="6" fill="#1E293B" stroke="#FFFFFF" stroke-width="2"/>
      <rect x="-7" y="-14" width="14" height="28" rx="4" fill="${C.brandPrimary}"/>
      <rect x="-5" y="-10" width="10" height="7" rx="2" fill="#0F172A"/>
      <circle cx="-4" cy="-14" r="1.5" fill="#FEF08A"/>
      <circle cx="4" cy="-14" r="1.5" fill="#FEF08A"/>
    </g>

    <!-- Customer Home Pin (310, 240) -->
    <g transform="translate(310, 240)" filter="url(#shadow3D)">
      <circle cx="0" cy="0" r="16" fill="${C.brandSecondary}" stroke="#FFFFFF" stroke-width="2.5"/>
      <text x="0" y="5" font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">🏠</text>
    </g>

    ${statusBarLight()}

    <!-- Google Maps Top Floating Header -->
    <g transform="translate(20, 64)" filter="url(#shadowElevated)">
      <rect width="353" height="52" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <circle cx="26" cy="26" r="16" fill="${C.groundInput}"/>
      <text x="26" y="31" font-family="-apple-system, sans-serif" font-size="14" fill="${C.textPrimary}" text-anchor="middle">&lt;</text>
      
      <text x="56" y="27" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.textPrimary}">Order #CQ-8492</text>
      <text x="56" y="42" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="700" fill="${C.brandPrimary}">Google Maps Live Route</text>

      <rect x="290" y="12" width="50" height="28" rx="8" fill="${C.groundInput}"/>
      <text x="315" y="30" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="${C.textPrimary}" text-anchor="middle">Share</text>
    </g>

    <!-- Live ETA Floating Pill (Center HUD) -->
    <g transform="translate(86, 128)" filter="url(#shadowElevated)">
      <rect width="220" height="42" rx="21" fill="url(#btnGrad)"/>
      <text x="110" y="26" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">⏱️ Arriving in 14 mins</text>
    </g>

    <!-- Bottom Driver & Order Status Drawer (Clean White 3D Sheet) -->
    <g transform="translate(0, 480)" filter="url(#shadowElevated)">
      <rect width="393" height="372" rx="32" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <rect x="176" y="10" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.4"/>

      <!-- 4-Stage Stepper -->
      <g transform="translate(30, 36)">
        <circle cx="10" cy="10" r="10" fill="${C.success}"/>
        <text x="10" y="14" font-family="-apple-system, sans-serif" font-size="10" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="10" y="32" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">Placed</text>
        <line x1="25" y1="10" x2="95" y2="10" stroke="${C.success}" stroke-width="2"/>

        <circle cx="110" cy="10" r="10" fill="${C.success}"/>
        <text x="110" y="14" font-family="-apple-system, sans-serif" font-size="10" fill="#FFFFFF" text-anchor="middle">✓</text>
        <text x="110" y="32" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">Baking</text>
        <line x1="125" y1="10" x2="195" y2="10" stroke="${C.brandPrimary}" stroke-width="2"/>

        <circle cx="210" cy="10" r="12" fill="${C.brandPrimary}"/>
        <circle cx="210" cy="10" r="4" fill="#FFFFFF"/>
        <text x="210" y="32" font-family="-apple-system, sans-serif" font-size="10" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">On the way</text>
        <line x1="225" y1="10" x2="295" y2="10" stroke="${C.borderSubtle}" stroke-width="2"/>

        <circle cx="310" cy="10" r="10" fill="${C.groundInput}" stroke="${C.borderStrong}" stroke-width="1.5"/>
        <text x="310" y="32" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="${C.textMuted}" text-anchor="middle">Delivered</text>
      </g>

      <!-- Driver Information Card -->
      <g transform="translate(24, 96)" filter="url(#shadow3D)">
        <rect width="345" height="88" rx="18" fill="${C.groundBase}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <circle cx="44" cy="44" r="26" fill="${C.surfaceCard}" stroke="${C.brandSecondary}" stroke-width="2"/>
        <text x="44" y="52" font-family="-apple-system, sans-serif" font-size="24" text-anchor="middle">👨🏻‍🍳</text>

        <text x="82" y="36" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}">Marcus Vance</text>
        <text x="82" y="54" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="700" fill="${C.brandSecondary}">★ 4.9 • 1,240 Deliveries</text>
        <text x="82" y="70" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textSecondary}">Silver Toyota Prius • 7XYZ42</text>

        <!-- Call & Chat Actions -->
        <circle cx="270" cy="44" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <text x="270" y="49" font-family="-apple-system, sans-serif" font-size="16" text-anchor="middle">💬</text>

        <circle cx="315" cy="44" r="18" fill="url(#btnGrad)"/>
        <text x="315" y="49" font-family="-apple-system, sans-serif" font-size="16" text-anchor="middle">📞</text>
      </g>

      <!-- Order Items Summary Bar -->
      <g transform="translate(24, 202)">
        <rect width="345" height="52" rx="14" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <text x="20" y="31" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}">Order Items (2 items)</text>
        <text x="325" y="31" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.brandPrimary}" text-anchor="end">$41.99 ▼</text>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 06: DRV-02 (Driver Reverse Live Google Navigation - Light Theme)
// -------------------------------------------------------------
function screenDRV02() {
  return `
  <g id="SCREEN_DRV-02">
    <rect width="393" height="852" rx="44" fill="${C.mapRoad}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="#E8ECE9"/>

    <!-- Map Grid -->
    <g stroke="#CBD5E1" stroke-width="16" stroke-linecap="round" stroke-linejoin="round">
      <line x1="196" y1="0" x2="196" y2="852"/>
      <line x1="0" y1="380" x2="393" y2="380"/>
    </g>
    <g stroke="#FFFFFF" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
      <line x1="196" y1="0" x2="196" y2="852"/>
      <line x1="0" y1="380" x2="393" y2="380"/>
    </g>

    <!-- Route Polyline (Ahead of Driver to Customer) -->
    <path d="M196 520 L196 380 L320 380 L320 200" stroke="${C.brandPrimary}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M196 520 L196 380 L320 380 L320 200" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="8 6" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Driver Vehicle Marker (Heading North) -->
    <g transform="translate(196, 520)" filter="url(#carShadow)">
      <circle cx="0" cy="0" r="34" stroke="${C.brandPrimary}" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
      <circle cx="0" cy="0" r="22" fill="${C.brandPrimary}" fill-opacity="0.2"/>
      <!-- Car Body -->
      <rect x="-10" y="-18" width="20" height="36" rx="6" fill="#1E293B" stroke="#FFFFFF" stroke-width="2"/>
      <rect x="-8" y="-16" width="16" height="32" rx="4" fill="${C.brandPrimary}"/>
      <circle cx="-5" cy="-16" r="2" fill="#FEF08A"/>
      <circle cx="5" cy="-16" r="2" fill="#FEF08A"/>
    </g>

    <!-- Customer Destination Pin (320, 200) -->
    <g transform="translate(320, 200)" filter="url(#shadow3D)">
      <circle cx="0" cy="0" r="16" fill="${C.brandSecondary}" stroke="#FFFFFF" stroke-width="2.5"/>
      <text x="0" y="5" font-family="-apple-system, sans-serif" font-size="12" text-anchor="middle">🏠</text>
    </g>

    ${statusBarLight()}

    <!-- Authentic Google Maps Turn-by-Turn Card (Top Banner) -->
    <g transform="translate(16, 62)" filter="url(#shadowElevated)">
      <rect width="361" height="88" rx="20" fill="#15803D" stroke="#166534" stroke-width="1.5"/>
      <g transform="translate(24, 24)">
        <circle cx="20" cy="20" r="20" fill="#166534"/>
        <path d="M16 28 V16 H24 M21 12 L26 16 L21 20" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>
      <text x="80" y="42" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF">In 300 ft</text>
      <text x="80" y="66" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="#DCFCE7">Turn Right onto Palm Ave</text>
    </g>

    <!-- Speed & ETA HUD -->
    <g transform="translate(16, 162)" filter="url(#shadow3D)">
      <rect width="180" height="42" rx="14" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <text x="90" y="26" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="${C.textPrimary}" text-anchor="middle">11 min • 3.4 mi • 32 mph</text>
    </g>

    <!-- Bottom Customer Notes & "I Have Arrived" Drawer -->
    <g transform="translate(0, 580)" filter="url(#shadowElevated)">
      <rect width="393" height="272" rx="32" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <rect x="176" y="10" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.4"/>

      <!-- Customer Details -->
      <g transform="translate(24, 28)">
        <circle cx="24" cy="24" r="22" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="1.5"/>
        <text x="24" y="30" font-family="-apple-system, sans-serif" font-size="15" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">SJ</text>

        <text x="60" y="22" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}">Sarah Jenkins</text>
        <text x="60" y="38" font-family="-apple-system, sans-serif" font-size="12.5" fill="${C.textSecondary}">Orlando, 7th Street, Apt 402</text>

        <circle cx="280" cy="24" r="18" fill="${C.groundInput}"/>
        <text x="280" y="29" font-family="-apple-system, sans-serif" font-size="14" text-anchor="middle">💬</text>

        <circle cx="325" cy="24" r="18" fill="url(#btnGrad)"/>
        <text x="325" y="29" font-family="-apple-system, sans-serif" font-size="14" text-anchor="middle">📞</text>
      </g>

      <!-- Gate / Delivery Note -->
      <g transform="translate(24, 88)">
        <rect width="345" height="52" rx="14" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <text x="16" y="24" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="${C.brandPrimary}">DELIVERY INSTRUCTION:</text>
        <text x="16" y="40" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textPrimary}">"Apartment 4B, please dial #0412 at callbox"</text>
      </g>

      <!-- Primary Action: I Have Arrived -->
      <rect x="24" y="156" width="345" height="56" rx="16" fill="url(#btnGrad)" filter="url(#shadow3D)"/>
      <text x="196.5" y="191" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">I Have Arrived at Location</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// ASSEMBLE COMPLETE PRODUCTION ARTBOARDS (Organized Left-to-Right)
// -------------------------------------------------------------

// Artboard 1: Customer Onboarding & Authentication
function buildArtboard01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1020" width="960" height="1020" fill="none">
    ${defs3D()}
    <rect width="960" height="1020" fill="#F1F5F9"/>

    <!-- Artboard Title Banner -->
    <g transform="translate(40, 32)">
      <rect width="180" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="90" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 01: ONBOARDING</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Customer Authentication &amp; Registration Journey</text>
    </g>

    <!-- Screen 1: ONB-01 (x: 40, y: 110) -->
    <g transform="translate(40, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">01 | ONB-01 • Splash &amp; Sign In</text>
      ${screenONB01()}
    </g>

    <!-- Flow Arrow -->
    <g transform="translate(448, 510)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
      <text x="20" y="25" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">→</text>
    </g>

    <!-- Screen 2: AUTH-01 (x: 500, y: 110) -->
    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">02 | AUTH-01 • Create Account Form</text>
      ${screenAUTH01()}
    </g>
  </svg>`;
}

// Artboard 2: Customer Core Discovery & Location Hub
function buildArtboard02() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1020" width="960" height="1020" fill="none">
    ${defs3D()}
    <rect width="960" height="1020" fill="#F1F5F9"/>

    <g transform="translate(40, 32)">
      <rect width="200" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="100" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 02: HOME &amp; LOCATION</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Core Ordering Hub &amp; Address Selector</text>
    </g>

    <!-- Screen 3: HOME-01 (x: 40, y: 110) -->
    <g transform="translate(40, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">03 | HOME-01 • Home Delivery Hub</text>
      ${screenHOME01()}
    </g>

    <!-- Flow Arrow -->
    <g transform="translate(448, 510)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
      <text x="20" y="25" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">→</text>
    </g>

    <!-- Screen 4: LOC-01 (x: 500, y: 110) -->
    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">04 | LOC-01 • Address Selection Sheet</text>
      ${screenLOC01()}
    </g>
  </svg>`;
}

// Artboard 3: Real-Time Google Maps Tracking & Driver Navigation
function buildArtboard03() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1020" width="960" height="1020" fill="none">
    ${defs3D()}
    <rect width="960" height="1020" fill="#F1F5F9"/>

    <g transform="translate(40, 32)">
      <rect width="250" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="125" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 03: LIVE GOOGLE MAPS</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Bi-Directional Live Tracking (Customer &amp; Driver)</text>
    </g>

    <!-- Screen 5: TRACK-01 (x: 40, y: 110) -->
    <g transform="translate(40, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">05 | TRACK-01 • Customer Live Map Tracking</text>
      ${screenTRACK01()}
    </g>

    <!-- Bi-directional Sync Arrow -->
    <g transform="translate(448, 510)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
      <text x="20" y="25" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">⇄</text>
    </g>

    <!-- Screen 6: DRV-02 (x: 500, y: 110) -->
    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">06 | DRV-02 • Driver Reverse Google Navigation</text>
      ${screenDRV02()}
    </g>
  </svg>`;
}

// Write the clean, beautifully spaced artboard files
fs.writeFileSync(path.join(BOARDS_DIR, "01_Customer_Onboarding_Artboard.svg"), buildArtboard01());
fs.writeFileSync(path.join(BOARDS_DIR, "02_Home_and_Location_Artboard.svg"), buildArtboard02());
fs.writeFileSync(path.join(BOARDS_DIR, "03_Live_Google_Maps_Artboard.svg"), buildArtboard03());

// Also write individual standalone SVGs
fs.writeFileSync(path.join(SCREENS_DIR, "ONB-01_Splash_SignIn_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenONB01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "AUTH-01_SignUp_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenAUTH01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "HOME-01_Home_Delivery_Hub_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenHOME01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "LOC-01_Address_Selector_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenLOC01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "TRACK-01_Live_Google_Maps_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenTRACK01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "DRV-02_Driver_Live_Navigation_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenDRV02()}</svg>`);

console.log("✅ Successfully built Light 3D Screen Artboards and Standalone SVGs with photorealistic food photography!");

// -------------------------------------------------------------
// SCREEN 07: DISH-01 (Dish Detail & Customization Modal - Light Theme)
// -------------------------------------------------------------
function screenDISH01() {
  return `
  <g id="SCREEN_DISH-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="#000000" fill-opacity="0.4"/>
    ${statusBarLight()}

    <!-- Modal Container -->
    <g transform="translate(0, 110)" filter="url(#shadowElevated)">
      <rect width="393" height="742" rx="32" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <rect x="176" y="12" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.4"/>

      <!-- Hero Real Food Photography Box -->
      <g transform="translate(20, 30)" filter="url(#shadow3D)">
        <rect width="353" height="160" rx="18" fill="${C.surfaceCard}"/>
        <g clip-path="url(#dishModalClip)">
          <image href="${IMGS.trufflePizza}" width="353" height="170" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <!-- Close Button -->
        <circle cx="330" cy="28" r="14" fill="#000000" fill-opacity="0.6"/>
        <text x="330" y="33" font-family="-apple-system, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle">✕</text>
      </g>

      <!-- Details Header -->
      <text x="24" y="222" font-family="-apple-system, sans-serif" font-size="21" font-weight="900" fill="${C.textPrimary}">Smoked Truffle &amp; Wild Mushroom Pie</text>
      <text x="24" y="242" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Airy blistered sourdough crust, San Marzano base, fontina, wild chanterelles, fresh black truffle shavings.</text>
      <text x="24" y="268" font-family="-apple-system, sans-serif" font-size="18" font-weight="900" fill="${C.brandPrimary}">$21.50</text>

      <!-- Section 1: Choose Crust -->
      <g transform="translate(24, 288)">
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.textPrimary}">Choose Crust Style <tspan fill="${C.brandPrimary}">*</tspan></text>
        
        <!-- Option 1 (Selected) -->
        <g transform="translate(0, 10)">
          <rect width="345" height="42" rx="12" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="1.8"/>
          <circle cx="24" cy="21" r="8" fill="${C.brandPrimary}"/>
          <circle cx="24" cy="21" r="3" fill="#FFFFFF"/>
          <text x="44" y="26" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="700" fill="${C.textPrimary}">Wood-Fired Thin Neapolitan</text>
          <text x="325" y="26" font-family="-apple-system, sans-serif" font-size="12" font-weight="800" fill="${C.brandPrimary}" text-anchor="end">Included</text>
        </g>

        <!-- Option 2 -->
        <g transform="translate(0, 58)">
          <rect width="345" height="42" rx="12" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <circle cx="24" cy="21" r="8" stroke="${C.borderStrong}" stroke-width="1.5" fill="none"/>
          <text x="44" y="26" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="600" fill="${C.textSecondary}">Stuffed Mozzarella Crust</text>
          <text x="325" y="26" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.brandSecondary}" text-anchor="end">+$2.50</text>
        </g>
      </g>

      <!-- Section 2: Extra Toppings -->
      <g transform="translate(24, 408)">
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.textPrimary}">Add Premium Toppings</text>
        
        <g transform="translate(0, 10)">
          <rect width="345" height="40" rx="10" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <rect x="14" y="12" width="16" height="16" rx="4" fill="${C.brandPrimary}"/>
          <text x="22" y="24" font-family="-apple-system, sans-serif" font-size="11" fill="#FFFFFF" text-anchor="middle">✓</text>
          <text x="40" y="25" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}">Crispy Wood-Smoked Bacon</text>
          <text x="325" y="25" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.brandSecondary}" text-anchor="end">+$2.00</text>
        </g>

        <g transform="translate(0, 56)">
          <rect width="345" height="40" rx="10" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <rect x="14" y="12" width="16" height="16" rx="4" stroke="${C.borderStrong}" stroke-width="1.5" fill="none"/>
          <text x="40" y="25" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textSecondary}">Fresh Buffalo Mozzarella</text>
          <text x="325" y="25" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.brandSecondary}" text-anchor="end">+$2.50</text>
        </g>
      </g>

      <!-- Bottom Add to Order Bar -->
      <g transform="translate(24, 532)">
        <rect width="110" height="52" rx="14" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="24" y="32" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="${C.textSecondary}">-</text>
        <text x="55" y="32" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}" text-anchor="middle">1</text>
        <text x="86" y="32" font-family="-apple-system, sans-serif" font-size="18" font-weight="700" fill="${C.brandPrimary}">+</text>

        <rect x="124" y="0" width="221" height="52" rx="14" fill="url(#btnGrad)" filter="url(#shadow3D)"/>
        <text x="234.5" y="32" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF" text-anchor="middle">Add to Order • $23.50</text>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 08: CART-01 (Cart & Checkout Screen - Light Theme)
// -------------------------------------------------------------
function screenCART01() {
  return `
  <g id="SCREEN_CART-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.groundBase}"/>
    ${statusBarLight()}

    <!-- Header -->
    <g transform="translate(20, 64)">
      <circle cx="18" cy="18" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <text x="18" y="23" font-family="-apple-system, sans-serif" font-size="14" fill="${C.textPrimary}" text-anchor="middle">&lt;</text>
      <text x="48" y="25" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.textPrimary}">Your Order Cart (2)</text>
    </g>

    <!-- Address Card -->
    <g transform="translate(20, 114)" filter="url(#shadow3D)">
      <rect width="353" height="66" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}">🏠 Delivering to: Home</text>
      <text x="18" y="48" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">Orlando, 7th Street, Suite 402 • ⏱️ 25-35 mins</text>
      <text x="335" y="38" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.brandPrimary}" text-anchor="end">Change</text>
    </g>

    <!-- Itemized List (With Real Food Thumbnails) -->
    <g transform="translate(20, 194)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)" filter="url(#shadow3D)">
        <rect width="353" height="82" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g transform="translate(10, 10)" clip-path="url(#dishListClip)">
          <image href="${IMGS.trufflePizza}" width="76" height="76" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="96" y="30" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}">Smoked Truffle Pizza</text>
        <text x="96" y="46" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">Thin Neapolitan, Extra Bacon</text>
        <text x="96" y="66" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="900" fill="${C.brandPrimary}">$23.50</text>
        <text x="335" y="48" font-family="-apple-system, sans-serif" font-size="16" fill="${C.textMuted}" text-anchor="end">🗑️</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 92)" filter="url(#shadow3D)">
        <rect width="353" height="82" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g transform="translate(10, 10)" clip-path="url(#dishListClip)">
          <image href="${IMGS.smashBurger}" width="76" height="76" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="96" y="30" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}">Double Brisket Smash Burger</text>
        <text x="96" y="46" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">Brioche bun, cheddar, brisket</text>
        <text x="96" y="66" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="900" fill="${C.brandPrimary}">$16.50</text>
        <text x="335" y="48" font-family="-apple-system, sans-serif" font-size="16" fill="${C.textMuted}" text-anchor="end">🗑️</text>
      </g>
    </g>

    <!-- Promo Code Box -->
    <g transform="translate(20, 382)" filter="url(#shadow3D)">
      <rect width="353" height="46" rx="12" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textPrimary}">🏷️ CRUST20 [20% Off Welcome]</text>
      <text x="335" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="${C.brandPrimary}" text-anchor="end">-$8.00</text>
    </g>

    <!-- Tip Selector -->
    <g transform="translate(20, 442)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}">Tip Your Delivery Driver</text>
      <g transform="translate(0, 10)">
        <rect x="0" y="0" width="76" height="34" rx="10" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <text x="38" y="22" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">$2.00</text>

        <rect x="86" y="0" width="76" height="34" rx="10" fill="url(#btnGrad)" filter="url(#shadow3D)"/>
        <text x="124" y="22" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle">$3.50</text>

        <rect x="172" y="0" width="76" height="34" rx="10" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <text x="210" y="22" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">$5.00</text>

        <rect x="258" y="0" width="95" height="34" rx="10" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <text x="305" y="22" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">Custom</text>
      </g>
    </g>

    <!-- Bill Summary -->
    <g transform="translate(20, 510)" filter="url(#shadow3D)">
      <rect width="353" height="150" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Item Subtotal</text>
      <text x="335" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textPrimary}" text-anchor="end">$40.00</text>

      <text x="18" y="52" font-family="-apple-system, sans-serif" font-size="13" fill="${C.brandPrimary}">Promo Discount</text>
      <text x="335" y="52" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.brandPrimary}" text-anchor="end">-$8.00</text>

      <text x="18" y="76" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Delivery Fee</text>
      <text x="335" y="76" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textPrimary}" text-anchor="end">$2.99</text>

      <text x="18" y="100" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Taxes &amp; Service Fee</text>
      <text x="335" y="100" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textPrimary}" text-anchor="end">$3.50</text>

      <line x1="18" y1="114" x2="335" y2="114" stroke="${C.borderSubtle}" stroke-width="1"/>

      <text x="18" y="136" font-family="-apple-system, sans-serif" font-size="15" font-weight="900" fill="${C.textPrimary}">Total Due</text>
      <text x="335" y="136" font-family="-apple-system, sans-serif" font-size="18" font-weight="900" fill="${C.brandPrimary}" text-anchor="end">$41.99</text>
    </g>

    <!-- Place Order CTA -->
    <g transform="translate(20, 680)" filter="url(#shadowElevated)">
      <rect width="353" height="56" rx="16" fill="url(#btnGrad)"/>
      <text x="176.5" y="34" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">Place Order • $41.99</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// Artboard 4: Customization & Checkout Hub
function buildArtboard04() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1020" width="960" height="1020" fill="none">
    ${defs3D()}
    <rect width="960" height="1020" fill="#F1F5F9"/>

    <g transform="translate(40, 32)">
      <rect width="260" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="130" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 04: CUSTOMIZATION &amp; CART</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Dish Personalization &amp; Itemized Checkout</text>
    </g>

    <g transform="translate(40, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">07 | DISH-01 • Dish Customization Modal</text>
      ${screenDISH01()}
    </g>

    <g transform="translate(448, 510)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
      <text x="20" y="25" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">→</text>
    </g>

    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">08 | CART-01 • Cart &amp; Checkout Screen</text>
      ${screenCART01()}
    </g>
  </svg>`;
}

fs.writeFileSync(path.join(BOARDS_DIR, "04_Customization_and_Cart_Artboard.svg"), buildArtboard04());
fs.writeFileSync(path.join(SCREENS_DIR, "DISH-01_Dish_Customization_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenDISH01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "CART-01_Cart_Checkout_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenCART01()}</svg>`);

console.log("✅ Successfully built Artboard 04 (Customization & Cart) with photorealistic food!");

// -------------------------------------------------------------
// SCREEN 09: GUEST-01 (Guest Auth Intercept Modal - Light Theme)
// -------------------------------------------------------------
function screenGUEST01() {
  return `
  <g id="SCREEN_GUEST-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="#000000" fill-opacity="0.4"/>
    ${statusBarLight()}

    <g transform="translate(0, 420)" filter="url(#shadowElevated)">
      <rect width="393" height="432" rx="32" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <rect x="176" y="12" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.4"/>

      <!-- Flame Lock Icon Badge -->
      <circle cx="196.5" cy="65" r="32" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="2" filter="url(#shadow3D)"/>
      <text x="196.5" y="74" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">🔥</text>

      <text x="196.5" y="130" font-family="-apple-system, sans-serif" font-size="21" font-weight="900" fill="${C.textPrimary}" text-anchor="middle">Sign In to Place Your Order</text>
      <text x="196.5" y="156" font-family="-apple-system, sans-serif" font-size="13.5" fill="${C.textSecondary}" text-anchor="middle">Log in or create an account to save delivery addresses,</text>
      <text x="196.5" y="174" font-family="-apple-system, sans-serif" font-size="13.5" fill="${C.textSecondary}" text-anchor="middle">track your driver live on Google Maps, and earn points.</text>

      <!-- Sign In Button -->
      <rect x="24" y="210" width="345" height="54" rx="16" fill="url(#btnGrad)" filter="url(#shadow3D)"/>
      <text x="196.5" y="243" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Sign In to Continue</text>

      <!-- Create Account Button -->
      <rect x="24" y="276" width="345" height="52" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.8" filter="url(#shadow3D)"/>
      <text x="196.5" y="308" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="${C.textPrimary}" text-anchor="middle">Create New Account</text>

      <text x="196.5" y="360" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="600" fill="${C.textMuted}" text-anchor="middle">Continue browsing menu</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 10: ORDER-SUCC-01 (Order Placed Confirmation - Light Theme)
// -------------------------------------------------------------
function screenORDERSUCC01() {
  return `
  <g id="SCREEN_ORDER-SUCC-01">
    <rect width="393" height="852" rx="44" fill="${C.surfaceCard}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.surfaceCard}"/>
    ${statusBarLight()}

    <!-- Celebratory Badge -->
    <g transform="translate(196.5, 200)">
      <circle cx="0" cy="0" r="54" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="3" filter="url(#shadow3D)"/>
      <text x="0" y="14" font-family="-apple-system, sans-serif" font-size="44" text-anchor="middle">🔥</text>
    </g>

    <text x="196.5" y="300" font-family="-apple-system, sans-serif" font-size="24" font-weight="900" fill="${C.textPrimary}" text-anchor="middle">Order Placed &amp; Baking!</text>
    <text x="196.5" y="324" font-family="-apple-system, sans-serif" font-size="14" fill="${C.textSecondary}" text-anchor="middle">Crust &amp; Q kitchen is preparing your wood-fired feast</text>

    <!-- Receipt Card -->
    <g transform="translate(24, 355)" filter="url(#shadow3D)">
      <rect width="345" height="155" rx="18" fill="${C.groundBase}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <text x="20" y="32" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.brandPrimary}">ORDER ID: #CQ-8492</text>
      
      <text x="20" y="60" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Estimated Delivery:</text>
      <text x="325" y="60" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.textPrimary}" text-anchor="end">28-35 mins (6:42 PM)</text>

      <text x="20" y="88" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Delivering to:</text>
      <text x="325" y="88" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textPrimary}" text-anchor="end">Orlando, 7th Street, Apt 402</text>

      <line x1="20" y1="110" x2="325" y2="110" stroke="${C.borderSubtle}" stroke-width="1"/>

      <text x="20" y="134" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}">Total Paid</text>
      <text x="325" y="134" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.brandPrimary}" text-anchor="end">$41.99 (Apple Pay)</text>
    </g>

    <!-- Track CTA -->
    <g transform="translate(24, 545)" filter="url(#shadowElevated)">
      <rect width="345" height="56" rx="16" fill="url(#btnGrad)"/>
      <text x="172.5" y="34" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">Track Live on Google Maps &gt;</text>
    </g>

    <text x="196.5" y="635" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">Back to Home Hub</text>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 11: DRV-AUTH-01 (Driver Dashboard & Shift Hub - Light Theme)
// -------------------------------------------------------------
function screenDRVAUTH01() {
  return `
  <g id="SCREEN_DRV-AUTH-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.groundBase}"/>
    ${statusBarLight()}

    <!-- Profile Header -->
    <g transform="translate(20, 64)">
      <circle cx="28" cy="28" r="28" fill="${C.surfaceCard}" stroke="${C.brandSecondary}" stroke-width="2" filter="url(#shadow3D)"/>
      <text x="28" y="36" font-family="-apple-system, sans-serif" font-size="28" text-anchor="middle">👨🏻‍🍳</text>
      
      <text x="68" y="24" font-family="-apple-system, sans-serif" font-size="18" font-weight="900" fill="${C.textPrimary}">Marcus Vance</text>
      <text x="68" y="42" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandSecondary}">Gold Driver • ★ 4.94</text>
    </g>

    <!-- Online Toggle Switch -->
    <g transform="translate(20, 130)" filter="url(#shadow3D)">
      <rect width="353" height="68" rx="18" fill="${C.successBg}" stroke="${C.success}" stroke-width="1.5"/>
      <circle cx="34" cy="34" r="10" fill="${C.success}"/>
      <text x="56" y="30" font-family="-apple-system, sans-serif" font-size="15" font-weight="900" fill="${C.textPrimary}">You are Online</text>
      <text x="56" y="48" font-family="-apple-system, sans-serif" font-size="12" fill="${C.success}">Ready for Crust &amp; Q delivery dispatches</text>

      <rect x="285" y="20" width="52" height="28" rx="14" fill="${C.success}"/>
      <circle cx="323" cy="34" r="11" fill="#FFFFFF"/>
    </g>

    <!-- Shift Stats -->
    <g transform="translate(20, 218)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}">Today's Shift Earnings</text>
      
      <g transform="translate(0, 12)">
        <g filter="url(#shadow3D)">
          <rect width="110" height="90" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <text x="14" y="28" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textMuted}">EARNED</text>
          <text x="14" y="58" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.brandPrimary}">$142.50</text>
        </g>

        <g transform="translate(121, 0)" filter="url(#shadow3D)">
          <rect width="110" height="90" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <text x="14" y="28" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textMuted}">TRIPS</text>
          <text x="14" y="58" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.textPrimary}">8</text>
        </g>

        <g transform="translate(242, 0)" filter="url(#shadow3D)">
          <rect width="111" height="90" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <text x="14" y="28" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textMuted}">HOURS</text>
          <text x="14" y="58" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.textPrimary}">4.2h</text>
        </g>
      </g>
    </g>

    <!-- Incoming Dispatch Radar -->
    <g transform="translate(20, 350)" filter="url(#shadowElevated)">
      <rect width="353" height="220" rx="20" fill="${C.surfaceCard}" stroke="${C.brandPrimary}" stroke-width="2"/>
      <text x="20" y="32" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.brandPrimary}">⚡ INCOMING DISPATCH READY</text>
      
      <text x="20" y="64" font-family="-apple-system, sans-serif" font-size="18" font-weight="900" fill="${C.textPrimary}">Crust &amp; Q Smokehouse</text>
      <text x="20" y="82" font-family="-apple-system, sans-serif" font-size="12.5" fill="${C.textSecondary}">Pickup: Counter 2 • 0.8 mi away</text>
      <text x="20" y="112" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.brandSecondary}">$11.25 <tspan font-size="12" font-weight="600" fill="${C.textMuted}">(incl. $3.50 tip)</tspan></text>

      <text x="20" y="142" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="600" fill="${C.textPrimary}">Dropoff: Orlando, 7th Street (3.4 mi)</text>

      <rect x="20" y="160" width="313" height="46" rx="14" fill="url(#btnGrad)"/>
      <text x="176.5" y="189" font-family="-apple-system, sans-serif" font-size="15" font-weight="900" fill="#FFFFFF" text-anchor="middle">Accept Delivery Dispatch (15s)</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// Artboard 5: Fulfillment & Driver Partner Operations
function buildArtboard05() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 1020" width="1420" height="1020" fill="none">
    ${defs3D()}
    <rect width="1420" height="1020" fill="#F1F5F9"/>

    <g transform="translate(40, 32)">
      <rect width="280" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="140" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 05: FULFILLMENT &amp; DRIVER</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Order Confirmation, Guest Gating &amp; Driver Shift Hub</text>
    </g>

    <!-- Screen 9: GUEST-01 (x: 40, y: 110) -->
    <g transform="translate(40, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">09 | GUEST-01 • Guest Auth Intercept Modal</text>
      ${screenGUEST01()}
    </g>

    <!-- Screen 10: ORDER-SUCC-01 (x: 500, y: 110) -->
    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">10 | ORDER-SUCC-01 • Order Placed Confirmation</text>
      ${screenORDERSUCC01()}
    </g>

    <!-- Screen 11: DRV-AUTH-01 (x: 960, y: 110) -->
    <g transform="translate(960, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">11 | DRV-AUTH-01 • Driver Dashboard &amp; Shift Hub</text>
      ${screenDRVAUTH01()}
    </g>
  </svg>`;
}

fs.writeFileSync(path.join(BOARDS_DIR, "05_Fulfillment_and_Driver_Ops_Artboard.svg"), buildArtboard05());
fs.writeFileSync(path.join(SCREENS_DIR, "GUEST-01_Guest_Modal_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenGUEST01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "ORDER-SUCC-01_Order_Success_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenORDERSUCC01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "DRV-AUTH-01_Driver_Dashboard_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenDRVAUTH01()}</svg>`);

console.log("✅ Successfully built Artboard 05 (Fulfillment & Driver Ops)!");
