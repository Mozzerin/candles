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
    price:         45.00,
    originalPrice: 70.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Unicorn Plaster Painting Kit – Party Box',
        description: `Everything you need for a full creative party is in one box — 10 complete unicorn painting kits, ready to go. Open the box, hit play on your favorite playlist, and let everyone choose their unicorn and paint it their own way.

This Party Box is made for birthday parties, girls' nights, family gatherings, creative workshops, and group events. It's also perfect as a gift for a whole class, a school event, or any celebration where you want to give people something fun and memorable to make with their hands.

At CHF 4.50 per kit, the Party Box saves you 35% compared to buying individually — the best value for groups.

What's included (×10 complete kits):
• 10 plaster unicorn figurines ready to paint
• 10 paint sets
• 10 paintbrushes
• 10 postcards
• 20 stickers`,
      },
      fr: {
        name:        'Kit de Peinture Licorne en Plâtre – Party Box',
        description: `Tout ce qu'il faut pour une fête créative complète dans une seule boîte — 10 kits de peinture licorne complets, prêts à l'emploi. Ouvrez la boîte, lancez votre playlist préférée, et laissez chacun choisir sa licorne et la peindre à sa façon.

Cette Party Box est idéale pour les anniversaires, les soirées entre amies, les réunions en famille, les ateliers créatifs et les événements en groupe. Elle convient aussi parfaitement comme cadeau pour une classe entière, une fête scolaire ou toute célébration où vous souhaitez offrir quelque chose de fun et de mémorable à créer avec les mains.

À CHF 4,50 par kit, la Party Box vous fait économiser 35 % par rapport à l'achat individuel — le meilleur rapport qualité-prix pour les groupes.

Ce qui est inclus (×10 kits complets) :
• 10 figurines licorne en plâtre prêtes à peindre
• 10 sets de peinture
• 10 pinceaux
• 10 cartes postales
• 20 autocollants`,
      },
      de: {
        name:        'Einhorn Gipsmalerei-Set – Party Box',
        description: `Alles, was du für eine vollständige Kreativ-Party brauchst, in einer Box — 10 komplette Einhorn-Mal-Sets, sofort einsatzbereit. Öffne die Box, leg deine Lieblingsplaylist auf und lass jeden sein Einhorn auswählen und nach eigener Vorstellung bemalen.

Diese Party Box ist ideal für Kindergeburtstage, Mädelsabende, Familientreffen, kreative Workshops und Gruppenevents. Sie eignet sich auch hervorragend als Geschenk für eine ganze Klasse, ein Schulevent oder jede Feier, bei der du den Menschen etwas Spaßiges und Unvergessliches zum Selbermachen schenken möchtest.

Mit CHF 4,50 pro Kit sparst du mit der Party Box 35 % gegenüber dem Einzelkauf — der beste Preis für Gruppen.

Was enthalten ist (×10 komplette Sets):
• 10 Gips-Einhorn-Figuren, bereit zum Bemalen
• 10 Farb-Sets
• 10 Pinsel
• 10 Postkarten
• 20 Sticker`,
      },
      ru: {
        name:        'Набор для росписи гипсовых единорогов – Party Box',
        description: `Всё необходимое для творческой вечеринки в одной коробке — 10 полных наборов для росписи единорогов, готовых к использованию. Откройте коробку, включите музыку и позвольте каждому выбрать своего единорога и раскрасить его по-своему.

Party Box создан для дней рождений, девичников, семейных встреч, творческих мастер-классов и групповых мероприятий. Это также идеальный подарок для целого класса, школьного праздника или любого торжества, где хочется дать людям что-то интересное и запоминающееся для творчества.

По CHF 4.50 за набор, Party Box экономит 35% по сравнению с покупкой по одному — лучшая цена для группы.

Что входит (×10 полных наборов):
• 10 гипсовых фигурок единорогов, готовых к росписи
• 10 наборов красок
• 10 кистей
• 10 открыток
• 20 наклеек`,
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
    price:         5.00,
    originalPrice: 7.00,
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
      ru: {
        name:        'Набор для росписи гипсового единорога Moonlight',
        description: `Всё необходимое для росписи и украшения гипсовой фигурки единорога Moonlight уже в наборе: гипсовая фигурка, набор красок и кисть. Просто откройте коробку, включите любимый плейлист, позовите друзей или семью — и превратите рисование в уютное творческое занятие.

Набор идеально подойдёт для отдыха дома, девичников, вечеринок, семейных встреч, творческих мастер-классов или в качестве продуманного и оригинального подарка.

Единорог Moonlight обладает мягким, спокойным обликом — плавные линии и безмятежное выражение, которое приглашает вас придумать собственную цветовую историю. Каждая фигурка становится уникальной — вы выбираете цвета, настроение и итоговый вид.

Что входит в набор:
• 1 гипсовая фигурка единорога Moonlight, готовая к росписи
• набор красок
• кисть
• открытка
• 2 наклейки`,
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
    price:         5.00,
    originalPrice: 7.00,
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
      ru: {
        name:        'Набор для росписи гипсового единорога Dreamy',
        description: `Всё необходимое для росписи и украшения гипсовой фигурки единорога Dreamy уже в наборе: гипсовая фигурка, набор красок и кисть. Просто откройте коробку, включите любимый плейлист, позовите друзей или семью — и превратите рисование в уютное творческое занятие.

Набор идеально подойдёт для отдыха дома, девичников, вечеринок, семейных встреч, творческих мастер-классов или в качестве продуманного и оригинального подарка.

Единорог Dreamy полон игривости и характера — динамичная поза и выразительные детали, которые превращают каждый мазок кисти в маленькую историю. Каждая фигурка становится уникальной — вы выбираете цвета, настроение и итоговый вид.

Что входит в набор:
• 1 гипсовая фигурка единорога Dreamy, готовая к росписи
• набор красок
• кисть
• открытка
• 2 наклейки`,
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
    price:         5.00,
    originalPrice: 7.00,
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
      ru: {
        name:        'Набор для росписи гипсового единорога Starlight',
        description: `Всё необходимое для росписи и украшения гипсовой фигурки единорога Starlight уже в наборе: гипсовая фигурка, набор красок и кисть. Просто откройте коробку, включите любимый плейлист, позовите друзей или семью — и превратите рисование в уютное творческое занятие.

Набор идеально подойдёт для отдыха дома, девичников, вечеринок, семейных встреч, творческих мастер-классов или в качестве продуманного и оригинального подарка.

Единорог Starlight изящен и элегантен — выразительная фигурка с тонкими деталями, которая вдохновляет выбрать самые красивые цвета. Каждая фигурка становится уникальной — вы выбираете цвета, настроение и итоговый вид.

Что входит в набор:
• 1 гипсовая фигурка единорога Starlight, готовая к росписи
• набор красок
• кисть
• открытка
• 2 наклейки`,
      },
    },
  },

  // ── DINOSAUR KITS ─────────────────────────────────────────────────────

  {
    id:            'dinosaur-party-box',
    category:      'dinosaur',
    images:        [
      'images/dinosaur1.png',
      'images/Diplodocus3.png',
      'images/Stegosaurus3.png',
      'images/dinosavr.png',
    ],
    price:         45.00,
    originalPrice: 70.00,
    onSale:        true,
    translations: {
      en: {
        name:        'Dinosaur Plaster Painting Kit – Party Box',
        description: `Everything you need for a full creative party is in one box — 10 complete dinosaur painting kits, ready to go. Open the box, hit play on your favorite playlist, and let everyone choose their dinosaur and paint it their own way.

This Party Box is made for birthday parties, family gatherings, school events, creative workshops, and any group celebration where you want to give people something fun and hands-on to make together. It's also a perfect gift for an entire class or a dino-loving kid who wants to share the fun.

At CHF 4.50 per kit, the Party Box saves you 35% compared to buying individually — the best value for groups.

What's included (×10 complete kits):
• 10 plaster dinosaur figurines ready to paint
• 10 paint sets
• 10 paintbrushes
• 10 postcards
• 20 stickers`,
      },
      fr: {
        name:        'Kit de Peinture Dinosaure en Plâtre – Party Box',
        description: `Tout ce qu'il faut pour une fête créative complète dans une seule boîte — 10 kits de peinture dinosaure complets, prêts à l'emploi. Ouvrez la boîte, lancez votre playlist préférée, et laissez chacun choisir son dinosaure et le peindre à sa façon.

Cette Party Box est idéale pour les anniversaires, les réunions en famille, les fêtes scolaires, les ateliers créatifs et toute célébration en groupe où vous souhaitez offrir quelque chose de fun et de mémorable à créer avec les mains. C'est aussi le cadeau parfait pour toute une classe ou un enfant fan de dinosaures qui veut partager l'aventure.

À CHF 4,50 par kit, la Party Box vous fait économiser 35 % par rapport à l'achat individuel — le meilleur rapport qualité-prix pour les groupes.

Ce qui est inclus (×10 kits complets) :
• 10 figurines dinosaure en plâtre prêtes à peindre
• 10 sets de peinture
• 10 pinceaux
• 10 cartes postales
• 20 autocollants`,
      },
      de: {
        name:        'Dinosaurier Gipsmalerei-Set – Party Box',
        description: `Alles, was du für eine vollständige Kreativ-Party brauchst, in einer Box — 10 komplette Dinosaurier-Mal-Sets, sofort einsatzbereit. Öffne die Box, leg deine Lieblingsplaylist auf und lass jeden seinen Dinosaurier auswählen und nach eigener Vorstellung bemalen.

Diese Party Box ist ideal für Kindergeburtstage, Familientreffen, Schulevents, kreative Workshops und jede Gruppenfeier, bei der du den Menschen etwas Spaßiges und Unvergessliches zum Selbermachen schenken möchtest. Sie ist auch das perfekte Geschenk für eine ganze Klasse oder ein dino-begeistertes Kind, das den Spaß teilen möchte.

Mit CHF 4,50 pro Kit sparst du mit der Party Box 35 % gegenüber dem Einzelkauf — der beste Preis für Gruppen.

Was enthalten ist (×10 komplette Sets):
• 10 Gips-Dinosaurier-Figuren, bereit zum Bemalen
• 10 Farb-Sets
• 10 Pinsel
• 10 Postkarten
• 20 Sticker`,
      },
      ru: {
        name:        'Набор для росписи гипсовых динозавров – Party Box',
        description: `Всё необходимое для творческой вечеринки в одной коробке — 10 полных наборов для росписи динозавров, готовых к использованию. Откройте коробку, включите музыку и позвольте каждому выбрать своего динозавра и раскрасить его по-своему.

Party Box создан для дней рождений, семейных встреч, школьных праздников, творческих мастер-классов и любых групповых мероприятий, где хочется дать людям что-то интересное и запоминающееся для совместного творчества. Это также идеальный подарок для целого класса или ребёнка-любителя динозавров, который хочет поделиться радостью с друзьями.

По CHF 4.50 за набор, Party Box экономит 35% по сравнению с покупкой по одному — лучшая цена для группы.

Что входит (×10 полных наборов):
• 10 гипсовых фигурок динозавров, готовых к росписи
• 10 наборов красок
• 10 кистей
• 10 открыток
• 20 наклеек`,
      },
    },
  },

  {
    id:            'dinosaur-kit-1',
    category:      'dinosaur',
    images:        [
      'images/Diplodocus1.png',
      'images/Diplodocus2.png',
      'images/Diplodocus3.png',
      'images/dinosavr.png',
    ],
    price:         5.00,
    originalPrice: 7.00,
    onSale:        true,
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
      ru: {
        name:        'Набор для росписи гипсового диплодока',
        description: `Всё необходимое для росписи и украшения гипсовой фигурки диплодока уже в наборе: гипсовая фигурка, набор красок и кисть. Просто откройте коробку, включите любимый плейлист, позовите друзей или семью — и превратите рисование в уютное творческое занятие.

Набор идеально подойдёт для семейных вечеров, детских дней рождения, творческих мастер-классов и всех, кто любит динозавров.

Диплодок — добродушный длинношеий гигант юрского периода — выглядит потрясающе в расписанном виде. Большой, харизматичный и полный характера, он даёт простор для фантазии, такой же свободной, как сами динозавры. Каждая фигурка становится уникальной.

Что входит в набор:
• 1 гипсовая фигурка диплодока, готовая к росписи
• набор красок
• кисть
• открытка
• 2 наклейки`,
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
    price:         5.00,
    originalPrice: 7.00,
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
      ru: {
        name:        'Набор для росписи гипсового стегозавра',
        description: `Всё необходимое для росписи и украшения гипсовой фигурки стегозавра уже в наборе: гипсовая фигурка, набор красок и кисть. Просто откройте коробку, включите любимый плейлист, позовите друзей или семью — и превратите рисование в уютное творческое занятие.

Набор идеально подойдёт для семейных вечеров, детских дней рождения, творческих мастер-классов и всех, кто любит динозавров.

Стегозавр — с его легендарной шипастой спиной и мощной осанкой — один из самых узнаваемых динозавров всех времён. Его яркий силуэт делает фигурку невероятно интересной для росписи и декора. Каждая фигурка становится уникальной — вы выбираете цвета, настроение и итоговый вид.

Что входит в набор:
• 1 гипсовая фигурка стегозавра, готовая к росписи
• набор красок
• кисть
• открытка
• 2 наклейки`,
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
