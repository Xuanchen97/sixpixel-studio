# Six Pixel

Studio site and demo work for **Six Pixel** — a customer-growth studio for Toronto local businesses: growth audits (website, SEO, AI search / GEO, Google Maps, reviews, social), fixes, social content and short promo videos.

Live (after enabling GitHub Pages): https://xuanchen97.github.io/sixpixel-studio/

## What's here

| Path | What it is |
|---|---|
| `index.html`, `css/`, `js/` | The studio site (plain HTML/CSS/JS, no build step) |
| `demos/auto/` | Demo: auto repair — price ranges, online booking, promo reel |
| `demos/furniture/` | Demo: furniture showroom — products with sale prices, room filters, promo reel |
| `demos/saltwick/` | Demo: seasonal bistro — reservations, weekly menu, private dining |
| `demos/lantern/` | Demo: dumpling counter — ordering, dietary filters, promo reel |
| `demos/fernwood/` | Demo: bakery — live bake schedule, cake pre-orders, allergens |
| `assets/video/*-reel.*` | 15-second 9:16 promo reels for each demo (MP4 + WebM) |
| `tools/reel/` | Reel engine + per-demo configs + renderer (HTML animation → Playwright → FFmpeg) |
| `tools/og.html` | Source for `assets/og-image.png` |
| `docs/TOOLKIT.md` | Curated free/open-source tools for sites, video and SEO/GEO, with licence notes |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Search and AI-assistant discovery files |

All five demo businesses are **fictional**. Demo pages carry `noindex` so made-up businesses never show up in Google or Maps results, but they keep full `AutoRepair`/`FurnitureStore`/`Restaurant`/`Bakery` structured data so you can show clients what it looks like.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish with GitHub Pages

Repository → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
The site appears at `https://xuanchen97.github.io/sixpixel-studio/` within a minute or two.

If you later buy a domain (e.g. `sixpixel.ca`), add it under the same Pages settings and replace `https://xuanchen97.github.io/sixpixel-studio/` in `index.html`, `robots.txt`, `sitemap.xml` and `llms.txt`.

## Regenerate media

```bash
node tools/reel/render.js auto        # or furniture, saltwick, fernwood, lantern
# needs Playwright (Chromium) + ffmpeg
```

## Before going live with real clients

- Replace the contact email in `index.html` / `llms.txt` with a studio address.
- Check business-name availability (Ontario Business Registry / NUANS, CIPO trademarks) and buy the domain.
- Create a Google Business Profile for Six Pixel (service-area business, Toronto).

## Licences

Code: yours. Fonts in `assets/fonts/` are SIL Open Font License 1.1 (see `assets/fonts/LICENSE.txt`).
