# Six Pixel toolkit — free & open-source resources

A working list of tools you can use for client sites, promo videos and SEO/GEO.
**Always re-check the licence on the project's own page before using it for a paying client** — terms change, and some "open" models have revenue or territory limits.

Last reviewed: October 2026.

## 1. Building sites

| Tool | What it's for | Licence / cost | Notes |
|---|---|---|---|
| Plain HTML/CSS (this repo) | Small, fast sites with no build step | — | What the demo sites use. Easiest to host for free. |
| [Astro](https://astro.build) | Static sites with components | MIT | Good when a client needs many pages. |
| Astro themes [AstroPie](https://astro.build/themes/details/astropie/), [Ombra](https://astro.build/themes/details/ombra/) | Free restaurant starting points | Listed free — **check each repo's LICENSE** | Royale, Tasteful and CRU are paid with single-client/no-resale terms. |
| [HTML5 UP](https://html5up.net) | Ready-made HTML templates | CC BY 3.0 | Free for commercial use, but attribution is required. |
| [Decap CMS](https://decapcms.org) | Let owners edit menu & hours themselves | MIT | Git-based, works with GitHub/Netlify hosting. |
| [Tailwind CSS](https://tailwindcss.com) | Utility CSS | MIT | Optional; the demos use plain CSS. |
| [Fontsource](https://fontsource.org) / Google Fonts | Self-hosted web fonts | Mostly SIL OFL 1.1 | Self-hosting avoids Google Fonts being blocked or slow. |
| [Lucide](https://lucide.dev), [Tabler Icons](https://tabler.io/icons) | Icons | ISC / MIT | |
| GitHub Pages, Netlify, Cloudflare Pages | Hosting | Free tiers | Custom domains supported on all three. |

### Photos

- **Best option: the client's own photos** (food, room, team) — more trustworthy and no licence risk.
- [Unsplash](https://unsplash.com/license) and [Pexels](https://www.pexels.com/license/): free for commercial use, no attribution required. You may not resell unmodified images or build a competing stock service, and there are **no model releases** — avoid recognisable people and logos in client marketing.
- Compress everything: [Squoosh](https://squoosh.app) (Apache-2.0) or [sharp](https://sharp.pixelplumbing.com) (Apache-2.0); serve WebP/AVIF.

## 2. Promo videos

| Tool | What it's for | Licence / cost | Notes |
|---|---|---|---|
| Playwright + [FFmpeg](https://ffmpeg.org) (this repo, `tools/reel/`) | Code-driven motion graphics | Apache-2.0 / LGPL-GPL | How the Lantern Lane reel was made: HTML animation rendered frame by frame. Fully deterministic and brand-consistent. |
| [Remotion](https://www.remotion.dev) | React-based video templates | Free for individuals and companies of up to 3 people; paid Company License for 4+ | Great for reusable templates (menu reels, weekly specials). |
| [Wan 2.x](https://github.com/Wan-Video) | AI text/image-to-video | Apache-2.0 | Most permissive of the major open models; needs a strong GPU or a cloud GPU. |
| [Mochi 1](https://github.com/genmoai/mochi), CogVideoX-2B | AI video | Apache-2.0 | CogVideoX-5B uses a more restrictive licence. |
| HunyuanVideo | AI video | Tencent Hunyuan Community License | Commercial use allowed below a large user threshold; read territory and usage terms. |
| LTX-Video | AI video (some versions with audio) | Lightricks community / open-weights licence | Terms differ by version (revenue thresholds) — check the exact model card. |
| [ComfyUI](https://github.com/comfyanonymous/ComfyUI) | Node-based workflow UI for open models | GPL-3.0 | Run Wan, LTX, etc. locally. |
| [Whisper](https://github.com/openai/whisper) | Auto-captions from voice-over | MIT | Burn captions in — most viewers watch muted. |
| [Piper](https://github.com/rhasspy/piper) | Offline text-to-speech voice-over | MIT | |
| [Kdenlive](https://kdenlive.org) | Video editing | GPL-3.0 | Free alternative to paid editors. |

**Practical workflow per client video:** script with one hook + one call to action → shoot 6–10 phone clips (food close-ups, hands folding, the room) → assemble in Remotion/Kdenlive → add AI-generated b-roll only where it adds something → Whisper captions → export 9:16 (Reels/TikTok/Shorts) and 1:1 → client approval before posting.

**Honesty rule:** don't generate fake food or fake interiors and present them as the real restaurant. Use AI for motion, transitions, backgrounds and editing; keep the dishes real.

## 3. SEO & GEO

| Tool | What it's for | Cost |
|---|---|---|
| [Google Business Profile](https://business.google.com) | The #1 driver of Maps / local-pack visibility | Free |
| [Google Search Console](https://search.google.com/search-console), [Bing Webmaster Tools](https://www.bing.com/webmasters) | Indexing, sitemaps, search queries | Free |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse) / [PageSpeed Insights](https://pagespeed.web.dev) | Speed, accessibility, SEO checks | Free, Apache-2.0 |
| [Unlighthouse](https://unlighthouse.dev) | Lighthouse for every page of a site | MIT |
| [Rich Results Test](https://search.google.com/test/rich-results), [Schema Markup Validator](https://validator.schema.org) | Check structured data | Free |
| [schema.org](https://schema.org) types | `Restaurant`, `Bakery`, `LocalBusiness`, `Menu`, `MenuItem`, `OpeningHoursSpecification` | — |
| [llms.txt](https://llmstxt.org) | Plain-text summary for AI assistants | Open proposal |

### Local SEO checklist for every client

1. Google Business Profile: correct category, hours (incl. holidays), photos, menu link, booking/ordering link.
2. Name, address and phone **identical** on the site, Google, Apple Maps, Yelp and delivery apps.
3. Menu as **text** on the site (not only a PDF or image).
4. `Restaurant` / `LocalBusiness` JSON-LD with address, hours, cuisine, price range, menu.
5. Fast on mobile (Lighthouse performance ≥ 90), images compressed.
6. A short FAQ in plain language (parking, reservations, dietary options) — this is what AI assistants quote.
7. Ask happy customers for Google reviews; reply to reviews.
8. Business name keywords: research suggests keywords in a *real* business name correlate with local rankings, but adding unofficial keywords to a Google listing breaks Google's guidelines — never do that for a client.

## 4. Sources used for this list

- Remotion licence & pricing — https://www.remotion.dev/docs/pricing , https://remotion.dev/license
- Open video model licences (secondary comparisons; verify on model cards) — https://fuser.studio/articles/best-open-source-video-models , https://www.thundercompute.com/blog/best-open-source-ai-video-generation-models
- Unsplash vs Pexels licence comparison — https://licenseorg.com/compare/unsplash-vs-pexels
- Astro restaurant themes — https://astro.build/themes/details/astropie/ , https://astro.build/themes/details/ombra/
- Keywords in business names & local rank (Whitespark) — https://whitespark.ca/research/how-keywords-in-business-names-currently-impact-google-local-pack-rank-and-ai-search/
