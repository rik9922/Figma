const fs = require('fs');
const path = require('path');
const { renderPhoneFrame, TOKENS } = require('./components.cjs');
const {
  renderScreen_ONB01,
  renderScreen_AUTH01,
  renderScreen_GUEST01,
  renderScreen_HOME01,
  renderScreen_LOC01
} = require('./screens.cjs');
const {
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
} = require('./screens-part2.cjs');

const OUTPUT_DIR = path.resolve(__dirname, '../../projects/crust-and-q/assets/generated/artboards');

function wrapArtboardSvg({ width, height, title, subtitle, content }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#292824" flood-opacity="0.06"/>
    </filter>
    <filter id="btnShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#D93B18" flood-opacity="0.25"/>
    </filter>
    <filter id="dockShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.30"/>
    </filter>
    <filter id="cartShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Artboard Background & Border -->
  <rect width="${width}" height="${height}" rx="24" fill="#FAF7F2" stroke="#EAE3D6" stroke-width="2"/>

  <!-- Artboard Master Header -->
  <g transform="translate(40, 48)">
    <circle cx="16" cy="16" r="16" fill="${TOKENS.primary}"/>
    <path d="M12 21L19 12" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M20 21L13 12" stroke="#FEF08A" stroke-width="2.5" stroke-linecap="round"/>
    <text x="44" y="16" font-family="Manrope, sans-serif" font-size="20" font-weight="900" fill="#292824" letter-spacing="-0.3">${title}</text>
    <text x="44" y="32" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#716E68">${subtitle}</text>
  </g>

  <!-- Canonical Frames Canvas -->
  ${content}
</svg>`;
}

function buildAllArtboards() {
  console.log('Generating production artboards for Crust & Q...');

  // 1. Onboarding & Authentication (3 screens: ONB-01, AUTH-01, GUEST-01)
  const artboard1 = wrapArtboardSvg({
    width: 1320,
    height: 980,
    title: 'CRUST & Q — CUSTOMER ONBOARDING & AUTHENTICATION',
    subtitle: 'Journey 01 • Splash & Sign In, Create Account, and Guest Checkout Intercept Modal',
    content: `
      ${renderPhoneFrame(40, 100, 'Splash & Sign In', 'ONB-01', 'CONFIRMED', renderScreen_ONB01())}
      ${renderPhoneFrame(470, 100, 'Create Account', 'AUTH-01', 'CONFIRMED', renderScreen_AUTH01())}
      ${renderPhoneFrame(900, 100, 'Guest Intercept Modal', 'GUEST-01', 'CONFIRMED', renderScreen_GUEST01())}
    `
  });
  fs.writeFileSync(path.join(OUTPUT_DIR, '01_Customer_Onboarding_Artboard.svg'), artboard1);
  console.log('Built 01_Customer_Onboarding_Artboard.svg');

  // 2. Home Hub & Location (2 screens: HOME-01, LOC-01)
  const artboard2 = wrapArtboardSvg({
    width: 920,
    height: 980,
    title: 'CRUST & Q — MASTER HOME DELIVERY HUB & LOCATION MODAL',
    subtitle: 'Journey 02 • Master Hub with 5-Dot Carousel, 3D Plated Categories, 2 Recommended Rows, 2-Tab Floating Dock, and Address Bottom Sheet',
    content: `
      ${renderPhoneFrame(40, 100, 'Master Home Delivery Hub', 'HOME-01', 'CONFIRMED', renderScreen_HOME01())}
      ${renderPhoneFrame(470, 100, 'Address Selection Bottom Sheet', 'LOC-01', 'CONFIRMED', renderScreen_LOC01())}
    `
  });
  fs.writeFileSync(path.join(OUTPUT_DIR, '02_Home_and_Location_Artboard.svg'), artboard2);
  console.log('Built 02_Home_and_Location_Artboard.svg');

  // 3. Category & Menu (2 screens: MENU-01, CAT-01)
  const artboard3 = wrapArtboardSvg({
    width: 920,
    height: 980,
    title: 'CRUST & Q — FULL RESTAURANT MENU & CATEGORY CATALOG',
    subtitle: 'Journey 03 • Comprehensive Dish Catalog, Steak & BBQ Category View, Quick Filters, and Dish Customization',
    content: `
      ${renderPhoneFrame(40, 100, 'Full Restaurant Menu Catalog', 'MENU-01', 'PROPOSED', renderScreen_MENU01())}
      ${renderPhoneFrame(470, 100, 'Steak & Craft BBQ Exploration', 'CAT-01', 'PROPOSED', renderScreen_CAT01())}
    `
  });
  fs.writeFileSync(path.join(OUTPUT_DIR, '03_Category_and_Menu_Artboard.svg'), artboard3);
  console.log('Built 03_Category_and_Menu_Artboard.svg');

  // 4. Customization & Pizza Builder (2 screens: PIZZA-01, DISH-01)
  const artboard4 = wrapArtboardSvg({
    width: 920,
    height: 980,
    title: 'CRUST & Q — 7-STEP PIZZA BUILDER & DISH CUSTOMIZATION',
    subtitle: 'Journey 04 • Interactive 3D Pizza Builder Stage & Food Item Customization Sheet',
    content: `
      ${renderPhoneFrame(40, 100, '7-Step "Build Your Own Pizza"', 'PIZZA-01', 'CONFIRMED', renderScreen_PIZZA01())}
      ${renderPhoneFrame(470, 100, 'Double Wagyu Burger Customization', 'DISH-01', 'PROPOSED', renderScreen_DISH01())}
    `
  });
  fs.writeFileSync(path.join(OUTPUT_DIR, '04_Customization_and_Pizza_Builder_Artboard.svg'), artboard4);
  console.log('Built 04_Customization_and_Pizza_Builder_Artboard.svg');

  // 5. Cart & Checkout (2 screens: CART-01, CHECK-01)
  const artboard5 = wrapArtboardSvg({
    width: 920,
    height: 980,
    title: 'CRUST & Q — ITEMIZED CART & FINAL CHECKOUT',
    subtitle: 'Journey 05 • Itemized Cart Drawer, Tip Selector Pills, Apple Pay / Card Checkout',
    content: `
      ${renderPhoneFrame(40, 100, 'Itemized Feast Cart', 'CART-01', 'CONFIRMED', renderScreen_CART01())}
      ${renderPhoneFrame(470, 100, 'Payment & Address Checkout', 'CHECK-01', 'PROPOSED', renderScreen_CHECK01())}
    `
  });
  fs.writeFileSync(path.join(OUTPUT_DIR, '05_Cart_and_Checkout_Artboard.svg'), artboard5);
  console.log('Built 05_Cart_and_Checkout_Artboard.svg');

  // 6. Live Google Maps Cartography (2 screens: ORDER-SUCC-01, TRACK-01)
  const artboard6 = wrapArtboardSvg({
    width: 920,
    height: 980,
    title: 'CRUST & Q — LIVE GOOGLE MAPS TRACKING & ORDER CONFIRMATION',
    subtitle: 'Journey 06 • Real Daylight Orlando Lake Eola Cartography, Live Driver GPS Marker & Route Polyline',
    content: `
      ${renderPhoneFrame(40, 100, 'Order Placed Confirmation', 'ORDER-SUCC-01', 'PROPOSED', renderScreen_ORDER_SUCC01())}
      ${renderPhoneFrame(470, 100, 'Live Customer Google Maps Tracking', 'TRACK-01', 'CONFIRMED', renderScreen_TRACK01())}
    `
  });
  fs.writeFileSync(path.join(OUTPUT_DIR, '06_Live_Google_Maps_Cartography_Artboard.svg'), artboard6);
  console.log('Built 06_Live_Google_Maps_Cartography_Artboard.svg');

  // 7. Fulfillment & Driver Ops (4 screens: DRV-DASH-01, DRV-REQ-01, DRV-NAV-01, DRV-COMP-01)
  const artboard7 = wrapArtboardSvg({
    width: 1740,
    height: 980,
    title: 'CRUST & Q — DELIVERY PARTNER OPERATIONAL WORKFLOWS',
    subtitle: 'Operational Journey 07 • Driver Shift Dashboard, 15s Radar Offer, Turn-by-Turn GPS Navigation, Proof of Delivery',
    content: `
      ${renderPhoneFrame(40, 100, 'Driver Shift Dashboard', 'DRV-DASH-01', 'CONFIRMED', renderScreen_DRV_DASH01())}
      ${renderPhoneFrame(460, 100, '15s Radar Offer Modal', 'DRV-REQ-01', 'CONFIRMED', renderScreen_DRV_REQ01())}
      ${renderPhoneFrame(880, 100, 'Turn-by-Turn Navigation HUD', 'DRV-NAV-01', 'CONFIRMED', renderScreen_DRV_NAV01())}
      ${renderPhoneFrame(1300, 100, 'Delivery Proof Camera & Signature', 'DRV-COMP-01', 'PROPOSED', renderScreen_DRV_COMP01())}
    `
  });
  fs.writeFileSync(path.join(OUTPUT_DIR, '07_Fulfillment_and_Driver_Ops_Artboard.svg'), artboard7);
  console.log('Built 07_Fulfillment_and_Driver_Ops_Artboard.svg');

  console.log('All 7 master artboards successfully built!');
}

buildAllArtboards();
