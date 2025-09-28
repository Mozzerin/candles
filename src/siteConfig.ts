// Central site configuration to make adjustments easy.
// Update text, images, products, and links here.

export interface ProductTranslation {
  name: string;
  description: string;
  scent?: string;
  size?: string;
}

export interface LocalizedProduct {
  id: string;
  price: number;
  image: string;
  translations: Record<string, ProductTranslation>; // locale -> translation
}

export const supportedLocales = ['en', 'de', 'fr'] as const;
export type Locale = typeof supportedLocales[number];
export const defaultLocale: Locale = 'en';

export const products: LocalizedProduct[] = [
  {
    id: 'lavender-dream',
    price: 18.5,
    image: '/images/product-lavender.svg',
    translations: {
      en: {
        name: 'Lavender Dream',
        description: 'Relaxing lavender candle blended with subtle vanilla notes.',
        scent: 'Lavender & Vanilla',
        size: '200g'
      },
      de: {
        name: 'Lavendel Traum',
        description: 'Entspannende Lavendelkerze mit sanften Vanillenoten.',
        scent: 'Lavendel & Vanille',
        size: '200g'
      },
      fr: {
        name: 'Rêve de Lavande',
        description: 'Bougie lavande relaxante aux douces notes de vanille.',
        scent: 'Lavande & Vanille',
        size: '200g'
      }
    }
  },
  {
    id: 'citrus-morning',
    price: 16,
    image: '/images/product-citrus.svg',
    translations: {
      en: {
        name: 'Citrus Morning',
        description: 'Fresh citrus burst to energize your space.',
        scent: 'Orange & Grapefruit',
        size: '180g'
      },
      de: {
        name: 'Zitrus Morgen',
        description: 'Frischer Zitrus-Kick für neue Energie.',
        scent: 'Orange & Grapefruit',
        size: '180g'
      },
      fr: {
        name: 'Matin Agrume',
        description: 'Explosion d’agrumes frais pour dynamiser votre espace.',
        scent: 'Orange & Pamplemousse',
        size: '180g'
      }
    }
  },
  {
    id: 'forest-walk',
    price: 19.75,
    image: '/images/product-forest.svg',
    translations: {
      en: {
        name: 'Forest Walk',
        description: 'Earthy pine and cedarwood aroma for grounding moments.',
        scent: 'Pine & Cedarwood',
        size: '220g'
      },
      de: {
        name: 'Waldspaziergang',
        description: 'Erdiger Duft aus Kiefer und Zedernholz für ruhige Momente.',
        scent: 'Kiefer & Zedernholz',
        size: '220g'
      },
      fr: {
        name: 'Promenade en Forêt',
        description: 'Arôme boisé de pin et cèdre pour des instants apaisants.',
        scent: 'Pin & Cèdre',
        size: '220g'
      }
    }
  }
];

export const siteMeta = {
  brand: 'Lumos Candles',
  heroImage: '/images/hero-header.svg',
  tagline: {
    en: 'Hand-poured eco soy candles crafted with care',
    de: 'Handgegossene ökologische Sojawachskerzen mit Sorgfalt gefertigt',
    fr: 'Bougies écologiques en soja coulées à la main avec soin'
  },
  instagram: 'https://instagram.com/yourbrand',
  facebook: 'https://facebook.com/yourbrand',
  tiktok: 'https://www.tiktok.com/@yourbrand',
  email: 'orders@lumoscandles.example'
};

export const creator = {
  name: 'Ava Stone',
  role: {
    en: 'Founder & Chandler',
    de: 'Gründerin & Kerzenmacherin',
    fr: 'Fondatrice & Maître Cirier'
  },
  bio: {
    en: 'I hand-pour every batch using sustainable soy wax and phthalate-free fragrances. My mission is to elevate everyday rituals with clean, calming light.',
    de: 'Ich gieße jede Charge von Hand mit nachhaltigem Sojawachs und phtalatfreien Duftölen. Meine Mission: Alltägliche Rituale mit ruhigem, sauberem Licht bereichern.',
    fr: 'Je coule chaque lot à la main avec une cire de soja durable et des parfums sans phtalates. Ma mission : enrichir les rituels quotidiens avec une lumière apaisante.'
  },
  photo: '/images/creator.svg'
};

export const factoryLocation = {
  label: {
    en: 'Studio & Micro-Factory',
    de: 'Studio & Mikro-Manufaktur',
    fr: 'Atelier & Micro-Usine'
  },
  addressLines: {
    en: ['123 Candle Lane', 'Greenwood, OR 97000', 'USA'],
    de: ['123 Kerzenweg', 'Greenwood, OR 97000', 'USA'],
    fr: ['123 Allée des Bougies', 'Greenwood, OR 97000', 'États-Unis']
  },
  latitude: 45.5152,
  longitude: -122.6784,
  mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-122.6884%2C45.5092%2C-122.6684%2C45.5212&layer=mapnik&marker=45.5152%2C-122.6784',
  provider: {
    type: 'google', // 'google' | 'osm'
    zoom: 14
  }
};

export const currencyFormatterFor = (locale: Locale) => new Intl.NumberFormat(locale === 'de' ? 'de-DE' : locale === 'fr' ? 'fr-FR' : 'en-US', {
  style: 'currency',
  currency: 'USD'
});
