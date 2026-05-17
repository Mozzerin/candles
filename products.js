// ═══════════════════════════════════════════════════════════════════════
//  PRODUCTS CATALOG  —  add, remove or edit products here
// ═══════════════════════════════════════════════════════════════════════
//
//  HOW TO ADD A NEW PRODUCT:
//  1. Copy any existing product block below.
//  2. Change `id` to a unique slug (e.g. 'dragon-kit-1').
//     ⚠️  Never change an id after the shop goes live — it breaks saved carts.
//  3. Set `category` — use an existing one ('unicorn', 'dinosaur') or a new word.
//     A new category will automatically appear in the filter bar.
//  4. Put your images in the images/ folder and update `image` / `imageHover`.
//     `imageHover` can be the same as `image` if you have only one photo.
//  5. Set price, originalPrice (null if not on sale), onSale.
//  6. Fill in `translations` for en, fr, de — name + description.
//     You can omit fr/de and the site will fall back to English automatically.
//
//  HOW TO EDIT AN EXISTING PRODUCT:
//  Just change any field below and save.  No other files need updating.
//
//  HOW TO HIDE A PRODUCT (without deleting it):
//  Add `hidden: true` to the product object.
//
// ═══════════════════════════════════════════════════════════════════════

const PRODUCTS = [

  // ── UNICORN KITS ──────────────────────────────────────────────────────

  {
    id:            'unicorn-kit-1',
    category:      'unicorn',
    image:         'images/unicorn1.png',
    imageHover:    'images/unicorn.png',
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Handmade Unicorn Plaster Painting Kit',
        description: 'A magical unicorn plaster figure ready to paint. Kit includes the plaster figure, 6 acrylic paints, a brush and step-by-step instructions. Perfect creative activity for kids aged 4 and up.',
      },
      fr: {
        name:        'Kit de Peinture Licorne en Plâtre',
        description: 'Une figurine licorne en plâtre prête à peindre. Le kit comprend la figurine, 6 peintures acryliques, un pinceau et des instructions. Idéal pour les enfants dès 4 ans.',
      },
      de: {
        name:        'Handgemachtes Einhorn Gipsmalerei-Set',
        description: 'Eine magische Einhorn-Gipsfigur zum Bemalen. Das Set enthält die Figur, 6 Acrylfarben, einen Pinsel und Schritt-für-Schritt-Anleitungen. Perfekt für Kinder ab 4 Jahren.',
      },
    },
  },

  {
    id:            'unicorn-face-kit',
    category:      'unicorn',
    image:         'images/unicorn-face.png',
    imageHover:    'images/Starlight_Unicorn2.png',
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Handmade Unicorn Face Plaster Painting Kit',
        description: 'A charming unicorn face plaster plaque to paint and display. Includes the plaster piece, 6 vibrant paints, a brush and easy instructions. Great gift idea for young artists.',
      },
      fr: {
        name:        'Kit de Peinture Visage de Licorne en Plâtre',
        description: 'Une charmante plaque en plâtre représentant un visage de licorne à peindre. Comprend la pièce en plâtre, 6 peintures vives, un pinceau et des instructions. Beau cadeau pour les jeunes artistes.',
      },
      de: {
        name:        'Handgemachtes Einhorn-Gesicht Gipsmalerei-Set',
        description: 'Eine charmante Gips-Wandplakette mit Einhorn-Gesicht zum Bemalen. Enthält das Gipsstück, 6 leuchtende Farben, einen Pinsel und einfache Anleitungen. Tolles Geschenk für junge Künstler.',
      },
    },
  },

  {
    id:            'unicorn-kit-2',
    category:      'unicorn',
    image:         'images/Dreamy_Unicorn1.png',
    imageHover:    'images/Dreamy_Unicorn3.png',
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Handmade Unicorn Plaster Painting Kit – Blue',
        description: 'A blue-themed unicorn plaster figure with a dreamy design. Kit contains the plaster figure, 6 paints, a brush and instructions. Encourages creativity and fine motor skills.',
      },
      fr: {
        name:        'Kit de Peinture Licorne en Plâtre – Bleu',
        description: 'Une figurine licorne en plâtre aux tons bleus et au design rêveur. Le kit contient la figurine, 6 peintures, un pinceau et des instructions. Encourage la créativité et la motricité fine.',
      },
      de: {
        name:        'Handgemachtes Einhorn Gipsmalerei-Set – Blau',
        description: 'Eine blaue Einhorn-Gipsfigur mit traumhaftem Design. Das Set enthält die Figur, 6 Farben, einen Pinsel und Anleitungen. Fördert Kreativität und Feinmotorik.',
      },
    },
  },

  {
    id:            'unicorn-kit-3',
    category:      'unicorn',
    image:         'images/Starlight_Unicorn1.png',
    imageHover:    'images/Starlight_Unicorn3.png',
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Handmade Unicorn Plaster Painting Kit – Classic',
        description: 'The classic unicorn plaster figure — a timeless design loved by children everywhere. Includes the figure, 6 acrylic paints, a brush and easy-to-follow instructions.',
      },
      fr: {
        name:        'Kit de Peinture Licorne en Plâtre – Classique',
        description: 'La figurine licorne en plâtre classique — un design intemporel adoré des enfants. Comprend la figurine, 6 peintures acryliques, un pinceau et des instructions simples.',
      },
      de: {
        name:        'Handgemachtes Einhorn Gipsmalerei-Set – Klassisch',
        description: 'Die klassische Einhorn-Gipsfigur — ein zeitloses Design, das Kinder lieben. Enthält die Figur, 6 Acrylfarben, einen Pinsel und leicht verständliche Anleitungen.',
      },
    },
  },

  // ── DINOSAUR KITS ─────────────────────────────────────────────────────

  {
    id:            'dinosaur-kit-1',
    category:      'dinosaur',
    image:         'images/Diplodocus1.png',
    imageHover:    'images/Moonlight_Unicorn3.png',
    price:         10.00,
    originalPrice: null,
    onSale:        false,
    translations: {
      en: {
        name:        'Handmade Dinosaur Plaster Painting Kit',
        description: 'A roar-some dinosaur plaster figure ready to be painted. Kit includes the plaster figure, 8 acrylic paints, a brush and instructions. The perfect gift for little dino fans.',
      },
      fr: {
        name:        'Kit de Peinture Dinosaure en Plâtre',
        description: 'Une figurine dinosaure en plâtre prête à peindre. Le kit comprend la figurine, 8 peintures acryliques, un pinceau et des instructions. Le cadeau parfait pour les petits fans de dinos.',
      },
      de: {
        name:        'Handgemachtes Dinosaurier Gipsmalerei-Set',
        description: 'Eine beeindruckende Dinosaurier-Gipsfigur zum Bemalen. Das Set enthält die Figur, 8 Acrylfarben, einen Pinsel und Anleitungen. Das perfekte Geschenk für kleine Dino-Fans.',
      },
    },
  },

  {
    id:            'dinosaur-kit-2',
    category:      'dinosaur',
    image:         'images/Stegosaurus1.png',
    imageHover:    'images/Moonlight_Unicorn2.png',
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Handmade Dinosaur Plaster Painting Kit – Roar Edition',
        description: 'The Roar Edition dinosaur plaster kit features an extra-expressive pose. Includes the plaster figure, 6 paints, a brush and step-by-step instructions. Hours of creative fun guaranteed.',
      },
      fr: {
        name:        'Kit de Peinture Dinosaure en Plâtre – Édition Roar',
        description: "L'édition Roar du kit dinosaure en plâtre avec une pose encore plus expressive. Comprend la figurine, 6 peintures, un pinceau et des instructions. Des heures de plaisir créatif garanties.",
      },
      de: {
        name:        'Handgemachtes Dinosaurier Gipsmalerei-Set – Roar Edition',
        description: 'Die Roar Edition des Dinosaurier-Sets mit einer besonders ausdrucksstarken Pose. Enthält die Figur, 6 Farben, einen Pinsel und Schritt-für-Schritt-Anleitungen. Stunden kreativer Freude garantiert.',
      },
    },
  },

  // ── ADD NEW PRODUCTS BELOW ────────────────────────────────────────────
  //
  // {
  //   id:            'dragon-kit-1',
  //   category:      'dragon',          // new category → appears in filter automatically
  //   image:         'images/dragon1.png',
  //   imageHover:    'images/dragon1-hover.png',
  //   price:         9.00,
  //   originalPrice: null,
  //   onSale:        false,
  //   translations: {
  //     en: { name: 'Dragon Kit', description: '...' },
  //     fr: { name: 'Kit Dragon', description: '...' },
  //     de: { name: 'Drachen-Set', description: '...' },
  //   },
  // },

];
