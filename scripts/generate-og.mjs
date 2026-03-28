/**
 * Generates public/og-image.jpg using Playwright (already installed as @playwright/test).
 * Run: node scripts/generate-og.mjs
 */
import { chromium } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "../public/og-image.jpg");

// Embed the logo as base64 so it works in the offline Playwright context
let logoBase64 = "";
try {
  const logoBytes = readFileSync(path.join(__dirname, "../public/bg-darkblue-logo.png"));
  logoBase64 = `data:image/png;base64,${logoBytes.toString("base64")}`;
} catch {}

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    overflow: hidden;
    background: #060d1a;
    font-family: -apple-system, 'Segoe UI', system-ui, sans-serif;
    position: relative;
  }

  /* Background grid lines */
  .grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(10, 114, 255, 0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(10, 114, 255, 0.06) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* Glow orbs */
  .orb1 {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(10, 114, 255, 0.18) 0%, transparent 70%);
    top: -120px;
    right: -80px;
  }
  .orb2 {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 229, 157, 0.12) 0%, transparent 70%);
    bottom: -100px;
    left: 200px;
  }

  /* Accent bar */
  .accent-bar {
    position: absolute;
    left: 80px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #0A72FF, #00E59D);
    border-radius: 4px;
  }

  /* Content */
  .content {
    position: absolute;
    left: 112px;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    max-width: 640px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(10, 114, 255, 0.12);
    border: 1px solid rgba(10, 114, 255, 0.3);
    border-radius: 100px;
    padding: 6px 16px;
    width: fit-content;
  }
  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00E59D;
  }
  .badge-text {
    color: #0A72FF;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .heading {
    color: #ffffff;
    font-size: 56px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
  .heading span {
    background: linear-gradient(135deg, #0A72FF, #00E59D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtext {
    color: rgba(255,255,255,0.6);
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
  }

  /* Pills row */
  .pills {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .pill {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 100px;
    padding: 6px 14px;
    color: rgba(255,255,255,0.7);
    font-size: 13px;
    font-weight: 500;
  }

  /* Right panel */
  .right {
    position: absolute;
    right: 80px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .logo-box {
    width: 160px;
    height: 160px;
    background: rgba(10, 114, 255, 0.1);
    border: 1px solid rgba(10, 114, 255, 0.25);
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  .logo-box img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .logo-name {
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
  .logo-name span {
    color: #0A72FF;
  }

  /* Bottom bar */
  .bottom-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #0A72FF, #00E59D, transparent);
  }
</style>
</head>
<body>
  <div class="grid"></div>
  <div class="orb1"></div>
  <div class="orb2"></div>
  <div class="accent-bar"></div>

  <div class="content">
    <div class="badge">
      <div class="badge-dot"></div>
      <span class="badge-text">HR Solutions for Startups</span>
    </div>

    <div class="heading">
      Build Teams That<br/><span>Scale Fast</span>
    </div>

    <div class="subtext">
      Offshore hiring, HR operations &amp; payroll<br/>compliance — all in one place.
    </div>

    <div class="pills">
      <span class="pill">Talent Acquisition</span>
      <span class="pill">Dedicated Offshore Teams</span>
      <span class="pill">HR Operations</span>
      <span class="pill">Payroll &amp; Compliance</span>
    </div>
  </div>

  <div class="right">
    <div class="logo-box">
      ${logoBase64 ? `<img src="${logoBase64}" alt="TalentAccel" />` : `<div style="color:#0A72FF;font-size:42px;font-weight:900;letter-spacing:-2px;">TA</div>`}
    </div>
    <div class="logo-name">Talent<span>Accel</span></div>
    <div style="color:rgba(255,255,255,0.35);font-size:13px;">talentaccel.com</div>
  </div>

  <div class="bottom-bar"></div>
</body>
</html>`;

(async () => {
  console.log("Launching Chromium...");
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.screenshot({ path: outPath, type: "jpeg", quality: 92 });
  await browser.close();
  console.log(`✓ OG image saved to public/og-image.jpg`);
})();
