/* ── Analytics: GA4 + Meta Pixel ───────────────────────────────────────────
   Replace the two IDs below with your real values before going live.
   GA4:  Google Analytics 4 → Admin → Data Streams → Measurement ID (G-…)
   Meta: Meta Business → Events Manager → Pixel → Pixel ID
──────────────────────────────────────────────────────────────────────────── */
const GA4_ID        = 'G-FS5JXS3RQ8';
const META_PIXEL_ID = '1389010873396233';
const GOOGLE_ADS_ID = 'AW-18465817528';

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
  gtag('config', GOOGLE_ADS_ID);
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
  // If a product card was auto-opened (e.g. ?product=... ad link) before consent
  // was given, view_item never fired for it — catch up now that tracking is live.
  if (typeof pdProductId !== 'undefined' && pdProductId) {
    const product = PRODUCTS.find(p => p.id === pdProductId);
    if (product) trackViewContent(product);
  }
  // Catalog cards already on screen never re-trigger the observer — let the page re-register it.
  if (typeof window.onAnalyticsReady === 'function') window.onAnalyticsReady();
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
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'flex';
    else document.addEventListener('DOMContentLoaded', () => {
      const b = document.getElementById('cookie-banner');
      if (b) b.style.display = 'flex';
    });
  }
}

/* ── Event helpers ──────────────────────────────────────────────────────── */
/* GA4 recommended e-commerce events, so the standard Monetization reports fill in:
   view_item_list → select_item → view_item → add_to_cart / remove_from_cart →
   view_cart → begin_checkout → purchase. Meta Pixel only gets its existing events. */
function _gaEvent(name, params) {
  if (analyticsLoaded && window.gtag) gtag('event', name, params);
}

function _enName(product) {
  return (product.translations.en || product.translations[Object.keys(product.translations)[0]]).name;
}

/* The cart stores the scent label in the visitor's language; report it in English
   so one scent is one row in GA. Blog pages also load config.js, but guard anyway. */
function _enScent(label) {
  if (!label) return undefined;
  if (typeof CONFIG === 'undefined' || !CONFIG.candleScents) return label;
  const s = CONFIG.candleScents.find(x => x.id === label || Object.values(x).includes(label));
  return s ? s.en : label;
}

function _gaItem(product, extra = {}) {
  const item = {
    item_id:       product.id,
    item_name:     _enName(product),
    item_category: product.category,
    price:         product.price,
    quantity:      extra.quantity || 1,
  };
  const variant = _enScent(extra.scent);
  if (variant)                    item.item_variant   = variant;
  if (extra.index !== undefined)  item.index          = extra.index;
  if (extra.listName)             item.item_list_name = extra.listName;
  return item;
}

function _cartItems(cart) {
  return cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    return product ? _gaItem(product, { quantity: item.qty, scent: item.scent }) : null;
  }).filter(Boolean);
}

function _itemsValue(items) {
  return items.reduce((s, i) => s + (i.price || 0) * i.quantity, 0);
}

/* Catalog impressions: index.html reports cards that were actually on screen.
   Batched for 1 s; flushed early when the tab is hidden so nothing is lost. */
let _listQueue = [];
let _listTimer = null;
function _flushItemList() {
  clearTimeout(_listTimer);
  _listTimer = null;
  if (!_listQueue.length) return;
  const byList = {};
  _listQueue.forEach(i => (byList[i.item_list_name] = byList[i.item_list_name] || []).push(i));
  _listQueue = [];
  Object.keys(byList).forEach(list =>
    _gaEvent('view_item_list', { item_list_id: list, item_list_name: list, items: byList[list] }));
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') _flushItemList();
});

function trackItemListView(product, listName, index) {
  if (!analyticsLoaded) return false;
  _listQueue.push(_gaItem(product, { listName, index }));
  if (!_listTimer) _listTimer = setTimeout(_flushItemList, 1000);
  return true;
}

function trackSelectItem(product, listName, index) {
  _gaEvent('select_item', {
    item_list_id:   listName,
    item_list_name: listName,
    items: [_gaItem(product, { listName, index })],
  });
}

function trackViewContent(product) {
  if (!analyticsLoaded) return;
  if (window.fbq) fbq('track', 'ViewContent', {
    content_ids:  [product.id],
    content_name: _enName(product),
    content_type: 'product',
    value:        product.price,
    currency:     'CHF',
  });
  _gaEvent('view_item', { currency: 'CHF', value: product.price, items: [_gaItem(product)] });
}

function trackAddToCart(product, quantity = 1, scent = null) {
  if (!analyticsLoaded) return;
  const value = product.price * quantity;
  if (window.fbq) fbq('track', 'AddToCart', {
    content_ids:  [product.id],
    content_name: _enName(product),
    content_type: 'product',
    value,
    currency:     'CHF',
  });
  _gaEvent('add_to_cart', { currency: 'CHF', value, items: [_gaItem(product, { quantity, scent })] });
}

/* cartLines: [{ productId, qty, scent }] — the lines (or part of a line) removed. */
function trackRemoveFromCart(cartLines) {
  const items = _cartItems(cartLines);
  if (items.length) _gaEvent('remove_from_cart', { currency: 'CHF', value: _itemsValue(items), items });
}

function trackViewCart(cart, value) {
  if (!cart.length) return;
  _gaEvent('view_cart', { currency: 'CHF', value, items: _cartItems(cart) });
}

function trackContact() {
  if (!analyticsLoaded) return;
  if (window.fbq) fbq('track', 'Contact');
  _gaEvent('generate_lead');
}

/* Order request = cart submitted via the EmailJS form (no online payment).
   begin_checkout = first interaction with the request form, once per cart. */
let _checkoutTracked = false;

function resetCheckoutTracking() { _checkoutTracked = false; }

function trackInitiateCheckout(cart, value) {
  if (!analyticsLoaded || _checkoutTracked || !cart.length) return;
  _checkoutTracked = true;
  const items = _cartItems(cart);
  if (window.fbq) fbq('track', 'InitiateCheckout', {
    content_ids: items.map(i => i.item_id),
    contents:    items.map(i => ({ id: i.item_id, quantity: i.quantity })),
    content_type: 'product',
    num_items:   items.reduce((s, i) => s + i.quantity, 0),
    value,
    currency:    'CHF',
  });
  _gaEvent('begin_checkout', { currency: 'CHF', value, items });
}

function trackPurchase(cart, value) {
  if (!analyticsLoaded) return;
  _checkoutTracked = false;
  const items = _cartItems(cart);
  if (window.fbq) fbq('track', 'Purchase', {
    content_ids: items.map(i => i.item_id),
    contents:    items.map(i => ({ id: i.item_id, quantity: i.quantity })),
    content_type: 'product',
    num_items:   items.reduce((s, i) => s + i.quantity, 0),
    value,
    currency:    'CHF',
  });
  _gaEvent('purchase', {
    transaction_id: 'ord-' + Date.now(),
    currency: 'CHF',
    value,
    items,
  });
}

/* ── Blog navigation ────────────────────────────────────────────────────── */
/* blog_click:   any click on a link to /blog… (where on the page: header, mobile_nav, footer, content).
   blog_to_shop: on a blog page, a click on a link back to the shop.
   Only same-site paths are sent (no query, no hash, never mailto:/tel:).
   Needs GA4 custom dimensions link_location, from_page, article. */
document.addEventListener('click', e => {
  if (!analyticsLoaded) return;
  const a = e.target.closest && e.target.closest('a[href]');
  if (!a) return;
  let url;
  try { url = new URL(a.getAttribute('href'), location.href); } catch (_) { return; }
  if (url.origin !== location.origin) return;
  const area = a.closest('header, #mobile-nav, footer');
  const link_location = !area ? 'content' : area.id === 'mobile-nav' ? 'mobile_nav' : area.tagName.toLowerCase();
  const onBlog = location.pathname.startsWith('/blog');
  if (url.pathname.startsWith('/blog')) {
    _gaEvent('blog_click', { link_url: url.pathname, link_location, from_page: location.pathname });
  } else if (onBlog && (url.pathname === '/' || url.pathname === '/index.html')) {
    _gaEvent('blog_to_shop', { link_url: url.pathname, link_location, article: location.pathname });
  }
}, true);
