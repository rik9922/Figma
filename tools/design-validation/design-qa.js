#!/usr/bin/env node
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "fs";
import path from "path";

/**
 * Mobile Design QA Runner
 * Validates rendered mobile UI against:
 * 1. WCAG 2.1 AA Accessibility Standards (via axe-core)
 * 2. Mobile Touch Target Ergonomics (iOS 44x44pt, Android 48x48dp)
 * 3. Responsive Mobile Viewports (iPhone 16 Pro: 393x852, Android: 412x915)
 * 4. Visual Screenshot Capture & Report Generation
 */
export async function runDesignQA({
  htmlContent,
  filePath,
  outputDir = "./qa-reports",
  device = "ios",
}) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const viewport =
    device === "ios"
      ? {
          width: 393,
          height: 852,
          name: "iPhone 16 Pro (393x852 pt)",
          minTouch: 44,
        }
      : {
          width: 412,
          height: 915,
          name: "Android Pixel (412x915 dp)",
          minTouch: 48,
        };

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });

  const page = await context.newPage();

  if (filePath) {
    const fullPath = path.resolve(filePath);
    await page.goto(`file://${fullPath}`);
  } else if (htmlContent) {
    await page.setContent(htmlContent, { waitUntil: "load" });
  } else {
    await browser.close();
    throw new Error("Either htmlContent or filePath must be provided.");
  }

  // 1. Accessibility Audit via axe-core
  const axeResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  // 2. Touch Target Ergonomics Validation
  const touchTargetAudit = await page.evaluate((minSize) => {
    const interactives = Array.from(
      document.querySelectorAll(
        "button, a, input, select, textarea, [role='button'], [tabindex='0']",
      ),
    );

    return interactives.map((el) => {
      const rect = el.getBoundingClientRect();
      const text = (
        el.innerText ||
        el.getAttribute("aria-label") ||
        el.getAttribute("name") ||
        el.tagName
      ).trim();
      const meetsWidth = rect.width >= minSize;
      const meetsHeight = rect.height >= minSize;
      return {
        tag: el.tagName.toLowerCase(),
        label: text.slice(0, 30),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        passed: meetsWidth && meetsHeight,
        requiredMin: minSize,
      };
    });
  }, viewport.minTouch);

  // 3. Capture Visual Screenshot
  const screenshotPath = path.join(outputDir, `${device}-viewport.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  await browser.close();

  const report = {
    timestamp: new Date().toISOString(),
    device: viewport.name,
    minTouchTargetRequired: `${viewport.minTouch}px`,
    totalInteractives: touchTargetAudit.length,
    failedTouchTargets: touchTargetAudit.filter((t) => !t.passed),
    accessibilityViolations: axeResults.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      description: v.description,
      helpUrl: v.helpUrl,
      nodesCount: v.nodes.length,
    })),
    screenshot: screenshotPath,
  };

  const reportPath = path.join(outputDir, `${device}-qa-report.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  return report;
}

// CLI Execution support
if (process.argv[1] && process.argv[1].endsWith("design-qa.js")) {
  const [,, fileOrHtml, device = "ios", outDir = "./qa-reports"] = process.argv;
  if (!fileOrHtml) {
    console.log("Usage: node design-qa.js <html-file-path> [ios|android] [output-dir]");
    process.exit(0);
  }
  (async () => {
    try {
      const res = await runDesignQA({
        filePath: fileOrHtml,
        device,
        outputDir: outDir,
      });
      console.log(`QA Audit Complete for ${device.toUpperCase()}:`);
      console.log(`- Interactives Checked: ${res.totalInteractives}`);
      console.log(`- Failed Touch Targets: ${res.failedTouchTargets.length}`);
      console.log(`- Accessibility Violations: ${res.accessibilityViolations.length}`);
      console.log(`- Screenshot: ${res.screenshot}`);
    } catch (err) {
      console.error("QA Run failed:", err.message);
      process.exit(1);
    }
  })();
}
