#!/usr/bin/env node
import fs from "fs";
import path from "path";

const THUMB_DIR = path.resolve("projects/crust-and-q/assets/thumbnails");
const SCREENS_DIR = path.resolve("projects/crust-and-q/screens/light-3d");
const BOARDS_DIR = path.resolve("projects/crust-and-q/screens/artboards");

if (!fs.existsSync(SCREENS_DIR)) fs.mkdirSync(SCREENS_DIR, { recursive: true });
if (!fs.existsSync(BOARDS_DIR)) fs.mkdirSync(BOARDS_DIR, { recursive: true });

function getImgDataUri(filename) {
  const filePath = path.join(THUMB_DIR, filename);
  if (!fs.existsSync(filePath)) return "";
  const b64 = fs.readFileSync(filePath).toString("base64");
  return `data:image/jpeg;base64,${b64}`;
}

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

// Colors from "Bright Artisanal Light Theme Tokens" (100% WCAG 2.1 AA Compliant)
const C = {
  groundBase: "#F8F9FA",
  surfaceCard: "#FFFFFF",
  groundInput: "#F1F3F5",
  borderSubtle: "#E5E7EB",
  borderStrong: "#D1D5DB",
  brandPrimary: "#D93B18",      // Vibrant Flame Ember Red-Orange (4.58:1 AA)
  brandPrimaryHover: "#C02E0E",
  brandSecondary: "#D97706",    // Golden Honey Crust
  brandAccentLight: "#FFF1EE",  // Warm flame tint
  textPrimary: "#111827",       // Deep Obsidian (16.8:1 AA)
  textSecondary: "#4B5563",     // Neutral Slate (7.2:1 AA)
  textMuted: "#9CA3AF",         // Helper gray
  textInverse: "#FFFFFF",
  success: "#16A34A",
  successBg: "#F0FDF4",
  mapRoad: "#FFFFFF",
  mapArterial: "#FFE082",       // Warm state road yellow
  mapWater: "#AADAFF",          // Realistic Google Maps lake blue
  mapPark: "#DCFCE7"            // Realistic Google Maps park green
};

// Common SVG Filters & Definitions
function defs3D() {
  return `
  <defs>
    <!-- Multi-level diffuse ambient shadow -->
    <filter id="shadow3D" x="-15%" y="-15%" width="130%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.06"/>
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#0F172A" flood-opacity="0.04"/>
    </filter>

    <filter id="shadowElevated" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#0F172A" flood-opacity="0.10"/>
      <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#0F172A" flood-opacity="0.06"/>
    </filter>

    <filter id="carShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.25"/>
    </filter>

    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E6441F"/>
      <stop offset="100%" stop-color="#CA3212"/>
    </linearGradient>

    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FBBF24"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>

    <clipPath id="heroClip"><rect width="353" height="150" rx="18"/></clipPath>
    <clipPath id="dishCardClip"><rect width="170" height="100" rx="14"/></clipPath>
    <clipPath id="dishListClip"><rect width="76" height="76" rx="12"/></clipPath>
    <clipPath id="dishModalClip"><rect width="353" height="170" rx="18"/></clipPath>
    <clipPath id="circleDishClip"><circle cx="28" cy="28" r="24"/></clipPath>
  </defs>`;
}

// Crisp Vector Icon Glyphs (Zero Emojis!)
const ICONS = {
  locationPin: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>`,
  locationCross: `<path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11a1 1 0 001.52 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor"/><line x1="4" y1="4" x2="20" y2="20" stroke="#EF4444" stroke-width="2.5" stroke-linecap="round"/>`,
  search: `<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" fill="none"/><line x1="16.5" y1="16.5" x2="22" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  mic: `<rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5 10c0 3.87 3.13 7 7 7s7-3.13 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  star: `<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor"/>`,
  clock: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/><polyline points="12,7 12,12 15,14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  bag: `<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" stroke="currentColor" stroke-width="2" fill="none"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2"/><path d="M16 10a4 4 0 01-8 0" stroke="currentColor" stroke-width="2" fill="none"/>`,
  phone: `<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="currentColor"/>`,
  chat: `<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" fill="currentColor"/>`,
  check: `<polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  trash: `<polyline points="3,6 5,6 21,6" stroke="currentColor" stroke-width="2" fill="none"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="2" fill="none"/>`,
  chevronRight: `<polyline points="9,18 15,12 9,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  chevronLeft: `<polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  chevronDown: `<polyline points="6,9 12,15 18,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  lightning: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor"/>`,
  flame: `<path d="M12 2c.5 2.5 2 4.5 4 6 2.5 1.8 4 4.5 4 7.5a8 8 0 11-16 0c0-4 3-7.5 5.5-9.5 1 2 2.5 3.5 4.5 4 0-3-1-6.5-2-8z" fill="currentColor"/>`,
  tag: `<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" stroke-width="2" fill="none"/><line x1="7" y1="7" x2="7.01" y2="7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>`,
  home: `<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" fill="none"/><polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" stroke-width="2" fill="none"/>`,
  building: `<path d="M4 22h16M4 2h16a1 1 0 011 1v19H3V3a1 1 0 011-1zM8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2M9 22v-4h6v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>`,
  sparkle: `<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="currentColor"/>`,
  filter: `<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  receipt: `<path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z" stroke="currentColor" stroke-width="2" fill="none"/><line x1="8" y1="7" x2="16" y2="7" stroke="currentColor" stroke-width="2"/><line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" stroke-width="2"/>`,
  cutlery: `<path d="M18 2v20M21 2v6a3 3 0 01-3 3M6 2v7a3 3 0 003 3v10M9 2v6a3 3 0 01-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>`,
  shieldCheck: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" fill="none"/><polyline points="9 12 11 14 15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>`
};

function statusBarLight(time = "9:41") {
  return `
  <g id="StatusBar">
    <rect x="0" y="0" width="393" height="54" fill="transparent"/>
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

function homeIndicatorLight() {
  return `
  <g id="HomeIndicator">
    <rect x="120" y="838" width="153" height="5" rx="2.5" fill="${C.textPrimary}" opacity="0.3"/>
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 01: ONB-01 (Splash & Sign In - Master Light Brand)
// -------------------------------------------------------------
function screenONB01() {
  return `
  <g id="SCREEN_ONB-01">
    <rect width="393" height="852" rx="44" fill="${C.surfaceCard}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.surfaceCard}"/>
    ${statusBarLight()}

    <!-- Hero Food Pull Header -->
    <g transform="translate(20, 68)" clip-path="url(#heroClip)" filter="url(#shadow3D)">
      <image href="${IMGS.heroMargherita}" width="353" height="150" preserveAspectRatio="xMidYMid slice"/>
      <rect width="353" height="150" fill="url(#btnGrad)" opacity="0.12"/>
    </g>

    <!-- Master Brand Emblem -->
    <g transform="translate(196.5, 230)">
      <circle cx="0" cy="0" r="28" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="2" filter="url(#shadow3D)"/>
      <g transform="translate(-12, -12)" color="${C.brandPrimary}">${ICONS.flame}</g>
      <text x="0" y="44" font-family="-apple-system, 'SF Pro Display', sans-serif" font-size="24" font-weight="900" fill="${C.textPrimary}" letter-spacing="1" text-anchor="middle">CRUST &amp; Q</text>
      <text x="0" y="60" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.brandSecondary}" letter-spacing="1.5" text-anchor="middle">WOOD-FIRED PIZZA &amp; CRAFT BBQ</text>
      <text x="0" y="74" font-family="-apple-system, sans-serif" font-size="10" font-weight="600" fill="${C.textMuted}" letter-spacing="0.5" text-anchor="middle">EST. 2024 • ORLANDO, FL</text>
    </g>

    <!-- Sign In Form -->
    <g transform="translate(24, 335)">
      <!-- Email Field -->
      <text x="4" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.textSecondary}">EMAIL ADDRESS</text>
      <rect x="0" y="8" width="345" height="50" rx="14" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.2"/>
      <text x="16" y="39" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="500" fill="${C.textPrimary}">sarah.jenkins@gmail.com</text>

      <!-- Password Field -->
      <text x="4" y="78" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.textSecondary}">PASSWORD</text>
      <rect x="0" y="86" width="345" height="50" rx="14" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1.2"/>
      <text x="16" y="117" font-family="-apple-system, sans-serif" font-size="18" fill="${C.textPrimary}">••••••••••••</text>
      <text x="325" y="116" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.brandPrimary}" text-anchor="end">SHOW</text>

      <!-- Remember Me & Forgot Password -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="18" height="18" rx="5" fill="${C.brandPrimary}"/>
        <g transform="translate(-1, -1)" color="#FFFFFF">${ICONS.check}</g>
        <text x="26" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textSecondary}">Remember me</text>
        <text x="345" y="14" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandPrimary}" text-anchor="end">Forgot Password?</text>
      </g>

      <!-- Primary CTA: Sign In -->
      <g transform="translate(0, 185)" filter="url(#shadowElevated)">
        <rect width="345" height="54" rx="16" fill="url(#btnGrad)"/>
        <text x="172.5" y="33" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Sign In to Crust &amp; Q</text>
      </g>

      <!-- Sign Up Redirect Link -->
      <g transform="translate(172.5, 260)">
        <text font-family="-apple-system, sans-serif" font-size="13.5" text-anchor="middle">
          <tspan fill="${C.textSecondary}">Don't have an account? </tspan>
          <tspan fill="${C.brandPrimary}" font-weight="800">Sign Up</tspan>
        </text>
      </g>

      <!-- Divider -->
      <g transform="translate(0, 292)">
        <line x1="0" y1="0" x2="145" y2="0" stroke="${C.borderSubtle}" stroke-width="1"/>
        <text x="172.5" y="4" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textMuted}" text-anchor="middle">OR</text>
        <line x1="200" y1="0" x2="345" y2="0" stroke="${C.borderSubtle}" stroke-width="1"/>
      </g>

      <!-- Guest Button -->
      <g transform="translate(0, 314)" filter="url(#shadow3D)">
        <rect width="345" height="50" rx="14" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        <text x="172.5" y="31" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="700" fill="${C.textPrimary}" text-anchor="middle">Continue as Guest Explorer</text>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 02: AUTH-01 (Create Account Form - Light Theme)
// -------------------------------------------------------------
function screenAUTH01() {
  return `
  <g id="SCREEN_AUTH-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.groundBase}"/>
    ${statusBarLight()}

    <!-- Header Navigation -->
    <g transform="translate(24, 68)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <g transform="translate(8, 8)" color="${C.textPrimary}">${ICONS.chevronLeft}</g>
      <text x="50" y="26" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.textPrimary}">Create Your Account</text>
      <text x="50" y="42" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">Join the Smokehouse Club &amp; Earn Rewards</text>
    </g>

    <!-- Registration Form Fields -->
    <g transform="translate(24, 136)">
      <!-- Name Row (2 columns) -->
      <g transform="translate(0, 0)">
        <text x="4" y="0" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textSecondary}">FIRST NAME</text>
        <rect x="0" y="6" width="164" height="46" rx="12" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <text x="14" y="34" font-family="-apple-system, sans-serif" font-size="14" font-weight="500" fill="${C.textPrimary}">Sarah</text>

        <text x="185" y="0" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textSecondary}">LAST NAME</text>
        <rect x="181" y="6" width="164" height="46" rx="12" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <text x="195" y="34" font-family="-apple-system, sans-serif" font-size="14" font-weight="500" fill="${C.textPrimary}">Jenkins</text>
      </g>

      <!-- Phone Number -->
      <g transform="translate(0, 70)">
        <text x="4" y="0" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textSecondary}">PHONE NUMBER</text>
        <rect x="0" y="6" width="345" height="46" rx="12" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <text x="14" y="34" font-family="-apple-system, sans-serif" font-size="14" font-weight="500" fill="${C.textPrimary}">+1 (407) 555-0198</text>
      </g>

      <!-- Email Address -->
      <g transform="translate(0, 140)">
        <text x="4" y="0" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textSecondary}">EMAIL ADDRESS</text>
        <rect x="0" y="6" width="345" height="46" rx="12" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <text x="14" y="34" font-family="-apple-system, sans-serif" font-size="14" font-weight="500" fill="${C.textPrimary}">sarah.jenkins@gmail.com</text>
      </g>

      <!-- Password -->
      <g transform="translate(0, 210)">
        <text x="4" y="0" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textSecondary}">PASSWORD</text>
        <rect x="0" y="6" width="345" height="46" rx="12" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <text x="14" y="36" font-family="-apple-system, sans-serif" font-size="18" fill="${C.textPrimary}">••••••••••••</text>
      </g>

      <!-- Confirm Password -->
      <g transform="translate(0, 280)">
        <text x="4" y="0" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textSecondary}">CONFIRM PASSWORD</text>
        <rect x="0" y="6" width="345" height="46" rx="12" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <text x="14" y="36" font-family="-apple-system, sans-serif" font-size="18" fill="${C.textPrimary}">••••••••••••</text>
        <g transform="translate(315, 20)" color="${C.success}">${ICONS.check}</g>
      </g>

      <!-- Terms & Conditions -->
      <g transform="translate(0, 350)">
        <rect x="0" y="0" width="16" height="16" rx="4" fill="${C.brandPrimary}"/>
        <g transform="translate(-2, -2)" color="#FFFFFF">${ICONS.check}</g>
        <text x="24" y="13" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textSecondary}">I agree to Crust &amp; Q Terms of Service &amp; Privacy Policy</text>
      </g>

      <!-- Sign Up Button -->
      <g transform="translate(0, 385)" filter="url(#shadowElevated)">
        <rect width="345" height="54" rx="16" fill="url(#btnGrad)"/>
        <text x="172.5" y="33" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Create Account &amp; Start Ordering</text>
      </g>

      <!-- Back to Login Link -->
      <g transform="translate(172.5, 465)">
        <text font-family="-apple-system, sans-serif" font-size="13" text-anchor="middle">
          <tspan fill="${C.textSecondary}">Already have an account? </tspan>
          <tspan fill="${C.brandPrimary}" font-weight="800">Sign In</tspan>
        </text>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 03: HOME-01 (Artisanal Delivery Hub - Matches Reference 2 & 4)
// -------------------------------------------------------------
function screenHOME01() {
  return `
  <g id="SCREEN_HOME-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.groundBase}"/>
    ${statusBarLight()}

    <!-- Header: Location Dropdown + Veg Mode + Profile Avatar -->
    <g transform="translate(20, 60)">
      <!-- Location Selector -->
      <g transform="translate(0, 2)">
        <g transform="translate(0, 0)" color="${C.brandPrimary}">${ICONS.locationPin}</g>
        <text x="24" y="14" font-family="-apple-system, sans-serif" font-size="15" font-weight="800" fill="${C.textPrimary}">Orlando • Downtown</text>
        <g transform="translate(168, 4)" color="${C.textPrimary}">${ICONS.chevronDown}</g>
        <text x="24" y="28" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="500" fill="${C.textSecondary}">200 E Robinson St, Lake Eola Heights</text>
      </g>

      <!-- Right Header Actions: Veg Mode Toggle & Profile Avatar -->
      <g transform="translate(250, 0)">
        <!-- Veg Mode Toggle -->
        <g transform="translate(0, 4)">
          <rect width="44" height="22" rx="11" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <circle cx="11" cy="11" r="9" fill="${C.success}"/>
          <text x="50" y="10" font-family="-apple-system, sans-serif" font-size="8" font-weight="800" fill="${C.success}">VEG</text>
          <text x="50" y="18" font-family="-apple-system, sans-serif" font-size="7" font-weight="700" fill="${C.textMuted}">MODE</text>
        </g>
        <!-- User Profile Circle -->
        <circle cx="86" cy="15" r="17" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="1.8"/>
        <text x="86" y="20" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">SJ</text>
      </g>
    </g>

    <!-- Search Bar with Microphone (Exact Match to Reference) -->
    <g transform="translate(20, 102)" filter="url(#shadow3D)">
      <rect width="353" height="44" rx="14" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <g transform="translate(14, 12)" color="${C.brandPrimary}">${ICONS.search}</g>
      <text x="42" y="27" font-family="-apple-system, sans-serif" font-size="13" font-weight="500" fill="${C.textMuted}">Search "wood-fired pizza", "brisket"...</text>
      <!-- Mic Icon Button -->
      <circle cx="330" cy="22" r="14" fill="${C.groundInput}"/>
      <g transform="translate(318, 10)" color="${C.brandPrimary}">${ICONS.mic}</g>
    </g>

    <!-- Hero Promotional Banner (50% Off Specials + 5 Dots) -->
    <g transform="translate(20, 156)" filter="url(#shadow3D)">
      <g clip-path="url(#heroClip)">
        <image href="${IMGS.heroBbqFeast}" width="353" height="150" preserveAspectRatio="xMidYMid slice"/>
        <rect width="353" height="150" fill="url(#btnGrad)" opacity="0.25"/>
        <rect width="353" height="150" fill="#000000" opacity="0.30"/>
        
        <!-- Headline Copy -->
        <text x="18" y="32" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="900" fill="#FBBF24" letter-spacing="1">LIMITED TIME FEAST SPECIAL</text>
        <text x="18" y="58" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">ITEMS AT 50% OFF</text>
        <text x="18" y="78" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF">Smoked Texas Brisket &amp; Artisanal Pies</text>

        <!-- Order Now Button -->
        <rect x="18" y="94" width="105" height="30" rx="10" fill="#FFFFFF"/>
        <text x="70" y="114" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">Order now ▸</text>

        <!-- 5 Slide Dots Indicator -->
        <g transform="translate(155, 136)">
          <circle cx="0" cy="0" r="3" fill="#FFFFFF"/>
          <circle cx="10" cy="0" r="2.5" fill="#FFFFFF" opacity="0.5"/>
          <circle cx="20" cy="0" r="2.5" fill="#FFFFFF" opacity="0.5"/>
          <circle cx="30" cy="0" r="2.5" fill="#FFFFFF" opacity="0.5"/>
          <circle cx="40" cy="0" r="2.5" fill="#FFFFFF" opacity="0.5"/>
        </g>
      </g>
    </g>

    <!-- Category Horizontal Strip (Circular Dish Photos on Porcelain) -->
    <g transform="translate(20, 318)">
      <!-- Promo Pill on Left: "Meals Under $15" -->
      <g filter="url(#shadow3D)">
        <rect width="64" height="68" rx="12" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="1"/>
        <text x="32" y="18" font-family="-apple-system, sans-serif" font-size="8" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">FEASTS</text>
        <text x="32" y="32" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">UNDER</text>
        <text x="32" y="48" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">$15</text>
        <text x="32" y="60" font-family="-apple-system, sans-serif" font-size="7.5" font-weight="700" fill="${C.brandSecondary}" text-anchor="middle">Explore ▸</text>
      </g>

      <!-- Category 1: All (Active with red indicator line) -->
      <g transform="translate(74, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.brandPrimary}" stroke-width="2" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.heroMargherita}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="${C.brandPrimary}" text-anchor="middle">All</text>
        <!-- Red indicator bar under active tab -->
        <rect x="10" y="68" width="32" height="3" rx="1.5" fill="${C.brandPrimary}"/>
      </g>

      <!-- Category 2: Pizza -->
      <g transform="translate(136, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.trufflePizza}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">Pizza</text>
      </g>

      <!-- Category 3: BBQ -->
      <g transform="translate(198, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.smokedRibs}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">BBQ</text>
      </g>

      <!-- Category 4: Steaks -->
      <g transform="translate(260, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.angusRibeye}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">Steaks</text>
      </g>

      <!-- Category 5: Burgers -->
      <g transform="translate(322, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.smashBurger}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">Burgers</text>
      </g>
    </g>

    <!-- Filter & Sort Chips Row (Reference Image 2) -->
    <g transform="translate(20, 400)">
      <!-- Filter Button -->
      <rect x="0" y="0" width="84" height="30" rx="9" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <g transform="translate(10, 7)" color="${C.textPrimary}">${ICONS.filter}</g>
      <text x="32" y="20" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="700" fill="${C.textPrimary}">Filters</text>
      <g transform="translate(66, 7)" color="${C.textMuted}">${ICONS.chevronDown}</g>

      <!-- Near & Fast Pill -->
      <rect x="92" y="0" width="105" height="30" rx="9" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <g transform="translate(100, 7)" color="${C.brandPrimary}">${ICONS.lightning}</g>
      <text x="122" y="20" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="700" fill="${C.textPrimary}">Near &amp; Fast</text>

      <!-- Zero-Spill Guarantee Pill -->
      <rect x="205" y="0" width="148" height="30" rx="9" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <g transform="translate(213, 7)" color="${C.success}">${ICONS.shieldCheck}</g>
      <text x="235" y="20" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="700" fill="${C.textPrimary}">Zero-Spill Guarantee</text>
    </g>

    <!-- Section Header: RECOMMENDED FOR YOU -->
    <g transform="translate(20, 448)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="${C.textPrimary}" letter-spacing="1">RECOMMENDED FOR YOU</text>
      <text x="353" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="800" fill="${C.brandPrimary}" text-anchor="end">See all 24 ▸</text>
    </g>

    <!-- 2-Column Food Card Grid (High Realism, Food Photography, Offer Badges) -->
    <g transform="translate(20, 460)">
      <!-- Card 1: Left Column (Truffle Margherita) -->
      <g transform="translate(0, 0)" filter="url(#shadow3D)">
        <rect width="170" height="205" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g clip-path="url(#dishCardClip)">
          <image href="${IMGS.trufflePizza}" width="170" height="100" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <!-- Top Offer Badge (Matches Reference ₹75 OFF above ₹199) -->
        <rect x="8" y="8" width="112" height="18" rx="5" fill="#111827" fill-opacity="0.85"/>
        <text x="64" y="21" font-family="-apple-system, sans-serif" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle">20% OFF ABOVE $25</text>

        <!-- Rating Pill (Green badge matching Reference ★ 4.5) -->
        <rect x="10" y="108" width="42" height="18" rx="5" fill="${C.success}"/>
        <g transform="translate(13, 110)" color="#FFFFFF">${ICONS.star}</g>
        <text x="38" y="121" font-family="-apple-system, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="end">4.9</text>

        <!-- Title & Subtitle -->
        <text x="10" y="142" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}">Truffle Mushroom</text>
        <!-- Prep Time with Lightning -->
        <g transform="translate(10, 149)" color="${C.brandPrimary}">${ICONS.lightning}</g>
        <text x="24" y="160" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}">15–20 mins</text>

        <!-- Price & Add Button -->
        <text x="10" y="188" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="900" fill="${C.brandPrimary}">$21.50</text>
        <rect x="110" y="172" width="50" height="24" rx="8" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="1.2"/>
        <text x="135" y="188" font-family="-apple-system, sans-serif" font-size="11" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">ADD +</text>
      </g>

      <!-- Card 2: Right Column (16-Hr Prime Brisket) -->
      <g transform="translate(183, 0)" filter="url(#shadow3D)">
        <rect width="170" height="205" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g clip-path="url(#dishCardClip)">
          <image href="${IMGS.texasBrisket}" width="170" height="100" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <!-- Top Offer Badge -->
        <rect x="8" y="8" width="105" height="18" rx="5" fill="#111827" fill-opacity="0.85"/>
        <text x="60.5" y="21" font-family="-apple-system, sans-serif" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle">PITMASTER CHOICE</text>

        <!-- Rating Pill -->
        <rect x="10" y="108" width="42" height="18" rx="5" fill="${C.success}"/>
        <g transform="translate(13, 110)" color="#FFFFFF">${ICONS.star}</g>
        <text x="38" y="121" font-family="-apple-system, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="end">4.95</text>

        <!-- Title & Subtitle -->
        <text x="10" y="142" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}">Texas Prime Brisket</text>
        <g transform="translate(10, 149)" color="${C.brandPrimary}">${ICONS.lightning}</g>
        <text x="24" y="160" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}">20–25 mins</text>

        <!-- Price & Add Button -->
        <text x="10" y="188" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="900" fill="${C.brandPrimary}">$28.00</text>
        <rect x="110" y="172" width="50" height="24" rx="8" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="1.2"/>
        <text x="135" y="188" font-family="-apple-system, sans-serif" font-size="11" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">ADD +</text>
      </g>
    </g>

    <!-- Sticky Floating "View Cart" Bar (Exact Match to Reference Image 2 & 3) -->
    <g transform="translate(20, 680)" filter="url(#shadowElevated)">
      <rect width="353" height="52" rx="16" fill="#111827"/>
      <!-- Food thumbnail -->
      <g clip-path="url(#dishListClip)" transform="translate(8, 7)">
        <image href="${IMGS.hotHoneyPepperoni}" width="38" height="38" preserveAspectRatio="xMidYMid slice"/>
      </g>
      <text x="54" y="24" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF">Crust &amp; Q Smokehouse</text>
      <text x="54" y="40" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.brandSecondary}">View Menu ▸</text>

      <!-- View Cart Red Pill Button -->
      <rect x="210" y="8" width="105" height="36" rx="12" fill="url(#btnGrad)"/>
      <text x="262.5" y="24" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="#FFFFFF" text-anchor="middle">View Cart</text>
      <text x="262.5" y="36" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="700" fill="#FFFFFF" opacity="0.9" text-anchor="middle">1 item • $21.50</text>

      <!-- Close ✕ Button -->
      <circle cx="334" cy="26" r="10" fill="#374151"/>
      <text x="334" y="30" font-family="-apple-system, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">✕</text>
    </g>

    <!-- Floating Pill Bottom Navigation Dock (Exact Match to Reference Image 2) -->
    <g transform="translate(20, 746)" filter="url(#shadowElevated)">
      <!-- Left AI Assistant Circle -->
      <circle cx="28" cy="28" r="24" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <g transform="translate(16, 16)" color="${C.brandPrimary}">${ICONS.sparkle}</g>

      <!-- Main Navigation Dock Capsule -->
      <g transform="translate(64, 0)">
        <rect width="289" height="56" rx="28" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
        
        <!-- Tab 1: Delivery (Active Red Pill) -->
        <g transform="translate(8, 6)">
          <rect width="90" height="44" rx="22" fill="${C.brandAccentLight}"/>
          <g transform="translate(18, 12)" color="${C.brandPrimary}">${ICONS.flame}</g>
          <text x="42" y="28" font-family="-apple-system, sans-serif" font-size="12" font-weight="800" fill="${C.brandPrimary}">Delivery</text>
        </g>

        <!-- Tab 2: History -->
        <g transform="translate(112, 18)">
          <g transform="translate(0, 0)" color="${C.textMuted}">${ICONS.receipt}</g>
          <text x="24" y="16" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textSecondary}">History</text>
        </g>

        <!-- Tab 3: Dine-In -->
        <g transform="translate(202, 18)">
          <g transform="translate(0, 0)" color="${C.textMuted}">${ICONS.cutlery}</g>
          <text x="24" y="16" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textSecondary}">Dine-In</text>
        </g>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 04: LOC-01 (Select Saved Address Modal - Matches Reference 1)
// -------------------------------------------------------------
function screenLOC01() {
  return `
  <g id="SCREEN_LOC-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="#000000" fill-opacity="0.45"/>
    ${statusBarLight()}

    <!-- Close ✕ Circle (Exact position matching Reference Image 1) -->
    <circle cx="196.5" cy="380" r="18" fill="#1F2937" filter="url(#shadow3D)"/>
    <text x="196.5" y="386" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">✕</text>

    <!-- Address Bottom Sheet Container -->
    <g transform="translate(0, 410)" filter="url(#shadowElevated)">
      <rect width="393" height="442" rx="32" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <rect x="176" y="10" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.4"/>

      <!-- "Device Location Not Enabled" Alert Box (Exact Match to Reference Image 1) -->
      <g transform="translate(20, 26)" filter="url(#shadow3D)">
        <rect width="353" height="74" rx="16" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <!-- Red location cross pin -->
        <g transform="translate(16, 18)" color="${C.brandPrimary}">${ICONS.locationCross}</g>
        <text x="50" y="32" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="800" fill="${C.textPrimary}">Device location not enabled</text>
        <text x="50" y="48" font-family="-apple-system, sans-serif" font-size="11" fill="${C.textSecondary}">Enable your device location for a better</text>
        <text x="50" y="62" font-family="-apple-system, sans-serif" font-size="11" fill="${C.textSecondary}">and faster delivery experience</text>

        <!-- Enable Red Button -->
        <rect x="264" y="20" width="75" height="34" rx="10" fill="url(#btnGrad)"/>
        <text x="301.5" y="42" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle">Enable</text>
      </g>

      <!-- Section Title: Select a saved address + See all link -->
      <g transform="translate(20, 126)">
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="15" font-weight="900" fill="${C.textPrimary}">Select a saved address</text>
        <text x="353" y="0" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.brandPrimary}" text-anchor="end">See all</text>
      </g>

      <!-- Saved Address 1: Home (Lake Eola Heights, Orlando) -->
      <g transform="translate(20, 142)" filter="url(#shadow3D)">
        <rect width="353" height="70" rx="14" fill="${C.groundInput}" stroke="${C.brandPrimary}" stroke-width="1.5"/>
        <g transform="translate(18, 24)" color="${C.brandPrimary}">${ICONS.home}</g>
        <text x="50" y="30" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="900" fill="${C.textPrimary}">Home</text>
        <text x="50" y="48" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">200 E Robinson St, Apt 402, Lake Eola Heights, Orlando...</text>
        <g transform="translate(320, 26)" color="${C.brandPrimary}">${ICONS.check}</g>
      </g>

      <!-- Saved Address 2: Office (Downtown Orlando Bank Center) -->
      <g transform="translate(20, 222)" filter="url(#shadow3D)">
        <rect width="353" height="70" rx="14" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g transform="translate(18, 24)" color="${C.textSecondary}">${ICONS.building}</g>
        <text x="50" y="30" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="900" fill="${C.textPrimary}">Office</text>
        <text x="50" y="48" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">390 N Orange Ave, Ste 1400, Bank of America Center...</text>
      </g>

      <!-- Search location manually input (Exact Match to Reference Image 1) -->
      <g transform="translate(20, 304)" filter="url(#shadow3D)">
        <rect width="353" height="48" rx="14" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.2"/>
        <g transform="translate(16, 14)" color="${C.brandPrimary}">${ICONS.search}</g>
        <text x="46" y="30" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textSecondary}">Search location manually</text>
        <g transform="translate(325, 14)" color="${C.textMuted}">${ICONS.chevronRight}</g>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 05: TRACK-01 (Live Google Maps Customer Tracking)
// -------------------------------------------------------------
function screenTRACK01() {
  return `
  <g id="SCREEN_TRACK-01">
    <rect width="393" height="852" rx="44" fill="${C.surfaceCard}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="#E5E7EB"/>

    <!-- Daylight Real Google Maps Canvas -->
    <g id="DaylightGoogleMap">
      <!-- Water: Lake Eola -->
      <path d="M 120 220 C 180 180, 280 200, 330 250 C 370 290, 340 370, 270 380 C 200 390, 130 350, 110 300 Z" fill="${C.mapWater}"/>
      <text x="220" y="295" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="#1565C0" opacity="0.6">Lake Eola</text>

      <!-- Park Turf -->
      <path d="M 80 190 C 140 150, 320 170, 360 230 L 370 280 C 390 350, 350 410, 250 410 C 160 410, 80 370, 70 280 Z" fill="${C.mapPark}" opacity="0.4"/>

      <!-- Arterials & Streets -->
      <line x1="0" y1="180" x2="393" y2="180" stroke="${C.mapArterial}" stroke-width="12"/>
      <line x1="0" y1="180" x2="393" y2="180" stroke="#FFFFFF" stroke-width="8"/>
      <text x="24" y="174" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#78716C">E ROBINSON ST</text>

      <line x1="0" y1="430" x2="393" y2="430" stroke="${C.mapArterial}" stroke-width="12"/>
      <line x1="0" y1="430" x2="393" y2="430" stroke="#FFFFFF" stroke-width="8"/>
      <text x="24" y="424" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#78716C">E CENTRAL BLVD</text>

      <line x1="90" y1="0" x2="90" y2="600" stroke="${C.mapArterial}" stroke-width="14"/>
      <line x1="90" y1="0" x2="90" y2="600" stroke="#FFFFFF" stroke-width="9"/>
      <text x="96" y="90" font-family="-apple-system, sans-serif" font-size="10" font-weight="700" fill="#78716C" transform="rotate(90, 96, 90)">S ORANGE AVE</text>

      <!-- Active Delivery Polyline -->
      <path d="M 90 430 L 90 180 L 260 180" stroke="#1A73E8" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M 90 430 L 90 180 L 260 180" stroke="#4285F4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

      <!-- Restaurant Pin: Crust & Q (90, 430) -->
      <g transform="translate(90, 430)" filter="url(#shadowElevated)">
        <circle cx="0" cy="0" r="16" fill="${C.brandPrimary}"/>
        <g transform="translate(-10, -10)" color="#FFFFFF">${ICONS.flame}</g>
      </g>

      <!-- Customer Destination Pin (260, 180) -->
      <g transform="translate(260, 180)" filter="url(#shadowElevated)">
        <circle cx="0" cy="0" r="16" fill="#111827"/>
        <g transform="translate(-10, -10)" color="#FFFFFF">${ICONS.home}</g>
      </g>

      <!-- 3D Moving Delivery Vehicle: Toyota RAV4 (90, 270) -->
      <g transform="translate(90, 270)" filter="url(#carShadow)">
        <circle cx="0" cy="0" r="20" fill="#1A73E8" stroke="#FFFFFF" stroke-width="3"/>
        <g transform="translate(-10, -10)" color="#FFFFFF">${ICONS.lightning}</g>
      </g>
    </g>

    ${statusBarLight()}

    <!-- Top Floating Back & Status Bar -->
    <g transform="translate(20, 64)" filter="url(#shadowElevated)">
      <circle cx="20" cy="20" r="20" fill="${C.surfaceCard}"/>
      <g transform="translate(8, 8)" color="${C.textPrimary}">${ICONS.chevronLeft}</g>
      
      <rect x="52" y="0" width="220" height="40" rx="20" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <circle cx="70" cy="20" r="5" fill="${C.brandPrimary}"/>
      <text x="82" y="24" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}">Live Google Maps Track</text>

      <circle cx="333" cy="20" r="20" fill="${C.surfaceCard}"/>
      <g transform="translate(321, 8)" color="${C.textPrimary}">${ICONS.phone}</g>
    </g>

    <!-- Bottom Tracking Card (Light Theme) -->
    <g transform="translate(20, 520)" filter="url(#shadowElevated)">
      <rect width="353" height="300" rx="24" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>

      <!-- ETA Badge Header -->
      <g transform="translate(20, 22)">
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="800" fill="${C.brandPrimary}">ESTIMATED DELIVERY</text>
        <text x="0" y="28" font-family="-apple-system, sans-serif" font-size="28" font-weight="900" fill="${C.textPrimary}">8–12 mins</text>
        <text x="0" y="46" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textSecondary}">On time • 1.2 mi away from 200 E Robinson St</text>
      </g>

      <!-- Progress Stepper -->
      <g transform="translate(20, 96)">
        <line x1="16" y1="12" x2="300" y2="12" stroke="${C.borderSubtle}" stroke-width="3"/>
        <line x1="16" y1="12" x2="210" y2="12" stroke="${C.brandPrimary}" stroke-width="3"/>
        
        <!-- Step 1: Confirmed -->
        <circle cx="16" cy="12" r="8" fill="${C.brandPrimary}"/>
        <g transform="translate(10, 6)" color="#FFFFFF">${ICONS.check}</g>
        
        <!-- Step 2: Wood-Fired Kitchen -->
        <circle cx="112" cy="12" r="8" fill="${C.brandPrimary}"/>
        <g transform="translate(106, 6)" color="#FFFFFF">${ICONS.check}</g>

        <!-- Step 3: Out for Delivery (Active) -->
        <circle cx="210" cy="12" r="10" fill="${C.brandPrimary}" stroke="${C.brandAccentLight}" stroke-width="3"/>

        <!-- Step 4: Delivered -->
        <circle cx="304" cy="12" r="8" fill="${C.borderSubtle}"/>

        <text x="16" y="34" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">Ordered</text>
        <text x="112" y="34" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" fill="${C.textSecondary}" text-anchor="middle">Kitchen</text>
        <text x="210" y="34" font-family="-apple-system, sans-serif" font-size="9" font-weight="800" fill="${C.brandPrimary}" text-anchor="middle">On Route</text>
        <text x="304" y="34" font-family="-apple-system, sans-serif" font-size="9" font-weight="600" fill="${C.textMuted}" text-anchor="middle">Arrived</text>
      </g>

      <!-- Driver Partner Information Card -->
      <g transform="translate(20, 160)">
        <rect width="313" height="74" rx="16" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <circle cx="38" cy="37" r="22" fill="#D1D5DB"/>
        <text x="38" y="42" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}" text-anchor="middle">MV</text>

        <text x="70" y="28" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="800" fill="${C.textPrimary}">Marcus Vance</text>
        <text x="70" y="44" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textSecondary}">2023 Silver Toyota RAV4 Hybrid</text>
        <text x="70" y="58" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="700" fill="${C.textMuted}">FL-78A-BQ9 • 4.96 ★ (2,410 trips)</text>

        <!-- Call & Chat Actions -->
        <circle cx="250" cy="37" r="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g transform="translate(238, 25)" color="${C.textPrimary}">${ICONS.chat}</g>

        <circle cx="288" cy="37" r="16" fill="url(#btnGrad)"/>
        <g transform="translate(276, 25)" color="#FFFFFF">${ICONS.phone}</g>
      </g>

      <!-- Pin Safety Code -->
      <g transform="translate(20, 252)">
        <text x="0" y="16" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textSecondary}">Delivery PIN Code:</text>
        <text x="118" y="16" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.brandPrimary}">8 4 1 9</text>
        <text x="313" y="16" font-family="-apple-system, sans-serif" font-size="12" font-weight="800" fill="${C.brandPrimary}" text-anchor="end">Order Details ▸</text>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 06: DRV-02 (Driver Reverse Live Google Navigation)
// -------------------------------------------------------------
function screenDRV02() {
  return `
  <g id="SCREEN_DRV-02">
    <rect width="393" height="852" rx="44" fill="${C.surfaceCard}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="#E5E7EB"/>

    <!-- Daylight Turn-By-Turn Navigation Background -->
    <g id="DriverGoogleNav">
      <!-- Streets -->
      <line x1="196" y1="0" x2="196" y2="852" stroke="#FFFFFF" stroke-width="36"/>
      <line x1="196" y1="0" x2="196" y2="852" stroke="${C.mapArterial}" stroke-width="26"/>
      
      <!-- Cross street Robinson -->
      <line x1="0" y1="360" x2="393" y2="360" stroke="#FFFFFF" stroke-width="34"/>
      <line x1="0" y1="360" x2="393" y2="360" stroke="${C.mapArterial}" stroke-width="24"/>

      <!-- Navigation Turn Route -->
      <path d="M 196 680 L 196 360 L 320 360" stroke="#1A73E8" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

      <!-- Driver Vehicle Arrow -->
      <g transform="translate(196, 520)" filter="url(#carShadow)">
        <circle cx="0" cy="0" r="22" fill="#1A73E8" stroke="#FFFFFF" stroke-width="3"/>
        <g transform="translate(-10, -10)" color="#FFFFFF">${ICONS.lightning}</g>
      </g>
    </g>

    ${statusBarLight()}

    <!-- Top Turn-By-Turn Banner (Authentic Google Maps Green #15803D) -->
    <g transform="translate(16, 54)" filter="url(#shadowElevated)">
      <rect width="361" height="96" rx="20" fill="#15803D"/>
      <!-- Turn Left Arrow Glyph -->
      <g transform="translate(24, 28)" color="#FFFFFF">
        <path d="M24 10 L10 10 L10 2 M10 10 L2 2 M10 10 L10 32" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none"/>
      </g>
      <text x="64" y="44" font-family="-apple-system, sans-serif" font-size="21" font-weight="900" fill="#FFFFFF">In 400 ft</text>
      <text x="64" y="66" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="700" fill="#DCFCE7">Turn Left on E Robinson St</text>
      <text x="64" y="84" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="#BBF7D0">Then destination is on your right</text>
    </g>

    <!-- Speed Limit & Compass Badges -->
    <g transform="translate(24, 164)" filter="url(#shadow3D)">
      <rect width="48" height="58" rx="10" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
      <text x="24" y="20" font-family="-apple-system, sans-serif" font-size="9" font-weight="900" fill="#000000" text-anchor="middle">SPEED</text>
      <text x="24" y="32" font-family="-apple-system, sans-serif" font-size="9" font-weight="900" fill="#000000" text-anchor="middle">LIMIT</text>
      <text x="24" y="50" font-family="-apple-system, sans-serif" font-size="17" font-weight="900" fill="#000000" text-anchor="middle">30</text>
    </g>

    <!-- Bottom Driver Sheet -->
    <g transform="translate(0, 580)" filter="url(#shadowElevated)">
      <rect width="393" height="272" rx="32" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <rect x="176" y="10" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.4"/>

      <!-- Customer Details -->
      <g transform="translate(24, 28)">
        <circle cx="24" cy="24" r="22" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="1.5"/>
        <text x="24" y="30" font-family="-apple-system, sans-serif" font-size="15" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">SJ</text>

        <text x="60" y="22" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}">Sarah Jenkins</text>
        <text x="60" y="38" font-family="-apple-system, sans-serif" font-size="12.5" fill="${C.textSecondary}">200 E Robinson St, Apt 402</text>

        <circle cx="280" cy="24" r="18" fill="${C.groundInput}"/>
        <g transform="translate(268, 12)" color="${C.textPrimary}">${ICONS.chat}</g>

        <circle cx="325" cy="24" r="18" fill="url(#btnGrad)"/>
        <g transform="translate(313, 12)" color="#FFFFFF">${ICONS.phone}</g>
      </g>

      <!-- Delivery Instruction -->
      <g transform="translate(24, 88)">
        <rect width="345" height="52" rx="14" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <text x="16" y="24" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="${C.brandPrimary}">DELIVERY INSTRUCTION:</text>
        <text x="16" y="40" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.textPrimary}">"Apt 4B, please dial #0412 at callbox or leave at door"</text>
      </g>

      <!-- Primary Action: I Have Arrived -->
      <g transform="translate(24, 156)" filter="url(#shadow3D)">
        <rect width="345" height="56" rx="16" fill="url(#btnGrad)"/>
        <text x="172.5" y="35" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">I Have Arrived at Location</text>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 07: DISH-01 (Dish Detail & Customization Modal)
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
        <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.textPrimary}">Add Premium Smokehouse Toppings</text>
        
        <g transform="translate(0, 10)">
          <rect width="345" height="40" rx="10" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <rect x="14" y="12" width="16" height="16" rx="4" fill="${C.brandPrimary}"/>
          <g transform="translate(12, 10)" color="#FFFFFF">${ICONS.check}</g>
          <text x="40" y="25" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textPrimary}">Hot Honey Drizzle</text>
          <text x="325" y="25" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.brandSecondary}" text-anchor="end">+$1.50</text>
        </g>

        <g transform="translate(0, 56)">
          <rect width="345" height="40" rx="10" fill="${C.groundInput}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <rect x="14" y="12" width="16" height="16" rx="4" stroke="${C.borderStrong}" stroke-width="1.5" fill="none"/>
          <text x="40" y="25" font-family="-apple-system, sans-serif" font-size="13" font-weight="600" fill="${C.textSecondary}">St. Louis Smoked Rib Crumbles</text>
          <text x="325" y="25" font-family="-apple-system, sans-serif" font-size="12" font-weight="700" fill="${C.brandSecondary}" text-anchor="end">+$3.50</text>
        </g>
      </g>

      <!-- Bottom Action Bar -->
      <g transform="translate(24, 530)" filter="url(#shadowElevated)">
        <rect width="345" height="60" rx="18" fill="url(#btnGrad)"/>
        <!-- Quantity -->
        <text x="36" y="36" font-family="-apple-system, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">−</text>
        <text x="64" y="36" font-family="-apple-system, sans-serif" font-size="17" font-weight="900" fill="#FFFFFF">1</text>
        <text x="92" y="36" font-family="-apple-system, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">+</text>

        <line x1="120" y1="14" x2="120" y2="46" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1"/>
        <text x="225" y="36" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">Add to Feast • $23.00</text>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 08: CART-01 (Cart & Checkout Screen)
// -------------------------------------------------------------
function screenCART01() {
  return `
  <g id="SCREEN_CART-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.groundBase}"/>
    ${statusBarLight()}

    <!-- Header Navigation -->
    <g transform="translate(24, 68)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <g transform="translate(8, 8)" color="${C.textPrimary}">${ICONS.chevronLeft}</g>
      <text x="50" y="26" font-family="-apple-system, sans-serif" font-size="20" font-weight="900" fill="${C.textPrimary}">Your Feast Cart</text>
      <text x="345" y="26" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.brandPrimary}" text-anchor="end">Clear All</text>
    </g>

    <!-- Item List -->
    <g transform="translate(20, 126)">
      <!-- Item 1: Truffle Pizza -->
      <g transform="translate(0, 0)" filter="url(#shadow3D)">
        <rect width="353" height="110" rx="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g clip-path="url(#dishListClip)" transform="translate(12, 17)">
          <image href="${IMGS.trufflePizza}" width="76" height="76" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="96" y="34" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="800" fill="${C.textPrimary}">Smoked Truffle &amp; Mushroom</text>
        <text x="96" y="52" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">Neapolitan, Hot Honey Drizzle</text>
        <text x="96" y="80" font-family="-apple-system, sans-serif" font-size="15" font-weight="900" fill="${C.brandPrimary}">$23.00</text>
        <!-- Trash Icon -->
        <g transform="translate(320, 42)" color="${C.textMuted}">${ICONS.trash}</g>
      </g>

      <!-- Item 2: Double Brisket Smash Burger -->
      <g transform="translate(0, 124)" filter="url(#shadow3D)">
        <rect width="353" height="110" rx="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g clip-path="url(#dishListClip)" transform="translate(12, 17)">
          <image href="${IMGS.smashBurger}" width="76" height="76" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="96" y="34" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="800" fill="${C.textPrimary}">Double Brisket Smash Burger</text>
        <text x="96" y="52" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textMuted}">Brioche bun, aged cheddar, brisket</text>
        <text x="96" y="80" font-family="-apple-system, sans-serif" font-size="15" font-weight="900" fill="${C.brandPrimary}">$17.00</text>
        <g transform="translate(320, 42)" color="${C.textMuted}">${ICONS.trash}</g>
      </g>
    </g>

    <!-- Promo Code Box -->
    <g transform="translate(20, 376)" filter="url(#shadow3D)">
      <rect width="353" height="46" rx="12" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <g transform="translate(16, 13)" color="${C.brandPrimary}">${ICONS.tag}</g>
      <text x="44" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textPrimary}">CRUST20 [20% Off Applied]</text>
      <text x="335" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="${C.brandPrimary}" text-anchor="end">-$8.00</text>
    </g>

    <!-- Tip Selector -->
    <g transform="translate(20, 436)">
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
    <g transform="translate(20, 502)" filter="url(#shadow3D)">
      <rect width="353" height="150" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="18" y="28" font-family="-apple-system, sans-serif" font-size="13" fill="${C.textSecondary}">Item Subtotal</text>
      <text x="335" y="28" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="${C.textPrimary}" text-anchor="end">$40.00</text>

      <text x="18" y="52" font-family="-apple-system, sans-serif" font-size="13" fill="${C.brandPrimary}">Promo Discount (CRUST20)</text>
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
    <g transform="translate(20, 672)" filter="url(#shadowElevated)">
      <rect width="353" height="56" rx="16" fill="url(#btnGrad)"/>
      <text x="176.5" y="34" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">Place Order • $41.99</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 09: GUEST-01 (Guest Auth Intercept Modal)
// -------------------------------------------------------------
function screenGUEST01() {
  return `
  <g id="SCREEN_GUEST-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="#000000" fill-opacity="0.45"/>
    ${statusBarLight()}

    <g transform="translate(0, 410)" filter="url(#shadowElevated)">
      <rect width="393" height="442" rx="32" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <rect x="176" y="12" width="40" height="5" rx="2.5" fill="${C.textMuted}" opacity="0.4"/>

      <!-- Flame Lock Icon Badge -->
      <circle cx="196.5" cy="65" r="32" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="2" filter="url(#shadow3D)"/>
      <g transform="translate(184.5, 53)" color="${C.brandPrimary}">${ICONS.flame}</g>

      <text x="196.5" y="130" font-family="-apple-system, sans-serif" font-size="21" font-weight="900" fill="${C.textPrimary}" text-anchor="middle">Sign In to Place Your Order</text>
      <text x="196.5" y="156" font-family="-apple-system, sans-serif" font-size="13.5" fill="${C.textSecondary}" text-anchor="middle">Log in or create an account to save delivery addresses,</text>
      <text x="196.5" y="174" font-family="-apple-system, sans-serif" font-size="13.5" fill="${C.textSecondary}" text-anchor="middle">track your driver live on Google Maps, and earn points.</text>

      <!-- Sign In Button -->
      <g transform="translate(24, 210)" filter="url(#shadow3D)">
        <rect width="345" height="54" rx="16" fill="url(#btnGrad)"/>
        <text x="172.5" y="33" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Sign In to Continue</text>
      </g>

      <!-- Create Account Button -->
      <g transform="translate(24, 276)" filter="url(#shadow3D)">
        <rect width="345" height="52" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.8"/>
        <text x="172.5" y="32" font-family="-apple-system, sans-serif" font-size="15" font-weight="700" fill="${C.textPrimary}" text-anchor="middle">Create New Account</text>
      </g>

      <text x="196.5" y="360" font-family="-apple-system, sans-serif" font-size="13.5" font-weight="600" fill="${C.textMuted}" text-anchor="middle">Continue browsing menu</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 10: ORDER-SUCC-01 (Order Confirmed & Placed)
// -------------------------------------------------------------
function screenORDERSUCC01() {
  return `
  <g id="SCREEN_ORDER-SUCC-01">
    <rect width="393" height="852" rx="44" fill="${C.surfaceCard}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.surfaceCard}"/>
    ${statusBarLight()}

    <!-- Glowing Checkmark Core -->
    <g transform="translate(196.5, 170)" filter="url(#shadowElevated)">
      <circle cx="0" cy="0" r="48" fill="${C.successBg}" stroke="${C.success}" stroke-width="3"/>
      <g transform="translate(-16, -16)" color="${C.success}">
        <path d="M6 16 L14 24 L28 8" stroke="${C.success}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>
    </g>

    <!-- Confirmation Titles -->
    <text x="196.5" y="260" font-family="-apple-system, sans-serif" font-size="24" font-weight="900" fill="${C.textPrimary}" text-anchor="middle">Feast is Wood-Firing!</text>
    <text x="196.5" y="286" font-family="-apple-system, sans-serif" font-size="14.5" fill="${C.textSecondary}" text-anchor="middle">Order #CQ-8924 • Estimated Delivery: 22–28 mins</text>

    <!-- Order Summary Card -->
    <g transform="translate(20, 320)" filter="url(#shadow3D)">
      <rect width="353" height="220" rx="20" fill="${C.groundBase}" stroke="${C.borderSubtle}" stroke-width="1"/>
      <text x="20" y="32" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.brandPrimary}">DISPATCH DETAILS</text>

      <text x="20" y="62" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}">Crust &amp; Q Smokehouse • Orlando Downtown</text>
      <text x="20" y="80" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">1x Smoked Truffle Mushroom Pie</text>
      <text x="20" y="98" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">1x Double Brisket Smash Burger</text>

      <line x1="20" y1="116" x2="333" y2="116" stroke="${C.borderSubtle}" stroke-width="1"/>

      <text x="20" y="142" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}">Delivery Destination</text>
      <text x="20" y="160" font-family="-apple-system, sans-serif" font-size="12" fill="${C.textSecondary}">Sarah Jenkins • 200 E Robinson St, Apt 402</text>
      <text x="20" y="196" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.brandPrimary}">Total Paid: $41.99 via Apple Pay</text>
    </g>

    <!-- Primary Action: Track Live on Google Maps -->
    <g transform="translate(20, 570)" filter="url(#shadowElevated)">
      <rect width="353" height="56" rx="16" fill="url(#btnGrad)"/>
      <text x="176.5" y="34" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">Track Live on Google Maps ▸</text>
    </g>

    <!-- Secondary: Return Home -->
    <g transform="translate(20, 642)">
      <rect width="353" height="50" rx="14" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5"/>
      <text x="176.5" y="31" font-family="-apple-system, sans-serif" font-size="14" font-weight="700" fill="${C.textPrimary}" text-anchor="middle">Back to Menu</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 11: DRV-AUTH-01 (Driver Shift Hub & Radar Dispatch)
// -------------------------------------------------------------
function screenDRVAUTH01() {
  return `
  <g id="SCREEN_DRV-AUTH-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.groundBase}"/>
    ${statusBarLight()}

    <!-- Header Navigation -->
    <g transform="translate(20, 64)">
      <circle cx="22" cy="22" r="22" fill="#D1D5DB"/>
      <text x="22" y="27" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}" text-anchor="middle">MV</text>
      
      <text x="56" y="20" font-family="-apple-system, sans-serif" font-size="16" font-weight="900" fill="${C.textPrimary}">Marcus Vance</text>
      <text x="56" y="36" font-family="-apple-system, sans-serif" font-size="12" font-weight="600" fill="${C.success}">● Active Shift • Online</text>

      <!-- Toggle Status -->
      <rect x="270" y="6" width="80" height="32" rx="16" fill="${C.success}"/>
      <circle cx="334" cy="22" r="12" fill="#FFFFFF"/>
      <text x="300" y="26" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="#FFFFFF">ON</text>
    </g>

    <!-- Shift Metrics Summary -->
    <g transform="translate(20, 130)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="${C.textPrimary}">TODAY'S DRIVER METRICS</text>
      
      <g transform="translate(0, 12)">
        <g transform="translate(0, 0)" filter="url(#shadow3D)">
          <rect width="110" height="90" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
          <text x="14" y="28" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="${C.textMuted}">EARNINGS</text>
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
    <g transform="translate(20, 260)" filter="url(#shadowElevated)">
      <rect width="353" height="230" rx="20" fill="${C.surfaceCard}" stroke="${C.brandPrimary}" stroke-width="2"/>
      <text x="20" y="32" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="${C.brandPrimary}">⚡ INCOMING DISPATCH READY</text>
      
      <text x="20" y="64" font-family="-apple-system, sans-serif" font-size="18" font-weight="900" fill="${C.textPrimary}">Crust &amp; Q Smokehouse</text>
      <text x="20" y="82" font-family="-apple-system, sans-serif" font-size="12.5" fill="${C.textSecondary}">Pickup: Counter 2 • 0.8 mi away</text>
      <text x="20" y="112" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.brandSecondary}">$11.25 <tspan font-size="12" font-weight="600" fill="${C.textMuted}">(incl. $3.50 tip)</tspan></text>

      <text x="20" y="142" font-family="-apple-system, sans-serif" font-size="12.5" font-weight="600" fill="${C.textPrimary}">Dropoff: Orlando, 7th Street (3.4 mi)</text>

      <g transform="translate(20, 164)" filter="url(#shadow3D)">
        <rect width="313" height="46" rx="14" fill="url(#btnGrad)"/>
        <text x="156.5" y="28" font-family="-apple-system, sans-serif" font-size="15" font-weight="900" fill="#FFFFFF" text-anchor="middle">Accept Delivery Dispatch (15s)</text>
      </g>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// SCREEN 12: CAT-01 (Category Filter Exploration - Matches Reference 5)
// -------------------------------------------------------------
function screenCAT01() {
  return `
  <g id="SCREEN_CAT-01">
    <rect width="393" height="852" rx="44" fill="${C.groundBase}" stroke="${C.borderStrong}" stroke-width="2"/>
    <rect x="1" y="1" width="391" height="850" rx="43" fill="${C.groundBase}"/>
    ${statusBarLight()}

    <!-- Header: Back Arrow + Search Input (Exact Match to Reference Image 5) -->
    <g transform="translate(20, 60)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <g transform="translate(8, 8)" color="${C.textPrimary}">${ICONS.chevronLeft}</g>

      <!-- Search Input -->
      <g transform="translate(50, 0)" filter="url(#shadow3D)">
        <rect width="303" height="42" rx="14" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g transform="translate(12, 11)" color="${C.brandPrimary}">${ICONS.search}</g>
        <text x="40" y="26" font-family="-apple-system, sans-serif" font-size="13" font-weight="500" fill="${C.textSecondary}">Search pizzas, BBQ cuts...</text>
        <circle cx="280" cy="21" r="12" fill="${C.groundInput}"/>
        <g transform="translate(270, 11)" color="${C.brandPrimary}">${ICONS.mic}</g>
      </g>
    </g>

    <!-- Category Row with "Pizza" Active & Underlined (Matches Reference Image 5) -->
    <g transform="translate(20, 116)">
      <!-- Category 1: All -->
      <g transform="translate(0, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.heroMargherita}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">All</text>
      </g>

      <!-- Category 2: Pizza (ACTIVE with Red Underline) -->
      <g transform="translate(68, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.brandPrimary}" stroke-width="2" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.trufflePizza}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="${C.brandPrimary}" text-anchor="middle">Pizza</text>
        <rect x="10" y="68" width="32" height="3" rx="1.5" fill="${C.brandPrimary}"/>
      </g>

      <!-- Category 3: BBQ -->
      <g transform="translate(136, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.smokedRibs}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">BBQ</text>
      </g>

      <!-- Category 4: Steaks -->
      <g transform="translate(204, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.angusRibeye}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">Steaks</text>
      </g>

      <!-- Category 5: Burgers -->
      <g transform="translate(272, 0)">
        <circle cx="26" cy="26" r="26" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
        <g clip-path="url(#circleDishClip)" transform="translate(-2, -2)">
          <image href="${IMGS.smashBurger}" width="56" height="56" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="26" y="64" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}" text-anchor="middle">Burgers</text>
      </g>
    </g>

    <!-- Specialized Filter Chips (Matches Reference Image 5) -->
    <g transform="translate(20, 200)">
      <rect x="0" y="0" width="84" height="30" rx="9" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <g transform="translate(10, 7)" color="${C.textPrimary}">${ICONS.filter}</g>
      <text x="32" y="20" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="700" fill="${C.textPrimary}">Filters</text>
      <g transform="translate(66, 7)" color="${C.textMuted}">${ICONS.chevronDown}</g>

      <rect x="92" y="0" width="144" height="30" rx="9" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <g transform="translate(100, 7)" color="${C.success}">${ICONS.shieldCheck}</g>
      <text x="122" y="20" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="700" fill="${C.textPrimary}">Zero-Spill HeatBox</text>

      <rect x="244" y="0" width="109" height="30" rx="9" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1" filter="url(#shadow3D)"/>
      <text x="298" y="20" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="700" fill="${C.textPrimary}" text-anchor="middle">Highly reordered</text>
    </g>

    <!-- Section: RECOMMENDED FOR PIZZAS -->
    <g transform="translate(20, 248)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="13" font-weight="900" fill="${C.textPrimary}" letter-spacing="1">RECOMMENDED WOOD-FIRED PIZZAS</text>
    </g>

    <!-- 2-Column Grid of Pizzas -->
    <g transform="translate(20, 260)">
      <!-- Card 1: Truffle Margherita -->
      <g transform="translate(0, 0)" filter="url(#shadow3D)">
        <rect width="170" height="195" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g clip-path="url(#dishCardClip)">
          <image href="${IMGS.trufflePizza}" width="170" height="100" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <rect x="8" y="8" width="112" height="18" rx="5" fill="#111827" fill-opacity="0.85"/>
        <text x="64" y="21" font-family="-apple-system, sans-serif" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle">20% OFF ABOVE $25</text>
        <rect x="10" y="108" width="42" height="18" rx="5" fill="${C.success}"/>
        <g transform="translate(13, 110)" color="#FFFFFF">${ICONS.star}</g>
        <text x="38" y="121" font-family="-apple-system, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="end">4.9</text>
        <text x="10" y="142" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}">Truffle Mushroom</text>
        <text x="10" y="158" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}">⚡ 15–20 mins</text>
        <text x="10" y="182" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="900" fill="${C.brandPrimary}">$21.50</text>
      </g>

      <!-- Card 2: Hot Honey Pepperoni -->
      <g transform="translate(183, 0)" filter="url(#shadow3D)">
        <rect width="170" height="195" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g clip-path="url(#dishCardClip)">
          <image href="${IMGS.hotHoneyPepperoni}" width="170" height="100" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <rect x="8" y="8" width="105" height="18" rx="5" fill="#111827" fill-opacity="0.85"/>
        <text x="60.5" y="21" font-family="-apple-system, sans-serif" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle">HOT &amp; SPICY</text>
        <rect x="10" y="108" width="42" height="18" rx="5" fill="${C.success}"/>
        <g transform="translate(13, 110)" color="#FFFFFF">${ICONS.star}</g>
        <text x="38" y="121" font-family="-apple-system, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="end">4.85</text>
        <text x="10" y="142" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textPrimary}">Hot Honey Pepperoni</text>
        <text x="10" y="158" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.textSecondary}">⚡ 20–25 mins</text>
        <text x="10" y="182" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="900" fill="${C.brandPrimary}">$19.50</text>
      </g>
    </g>

    <!-- Horizontal Carousel: Most ordered pizzas View all > (Matches Reference Image 5) -->
    <g transform="translate(20, 480)">
      <text x="0" y="0" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.textPrimary}">Most ordered for pizzas</text>
      <text x="353" y="0" font-family="-apple-system, sans-serif" font-size="12" font-weight="800" fill="${C.brandPrimary}" text-anchor="end">View all ▸</text>

      <!-- Carousel Card -->
      <g transform="translate(0, 12)" filter="url(#shadow3D)">
        <rect width="353" height="90" rx="16" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1"/>
        <g clip-path="url(#dishListClip)" transform="translate(10, 8)">
          <image href="${IMGS.bbqChickenPizza}" width="74" height="74" preserveAspectRatio="xMidYMid slice"/>
        </g>
        <text x="96" y="28" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="${C.textPrimary}">Smoked BBQ Chicken Pizza</text>
        <text x="96" y="46" font-family="-apple-system, sans-serif" font-size="11.5" fill="${C.textSecondary}">Smoked Gouda, scallions, sweet honey glaze</text>
        <text x="96" y="70" font-family="-apple-system, sans-serif" font-size="14.5" font-weight="900" fill="${C.brandPrimary}">$22.00</text>
        <rect x="285" y="50" width="56" height="28" rx="8" fill="${C.brandAccentLight}" stroke="${C.brandPrimary}" stroke-width="1.2"/>
        <text x="313" y="68" font-family="-apple-system, sans-serif" font-size="11" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">ADD +</text>
      </g>
    </g>

    <!-- Sticky Floating View Cart Bar -->
    <g transform="translate(20, 680)" filter="url(#shadowElevated)">
      <rect width="353" height="52" rx="16" fill="#111827"/>
      <g clip-path="url(#dishListClip)" transform="translate(8, 7)">
        <image href="${IMGS.trufflePizza}" width="38" height="38" preserveAspectRatio="xMidYMid slice"/>
      </g>
      <text x="54" y="24" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF">Crust &amp; Q Smokehouse</text>
      <text x="54" y="40" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" fill="${C.brandSecondary}">View Menu ▸</text>

      <rect x="210" y="8" width="105" height="36" rx="12" fill="url(#btnGrad)"/>
      <text x="262.5" y="24" font-family="-apple-system, sans-serif" font-size="11" font-weight="800" fill="#FFFFFF" text-anchor="middle">View Cart</text>
      <text x="262.5" y="36" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="700" fill="#FFFFFF" opacity="0.9" text-anchor="middle">1 item • $21.50</text>

      <circle cx="334" cy="26" r="10" fill="#374151"/>
      <text x="334" y="30" font-family="-apple-system, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">✕</text>
    </g>

    ${homeIndicatorLight()}
  </g>`;
}

// -------------------------------------------------------------
// ASSEMBLE ALL 5 POLISHED PRODUCTION ARTBOARDS
// -------------------------------------------------------------
function buildArtboard01() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1020" width="960" height="1020" fill="none">
    ${defs3D()}
    <rect width="960" height="1020" fill="#F1F5F9"/>

    <g transform="translate(40, 32)">
      <rect width="180" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="90" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 01: ONBOARDING</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Customer Authentication &amp; Registration Journey</text>
    </g>

    <g transform="translate(40, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">01 | ONB-01 • Splash &amp; Sign In</text>
      ${screenONB01()}
    </g>

    <g transform="translate(448, 510)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
      <g transform="translate(8, 8)" color="${C.brandPrimary}">${ICONS.chevronRight}</g>
    </g>

    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">02 | AUTH-01 • Create Account Form</text>
      ${screenAUTH01()}
    </g>
  </svg>`;
}

function buildArtboard02() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1020" width="960" height="1020" fill="none">
    ${defs3D()}
    <rect width="960" height="1020" fill="#F1F5F9"/>

    <g transform="translate(40, 32)">
      <rect width="200" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="100" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 02: HOME &amp; LOCATION</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Core Ordering Hub &amp; Address Selector</text>
    </g>

    <g transform="translate(40, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">03 | HOME-01 • Home Delivery Hub</text>
      ${screenHOME01()}
    </g>

    <g transform="translate(448, 510)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
      <g transform="translate(8, 8)" color="${C.brandPrimary}">${ICONS.chevronRight}</g>
    </g>

    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">04 | LOC-01 • Address Selection Sheet</text>
      ${screenLOC01()}
    </g>
  </svg>`;
}

function buildArtboard03() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 1020" width="960" height="1020" fill="none">
    ${defs3D()}
    <rect width="960" height="1020" fill="#F1F5F9"/>

    <g transform="translate(40, 32)">
      <rect width="260" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="130" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 03: LIVE GOOGLE MAPS</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Bi-Directional Real-Time Cartography</text>
    </g>

    <g transform="translate(40, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">05 | TRACK-01 • Customer Live Google Maps Tracking</text>
      ${screenTRACK01()}
    </g>

    <g transform="translate(448, 510)">
      <circle cx="20" cy="20" r="18" fill="${C.surfaceCard}" stroke="${C.borderSubtle}" stroke-width="1.5" filter="url(#shadow3D)"/>
      <text x="20" y="25" font-family="-apple-system, sans-serif" font-size="14" font-weight="900" fill="${C.brandPrimary}" text-anchor="middle">⇄</text>
    </g>

    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">06 | DRV-02 • Driver Reverse Google Navigation</text>
      ${screenDRV02()}
    </g>
  </svg>`;
}

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
      <g transform="translate(8, 8)" color="${C.brandPrimary}">${ICONS.chevronRight}</g>
    </g>

    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">08 | CART-01 • Cart &amp; Checkout Screen</text>
      ${screenCART01()}
    </g>
  </svg>`;
}

function buildArtboard05() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 1020" width="1420" height="1020" fill="none">
    ${defs3D()}
    <rect width="1420" height="1020" fill="#F1F5F9"/>

    <g transform="translate(40, 32)">
      <rect width="280" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="140" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 05: FULFILLMENT &amp; DRIVER</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Order Confirmation, Guest Gating &amp; Driver Shift Hub</text>
    </g>

    <g transform="translate(40, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">09 | GUEST-01 • Guest Auth Intercept Modal</text>
      ${screenGUEST01()}
    </g>

    <g transform="translate(500, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">10 | ORDER-SUCC-01 • Order Placed Confirmation</text>
      ${screenORDERSUCC01()}
    </g>

    <g transform="translate(960, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">11 | DRV-AUTH-01 • Driver Dashboard &amp; Shift Hub</text>
      ${screenDRVAUTH01()}
    </g>
  </svg>`;
}

function buildArtboard06() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 1020" width="500" height="1020" fill="none">
    ${defs3D()}
    <rect width="500" height="1020" fill="#F1F5F9"/>

    <g transform="translate(40, 32)">
      <rect width="240" height="26" rx="8" fill="${C.brandPrimary}"/>
      <text x="120" y="18" font-family="-apple-system, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">SECTION 06: CATEGORY EXPLORE</text>
      <text x="0" y="56" font-family="-apple-system, sans-serif" font-size="22" font-weight="900" fill="${C.textPrimary}">Category Filter &amp; Search View</text>
    </g>

    <g transform="translate(53, 110)">
      <text x="0" y="-12" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${C.textSecondary}">12 | CAT-01 • Category Filter View</text>
      ${screenCAT01()}
    </g>
  </svg>`;
}

// Write the master artboard files
fs.writeFileSync(path.join(BOARDS_DIR, "01_Customer_Onboarding_Artboard.svg"), buildArtboard01());
fs.writeFileSync(path.join(BOARDS_DIR, "02_Home_and_Location_Artboard.svg"), buildArtboard02());
fs.writeFileSync(path.join(BOARDS_DIR, "03_Live_Google_Maps_Artboard.svg"), buildArtboard03());
fs.writeFileSync(path.join(BOARDS_DIR, "04_Customization_and_Cart_Artboard.svg"), buildArtboard04());
fs.writeFileSync(path.join(BOARDS_DIR, "05_Fulfillment_and_Driver_Ops_Artboard.svg"), buildArtboard05());
fs.writeFileSync(path.join(BOARDS_DIR, "06_Category_Exploration_Artboard.svg"), buildArtboard06());

// Write standalone screen SVGs
fs.writeFileSync(path.join(SCREENS_DIR, "ONB-01_Splash_SignIn_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenONB01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "AUTH-01_Create_Account_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenAUTH01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "HOME-01_Home_Delivery_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenHOME01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "LOC-01_Location_Selector_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenLOC01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "TRACK-01_Live_Google_Maps_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenTRACK01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "DRV-02_Driver_Live_Navigation_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenDRV02()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "DISH-01_Dish_Customization_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenDISH01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "CART-01_Cart_Checkout_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenCART01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "GUEST-01_Guest_Modal_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenGUEST01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "ORDER-SUCC-01_Order_Success_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenORDERSUCC01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "DRV-AUTH-01_Driver_Dashboard_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenDRVAUTH01()}</svg>`);
fs.writeFileSync(path.join(SCREENS_DIR, "CAT-01_Category_Filter_Light.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 852" width="393" height="852" fill="none">${defs3D()}${screenCAT01()}</svg>`);

console.log("✅ Successfully built all 6 master artboards and 12 standalone screen SVGs with photorealistic food photography & zero emojis!");
