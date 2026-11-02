const { TOKENS, getBase64Image, renderStatusBar, renderHomeIndicator, renderBottomDock } = require('./components.cjs');
const { renderIcon, renderStar, renderLightning } = require('./icons.cjs');

// --- 1. AUTH-02: FORGOT & RESET PASSWORD ---
function renderScreen_AUTH02() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Header -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="56" y="26" font-family="Manrope, sans-serif" font-size="18" font-weight="800" fill="${TOKENS.textPrimary}">Reset Password</text>
    </g>

    <!-- Main Content -->
    <g transform="translate(24, 130)">
      <!-- Keyhole / Shield Icon -->
      <g transform="translate(0, 0)">
        <circle cx="32" cy="32" r="32" fill="#FEE2E2"/>
        ${renderIcon('key', { x: 18, y: 18, size: 28, color: TOKENS.primary, strokeWidth: 2.2 })}
      </g>

      <text x="0" y="96" font-family="Manrope, sans-serif" font-size="22" font-weight="800" fill="${TOKENS.textPrimary}">Forgot your password?</text>
      <text x="0" y="122" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}">
        Enter your registered email address and we'll send a 6-digit verification code to recover your account.
      </text>

      <!-- Email Field -->
      <g transform="translate(0, 160)">
        <text x="0" y="-8" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}">Registered Email</text>
        <rect x="0" y="0" width="342" height="52" rx="14" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="1.8"/>
        ${renderIcon('mail', { x: 16, y: 16, size: 20, color: TOKENS.primary })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="${TOKENS.textPrimary}">sarah.jenkins@example.com</text>
      </g>

      <!-- Send Reset Link CTA -->
      <g transform="translate(0, 236)">
        <rect x="0" y="0" width="342" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
        <text x="171" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Send Reset Code</text>
      </g>

      <!-- Back to Sign In Link -->
      <g transform="translate(0, 310)">
        <text x="171" y="16" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">
          Remember your password? <tspan fill="${TOKENS.primary}" font-weight="700">Sign In</tspan>
        </text>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 2. AUTH-01-ERROR: INLINE FIELD ERROR RECOVERY ---
function renderScreen_AUTH01_ERROR() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Bar -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="56" y="26" font-family="Manrope, sans-serif" font-size="18" font-weight="800" fill="${TOKENS.textPrimary}">Create Account</text>
    </g>

    <!-- Error Alert Banner at Top -->
    <g transform="translate(24, 116)">
      <rect x="0" y="0" width="342" height="48" rx="12" fill="#FEF2F2" stroke="#F87171" stroke-width="1.2"/>
      ${renderIcon('alert-circle', { x: 14, y: 14, size: 20, color: '#DC2626' })}
      <text x="44" y="29" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#B91C1C">Please fix highlighted errors to proceed</text>
    </g>

    <!-- Form Container -->
    <g transform="translate(24, 180)">
      <!-- Full Name (Valid) -->
      <g transform="translate(0, 0)">
        <text x="0" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}">Full Name</text>
        <rect x="0" y="22" width="342" height="52" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        ${renderIcon('user', { x: 16, y: 38, size: 20, color: TOKENS.textMuted })}
        <text x="48" y="54" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="${TOKENS.textPrimary}">Sarah Jenkins</text>
        ${renderIcon('check', { x: 306, y: 38, size: 20, color: '#16A34A', strokeWidth: 2.5 })}
      </g>

      <!-- Email Field (ERROR STATE) -->
      <g transform="translate(0, 92)">
        <text x="0" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#DC2626">Email Address *</text>
        <rect x="0" y="22" width="342" height="52" rx="14" fill="#FFF5F5" stroke="#DC2626" stroke-width="1.8"/>
        ${renderIcon('mail', { x: 16, y: 38, size: 20, color: '#DC2626' })}
        <text x="48" y="54" font-family="Inter, sans-serif" font-size="14" font-weight="500" fill="${TOKENS.textPrimary}">sarah.jenkins@invalid-domain</text>
        ${renderIcon('alert-circle', { x: 306, y: 38, size: 20, color: '#DC2626' })}
        <!-- Inline Error Message -->
        <text x="4" y="88" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#DC2626">Please enter a valid email address (e.g. name@domain.com)</text>
      </g>

      <!-- Password Field (ERROR STATE) -->
      <g transform="translate(0, 194)">
        <text x="0" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#DC2626">Password *</text>
        <rect x="0" y="22" width="342" height="52" rx="14" fill="#FFF5F5" stroke="#DC2626" stroke-width="1.8"/>
        ${renderIcon('lock', { x: 16, y: 38, size: 20, color: '#DC2626' })}
        <text x="48" y="54" font-family="Inter, sans-serif" font-size="16" font-weight="700" fill="${TOKENS.textPrimary}">••••</text>
        ${renderIcon('eye', { x: 306, y: 38, size: 20, color: TOKENS.textMuted })}
        <!-- Inline Error Message -->
        <text x="4" y="88" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#DC2626">Must be at least 8 characters with 1 number and 1 symbol</text>
      </g>

      <!-- Submit Button -->
      <g transform="translate(0, 306)">
        <rect x="0" y="0" width="342" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
        <text x="171" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Create Account</text>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 3. SRCH-01: LIVE SEARCH & RESULTS ---
function renderScreen_SRCH01() {
  const pepperoniBase64 = getBase64Image('hot_honey_pepperoni.jpg');
  const ribsBase64 = getBase64Image('smoked_ribs.jpg');
  const burgerBase64 = getBase64Image('smash_burger.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Search Header Bar -->
    <g transform="translate(16, 56)">
      <rect x="0" y="0" width="308" height="48" rx="14" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="1.8" filter="url(#softShadow)"/>
      ${renderIcon('search', { x: 14, y: 14, size: 20, color: TOKENS.primary })}
      <text x="44" y="30" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="${TOKENS.textPrimary}">BBQ</text>
      ${renderIcon('x', { x: 274, y: 14, size: 20, color: TOKENS.textMuted })}

      <text x="330" y="30" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.primary}">Cancel</text>
    </g>

    <!-- Filter Pills -->
    <g transform="translate(16, 116)">
      <rect x="0" y="0" width="76" height="32" rx="16" fill="${TOKENS.primary}"/>
      <text x="38" y="21" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">All (6)</text>

      <rect x="84" y="0" width="90" height="32" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <text x="129" y="21" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">Pizzas (2)</text>

      <rect x="182" y="0" width="102" height="32" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <text x="233" y="21" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">Smoked (3)</text>
    </g>

    <!-- Results List (3 Result Cards) -->
    <g transform="translate(16, 164)">
      <!-- Result 1: Smoked Ribs -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="358" height="106" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="srchClip1"><rect x="0" y="0" width="106" height="106" rx="16"/></clipPath></defs>
        ${ribsBase64 ? `<image href="${ribsBase64}" x="0" y="0" width="106" height="106" preserveAspectRatio="xMidYMid slice" clip-path="url(#srchClip1)"/>` : ''}
        <g transform="translate(118, 16)">
          <text x="0" y="14" font-family="Manrope, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Smoked Pork Ribs</text>
          <text x="0" y="32" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">14-hr oak smoked, spicy BBQ glaze</text>
          <text x="0" y="56" font-family="Inter, sans-serif" font-size="15" font-weight="900" fill="${TOKENS.primary}">$24.50</text>
          <rect x="180" y="40" width="50" height="26" rx="13" fill="${TOKENS.primary}"/>
          <text x="205" y="57" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">+ ADD</text>
        </g>
      </g>

      <!-- Result 2: BBQ Chicken Pizza -->
      <g transform="translate(0, 118)">
        <rect x="0" y="0" width="358" height="106" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="srchClip2"><rect x="0" y="0" width="106" height="106" rx="16"/></clipPath></defs>
        ${pepperoniBase64 ? `<image href="${pepperoniBase64}" x="0" y="0" width="106" height="106" preserveAspectRatio="xMidYMid slice" clip-path="url(#srchClip2)"/>` : ''}
        <g transform="translate(118, 16)">
          <text x="0" y="14" font-family="Manrope, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Smoked BBQ Chicken Pizza</text>
          <text x="0" y="32" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Smoked Gouda, red onion, cilantro</text>
          <text x="0" y="56" font-family="Inter, sans-serif" font-size="15" font-weight="900" fill="${TOKENS.primary}">$19.50</text>
          <rect x="180" y="40" width="50" height="26" rx="13" fill="${TOKENS.primary}"/>
          <text x="205" y="57" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">+ ADD</text>
        </g>
      </g>

      <!-- Result 3: Smash Burger -->
      <g transform="translate(0, 236)">
        <rect x="0" y="0" width="358" height="106" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="srchClip3"><rect x="0" y="0" width="106" height="106" rx="16"/></clipPath></defs>
        ${burgerBase64 ? `<image href="${burgerBase64}" x="0" y="0" width="106" height="106" preserveAspectRatio="xMidYMid slice" clip-path="url(#srchClip3)"/>` : ''}
        <g transform="translate(118, 16)">
          <text x="0" y="14" font-family="Manrope, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Craft BBQ Bacon Burger</text>
          <text x="0" y="32" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Smoked brisket patty, cheddar, BBQ</text>
          <text x="0" y="56" font-family="Inter, sans-serif" font-size="15" font-weight="900" fill="${TOKENS.primary}">$16.00</text>
          <rect x="180" y="40" width="50" height="26" rx="13" fill="${TOKENS.primary}"/>
          <text x="205" y="57" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">+ ADD</text>
        </g>
      </g>
    </g>

    ${renderBottomDock({ active: 'Delivery' })}
    ${renderHomeIndicator(false)}
  `;
}

// --- 4. SRCH-01-EMPTY: SEARCH NO RESULTS FALLBACK ---
function renderScreen_SRCH01_EMPTY() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Search Header Bar -->
    <g transform="translate(16, 56)">
      <rect x="0" y="0" width="308" height="48" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
      ${renderIcon('search', { x: 14, y: 14, size: 20, color: TOKENS.textMuted })}
      <text x="44" y="30" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="${TOKENS.textPrimary}">Sushi Maki Roll</text>
      ${renderIcon('x', { x: 274, y: 14, size: 20, color: TOKENS.textMuted })}

      <text x="330" y="30" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.primary}">Cancel</text>
    </g>

    <!-- Empty Graphic & Message -->
    <g transform="translate(45, 220)">
      <circle cx="150" cy="80" r="70" fill="#F4E9D9"/>
      <circle cx="150" cy="80" r="50" fill="#FFFFFF" filter="url(#softShadow)"/>
      ${renderIcon('search', { x: 130, y: 60, size: 40, color: TOKENS.primary, strokeWidth: 2.2 })}

      <text x="150" y="180" font-family="Manrope, sans-serif" font-size="20" font-weight="800" fill="${TOKENS.textPrimary}" text-anchor="middle">No dishes found</text>
      <text x="150" y="206" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}" text-anchor="middle">
        We couldn't find matches for "Sushi Maki Roll".
      </text>
      <text x="150" y="226" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}" text-anchor="middle">
        Try our popular wood-fired pizzas or smoked craft BBQ!
      </text>

      <!-- Quick Suggestion Chips -->
      <g transform="translate(10, 260)">
        <rect x="0" y="0" width="130" height="38" rx="19" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="65" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.primary}" text-anchor="middle">Hot Pepperoni</text>

        <rect x="142" y="0" width="138" height="38" rx="19" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="211" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.primary}" text-anchor="middle">Texas Brisket</text>
      </g>
    </g>

    ${renderBottomDock({ active: 'Delivery' })}
    ${renderHomeIndicator(false)}
  `;
}

// --- 5. CART-01-EMPTY: EMPTY FEAST CART STATE ---
function renderScreen_CART01_EMPTY() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Header -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="56" y="26" font-family="Manrope, sans-serif" font-size="18" font-weight="800" fill="${TOKENS.textPrimary}">Your Feast Cart</text>
    </g>

    <!-- Empty Cart Visual -->
    <g transform="translate(45, 230)">
      <circle cx="150" cy="70" r="70" fill="#F4E9D9"/>
      <circle cx="150" cy="70" r="50" fill="#FFFFFF" filter="url(#softShadow)"/>
      ${renderIcon('shopping-bag', { x: 130, y: 50, size: 40, color: TOKENS.primary, strokeWidth: 2 })}

      <text x="150" y="170" font-family="Manrope, sans-serif" font-size="22" font-weight="800" fill="${TOKENS.textPrimary}" text-anchor="middle">Your cart is empty</text>
      <text x="150" y="198" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}" text-anchor="middle">
        Good food is always cooking! Add wood-fired pizza
      </text>
      <text x="150" y="218" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}" text-anchor="middle">
        or slow-smoked craft BBQ to start your feast.
      </text>

      <!-- Browse Menu CTA -->
      <g transform="translate(25, 260)">
        <rect x="0" y="0" width="250" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
        <text x="125" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Explore Menu</text>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 6. CHECK-01-RETRY: PAYMENT DECLINE & RETRY ---
function renderScreen_CHECK01_RETRY() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Bar -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="56" y="26" font-family="Manrope, sans-serif" font-size="18" font-weight="800" fill="${TOKENS.textPrimary}">Payment Failed</text>
    </g>

    <!-- Error Alert Card -->
    <g transform="translate(16, 120)">
      <rect x="0" y="0" width="358" height="96" rx="16" fill="#FEF2F2" stroke="#F87171" stroke-width="1.5"/>
      ${renderIcon('alert-triangle', { x: 16, y: 20, size: 28, color: '#DC2626', strokeWidth: 2.2 })}
      <g transform="translate(56, 18)">
        <text x="0" y="16" font-family="Manrope, sans-serif" font-size="15" font-weight="800" fill="#991B1B">Transaction Declined by Issuer</text>
        <text x="0" y="36" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#B91C1C">Your card issuer declined the $25.60 charge.</text>
        <text x="0" y="52" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#B91C1C">Please select an alternative payment method.</text>
      </g>
    </g>

    <!-- Alternative Payment Methods -->
    <g transform="translate(16, 240)">
      <text x="0" y="16" font-family="Manrope, sans-serif" font-size="16" font-weight="800" fill="${TOKENS.textPrimary}">Choose Another Payment Method</text>

      <!-- Apple Pay (Recommended Alternative) -->
      <g transform="translate(0, 32)">
        <rect x="0" y="0" width="358" height="60" rx="14" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="2" filter="url(#softShadow)"/>
        <circle cx="28" cy="30" r="10" fill="${TOKENS.primary}"/>
        <circle cx="28" cy="30" r="4" fill="#FFFFFF"/>
        <text x="52" y="36" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}"> Pay</text>
        <text x="110" y="36" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.ratingGreen}">(Recommended)</text>
      </g>

      <!-- New Debit/Credit Card -->
      <g transform="translate(0, 104)">
        <rect x="0" y="0" width="358" height="60" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="30" r="10" fill="none" stroke="${TOKENS.cardBorder}" stroke-width="2"/>
        ${renderIcon('credit-card', { x: 50, y: 20, size: 20, color: TOKENS.textPrimary })}
        <text x="80" y="36" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Add New Credit / Debit Card</text>
      </g>

      <!-- Cash on Delivery -->
      <g transform="translate(0, 176)">
        <rect x="0" y="0" width="358" height="60" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="30" r="10" fill="none" stroke="${TOKENS.cardBorder}" stroke-width="2"/>
        ${renderIcon('dollar-sign', { x: 50, y: 20, size: 20, color: TOKENS.textPrimary })}
        <text x="80" y="36" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Cash on Delivery</text>
      </g>
    </g>

    <!-- Retry Action Button -->
    <g transform="translate(16, 756)">
      <rect x="0" y="0" width="358" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
      <text x="179" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Retry Payment ($25.60)</text>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 7. HIST-01: CUSTOMER ORDER HISTORY & RECEIPTS ---
function renderScreen_HIST01() {
  const pepperoniBase64 = getBase64Image('hot_honey_pepperoni.jpg');
  const brisketBase64 = getBase64Image('texas_brisket.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Header -->
    <g transform="translate(16, 56)">
      <text x="0" y="24" font-family="Manrope, sans-serif" font-size="22" font-weight="900" fill="${TOKENS.textPrimary}">Order History</text>
      <text x="0" y="44" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Past deliveries, receipts and quick re-orders</text>
    </g>

    <!-- Orders Feed -->
    <g transform="translate(16, 126)">
      <!-- Order 1 (In Progress / Recent) -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="358" height="152" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        
        <!-- Header: Order #, Date, Status -->
        <g transform="translate(16, 18)">
          <text x="0" y="14" font-family="Manrope, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">#CQ-98241</text>
          <text x="0" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Today at 6:01 PM • Downtown Kitchen</text>
          
          <rect x="236" y="2" width="90" height="24" rx="12" fill="#ECFDF5"/>
          <text x="281" y="18" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#047857" text-anchor="middle">ON THE WAY</text>
        </g>

        <!-- Thumb + Items Summary -->
        <g transform="translate(16, 64)">
          <defs><clipPath id="histClip1"><rect x="0" y="0" width="48" height="48" rx="10"/></clipPath></defs>
          ${pepperoniBase64 ? `<image href="${pepperoniBase64}" x="0" y="0" width="48" height="48" preserveAspectRatio="xMidYMid slice" clip-path="url(#histClip1)"/>` : ''}
          <text x="58" y="18" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Hot Honey Pepperoni, Smash Burger</text>
          <text x="58" y="36" font-family="Inter, sans-serif" font-size="13" font-weight="900" fill="${TOKENS.primary}">Total: $25.60</text>

          <!-- Track Action Button -->
          <g transform="translate(230, 8)">
            <rect x="0" y="0" width="96" height="34" rx="10" fill="${TOKENS.primary}"/>
            <text x="48" y="22" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Live Track</text>
          </g>
        </g>
      </g>

      <!-- Order 2 (Delivered 3 Days Ago) -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="358" height="152" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        
        <!-- Header: Order #, Date, Status -->
        <g transform="translate(16, 18)">
          <text x="0" y="14" font-family="Manrope, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">#CQ-94182</text>
          <text x="0" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Oct 29 at 7:15 PM • Downtown Kitchen</text>
          
          <rect x="236" y="2" width="90" height="24" rx="12" fill="#F3F4F6"/>
          <text x="281" y="18" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#4B5563" text-anchor="middle">DELIVERED</text>
        </g>

        <!-- Thumb + Items Summary -->
        <g transform="translate(16, 64)">
          <defs><clipPath id="histClip2"><rect x="0" y="0" width="48" height="48" rx="10"/></clipPath></defs>
          ${brisketBase64 ? `<image href="${brisketBase64}" x="0" y="0" width="48" height="48" preserveAspectRatio="xMidYMid slice" clip-path="url(#histClip2)"/>` : ''}
          <text x="58" y="18" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Texas Oak Smoked Brisket Plate</text>
          <text x="58" y="36" font-family="Inter, sans-serif" font-size="13" font-weight="900" fill="${TOKENS.textPrimary}">Total: $28.50</text>

          <!-- Re-Order Action Button -->
          <g transform="translate(230, 8)">
            <rect x="0" y="0" width="96" height="34" rx="10" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="1.5"/>
            <text x="48" y="22" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.primary}" text-anchor="middle">Re-Order</text>
          </g>
        </g>
      </g>
    </g>

    ${renderBottomDock({ active: 'History' })}
    ${renderHomeIndicator(false)}
  `;
}

// --- 8. PROF-01: CUSTOMER PROFILE & LOYALTY REWARDS ---
function renderScreen_PROF01() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Profile Header -->
    <g transform="translate(24, 70)">
      <circle cx="36" cy="36" r="36" fill="${TOKENS.primary}"/>
      <text x="36" y="44" font-family="Inter, sans-serif" font-size="22" font-weight="800" fill="#FFFFFF" text-anchor="middle">SJ</text>

      <g transform="translate(86, 12)">
        <text x="0" y="18" font-family="Manrope, sans-serif" font-size="20" font-weight="900" fill="${TOKENS.textPrimary}">Sarah Jenkins</text>
        <text x="0" y="36" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">sarah.jenkins@example.com</text>
      </g>
    </g>

    <!-- Pitmaster Loyalty Card (Gold & Charcoal) -->
    <g transform="translate(16, 160)">
      <rect x="0" y="0" width="358" height="136" rx="20" fill="#1C1B19" filter="url(#dockShadow)"/>
      
      <g transform="translate(20, 20)">
        <g transform="translate(0, 0)">
          <circle cx="14" cy="14" r="14" fill="#F59E0B"/>
          ${renderLightning({ x: 5, y: 5, size: 18, color: '#1C1B19', fill: '#1C1B19' })}
        </g>
        <text x="38" y="20" font-family="Manrope, sans-serif" font-size="16" font-weight="900" fill="#FEF08A">PITMASTER REWARDS</text>
        <text x="318" y="20" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#F59E0B" text-anchor="end">GOLD TIER</text>

        <text x="0" y="58" font-family="Manrope, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF">1,250 <tspan font-size="14" font-weight="600" fill="#A8A49C">PTS</tspan></text>
        <text x="0" y="80" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#A8A49C">250 pts to Free Wood-Fired Pizza</text>

        <!-- Progress Bar -->
        <rect x="0" y="90" width="318" height="8" rx="4" fill="#32302C"/>
        <rect x="0" y="90" width="230" height="8" rx="4" fill="#F59E0B"/>
      </g>
    </g>

    <!-- Settings / Actions List -->
    <g transform="translate(16, 316)">
      <!-- Item 1: Saved Addresses -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderIcon('map-pin', { x: 16, y: 17, size: 20, color: TOKENS.primary })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">Saved Delivery Addresses</text>
        <text x="340" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textMuted}" text-anchor="end">&gt;</text>
      </g>

      <!-- Item 2: Payment Methods -->
      <g transform="translate(0, 64)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderIcon('credit-card', { x: 16, y: 17, size: 20, color: TOKENS.primary })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">Payment Methods &amp; Cards</text>
        <text x="340" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textMuted}" text-anchor="end">&gt;</text>
      </g>

      <!-- Item 3: Dietary & Allergy Preferences -->
      <g transform="translate(0, 128)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderIcon('shield', { x: 16, y: 17, size: 20, color: TOKENS.primary })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">Dietary &amp; Allergy Flags</text>
        <text x="340" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textMuted}" text-anchor="end">&gt;</text>
      </g>

      <!-- Item 4: Switch to Courier Driver Mode -->
      <g transform="translate(0, 192)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#F4E9D9" stroke="#E5D6C0" stroke-width="1.2"/>
        ${renderIcon('bike', { x: 16, y: 17, size: 20, color: TOKENS.primary, strokeWidth: 2.2 })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">Switch to Driver Partner Mode</text>
        <text x="340" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.primary}" text-anchor="end">&gt;</text>
      </g>
    </g>

    ${renderBottomDock({ active: 'Delivery' })}
    ${renderHomeIndicator(false)}
  `;
}

// --- 9. DRV-AUTH-01: DRIVER LOGIN & SHIFT ACCESS ---
function renderScreen_DRV_AUTH01() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Driver Partner Brand Emblem -->
    <g transform="translate(24, 100)">
      <circle cx="36" cy="36" r="36" fill="#1C1B19"/>
      ${renderIcon('bike', { x: 18, y: 18, size: 36, color: '#F59E0B', strokeWidth: 2.2 })}
      <text x="86" y="32" font-family="Manrope, sans-serif" font-size="22" font-weight="900" fill="${TOKENS.textPrimary}">Crust &amp; Q Courier</text>
      <text x="86" y="52" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.primary}">DELIVERY PARTNER PORTAL</text>
    </g>

    <!-- Sign In Card -->
    <g transform="translate(24, 210)">
      <text x="0" y="24" font-family="Inter, sans-serif" font-size="20" font-weight="800" fill="${TOKENS.textPrimary}">Partner Shift Sign In</text>
      <text x="0" y="44" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}">Sign in with your verified driver credentials</text>

      <!-- Driver Phone / ID Field -->
      <g transform="translate(0, 68)">
        <text x="0" y="-8" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}">Courier Mobile Number</text>
        <rect x="0" y="0" width="342" height="52" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        ${renderIcon('phone', { x: 16, y: 16, size: 20, color: TOKENS.textMuted })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="600" fill="${TOKENS.textPrimary}">+1 (407) 555-0192</text>
      </g>

      <!-- Password / PIN Field -->
      <g transform="translate(0, 148)">
        <text x="0" y="-8" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}">Shift Access PIN</text>
        <rect x="0" y="0" width="342" height="52" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        ${renderIcon('lock', { x: 16, y: 16, size: 20, color: TOKENS.textMuted })}
        <text x="48" y="34" font-family="Inter, sans-serif" font-size="18" font-weight="800" fill="${TOKENS.textPrimary}">••••</text>
      </g>

      <!-- Sign In Button -->
      <g transform="translate(0, 230)">
        <rect x="0" y="0" width="342" height="52" rx="16" fill="#1C1B19" filter="url(#dockShadow)"/>
        <text x="171" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Start Courier Shift</text>
      </g>

      <!-- Onboarding Link -->
      <g transform="translate(0, 310)">
        <text x="171" y="16" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">
          New courier? <tspan fill="${TOKENS.primary}" font-weight="700">Apply to Deliver</tspan>
        </text>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 10. DRV-ONB-01: DRIVER ONBOARDING & DOCUMENT VERIFICATION ---
function renderScreen_DRV_ONB01() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Bar -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="56" y="26" font-family="Manrope, sans-serif" font-size="18" font-weight="800" fill="${TOKENS.textPrimary}">Courier Verification</text>
    </g>

    <!-- Header Description -->
    <g transform="translate(24, 116)">
      <text x="0" y="18" font-family="Manrope, sans-serif" font-size="20" font-weight="900" fill="${TOKENS.textPrimary}">Required Driver Documents</text>
      <text x="0" y="38" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">
        Upload clear photos to activate your shift delivery dispatch.
      </text>
    </g>

    <!-- Document Checklist -->
    <g transform="translate(16, 180)">
      <!-- Item 1: Driver License (VERIFIED) -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="358" height="66" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="33" r="14" fill="#ECFDF5"/>
        ${renderIcon('check', { x: 18, y: 23, size: 20, color: '#047857', strokeWidth: 2.5 })}
        <text x="54" y="28" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">Government Driver's License</text>
        <text x="54" y="46" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#047857">VERIFIED (Exp: 08/2028)</text>
      </g>

      <!-- Item 2: Vehicle Insurance (VERIFIED) -->
      <g transform="translate(0, 78)">
        <rect x="0" y="0" width="358" height="66" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="33" r="14" fill="#ECFDF5"/>
        ${renderIcon('check', { x: 18, y: 23, size: 20, color: '#047857', strokeWidth: 2.5 })}
        <text x="54" y="28" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">Vehicle Insurance Policy</text>
        <text x="54" y="46" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#047857">VERIFIED (State Farm Active)</text>
      </g>

      <!-- Item 3: Background Check (IN REVIEW) -->
      <g transform="translate(0, 156)">
        <rect x="0" y="0" width="358" height="66" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="33" r="14" fill="#FEF3C7"/>
        ${renderIcon('clock', { x: 18, y: 23, size: 20, color: '#B45309', strokeWidth: 2.2 })}
        <text x="54" y="28" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">Background Check (Checkr)</text>
        <text x="54" y="46" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#B45309">IN REVIEW (Est: 2 hrs)</text>
      </g>

      <!-- Item 4: Direct Deposit Bank Info (READY) -->
      <g transform="translate(0, 234)">
        <rect x="0" y="0" width="358" height="66" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="33" r="14" fill="#F4E9D9"/>
        ${renderIcon('wallet', { x: 18, y: 23, size: 20, color: TOKENS.primary, strokeWidth: 2 })}
        <text x="54" y="28" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">Direct Deposit (Routing / Acct)</text>
        <text x="54" y="46" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textSecondary}">Chase Bank ****8821</text>
      </g>
    </g>

    <!-- Bottom Action -->
    <g transform="translate(16, 756)">
      <rect x="0" y="0" width="358" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
      <text x="179" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Continue to Vehicle Setup</text>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 11. DRV-PICK-01: RESTAURANT ARRIVAL & PICKUP VERIFICATION ---
function renderScreen_DRV_PICK01() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Top Navigation Header -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <g transform="translate(56, 0)">
        <text x="0" y="18" font-family="Manrope, sans-serif" font-size="16" font-weight="800" fill="${TOKENS.textPrimary}">Crust &amp; Q Smokehouse</text>
        <text x="0" y="34" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.ratingGreen}">ARRIVED AT RESTAURANT</text>
      </g>
    </g>

    <!-- Order Pin Badge -->
    <g transform="translate(16, 120)">
      <rect x="0" y="0" width="358" height="84" rx="18" fill="#1C1B19" filter="url(#dockShadow)"/>
      <g transform="translate(20, 20)">
        <text x="0" y="16" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#A8A49C">ORDER TO COLLECT</text>
        <text x="0" y="42" font-family="Manrope, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF">#CQ-98241</text>
        <text x="318" y="36" font-family="Inter, sans-serif" font-size="16" font-weight="800" fill="#F59E0B" text-anchor="end">2 ITEMS</text>
      </g>
    </g>

    <!-- Checklist of Items in Bag -->
    <g transform="translate(16, 224)">
      <text x="0" y="14" font-family="Manrope, sans-serif" font-size="16" font-weight="800" fill="${TOKENS.textPrimary}">Verify Bag Contents with Kitchen</text>

      <!-- Checklist Item 1 -->
      <g transform="translate(0, 28)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <rect x="14" y="14" width="24" height="24" rx="7" fill="${TOKENS.primary}"/>
        ${renderIcon('check', { x: 16, y: 16, size: 20, color: '#FFFFFF', strokeWidth: 3 })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">1x Hot Honey Pepperoni Pizza (14")</text>
      </g>

      <!-- Checklist Item 2 -->
      <g transform="translate(0, 92)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <rect x="14" y="14" width="24" height="24" rx="7" fill="${TOKENS.primary}"/>
        ${renderIcon('check', { x: 16, y: 16, size: 20, color: '#FFFFFF', strokeWidth: 3 })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">1x Double Smash Wagyu Burger + Fries</text>
      </g>

      <!-- Kitchen Staff Seal Check -->
      <g transform="translate(0, 160)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <rect x="14" y="14" width="24" height="24" rx="7" fill="${TOKENS.primary}"/>
        ${renderIcon('check', { x: 16, y: 16, size: 20, color: '#FFFFFF', strokeWidth: 3 })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">Tamper-Evident Freshness Seal Attached</text>
      </g>
    </g>

    <!-- Customer Drop-off Destination Info -->
    <g transform="translate(16, 470)">
      <rect x="0" y="0" width="358" height="90" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <g transform="translate(16, 18)">
        <text x="0" y="14" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.textSecondary}">DROP-OFF DESTINATION</text>
        <text x="0" y="34" font-family="Manrope, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Sarah Jenkins • 420 E Robinson St, Apt 4B</text>
        <text x="0" y="52" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Note: Gate code #4821 • Leave at doorstep</text>
      </g>
    </g>

    <!-- Bottom Action: Confirm Pickup & Start Delivery -->
    <g transform="translate(16, 756)">
      <rect x="0" y="0" width="358" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
      <text x="179" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Confirm Pickup &amp; Start Navigation</text>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 12. DRV-EARN-01: COURIER EARNINGS & PAYOUT HISTORY ---
function renderScreen_DRV_EARN01() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Header -->
    <g transform="translate(16, 56)">
      <text x="0" y="24" font-family="Manrope, sans-serif" font-size="22" font-weight="900" fill="${TOKENS.textPrimary}">Courier Earnings</text>
      <text x="0" y="44" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Marcus Vance • Silver Honda Civic (FL-7492-CQ)</text>
    </g>

    <!-- Weekly Total Hero Card -->
    <g transform="translate(16, 126)">
      <rect x="0" y="0" width="358" height="150" rx="20" fill="#1C1B19" filter="url(#dockShadow)"/>
      
      <g transform="translate(24, 22)">
        <text x="0" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#A8A49C">THIS WEEK'S EARNINGS (OCT 27 - NOV 02)</text>
        <text x="0" y="52" font-family="Manrope, sans-serif" font-size="34" font-weight="900" fill="#FFFFFF">$748.20</text>
        
        <!-- Metrics Breakdown Row -->
        <g transform="translate(0, 76)">
          <text x="0" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#A8A49C">Trips: <tspan fill="#FFFFFF" font-weight="800">42</tspan></text>
          <text x="80" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#A8A49C">Online: <tspan fill="#FFFFFF" font-weight="800">24.5 hrs</tspan></text>
          <text x="180" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#A8A49C">Tips: <tspan fill="#F59E0B" font-weight="800">$186.00</tspan></text>
        </g>
      </g>
    </g>

    <!-- Instant Cash-Out Card -->
    <g transform="translate(16, 296)">
      <rect x="0" y="0" width="358" height="68" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
      <g transform="translate(16, 16)">
        <text x="0" y="16" font-family="Manrope, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Available to Cash Out: $142.50</text>
        <text x="0" y="34" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Instant transfer to Chase ****8821</text>
        
        <rect x="220" y="4" width="106" height="32" rx="10" fill="${TOKENS.ratingGreen}"/>
        <text x="273" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Cash Out</text>
      </g>
    </g>

    <!-- Daily Breakdown Ledger -->
    <g transform="translate(16, 384)">
      <text x="0" y="16" font-family="Manrope, sans-serif" font-size="16" font-weight="800" fill="${TOKENS.textPrimary}">Recent Shifts</text>

      <!-- Today -->
      <g transform="translate(0, 30)">
        <rect x="0" y="0" width="358" height="52" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="16" y="31" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Today, Nov 02 (8 trips)</text>
        <text x="342" y="31" font-family="Manrope, sans-serif" font-size="14" font-weight="900" fill="${TOKENS.primary}" text-anchor="end">$142.50</text>
      </g>

      <!-- Yesterday -->
      <g transform="translate(0, 90)">
        <rect x="0" y="0" width="358" height="52" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="16" y="31" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Yesterday, Nov 01 (11 trips)</text>
        <text x="342" y="31" font-family="Manrope, sans-serif" font-size="14" font-weight="900" fill="${TOKENS.textPrimary}" text-anchor="end">$198.00</text>
      </g>

      <!-- Friday -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="358" height="52" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="16" y="31" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Friday, Oct 31 (14 trips)</text>
        <text x="342" y="31" font-family="Manrope, sans-serif" font-size="14" font-weight="900" fill="${TOKENS.textPrimary}" text-anchor="end">$246.70</text>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 13. HOME-01-LOADING: SHIMMER SKELETON FEED LOADER ---
function renderScreen_HOME01_LOADING() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Top Shimmer Location & Search -->
    <g transform="translate(16, 56)">
      <rect x="0" y="0" width="160" height="18" rx="9" fill="#EAE3D6"/>
      <rect x="0" y="24" width="220" height="14" rx="7" fill="#F4EFE6"/>
      <circle cx="340" cy="18" r="18" fill="#EAE3D6"/>
    </g>

    <!-- Search Bar Skeleton -->
    <g transform="translate(16, 114)">
      <rect x="0" y="0" width="358" height="48" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <rect x="16" y="16" width="180" height="16" rx="8" fill="#EAE3D6"/>
    </g>

    <!-- Hero Banner Skeleton -->
    <g transform="translate(16, 178)">
      <rect x="0" y="0" width="358" height="130" rx="18" fill="#E5DFD3"/>
    </g>

    <!-- Categories Row Skeleton -->
    <g transform="translate(16, 326)">
      <circle cx="30" cy="30" r="26" fill="#EAE3D6"/>
      <circle cx="94" cy="30" r="26" fill="#EAE3D6"/>
      <circle cx="158" cy="30" r="26" fill="#EAE3D6"/>
      <circle cx="222" cy="30" r="26" fill="#EAE3D6"/>
      <circle cx="286" cy="30" r="26" fill="#EAE3D6"/>
      <circle cx="345" cy="30" r="26" fill="#EAE3D6"/>
    </g>

    <!-- Food Cards Row 1 Skeleton -->
    <g transform="translate(16, 404)">
      <rect x="0" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <rect x="0" y="0" width="112" height="66" rx="14" fill="#EAE3D6"/>
      <rect x="8" y="78" width="80" height="12" rx="6" fill="#F4EFE6"/>
      <rect x="8" y="96" width="50" height="10" rx="5" fill="#F4EFE6"/>

      <rect x="122" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <rect x="122" y="0" width="112" height="66" rx="14" fill="#EAE3D6"/>
      <rect x="130" y="78" width="80" height="12" rx="6" fill="#F4EFE6"/>
      <rect x="130" y="96" width="50" height="10" rx="5" fill="#F4EFE6"/>

      <rect x="244" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <rect x="244" y="0" width="112" height="66" rx="14" fill="#EAE3D6"/>
      <rect x="252" y="78" width="80" height="12" rx="6" fill="#F4EFE6"/>
      <rect x="252" y="96" width="50" height="10" rx="5" fill="#F4EFE6"/>
    </g>

    <!-- Food Cards Row 2 Skeleton -->
    <g transform="translate(16, 542)">
      <rect x="0" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <rect x="0" y="0" width="112" height="66" rx="14" fill="#EAE3D6"/>
      <rect x="8" y="78" width="80" height="12" rx="6" fill="#F4EFE6"/>
      <rect x="8" y="96" width="50" height="10" rx="5" fill="#F4EFE6"/>

      <rect x="122" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <rect x="122" y="0" width="112" height="66" rx="14" fill="#EAE3D6"/>
      <rect x="130" y="78" width="80" height="12" rx="6" fill="#F4EFE6"/>
      <rect x="130" y="96" width="50" height="10" rx="5" fill="#F4EFE6"/>

      <rect x="244" y="0" width="112" height="122" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <rect x="244" y="0" width="112" height="66" rx="14" fill="#EAE3D6"/>
      <rect x="252" y="78" width="80" height="12" rx="6" fill="#F4EFE6"/>
      <rect x="252" y="96" width="50" height="10" rx="5" fill="#F4EFE6"/>
    </g>

    ${renderBottomDock({ active: 'Delivery' })}
    ${renderHomeIndicator(false)}
  `;
}

module.exports = {
  renderScreen_AUTH02,
  renderScreen_AUTH01_ERROR,
  renderScreen_SRCH01,
  renderScreen_SRCH01_EMPTY,
  renderScreen_CART01_EMPTY,
  renderScreen_CHECK01_RETRY,
  renderScreen_HIST01,
  renderScreen_PROF01,
  renderScreen_DRV_AUTH01,
  renderScreen_DRV_ONB01,
  renderScreen_DRV_PICK01,
  renderScreen_DRV_EARN01,
  renderScreen_HOME01_LOADING
};
