// ═══════════════════════════════════════════════════════════════════════
//  SITE CONFIGURATION  —  edit this file to configure the shop
// ═══════════════════════════════════════════════════════════════════════

const CONFIG = {
  siteName:     "Emma's Creative Learning",
  siteUrl:      'https://emmas-creative-learning.ch', // ← YOUR DOMAIN (no trailing slash)
  contactEmail: 'mozzerin@gmail.com',
  phone:        '+41 00 000 00 00',   // ← YOUR PHONE (display format)
  whatsapp:     '41000000000',        // ← digits only, e.g. 41791234567
  instagram:    'emmas_lab_candle',
  currency:     'CHF',

  // SEO — used in <title>, meta description, og:image etc.
  seo: {
    // Default language shown to search engines (what's in the HTML on first load)
    defaultLang: 'en',
    // og:image — absolute URL to a share image (1200×630 px recommended)
    ogImage: 'https://emmas-creative-learning.ch/emma/images/og-cover.jpg',
  },
};

// ═══════════════════════════════════════════════════════════════════════
//  UI TRANSLATIONS  —  strings used in buttons, labels, nav, etc.
//  To add a language: copy one block, change the key, translate strings.
// ═══════════════════════════════════════════════════════════════════════

const TRANSLATIONS = {
  en: {
    'meta.title':       "Emma's Creative Learning | Handmade Plaster Painting Kits – Switzerland",
    'meta.description': 'Handmade plaster painting kits for kids and families in Switzerland. Unicorn & dinosaur sets with paints and brush included. Perfect gift. Order online – CHF 7.',
    'nav.about':    'About',
    'nav.contact':  'Contact',
    'cart.label':   'Cart',
    'cart.title':   'Cart',
    'cart.empty':   'Your cart is empty.',
    'cart.subtotal':'Subtotal',
    'shop.title':   'Shop',
    'cat.all':      'All',
    'cat.unicorn':  'Unicorn',
    'cat.dinosaur': 'Dinosaur',
    'about.title':  "About Emma's Creative Learning",
    'about.text1':  'We create handmade plaster painting kits designed to inspire creativity in children and adults alike. Each kit comes with everything you need: a pre-cast plaster figure, paints, and a brush.',
    'about.text2':  'Based in Switzerland, we handcraft every piece with love and care. Perfect for birthday gifts, rainy afternoons, and creative family time.',
    'contact.title':'Get in touch',
    'contact.text': 'Questions, custom orders, wholesale inquiries:',
    'contact.label.email': 'Email',
    'contact.label.phone': 'Phone',
    'footer.brand': "Emma's Creative Learning",
    'footer.rights':'All rights reserved.',
    'form.title':   'Send a Request',
    'form.name':    'Name *',
    'form.email':   'Email *',
    'form.phone':   'Phone',
    'form.city':    'City / Postcode',
    'form.address': 'Delivery Address',
    'form.notes':   'Notes / Special requests',
    'form.submit':  'Send Request',
    'form.success': '✓ Your request has been sent! We will contact you shortly.',
    'add.to.cart':  'Add to Cart',
    'badge.sale':   'Sale',
    'added.toast':  'Added to cart',
  },

  fr: {
    'meta.title':       "Emma's Creative Learning | Kits de Peinture en Plâtre – Suisse",
    'meta.description': 'Kits de peinture en plâtre faits main pour enfants et familles en Suisse. Licornes et dinosaures avec peintures et pinceau inclus. Cadeau parfait. Commandez en ligne – CHF 7.',
    'nav.about':    'À propos',
    'nav.contact':  'Contact',
    'cart.label':   'Panier',
    'cart.title':   'Panier',
    'cart.empty':   'Votre panier est vide.',
    'cart.subtotal':'Sous-total',
    'shop.title':   'Boutique',
    'cat.all':      'Tout',
    'cat.unicorn':  'Licorne',
    'cat.dinosaur': 'Dinosaure',
    'about.title':  "À propos d'Emma's Creative Learning",
    'about.text1':  "Nous créons des kits de peinture en plâtre faits à la main pour inspirer la créativité chez les enfants et les adultes. Chaque kit comprend tout ce dont vous avez besoin : une figurine en plâtre, des peintures et un pinceau.",
    'about.text2':  "Basés en Suisse, nous fabriquons chaque pièce avec amour et soin. Parfait pour les cadeaux d'anniversaire, les après-midi pluvieux et les moments créatifs en famille.",
    'contact.title':'Contactez-nous',
    'contact.text': 'Questions, commandes personnalisées, ventes en gros :',
    'contact.label.email': 'E-mail',
    'contact.label.phone': 'Téléphone',
    'footer.brand': "Emma's Creative Learning",
    'footer.rights':'Tous droits réservés.',
    'form.title':   'Envoyer une demande',
    'form.name':    'Nom *',
    'form.email':   'E-mail *',
    'form.phone':   'Téléphone',
    'form.city':    'Ville / Code postal',
    'form.address': 'Adresse de livraison',
    'form.notes':   'Notes / Demandes spéciales',
    'form.submit':  'Envoyer la demande',
    'form.success': '✓ Votre demande a été envoyée ! Nous vous contacterons prochainement.',
    'add.to.cart':  'Ajouter au panier',
    'badge.sale':   'Solde',
    'added.toast':  'Ajouté au panier',
  },

  de: {
    'meta.title':       "Emma's Creative Learning | Handgemachte Gipsmalerei-Sets – Schweiz",
    'meta.description': 'Handgefertigte Gipsmalerei-Kits für Kinder und Familien in der Schweiz. Einhorn- und Dinosaurier-Sets mit Farben und Pinsel. Perfektes Geschenk. Online bestellen – CHF 7.',
    'nav.about':    'Über uns',
    'nav.contact':  'Kontakt',
    'cart.label':   'Warenkorb',
    'cart.title':   'Warenkorb',
    'cart.empty':   'Ihr Warenkorb ist leer.',
    'cart.subtotal':'Zwischensumme',
    'shop.title':   'Shop',
    'cat.all':      'Alle',
    'cat.unicorn':  'Einhorn',
    'cat.dinosaur': 'Dinosaurier',
    'about.title':  "Über Emma's Creative Learning",
    'about.text1':  'Wir erstellen handgefertigte Gipsmalerei-Kits, um die Kreativität bei Kindern und Erwachsenen zu fördern. Jedes Kit enthält alles, was Sie brauchen: eine gegossene Gipsfigur, Farben und einen Pinsel.',
    'about.text2':  'Mit Sitz in der Schweiz fertigen wir jedes Stück mit Liebe und Sorgfalt. Ideal als Geburtstagsgeschenk, für Regentage und kreative Familienzeit.',
    'contact.title':'Kontakt',
    'contact.text': 'Fragen, individuelle Bestellungen, Großhandelsanfragen:',
    'contact.label.email': 'E-Mail',
    'contact.label.phone': 'Telefon',
    'footer.brand': "Emma's Creative Learning",
    'footer.rights':'Alle Rechte vorbehalten.',
    'form.title':   'Anfrage senden',
    'form.name':    'Name *',
    'form.email':   'E-Mail *',
    'form.phone':   'Telefon',
    'form.city':    'Stadt / Postleitzahl',
    'form.address': 'Lieferadresse',
    'form.notes':   'Anmerkungen / Sonderwünsche',
    'form.submit':  'Anfrage senden',
    'form.success': '✓ Ihre Anfrage wurde gesendet! Wir werden Sie in Kürze kontaktieren.',
    'add.to.cart':  'In den Warenkorb',
    'badge.sale':   'Angebot',
    'added.toast':  'In den Warenkorb gelegt',
  },
};
