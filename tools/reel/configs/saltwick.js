// Saltwick Kitchen (fictional) — weekly menu promo
window.REEL = {
  disclaimer: 'Concept demo by Six Pixel · fictional business',
  fonts: [{ family: 'Fraunces', url: '../../assets/fonts/fraunces.woff2' }, { family: 'Instrument Sans', url: '../../assets/fonts/instrument-sans.woff2', weight: '400 700' }],
  theme: { font: 'Instrument Sans', display: 'Fraunces', fg: '#f3ead7' },
  scenes: [
    { type: 'hook', dur: 2.8, bg: '#1f3a2e', lines: [{ text: 'This week', size: 170 }, { text: '<i>at Saltwick</i>', size: 150, color: '#c9a96a' }], top: 720 },
    { type: 'visual', dur: 3.4, bg: '#f3ead7', fg: '#1f3a2e', caption: '<i>Ontario lamb,</i><br>charred leeks', captionSize: 100,
      svg: '<svg width="700" height="700" viewBox="0 0 200 200"><circle cx="100" cy="100" r="92" fill="#1f3a2e"/><circle cx="100" cy="100" r="70" fill="#f3ead7"/><circle cx="100" cy="100" r="70" fill="none" stroke="#c9a96a" stroke-width="2"/><path d="M62 112 q20 -30 46 -16 q22 10 30 -4" stroke="#5c7a3a" stroke-width="10" fill="none" stroke-linecap="round"/><ellipse cx="104" cy="96" rx="26" ry="16" fill="#8a3b2a"/><circle cx="80" cy="84" r="5" fill="#c9a96a"/><circle cx="128" cy="118" r="4" fill="#c9a96a"/></svg>' },
    { type: 'list', dur: 3.8, bg: '#1f3a2e', title: '<i>The menu</i>', titleSize: 140, cardBg: '#f3ead7', cardFg: '#1f3a2e', priceColor: '#8a6d35',
      items: [{ title: 'Squash agnolotti', price: '27' }, { title: 'Lake Erie pickerel', price: '34' }, { title: 'Apple tarte fine', price: '13' }] },
    { type: 'offer', dur: 2.8, bg: '#c9a96a', fg: '#1f3a2e', big: '<i>Book a table</i>', size: 160, pill: 'Wed – Sun · Dundas West', pillBg: '#1f3a2e', pillFg: '#f3ead7' },
    { type: 'end', dur: 2.2, bg: '#1f3a2e', name: '<i>Saltwick Kitchen</i>', nameSize: 130, cta: 'Reserve · link in bio', pillBg: '#c9a96a', pillFg: '#1f3a2e',
      logo: '<svg width="220" height="220" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="none" stroke="#c9a96a" stroke-width="4"/><circle cx="50" cy="50" r="30" fill="none" stroke="#c9a96a" stroke-width="2" stroke-dasharray="3 5"/><text x="50" y="62" text-anchor="middle" font-family="Fraunces" font-style="italic" font-size="34" fill="#f3ead7">S</text></svg>' }
  ]
};
