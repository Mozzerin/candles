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
    category:      'kids',
    images:        [
      'images/products/kits/unicorn1.png',
      'images/products/kits/Dreamy_Unicorn3.png',
      'images/products/kits/Moonlight_Unicorn3.png',
      'images/products/kits/Starlight_Unicorn3.png',
      'images/products/kits/unicorn.png',
    ],
    price:         49.00,
    originalPrice: null,
    onSale:        false,
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
    category:      'kids',
    images:        [
      'images/products/kits/Moonlight_Unicorn1.jpg',
      'images/products/kits/Moonlight_Unicorn2.png',
      'images/products/kits/Moonlight_Unicorn3.png',
      'images/products/kits/unicorn.png',
    ],
    price:         15.00,
    originalPrice: null,
    onSale:        false,
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
    category:      'kids',
    images:        [
      'images/products/kits/Dreamy_Unicorn1.png',
      'images/products/kits/Dreamy_Unicorn2.png',
      'images/products/kits/Dreamy_Unicorn3.png',
      'images/products/kits/unicorn.png',
    ],
    price:         15.00,
    originalPrice: null,
    onSale:        false,
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
    category:      'kids',
    images:        [
      'images/products/kits/Starlight_Unicorn1.png',
      'images/products/kits/Starlight_Unicorn2.png',
      'images/products/kits/Starlight_Unicorn3.png',
      'images/products/kits/unicorn.png',
    ],
    price:         15.00,
    originalPrice: null,
    onSale:        false,
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
    category:      'kids',
    images:        [
      'images/products/kits/dinosaur1.png',
      'images/products/kits/Diplodocus3.png',
      'images/products/kits/Stegosaurus3.png',
      'images/products/kits/dinosavr.png',
    ],
    price:         49.00,
    originalPrice: null,
    onSale:        false,
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
    category:      'kids',
    images:        [
      'images/products/kits/Diplodocus1.png',
      'images/products/kits/Diplodocus2.png',
      'images/products/kits/Diplodocus3.png',
      'images/products/kits/dinosavr.png',
    ],
    price:         15.00,
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
    category:      'kids',
    images:        [
      'images/products/kits/Stegosaurus1.png',
      'images/products/kits/Stegosaurus2.jpg',
      'images/products/kits/Stegosaurus3.png',
      'images/products/kits/dinosavr.png',
    ],
    price:         15.00,
    originalPrice: null,
    onSale:        false,
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

  // ── CANDLE COLLECTION ─────────────────────────────────────────────────

  {
    id:            'candle-frog',
    category:      'candle',
    images:        [
      'images/products/candles/frog_crone.png',
      'images/products/candles/frog1.png',
      'images/products/candles/frog2.png',
      'images/products/candles/frog3.mp4',
    ],
    price:         39.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 13 × 8 cm',
    translations: {
      en: {
        name: 'Frog Candle',
        description: `A handcrafted frog-shaped candle, full of character and charm. Made with care in Switzerland, this whimsical figure works equally well as a decorative piece or a functional candle. Its smooth, detailed silhouette makes it a perfect conversation starter on any shelf, desk, or windowsill.

A delightful gift for anyone who loves animals, nature, or just something unexpected and fun.

What's included:
• 1 handcrafted frog-shaped candle
• Made in Switzerland`,
      },
      fr: {
        name: 'Bougie Grenouille',
        description: `Une bougie artisanale en forme de grenouille, pleine de caractère et de charme. Fabriquée avec soin en Suisse, cette figurine espiègle fonctionne aussi bien comme pièce décorative que comme bougie fonctionnelle. Sa silhouette lisse et détaillée en fait un accessoire parfait sur toute étagère, bureau ou rebord de fenêtre.

Un cadeau délicieux pour tous ceux qui aiment les animaux, la nature ou simplement quelque chose d'inattendu et d'amusant.

Ce qui est inclus :
• 1 bougie grenouille artisanale
• Fabriquée en Suisse`,
      },
      de: {
        name: 'Frosch-Kerze',
        description: `Eine handgefertigte Kerze in Froschform — voll Charakter und Charme. In der Schweiz mit Sorgfalt hergestellt, eignet sich diese verspielte Figur gleichermaßen als Dekorationsstück oder als funktionale Kerze. Ihre glatte, detaillierte Silhouette macht sie zum perfekten Blickfang auf jedem Regal, Schreibtisch oder Fensterbrett.

Ein wunderbares Geschenk für alle, die Tiere, Natur oder einfach etwas Unerwartetes und Fröhliches lieben.

Was enthalten ist:
• 1 handgefertigte Frosch-Kerze
• Hergestellt in der Schweiz`,
      },
      ru: {
        name: 'Свеча «Лягушка»',
        description: `Свеча ручной работы в форме лягушки — с характером и шармом. Изготовлена с заботой в Швейцарии, эта игривая фигурка одинаково хороша и как декоративный предмет, и как функциональная свеча. Плавный, детально проработанный силуэт станет идеальным украшением любой полки, стола или подоконника.

Прекрасный подарок для тех, кто любит животных, природу или просто что-то неожиданное и весёлое.

Что входит:
• 1 свеча-лягушка ручной работы
• Сделано в Швейцарии`,
      },
    },
  },

  {
    id:            'candle-frog-hat',
    category:      'candle',
    images:        [
      'images/products/candles/frog_hat.png',
      'images/products/candles/froghat1.png',
      'images/products/candles/froghat2.png',
      'images/products/candles/froghat3.mp4',
    ],
    price:         39.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 13 × 11 cm',
    translations: {
      en: {
        name: 'Frog in a Hat Candle',
        description: `Meet the most dapper frog you'll ever own. This handcrafted candle features a frog in a top hat — a little touch of absurdist elegance that brightens up any space. Made by hand in Switzerland, it's the kind of gift that makes someone smile the moment they unwrap it.

Place it on your desk, shelf, or bathroom counter and let it start conversations. A perfect gift for someone with a sense of humour and an eye for the charming and unexpected.

What's included:
• 1 handcrafted frog-in-a-hat candle
• Made in Switzerland`,
      },
      fr: {
        name: 'Bougie Grenouille au Chapeau',
        description: `Voici la grenouille la plus élégante que vous posséderez jamais. Cette bougie artisanale représente une grenouille portant un chapeau haut-de-forme — une touche d'élégance absurde qui égaie n'importe quel espace. Fabriquée à la main en Suisse, c'est le genre de cadeau qui fait sourire dès le déballage.

Le cadeau parfait pour quelqu'un qui a le sens de l'humour et un œil pour le charmant et l'inattendu.

Ce qui est inclus :
• 1 bougie grenouille au chapeau artisanale
• Fabriquée en Suisse`,
      },
      de: {
        name: 'Frosch-mit-Hut-Kerze',
        description: `Begegnen Sie dem stilbewusstesten Frosch, den Sie je besessen haben. Diese handgefertigte Kerze zeigt einen Frosch mit Zylinder — ein kleines Detail absurder Eleganz, das jeden Raum aufheitert. In der Schweiz handgefertigt, ist es die Art von Geschenk, bei der man vom ersten Moment des Auspackens an lächelt.

Das perfekte Geschenk für jemanden mit Sinn für Humor und einem Blick für das Charmante und Unerwartete.

Was enthalten ist:
• 1 handgefertigte Frosch-mit-Hut-Kerze
• Hergestellt in der Schweiz`,
      },
      ru: {
        name: 'Свеча «Лягушка в шляпе»',
        description: `Самая элегантная лягушка из всех, что у вас когда-либо были. Свеча ручной работы изображает лягушку в цилиндре — маленькая деталь абсурдной элегантности, которая украсит любое пространство. Изготовлена вручную в Швейцарии — это именно тот подарок, от которого улыбаются сразу при распаковке.

Идеальный подарок для того, у кого есть чувство юмора и вкус к очаровательному и неожиданному.

Что входит:
• 1 свеча «Лягушка в шляпе» ручной работы
• Сделано в Швейцарии`,
      },
    },
  },

  {
    id:            'candle-hyacinth',
    category:      'candle',
    images:        [
      'images/products/candles/hyacinth1.png',
      'images/products/candles/hyacinth2.png',
      'images/products/candles/hyacinth3.png',
      'images/products/candles/hyacinth4.mp4',
    ],
    price:         29.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 10 × 14 cm',
    translations: {
      en: {
        name: 'Hyacinth Candle',
        description: `A beautifully detailed hyacinth candle, handcrafted in Switzerland. The layered clusters of petals capture the natural elegance of one of spring's most beloved flowers. Whether displayed solo or as part of a floral arrangement, this candle brings a touch of botanical beauty to any interior.

The hyacinth is a symbol of rebirth and new beginnings — making this a thoughtful gift for housewarmings, birthdays, or simply to bring a little nature indoors.

What's included:
• 1 handcrafted hyacinth candle
• Made in Switzerland`,
      },
      fr: {
        name: 'Bougie Jacinthe',
        description: `Une bougie jacinthe magnifiquement détaillée, fabriquée à la main en Suisse. Les grappes de pétales superposées capturent l'élégance naturelle de l'une des fleurs les plus appréciées du printemps. Exposée seule ou intégrée dans une composition florale, cette bougie apporte une touche de beauté botanique à tout intérieur.

La jacinthe est un symbole de renaissance — ce qui en fait un cadeau attentionné pour une pendaison de crémaillère, un anniversaire ou simplement pour apporter un peu de nature à l'intérieur.

Ce qui est inclus :
• 1 bougie jacinthe artisanale
• Fabriquée en Suisse`,
      },
      de: {
        name: 'Hyazinthen-Kerze',
        description: `Eine wunderschön detaillierte Hyazinthen-Kerze, handgefertigt in der Schweiz. Die geschichteten Blütentrauben fangen die natürliche Eleganz einer der beliebtesten Frühlingsblumen ein. Ob allein ausgestellt oder als Teil eines floralen Arrangements — diese Kerze bringt einen Hauch botanischer Schönheit in jeden Raum.

Die Hyazinthe ist ein Symbol der Erneuerung — ein nachdenkliches Geschenk zur Einweihungsfeier, zum Geburtstag oder einfach um etwas Natur nach drinnen zu bringen.

Was enthalten ist:
• 1 handgefertigte Hyazinthen-Kerze
• Hergestellt in der Schweiz`,
      },
      ru: {
        name: 'Свеча «Гиацинт»',
        description: `Красиво детализированная свеча в форме гиацинта, изготовленная вручную в Швейцарии. Многослойные грозди лепестков передают природную элегантность одного из самых любимых весенних цветков. Эта свеча принесёт нотку ботанической красоты в любой интерьер — отдельно или в составе цветочной композиции.

Гиацинт — символ возрождения и новых начал. Это продуманный подарок на новоселье, день рождения или просто чтобы привнести немного природы в дом.

Что входит:
• 1 свеча «Гиацинт» ручной работы
• Сделано в Швейцарии`,
      },
    },
  },

  {
    id:            'candle-pumpkin',
    category:      'candle',
    images:        [
      'images/products/candles/pumpkin.png',
      'images/products/candles/pumpkin1.png',
      'images/products/candles/pumpkin2.png',
      'images/products/candles/pumpkin3.png',
      'images/products/candles/pumpkin4.mp4',
    ],
    price:         29.00,
    originalPrice: 39.00,
    onSale:        true,
    size: '≈ 12 × 14 cm',
    translations: {
      en: {
        name: 'Pumpkin Candle',
        description: `A handcrafted pumpkin candle — perfect for autumn decorating, Halloween, or as a cosy accent piece year-round. Made in Switzerland with careful attention to the natural form of a pumpkin: the ribbed silhouette, the rounded body, the little stem on top.

Works beautifully on its own or grouped together in a seasonal display. A warm, inviting piece that brings the feeling of autumn indoors.

What's included:
• 1 handcrafted pumpkin candle
• Made in Switzerland`,
      },
      fr: {
        name: 'Bougie Citrouille',
        description: `Une bougie citrouille artisanale — parfaite pour la décoration d'automne, Halloween ou comme pièce décorative chaleureuse toute l'année. Fabriquée en Suisse avec une attention particulière à la forme naturelle de la citrouille : la silhouette côtelée, le corps arrondi, la petite tige sur le dessus.

S'expose magnifiquement seule ou groupée dans une composition saisonnière.

Ce qui est inclus :
• 1 bougie citrouille artisanale
• Fabriquée en Suisse`,
      },
      de: {
        name: 'Kürbis-Kerze',
        description: `Eine handgefertigte Kürbis-Kerze — perfekt für die Herbstdekoration, Halloween oder als gemütliches Akzentstück das ganze Jahr über. In der Schweiz mit besonderer Aufmerksamkeit für die natürliche Form eines Kürbisses hergestellt: die gerippte Silhouette, der runde Körper, der kleine Stiel oben.

Wunderschön allein oder in Gruppen als saisonale Dekoration.

Was enthalten ist:
• 1 handgefertigte Kürbis-Kerze
• Hergestellt in der Schweiz`,
      },
      ru: {
        name: 'Свеча «Тыква»',
        description: `Свеча ручной работы в форме тыквы — идеальна для осеннего декора, Хэллоуина или как уютный акцентный предмет круглый год. Изготовлена в Швейцарии с вниманием к естественной форме тыквы: рёбра, округлое тело, небольшой черешок сверху.

Выглядит прекрасно отдельно или в группе как сезонная декорация.

Что входит:
• 1 свеча «Тыква» ручной работы
• Сделано в Швейцарии`,
      },
    },
  },

  {
    id:            'candle-carousel',
    category:      'candle',
    images:        [
      'images/products/candles/carousel_m.png',
      'images/products/candles/carousel1.png',
      'images/products/candles/carousel2.png',
      'images/products/candles/carousel3.png',
      'images/products/candles/carousel4.png',
      'images/products/candles/carousel5.mp4',
    ],
    price:         49.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 13 × 12 cm',
    translations: {
      en: {
        name: 'Carousel Candle',
        description: `A stunning decorative carousel candle, handcrafted in Switzerland. One of the most intricate pieces in the Emma's Lab collection — delicate horses, an ornate canopy, and a detailed base come together to create something that feels truly magical.

This candle is as much an art object as it is a candle. Display it on a mantelpiece, shelf, or sideboard, and gift it to someone who appreciates beautiful handmade things. It brings the warmth and wonder of a fairground carousel into any home.

What's included:
• 1 handcrafted carousel candle
• Made in Switzerland`,
      },
      fr: {
        name: 'Bougie Carrousel',
        description: `Une magnifique bougie carrousel décorative, fabriquée à la main en Suisse. L'une des pièces les plus complexes de la collection Emma's Lab — de délicats chevaux, un auvent ornemental et une base détaillée s'assemblent pour créer quelque chose de véritablement magique.

Cette bougie est autant un objet d'art qu'une bougie. Exposez-la sur une cheminée, une étagère ou un buffet. Un cadeau pour ceux qui apprécient les belles choses faites à la main.

Ce qui est inclus :
• 1 bougie carrousel artisanale
• Fabriquée en Suisse`,
      },
      de: {
        name: 'Karussell-Kerze',
        description: `Eine atemberaubende dekorative Karussell-Kerze, handgefertigt in der Schweiz. Eines der aufwendigsten Stücke der Emma's Lab Kollektion — zarte Pferde, ein verziertes Dach und eine detaillierte Basis ergeben zusammen etwas, das sich wirklich magisch anfühlt.

Diese Kerze ist ebenso sehr ein Kunstobjekt wie eine Kerze. Stellen Sie sie auf einen Kaminsims, ein Regal oder ein Sideboard. Ein Geschenk für alle, die schöne handgemachte Dinge schätzen.

Was enthalten ist:
• 1 handgefertigte Karussell-Kerze
• Hergestellt in der Schweiz`,
      },
      ru: {
        name: 'Свеча «Карусель»',
        description: `Потрясающая декоративная свеча-карусель, изготовленная вручную в Швейцарии. Одна из самых сложных работ в коллекции Emma's Lab — изящные лошади, украшенный навес и детализированное основание создают нечто поистине волшебное.

Эта свеча — столь же предмет искусства, сколь и источник света. Поставьте её на каминную полку, полку или комод. Подарок для тех, кто ценит красивые вещи ручной работы.

Что входит:
• 1 свеча «Карусель» ручной работы
• Сделано в Швейцарии`,
      },
    },
  },

  {
    id:            'candle-xmas-bauble',
    category:      'candle',
    images:        [
      'images/products/candles/christmass_tree_bowl.png',
      'images/products/candles/Christmas tree bauble1.png',
      'images/products/candles/Christmas tree bauble2.png',
      'images/products/candles/Christmas tree bauble3.png',
      'images/products/candles/Christmas tree bauble4.mp4',
    ],
    price:         29.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 10 × 10 cm',
    translations: {
      en: {
        name: 'Christmas Bauble Candle',
        description: `A handcrafted candle in the shape of a classic Christmas tree ornament — smooth, round, and beautifully made. This bauble candle captures the warm nostalgia of holiday decorating in a form you can display year after year.

Perfect as a Christmas gift, a stocking filler, or a festive addition to your seasonal décor. Give it on its own or pair it with other pieces from the Emma's Lab candle collection.

What's included:
• 1 handcrafted Christmas bauble candle
• Made in Switzerland`,
      },
      fr: {
        name: 'Bougie Boule de Noël',
        description: `Une bougie artisanale en forme de boule de Noël classique — lisse, ronde et magnifiquement réalisée. Cette bougie-boule capture la douce nostalgie des décorations de fête dans une forme que vous pouvez exposer année après année.

Parfaite comme cadeau de Noël, cadeau de Noël de bas de laine ou ajout festif à votre décoration saisonnière.

Ce qui est inclus :
• 1 bougie boule de Noël artisanale
• Fabriquée en Suisse`,
      },
      de: {
        name: 'Weihnachtskugel-Kerze',
        description: `Eine handgefertigte Kerze in Form eines klassischen Weihnachtsbaumschmucks — glatt, rund und wunderschön gearbeitet. Diese Kugelkerze fängt die warme Nostalgie der festlichen Dekoration in einer Form ein, die Sie Jahr für Jahr aufstellen können.

Perfekt als Weihnachtsgeschenk, Strumpffüller oder festliche Ergänzung Ihrer saisonalen Dekoration.

Was enthalten ist:
• 1 handgefertigte Weihnachtskugel-Kerze
• Hergestellt in der Schweiz`,
      },
      ru: {
        name: 'Свеча «Новогодний шар»',
        description: `Свеча ручной работы в форме классического рождественского шара — гладкая, круглая и красиво исполненная. Эта свеча передаёт тёплую ностальгию праздничного декора в форме, которую можно выставлять каждый год.

Идеальный рождественский подарок, дополнение к праздничному декору или часть коллекции свечей Emma's Lab.

Что входит:
• 1 свеча «Новогодний шар» ручной работы
• Сделано в Швейцарии`,
      },
    },
  },

  {
    id:            'candle-mouse-king-red',
    category:      'candle',
    images:        [
      'images/products/candles/king_red.png',
      'images/products/candles/Mouse King1.png',
      'images/products/candles/Mouse King2.PNG',
      'images/products/candles/Mouse King3.png',
      'images/products/candles/Mouse King4.mp4',
    ],
    price:         79.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 8 × 13 cm',
    translations: {
      en: {
        name: 'Mouse King Candle — Red',
        description: `The Mouse King in his royal red uniform — handcrafted in Switzerland. Inspired by the legendary villain of The Nutcracker, complete with his crown, fierce expression, and regal posture. A collectible piece that bridges handmade craft and Christmas storytelling.

A memorable gift for anyone who loves The Nutcracker, ballet, or extraordinary seasonal decorations.

What's included:
• 1 handcrafted Mouse King candle (red)
• Made in Switzerland`,
      },
      fr: {
        name: 'Bougie Roi des Souris — Rouge',
        description: `Le Roi des souris en uniforme rouge royal — fabriqué à la main en Suisse. Inspiré du légendaire méchant de Casse-Noisette, avec sa couronne, son expression féroce et sa posture royale.

Ce qui est inclus :
• 1 bougie Roi des souris artisanale (rouge)
• Fabriquée en Suisse`,
      },
      de: {
        name: 'Mäusekönig-Kerze — Rot',
        description: `Der Mäusekönig in seiner königlichen roten Uniform — handgefertigt in der Schweiz. Inspiriert vom legendären Bösewicht aus dem Nussknacker.

Was enthalten ist:
• 1 handgefertigte Mäusekönig-Kerze (rot)
• Hergestellt in der Schweiz`,
      },
      ru: {
        name: 'Свеча «Мышиный Король» — Красный',
        description: `Мышиный Король в красном королевском мундире — изготовлен вручную в Швейцарии. По мотивам «Щелкунчика» — с короной, грозным взглядом и царственной осанкой.

Что входит:
• 1 свеча «Мышиный Король» (красный) ручной работы
• Сделано в Швейцарии`,
      },
    },
  },

  {
    id:            'candle-mouse-king-blue',
    category:      'candle',
    images:        [
      'images/products/candles/kingmouse-blue.png',
    ],
    price:         69.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 8 × 13 cm',
    translations: {
      en: {
        name: 'Mouse King Candle — Blue',
        description: `The Mouse King in his striking blue uniform — handcrafted in Switzerland. A bold alternative to the classic red, with the same regal crown and fierce Nutcracker character. A unique collectible for the festive season.

What's included:
• 1 handcrafted Mouse King candle (blue)
• Made in Switzerland`,
      },
      fr: {
        name: 'Bougie Roi des Souris — Bleu',
        description: `Le Roi des souris en uniforme bleu saisissant — fabriqué à la main en Suisse. Une alternative audacieuse au rouge classique, avec la même couronne royale et le même caractère de Casse-Noisette.

Ce qui est inclus :
• 1 bougie Roi des souris artisanale (bleu)
• Fabriquée en Suisse`,
      },
      de: {
        name: 'Mäusekönig-Kerze — Blau',
        description: `Der Mäusekönig in seiner auffälligen blauen Uniform — handgefertigt in der Schweiz. Eine kühne Alternative zum klassischen Rot, mit derselben königlichen Krone.

Was enthalten ist:
• 1 handgefertigte Mäusekönig-Kerze (blau)
• Hergestellt in der Schweiz`,
      },
      ru: {
        name: 'Свеча «Мышиный Король» — Синий',
        description: `Мышиный Король в синем мундире — изготовлен вручную в Швейцарии. Смелая альтернатива классическому красному — та же корона, тот же характер из «Щелкунчика».

Что входит:
• 1 свеча «Мышиный Король» (синий) ручной работы
• Сделано в Швейцарии`,
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
