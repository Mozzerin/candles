import { createContext, useContext, useState, useCallback, useMemo, useEffect, type ReactNode } from 'react';
import { supportedLocales, defaultLocale, type Locale, siteMeta, products, creator, factoryLocation, currencyFormatterFor } from './siteConfig';

// Translation dictionary for general UI strings (excluding data already in siteConfig)
const messages: Record<Locale, Record<string, string>> = {
  en: {
    'nav.products': 'Products',
    'nav.creator': 'Creator',
    'nav.location': 'Location',
    'nav.order': 'Order',
    'sections.products.title': 'Products',
    'sections.products.lead': 'Small-batch soy candles. Clean burn, long-lasting fragrance.',
    'sections.products.empty': 'Product list updating – please check back soon.',
    'table.photo': 'Photo',
    'table.name': 'Name',
    'table.description': 'Description',
    'table.scent': 'Scent',
    'table.size': 'Size',
    'table.price': 'Price',
    'sections.creator.title': 'Meet the Creator',
    'sections.creator.lead': 'Craft, sustainability, and intentional calm.',
    'sections.location.title': factoryLocation.label.en, // fallback to config
    'contact.title': 'Order / Contact',
    'contact.lead': 'Want to place a custom or bulk order? Send a quick request below.',
    'contact.form.product': 'Product',
    'contact.form.quantity': 'Quantity',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email',
    'contact.form.notes': 'Notes / Message (optional)',
    'contact.form.notesPlaceholder': 'Scent preferences, deadline, packaging...',
    'contact.send': 'Send Request',
    'contact.sending': 'Sending…',
    'contact.sent': 'Sent! We will reply via email.',
    'contact.error': 'Something went wrong. Try again.',
    'contact.privacy': 'We respond from',
    'footer.backToTop': 'Back to top',
    'skip.toProducts': 'Skip to products',
    'products.more': 'View details',
    'product.order.title': 'Order this candle',
    'product.order.quantity': 'Quantity',
    'product.order.notes': 'Notes (optional)',
    'product.order.submit': 'Send Order Email',
    'product.back': 'Back to products',
    'product.notFound': 'Product not found',
    'form.error.required': 'Required',
    'form.error.quantityRange': '1-99',
    'form.error.nameShort': 'Too short',
    'form.error.emailInvalid': 'Invalid email',
    'form.error.fix': 'Fix errors',
    'contact.mailto': 'Open email client'
  },
  de: {
    'nav.products': 'Produkte',
    'nav.creator': 'Schöpferin',
    'nav.location': 'Standort',
    'nav.order': 'Bestellen',
    'sections.products.title': 'Produkte',
    'sections.products.lead': 'Kleinserien-Sojakerzen. Sauberes Abbrennen, langanhaltender Duft.',
    'sections.products.empty': 'Produktliste wird aktualisiert – bitte später erneut prüfen.',
    'table.photo': 'Foto',
    'table.name': 'Name',
    'table.description': 'Beschreibung',
    'table.scent': 'Duft',
    'table.size': 'Größe',
    'table.price': 'Preis',
    'sections.creator.title': 'Lerne die Schöpferin kennen',
    'sections.creator.lead': 'Handwerk, Nachhaltigkeit und bewusste Ruhe.',
    'sections.location.title': factoryLocation.label.de,
    'contact.title': 'Bestellung / Kontakt',
    'contact.lead': 'Individuelle oder Großbestellung? Sende uns eine Anfrage.',
    'contact.form.product': 'Produkt',
    'contact.form.quantity': 'Menge',
    'contact.form.name': 'Dein Name',
    'contact.form.email': 'E-Mail',
    'contact.form.notes': 'Notizen / Nachricht (optional)',
    'contact.form.notesPlaceholder': 'Duftwünsche, Termin, Verpackung...',
    'contact.send': 'Anfrage senden',
    'contact.sending': 'Senden…',
    'contact.sent': 'Gesendet! Wir antworten per E-Mail.',
    'contact.error': 'Fehler aufgetreten. Bitte erneut versuchen.',
    'contact.privacy': 'Wir antworten von',
    'footer.backToTop': 'Nach oben',
    'skip.toProducts': 'Zu den Produkten springen',
    'products.more': 'Details ansehen',
    'product.order.title': 'Diese Kerze bestellen',
    'product.order.quantity': 'Menge',
    'product.order.notes': 'Notizen (optional)',
    'product.order.submit': 'Bestell-E-Mail senden',
    'product.back': 'Zurück zu den Produkten',
    'product.notFound': 'Produkt nicht gefunden',
    'form.error.required': 'Pflichtfeld',
    'form.error.quantityRange': '1-99',
    'form.error.nameShort': 'Zu kurz',
    'form.error.emailInvalid': 'Ungültige E-Mail',
    'form.error.fix': 'Fehler beheben',
    'contact.mailto': 'E-Mail Programm öffnen'
  },
  fr: {
    'nav.products': 'Produits',
    'nav.creator': 'Créatrice',
    'nav.location': 'Localisation',
    'nav.order': 'Commande',
    'sections.products.title': 'Produits',
    'sections.products.lead': 'Bougies de soja artisanales. Combustion propre, parfum durable.',
    'sections.products.empty': 'Liste des produits en mise à jour – revenez bientôt.',
    'table.photo': 'Photo',
    'table.name': 'Nom',
    'table.description': 'Description',
    'table.scent': 'Parfum',
    'table.size': 'Taille',
    'table.price': 'Prix',
    'sections.creator.title': 'Rencontrez la Créatrice',
    'sections.creator.lead': 'Artisanat, durabilité et calme intentionnel.',
    'sections.location.title': factoryLocation.label.fr,
    'contact.title': 'Commande / Contact',
    'contact.lead': 'Commande personnalisée ou en gros ? Envoyez une demande.',
    'contact.form.product': 'Produit',
    'contact.form.quantity': 'Quantité',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Email',
    'contact.form.notes': 'Notes / Message (optionnel)',
    'contact.form.notesPlaceholder': 'Préférences parfum, délai, emballage...',
    'contact.send': 'Envoyer la demande',
    'contact.sending': 'Envoi…',
    'contact.sent': 'Envoyé ! Nous répondrons par email.',
    'contact.error': 'Une erreur est survenue. Réessayez.',
    'contact.privacy': 'Nous répondons depuis',
    'footer.backToTop': 'Haut de page',
    'skip.toProducts': 'Aller aux produits',
    'products.more': 'Voir le détail',
    'product.order.title': 'Commander cette bougie',
    'product.order.quantity': 'Quantité',
    'product.order.notes': 'Notes (optionnel)',
    'product.order.submit': 'Envoyer la commande',
    'product.back': 'Retour aux produits',
    'product.notFound': 'Produit introuvable',
    'form.error.required': 'Requis',
    'form.error.quantityRange': '1-99',
    'form.error.nameShort': 'Trop court',
    'form.error.emailInvalid': 'Email invalide',
    'form.error.fix': 'Corrigez les erreurs',
    'contact.mailto': 'Ouvrir le client e-mail'
  }
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  formatCurrency: (value: number) => string;
  productTranslation: (id: string) => { name: string; description: string; scent?: string; size?: string } | undefined;
  creatorRole: string;
  creatorBio: string;
  siteTagline: string;
  addressLines: string[];
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const STORAGE_KEY = 'site-locale';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) as Locale | null : null;
    return supportedLocales.includes(stored as Locale) ? stored as Locale : defaultLocale;
  });

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const t = useCallback((key: string) => {
    const dict = messages[locale] || messages[defaultLocale];
    return dict[key] ?? messages[defaultLocale][key] ?? key;
  }, [locale]);

  const formatCurrency = useCallback((value: number) => currencyFormatterFor(locale).format(value), [locale]);

  const productTranslation = useCallback((id: string) => {
    const p = products.find(p => p.id === id);
    if (!p) return undefined;
    return p.translations[locale] || p.translations[defaultLocale];
  }, [locale]);

  const creatorRole = creator.role[locale] || creator.role[defaultLocale];
  const creatorBio = creator.bio[locale] || creator.bio[defaultLocale];
  const siteTagline = siteMeta.tagline[locale] || siteMeta.tagline[defaultLocale];
  const addressLines = factoryLocation.addressLines[locale] || factoryLocation.addressLines[defaultLocale];

  const value: I18nContextValue = useMemo(() => ({
    locale,
    setLocale,
    t,
    formatCurrency,
    productTranslation,
    creatorRole,
    creatorBio,
    siteTagline,
    addressLines
  }), [locale, setLocale, t, formatCurrency, productTranslation, creatorRole, creatorBio, siteTagline, addressLines]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export function localizedProducts(locale: Locale) {
  return products.map(p => ({
    id: p.id,
    price: p.price,
    image: p.image,
    ...p.translations[locale] || p.translations[defaultLocale]
  }));
}
