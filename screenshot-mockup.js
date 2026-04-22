const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 }, deviceScaleFactor: 2 });
  const page = await context.newPage();
  await page.goto('file:///Users/hui_1/Desktop/%E5%B7%A5%E4%BD%9C%E5%B0%88%E6%A1%88/Signsbeat/Signsbeat%20Product%20Architecture/redesign-sprint6-biometric-detail-2026-04-22.html');
  await page.waitForTimeout(500);
  const el = await page.locator('.mockup-canvas').first();
  await el.screenshot({ path: '/Users/hui_1/Desktop/工作專案/Signsbeat/Signsbeat Product Architecture/redesign-mockup-zoom.png' });
  await browser.close();
  console.log('done');
})();
