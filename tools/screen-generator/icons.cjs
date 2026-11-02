const fs = require('fs');
const path = require('path');

const ICON_DIR = path.resolve(__dirname, '../../node_modules/.pnpm/lucide-static@1.64.0/node_modules/lucide-static/icons');

const iconCache = {};

function getIconInner(name) {
  if (iconCache[name]) return iconCache[name];
  const filePath = path.join(ICON_DIR, `${name}.svg`);
  if (!fs.existsSync(filePath)) {
    console.warn(`Icon not found: ${name}`);
    return '';
  }
  const content = fs.readFileSync(filePath, 'utf8');
  // Strip outer <svg...> and </svg> tags and license comment
  const inner = content
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim();
  iconCache[name] = inner;
  return inner;
}

function renderIcon(name, { x = 0, y = 0, size = 20, color = '#292824', strokeWidth = 2, fill = 'none' } = {}) {
  const inner = getIconInner(name);
  if (!inner) return '';
  const scale = (size / 24).toFixed(4);
  return `<g transform="translate(${x}, ${y}) scale(${scale})" stroke="${color}" stroke-width="${strokeWidth}" fill="${fill}" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`;
}

// Pure SVG 5-point star rating vector
function renderStar({ x = 0, y = 0, size = 14, color = '#15803D', fill = '#15803D' } = {}) {
  const scale = (size / 24).toFixed(4);
  return `<g transform="translate(${x}, ${y}) scale(${scale})" stroke="${color}" stroke-width="1.5" fill="${fill}" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </g>`;
}

// Pure SVG lightning bolt vector
function renderLightning({ x = 0, y = 0, size = 14, color = '#D97706', fill = '#D97706' } = {}) {
  const scale = (size / 24).toFixed(4);
  return `<g transform="translate(${x}, ${y}) scale(${scale})" stroke="${color}" stroke-width="1.5" fill="${fill}" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </g>`;
}

module.exports = {
  getIconInner,
  renderIcon,
  renderStar,
  renderLightning
};
