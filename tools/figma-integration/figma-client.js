/**
 * Figma Integration Helper
 * Provides URL parsing, node referencing, and payload formatters
 * for Figma MCP tools:
 * - upload_assets
 * - get_metadata
 * - get_screenshot
 * - generate_diagram
 * - send_code_to_figma
 */

/**
 * Parses any standard Figma file or design URL to extract fileKey and nodeId.
 * Supports /design/ and /file/ URL formats.
 *
 * @param {string} figmaUrl
 * @returns {{ fileKey: string, nodeId: string|null }}
 */
export function parseFigmaUrl(figmaUrl) {
  if (typeof figmaUrl !== "string" || !figmaUrl.trim()) {
    throw new Error("Invalid Figma URL: URL must be a non-empty string.");
  }

  const match = figmaUrl.match(
    /figma\.com\/(?:design|file|board|deck|slides|proto)\/([a-zA-Z0-9_-]+)/,
  );
  if (!match) {
    throw new Error(
      `Invalid Figma URL format: "${figmaUrl}". Expected https://www.figma.com/design/<fileKey>/...`,
    );
  }

  const fileKey = match[1];
  const decoded = decodeURIComponent(figmaUrl);
  const nodeMatch = decoded.match(/node-id=([0-9]+)(?:[-:]([0-9]+))?/);
  let nodeId = null;
  if (nodeMatch) {
    nodeId = nodeMatch[2]
      ? `${nodeMatch[1]}:${nodeMatch[2]}`
      : `${nodeMatch[1]}:0`;
  }

  return { fileKey, nodeId };
}

/**
 * Formats design tokens for export or inspection.
 */
export function formatTokenExport(tokens) {
  return JSON.stringify(tokens, null, 2);
}
