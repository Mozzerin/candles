# Lumos Candles – Single Page Site

A lightweight, accessible single-page React + TypeScript + Vite site for a small candle studio. Includes:

- Hero header with brand image + tagline
- Responsive products table (auto-converts to cards on mobile)
- Creator / founder bio section
- Location section with embedded OpenStreetMap iframe (no API key)
- Contact / order inquiry form (client-side demo – hook up to backend/email service)
- Footer with social links & back-to-top anchor
- Central configuration file for easy adjustments (`src/siteConfig.ts`)

## Quick Start

```bash
npm install
npm run dev
```
Visit: http://localhost:5173 (default Vite port).

## Project Structure

```
public/
  images/                # Placeholder SVG assets (replace freely)
src/
  components/            # Section components + shared styles
    sections.css         # Shared layout + section styling
  siteConfig.ts          # EDIT ME: products, creator, links, map config
  App.tsx                # Assembles the one-page layout
  main.tsx               # React root
```

## Customize Content

All dynamic content is centralized in `src/siteConfig.ts`:

- `products`: Array of product objects `{ id, name, description, price, image, scent, size }`
- `siteMeta`: Brand name, tagline, hero image, social links, contact email
- `creator`: Name, role, bio, photo
- `factoryLocation`: Address lines, coordinates + OSM embed URL
- `currencyFormatter`: Adjust locale / currency once instead of per component

### Adding / Removing Products
Just edit the `products` array. Empty array automatically shows an updating message.

### Replacing Images
Place new files in `public/images/` and update `image` fields / config references. Because they live in `public`, you can reference them with `/images/filename.ext`.

### Changing the Map
Update `factoryLocation.mapEmbedUrl` with an OpenStreetMap export link or switch to a static map provider.

### Social Links
Edit `siteMeta.instagram` / `facebook` / `tiktok` / `email`. Empty links can be set to `''` and you can optionally conditionally render them (future improvement).

## Styling

Global styling lives in:
- `src/components/sections.css`: Layout, tables, forms, footer, utilities
- `src/index.css`: Global resets and typography
- `src/App.css`: Minimal root overrides (legacy template remnants safe to trim further)

Variables (`:root`) + utility classes make adjustments predictable. Dark mode preference is supported through `prefers-color-scheme`. A future enhancement could include a user toggle (see Next Steps below).

## Accessibility Considerations

- Skip link: "Skip to products" improves keyboard navigation.
- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`.
- Descriptive alt text for images (replace with real product alt text for better SEO).
- Table converts to mobile-friendly cards while retaining accessible labeling via `data-label` + generated pseudo headers.
- Form uses semantic controls + status feedback (`role="status"`).
- Smooth scrolling uses `scroll-behavior`; reduced motion honored.

## Contact Form Notes

Currently simulated only (no network request). To integrate with a backend:

1. Replace the `setTimeout` in `ContactSection` with a `fetch('/api/order', { ... })` call.
2. Validate + sanitize on the server.
3. Optionally add a CAPTCHA / anti-spam field (honeypot hidden input).
4. For email delivery, consider services like Resend, Postmark, SendGrid, or AWS SES.

## Deployment

Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.):

```bash
npm run build
# Outputs to dist/
```

Preview locally:
```bash
npm run preview
```

## Performance & Best Practices

- Uses lightweight SVG assets (inline-friendly if desired)
- No additional runtime dependencies beyond React
- Table virtualization unnecessary for small inventory; if >200 products, consider lazy loading or pagination
- Images are currently unoptimized placeholders; replace with properly sized assets

## SEO Enhancements Included

- Updated `<title>` + meta description
- Open Graph + Twitter card tags
- Brand favicon replaced by hero logo

## Extending the Site (Ideas)

| Enhancement | Notes |
|-------------|-------|
| Light/Dark toggle | Add a button toggling a `body.light` class. |
| Persist orders | Add a lightweight backend (Firebase, Supabase, small Express API). |
| Static product JSON | Move products to `/public/products.json` and fetch for CMS-like editing. |
| Form validation | Add inline validation messages & ARIA `aria-invalid` attributes. |
| Analytics | Add privacy-friendly analytics (e.g., Plausible). |
| Schema.org markup | Add product microdata for richer search results. |
| Social icons | Replace text links with accessible SVG icon components. |

## Updating Currency
Change region or currency in `currencyFormatter` inside `siteConfig.ts`.

Example:
```ts
export const currencyFormatter = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });
```

## License / Attribution
This starter is provided as-is; replace placeholder images & text with your brand assets. All generated SVGs are libre to modify.

## Maintenance Checklist
- [ ] Replace placeholder SVGs
- [ ] Update creator bio + photo
- [ ] Adjust map coordinates
- [ ] Add real products + pricing
- [ ] Hook up form backend
- [ ] Add analytics / tracking (optional)

## Internationalization (i18n)

The site now supports English (en), German (de), and French (fr).

Key parts:
- Provider: `I18nProvider` wraps the app in `src/main.tsx`.
- Context hook: `useI18n()` returns `{ locale, setLocale, t, formatCurrency, siteTagline, creatorRole, creatorBio, addressLines }`.
- UI strings: Stored in the `messages` object inside `src/i18n.tsx`.
- Content data: Localized fields (products, creator role/bio, tagline, location label/address) live in `siteConfig.ts`.
- Language switcher: A `<select>` in `Header` updates locale and persists it in `localStorage`.

### Adding a New Locale
1. Add the locale code to `supportedLocales` in `siteConfig.ts`.
2. Provide translations for each product under `products[*].translations[<locale>]`.
3. Add localized values for `siteMeta.tagline`, `creator.role`, `creator.bio`, `factoryLocation.label`, and `factoryLocation.addressLines`.
4. Add a new dictionary entry to `messages` in `i18n.tsx` by copying an existing language block and translating.
5. (Optional) Adjust currency formatting in `currencyFormatterFor()` if needed.

### Referencing Translations in Components
Use `const { t } = useI18n();` and call `t('key')`. For frequently changing content (like product names) rely on the localized product data provided by `localizedProducts(locale)` or `productTranslation(id)`.

### Fallback Behavior
If a key is missing in the active locale, the default locale (en) is used. Missing product translations also fall to English to avoid runtime errors.

### SEO Considerations
Currently, `<title>` and meta description are static (English). For full multi-lingual SEO you can:
- Dynamically adjust `document.title` in an effect when locale changes.
- Inject `<meta name="description">` dynamically per locale.
- Serve pre-rendered pages per locale path (`/de`, `/fr`) if using SSR or a static export strategy.

### Accessibility
Changing the language updates `document.documentElement.lang` so screen readers adapt pronunciation.

### Example Usage Inside a Component
```tsx
import { useI18n } from '../i18n';

function Example() {
  const { t, locale } = useI18n();
  return <p>{t('sections.products.title')} – {locale}</p>;
}
```

## Google Maps Integration

The location section supports Google Maps Embed API with graceful fallback to OpenStreetMap.

Current behavior:
- If `factoryLocation.provider.type === 'google'` AND `VITE_GOOGLE_MAPS_KEY` is present: uses Google Maps embed.
- Otherwise: falls back to the existing OpenStreetMap iframe.

Setup steps:
1. Copy `.env.example` to `.env`.
2. Replace `YOUR_GOOGLE_MAPS_EMBED_API_KEY_HERE` with a valid Maps Embed API key.
3. Restrict the key in Google Cloud Console (HTTP referrers + only Embed API).
4. Restart dev server if running (`npm run dev`).

Environment variable:
```
VITE_GOOGLE_MAPS_KEY=YOUR_KEY_HERE
```

Adjust coordinates / zoom:
- Edit `latitude`, `longitude`, and `provider.zoom` in `factoryLocation` inside `siteConfig.ts`.
- To revert to OpenStreetMap only, set `provider.type` to `'osm'` or remove the key.

Security tip: Never commit your real `.env` file; only `.env.example` should be in version control.

---
Questions or want enhancements? Extend `siteConfig.ts` and create additional sections in `src/components/`.
