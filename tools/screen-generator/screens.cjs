const { TOKENS, getBase64Image, renderStatusBar, renderHomeIndicator, renderBottomDock, renderStickyCartBar } = require('./components.cjs');
const { renderIcon, renderStar, renderLightning } = require('./icons.cjs');

// --- 1. ONBOARDING & AUTHENTICATION SCREENS ---

function renderScreen_ONB01() {
  const margheritaBase64 = getBase64Image('hero_margherita.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    
    <!-- Hero Image Area (Top 42%) -->
    <g transform="translate(0, 0)">
      <defs>
        <clipPath id="onb01ImgClip">
          <rect x="0" y="0" width="390" height="360" rx="0"/>
        </clipPath>
        <linearGradient id="onb01Fade" x1="0" y1="0.6" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFF8F0" stop-opacity="0"/>
          <stop offset="100%" stop-color="#FFF8F0" stop-opacity="1"/>
        </linearGradient>
      </defs>
      ${margheritaBase64 ? `<image href="${margheritaBase64}" x="-20" y="0" width="430" height="360" preserveAspectRatio="xMidYMid slice" clip-path="url(#onb01ImgClip)"/>` : ''}
      <rect x="0" y="160" width="390" height="200" fill="url(#onb01Fade)"/>
    </g>

    ${renderStatusBar(false)}

    <!-- Brand Emblem & Tagline -->
    <g transform="translate(24, 340)">
      <!-- Restaurant Emblem -->
      <g transform="translate(0, 0)">
        <circle cx="28" cy="28" r="28" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5" filter="url(#softShadow)"/>
        <!-- Crossed Pizza Peel & Tongs + Flame Logo -->
        <path d="M20 36L34 20" stroke="${TOKENS.primary}" stroke-width="3" stroke-linecap="round"/>
        <path d="M36 36L22 20" stroke="${TOKENS.accent}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="28" cy="22" r="5" fill="${TOKENS.primary}"/>
      </g>
      <text x="68" y="26" font-family="Manrope, sans-serif" font-size="24" font-weight="800" fill="${TOKENS.textPrimary}">Crust &amp; Q</text>
      <text x="68" y="44" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textSecondary}">WOOD-FIRED CRUSTS • CRAFT SMOKED BBQ</text>
    </g>

    <!-- Sign In Card Surface -->
    <g transform="translate(24, 420)">
      <text x="0" y="24" font-family="Inter, sans-serif" font-size="20" font-weight="700" fill="${TOKENS.textPrimary}">Welcome Back</text>
      <text x="0" y="44" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}">Sign in to access your orders &amp; live tracking</text>

      <!-- Email Field -->
      <g transform="translate(0, 64)">
        <rect x="0" y="0" width="342" height="52" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        ${renderIcon('mail', { x: 16, y: 16, size: 20, color: TOKENS.textMuted })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="${TOKENS.textPrimary}">alex.turner@example.com</text>
      </g>

      <!-- Password Field -->
      <g transform="translate(0, 126)">
        <rect x="0" y="0" width="342" height="52" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        ${renderIcon('lock', { x: 16, y: 16, size: 20, color: TOKENS.textMuted })}
        <text x="48" y="34" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="${TOKENS.textPrimary}">••••••••••••</text>
        ${renderIcon('eye', { x: 306, y: 16, size: 20, color: TOKENS.textMuted })}
      </g>

      <!-- Remember Me & Forgot Password -->
      <g transform="translate(0, 192)">
        <rect x="0" y="0" width="18" height="18" rx="5" fill="${TOKENS.primary}"/>
        <polyline points="4,9 7,12 14,5" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="26" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}">Remember me</text>
        <text x="342" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.primary}" text-anchor="end">Forgot password?</text>
      </g>

      <!-- Sign In Primary Button -->
      <g transform="translate(0, 226)">
        <rect x="0" y="0" width="342" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
        <text x="171" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Sign In</text>
      </g>

      <!-- Don't have an account? Sign Up -->
      <g transform="translate(0, 300)">
        <text x="171" y="0" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}" text-anchor="middle">
          Don't have an account? <tspan fill="${TOKENS.primary}" font-weight="700">Sign Up</tspan>
        </text>
      </g>

      <!-- Continue as Guest User -->
      <g transform="translate(0, 326)">
        <rect x="0" y="0" width="342" height="46" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        <text x="171" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="middle">Continue as Guest</text>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

function renderScreen_AUTH01() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Bar -->
    <g transform="translate(24, 60)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="56" y="26" font-family="Inter, sans-serif" font-size="18" font-weight="700" fill="${TOKENS.textPrimary}">Create Account</text>
    </g>

    <g transform="translate(24, 120)">
      <text x="0" y="20" font-family="Inter, sans-serif" font-size="22" font-weight="800" fill="${TOKENS.textPrimary}">Join Crust &amp; Q</text>
      <text x="0" y="42" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}">Earn Pitmaster rewards and unlock real-time tracking</text>

      <!-- 2-Column: First Name & Last Name -->
      <g transform="translate(0, 64)">
        <rect x="0" y="0" width="163" height="50" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        <text x="14" y="18" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="${TOKENS.textMuted}">FIRST NAME</text>
        <text x="14" y="36" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="${TOKENS.textPrimary}">Ritik</text>

        <rect x="179" y="0" width="163" height="50" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        <text x="193" y="18" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="${TOKENS.textMuted}">LAST NAME</text>
        <text x="193" y="36" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="${TOKENS.textPrimary}">Thakre</text>
      </g>

      <!-- Phone Number Field -->
      <g transform="translate(0, 126)">
        <rect x="0" y="0" width="342" height="50" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        <text x="14" y="18" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="${TOKENS.textMuted}">PHONE NUMBER</text>
        <text x="14" y="36" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="${TOKENS.textPrimary}">+1 (407) 555-0192</text>
      </g>

      <!-- Email Field -->
      <g transform="translate(0, 188)">
        <rect x="0" y="0" width="342" height="50" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        <text x="14" y="18" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="${TOKENS.textMuted}">EMAIL ADDRESS</text>
        <text x="14" y="36" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="${TOKENS.textPrimary}">ritik@crustq.com</text>
      </g>

      <!-- Password Field -->
      <g transform="translate(0, 250)">
        <rect x="0" y="0" width="342" height="50" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        <text x="14" y="18" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="${TOKENS.textMuted}">PASSWORD</text>
        <text x="14" y="36" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="${TOKENS.textPrimary}">••••••••••••</text>
      </g>

      <!-- Confirm Password Field -->
      <g transform="translate(0, 312)">
        <rect x="0" y="0" width="342" height="50" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        <text x="14" y="18" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="${TOKENS.textMuted}">CONFIRM PASSWORD</text>
        <text x="14" y="36" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="${TOKENS.textPrimary}">••••••••••••</text>
      </g>

      <!-- Sign Up Button -->
      <g transform="translate(0, 384)">
        <rect x="0" y="0" width="342" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
        <text x="171" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Sign Up</text>
      </g>

      <!-- Already Have an Account Link -->
      <g transform="translate(0, 460)">
        <text x="171" y="0" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}" text-anchor="middle">
          Already have an account? <tspan fill="${TOKENS.primary}" font-weight="700">Sign In</tspan>
        </text>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

function renderScreen_GUEST01() {
  const pepperoniBase64 = getBase64Image('hot_honey_pepperoni.jpg');

  return `
    <rect width="390" height="844" fill="#000000" opacity="0.45"/>
    ${renderStatusBar(true)}

    <!-- Floating Close Pill -->
    <g transform="translate(177, 280)">
      <circle cx="18" cy="18" r="18" fill="#1E1D1B"/>
      ${renderIcon('x', { x: 9, y: 9, size: 18, color: '#FFFFFF', strokeWidth: 2.2 })}
    </g>

    <!-- Bottom Intercept Sheet -->
    <g transform="translate(0, 330)">
      <rect x="0" y="0" width="390" height="514" rx="28" fill="#FFFFFF"/>
      <rect x="175" y="12" width="40" height="4" rx="2" fill="#E5E0D8"/>

      <!-- Graphic Pill with Appetizing Dish -->
      <g transform="translate(24, 36)">
        <defs>
          <clipPath id="guestPizzaClip">
            <rect x="0" y="0" width="342" height="130" rx="18"/>
          </clipPath>
        </defs>
        ${pepperoniBase64 ? `<image href="${pepperoniBase64}" x="0" y="-30" width="342" height="190" preserveAspectRatio="xMidYMid slice" clip-path="url(#guestPizzaClip)"/>` : ''}
        <rect x="0" y="0" width="342" height="130" rx="18" fill="#000000" opacity="0.25"/>
        <g transform="translate(16, 88)">
          <rect x="0" y="0" width="130" height="24" rx="6" fill="${TOKENS.primary}"/>
          <text x="65" y="16" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">CHECKOUT STEP</text>
        </g>
      </g>

      <!-- Headline & Pitch -->
      <g transform="translate(24, 186)">
        <text x="0" y="24" font-family="Manrope, sans-serif" font-size="20" font-weight="800" fill="${TOKENS.textPrimary}">Track Your Feast in Real-Time</text>
        <text x="0" y="48" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}">
          Please sign in or create an account to view live GPS driver route on Google Maps and save your delivery address.
        </text>

        <!-- Perks List -->
        <g transform="translate(0, 72)">
          <circle cx="10" cy="10" r="10" fill="#ECFDF5"/>
          ${renderIcon('check', { x: 3, y: 3, size: 14, color: TOKENS.ratingGreen, strokeWidth: 2.5 })}
          <text x="28" y="15" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}">Live turn-by-turn driver tracking on daylight map</text>
        </g>

        <g transform="translate(0, 102)">
          <circle cx="10" cy="10" r="10" fill="#ECFDF5"/>
          ${renderIcon('check', { x: 3, y: 3, size: 14, color: TOKENS.ratingGreen, strokeWidth: 2.5 })}
          <text x="28" y="15" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}">Earn 150 Pitmaster Points on this order</text>
        </g>

        <!-- Primary Auth Button -->
        <g transform="translate(0, 144)">
          <rect x="0" y="0" width="342" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
          <text x="171" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Sign In or Create Account</text>
        </g>

        <!-- Guest Checkout Option -->
        <g transform="translate(0, 208)">
          <rect x="0" y="0" width="342" height="48" rx="14" fill="${TOKENS.ground}" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
          <text x="171" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="middle">Continue as Guest (SMS Tracking Only)</text>
        </g>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 2. HOME HUB & LOCATION SCREENS ---

function renderScreen_HOME01() {
  const promoBase64 = getBase64Image('hero_promo_20.jpg');
  const pepperoniBase64 = getBase64Image('hot_honey_pepperoni.jpg');
  const brisketBase64 = getBase64Image('texas_brisket.jpg');
  const burgerBase64 = getBase64Image('smash_burger.jpg');
  const ribsBase64 = getBase64Image('smoked_ribs.jpg');
  const ribeyeBase64 = getBase64Image('angus_ribeye.jpg');
  const truffleBase64 = getBase64Image('truffle_pizza.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- 1. HEADER (Matches User Screenshot 2) -->
    <g transform="translate(16, 52)">
      <!-- Left: Location Pin + Heading + Subtitle Address -->
      <g transform="translate(0, 2)">
        <g transform="translate(0, 0)">
          ${renderIcon('map-pin', { x: 0, y: 0, size: 20, color: TOKENS.primary, strokeWidth: 2.2 })}
          <text x="26" y="16" font-family="Inter, sans-serif" font-size="17" font-weight="800" fill="${TOKENS.textPrimary}">Home</text>
          ${renderIcon('chevron-down', { x: 74, y: 4, size: 14, color: TOKENS.textPrimary, strokeWidth: 2.2 })}
        </g>
        <text x="26" y="32" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Orlando Seven Street, FL 32801...</text>
      </g>

      <!-- Right: Host Mode Pill + Wallet Icon + Profile Circle ("R") -->
      <g transform="translate(230, 0)">
        <!-- Host Mode Pill -->
        <rect x="0" y="2" width="76" height="30" rx="15" fill="#2E2452"/>
        ${renderIcon('shield-check', { x: 8, y: 9, size: 15, color: '#C4B5FD', strokeWidth: 2 })}
        <text x="27" y="21" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF">HOST MODE</text>

        <!-- Wallet Icon in Circle -->
        <circle cx="94" cy="17" r="15" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderIcon('wallet', { x: 86, y: 9, size: 16, color: TOKENS.textPrimary, strokeWidth: 1.8 })}

        <!-- Profile Circle ("R") -->
        <circle cx="128" cy="17" r="16" fill="#F4E9D9" stroke="${TOKENS.primary}" stroke-width="1.5"/>
        <text x="128" y="22" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.primary}" text-anchor="middle">R</text>
      </g>
    </g>

    <!-- 2. SEARCH BAR + VEG MODE (Matches Screenshot 2) -->
    <g transform="translate(16, 98)">
      <rect x="0" y="0" width="280" height="44" rx="22" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5" filter="url(#softShadow)"/>
      ${renderIcon('search', { x: 14, y: 12, size: 20, color: TOKENS.textSecondary, strokeWidth: 2 })}
      <text x="44" y="27" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textMuted}">Search "wood-fired pizza, ribs..."</text>
      
      <!-- Voice Mic Circle -->
      <circle cx="310" cy="22" r="18" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('mic', { x: 301, y: 13, size: 18, color: TOKENS.primary, strokeWidth: 2 })}

      <!-- VEG / CRAFT MODE Toggle -->
      <g transform="translate(338, 4)">
        <text x="12" y="10" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="${TOKENS.textSecondary}" text-anchor="middle">VEG</text>
        <rect x="0" y="14" width="26" height="15" rx="7.5" fill="#E5E0D8"/>
        <circle cx="7.5" cy="21.5" r="5.5" fill="#FFFFFF" filter="url(#softShadow)"/>
      </g>
    </g>

    <!-- 3. HERO CAROUSEL BANNER (5 Dots, Order Now CTA) -->
    <g transform="translate(16, 150)">
      <defs>
        <clipPath id="homeHeroClip">
          <rect x="0" y="0" width="358" height="126" rx="18"/>
        </clipPath>
        <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#991B1B" stop-opacity="0.95"/>
          <stop offset="60%" stop-color="#D93B18" stop-opacity="0.80"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.40"/>
        </linearGradient>
      </defs>
      ${promoBase64 ? `<image href="${promoBase64}" x="0" y="-35" width="358" height="180" preserveAspectRatio="xMidYMid slice" clip-path="url(#homeHeroClip)"/>` : ''}
      <rect x="0" y="0" width="358" height="126" rx="18" fill="url(#heroGradient)"/>
      
      <!-- Headline & Discount Badge -->
      <g transform="translate(18, 20)">
        <rect x="0" y="0" width="90" height="20" rx="5" fill="#FEF08A"/>
        <text x="45" y="14" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#854D0E" text-anchor="middle">CRAFT SPECIAL</text>
        <text x="0" y="44" font-family="Manrope, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF">ITEMS AT 50% OFF</text>
        <text x="0" y="62" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#FEE2E2">Authentic Wood-Fired &amp; Smoked BBQ</text>
        
        <!-- CTA Button -->
        <g transform="translate(0, 72)">
          <rect x="0" y="0" width="100" height="28" rx="14" fill="#FFFFFF"/>
          <text x="44" y="18" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.primary}">Order now</text>
          ${renderIcon('chevron-right', { x: 74, y: 8, size: 12, color: TOKENS.primary, strokeWidth: 2.5 })}
        </g>
      </g>

      <!-- 5 Dots Indicator (Center Active) -->
      <g transform="translate(149, 134)">
        <circle cx="10" cy="0" r="2.5" fill="${TOKENS.textMuted}"/>
        <rect x="18" y="-2.5" width="16" height="5" rx="2.5" fill="${TOKENS.primary}"/>
        <circle cx="42" cy="0" r="2.5" fill="${TOKENS.textMuted}"/>
        <circle cx="50" cy="0" r="2.5" fill="${TOKENS.textMuted}"/>
        <circle cx="58" cy="0" r="2.5" fill="${TOKENS.textMuted}"/>
      </g>
    </g>

    <!-- 4. CIRCULAR CATEGORIES ROW (Directly Matching User Screenshots!) -->
    <g transform="translate(16, 296)">
      <!-- Left: Meals Under $15 Promo Card -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="62" height="68" rx="12" fill="#FEE2E2" stroke="#FECACA" stroke-width="1.2"/>
        <text x="31" y="16" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="${TOKENS.primary}" text-anchor="middle">UNDER</text>
        <text x="31" y="36" font-family="Inter, sans-serif" font-size="16" font-weight="900" fill="${TOKENS.primary}" text-anchor="middle">$15</text>
        <text x="31" y="54" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="${TOKENS.textSecondary}" text-anchor="middle">DEALS &gt;</text>
      </g>

      <!-- Category 1: "All" (Active with Red Underline!) -->
      <g transform="translate(68, 0)">
        <circle cx="26" cy="26" r="24" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="1.8" filter="url(#softShadow)"/>
        ${burgerBase64 ? `
          <defs><clipPath id="catClip1"><circle cx="26" cy="26" r="22"/></clipPath></defs>
          <image href="${burgerBase64}" x="4" y="4" width="44" height="44" preserveAspectRatio="xMidYMid slice" clip-path="url(#catClip1)"/>
        ` : ''}
        <text x="26" y="60" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.primary}" text-anchor="middle">All</text>
        <!-- Active Red Indicator Bar -->
        <rect x="14" y="66" width="24" height="2.5" rx="1.25" fill="${TOKENS.primary}"/>
      </g>

      <!-- Category 2: "Steak" -->
      <g transform="translate(128, 0)">
        <circle cx="26" cy="26" r="24" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${ribeyeBase64 ? `
          <defs><clipPath id="catClip2"><circle cx="26" cy="26" r="22"/></clipPath></defs>
          <image href="${ribeyeBase64}" x="4" y="4" width="44" height="44" preserveAspectRatio="xMidYMid slice" clip-path="url(#catClip2)"/>
        ` : ''}
        <text x="26" y="60" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">Steak</text>
      </g>

      <!-- Category 3: "Pizza" -->
      <g transform="translate(188, 0)">
        <circle cx="26" cy="26" r="24" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${pepperoniBase64 ? `
          <defs><clipPath id="catClip3"><circle cx="26" cy="26" r="22"/></clipPath></defs>
          <image href="${pepperoniBase64}" x="4" y="4" width="44" height="44" preserveAspectRatio="xMidYMid slice" clip-path="url(#catClip3)"/>
        ` : ''}
        <text x="26" y="60" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">Pizza</text>
      </g>

      <!-- Category 4: "Burger" -->
      <g transform="translate(248, 0)">
        <circle cx="26" cy="26" r="24" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${burgerBase64 ? `
          <defs><clipPath id="catClip4"><circle cx="26" cy="26" r="22"/></clipPath></defs>
          <image href="${burgerBase64}" x="4" y="4" width="44" height="44" preserveAspectRatio="xMidYMid slice" clip-path="url(#catClip4)"/>
        ` : ''}
        <text x="26" y="60" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">Burger</text>
      </g>

      <!-- Category 5: "BBQ Ribs" -->
      <g transform="translate(308, 0)">
        <circle cx="26" cy="26" r="24" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${ribsBase64 ? `
          <defs><clipPath id="catClip5"><circle cx="26" cy="26" r="22"/></clipPath></defs>
          <image href="${ribsBase64}" x="4" y="4" width="44" height="44" preserveAspectRatio="xMidYMid slice" clip-path="url(#catClip5)"/>
        ` : ''}
        <text x="26" y="60" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">Ribs</text>
      </g>
    </g>

    <!-- 5. HORIZONTAL FILTER CHIPS (Matches Screenshots) -->
    <g transform="translate(16, 376)">
      <!-- Filter Chip 1 -->
      <rect x="0" y="0" width="76" height="30" rx="15" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('sliders-horizontal', { x: 8, y: 7, size: 14, color: TOKENS.textPrimary, strokeWidth: 2 })}
      <text x="26" y="19" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textPrimary}">Filters</text>
      ${renderIcon('chevron-down', { x: 58, y: 9, size: 12, color: TOKENS.textPrimary, strokeWidth: 2 })}

      <!-- Filter Chip 2 (Near & Fast) -->
      <g transform="translate(82, 0)">
        <rect x="0" y="0" width="102" height="30" rx="15" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderLightning({ x: 8, y: 7, size: 14, color: '#16A34A', fill: '#16A34A' })}
        <text x="26" y="19" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textPrimary}">Near &amp; Fast</text>
      </g>

      <!-- Filter Chip 3 (No packaging charge) -->
      <g transform="translate(190, 0)">
        <rect x="0" y="0" width="140" height="30" rx="15" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="14" y="19" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textPrimary}">No packaging charge</text>
      </g>

      <!-- Top Right: "See All ▸" Menu Link (User requested) -->
      <g transform="translate(340, 6)">
        ${renderIcon('chevron-right', { x: 0, y: 0, size: 18, color: TOKENS.primary, strokeWidth: 2.5 })}
      </g>
    </g>

    <!-- 6. RECOMMENDED FOR YOU (2 Rows of Food Cards!) -->
    <g transform="translate(16, 418)">
      <text x="0" y="14" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="${TOKENS.textPrimary}" letter-spacing="0.5">RECOMMENDED FOR YOU</text>
      
      <!-- Row 1: 3 Food Cards -->
      <!-- Card 1: Truffle Pizza -->
      <g transform="translate(0, 24)">
        <rect x="0" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="recClip1"><rect x="0" y="0" width="112" height="66" rx="14"/></clipPath></defs>
        ${truffleBase64 ? `<image href="${truffleBase64}" x="0" y="0" width="112" height="66" preserveAspectRatio="xMidYMid slice" clip-path="url(#recClip1)"/>` : ''}
        <!-- Discount Tag -->
        <rect x="4" y="4" width="64" height="16" rx="4" fill="#1C1B19" opacity="0.90"/>
        <text x="36" y="15" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">50% OFF</text>
        <!-- Rating Pill -->
        <rect x="6" y="48" width="38" height="16" rx="4" fill="#15803D"/>
        ${renderStar({ x: 9, y: 50, size: 11, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="24" y="60" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF">4.8</text>
        <!-- Title & Time -->
        <text x="6" y="84" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.textPrimary}">Truffle Pizza</text>
        <g transform="translate(6, 94)">
          ${renderLightning({ x: 0, y: 0, size: 11, color: '#16A34A', fill: '#16A34A' })}
          <text x="14" y="10" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}">15-20 min</text>
        </g>
      </g>

      <!-- Card 2: Smoked Ribs -->
      <g transform="translate(122, 24)">
        <rect x="0" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="recClip2"><rect x="0" y="0" width="112" height="66" rx="14"/></clipPath></defs>
        ${ribsBase64 ? `<image href="${ribsBase64}" x="0" y="0" width="112" height="66" preserveAspectRatio="xMidYMid slice" clip-path="url(#recClip2)"/>` : ''}
        <rect x="4" y="4" width="74" height="16" rx="4" fill="#1C1B19" opacity="0.90"/>
        <text x="41" y="15" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">$5 OFF &gt;$25</text>
        <rect x="6" y="48" width="38" height="16" rx="4" fill="#15803D"/>
        ${renderStar({ x: 9, y: 50, size: 11, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="24" y="60" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF">4.9</text>
        <text x="6" y="84" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.textPrimary}">Smoked Ribs</text>
        <g transform="translate(6, 94)">
          ${renderLightning({ x: 0, y: 0, size: 11, color: '#16A34A', fill: '#16A34A' })}
          <text x="14" y="10" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}">20-25 min</text>
        </g>
      </g>

      <!-- Card 3: Texas Brisket -->
      <g transform="translate(244, 24)">
        <rect x="0" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="recClip3"><rect x="0" y="0" width="112" height="66" rx="14"/></clipPath></defs>
        ${brisketBase64 ? `<image href="${brisketBase64}" x="0" y="0" width="112" height="66" preserveAspectRatio="xMidYMid slice" clip-path="url(#recClip3)"/>` : ''}
        <rect x="4" y="4" width="70" height="16" rx="4" fill="#1C1B19" opacity="0.90"/>
        <text x="39" y="15" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">PITMASTER</text>
        <rect x="6" y="48" width="38" height="16" rx="4" fill="#15803D"/>
        ${renderStar({ x: 9, y: 50, size: 11, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="24" y="60" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF">4.9</text>
        <text x="6" y="84" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.textPrimary}">Texas Brisket</text>
        <g transform="translate(6, 94)">
          ${renderLightning({ x: 0, y: 0, size: 11, color: '#16A34A', fill: '#16A34A' })}
          <text x="14" y="10" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}">25-30 min</text>
        </g>
      </g>

      <!-- Row 2: 3 Food Cards -->
      <!-- Card 4: Hot Honey Pepperoni -->
      <g transform="translate(0, 154)">
        <rect x="0" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="recClip4"><rect x="0" y="0" width="112" height="66" rx="14"/></clipPath></defs>
        ${pepperoniBase64 ? `<image href="${pepperoniBase64}" x="0" y="0" width="112" height="66" preserveAspectRatio="xMidYMid slice" clip-path="url(#recClip4)"/>` : ''}
        <rect x="4" y="4" width="70" height="16" rx="4" fill="#1C1B19" opacity="0.90"/>
        <text x="39" y="15" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">BESTSELLER</text>
        <rect x="6" y="48" width="38" height="16" rx="4" fill="#15803D"/>
        ${renderStar({ x: 9, y: 50, size: 11, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="24" y="60" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF">4.9</text>
        <text x="6" y="84" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.textPrimary}">Hot Pepperoni</text>
        <g transform="translate(6, 94)">
          ${renderLightning({ x: 0, y: 0, size: 11, color: '#16A34A', fill: '#16A34A' })}
          <text x="14" y="10" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}">15-20 min</text>
        </g>
      </g>

      <!-- Card 5: Smash Burger -->
      <g transform="translate(122, 154)">
        <rect x="0" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="recClip5"><rect x="0" y="0" width="112" height="66" rx="14"/></clipPath></defs>
        ${burgerBase64 ? `<image href="${burgerBase64}" x="0" y="0" width="112" height="66" preserveAspectRatio="xMidYMid slice" clip-path="url(#recClip5)"/>` : ''}
        <rect x="4" y="4" width="74" height="16" rx="4" fill="#1C1B19" opacity="0.90"/>
        <text x="41" y="15" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">BUY 1 GET 1</text>
        <rect x="6" y="48" width="38" height="16" rx="4" fill="#15803D"/>
        ${renderStar({ x: 9, y: 50, size: 11, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="24" y="60" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF">4.8</text>
        <text x="6" y="84" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.textPrimary}">Smash Burger</text>
        <g transform="translate(6, 94)">
          ${renderLightning({ x: 0, y: 0, size: 11, color: '#16A34A', fill: '#16A34A' })}
          <text x="14" y="10" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}">15-20 min</text>
        </g>
      </g>

      <!-- Card 6: Angus Ribeye -->
      <g transform="translate(244, 154)">
        <rect x="0" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="recClip6"><rect x="0" y="0" width="112" height="66" rx="14"/></clipPath></defs>
        ${ribeyeBase64 ? `<image href="${ribeyeBase64}" x="0" y="0" width="112" height="66" preserveAspectRatio="xMidYMid slice" clip-path="url(#recClip6)"/>` : ''}
        <rect x="4" y="4" width="66" height="16" rx="4" fill="#1C1B19" opacity="0.90"/>
        <text x="37" y="15" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">PREMIUM</text>
        <rect x="6" y="48" width="38" height="16" rx="4" fill="#15803D"/>
        ${renderStar({ x: 9, y: 50, size: 11, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="24" y="60" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF">4.9</text>
        <text x="6" y="84" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.textPrimary}">Angus Ribeye</text>
        <g transform="translate(6, 94)">
          ${renderLightning({ x: 0, y: 0, size: 11, color: '#16A34A', fill: '#16A34A' })}
          <text x="14" y="10" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}">25-30 min</text>
        </g>
      </g>
    </g>

    <!-- 7. STICKY CART BAR (Directly matching user screenshot 2) -->
    ${renderStickyCartBar({
      dishImage: 'truffle_pizza.jpg',
      restaurantName: 'Crust & Q — Downtown Oven',
      menuLinkText: 'View Menu',
      itemCount: '1 item'
    })}

    <!-- 8. FLOATING BOTTOM NAVIGATION DOCK (Delivery & History - Exact User Request!) -->
    ${renderBottomDock({ active: 'Delivery' })}

    ${renderHomeIndicator(false)}
  `;
}

function renderScreen_LOC01() {
  return `
    <rect width="390" height="844" fill="#000000" opacity="0.55"/>
    ${renderStatusBar(true)}

    <!-- Floating Close Pill Button (Matches User Screenshot 1) -->
    <g transform="translate(177, 460)">
      <circle cx="18" cy="18" r="18" fill="#1E1D1B"/>
      ${renderIcon('x', { x: 9, y: 9, size: 18, color: '#FFFFFF', strokeWidth: 2.2 })}
    </g>

    <!-- Bottom Sheet Container (Directly Matching Screenshot 1!) -->
    <g transform="translate(0, 508)">
      <rect x="0" y="0" width="390" height="336" rx="28" fill="#181716"/>
      <rect x="175" y="10" width="40" height="4" rx="2" fill="#3D3A36"/>

      <!-- Device Location Not Enabled Card (Directly Matching Screenshot 1!) -->
      <g transform="translate(16, 26)">
        <rect x="0" y="0" width="358" height="68" rx="16" fill="#242220"/>
        
        <!-- Red Location Pin with Slashed Line -->
        <g transform="translate(16, 16)">
          <circle cx="18" cy="18" r="18" fill="#382424"/>
          ${renderIcon('map-pin', { x: 9, y: 9, size: 18, color: '#E85B42', strokeWidth: 2 })}
          <line x1="6" y1="30" x2="30" y2="6" stroke="#E85B42" stroke-width="2.5" stroke-linecap="round"/>
        </g>

        <!-- Card Text -->
        <text x="62" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Device location not enabled</text>
        <text x="62" y="46" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#9E9A90">Enable your device location for a better delivery</text>

        <!-- Coral "Enable" Pill Button -->
        <g transform="translate(272, 16)">
          <rect x="0" y="0" width="72" height="36" rx="18" fill="#E85B42"/>
          <text x="36" y="22" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Enable</text>
        </g>
      </g>

      <!-- "Select a saved address" + "See all" (Directly Matching Screenshot 1!) -->
      <g transform="translate(16, 114)">
        <text x="0" y="15" font-family="Inter, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF">Select a saved address</text>
        <text x="358" y="15" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#E85B42" text-anchor="end">See all</text>
      </g>

      <!-- Saved Address 1: Home (Directly Matching Screenshot 1!) -->
      <g transform="translate(16, 144)">
        <rect x="0" y="0" width="358" height="52" rx="14" fill="#242220"/>
        ${renderIcon('home', { x: 16, y: 16, size: 20, color: '#9E9A90', strokeWidth: 1.8 })}
        <text x="48" y="24" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Home</text>
        <text x="48" y="40" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#9E9A90">Orlando Seven Street, Apt 4B, Orlando, FL 32801</text>
      </g>

      <!-- Saved Address 2: Office (Directly Matching Screenshot 1!) -->
      <g transform="translate(16, 204)">
        <rect x="0" y="0" width="358" height="52" rx="14" fill="#242220"/>
        ${renderIcon('briefcase', { x: 16, y: 16, size: 20, color: '#9E9A90', strokeWidth: 1.8 })}
        <text x="48" y="24" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Office</text>
        <text x="48" y="40" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="#9E9A90">400 S Orange Ave, Suite 1200, Downtown Orlando</text>
      </g>

      <!-- Search location manually (Directly Matching Screenshot 1!) -->
      <g transform="translate(16, 264)">
        <rect x="0" y="0" width="358" height="46" rx="14" fill="#242220"/>
        ${renderIcon('search', { x: 16, y: 14, size: 18, color: '#E85B42', strokeWidth: 2 })}
        <text x="48" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="#9E9A90">Search location manually</text>
      </g>
    </g>

    ${renderHomeIndicator(true)}
  `;
}

// Export definitions
module.exports = {
  renderScreen_ONB01,
  renderScreen_AUTH01,
  renderScreen_GUEST01,
  renderScreen_HOME01,
  renderScreen_LOC01
};
