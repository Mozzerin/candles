/* ── Analytics: GA4 + Meta Pixel ───────────────────────────────────────────
   Replace the two IDs below with your real values before going live.
   GA4:  Google Analytics 4 → Admin → Data Streams → Measurement ID (G-…)
   Meta: Meta Business → Events Manager → Pixel → Pixel ID
──────────────────────────────────────────────────────────────────────────── */
const GA4_ID        = 'G-XXXXXXXXXX';      // ← replace
const META_PIXEL_ID = 'XXXXXXXXXXXXXXXX';  // ← replace

let analyticsLoaded = false;

/* ── Loaders ────────────────────────────────────────────────────────────── */
function _loadGA4() {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA4_ID, { anonymize_ip: true });
}

function _loadMetaPixel() {
  /* eslint-disable */
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
}

function initAnalytics() {
  if (analyticsLoaded) return;
  _loadGA4();
  _loadMetaPixel();
  analyticsLoaded = true;
}

/* ── Consent ────────────────────────────────────────────────────────────── */
function acceptCookies() {
  localStorage.setItem('cookie_consent', 'accepted');
  document.getElementById('cookie-banner').style.display = 'none';
  initAnalytics();
}

function declineCookies() {
  localStorage.setItem('cookie_consent', 'declined');
  document.getElementById('cookie-banner').style.display = 'none';
}

function checkConsent() {
  const consent = localStorage.getItem('cookie_consent');
  if (consent === 'accepted') {
    initAnalytics();
  } else if (consent !== 'declined') {
    document.getElementById('cookie-banner').style.display = 'flex';
  }
}

/* ── Event helpers ──────────────────────────────────────────────────────── */
function trackViewContent(product) {
  if (!analyticsLoaded) return;
  const tr   = product.translations.en || product.translations[Object.keys(product.translations)[0]];
  const name = tr.name;
  if (window.fbq) fbq('track', 'ViewContent', {
    content_ids:  [product.id],
    content_name: name,
    content_type: 'product',
    value:        product.price,
    currency:     'CHF',
  });
  if (window.gtag) gtag('event', 'view_item', {
    currency: 'CHF',
    value:    product.price,
    items: [{ item_id: product.id, item_name: name, price: product.price }],
  });
}

function trackAddToCart(product) {
  if (!analyticsLoaded) return;
  const tr   = product.translations.en || product.translations[Object.keys(product.translations)[0]];
  const name = tr.name;
  if (window.fbq) fbq('track', 'AddToCart', {
    content_ids:  [product.id],
    content_name: name,
    content_type: 'product',
    value:        product.price,
    currency:     'CHF',
  });
  if (window.gtag) gtag('event', 'add_to_cart', {
    currency: 'CHF',
    value:    product.price,
    items: [{ item_id: product.id, item_name: name, price: product.price }],
  });
}

function trackContact() {
  if (!analyticsLoaded) return;
  if (window.fbq) fbq('track', 'Contact');
  if (window.gtag) gtag('event', 'generate_lead');
}
