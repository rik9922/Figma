const fs = require('fs');
const path = require('path');
const { renderIcon, renderStar, renderLightning } = require('./icons.cjs');

const THUMBNAIL_DIR = path.resolve(__dirname, '../../projects/crust-and-q/assets/thumbnails');

const imageCache = {};

function getBase64Image(filename) {
  if (imageCache[filename]) return imageCache[filename];
  const filePath = path.join(THUMBNAIL_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Thumbnail not found: ${filename}`);
    return '';
  }
  const data = fs.readFileSync(filePath);
  const base64 = `data:image/jpeg;base64,${data.toString('base64')}`;
  imageCache[filename] = base64;
  return base64;
}

// Brand Tokens
const TOKENS = {
  primary: '#D93B18', // Tomato Flame
  primaryHover: '#B82E10',
  secondary: '#3F795F', // Fresh Herb Green
  accent: '#D97706', // Golden Crust
  ground: '#FFF8F0', // Warm Cream
  surface: '#FFFFFF', // Pure White
  surfaceMuted: '#FAF6F0',
  cardBorder: '#EFE8DE',
  textPrimary: '#292824', // Warm Charcoal
  textSecondary: '#716E68',
  textMuted: '#9E9A90',
  ratingGreen: '#15803D',
  shadowSoft: 'filter="url(#softShadow)"'
};

function renderStatusBar(isDark = false) {
  const textColor = isDark ? '#FFFFFF' : '#292824';
  const islandFill = '#000000';
  return `
    <!-- iOS Dynamic Island & Status Bar -->
    <g id="StatusBar">
      <rect x="0" y="0" width="390" height="47" fill="transparent"/>
      <!-- Time -->
      <text x="32" y="32" font-family="Inter, -apple-system, sans-serif" font-size="14" font-weight="700" fill="${textColor}" letter-spacing="-0.2">6:01</text>
      <!-- Dynamic Island Pill -->
      <rect x="135" y="10" width="120" height="28" rx="14" fill="${islandFill}"/>
      <circle cx="238" cy="24" r="5" fill="#1C1C1E"/>
      <!-- Cellular, Wifi, Battery -->
      <g transform="translate(315, 20)">
        <!-- Cellular bars -->
        <rect x="0" y="8" width="3" height="4" rx="0.5" fill="${textColor}"/>
        <rect x="4.5" y="6" width="3" height="6" rx="0.5" fill="${textColor}"/>
        <rect x="9" y="3" width="3" height="9" rx="0.5" fill="${textColor}"/>
        <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="${textColor}"/>
        <!-- Wifi icon -->
        <path d="M22 2a11 11 0 0 1 12 0 M24 6a7 7 0 0 1 8 0 M26 9.5a3 3 0 0 1 4 0" stroke="${textColor}" stroke-width="1.6" stroke-linecap="round" fill="none"/>
        <!-- Battery frame & fill -->
        <rect x="38" y="1" width="22" height="11" rx="3" stroke="${textColor}" stroke-width="1.2" fill="none"/>
        <rect x="40" y="3" width="15" height="7" rx="1.5" fill="${textColor}"/>
        <path d="M61 4.5v4" stroke="${textColor}" stroke-width="1.2" stroke-linecap="round"/>
      </g>
    </g>
  `;
}

function renderHomeIndicator(isDark = false) {
  const fill = isDark ? '#FFFFFF' : '#292824';
  return `
    <!-- iOS Home Indicator -->
    <rect x="125" y="830" width="140" height="5" rx="2.5" fill="${fill}" opacity="0.8"/>
  `;
}

function renderPhoneFrame(x, y, title, screenId, badgeType, contentSvg) {
  const badgeColor = badgeType === 'CONFIRMED' ? '#15803D' : badgeType === 'PROPOSED' ? '#D97706' : '#6B7280';
  const clipId = `clip_${screenId.replace(/[^a-zA-Z0-9]/g, '_')}`;

  return `
    <g transform="translate(${x}, ${y})">
      <!-- Title & Specification Header -->
      <g transform="translate(0, -32)">
        <rect x="0" y="0" width="70" height="20" rx="4" fill="${badgeColor}"/>
        <text x="35" y="14" font-family="Inter, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">${badgeType}</text>
        <text x="80" y="15" font-family="Inter, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#292824">${screenId} — ${title}</text>
      </g>

      <!-- Canonical Phone Bezel & Canvas -->
      <defs>
        <clipPath id="${clipId}">
          <rect x="0" y="0" width="390" height="844" rx="40"/>
        </clipPath>
        <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#292824" flood-opacity="0.10"/>
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#292824" flood-opacity="0.05"/>
        </filter>
      </defs>

      <!-- Drop Shadow & Frame Outline -->
      <rect x="0" y="0" width="390" height="844" rx="40" fill="#FFFFFF" filter="url(#phoneShadow)" stroke="#E5E0D8" stroke-width="2"/>

      <!-- Clipped Screen Content -->
      <g clip-path="url(#${clipId})">
        ${contentSvg}
      </g>
    </g>
  `;
}

// 2-Option Floating Bottom Navigation Dock (Matching user's exact specification!)
function renderBottomDock({ active = 'Delivery' } = {}) {
  const isDelivery = active === 'Delivery';
  const isHistory = active === 'History';

  return `
    <!-- Floating Bottom Navigation Dock (2 Options: Delivery & History) -->
    <g id="BottomDock" transform="translate(45, 754)">
      <!-- Dock Pill Container with Soft Luxury Shadow -->
      <rect x="0" y="0" width="300" height="58" rx="29" fill="#1C1B19" filter="url(#dockShadow)"/>
      
      <!-- Sparkle / AI Pill Accent on Left -->
      <g transform="translate(14, 15)">
        <circle cx="14" cy="14" r="14" fill="#32302C"/>
        ${renderIcon('sparkles', { x: 5, y: 5, size: 18, color: '#F59E0B', strokeWidth: 2 })}
      </g>

      <!-- Segmented Delivery Tab -->
      <g transform="translate(68, 8)">
        ${isDelivery ? `
          <rect x="0" y="0" width="108" height="42" rx="21" fill="#D93B18"/>
          ${renderIcon('bike', { x: 14, y: 11, size: 20, color: '#FFFFFF', strokeWidth: 2.2 })}
          <text x="42" y="26" font-family="Inter, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Delivery</text>
        ` : `
          ${renderIcon('bike', { x: 14, y: 11, size: 20, color: '#A8A49C', strokeWidth: 1.8 })}
          <text x="42" y="26" font-family="Inter, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#A8A49C">Delivery</text>
        `}
      </g>

      <!-- Segmented History Tab -->
      <g transform="translate(182, 8)">
        ${isHistory ? `
          <rect x="0" y="0" width="104" height="42" rx="21" fill="#D93B18"/>
          ${renderIcon('shopping-bag', { x: 14, y: 11, size: 20, color: '#FFFFFF', strokeWidth: 2.2 })}
          <text x="42" y="26" font-family="Inter, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">History</text>
        ` : `
          ${renderIcon('shopping-bag', { x: 14, y: 11, size: 20, color: '#A8A49C', strokeWidth: 1.8 })}
          <text x="42" y="26" font-family="Inter, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#A8A49C">History</text>
        `}
      </g>
    </g>
  `;
}

// Floating Sticky Cart Bar (Directly matching user's reference screenshots 2 & 3!)
function renderStickyCartBar({
  dishImage = 'truffle_pizza.jpg',
  restaurantName = 'Crust & Q — Downtown Oven',
  menuLinkText = 'View Menu',
  cartPrice = '$19.50',
  itemCount = '1 item'
} = {}) {
  const base64 = getBase64Image(dishImage);

  return `
    <!-- Floating Sticky Cart Bar -->
    <g id="StickyCartBar" transform="translate(16, 696)">
      <!-- Pill Container with Warm Charcoal / Dark Surface -->
      <rect x="0" y="0" width="358" height="50" rx="25" fill="#1E1D1B" filter="url(#cartShadow)"/>
      
      <!-- Mini Food Thumbnail -->
      <g transform="translate(8, 7)">
        <defs>
          <clipPath id="cartThumbClip">
            <circle cx="18" cy="18" r="18"/>
          </clipPath>
        </defs>
        <circle cx="18" cy="18" r="18" fill="#3D3A36"/>
        ${base64 ? `<image href="${base64}" x="0" y="0" width="36" height="36" preserveAspectRatio="xMidYMid slice" clip-path="url(#cartThumbClip)"/>` : ''}
      </g>

      <!-- Restaurant & Menu Link -->
      <text x="52" y="23" font-family="Inter, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">${restaurantName}</text>
      <g transform="translate(52, 28)">
        <text x="0" y="11" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#E85B42">${menuLinkText}</text>
        ${renderIcon('chevron-right', { x: 60, y: 2, size: 10, color: '#E85B42', strokeWidth: 2 })}
      </g>

      <!-- Red Action Button: "View Cart • 1 item" -->
      <g transform="translate(210, 7)">
        <rect x="0" y="0" width="112" height="36" rx="18" fill="#D93B18"/>
        <text x="56" y="22" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">View Cart • ${itemCount}</text>
      </g>

      <!-- Dismiss '✕' Button -->
      <g transform="translate(328, 17)">
        <circle cx="8" cy="8" r="8" fill="#2E2C28"/>
        ${renderIcon('x', { x: 3, y: 3, size: 10, color: '#A8A49C', strokeWidth: 2 })}
      </g>
    </g>
  `;
}

module.exports = {
  TOKENS,
  getBase64Image,
  renderStatusBar,
  renderHomeIndicator,
  renderPhoneFrame,
  renderBottomDock,
  renderStickyCartBar
};
