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
//  4. Put your images in the images/ folder and update `images` array.
//     First image is the main card image. Last image is typically the product shot.
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
    images:        [
      'images/unicorn1.png',
      'images/Dreamy_Unicorn3.png',
      'images/Moonlight_Unicorn3.png',
      'images/Starlight_Unicorn3.png',
      'images/unicorn.png',
    ],
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Unicorn Plaster Painting Kit – Bundle',
        description: 'The ultimate unicorn set — choose your favourite figure or collect all three! Includes a pre-cast plaster unicorn, 6 acrylic paints, a brush and step-by-step instructions. Perfect creative activity for kids aged 4 and up.',
      },
      fr: {
        name:        'Kit de Peinture Licorne en Plâtre – Offre Groupée',
        description: 'Le coffret licorne ultime — choisissez votre figurine préférée ou collectionnez les trois ! Comprend une figurine en plâtre pré-moulée, 6 peintures acryliques, un pinceau et des instructions. Idéal pour les enfants dès 4 ans.',
      },
      de: {
        name:        'Einhorn Gipsmalerei-Set – Bundle',
        description: 'Das ultimative Einhorn-Set — wähle deine Lieblingsfigur oder sammel alle drei! Enthält eine vorgefertigte Gipsfigur, 6 Acrylfarben, einen Pinsel und Schritt-für-Schritt-Anleitungen. Perfekt für Kinder ab 4 Jahren.',
      },
    },
  },

  {
    id:            'unicorn-face-kit',
    category:      'unicorn',
    images:        [
      'images/Moonlight_Unicorn1.jpg',
      'images/Moonlight_Unicorn2.png',
      'images/Moonlight_Unicorn3.png',
      'images/unicorn.png',
    ],
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Moonlight Unicorn Plaster Painting Kit',
        description: 'Paint your own Moonlight Unicorn plaster figure — soft curves and a dreamy expression waiting for your colours. Includes the plaster figure, 6 acrylic paints, a brush and easy instructions. Great gift for young artists.',
      },
      fr: {
        name:        'Kit de Peinture Licorne Moonlight en Plâtre',
        description: 'Peignez votre propre figurine licorne Moonlight — des formes douces et une expression rêveuse qui n\'attendent que vos couleurs. Comprend la figurine, 6 peintures, un pinceau et des instructions simples.',
      },
      de: {
        name:        'Moonlight Einhorn Gipsmalerei-Set',
        description: 'Male deine eigene Moonlight-Einhorn-Gipsfigur — sanfte Formen und ein verträumter Ausdruck warten auf deine Farben. Enthält die Figur, 6 Acrylfarben, einen Pinsel und einfache Anleitungen.',
      },
    },
  },

  {
    id:            'unicorn-kit-2',
    category:      'unicorn',
    images:        [
      'images/Dreamy_Unicorn1.png',
      'images/Dreamy_Unicorn2.png',
      'images/Dreamy_Unicorn3.png',
      'images/unicorn.png',
    ],
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Dreamy Unicorn Plaster Painting Kit',
        description: 'Let your imagination run wild with the Dreamy Unicorn — a whimsical plaster figure full of personality. Kit includes the plaster figure, 6 acrylic paints, a brush and instructions. Encourages creativity and fine motor skills.',
      },
      fr: {
        name:        'Kit de Peinture Licorne Dreamy en Plâtre',
        description: 'Laissez libre cours à votre imagination avec la licorne Dreamy — une figurine en plâtre pleine de caractère. Le kit comprend la figurine, 6 peintures, un pinceau et des instructions. Encourage la créativité.',
      },
      de: {
        name:        'Dreamy Einhorn Gipsmalerei-Set',
        description: 'Lass deiner Fantasie freien Lauf mit dem Dreamy-Einhorn — eine verspielte Gipsfigur voller Persönlichkeit. Das Set enthält die Figur, 6 Farben, einen Pinsel und Anleitungen. Fördert Kreativität und Feinmotorik.',
      },
    },
  },

  {
    id:            'unicorn-kit-3',
    category:      'unicorn',
    images:        [
      'images/Starlight_Unicorn1.png',
      'images/Starlight_Unicorn2.png',
      'images/Starlight_Unicorn3.png',
      'images/unicorn.png',
    ],
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Starlight Unicorn Plaster Painting Kit',
        description: 'Meet the Starlight Unicorn — a graceful plaster figure that shines with every brushstroke. Includes the figure, 6 acrylic paints, a brush and easy-to-follow instructions. A magical gift for any occasion.',
      },
      fr: {
        name:        'Kit de Peinture Licorne Starlight en Plâtre',
        description: 'Rencontrez la licorne Starlight — une élégante figurine en plâtre qui brille à chaque coup de pinceau. Comprend la figurine, 6 peintures acryliques, un pinceau et des instructions simples.',
      },
      de: {
        name:        'Starlight Einhorn Gipsmalerei-Set',
        description: 'Lerne das Starlight-Einhorn kennen — eine anmutige Gipsfigur, die mit jedem Pinselstrich leuchtet. Enthält die Figur, 6 Acrylfarben, einen Pinsel und leicht verständliche Anleitungen.',
      },
    },
  },

  // ── DINOSAUR KITS ─────────────────────────────────────────────────────

  {
    id:            'dinosaur-kit-1',
    category:      'dinosaur',
    images:        [
      'images/Diplodocus1.png',
      'images/Diplodocus2.png',
      'images/Diplodocus3.png',
      'images/dinosavr.png',
    ],
    price:         10.00,
    originalPrice: null,
    onSale:        false,
    translations: {
      en: {
        name:        'Diplodocus Plaster Painting Kit',
        description: 'Paint your very own Diplodocus — the long-necked giant of the Jurassic! Kit includes a pre-cast plaster Diplodocus figure, 8 acrylic paints, a brush and instructions. The perfect gift for little dino fans.',
      },
      fr: {
        name:        'Kit de Peinture Diplodocus en Plâtre',
        description: 'Peignez votre propre Diplodocus — le géant au long cou du Jurassique ! Le kit comprend une figurine Diplodocus en plâtre, 8 peintures acryliques, un pinceau et des instructions. Le cadeau parfait pour les fans de dinos.',
      },
      de: {
        name:        'Diplodocus Gipsmalerei-Set',
        description: 'Male deinen eigenen Diplodocus — den langhalsigen Riesen der Jurazeit! Das Set enthält eine Gipsfigur, 8 Acrylfarben, einen Pinsel und Anleitungen. Das perfekte Geschenk für kleine Dino-Fans.',
      },
    },
  },

  {
    id:            'dinosaur-kit-2',
    category:      'dinosaur',
    images:        [
      'images/Stegosaurus1.png',
      'images/Stegosaurus2.jpg',
      'images/Stegosaurus3.png',
      'images/dinosavr.png',
    ],
    price:         7.00,
    originalPrice: 10.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Stegosaurus Plaster Painting Kit',
        description: 'Meet the Stegosaurus — the spiky-backed star of the dinosaur world! Includes a plaster Stegosaurus figure, 6 acrylic paints, a brush and step-by-step instructions. Hours of creative fun guaranteed.',
      },
      fr: {
        name:        'Kit de Peinture Stégosaure en Plâtre',
        description: 'Rencontrez le Stégosaure — la star à dos épineux du monde des dinosaures ! Comprend une figurine Stégosaure en plâtre, 6 peintures acryliques, un pinceau et des instructions. Des heures de plaisir créatif garanties.',
      },
      de: {
        name:        'Stegosaurus Gipsmalerei-Set',
        description: 'Lerne den Stegosaurus kennen — den Stachelrücken-Star der Dinosaurierwelt! Enthält eine Stegosaurus-Gipsfigur, 6 Acrylfarben, einen Pinsel und Schritt-für-Schritt-Anleitungen.',
      },
    },
  },

  // ── ADD NEW PRODUCTS BELOW ────────────────────────────────────────────
  //
  // {
  //   id:            'dragon-kit-1',
  //   category:      'dragon',
  //   images:        ['images/dragon1.png', 'images/dragon2.png'],
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
