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
    price:         49.00,
    originalPrice: 98.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Unicorn Plaster Painting Kit – Bundle',
        description: `Everything you need to paint and personalize your plaster unicorn figures is included in the kit: plaster figurines, paint set, and brush. Simply open the box, put on your favorite playlist, gather your friends or family, and turn painting into a cozy, creative experience.

This bundle is perfect for relaxing at home, girls' nights, parties, family gatherings, creative workshops, or as a thoughtful and unique gift. Painting plaster figures is a great way to slow down, unwind, spark creativity, and enjoy the process of making something with your own hands.

Every piece becomes one of a kind — you choose the colors, the mood, and the final look. It's more than just a paint kit; it's a small creative ritual that leaves you with something truly personal.

What's included:
• plaster unicorn figurines ready to paint
• paint set
• paintbrush
• postcard
• 2 stickers`,
      },
      fr: {
        name:        'Kit de Peinture Licorne en Plâtre – Offre Groupée',
        description: `Tout ce dont vous avez besoin pour peindre et personnaliser vos figurines licorne en plâtre est inclus dans le coffret : des figurines en plâtre, un set de peinture et un pinceau. Ouvrez simplement la boîte, mettez votre playlist préférée, réunissez vos amis ou votre famille, et transformez la peinture en une expérience créative et chaleureuse.

Ce coffret est parfait pour se détendre à la maison, les soirées entre amies, les fêtes, les réunions en famille, les ateliers créatifs, ou comme cadeau attentionné et original. Peindre des figurines en plâtre est une belle façon de ralentir, de se ressourcer, d'éveiller sa créativité et de profiter du plaisir de créer quelque chose de ses propres mains.

Chaque pièce devient unique — vous choisissez les couleurs, l'ambiance et le résultat final. C'est bien plus qu'un simple kit de peinture ; c'est un petit rituel créatif dont vous ressortez avec quelque chose de vraiment personnel.

Ce qui est inclus :
• des figurines licorne en plâtre prêtes à peindre
• set de peinture
• pinceau
• carte postale
• 2 autocollants`,
      },
      de: {
        name:        'Einhorn Gipsmalerei-Set – Bundle',
        description: `Alles, was du zum Bemalen und Personalisieren deiner Gips-Einhorn-Figuren brauchst, ist im Set enthalten: Gipsfiguren, Farb-Set und Pinsel. Öffne einfach die Box, leg deine Lieblingsplaylist auf, hol deine Freunde oder Familie dazu und mach das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Bundle ist perfekt zum Entspannen zu Hause, für Mädelsabende, Partys, Familientreffen, kreative Workshops oder als durchdachtes und einzigartiges Geschenk. Gipsfiguren bemalen ist eine wunderbare Möglichkeit, innezuhalten, sich zu erholen, Kreativität zu wecken und den Prozess des Erschaffens mit den eigenen Händen zu genießen.

Jedes Stück wird zum Unikat — du wählst die Farben, die Stimmung und das Endergebnis. Es ist mehr als nur ein Mal-Set; es ist ein kleines kreatives Ritual, das dir etwas wirklich Persönliches hinterlässt.

Was enthalten ist:
• Gips-Einhorn-Figuren, bereit zum Bemalen
• Farb-Set
• Pinsel
• Postkarte
• 2 Sticker`,
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
        description: `Everything you need to paint and personalize your Moonlight Unicorn plaster figure is included in the kit: a plaster figurine, paint set, and brush. Simply open the box, put on your favorite playlist, gather your friends or family, and turn painting into a cozy, creative experience.

This kit is perfect for relaxing at home, girls' nights, parties, family gatherings, creative workshops, or as a thoughtful and unique gift. Painting plaster figures is a great way to slow down, unwind, spark creativity, and enjoy the process of making something with your own hands.

The Moonlight Unicorn has a gentle, serene look — soft lines and a calm expression that invite you to dream up your own colour story. Every piece becomes one of a kind — you choose the colors, the mood, and the final look.

What's included:
• 1 Moonlight Unicorn plaster figurine ready to paint
• paint set
• paintbrush
• postcard
• 2 stickers`,
      },
      fr: {
        name:        'Kit de Peinture Licorne Moonlight en Plâtre',
        description: `Tout ce dont vous avez besoin pour peindre et personnaliser votre figurine Licorne Moonlight en plâtre est inclus dans le kit : une figurine en plâtre, un set de peinture et un pinceau. Ouvrez simplement la boîte, mettez votre playlist préférée, réunissez vos amis ou votre famille, et transformez la peinture en une expérience créative et chaleureuse.

Ce kit est parfait pour se détendre à la maison, les soirées entre amies, les fêtes, les réunions en famille, les ateliers créatifs, ou comme cadeau attentionné et original.

La Licorne Moonlight possède un regard doux et serein — des lignes apaisantes et une expression calme qui vous invitent à imaginer votre propre palette de couleurs. Chaque pièce devient unique — vous choisissez les couleurs, l'ambiance et le résultat final.

Ce qui est inclus :
• 1 figurine Licorne Moonlight en plâtre prête à peindre
• set de peinture
• pinceau
• carte postale
• 2 autocollants`,
      },
      de: {
        name:        'Moonlight Einhorn Gipsmalerei-Set',
        description: `Alles, was du zum Bemalen und Personalisieren deiner Moonlight-Einhorn-Gipsfigur brauchst, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffne einfach die Box, leg deine Lieblingsplaylist auf, hol deine Freunde oder Familie dazu und mach das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt zum Entspannen zu Hause, für Mädelsabende, Partys, Familientreffen, kreative Workshops oder als durchdachtes und einzigartiges Geschenk.

Das Moonlight-Einhorn hat einen sanften, ruhigen Ausdruck — weiche Linien und eine friedvolle Ausstrahlung, die dich einladen, deine eigene Farbgeschichte zu erzählen. Jedes Stück wird zum Unikat — du wählst die Farben, die Stimmung und das Endergebnis.

Was enthalten ist:
• 1 Moonlight-Einhorn-Gipsfigur, bereit zum Bemalen
• Farb-Set
• Pinsel
• Postkarte
• 2 Sticker`,
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
        description: `Everything you need to paint and personalize your Dreamy Unicorn plaster figure is included in the kit: a plaster figurine, paint set, and brush. Simply open the box, put on your favorite playlist, gather your friends or family, and turn painting into a cozy, creative experience.

This kit is perfect for relaxing at home, girls' nights, parties, family gatherings, creative workshops, or as a thoughtful and unique gift. Painting plaster figures is a great way to slow down, unwind, spark creativity, and enjoy the process of making something with your own hands.

The Dreamy Unicorn is full of whimsy and personality — a playful pose and expressive details that make every brushstroke feel like storytelling. Every piece becomes one of a kind — you choose the colors, the mood, and the final look.

What's included:
• 1 Dreamy Unicorn plaster figurine ready to paint
• paint set
• paintbrush
• postcard
• 2 stickers`,
      },
      fr: {
        name:        'Kit de Peinture Licorne Dreamy en Plâtre',
        description: `Tout ce dont vous avez besoin pour peindre et personnaliser votre figurine Licorne Dreamy en plâtre est inclus dans le kit : une figurine en plâtre, un set de peinture et un pinceau. Ouvrez simplement la boîte, mettez votre playlist préférée, réunissez vos amis ou votre famille, et transformez la peinture en une expérience créative et chaleureuse.

Ce kit est parfait pour se détendre à la maison, les soirées entre amies, les fêtes, les réunions en famille, les ateliers créatifs, ou comme cadeau attentionné et original.

La Licorne Dreamy est pleine de fantaisie et de personnalité — une pose espiègle et des détails expressifs qui font de chaque coup de pinceau un véritable acte de création. Chaque pièce devient unique — vous choisissez les couleurs, l'ambiance et le résultat final.

Ce qui est inclus :
• 1 figurine Licorne Dreamy en plâtre prête à peindre
• set de peinture
• pinceau
• carte postale
• 2 autocollants`,
      },
      de: {
        name:        'Dreamy Einhorn Gipsmalerei-Set',
        description: `Alles, was du zum Bemalen und Personalisieren deiner Dreamy-Einhorn-Gipsfigur brauchst, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffne einfach die Box, leg deine Lieblingsplaylist auf, hol deine Freunde oder Familie dazu und mach das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt zum Entspannen zu Hause, für Mädelsabende, Partys, Familientreffen, kreative Workshops oder als durchdachtes und einzigartiges Geschenk.

Das Dreamy-Einhorn steckt voller Verspieltheit und Persönlichkeit — eine lebhafte Pose und ausdrucksstarke Details, die jeden Pinselstrich zum Erlebnis machen. Jedes Stück wird zum Unikat — du wählst die Farben, die Stimmung und das Endergebnis.

Was enthalten ist:
• 1 Dreamy-Einhorn-Gipsfigur, bereit zum Bemalen
• Farb-Set
• Pinsel
• Postkarte
• 2 Sticker`,
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
        description: `Everything you need to paint and personalize your Starlight Unicorn plaster figure is included in the kit: a plaster figurine, paint set, and brush. Simply open the box, put on your favorite playlist, gather your friends or family, and turn painting into a cozy, creative experience.

This kit is perfect for relaxing at home, girls' nights, parties, family gatherings, creative workshops, or as a thoughtful and unique gift. Painting plaster figures is a great way to slow down, unwind, spark creativity, and enjoy the process of making something with your own hands.

The Starlight Unicorn is graceful and elegant — a poised figure with fine details that inspire you to reach for your most beautiful colours. Every piece becomes one of a kind — you choose the colors, the mood, and the final look.

What's included:
• 1 Starlight Unicorn plaster figurine ready to paint
• paint set
• paintbrush
• postcard
• 2 stickers`,
      },
      fr: {
        name:        'Kit de Peinture Licorne Starlight en Plâtre',
        description: `Tout ce dont vous avez besoin pour peindre et personnaliser votre figurine Licorne Starlight en plâtre est inclus dans le kit : une figurine en plâtre, un set de peinture et un pinceau. Ouvrez simplement la boîte, mettez votre playlist préférée, réunissez vos amis ou votre famille, et transformez la peinture en une expérience créative et chaleureuse.

Ce kit est parfait pour se détendre à la maison, les soirées entre amies, les fêtes, les réunions en famille, les ateliers créatifs, ou comme cadeau attentionné et original.

La Licorne Starlight est gracieuse et élégante — une figurine raffinée aux détails soignés qui vous inspirent à choisir vos plus belles couleurs. Chaque pièce devient unique — vous choisissez les couleurs, l'ambiance et le résultat final.

Ce qui est inclus :
• 1 figurine Licorne Starlight en plâtre prête à peindre
• set de peinture
• pinceau
• carte postale
• 2 autocollants`,
      },
      de: {
        name:        'Starlight Einhorn Gipsmalerei-Set',
        description: `Alles, was du zum Bemalen und Personalisieren deiner Starlight-Einhorn-Gipsfigur brauchst, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffne einfach die Box, leg deine Lieblingsplaylist auf, hol deine Freunde oder Familie dazu und mach das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt zum Entspannen zu Hause, für Mädelsabende, Partys, Familientreffen, kreative Workshops oder als durchdachtes und einzigartiges Geschenk.

Das Starlight-Einhorn ist anmutig und elegant — eine ausdrucksstarke Figur mit feinen Details, die dich dazu einlädt, deine schönsten Farben zu wählen. Jedes Stück wird zum Unikat — du wählst die Farben, die Stimmung und das Endergebnis.

Was enthalten ist:
• 1 Starlight-Einhorn-Gipsfigur, bereit zum Bemalen
• Farb-Set
• Pinsel
• Postkarte
• 2 Sticker`,
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
        description: `Everything you need to paint and personalize your Diplodocus plaster figure is included in the kit: a plaster figurine, paint set, and brush. Simply open the box, put on your favorite playlist, gather your friends or family, and turn painting into a cozy, creative experience.

This kit is perfect for relaxing at home, family evenings, kids' parties, birthday gifts, creative workshops, or for anyone who loves dinosaurs. Painting plaster figures is a great way to slow down, unwind, spark creativity, and enjoy the process of making something with your own hands.

The Diplodocus — the gentle long-necked giant of the Jurassic — makes a striking figure to paint. Big, bold, and full of character, it's a canvas that lets your imagination roam as freely as the dinosaurs once did. Every piece becomes one of a kind.

What's included:
• 1 Diplodocus plaster figurine ready to paint
• paint set
• paintbrush
• postcard
• 2 stickers`,
      },
      fr: {
        name:        'Kit de Peinture Diplodocus en Plâtre',
        description: `Tout ce dont vous avez besoin pour peindre et personnaliser votre figurine Diplodocus en plâtre est inclus dans le kit : une figurine en plâtre, un set de peinture et un pinceau. Ouvrez simplement la boîte, mettez votre playlist préférée, réunissez vos amis ou votre famille, et transformez la peinture en une expérience créative et chaleureuse.

Ce kit est parfait pour les soirées en famille, les fêtes d'anniversaire, les ateliers créatifs, ou pour tous ceux qui adorent les dinosaures.

Le Diplodocus — le doux géant au long cou du Jurassique — est une figurine impressionnante à peindre. Grand, expressif et plein de caractère, il offre une toile où votre imagination peut vagabonder aussi librement que les dinosaures autrefois. Chaque pièce devient unique.

Ce qui est inclus :
• 1 figurine Diplodocus en plâtre prête à peindre
• set de peinture
• pinceau
• carte postale
• 2 autocollants`,
      },
      de: {
        name:        'Diplodocus Gipsmalerei-Set',
        description: `Alles, was du zum Bemalen und Personalisieren deiner Diplodocus-Gipsfigur brauchst, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffne einfach die Box, leg deine Lieblingsplaylist auf, hol deine Freunde oder Familie dazu und mach das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt für Familienabende, Kindergeburtstage, kreative Workshops oder für alle, die Dinosaurier lieben.

Der Diplodocus — der sanfte Langhals-Riese der Jurazeit — ist eine beeindruckende Figur zum Bemalen. Groß, ausdrucksstark und voller Charakter bietet er eine Leinwand, auf der deine Fantasie so frei schweifen kann wie die Dinosaurier einst. Jedes Stück wird zum Unikat.

Was enthalten ist:
• 1 Diplodocus-Gipsfigur, bereit zum Bemalen
• Farb-Set
• Pinsel
• Postkarte
• 2 Sticker`,
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
        description: `Everything you need to paint and personalize your Stegosaurus plaster figure is included in the kit: a plaster figurine, paint set, and brush. Simply open the box, put on your favorite playlist, gather your friends or family, and turn painting into a cozy, creative experience.

This kit is perfect for relaxing at home, family evenings, kids' parties, birthday gifts, creative workshops, or for anyone who loves dinosaurs. Painting plaster figures is a great way to slow down, unwind, spark creativity, and enjoy the process of making something with your own hands.

The Stegosaurus — with its iconic spiky back and sturdy stance — is one of the most recognisable dinosaurs of all time. Its bold silhouette makes for a fantastically fun figure to paint and display. Every piece becomes one of a kind — you choose the colors, the mood, and the final look.

What's included:
• 1 Stegosaurus plaster figurine ready to paint
• paint set
• paintbrush
• postcard
• 2 stickers`,
      },
      fr: {
        name:        'Kit de Peinture Stégosaure en Plâtre',
        description: `Tout ce dont vous avez besoin pour peindre et personnaliser votre figurine Stégosaure en plâtre est inclus dans le kit : une figurine en plâtre, un set de peinture et un pinceau. Ouvrez simplement la boîte, mettez votre playlist préférée, réunissez vos amis ou votre famille, et transformez la peinture en une expérience créative et chaleureuse.

Ce kit est parfait pour les soirées en famille, les fêtes d'anniversaire, les ateliers créatifs, ou pour tous ceux qui adorent les dinosaures.

Le Stégosaure — avec son dos emblématique hérissé de plaques et sa posture robuste — est l'un des dinosaures les plus reconnaissables de tous les temps. Sa silhouette audacieuse en fait une figurine fantastique à peindre et à exposer. Chaque pièce devient unique — vous choisissez les couleurs, l'ambiance et le résultat final.

Ce qui est inclus :
• 1 figurine Stégosaure en plâtre prête à peindre
• set de peinture
• pinceau
• carte postale
• 2 autocollants`,
      },
      de: {
        name:        'Stegosaurus Gipsmalerei-Set',
        description: `Alles, was du zum Bemalen und Personalisieren deiner Stegosaurus-Gipsfigur brauchst, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffne einfach die Box, leg deine Lieblingsplaylist auf, hol deine Freunde oder Familie dazu und mach das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt für Familienabende, Kindergeburtstage, kreative Workshops oder für alle, die Dinosaurier lieben.

Der Stegosaurus — mit seinem unverkennbaren Stachelrücken und seiner kräftigen Haltung — ist einer der bekanntesten Dinosaurier aller Zeiten. Seine markante Silhouette macht ihn zu einer fantastisch schönen Figur zum Bemalen und Ausstellen. Jedes Stück wird zum Unikat — du wählst die Farben, die Stimmung und das Endergebnis.

Was enthalten ist:
• 1 Stegosaurus-Gipsfigur, bereit zum Bemalen
• Farb-Set
• Pinsel
• Postkarte
• 2 Sticker`,
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
