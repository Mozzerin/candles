# Ads & Tracking Plan — Emma's Lab

## Status: Pending implementation
Needs: GA4 Measurement ID (`G-XXXXXXXXXX`) + Meta Pixel ID before code changes.

---

## Step 1 — Analytics setup (before spending on ads)

### Google Analytics 4
- Create property at analytics.google.com
- Add GA4 snippet to `index.html` `<head>`
- Fire conversion event in `emailjs.send().then()` callback:
  ```js
  gtag('event', 'purchase', { currency: 'CHF', value: cartTotal });
  ```

### Meta Pixel
- Create at business.facebook.com → Events Manager
- Add pixel base code to `index.html`
- Fire in same callback:
  ```js
  fbq('track', 'Lead', { currency: 'CHF', value: cartTotal });
  ```

---

## Step 2 — Events to track

| Event | Trigger | Purpose |
|---|---|---|
| `page_view` | Auto (GA4) | Traffic volume |
| `view_item` | Product modal open | Product interest |
| `add_to_cart` | `addToCart()` call | Funnel start |
| `begin_checkout` | `openCart()` call | Cart open rate |
| `purchase` / `Lead` | Successful EmailJS send | Main conversion |

---

## Step 3 — UTM parameters on every ad

All ad URLs must include UTM tags:
```
https://emmas-lab.ch/?utm_source=google&utm_medium=cpc&utm_campaign=party-box&utm_content=unicorn&lang=de
```
Without UTMs, GA4 shows ad traffic as "direct".

---

## Step 4 — Fix before spending on ads

1. **Testimonials** — add 2-3 customer quotes to the landing page (cold traffic converts poorly without social proof)
2. **OG image bug** — `og-image` meta tag is currently empty; fix so Meta ad previews show the product photo
3. **WhatsApp button** — add to contact section (`https://wa.me/41782562952`); Swiss mobile users convert better via WhatsApp than forms

---

## Step 5 — Campaign structure

### Google Search (start here)
Target high-intent keywords by language:
- DE: `Malset Kinder Geburtstag Schweiz`, `Gipsfigur bemalen Kinder`
- FR: `kit peinture enfant anniversaire Suisse`
- EN: `painting kit kids party Switzerland`

### Meta (Facebook/Instagram)
- Audience: parents of kids 3-10, Switzerland, broad interests
- Creative: Party Box flat-lay photo, price callout (CHF 4.50/kit)
- Retarget site visitors with individual kit products

### Budget
Start CHF 10-15/day split between Google and Meta. Wait 7-14 days before optimizing.

---

## Step 6 — What to review after 2 weeks

- GA4: which keywords convert, bounce rate by language, add-to-cart → purchase funnel drop-off
- Meta: CPM, CTR, cost per Lead
- Adjust bids toward DE language (largest Swiss market)
