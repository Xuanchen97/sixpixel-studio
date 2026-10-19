// Renders a promo reel to assets/video/<name>-reel.{mp4,webm} + assets/img/<name>-reel-poster.webp
// Usage (from repo root):  node tools/reel/render.js auto
//   name = a config in tools/reel/configs/ (engine), or "lantern" (hand-built lantern-reel.html)
// Needs Playwright (Chromium) and ffmpeg on PATH.
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path'), os = require('os');

const name = process.argv[2] || 'auto';
const ROOT = path.resolve(__dirname, '..', '..');
const FPS = 30;
const url = name === 'lantern'
  ? 'file://' + path.join(__dirname, 'lantern-reel.html')
  : 'file://' + path.join(__dirname, 'engine.html') + '?c=' + encodeURIComponent(name);

(async () => {
  const frames = fs.mkdtempSync(path.join(os.tmpdir(), 'reel-'));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
  const duration = await page.evaluate(() => window.REEL_DURATION || 15);
  const total = Math.round(duration * FPS);
  for (let i = 0; i < total; i++) {
    await page.evaluate(t => window.render(t), i / FPS);
    await page.screenshot({ path: path.join(frames, `f${String(i).padStart(4, '0')}.png`) });
  }
  await browser.close();

  const out = p => path.join(ROOT, p);
  const input = ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(frames, 'f%04d.png')];
  fs.mkdirSync(out('assets/video'), { recursive: true });
  fs.mkdirSync(out('assets/img'), { recursive: true });
  execFileSync('ffmpeg', [...input, '-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out(`assets/video/${name}-reel.mp4`)]);
  execFileSync('ffmpeg', [...input, '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '50', '-row-mt', '1', out(`assets/video/${name}-reel.webm`)]);
  const posterFrame = String(Math.round(total * 0.5)).padStart(4, '0');
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', path.join(frames, `f${posterFrame}.png`), '-vf', 'scale=540:-1', '-q:v', '80', out(`assets/img/${name}-reel-poster.webp`)]);
  fs.rmSync(frames, { recursive: true, force: true });
  console.log(`${name}: ${duration}s rendered`);
})();
