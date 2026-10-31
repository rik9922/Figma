/**
 * Figma Integration Helper
 * Provides standardized wrappers for interacting with Figma MCP tools:
 * - upload_assets
 * - get_design_context
 * - get_metadata
 * - get_variable_defs
 */

export function parseFigmaUrl(figmaUrl) {
  const match = figmaUrl.match(/figma\.com\/design\/([a-zA-Z0-9]+)/);
  if (!match) {
    throw new Error(`Invalid Figma Design URL: ${figmaUrl}`);
  }
  const fileKey = match[1];
  const nodeMatch = figmaUrl.match(/node-id=([0-9]+)[-:]?([0-9]+)?/);
  const nodeId = nodeMatch ? `${nodeMatch[1]}:${nodeMatch[2] || "0"}` : null;
  return { fileKey, nodeId };
}

export function formatTokenExport(tokens) {
  return JSON.stringify(tokens, null, 2);
}
