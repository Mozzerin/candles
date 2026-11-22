/* ── Season switch: Emma's Lab ─────────────────────────────────────────────
   Change ONE word below to switch the whole site design:
     'christmas' → winter / Christmas look (frosty hero, winter branch, dark footer,
                   Christmas colours, Christmas candles first and badged)
     'autumn'    → the harvest / autumn look (original hero, autumn branch, autumn colours)

   Colours and images per season live in styles.css (:root = autumn,
   :root[data-season="christmas"] = Christmas). Seasonal products are below;
   the badge text is TRANSLATIONS 'badge.season.<season>' in config.js.

   After changing it, also change the ?v= value of season.js in the 8 pages
   (search the project for "season.js?v=") so the CDN serves the new file at once;
   without that the old season can stay visible for up to 24 h.
   ──────────────────────────────────────────────────────────────────────── */
var SEASON = 'christmas';

/* Seasonal products: shown first (in this order) under the default "Featured" sort
   and marked with the season badge; all other products follow in products.js order. */
var SEASON_PRODUCTS = {
  autumn:    [],
  christmas: ['candle-matryoshka', 'candle-mouse-king-red', 'candle-carousel', 'candle-xmas-bauble'],
};

/* Logo per season ('' = the normal logo images/site/logo.webp).
   Swaps every <img src="images/site/logo.webp"> on the page (header, blog). */
var SEASON_LOGO = {
  autumn:    '',
  christmas: 'images/site/logo_winter.webp',
};

SEASON = String(SEASON).trim().toLowerCase();
if (!SEASON_PRODUCTS[SEASON]) SEASON = 'autumn';
document.documentElement.setAttribute('data-season', SEASON);

if (SEASON_LOGO[SEASON]) {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img[src="images/site/logo.webp"]').forEach(function (img) {
      img.src = SEASON_LOGO[SEASON];
    });
  });
}
