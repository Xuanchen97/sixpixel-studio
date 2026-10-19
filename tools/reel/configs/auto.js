// Torque & Tread Auto (fictional) — seasonal service promo
window.REEL = {
  disclaimer: 'Concept demo by Six Pixel · fictional business',
  fonts: [{ family: 'Bricolage', url: '../../assets/fonts/bricolage.woff2', weight: '200 800' }],
  theme: { font: 'Bricolage', fg: '#f4f1ea' },
  scenes: [
    { type: 'hook', dur: 2.8, bg: '#16181c', lines: [{ text: 'Hearing<br>that noise?', size: 180 }, { text: "Don't wait<br>for winter.", size: 130, color: '#ff7a1a' }], top: 520 },
    { type: 'visual', dur: 3.4, bg: '#ff7a1a', fg: '#16181c', caption: 'Same-week<br>diagnostics.', wobble: true,
      svg: '<svg width="760" height="560" viewBox="0 0 380 280"><g fill="none" stroke="#16181c" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"><path d="M30 190 L60 120 Q70 100 95 100 L260 100 Q285 100 300 120 L345 170 Q360 180 360 200 L360 220 L30 220 Z" fill="#f4f1ea"/><path d="M95 110 L120 145 L250 145 L275 110"/></g><g fill="#16181c"><circle cx="105" cy="222" r="34"/><circle cx="290" cy="222" r="34"/></g><g fill="#ffd23f"><circle cx="105" cy="222" r="13"/><circle cx="290" cy="222" r="13"/></g><path d="M300 30 l30 30 -18 18 -30 -30 z M282 48 l-60 60" stroke="#16181c" stroke-width="12" stroke-linecap="round" fill="#ffd23f"/></svg>' },
    { type: 'list', dur: 3.8, bg: '#16181c', title: 'Winter-ready<br>in one visit', cardBg: '#f4f1ea', cardFg: '#16181c', priceColor: '#d65a0c', cardStyle: 'box-shadow:14px 14px 0 #ff7a1a',
      items: [{ title: 'Tire swap', price: 'from $79' }, { title: 'Brake inspection', price: 'from $49' }, { title: 'Battery test', price: 'Free' }] },
    { type: 'offer', dur: 2.8, bg: '#ffd23f', fg: '#16181c', big: 'Book online<br>in 60 sec.', size: 170, pill: 'Free multi-point check', pillBg: '#16181c', pillFg: '#ffd23f', sub: 'Scarborough · Mon–Sat' },
    { type: 'end', dur: 2.2, bg: '#16181c', name: 'Torque &amp; Tread', nameSize: 130, cta: 'Book service · link in bio', pillBg: '#ff7a1a', pillFg: '#16181c',
      logo: '<svg width="220" height="220" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#ff7a1a"/><circle cx="50" cy="50" r="18" fill="#16181c"/><g stroke="#16181c" stroke-width="9" stroke-linecap="round"><path d="M50 8v14M50 78v14M8 50h14M78 50h14M20 20l10 10M70 70l10 10M80 20 70 30M30 70 20 80"/></g></svg>' }
  ]
};
