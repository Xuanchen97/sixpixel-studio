// Fernwood Bakehouse (fictional) — morning bake + cake pre-order promo
window.REEL = {
  disclaimer: 'Concept demo by Six Pixel · fictional business',
  fonts: [{ family: 'DM Serif Display', url: '../../assets/fonts/dm-serif-display.woff2', weight: '400' }, { family: 'DM Sans', url: '../../assets/fonts/dm-sans.woff2' }],
  theme: { font: 'DM Sans', display: 'DM Serif Display', fg: '#4a2c1a' },
  scenes: [
    { type: 'hook', dur: 2.8, bg: '#fbf3e6', lines: [{ text: 'Fresh at', size: 160 }, { text: '7 am.', size: 240, color: '#c98b4b' }], top: 640 },
    { type: 'visual', dur: 3.4, bg: '#f6e3c8', caption: 'Country sourdough', sub: 'Usually sold out by noon', wobble: true,
      svg: '<svg width="760" height="520" viewBox="0 0 380 260"><ellipse cx="190" cy="215" rx="160" ry="20" fill="#e3c9a3"/><path d="M40 190 C40 90 340 90 340 190 Z" fill="#c98b4b"/><path d="M40 190 C40 90 340 90 340 190 Z" fill="url(#g)"/><defs><radialGradient id="g" cx=".4" cy=".2" r=".9"><stop offset="0" stop-color="#e8b878"/><stop offset="1" stop-color="#9c6232" stop-opacity=".6"/></radialGradient></defs><g stroke="#f3d7a9" stroke-width="8" stroke-linecap="round"><path d="M130 120 l30 50"/><path d="M185 108 l30 56"/><path d="M240 120 l26 46"/></g></svg>' },
    { type: 'list', dur: 3.8, bg: '#4a2c1a', fg: '#fbf3e6', title: "Today's bake", titleSize: 130, cardBg: '#fbf3e6', cardFg: '#4a2c1a', priceColor: '#a8662c',
      items: [{ title: 'Croissants', price: '8:00' }, { title: 'Cardamom buns', price: '9:30' }, { title: 'Focaccia', price: '11:00' }] },
    { type: 'offer', dur: 2.8, bg: '#6f7f52', fg: '#fbf3e6', big: 'Cake<br>pre-orders<br>open.', size: 160, pill: 'Order 72 hours ahead', pillBg: '#fbf3e6', pillFg: '#4a2c1a' },
    { type: 'end', dur: 2.2, bg: '#fbf3e6', name: 'Fernwood Bakehouse', nameSize: 92, cta: 'Pre-order · link in bio', pillBg: '#4a2c1a', pillFg: '#fbf3e6',
      logo: '<svg width="220" height="220" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#f6e3c8"/><path d="M22 62 C22 34 78 34 78 62 Z" fill="#c98b4b"/><g stroke="#f3d7a9" stroke-width="4" stroke-linecap="round"><path d="M40 46 l6 10M52 44 l6 12"/></g></svg>' }
  ]
};
