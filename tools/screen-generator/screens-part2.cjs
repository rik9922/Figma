const { TOKENS, getBase64Image, renderStatusBar, renderHomeIndicator, renderBottomDock } = require('./components.cjs');
const { renderIcon, renderStar, renderLightning } = require('./icons.cjs');

// --- 3. MENU & CATEGORY CATALOG SCREENS ---

function renderScreen_MENU01() {
  const pepperoniBase64 = getBase64Image('hot_honey_pepperoni.jpg');
  const ribsBase64 = getBase64Image('smoked_ribs.jpg');
  const brisketBase64 = getBase64Image('texas_brisket.jpg');
  const chickenBase64 = getBase64Image('chicken_sandwich.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation & Search Header -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      
      <!-- Search Input -->
      <g transform="translate(52, 0)">
        <rect x="0" y="0" width="250" height="40" rx="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderIcon('search', { x: 12, y: 11, size: 18, color: TOKENS.textSecondary })}
        <text x="38" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textMuted}">Search full menu...</text>
      </g>

      <!-- Cart Quick Access -->
      <g transform="translate(318, 0)">
        <circle cx="20" cy="20" r="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderIcon('shopping-bag', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
        <circle cx="28" cy="10" r="6" fill="${TOKENS.primary}"/>
        <text x="28" y="13" font-family="Inter, sans-serif" font-size="8" font-weight="800" fill="#FFFFFF" text-anchor="middle">2</text>
      </g>
    </g>

    <!-- Category Tabs Navigation -->
    <g transform="translate(16, 112)">
      <!-- Tab 1: All -->
      <text x="14" y="16" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="${TOKENS.textSecondary}">All</text>
      <!-- Tab 2: Wood-Fired Pizza (Active) -->
      <g transform="translate(48, 0)">
        <text x="14" y="16" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="${TOKENS.primary}">Wood-Fired Pizza</text>
        <rect x="14" y="24" width="110" height="3" rx="1.5" fill="${TOKENS.primary}"/>
      </g>
      <!-- Tab 3: Smoked BBQ -->
      <text x="188" y="16" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="${TOKENS.textSecondary}">Craft BBQ</text>
      <!-- Tab 4: Burgers & Steaks -->
      <text x="268" y="16" font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="${TOKENS.textSecondary}">Burgers &amp; Steaks</text>
    </g>

    <!-- Menu Items List -->
    <g transform="translate(16, 156)">
      <text x="0" y="16" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">MOST ORDERED PIZZAS (8)</text>

      <!-- Item Card 1: Hot Honey Pepperoni -->
      <g transform="translate(0, 32)">
        <rect x="0" y="0" width="358" height="116" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        
        <!-- Left: Details -->
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="68" height="16" rx="4" fill="#FEF2F2"/>
          <text x="6" y="12" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="${TOKENS.primary}">BESTSELLER</text>
          
          <text x="0" y="34" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">Hot Honey Pepperoni</text>
          <text x="0" y="52" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Cupped pepperoni, chili-infused honey, basil</text>
          
          <g transform="translate(0, 64)">
            <text x="0" y="15" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">$18.99</text>
            <rect x="54" y="2" width="34" height="16" rx="4" fill="#15803D"/>
            ${renderStar({ x: 57, y: 4, size: 10, color: '#FFFFFF', fill: '#FFFFFF' })}
            <text x="69" y="14" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#FFFFFF">4.9</text>
          </g>
        </g>

        <!-- Right: Dish Image + ADD Button -->
        <g transform="translate(242, 10)">
          <defs><clipPath id="menuThumb1"><rect x="0" y="0" width="102" height="96" rx="12"/></clipPath></defs>
          ${pepperoniBase64 ? `<image href="${pepperoniBase64}" x="0" y="0" width="102" height="96" preserveAspectRatio="xMidYMid slice" clip-path="url(#menuThumb1)"/>` : ''}
          <g transform="translate(16, 70)">
            <rect x="0" y="0" width="70" height="26" rx="6" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="1.5" filter="url(#softShadow)"/>
            <text x="35" y="17" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="${TOKENS.primary}" text-anchor="middle">ADD +</text>
          </g>
        </g>
      </g>

      <!-- Item Card 2: Smoked St. Louis Ribs -->
      <g transform="translate(0, 160)">
        <rect x="0" y="0" width="358" height="116" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="76" height="16" rx="4" fill="#FEF3C7"/>
          <text x="6" y="12" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#B45309">PITMASTER PICK</text>
          
          <text x="0" y="34" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">St. Louis Smoked Ribs</text>
          <text x="0" y="52" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Half rack slow-smoked over hickory, glaze</text>
          
          <g transform="translate(0, 64)">
            <text x="0" y="15" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">$22.00</text>
            <rect x="54" y="2" width="34" height="16" rx="4" fill="#15803D"/>
            ${renderStar({ x: 57, y: 4, size: 10, color: '#FFFFFF', fill: '#FFFFFF' })}
            <text x="69" y="14" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#FFFFFF">4.9</text>
          </g>
        </g>
        <g transform="translate(242, 10)">
          <defs><clipPath id="menuThumb2"><rect x="0" y="0" width="102" height="96" rx="12"/></clipPath></defs>
          ${ribsBase64 ? `<image href="${ribsBase64}" x="0" y="0" width="102" height="96" preserveAspectRatio="xMidYMid slice" clip-path="url(#menuThumb2)"/>` : ''}
          <g transform="translate(16, 70)">
            <rect x="0" y="0" width="70" height="26" rx="6" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="1.5" filter="url(#softShadow)"/>
            <text x="35" y="17" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="${TOKENS.primary}" text-anchor="middle">ADD +</text>
          </g>
        </g>
      </g>

      <!-- Item Card 3: 16-Hour Texas Brisket -->
      <g transform="translate(0, 288)">
        <rect x="0" y="0" width="358" height="116" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="68" height="16" rx="4" fill="#ECFDF5"/>
          <text x="6" y="12" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#047857">CRAFT OAK</text>
          
          <text x="0" y="34" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">Texas Oak Smoked Brisket</text>
          <text x="0" y="52" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">USDA Prime, black pepper bark, pickles</text>
          
          <g transform="translate(0, 64)">
            <text x="0" y="15" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">$24.99</text>
            <rect x="54" y="2" width="34" height="16" rx="4" fill="#15803D"/>
            ${renderStar({ x: 57, y: 4, size: 10, color: '#FFFFFF', fill: '#FFFFFF' })}
            <text x="69" y="14" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#FFFFFF">4.9</text>
          </g>
        </g>
        <g transform="translate(242, 10)">
          <defs><clipPath id="menuThumb3"><rect x="0" y="0" width="102" height="96" rx="12"/></clipPath></defs>
          ${brisketBase64 ? `<image href="${brisketBase64}" x="0" y="0" width="102" height="96" preserveAspectRatio="xMidYMid slice" clip-path="url(#menuThumb3)"/>` : ''}
          <g transform="translate(16, 70)">
            <rect x="0" y="0" width="70" height="26" rx="6" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="1.5" filter="url(#softShadow)"/>
            <text x="35" y="17" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="${TOKENS.primary}" text-anchor="middle">ADD +</text>
          </g>
        </g>
      </g>
    </g>

    <!-- Floating Sticky Cart Indicator -->
    <g transform="translate(16, 756)">
      <rect x="0" y="0" width="358" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
      <g transform="translate(16, 17)">
        <text x="0" y="15" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">2 Items in Cart • $40.99</text>
      </g>
      <g transform="translate(250, 14)">
        <text x="0" y="18" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF">View Cart</text>
        ${renderIcon('arrow-right', { x: 68, y: 4, size: 16, color: '#FFFFFF', strokeWidth: 2.5 })}
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

function renderScreen_CAT01() {
  const ribeyeBase64 = getBase64Image('angus_ribeye.jpg');
  const brisketBase64 = getBase64Image('texas_brisket.jpg');
  const ribsBase64 = getBase64Image('smoked_ribs.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Category Header (Matches User Screenshot 4!) -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      
      <g transform="translate(52, 0)">
        <rect x="0" y="0" width="260" height="40" rx="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderIcon('search', { x: 12, y: 11, size: 18, color: TOKENS.textSecondary })}
        <text x="38" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textMuted}">Restaurant name or a dish...</text>
      </g>

      <circle cx="334" cy="20" r="18" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('mic', { x: 325, y: 11, size: 18, color: TOKENS.primary, strokeWidth: 2 })}
    </g>

    <!-- Circular Subcategory Plates (Direct match to Screenshot 4!) -->
    <g transform="translate(16, 110)">
      <!-- Item 1: Steak (Active with Red Underline!) -->
      <g transform="translate(10, 0)">
        <circle cx="26" cy="26" r="24" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="1.8" filter="url(#softShadow)"/>
        ${ribeyeBase64 ? `
          <defs><clipPath id="catPlate1"><circle cx="26" cy="26" r="22"/></clipPath></defs>
          <image href="${ribeyeBase64}" x="4" y="4" width="44" height="44" preserveAspectRatio="xMidYMid slice" clip-path="url(#catPlate1)"/>
        ` : ''}
        <text x="26" y="60" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.primary}" text-anchor="middle">Steak</text>
        <rect x="14" y="66" width="24" height="2.5" rx="1.25" fill="${TOKENS.primary}"/>
      </g>

      <!-- Item 2: Brisket -->
      <g transform="translate(80, 0)">
        <circle cx="26" cy="26" r="24" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${brisketBase64 ? `
          <defs><clipPath id="catPlate2"><circle cx="26" cy="26" r="22"/></clipPath></defs>
          <image href="${brisketBase64}" x="4" y="4" width="44" height="44" preserveAspectRatio="xMidYMid slice" clip-path="url(#catPlate2)"/>
        ` : ''}
        <text x="26" y="60" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">Brisket</text>
      </g>

      <!-- Item 3: Smoked Ribs -->
      <g transform="translate(150, 0)">
        <circle cx="26" cy="26" r="24" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${ribsBase64 ? `
          <defs><clipPath id="catPlate3"><circle cx="26" cy="26" r="22"/></clipPath></defs>
          <image href="${ribsBase64}" x="4" y="4" width="44" height="44" preserveAspectRatio="xMidYMid slice" clip-path="url(#catPlate3)"/>
        ` : ''}
        <text x="26" y="60" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">Smoked Ribs</text>
      </g>

      <!-- Item 4: Wagyu -->
      <g transform="translate(230, 0)">
        <circle cx="26" cy="26" r="24" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="26" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.accent}" text-anchor="middle">W</text>
        <text x="26" y="60" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textSecondary}" text-anchor="middle">Wagyu</text>
      </g>
    </g>

    <!-- Quick Filters Pill Row (Matches Screenshot 4!) -->
    <g transform="translate(16, 186)">
      <rect x="0" y="0" width="76" height="30" rx="15" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('sliders-horizontal', { x: 8, y: 7, size: 14, color: TOKENS.textPrimary, strokeWidth: 2 })}
      <text x="26" y="19" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textPrimary}">Filters</text>
      ${renderIcon('chevron-down', { x: 58, y: 9, size: 12, color: TOKENS.textPrimary, strokeWidth: 2 })}

      <g transform="translate(82, 0)">
        <rect x="0" y="0" width="138" height="30" rx="15" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderIcon('shield-check', { x: 8, y: 7, size: 14, color: '#047857', strokeWidth: 2 })}
        <text x="26" y="19" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textPrimary}">Zero-Spill Guarantee</text>
      </g>

      <g transform="translate(226, 0)">
        <rect x="0" y="0" width="102" height="30" rx="15" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderLightning({ x: 8, y: 7, size: 14, color: '#16A34A', fill: '#16A34A' })}
        <text x="26" y="19" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.textPrimary}">Near &amp; Fast</text>
      </g>
    </g>

    <!-- Recommended 3-Column Grid for Steaks (Matches Screenshot 4!) -->
    <g transform="translate(16, 230)">
      <text x="0" y="14" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="${TOKENS.textPrimary}">RECOMMENDED STEAKS</text>

      <!-- 3 Cards Grid -->
      <!-- Card 1 -->
      <g transform="translate(0, 26)">
        <rect x="0" y="0" width="112" height="118" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="steakClip1"><rect x="0" y="0" width="112" height="68" rx="14"/></clipPath></defs>
        ${ribeyeBase64 ? `<image href="${ribeyeBase64}" x="0" y="0" width="112" height="68" preserveAspectRatio="xMidYMid slice" clip-path="url(#steakClip1)"/>` : ''}
        <rect x="4" y="4" width="70" height="14" rx="3" fill="#1C1B19" opacity="0.85"/>
        <text x="7" y="14" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#FFFFFF">$10 OFF &gt;$40</text>
        <rect x="6" y="54" width="34" height="15" rx="3" fill="#15803D"/>
        ${renderStar({ x: 9, y: 56, size: 10, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="21" y="65" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">4.9</text>
        <text x="6" y="82" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="${TOKENS.textPrimary}">Angus Ribeye</text>
        <g transform="translate(6, 90)">
          ${renderLightning({ x: 0, y: 0, size: 10, color: '#16A34A', fill: '#16A34A' })}
          <text x="12" y="9" font-family="Inter, sans-serif" font-size="8.5" font-weight="600" fill="${TOKENS.textSecondary}">25-30 min</text>
        </g>
      </g>

      <!-- Card 2 -->
      <g transform="translate(122, 26)">
        <rect x="0" y="0" width="112" height="118" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="steakClip2"><rect x="0" y="0" width="112" height="68" rx="14"/></clipPath></defs>
        ${brisketBase64 ? `<image href="${brisketBase64}" x="0" y="0" width="112" height="68" preserveAspectRatio="xMidYMid slice" clip-path="url(#steakClip2)"/>` : ''}
        <rect x="4" y="4" width="62" height="14" rx="3" fill="#1C1B19" opacity="0.85"/>
        <text x="7" y="14" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#FFFFFF">PRIME OAK</text>
        <rect x="6" y="54" width="34" height="15" rx="3" fill="#15803D"/>
        ${renderStar({ x: 9, y: 56, size: 10, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="21" y="65" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">4.8</text>
        <text x="6" y="82" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="${TOKENS.textPrimary}">Smoked Filet</text>
        <g transform="translate(6, 90)">
          ${renderLightning({ x: 0, y: 0, size: 10, color: '#16A34A', fill: '#16A34A' })}
          <text x="12" y="9" font-family="Inter, sans-serif" font-size="8.5" font-weight="600" fill="${TOKENS.textSecondary}">20-25 min</text>
        </g>
      </g>

      <!-- Card 3 -->
      <g transform="translate(244, 26)">
        <rect x="0" y="0" width="112" height="118" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="steakClip3"><rect x="0" y="0" width="112" height="68" rx="14"/></clipPath></defs>
        ${ribsBase64 ? `<image href="${ribsBase64}" x="0" y="0" width="112" height="68" preserveAspectRatio="xMidYMid slice" clip-path="url(#steakClip3)"/>` : ''}
        <rect x="4" y="4" width="62" height="14" rx="3" fill="#1C1B19" opacity="0.85"/>
        <text x="7" y="14" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#FFFFFF">CHEF CUT</text>
        <rect x="6" y="54" width="34" height="15" rx="3" fill="#15803D"/>
        ${renderStar({ x: 9, y: 56, size: 10, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="21" y="65" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">4.9</text>
        <text x="6" y="82" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="${TOKENS.textPrimary}">Dry Aged Strip</text>
        <g transform="translate(6, 90)">
          ${renderLightning({ x: 0, y: 0, size: 10, color: '#16A34A', fill: '#16A34A' })}
          <text x="12" y="9" font-family="Inter, sans-serif" font-size="8.5" font-weight="600" fill="${TOKENS.textSecondary}">25-30 min</text>
        </g>
      </g>
    </g>

    <!-- "Most ordered for steaks" Section (Matches Screenshot 4!) -->
    <g transform="translate(16, 400)">
      <text x="0" y="15" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Most ordered for steaks</text>
      <text x="358" y="15" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.primary}" text-anchor="end">View all &gt;</text>

      <!-- Wide Featured Card -->
      <g transform="translate(0, 30)">
        <rect x="0" y="0" width="358" height="130" rx="18" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
        <defs><clipPath id="steakWideClip"><rect x="0" y="0" width="130" height="130" rx="18"/></clipPath></defs>
        ${ribeyeBase64 ? `<image href="${ribeyeBase64}" x="0" y="0" width="130" height="130" preserveAspectRatio="xMidYMid slice" clip-path="url(#steakWideClip)"/>` : ''}
        
        <g transform="translate(144, 18)">
          <text x="0" y="16" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">16oz Bone-In Ribeye</text>
          <text x="0" y="34" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Oak wood-charred with rosemary butter</text>
          <text x="0" y="58" font-family="Inter, sans-serif" font-size="16" font-weight="900" fill="${TOKENS.textPrimary}">$34.50</text>
          
          <g transform="translate(130, 42)">
            <rect x="0" y="0" width="70" height="30" rx="8" fill="${TOKENS.primary}"/>
            <text x="35" y="19" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">ADD +</text>
          </g>
        </g>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 4. PIZZA BUILDER & DISH CUSTOMIZATION SCREENS ---

function renderScreen_PIZZA01() {
  const pepperoniBase64 = getBase64Image('hot_honey_pepperoni.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Bar -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="52" y="26" font-family="Inter, sans-serif" font-size="17" font-weight="800" fill="${TOKENS.textPrimary}">Build Your Own Pizza</text>
      
      <rect x="300" y="6" width="60" height="28" rx="8" fill="#ECFDF5"/>
      <text x="330" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#047857" text-anchor="middle">$16.00</text>
    </g>

    <!-- 7-Step Progression Stepper -->
    <g transform="translate(16, 108)">
      <text x="0" y="12" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.textSecondary}">STEP 2 OF 7: CHOOSE CRUST</text>
      <!-- Step Progress Bar -->
      <rect x="0" y="20" width="358" height="6" rx="3" fill="#EFE8DE"/>
      <rect x="0" y="20" width="102" height="6" rx="3" fill="${TOKENS.primary}"/>
    </g>

    <!-- 3D Pizza Live Visualizer Stage -->
    <g transform="translate(16, 146)">
      <rect x="0" y="0" width="358" height="190" rx="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
      <defs><clipPath id="pizzaStageClip"><rect x="0" y="0" width="358" height="190" rx="20"/></clipPath></defs>
      ${pepperoniBase64 ? `<image href="${pepperoniBase64}" x="0" y="-30" width="358" height="240" preserveAspectRatio="xMidYMid slice" clip-path="url(#pizzaStageClip)"/>` : ''}
      
      <!-- Visualizer Overlay Tags -->
      <g transform="translate(14, 14)">
        <rect x="0" y="0" width="120" height="24" rx="6" fill="#1C1B19" opacity="0.85"/>
        <text x="60" y="16" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">14" LARGE • 8 SLICES</text>
      </g>
    </g>

    <!-- Crust Options Selector -->
    <g transform="translate(16, 356)">
      <text x="0" y="16" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Select Your Crust Style</text>

      <!-- Option 1: Signature Wood-Fired Neapolitan (Selected) -->
      <g transform="translate(0, 30)">
        <rect x="0" y="0" width="358" height="64" rx="14" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="2" filter="url(#softShadow)"/>
        <circle cx="28" cy="32" r="10" fill="${TOKENS.primary}"/>
        <circle cx="28" cy="32" r="4" fill="#FFFFFF"/>
        <text x="50" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Signature Wood-Fired Neapolitan</text>
        <text x="50" y="44" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Light, airy, leopard-spotted crust (Included)</text>
        <text x="342" y="36" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.ratingGreen}" text-anchor="end">+$0.00</text>
      </g>

      <!-- Option 2: Garlic Butter Stuffed Crust -->
      <g transform="translate(0, 102)">
        <rect x="0" y="0" width="358" height="64" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="32" r="10" fill="none" stroke="${TOKENS.cardBorder}" stroke-width="2"/>
        <text x="50" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Garlic Herb Stuffed Crust</text>
        <text x="50" y="44" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Filled with whole-milk mozzarella</text>
        <text x="342" y="36" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="end">+$3.50</text>
      </g>

      <!-- Option 3: Gluten-Free Cauliflower Crust -->
      <g transform="translate(0, 174)">
        <rect x="0" y="0" width="358" height="64" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="32" r="10" fill="none" stroke="${TOKENS.cardBorder}" stroke-width="2"/>
        <text x="50" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Artisan Gluten-Free Crust</text>
        <text x="50" y="44" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Crispy golden bake, 100% certified</text>
        <text x="342" y="36" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="end">+$4.00</text>
      </g>
    </g>

    <!-- Bottom Action Button -->
    <g transform="translate(16, 756)">
      <rect x="0" y="0" width="358" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
      <text x="179" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Next: Choose Sauce &gt;</text>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

function renderScreen_DISH01() {
  const burgerBase64 = getBase64Image('smash_burger.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Dish Hero Image Header -->
    <g transform="translate(0, 0)">
      <defs><clipPath id="dishHeroClip"><rect x="0" y="0" width="390" height="290"/></clipPath></defs>
      ${burgerBase64 ? `<image href="${burgerBase64}" x="0" y="0" width="390" height="290" preserveAspectRatio="xMidYMid slice" clip-path="url(#dishHeroClip)"/>` : ''}
      
      <!-- Top Floating Buttons -->
      <g transform="translate(16, 56)">
        <circle cx="20" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
        ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}

        <circle cx="338" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
        ${renderIcon('heart', { x: 328, y: 10, size: 20, color: TOKENS.primary, fill: '#FEE2E2', strokeWidth: 2 })}
      </g>
    </g>

    <!-- Details Card Container -->
    <g transform="translate(16, 306)">
      <text x="0" y="24" font-family="Manrope, sans-serif" font-size="22" font-weight="800" fill="${TOKENS.textPrimary}">Double Wagyu Smash Burger</text>
      
      <!-- Rating & Cook Time -->
      <g transform="translate(0, 36)">
        <rect x="0" y="0" width="38" height="18" rx="4" fill="#15803D"/>
        ${renderStar({ x: 4, y: 3, size: 12, color: '#FFFFFF', fill: '#FFFFFF' })}
        <text x="19" y="13" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF">4.8</text>
        <text x="46" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">(348 reviews)</text>
        <text x="140" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.accent}">• 15-20 min delivery</text>
      </g>

      <!-- Price -->
      <text x="0" y="80" font-family="Inter, sans-serif" font-size="20" font-weight="900" fill="${TOKENS.primary}">$16.50</text>
      <text x="0" y="104" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">
        Two 100% American Wagyu patties, smoked aged cheddar, caramelized shallots, house secret Q-sauce on a toasted brioche bun.
      </text>

      <!-- Choice of Patty Doneness -->
      <g transform="translate(0, 134)">
        <text x="0" y="16" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="${TOKENS.textPrimary}">Patty Temperature (Required)</text>
        
        <g transform="translate(0, 26)">
          <rect x="0" y="0" width="358" height="40" rx="10" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="8" fill="${TOKENS.primary}"/>
          <circle cx="20" cy="20" r="3" fill="#FFFFFF"/>
          <text x="38" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}">Medium Well (Recommended)</text>
        </g>
      </g>

      <!-- Add-Ons -->
      <g transform="translate(0, 220)">
        <text x="0" y="16" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="${TOKENS.textPrimary}">Add-ons &amp; Sides</text>
        
        <g transform="translate(0, 26)">
          <rect x="0" y="0" width="358" height="40" rx="10" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
          <rect x="14" y="12" width="16" height="16" rx="4" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
          <text x="38" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}">Crispy Applewood Smoked Bacon</text>
          <text x="344" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="end">+$2.50</text>
        </g>

        <g transform="translate(0, 72)">
          <rect x="0" y="0" width="358" height="40" rx="10" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
          <rect x="14" y="12" width="16" height="16" rx="4" fill="${TOKENS.primary}"/>
          <polyline points="18,20 21,23 26,17" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="38" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}">Parmesan Truffle Fries</text>
          <text x="344" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="end">+$4.50</text>
        </g>
      </g>
    </g>

    <!-- Bottom Sticky Bar: Quantity Stepper & Add Button -->
    <g transform="translate(16, 754)">
      <!-- Quantity Stepper -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="108" height="52" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5"/>
        <text x="20" y="32" font-family="Inter, sans-serif" font-size="18" font-weight="700" fill="${TOKENS.textSecondary}">-</text>
        <text x="54" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}" text-anchor="middle">1</text>
        <text x="88" y="32" font-family="Inter, sans-serif" font-size="18" font-weight="700" fill="${TOKENS.primary}">+</text>
      </g>

      <!-- Add to Cart Button -->
      <g transform="translate(120, 0)">
        <rect x="0" y="0" width="238" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
        <text x="119" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle">Add to Cart • $21.00</text>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 5. CART & CHECKOUT SCREENS ---

function renderScreen_CART01() {
  const pepperoniBase64 = getBase64Image('hot_honey_pepperoni.jpg');
  const burgerBase64 = getBase64Image('smash_burger.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Header -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="56" y="26" font-family="Inter, sans-serif" font-size="18" font-weight="800" fill="${TOKENS.textPrimary}">Your Feast Cart</text>
      <text x="358" y="26" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.primary}" text-anchor="end">Clear</text>
    </g>

    <!-- Cart Item 1 -->
    <g transform="translate(16, 110)">
      <rect x="0" y="0" width="358" height="96" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
      <defs><clipPath id="cartItemClip1"><rect x="0" y="0" width="80" height="80" rx="12"/></clipPath></defs>
      <g transform="translate(8, 8)">
        ${pepperoniBase64 ? `<image href="${pepperoniBase64}" x="0" y="0" width="80" height="80" preserveAspectRatio="xMidYMid slice" clip-path="url(#cartItemClip1)"/>` : ''}
      </g>
      
      <g transform="translate(98, 16)">
        <text x="0" y="16" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">Hot Honey Pepperoni Pizza</text>
        <text x="0" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Wood-Fired Crust • Regular Cheese</text>
        <text x="0" y="56" font-family="Inter, sans-serif" font-size="14" font-weight="900" fill="${TOKENS.primary}">$18.99</text>
        
        <!-- Quantity Stepper Pill -->
        <g transform="translate(170, 40)">
          <rect x="0" y="0" width="80" height="26" rx="13" fill="#F4E9D9"/>
          <text x="14" y="17" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">-</text>
          <text x="40" y="17" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="${TOKENS.textPrimary}" text-anchor="middle">1</text>
          <text x="66" y="17" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.primary}">+</text>
        </g>
      </g>
    </g>

    <!-- Cart Item 2 -->
    <g transform="translate(16, 218)">
      <rect x="0" y="0" width="358" height="96" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
      <defs><clipPath id="cartItemClip2"><rect x="0" y="0" width="80" height="80" rx="12"/></clipPath></defs>
      <g transform="translate(8, 8)">
        ${burgerBase64 ? `<image href="${burgerBase64}" x="0" y="0" width="80" height="80" preserveAspectRatio="xMidYMid slice" clip-path="url(#cartItemClip2)"/>` : ''}
      </g>
      <g transform="translate(98, 16)">
        <text x="0" y="16" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">Double Wagyu Smash Burger</text>
        <text x="0" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">+ Truffle Fries Side</text>
        <text x="0" y="56" font-family="Inter, sans-serif" font-size="14" font-weight="900" fill="${TOKENS.primary}">$21.00</text>
        
        <g transform="translate(170, 40)">
          <rect x="0" y="0" width="80" height="26" rx="13" fill="#F4E9D9"/>
          <text x="14" y="17" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.textPrimary}">-</text>
          <text x="40" y="17" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="${TOKENS.textPrimary}" text-anchor="middle">1</text>
          <text x="66" y="17" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="${TOKENS.primary}">+</text>
        </g>
      </g>
    </g>

    <!-- Promo Code Voucher Input -->
    <g transform="translate(16, 328)">
      <rect x="0" y="0" width="358" height="46" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('sparkles', { x: 14, y: 14, size: 18, color: TOKENS.accent })}
      <text x="40" y="28" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}">CRUST50 applied ($19.99 saved)</text>
      <text x="344" y="28" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.ratingGreen}" text-anchor="end">APPLIED</text>
    </g>

    <!-- Tip Driver Selector Pills -->
    <g transform="translate(16, 388)">
      <text x="0" y="14" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="${TOKENS.textPrimary}">Add a Tip for Driver Partner</text>
      
      <!-- 4 Tip Options -->
      <g transform="translate(0, 24)">
        <rect x="0" y="0" width="80" height="38" rx="10" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="40" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="middle">$3.00</text>

        <rect x="92" y="0" width="80" height="38" rx="10" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="2"/>
        <text x="132" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="${TOKENS.primary}" text-anchor="middle">$4.00 ★</text>

        <rect x="184" y="0" width="80" height="38" rx="10" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="224" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="middle">$5.00</text>

        <rect x="276" y="0" width="82" height="38" rx="10" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="317" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="middle">Custom</text>
      </g>
    </g>

    <!-- Bill Details Breakdown Card -->
    <g transform="translate(16, 470)">
      <rect x="0" y="0" width="358" height="150" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      
      <g transform="translate(16, 20)">
        <text x="0" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Item Total</text>
        <text x="326" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}" text-anchor="end">$39.99</text>

        <text x="0" y="38" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Delivery Fee</text>
        <text x="326" y="38" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.ratingGreen}" text-anchor="end">FREE</text>

        <text x="0" y="62" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Driver Partner Tip</text>
        <text x="326" y="62" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}" text-anchor="end">$4.00</text>

        <text x="0" y="86" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Taxes &amp; Restaurant Charges</text>
        <text x="326" y="86" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}" text-anchor="end">$3.20</text>

        <line x1="0" y1="98" x2="326" y2="98" stroke="${TOKENS.cardBorder}" stroke-width="1"/>

        <text x="0" y="120" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">To Pay</text>
        <text x="326" y="120" font-family="Inter, sans-serif" font-size="16" font-weight="900" fill="${TOKENS.primary}" text-anchor="end">$47.19</text>
      </g>
    </g>

    <!-- Bottom Checkout Action -->
    <g transform="translate(16, 756)">
      <rect x="0" y="0" width="358" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
      <g transform="translate(20, 17)">
        <text x="0" y="14" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">$47.19</text>
        <text x="0" y="26" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="#FEE2E2">TOTAL</text>
      </g>
      <text x="250" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">Proceed to Pay &gt;</text>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

function renderScreen_CHECK01() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Header -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="56" y="26" font-family="Inter, sans-serif" font-size="18" font-weight="800" fill="${TOKENS.textPrimary}">Payment &amp; Address</text>
    </g>

    <!-- Delivery Address Card -->
    <g transform="translate(16, 110)">
      <rect x="0" y="0" width="358" height="84" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
      ${renderIcon('map-pin', { x: 16, y: 16, size: 22, color: TOKENS.primary, strokeWidth: 2 })}
      <text x="48" y="26" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">Delivery to Home</text>
      <text x="48" y="44" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Orlando Seven Street, Apt 4B, Orlando, FL 32801</text>
      <text x="48" y="62" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="${TOKENS.primary}">Change Address</text>
    </g>

    <!-- Delivery Instructions -->
    <g transform="translate(16, 208)">
      <rect x="0" y="0" width="358" height="48" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('phone', { x: 14, y: 14, size: 18, color: TOKENS.textSecondary })}
      <text x="42" y="28" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.textPrimary}">Leave at door • Ring doorbell</text>
    </g>

    <!-- Payment Methods -->
    <g transform="translate(16, 276)">
      <text x="0" y="16" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Payment Method</text>

      <!-- Apple Pay (Selected) -->
      <g transform="translate(0, 30)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#FFFFFF" stroke="${TOKENS.primary}" stroke-width="2" filter="url(#softShadow)"/>
        <circle cx="28" cy="27" r="9" fill="${TOKENS.primary}"/>
        <circle cx="28" cy="27" r="3.5" fill="#FFFFFF"/>
        <text x="50" y="32" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}"> Pay</text>
        <text x="100" y="32" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">(Default: Apple Card)</text>
      </g>

      <!-- Credit / Debit Card -->
      <g transform="translate(0, 94)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="27" r="9" fill="none" stroke="${TOKENS.cardBorder}" stroke-width="2"/>
        ${renderIcon('wallet', { x: 48, y: 17, size: 20, color: TOKENS.textPrimary })}
        <text x="76" y="32" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Visa ending in 4242</text>
      </g>

      <!-- Cash on Delivery -->
      <g transform="translate(0, 158)">
        <rect x="0" y="0" width="358" height="54" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <circle cx="28" cy="27" r="9" fill="none" stroke="${TOKENS.cardBorder}" stroke-width="2"/>
        <text x="50" y="32" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Cash on Delivery</text>
      </g>
    </g>

    <!-- Place Order Button -->
    <g transform="translate(16, 756)">
      <rect x="0" y="0" width="358" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
      <text x="179" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Pay $47.19 &amp; Place Order</text>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 6. ORDER SUCCESS & LIVE GOOGLE MAPS TRACKING ---

function renderScreen_ORDER_SUCC01() {
  const margheritaBase64 = getBase64Image('hero_margherita.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Celebratory Illustration Crest -->
    <g transform="translate(145, 120)">
      <circle cx="50" cy="50" r="50" fill="#ECFDF5"/>
      <circle cx="50" cy="50" r="38" fill="#10B981"/>
      ${renderIcon('check', { x: 30, y: 30, size: 40, color: '#FFFFFF', strokeWidth: 3.5 })}
    </g>

    <!-- Success Text -->
    <g transform="translate(24, 250)">
      <text x="171" y="20" font-family="Manrope, sans-serif" font-size="24" font-weight="800" fill="${TOKENS.textPrimary}" text-anchor="middle">Feast Order Confirmed!</text>
      <text x="171" y="46" font-family="Inter, sans-serif" font-size="13" font-weight="500" fill="${TOKENS.textSecondary}" text-anchor="middle">Order #CQ-98241 • Wood-fired kitchen started prep</text>

      <!-- ETA Badge -->
      <g transform="translate(56, 70)">
        <rect x="0" y="0" width="230" height="44" rx="22" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.5" filter="url(#softShadow)"/>
        ${renderLightning({ x: 16, y: 14, size: 18, color: '#16A34A', fill: '#16A34A' })}
        <text x="42" y="27" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Estimated: 20-25 mins</text>
      </g>
    </g>

    <!-- Order Summary Preview Card -->
    <g transform="translate(16, 410)">
      <rect x="0" y="0" width="358" height="130" rx="18" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2" filter="url(#softShadow)"/>
      <defs><clipPath id="succClip"><rect x="0" y="0" width="100" height="130" rx="18"/></clipPath></defs>
      ${margheritaBase64 ? `<image href="${margheritaBase64}" x="0" y="0" width="100" height="130" preserveAspectRatio="xMidYMid slice" clip-path="url(#succClip)"/>` : ''}
      
      <g transform="translate(114, 20)">
        <text x="0" y="16" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">Crust &amp; Q — Downtown</text>
        <text x="0" y="34" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">2 Items: Hot Pepperoni, Smash Burger</text>
        <text x="0" y="56" font-family="Inter, sans-serif" font-size="14" font-weight="900" fill="${TOKENS.primary}">Total Paid: $47.19</text>
        
        <g transform="translate(0, 68)">
          <rect x="0" y="0" width="110" height="24" rx="6" fill="#F4E9D9"/>
          <text x="55" y="16" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="middle">LIVE GPS TRACKING</text>
        </g>
      </g>
    </g>

    <!-- Primary Action: Track Order Live on Map -->
    <g transform="translate(16, 700)">
      <rect x="0" y="0" width="358" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
      <text x="179" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Track Order Live on Map</text>
    </g>

    <!-- Back to Home -->
    <g transform="translate(16, 764)">
      <rect x="0" y="0" width="358" height="46" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <text x="179" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="middle">Return to Home</text>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// Daylight Google Maps Live Tracking Screen (Downtown Orlando Lake Eola Cartography)
function renderScreen_TRACK01() {
  return `
    <rect width="390" height="844" fill="#E8ECE9"/>
    
    <!-- 1. Real Vector Daylight Google Maps Cartography (Orlando Downtown & Lake Eola) -->
    <g id="GoogleMapsDaylightView">
      <!-- Land / Urban blocks -->
      <rect width="390" height="600" fill="#F4F3F0"/>
      
      <!-- Lake Eola Park (Emerald Green) -->
      <path d="M120 180 C 140 160, 260 150, 310 180 C 340 200, 360 260, 330 310 C 300 350, 160 360, 130 330 C 100 290, 100 200, 120 180 Z" fill="#D5E8D4" stroke="#B8DAB5" stroke-width="2"/>
      
      <!-- Lake Eola Water Body (Pastel Cyan Blue) -->
      <path d="M150 200 C 180 180, 240 175, 280 200 C 310 220, 310 270, 280 290 C 250 310, 180 310, 155 290 C 130 260, 130 220, 150 200 Z" fill="#AADAFF" stroke="#8EC7F5" stroke-width="2"/>
      <text x="215" y="248" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#1E40AF" text-anchor="middle" letter-spacing="1">LAKE EOLA</text>
      
      <!-- Street Grid Network (Orlando Avenues) -->
      <!-- Orange Ave (Major Artery) -->
      <line x1="60" y1="0" x2="60" y2="600" stroke="#FFFFFF" stroke-width="16"/>
      <line x1="60" y1="0" x2="60" y2="600" stroke="#E5E7EB" stroke-width="2"/>
      <text x="54" y="100" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#9CA3AF" transform="rotate(-90 54 100)">ORANGE AVE</text>

      <!-- Rosalind Ave -->
      <line x1="110" y1="0" x2="110" y2="600" stroke="#FFFFFF" stroke-width="12"/>
      
      <!-- Robinson St (East-West) -->
      <line x1="0" y1="150" x2="390" y2="150" stroke="#FFFFFF" stroke-width="14"/>
      <text x="20" y="144" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#9CA3AF">ROBINSON ST</text>

      <!-- Central Blvd -->
      <line x1="0" y1="360" x2="390" y2="360" stroke="#FFFFFF" stroke-width="14"/>
      <text x="20" y="354" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#9CA3AF">CENTRAL BLVD</text>

      <!-- Live GPS Navigation Polyline (Royal Blue Route) -->
      <path d="M60 480 L60 360 L200 360 L200 240" fill="none" stroke="#1A73E8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M60 480 L60 360 L200 360 L200 240" fill="none" stroke="#4285F4" stroke-width="2" stroke-dasharray="6,4" stroke-linecap="round"/>

      <!-- Restaurant Pin (Crust & Q Downtown at Orange Ave) -->
      <g transform="translate(44, 464)">
        <circle cx="16" cy="16" r="16" fill="#D93B18" filter="url(#softShadow)"/>
        <circle cx="16" cy="16" r="6" fill="#FFFFFF"/>
        <text x="16" y="38" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="#D93B18" text-anchor="middle">Crust &amp; Q</text>
      </g>

      <!-- Customer Destination Pin (Lake Eola Residence) -->
      <g transform="translate(184, 224)">
        <circle cx="16" cy="16" r="16" fill="#1F2937" filter="url(#softShadow)"/>
        ${renderIcon('home', { x: 7, y: 7, size: 18, color: '#FFFFFF', strokeWidth: 2 })}
        <text x="16" y="40" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="#1F2937" text-anchor="middle">Home (Apt 4B)</text>
      </g>

      <!-- Live Driver Icon Moving Along Route -->
      <g transform="translate(110, 344)">
        <circle cx="16" cy="16" r="22" fill="#10B981" opacity="0.25"/>
        <circle cx="16" cy="16" r="16" fill="#10B981" filter="url(#softShadow)"/>
        ${renderIcon('bike', { x: 7, y: 7, size: 18, color: '#FFFFFF', strokeWidth: 2.2 })}
      </g>
    </g>

    ${renderStatusBar(false)}

    <!-- Top Navigation Controls -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}

      <!-- Live Order Status Pill -->
      <g transform="translate(54, 0)">
        <rect x="0" y="0" width="180" height="40" rx="20" fill="#FFFFFF" filter="url(#softShadow)"/>
        <circle cx="20" cy="20" r="5" fill="#10B981"/>
        <text x="32" y="24" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="${TOKENS.textPrimary}">OUT FOR DELIVERY</text>
      </g>

      <!-- SOS / Help Button -->
      <g transform="translate(318, 0)">
        <circle cx="20" cy="20" r="20" fill="#FFFFFF" filter="url(#softShadow)"/>
        ${renderIcon('phone', { x: 10, y: 10, size: 18, color: TOKENS.textPrimary })}
      </g>
    </g>

    <!-- Bottom Tracking Bottom Sheet (Customer live tracker) -->
    <g transform="translate(0, 480)">
      <rect x="0" y="0" width="390" height="364" rx="28" fill="#FFFFFF" filter="url(#phoneShadow)"/>
      <rect x="175" y="10" width="40" height="4" rx="2" fill="#E5E0D8"/>

      <!-- ETA Display -->
      <g transform="translate(24, 28)">
        <text x="0" y="24" font-family="Manrope, sans-serif" font-size="24" font-weight="900" fill="${TOKENS.primary}">Arriving in 14 mins</text>
        <text x="0" y="44" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Estimated delivery by 6:24 PM</text>

        <!-- 4-Stage Step Tracker -->
        <g transform="translate(0, 60)">
          <!-- Line across -->
          <line x1="16" y1="8" x2="326" y2="8" stroke="#E5E0D8" stroke-width="3"/>
          <line x1="16" y1="8" x2="220" y2="8" stroke="${TOKENS.primary}" stroke-width="3"/>

          <!-- Step 1: Placed (Done) -->
          <circle cx="16" cy="8" r="8" fill="${TOKENS.primary}"/>
          <text x="16" y="26" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="middle">Placed</text>

          <!-- Step 2: In Oven (Done) -->
          <circle cx="118" cy="8" r="8" fill="${TOKENS.primary}"/>
          <text x="118" y="26" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="${TOKENS.textPrimary}" text-anchor="middle">In Oven</text>

          <!-- Step 3: On The Way (Active) -->
          <circle cx="220" cy="8" r="10" fill="${TOKENS.primary}"/>
          <circle cx="220" cy="8" r="4" fill="#FFFFFF"/>
          <text x="220" y="28" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="${TOKENS.primary}" text-anchor="middle">On Way</text>

          <!-- Step 4: Delivered -->
          <circle cx="326" cy="8" r="8" fill="#E5E0D8"/>
          <text x="326" y="26" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="${TOKENS.textMuted}" text-anchor="middle">Delivered</text>
        </g>
      </g>

      <!-- Driver Partner Profile Card -->
      <g transform="translate(20, 180)">
        <rect x="0" y="0" width="350" height="74" rx="16" fill="${TOKENS.ground}" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        
        <!-- Driver Avatar -->
        <g transform="translate(14, 14)">
          <circle cx="23" cy="23" r="23" fill="#D97706"/>
          <text x="23" y="30" font-family="Inter, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">MV</text>
        </g>

        <!-- Driver Info -->
        <g transform="translate(70, 16)">
          <text x="0" y="16" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">Marcus Vance</text>
          <g transform="translate(0, 22)">
            <rect x="0" y="0" width="34" height="15" rx="3" fill="#15803D"/>
            ${renderStar({ x: 3, y: 2.5, size: 10, color: '#FFFFFF', fill: '#FFFFFF' })}
            <text x="15" y="11" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">4.9</text>
            <text x="40" y="12" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">• Silver Honda • FL-7492</text>
          </g>
        </g>

        <!-- Call & Chat Buttons -->
        <g transform="translate(254, 18)">
          <circle cx="18" cy="18" r="18" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
          ${renderIcon('message-square', { x: 9, y: 9, size: 18, color: TOKENS.textPrimary })}

          <circle cx="62" cy="18" r="18" fill="${TOKENS.primary}"/>
          ${renderIcon('phone', { x: 53, y: 9, size: 18, color: '#FFFFFF' })}
        </g>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

// --- 7. DRIVER PARTNER OPERATIONS SCREENS ---

function renderScreen_DRV_DASH01() {
  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Header: Driver Profile & Online Switch -->
    <g transform="translate(16, 56)">
      <g transform="translate(0, 0)">
        <circle cx="20" cy="20" r="20" fill="#D97706"/>
        <text x="20" y="26" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF" text-anchor="middle">MV</text>
        <g transform="translate(48, 4)">
          <text x="0" y="16" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Marcus Vance</text>
          <text x="0" y="30" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="${TOKENS.ratingGreen}">Active Shift: Orlando Central</text>
        </g>
      </g>

      <!-- Online / Offline Switch -->
      <g transform="translate(266, 6)">
        <rect x="0" y="0" width="92" height="34" rx="17" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5"/>
        <circle cx="75" cy="17" r="12" fill="#10B981"/>
        <text x="14" y="22" font-family="Inter, sans-serif" font-size="11" font-weight="800" fill="#047857">ONLINE</text>
      </g>
    </g>

    <!-- Today's Earnings Card -->
    <g transform="translate(16, 126)">
      <rect x="0" y="0" width="358" height="130" rx="20" fill="#1C1B19" filter="url(#softShadow)"/>
      
      <g transform="translate(20, 20)">
        <text x="0" y="14" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#A8A49C">TODAY'S EARNINGS</text>
        <text x="0" y="52" font-family="Manrope, sans-serif" font-size="34" font-weight="900" fill="#FFFFFF">$142.50</text>
        
        <!-- Metrics Row -->
        <g transform="translate(0, 74)">
          <text x="0" y="14" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#D97706">9 Trips Completed</text>
          <text x="120" y="14" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#10B981">• $32.00 Tips</text>
          <text x="210" y="14" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#A8A49C">• 4.2h Online</text>
        </g>
      </g>
    </g>

    <!-- Radar Search Status -->
    <g transform="translate(16, 276)">
      <rect x="0" y="0" width="358" height="64" rx="16" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      <circle cx="32" cy="32" r="16" fill="#ECFDF5"/>
      <circle cx="32" cy="32" r="8" fill="#10B981"/>
      <text x="60" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Searching for Nearby Orders...</text>
      <text x="60" y="44" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">High demand near Downtown Orlando</text>
    </g>

    <!-- Recent Shift Trips List -->
    <g transform="translate(16, 360)">
      <text x="0" y="16" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="${TOKENS.textPrimary}">COMPLETED DELIVERIES TODAY (9)</text>

      <!-- Trip Card 1 -->
      <g transform="translate(0, 30)">
        <rect x="0" y="0" width="358" height="74" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <g transform="translate(16, 16)">
          <text x="0" y="15" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Crust &amp; Q -> Lake Eola Towers</text>
          <text x="0" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Delivered at 5:14 PM • 2.4 miles</text>
          <text x="326" y="24" font-family="Inter, sans-serif" font-size="15" font-weight="900" fill="${TOKENS.ratingGreen}" text-anchor="end">+$14.20</text>
        </g>
      </g>

      <!-- Trip Card 2 -->
      <g transform="translate(0, 114)">
        <rect x="0" y="0" width="358" height="74" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <g transform="translate(16, 16)">
          <text x="0" y="15" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textPrimary}">Crust &amp; Q -> Thornton Park</text>
          <text x="0" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textSecondary}">Delivered at 4:32 PM • 3.1 miles</text>
          <text x="326" y="24" font-family="Inter, sans-serif" font-size="15" font-weight="900" fill="${TOKENS.ratingGreen}" text-anchor="end">+$18.50</text>
        </g>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

function renderScreen_DRV_REQ01() {
  return `
    <rect width="390" height="844" fill="#000000" opacity="0.6"/>
    ${renderStatusBar(true)}

    <!-- Incoming Dispatch Modal (15s Countdown Radar) -->
    <g transform="translate(16, 260)">
      <rect x="0" y="0" width="358" height="520" rx="28" fill="#FFFFFF" filter="url(#phoneShadow)"/>

      <!-- 15-Second Radar Ring -->
      <g transform="translate(179, 70)">
        <circle cx="0" cy="0" r="46" fill="none" stroke="#FEE2E2" stroke-width="6"/>
        <path d="M 0 -46 A 46 46 0 1 1 -39 24" fill="none" stroke="${TOKENS.primary}" stroke-width="6" stroke-linecap="round"/>
        <text x="0" y="6" font-family="Manrope, sans-serif" font-size="22" font-weight="900" fill="${TOKENS.primary}" text-anchor="middle">12s</text>
        <text x="0" y="20" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="${TOKENS.textSecondary}" text-anchor="middle">REMAINING</text>
      </g>

      <!-- Guaranteed Payout -->
      <g transform="translate(0, 140)">
        <text x="179" y="20" font-family="Manrope, sans-serif" font-size="30" font-weight="900" fill="${TOKENS.textPrimary}" text-anchor="middle">$12.50</text>
        <text x="179" y="40" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.ratingGreen}" text-anchor="middle">Includes $4.00 Customer Tip Guaranteed</text>
      </g>

      <!-- Pickup & Dropoff Route Details -->
      <g transform="translate(24, 200)">
        <rect x="0" y="0" width="310" height="140" rx="16" fill="${TOKENS.ground}" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        
        <!-- Pickup -->
        <g transform="translate(16, 20)">
          <circle cx="8" cy="8" r="8" fill="${TOKENS.primary}"/>
          <text x="24" y="12" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="${TOKENS.textPrimary}">Pickup: Crust &amp; Q Downtown</text>
          <text x="24" y="26" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="${TOKENS.textSecondary}">420 S Orange Ave (0.8 mi away)</text>
        </g>

        <line x1="24" y1="52" x2="24" y2="76" stroke="#D1D5DB" stroke-width="2" stroke-dasharray="3,3"/>

        <!-- Dropoff -->
        <g transform="translate(16, 84)">
          <circle cx="8" cy="8" r="8" fill="#1F2937"/>
          <text x="24" y="12" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="${TOKENS.textPrimary}">Dropoff: Orlando Seven St</text>
          <text x="24" y="26" font-family="Inter, sans-serif" font-size="10" font-weight="500" fill="${TOKENS.textSecondary}">Apt 4B, Lake Eola (2.4 mi trip)</text>
        </g>
      </g>

      <!-- Accept Order Primary Button -->
      <g transform="translate(24, 364)">
        <rect x="0" y="0" width="310" height="56" rx="16" fill="#15803D" filter="url(#btnShadow)"/>
        <text x="155" y="34" font-family="Inter, sans-serif" font-size="16" font-weight="800" fill="#FFFFFF" text-anchor="middle">Accept Delivery Offer</text>
      </g>

      <!-- Decline Order Button -->
      <g transform="translate(24, 434)">
        <rect x="0" y="0" width="310" height="46" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        <text x="155" y="28" font-family="Inter, sans-serif" font-size="13" font-weight="700" fill="${TOKENS.textSecondary}" text-anchor="middle">Decline</text>
      </g>
    </g>

    ${renderHomeIndicator(true)}
  `;
}

function renderScreen_DRV_NAV01() {
  return `
    <rect width="390" height="844" fill="#E8ECE9"/>
    
    <!-- Real Daylight Turn Navigation Map View -->
    <g id="DriverNavMapView">
      <rect width="390" height="844" fill="#F4F3F0"/>
      <!-- Lake Eola Water Body -->
      <path d="M120 280 C 180 260, 280 250, 320 280 C 350 310, 320 380, 260 390 C 200 400, 130 380, 110 330 Z" fill="#AADAFF" stroke="#8EC7F5" stroke-width="2"/>
      
      <!-- Major Street -->
      <line x1="195" y1="0" x2="195" y2="844" stroke="#FFFFFF" stroke-width="26"/>
      <line x1="0" y1="420" x2="390" y2="420" stroke="#FFFFFF" stroke-width="20"/>

      <!-- Navigation Polyline -->
      <path d="M195 700 L195 420 L340 420" fill="none" stroke="#1A73E8" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
      
      <!-- Driver Vehicle Arrow -->
      <g transform="translate(183, 580)">
        <circle cx="12" cy="12" r="18" fill="#1A73E8" filter="url(#softShadow)"/>
        ${renderIcon('navigation', { x: 3, y: 3, size: 18, color: '#FFFFFF', strokeWidth: 2.5 })}
      </g>
    </g>

    ${renderStatusBar(true)}

    <!-- Top Turn-by-Turn Maneuver HUD (Google Maps style) -->
    <g transform="translate(16, 56)">
      <rect x="0" y="0" width="358" height="96" rx="20" fill="#15803D" filter="url(#phoneShadow)"/>
      
      <!-- Turn Icon -->
      <g transform="translate(20, 24)">
        <circle cx="24" cy="24" r="24" fill="#FFFFFF"/>
        ${renderIcon('arrow-right', { x: 12, y: 12, size: 24, color: '#15803D', strokeWidth: 3 })}
      </g>

      <g transform="translate(80, 24)">
        <text x="0" y="20" font-family="Manrope, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF">In 200 ft</text>
        <text x="0" y="42" font-family="Inter, sans-serif" font-size="14" font-weight="700" fill="#DCFCE7">Turn Right on E Central Blvd</text>
      </g>
    </g>

    <!-- Bottom Customer Notes & Action Bar -->
    <g transform="translate(0, 650)">
      <rect x="0" y="0" width="390" height="194" rx="28" fill="#FFFFFF" filter="url(#phoneShadow)"/>
      <rect x="175" y="10" width="40" height="4" rx="2" fill="#E5E0D8"/>

      <g transform="translate(20, 24)">
        <text x="0" y="16" font-family="Inter, sans-serif" font-size="15" font-weight="800" fill="${TOKENS.textPrimary}">Ritik Thakre • Apt 4B</text>
        <text x="0" y="34" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="${TOKENS.primary}">Note: Leave at door, don't ring bell</text>

        <!-- Arrived at Customer Button -->
        <g transform="translate(0, 52)">
          <rect x="0" y="0" width="350" height="52" rx="16" fill="${TOKENS.primary}" filter="url(#btnShadow)"/>
          <text x="175" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Arrived at Customer</text>
        </g>
      </g>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

function renderScreen_DRV_COMP01() {
  const pepperoniBase64 = getBase64Image('hot_honey_pepperoni.jpg');

  return `
    <rect width="390" height="844" fill="${TOKENS.ground}"/>
    ${renderStatusBar(false)}

    <!-- Navigation Bar -->
    <g transform="translate(16, 56)">
      <circle cx="20" cy="20" r="20" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
      ${renderIcon('arrow-left', { x: 10, y: 10, size: 20, color: TOKENS.textPrimary })}
      <text x="56" y="26" font-family="Inter, sans-serif" font-size="18" font-weight="800" fill="${TOKENS.textPrimary}">Proof of Delivery</text>
    </g>

    <g transform="translate(16, 116)">
      <text x="0" y="16" font-family="Manrope, sans-serif" font-size="20" font-weight="800" fill="${TOKENS.textPrimary}">Order #CQ-98241 Delivery</text>
      <text x="0" y="36" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="${TOKENS.textSecondary}">Capture photo proof of package placed at doorstep</text>

      <!-- Camera Viewfinder Preview -->
      <g transform="translate(0, 56)">
        <rect x="0" y="0" width="358" height="230" rx="20" fill="#1C1B19" filter="url(#softShadow)"/>
        <defs><clipPath id="cameraViewClip"><rect x="0" y="0" width="358" height="230" rx="20"/></clipPath></defs>
        ${pepperoniBase64 ? `<image href="${pepperoniBase64}" x="0" y="0" width="358" height="230" preserveAspectRatio="xMidYMid slice" clip-path="url(#cameraViewClip)"/>` : ''}
        
        <!-- Viewfinder Reticle Corners -->
        <g stroke="#FFFFFF" stroke-width="3" fill="none">
          <path d="M 30 50 L 30 30 L 50 30"/>
          <path d="M 328 50 L 328 30 L 308 30"/>
          <path d="M 30 180 L 30 200 L 50 200"/>
          <path d="M 328 180 L 328 200 L 308 200"/>
        </g>

        <!-- Retake Photo Pill -->
        <g transform="translate(124, 186)">
          <rect x="0" y="0" width="110" height="30" rx="15" fill="#000000" opacity="0.75"/>
          ${renderIcon('camera', { x: 12, y: 7, size: 16, color: '#FFFFFF' })}
          <text x="62" y="20" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">Retake</text>
        </g>
      </g>

      <!-- Dropoff Location Confirmation -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="358" height="52" rx="12" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
        ${renderIcon('map-pin', { x: 16, y: 16, size: 20, color: TOKENS.ratingGreen })}
        <text x="48" y="32" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="${TOKENS.textPrimary}">GPS Confirmed: At Customer Doorstep</text>
      </g>

      <!-- Customer Signature Pad -->
      <g transform="translate(0, 380)">
        <text x="0" y="16" font-family="Inter, sans-serif" font-size="13" font-weight="800" fill="${TOKENS.textPrimary}">Recipient Signature (Optional)</text>
        <g transform="translate(0, 26)">
          <rect x="0" y="0" width="358" height="90" rx="14" fill="#FFFFFF" stroke="${TOKENS.cardBorder}" stroke-width="1.2"/>
          <path d="M 40 60 Q 90 20 140 50 T 240 40 T 320 60" fill="none" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round"/>
          <text x="16" y="24" font-family="Inter, sans-serif" font-size="11" font-weight="500" fill="${TOKENS.textMuted}">Signed: R. Thakre</text>
        </g>
      </g>
    </g>

    <!-- Complete Delivery Button -->
    <g transform="translate(16, 756)">
      <rect x="0" y="0" width="358" height="52" rx="16" fill="#15803D" filter="url(#btnShadow)"/>
      <text x="179" y="32" font-family="Inter, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Complete Delivery &amp; Collect $12.50</text>
    </g>

    ${renderHomeIndicator(false)}
  `;
}

module.exports = {
  renderScreen_MENU01,
  renderScreen_CAT01,
  renderScreen_PIZZA01,
  renderScreen_DISH01,
  renderScreen_CART01,
  renderScreen_CHECK01,
  renderScreen_ORDER_SUCC01,
  renderScreen_TRACK01,
  renderScreen_DRV_DASH01,
  renderScreen_DRV_REQ01,
  renderScreen_DRV_NAV01,
  renderScreen_DRV_COMP01
};
