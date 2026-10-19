// Oak & Ash Home (fictional) — seasonal sale / product promo
window.REEL = {
  disclaimer: 'Concept demo by Six Pixel · fictional business',
  fonts: [{ family: 'Fraunces', url: '../../assets/fonts/fraunces.woff2' }, { family: 'Instrument Sans', url: '../../assets/fonts/instrument-sans.woff2', weight: '400 700' }],
  theme: { font: 'Instrument Sans', display: 'Fraunces', fg: '#232120' },
  scenes: [
    { type: 'hook', dur: 2.8, bg: '#ece4d6', lines: [{ text: 'Your living room,', size: 130 }, { text: '<i>finally finished.</i>', size: 150, color: '#c0643f' }], top: 700 },
    { type: 'visual', dur: 3.4, bg: '#6b7350', fg: '#f6f1e7', caption: 'The Harbour sofa', sub: 'Solid oak frame · 3 linen colours', wobble: false,
      svg: '<svg width="820" height="520" viewBox="0 0 410 260"><rect x="40" y="70" width="330" height="110" rx="34" fill="#e7dcc8"/><rect x="20" y="120" width="80" height="90" rx="30" fill="#d8c9ae"/><rect x="310" y="120" width="80" height="90" rx="30" fill="#d8c9ae"/><rect x="70" y="140" width="270" height="70" rx="20" fill="#efe6d4"/><line x1="205" y1="145" x2="205" y2="205" stroke="#cdbb9b" stroke-width="4"/><g fill="#3a2d22"><rect x="70" y="210" width="14" height="34" rx="4"/><rect x="326" y="210" width="14" height="34" rx="4"/></g><rect x="120" y="40" width="70" height="60" rx="16" fill="#c0643f" opacity=".9"/></svg>' },
    { type: 'list', dur: 3.8, bg: '#ece4d6', title: 'Fall sale picks', titleSize: 130, cardBg: '#fffaf1', cardFg: '#232120', priceColor: '#a24f2e', cardStyle: 'border:4px solid #232120',
      items: [{ title: 'Harbour sofa', price: '<s>$1,890</s>$1,490' }, { title: 'Ash dining table', price: '<s>$1,250</s>$990' }, { title: 'Linen lounge chair', price: '<s>$690</s>$540' }] },
    { type: 'offer', dur: 2.8, bg: '#232120', fg: '#ece4d6', big: 'Free GTA<br>delivery', color: '#e9a27f', size: 180, pill: 'On orders over $999', pillBg: '#ece4d6', pillFg: '#232120', sub: 'Showroom open 7 days' },
    { type: 'end', dur: 2.2, bg: '#c0643f', fg: '#fffaf1', name: 'Oak &amp; Ash Home', nameSize: 120, cta: 'Shop the sale · link in bio', pillBg: '#fffaf1', pillFg: '#232120',
      logo: '<svg width="200" height="220" viewBox="0 0 100 110"><path d="M50 6 C80 30 84 62 50 84 C16 62 20 30 50 6Z" fill="#fffaf1"/><path d="M50 22 V104" stroke="#232120" stroke-width="7" stroke-linecap="round"/><path d="M50 48 L66 36 M50 64 L34 52" stroke="#232120" stroke-width="6" stroke-linecap="round"/></svg>' }
  ]
};
