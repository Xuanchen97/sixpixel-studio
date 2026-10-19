// Renders tools/reel/lantern-reel.html to assets/video/lantern-reel.{mp4,webm} and a poster.
// Usage (from the repo root): node tools/reel/render.js
// Needs Playwright (Chromium) and ffmpeg on PATH.
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..', '..');
const FPS = 30, SECONDS = 15;

(async () => {
  const frames = fs.mkdtempSync(path.join(os.tmpdir(), 'reel-'));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + path.join(__dirname, 'lantern-reel.html'));
  await page.evaluate(() => document.fonts.ready);
  for (let i = 0; i < FPS * SECONDS; i++) {
    await page.evaluate(t => window.render(t), i / FPS);
    await page.screenshot({ path: path.join(frames, `f${String(i).padStart(4, '0')}.png`) });
  }
  await browser.close();

  const input = ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(frames, 'f%04d.png')];
  const out = p => path.join(ROOT, p);
  fs.mkdirSync(out('assets/video'), { recursive: true });
  fs.mkdirSync(out('assets/img'), { recursive: true });
  execFileSync('ffmpeg', [...input, '-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out('assets/video/lantern-reel.mp4')]);
  execFileSync('ffmpeg', [...input, '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '50', '-row-mt', '1', out('assets/video/lantern-reel.webm')]);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', path.join(frames, 'f0420.png'), '-vf', 'scale=540:-1', '-q:v', '80', out('assets/img/lantern-reel-poster.webp')]);
  fs.rmSync(frames, { recursive: true, force: true });
  console.log('done');
})();
