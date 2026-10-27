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
      'images/products/kits/unicorn1.webp',
      'images/products/kits/Dreamy_Unicorn3.webp',
      'images/products/kits/Moonlight_Unicorn3.webp',
      'images/products/kits/Starlight_Unicorn3.webp',
      'images/products/kits/unicorn.webp',
    ],
    price:         49.00,
    originalPrice: null,
    onSale:        false,
    translations: {
      en: {
        name:        'Unicorn Plaster Painting Kit – Party Box',
        description: `Everything you need for a full creative party is in one box — 10 complete unicorn painting kits, ready to go. Open the box, hit play on your favorite playlist, and let everyone choose their unicorn and paint it their own way.

This Party Box is made for birthday parties, girls' nights, family gatherings, creative workshops, and group events. It's also perfect as a gift for a whole class, a school event, or any celebration where you want to give people something fun and memorable to make with their hands.

At CHF 4.90 per kit, the Party Box saves you 38% compared to buying individually — the best value for groups.

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

À CHF 4,90 par kit, la Party Box vous fait économiser 38 % par rapport à l'achat individuel — le meilleur rapport qualité-prix pour les groupes.

Ce qui est inclus (×10 kits complets) :
• 10 figurines licorne en plâtre prêtes à peindre
• 10 sets de peinture
• 10 pinceaux
• 10 cartes postales
• 20 autocollants`,
      },
      de: {
        name:        'Einhorn Gipsmalerei-Set – Party Box',
        description: `Alles, was Sie für eine vollständige Kreativ-Party brauchen, in einer Box — 10 komplette Einhorn-Mal-Sets, sofort einsatzbereit. Öffnen Sie die Box, legen Sie Ihre Lieblingsplaylist auf und lassen Sie jeden sein Einhorn auswählen und nach eigener Vorstellung bemalen.

Diese Party Box ist ideal für Kindergeburtstage, Mädelsabende, Familientreffen, kreative Workshops und Gruppenevents. Sie eignet sich auch hervorragend als Geschenk für eine ganze Klasse, ein Schulevent oder jede Feier, bei der Sie den Gästen etwas Spassiges und Unvergessliches zum Selbermachen schenken möchten.

Mit CHF 4,90 pro Kit sparen Sie mit der Party Box 38 % gegenüber dem Einzelkauf — der beste Preis für Gruppen.

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

По CHF 4.90 за набор, Party Box экономит 38% по сравнению с покупкой по одному — лучшая цена для группы.

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
      'images/products/kits/Moonlight_Unicorn1.webp',
      'images/products/kits/Moonlight_Unicorn2.webp',
      'images/products/kits/Moonlight_Unicorn3.webp',
      'images/products/kits/unicorn.webp',
    ],
    price:         8.00,
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

Ce kit est parfait pour se détendre à la maison, les soirées entre amies, les fêtes, les réunions en famille, les ateliers créatifs, ou comme cadeau attentionné et original. Peindre des figurines en plâtre est une merveilleuse façon de ralentir, de se détendre, de stimuler sa créativité et de savourer le plaisir de créer quelque chose de ses propres mains.

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
        description: `Alles, was Sie zum Bemalen und Personalisieren Ihrer Moonlight-Einhorn-Gipsfigur brauchen, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffnen Sie einfach die Box, legen Sie Ihre Lieblingsplaylist auf, holen Sie Freunde oder Familie dazu und machen Sie das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt zum Entspannen zu Hause, für Mädelsabende, Partys, Familientreffen, kreative Workshops oder als durchdachtes und einzigartiges Geschenk. Gipsfiguren zu bemalen ist eine wunderbare Art, zur Ruhe zu kommen, abzuschalten, die Kreativität zu wecken und die Freude am Selbermachen zu geniessen.

Das Moonlight-Einhorn hat einen sanften, ruhigen Ausdruck — weiche Linien und eine friedvolle Ausstrahlung, die Sie einladen, Ihre eigene Farbgeschichte zu erzählen. Jedes Stück wird zum Unikat — Sie wählen die Farben, die Stimmung und das Endergebnis.

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

Набор идеально подойдёт для отдыха дома, девичников, вечеринок, семейных встреч, творческих мастер-классов или в качестве продуманного и оригинального подарка. Роспись гипсовых фигурок — отличный способ замедлиться, отдохнуть, пробудить творчество и получить удовольствие от того, что сделано своими руками.

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
      'images/products/kits/Dreamy_Unicorn1.webp',
      'images/products/kits/Dreamy_Unicorn2.webp',
      'images/products/kits/Dreamy_Unicorn3.webp',
      'images/products/kits/unicorn.webp',
    ],
    price:         8.00,
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

Ce kit est parfait pour se détendre à la maison, les soirées entre amies, les fêtes, les réunions en famille, les ateliers créatifs, ou comme cadeau attentionné et original. Peindre des figurines en plâtre est une merveilleuse façon de ralentir, de se détendre, de stimuler sa créativité et de savourer le plaisir de créer quelque chose de ses propres mains.

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
        description: `Alles, was Sie zum Bemalen und Personalisieren Ihrer Dreamy-Einhorn-Gipsfigur brauchen, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffnen Sie einfach die Box, legen Sie Ihre Lieblingsplaylist auf, holen Sie Freunde oder Familie dazu und machen Sie das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt zum Entspannen zu Hause, für Mädelsabende, Partys, Familientreffen, kreative Workshops oder als durchdachtes und einzigartiges Geschenk. Gipsfiguren zu bemalen ist eine wunderbare Art, zur Ruhe zu kommen, abzuschalten, die Kreativität zu wecken und die Freude am Selbermachen zu geniessen.

Das Dreamy-Einhorn steckt voller Verspieltheit und Persönlichkeit — eine lebhafte Pose und ausdrucksstarke Details, die jeden Pinselstrich zum Erlebnis machen. Jedes Stück wird zum Unikat — Sie wählen die Farben, die Stimmung und das Endergebnis.

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

Набор идеально подойдёт для отдыха дома, девичников, вечеринок, семейных встреч, творческих мастер-классов или в качестве продуманного и оригинального подарка. Роспись гипсовых фигурок — отличный способ замедлиться, отдохнуть, пробудить творчество и получить удовольствие от того, что сделано своими руками.

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
      'images/products/kits/Starlight_Unicorn1.webp',
      'images/products/kits/Starlight_Unicorn2.webp',
      'images/products/kits/Starlight_Unicorn3.webp',
      'images/products/kits/unicorn.webp',
    ],
    price:         8.00,
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

Ce kit est parfait pour se détendre à la maison, les soirées entre amies, les fêtes, les réunions en famille, les ateliers créatifs, ou comme cadeau attentionné et original. Peindre des figurines en plâtre est une merveilleuse façon de ralentir, de se détendre, de stimuler sa créativité et de savourer le plaisir de créer quelque chose de ses propres mains.

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
        description: `Alles, was Sie zum Bemalen und Personalisieren Ihrer Starlight-Einhorn-Gipsfigur brauchen, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffnen Sie einfach die Box, legen Sie Ihre Lieblingsplaylist auf, holen Sie Freunde oder Familie dazu und machen Sie das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt zum Entspannen zu Hause, für Mädelsabende, Partys, Familientreffen, kreative Workshops oder als durchdachtes und einzigartiges Geschenk. Gipsfiguren zu bemalen ist eine wunderbare Art, zur Ruhe zu kommen, abzuschalten, die Kreativität zu wecken und die Freude am Selbermachen zu geniessen.

Das Starlight-Einhorn ist anmutig und elegant — eine ausdrucksstarke Figur mit feinen Details, die Sie dazu einlädt, Ihre schönsten Farben zu wählen. Jedes Stück wird zum Unikat — Sie wählen die Farben, die Stimmung und das Endergebnis.

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

Набор идеально подойдёт для отдыха дома, девичников, вечеринок, семейных встреч, творческих мастер-классов или в качестве продуманного и оригинального подарка. Роспись гипсовых фигурок — отличный способ замедлиться, отдохнуть, пробудить творчество и получить удовольствие от того, что сделано своими руками.

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
      'images/products/kits/dinosaur1.webp',
      'images/products/kits/Diplodocus3.webp',
      'images/products/kits/Stegosaurus3.webp',
      'images/products/kits/dinosavr.webp',
    ],
    price:         49.00,
    originalPrice: null,
    onSale:        false,
    translations: {
      en: {
        name:        'Dinosaur Plaster Painting Kit – Party Box',
        description: `Everything you need for a full creative party is in one box — 10 complete dinosaur painting kits, ready to go. Open the box, hit play on your favorite playlist, and let everyone choose their dinosaur and paint it their own way.

This Party Box is made for birthday parties, family gatherings, school events, creative workshops, and any group celebration where you want to give people something fun and hands-on to make together. It's also a perfect gift for an entire class or a dino-loving kid who wants to share the fun.

At CHF 4.90 per kit, the Party Box saves you 38% compared to buying individually — the best value for groups.

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

À CHF 4,90 par kit, la Party Box vous fait économiser 38 % par rapport à l'achat individuel — le meilleur rapport qualité-prix pour les groupes.

Ce qui est inclus (×10 kits complets) :
• 10 figurines dinosaure en plâtre prêtes à peindre
• 10 sets de peinture
• 10 pinceaux
• 10 cartes postales
• 20 autocollants`,
      },
      de: {
        name:        'Dinosaurier Gipsmalerei-Set – Party Box',
        description: `Alles, was Sie für eine vollständige Kreativ-Party brauchen, in einer Box — 10 komplette Dinosaurier-Mal-Sets, sofort einsatzbereit. Öffnen Sie die Box, legen Sie Ihre Lieblingsplaylist auf und lassen Sie jeden seinen Dinosaurier auswählen und nach eigener Vorstellung bemalen.

Diese Party Box ist ideal für Kindergeburtstage, Familientreffen, Schulevents, kreative Workshops und jede Gruppenfeier, bei der Sie den Gästen etwas Spassiges und Unvergessliches zum Selbermachen schenken möchten. Sie ist auch das perfekte Geschenk für eine ganze Klasse oder ein dino-begeistertes Kind, das den Spass teilen möchte.

Mit CHF 4,90 pro Kit sparen Sie mit der Party Box 38 % gegenüber dem Einzelkauf — der beste Preis für Gruppen.

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

По CHF 4.90 за набор, Party Box экономит 38% по сравнению с покупкой по одному — лучшая цена для группы.

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
      'images/products/kits/Diplodocus1.webp',
      'images/products/kits/Diplodocus2.webp',
      'images/products/kits/Diplodocus3.webp',
      'images/products/kits/dinosavr.webp',
    ],
    price:         8.00,
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

Ce kit est parfait pour les soirées en famille, les fêtes d'anniversaire, les ateliers créatifs, ou pour tous ceux qui adorent les dinosaures. Peindre des figurines en plâtre est une merveilleuse façon de ralentir, de se détendre, de stimuler sa créativité et de savourer le plaisir de créer quelque chose de ses propres mains.

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
        description: `Alles, was Sie zum Bemalen und Personalisieren Ihrer Diplodocus-Gipsfigur brauchen, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffnen Sie einfach die Box, legen Sie Ihre Lieblingsplaylist auf, holen Sie Freunde oder Familie dazu und machen Sie das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt für Familienabende, Kindergeburtstage, kreative Workshops oder für alle, die Dinosaurier lieben. Gipsfiguren zu bemalen ist eine wunderbare Art, zur Ruhe zu kommen, abzuschalten, die Kreativität zu wecken und die Freude am Selbermachen zu geniessen.

Der Diplodocus — der sanfte Langhals-Riese der Jurazeit — ist eine beeindruckende Figur zum Bemalen. Gross, ausdrucksstark und voller Charakter bietet er eine Leinwand, auf der Ihre Fantasie so frei schweifen kann wie die Dinosaurier einst. Jedes Stück wird zum Unikat.

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

Набор идеально подойдёт для семейных вечеров, детских дней рождения, творческих мастер-классов и всех, кто любит динозавров. Роспись гипсовых фигурок — отличный способ замедлиться, отдохнуть, пробудить творчество и получить удовольствие от того, что сделано своими руками.

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
      'images/products/kits/Stegosaurus1.webp',
      'images/products/kits/Stegosaurus2.webp',
      'images/products/kits/Stegosaurus3.webp',
      'images/products/kits/dinosavr.webp',
    ],
    price:         8.00,
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

Ce kit est parfait pour les soirées en famille, les fêtes d'anniversaire, les ateliers créatifs, ou pour tous ceux qui adorent les dinosaures. Peindre des figurines en plâtre est une merveilleuse façon de ralentir, de se détendre, de stimuler sa créativité et de savourer le plaisir de créer quelque chose de ses propres mains.

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
        description: `Alles, was Sie zum Bemalen und Personalisieren Ihrer Stegosaurus-Gipsfigur brauchen, ist im Kit enthalten: eine Gipsfigur, ein Farb-Set und ein Pinsel. Öffnen Sie einfach die Box, legen Sie Ihre Lieblingsplaylist auf, holen Sie Freunde oder Familie dazu und machen Sie das Malen zu einem gemütlichen, kreativen Erlebnis.

Dieses Kit ist perfekt für Familienabende, Kindergeburtstage, kreative Workshops oder für alle, die Dinosaurier lieben. Gipsfiguren zu bemalen ist eine wunderbare Art, zur Ruhe zu kommen, abzuschalten, die Kreativität zu wecken und die Freude am Selbermachen zu geniessen.

Der Stegosaurus — mit seinem unverkennbaren Stachelrücken und seiner kräftigen Haltung — ist einer der bekanntesten Dinosaurier aller Zeiten. Seine markante Silhouette macht ihn zu einer fantastisch schönen Figur zum Bemalen und Ausstellen. Jedes Stück wird zum Unikat — Sie wählen die Farben, die Stimmung und das Endergebnis.

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

Набор идеально подойдёт для семейных вечеров, детских дней рождения, творческих мастер-классов и всех, кто любит динозавров. Роспись гипсовых фигурок — отличный способ замедлиться, отдохнуть, пробудить творчество и получить удовольствие от того, что сделано своими руками.

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
      'images/products/candles/photos/frog-scene-1.webp',
      'images/products/candles/photos/frog-scene-2.webp',
      'images/products/candles/photos/frog-scene-size.webp',
      'images/products/candles/frog3.mp4',
    ],
    price:         39.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 12 × 8 cm',
    translations: {
      en: {
        name: 'Frog Candle',
        description: `A green frog with rosy cheeks and a little golden crown – half fairy tale, half wink. Put him on a shelf, a desk or next to the bathtub and he will make everyone smile.

Each figure is cast in plaster and painted by hand in our studio in Switzerland. The top part lifts off: inside is a soy wax candle in the scent of your choice. Once the candle has burned down, the frog stays on as decor or a little box for jewellery and odds and ends.

A gift for anyone who loves frogs, fairy tales or simply something special.

GOOD TO KNOW
• Plaster figure, hand-cast and hand-painted in Switzerland
• Top part lifts off as a lid
• Soy wax candle, scent of your choice (see below)
• Size: approx. 12 × 8 cm
• Every piece is one of a kind, small variations are part of its charm`,
      },
      fr: {
        name: 'Bougie Grenouille',
        description: `Une grenouille verte aux joues roses et à la petite couronne dorée – moitié conte de fées, moitié clin d'œil. Posée sur une étagère, un bureau ou près de la baignoire, elle fait sourire tout le monde.

Chaque figurine est coulée en plâtre et peinte à la main dans notre atelier en Suisse. La partie supérieure s'enlève : dessous se cache une bougie en cire de soja au parfum de votre choix. Une fois la bougie consumée, la grenouille reste comme décoration ou petite boîte à bijoux.

Un cadeau pour tous ceux qui aiment les grenouilles, les contes ou simplement les belles choses.

BON À SAVOIR
• Figurine en plâtre, coulée et peinte à la main en Suisse
• La partie supérieure s'enlève comme un couvercle
• Bougie en cire de soja, parfum au choix (voir ci-dessous)
• Taille : env. 12 × 8 cm
• Chaque pièce est unique, de petites variations font partie de son charme`,
      },
      de: {
        name: 'Frosch-Kerze',
        description: `Ein grüner Frosch mit roten Bäckchen und kleiner goldener Krone – halb Märchen, halb Augenzwinkern. Er sitzt auf dem Regal, auf dem Schreibtisch oder neben der Badewanne und bringt garantiert jeden zum Lächeln.

Die Figur wird in unserem Atelier in der Schweiz aus Gips gegossen und von Hand bemalt. Der obere Teil lässt sich abnehmen: darunter steckt eine Kerze aus Sojawachs mit dem Duft Ihrer Wahl. Ist die Kerze abgebrannt, bleibt der Frosch als Deko oder kleine Dose für Schmuck und Krimskrams.

Ein Geschenk für alle, die Frösche, Märchen oder einfach etwas Besonderes lieben.

GUT ZU WISSEN
• Gipsfigur, von Hand gegossen und bemalt in der Schweiz
• Oberer Teil als abnehmbarer Deckel
• Kerze aus Sojawachs, Duft nach Wahl (siehe unten)
• Grösse: ca. 12 × 8 cm
• Jedes Stück ist ein Unikat, kleine Abweichungen gehören dazu`,
      },
      ru: {
        name: 'Свеча «Лягушка»',
        description: `Зелёная лягушка с румяными щёчками и маленькой золотой короной – наполовину сказка, наполовину шутка. На полке, на рабочем столе или у ванны она поднимает настроение всем, кто её видит.

Каждую фигурку мы отливаем из гипса и расписываем вручную в нашей мастерской в Швейцарии. Верхняя часть снимается, а внутри – свеча из соевого воска с ароматом на ваш выбор. Когда свеча догорит, лягушка останется украшением или шкатулкой для украшений и мелочей.

Подарок для всех, кто любит лягушек, сказки или просто необычные вещи.

ПОЛЕЗНО ЗНАТЬ
• Гипсовая фигурка, отлита и расписана вручную в Швейцарии
• Верхняя часть снимается как крышка
• Свеча из соевого воска, аромат на выбор (см. ниже)
• Размер: ок. 12 × 8 см
• Каждая фигурка уникальна, небольшие отличия неизбежны`,
      },
    },
  },

  {
    id:            'candle-frog-hat',
    category:      'candle',
    images:        [
      'images/products/candles/photos/frog-hat-scene-1.webp',
      'images/products/candles/photos/frog-hat-scene-size.webp',
      'images/products/candles/froghat3.mp4',
    ],
    price:         39.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 12 × 10 cm',
    translations: {
      en: {
        name: 'Frog in a Hat Candle',
        description: `This frog has dressed up for autumn: a brown hat with a buckle, rosy cheeks and a contented look. A little character for the windowsill, a shelf or the autumn table.

Each figure is cast in plaster and painted by hand in Switzerland. The top part lifts off: inside is a soy wax candle in the scent of your choice. Once it has burned down, the frog stays on as decor or a storage box.

Perfect for Halloween, for autumn and for anyone who likes a bit of humour on the shelf.

GOOD TO KNOW
• Plaster figure, hand-cast and hand-painted in Switzerland
• Top part lifts off as a lid
• Soy wax candle, scent of your choice (see below)
• Size: approx. 12 × 10 cm
• Every piece is one of a kind, small variations are part of its charm`,
      },
      fr: {
        name: 'Bougie Grenouille au Chapeau',
        description: `Cette grenouille s'est faite belle pour l'automne : chapeau brun à boucle, joues roses et air satisfait. Un petit personnage pour le rebord de fenêtre, l'étagère ou la table d'automne.

Chaque figurine est coulée en plâtre et peinte à la main en Suisse. La partie supérieure s'enlève : dessous se cache une bougie en cire de soja au parfum de votre choix. Une fois consumée, la grenouille reste comme décoration ou boîte de rangement.

Idéale pour Halloween, pour l'automne et pour tous ceux qui aiment l'humour sur leurs étagères.

BON À SAVOIR
• Figurine en plâtre, coulée et peinte à la main en Suisse
• La partie supérieure s'enlève comme un couvercle
• Bougie en cire de soja, parfum au choix (voir ci-dessous)
• Taille : env. 12 × 10 cm
• Chaque pièce est unique, de petites variations font partie de son charme`,
      },
      de: {
        name: 'Frosch-mit-Hut-Kerze',
        description: `Dieser Frosch hat sich für den Herbst schick gemacht: brauner Hut mit Schnalle, rote Bäckchen, zufriedener Blick. Ein kleiner Charakter für Fensterbank, Regal oder Herbsttisch.

Die Figur wird in der Schweiz aus Gips gegossen und von Hand bemalt. Der obere Teil lässt sich abnehmen: darunter steckt eine Kerze aus Sojawachs mit dem Duft Ihrer Wahl. Ist die Kerze abgebrannt, bleibt der Frosch als Deko oder Aufbewahrungsdose.

Passt zu Halloween, zum Herbst und zu allen, die Humor im Regal mögen.

GUT ZU WISSEN
• Gipsfigur, von Hand gegossen und bemalt in der Schweiz
• Oberer Teil als abnehmbarer Deckel
• Kerze aus Sojawachs, Duft nach Wahl (siehe unten)
• Grösse: ca. 12 × 10 cm
• Jedes Stück ist ein Unikat, kleine Abweichungen gehören dazu`,
      },
      ru: {
        name: 'Свеча «Лягушка в шляпе»',
        description: `Эта лягушка нарядилась к осени: коричневая шляпа с пряжкой, румяные щёчки и довольный взгляд. Маленький персонаж для подоконника, полки или осеннего стола.

Фигурку мы отливаем из гипса и расписываем вручную в Швейцарии. Верхняя часть снимается, а внутри – свеча из соевого воска с ароматом на ваш выбор. Когда свеча догорит, лягушка останется украшением или шкатулкой.

Подойдёт к Хэллоуину, к осени и всем, кто любит немного юмора на полке.

ПОЛЕЗНО ЗНАТЬ
• Гипсовая фигурка, отлита и расписана вручную в Швейцарии
• Верхняя часть снимается как крышка
• Свеча из соевого воска, аромат на выбор (см. ниже)
• Размер: ок. 12 × 10 см
• Каждая фигурка уникальна, небольшие отличия неизбежны`,
      },
    },
  },


  {
    id:            'candle-pumpkin',
    category:      'candle',
    images:        [
      'images/products/candles/photos/pumpkin-scene-1.webp',
      'images/products/candles/photos/pumpkin-scene-2.webp',
      'images/products/candles/photos/pumpkin-scene-size.webp',
      'images/products/candles/pumpkin4.mp4',
    ],
    price:         34.00,
    originalPrice: 44.00,
    onSale:        true,
    size: '≈ 10 × 11 cm',
    translations: {
      en: {
        name: 'Pumpkin Candle',
        description: `A little pumpkin house with a witch's hat, a wooden door and tiny windows – the cosiest resident of your autumn table.

Cast in plaster and painted by hand in our studio in Switzerland. Simply lift off the hat: underneath is a soy wax candle in the scent of your choice. Afterwards the pumpkin house stays on as autumn decor or a box for small things.

Lovely for Halloween, the autumn table or as a little gift.

GOOD TO KNOW
• Plaster figure, hand-cast and hand-painted in Switzerland
• The hat lifts off as a lid
• Soy wax candle, scent of your choice (see below)
• Size: approx. 10 × 11 cm
• Every piece is one of a kind, small variations are part of its charm`,
      },
      fr: {
        name: 'Bougie Citrouille',
        description: `Une petite maison-citrouille avec chapeau de sorcière, porte en bois et fenêtres minuscules – l'habitante la plus douillette de votre table d'automne.

Coulée en plâtre et peinte à la main dans notre atelier en Suisse. Il suffit de soulever le chapeau : dessous se cache une bougie en cire de soja au parfum de votre choix. Ensuite, la maison-citrouille reste comme décoration d'automne ou petite boîte.

Parfaite pour Halloween, la table d'automne ou comme petit cadeau.

BON À SAVOIR
• Figurine en plâtre, coulée et peinte à la main en Suisse
• Le chapeau s'enlève comme un couvercle
• Bougie en cire de soja, parfum au choix (voir ci-dessous)
• Taille : env. 10 × 11 cm
• Chaque pièce est unique, de petites variations font partie de son charme`,
      },
      de: {
        name: 'Kürbis-Kerze',
        description: `Ein kleines Kürbishaus mit Hexenhut, Holztür und Fensterchen – der gemütlichste Bewohner Ihres Herbsttisches.

Gegossen aus Gips und von Hand bemalt in unserem Atelier in der Schweiz. Den Hut nehmen Sie einfach ab: darunter steckt eine Kerze aus Sojawachs mit dem Duft Ihrer Wahl. Danach bleibt das Kürbishaus als Herbstdeko oder Dose für Kleinigkeiten.

Schön zu Halloween, für den Herbsttisch oder als Mitbringsel.

GUT ZU WISSEN
• Gipsfigur, von Hand gegossen und bemalt in der Schweiz
• Hut als abnehmbarer Deckel
• Kerze aus Sojawachs, Duft nach Wahl (siehe unten)
• Grösse: ca. 10 × 11 cm
• Jedes Stück ist ein Unikat, kleine Abweichungen gehören dazu`,
      },
      ru: {
        name: 'Свеча «Тыква»',
        description: `Маленький домик-тыква с ведьминой шляпой, деревянной дверцей и окошками – самый уютный жилец вашего осеннего стола.

Отлит из гипса и расписан вручную в нашей мастерской в Швейцарии. Просто снимите шляпу: под ней свеча из соевого воска с ароматом на ваш выбор. Потом домик останется осенним декором или шкатулкой для мелочей.

Для Хэллоуина, осеннего стола или как небольшой подарок.

ПОЛЕЗНО ЗНАТЬ
• Гипсовая фигурка, отлита и расписана вручную в Швейцарии
• Шляпа снимается как крышка
• Свеча из соевого воска, аромат на выбор (см. ниже)
• Размер: ок. 10 × 11 см
• Каждая фигурка уникальна, небольшие отличия неизбежны`,
      },
    },
  },

  {
    id:            'candle-carousel',
    category:      'candle',
    images:        [
      'images/products/candles/scenes/carousel-silver-1.webp',
      'images/products/candles/scenes/carousel-silver-2.webp',
      'images/products/candles/scenes/carousel-gold-1.webp',
      'images/products/candles/scenes/carousel-gold-2.webp',
      'images/products/candles/scenes/carousel-red-1.webp',
      'images/products/candles/scenes/carousel-red-2.webp',
      'images/products/candles/scenes/carousel-size.webp',
      'images/products/candles/carousel5.mp4',
    ],
    price:         39.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 10 × 12 cm',
    translations: {
      en: {
        name: 'Carousel Candle',
        description: `A carousel with horses in relief and a domed roof with a little spire. The details are hand-painted in silver, red or gold.

Cast in plaster and painted by hand in Switzerland. The top part lifts off: inside is a soy wax candle in the scent of your choice. Afterwards the carousel stays on as a box for jewellery and small treasures, or as a decoration on the shelf.

A gift for Christmas, a birthday or anyone who loves beautiful handmade things.

GOOD TO KNOW
• Plaster figure, hand-cast and hand-painted in Switzerland
• Top part lifts off as a lid
• Colours: silver, red, gold
• Soy wax candle, scent of your choice (see below)
• Size: approx. 10 × 12 cm
• Every piece is one of a kind, small variations are part of its charm`,
      },
      fr: {
        name: 'Bougie Carrousel',
        description: `Un carrousel avec des chevaux en relief et un toit en coupole surmonté d'une petite flèche. Les détails sont peints à la main en argent, rouge ou or.

Coulé en plâtre et peint à la main en Suisse. La partie supérieure s'enlève : à l'intérieur, une bougie en cire de soja au parfum de votre choix. Ensuite, le carrousel reste comme boîte à bijoux et petits trésors, ou comme décoration sur une étagère.

Un cadeau pour Noël, un anniversaire ou pour tous ceux qui aiment les belles choses faites main.

BON À SAVOIR
• Figurine en plâtre, coulée et peinte à la main en Suisse
• La partie supérieure s'enlève comme un couvercle
• Couleurs : argent, rouge, or
• Bougie en cire de soja, parfum au choix (voir ci-dessous)
• Taille : env. 10 × 12 cm
• Chaque pièce est unique, de petites variations font partie de son charme`,
      },
      de: {
        name: 'Karussell-Kerze',
        description: `Ein Karussell mit Pferdchen im Relief und einem gewölbten Dach mit kleiner Spitze. Die Verzierungen werden von Hand in Silber, Rot oder Gold bemalt.

Gegossen aus Gips und von Hand bemalt in der Schweiz. Der obere Teil lässt sich abnehmen: darin steckt eine Kerze aus Sojawachs mit dem Duft Ihrer Wahl. Danach bleibt das Karussell als Dose für Schmuck und kleine Schätze oder als Deko im Regal.

Ein Geschenk zu Weihnachten, zum Geburtstag oder für alle, die schöne handgemachte Dinge mögen.

GUT ZU WISSEN
• Gipsfigur, von Hand gegossen und bemalt in der Schweiz
• Oberer Teil als abnehmbarer Deckel
• Farben: Silber, Rot, Gold
• Kerze aus Sojawachs, Duft nach Wahl (siehe unten)
• Grösse: ca. 10 × 12 cm
• Jedes Stück ist ein Unikat, kleine Abweichungen gehören dazu`,
      },
      ru: {
        name: 'Свеча «Карусель»',
        description: `Карусель с рельефными лошадками и куполом с маленьким шпилем. Узоры расписаны вручную серебром, красным или золотом.

Отлита из гипса и расписана вручную в Швейцарии. Верхняя часть снимается, а внутри – свеча из соевого воска с ароматом на ваш выбор. Потом карусель останется шкатулкой для украшений и мелочей или украшением на полке.

Подарок на Рождество, день рождения или для тех, кто любит красивые вещи ручной работы.

ПОЛЕЗНО ЗНАТЬ
• Гипсовая фигурка, отлита и расписана вручную в Швейцарии
• Верхняя часть снимается как крышка
• Цвета: серебряный, красный, золотой
• Свеча из соевого воска, аромат на выбор (см. ниже)
• Размер: ок. 10 × 12 см
• Каждая фигурка уникальна, небольшие отличия неизбежны`,
      },
    },
  },

  {
    id:            'candle-xmas-bauble',
    category:      'candle',
    images:        [
      'images/products/candles/scenes/bauble-gold-1.webp',
      'images/products/candles/scenes/bauble-gold-2.webp',
      'images/products/candles/scenes/bauble-blue-1.webp',
      'images/products/candles/scenes/bauble-blue-2.webp',
      'images/products/candles/scenes/bauble-size.webp',
      'images/products/candles/christmas_bauble4.mp4',
    ],
    price:         29.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 7 × 8 cm',
    translations: {
      en: {
        name: 'Christmas Bauble Candle',
        description: `A Christmas bauble you don't hang on the tree – you light it. With a snowflake relief, in blue or gold.

Cast in plaster and painted by hand in Switzerland. The top part lifts off: inside is a soy wax candle in the scent of your choice. Afterwards the bauble stays on as a little box or Christmas decoration.

Ideal for Secret Santa, the Advent calendar or as table decor.

GOOD TO KNOW
• Plaster figure, hand-cast and hand-painted in Switzerland
• Top part lifts off as a lid
• Colours: blue, gold
• Soy wax candle, scent of your choice (see below)
• Size: approx. 7 × 8 cm
• Every piece is one of a kind, small variations are part of its charm`,
      },
      fr: {
        name: 'Bougie Boule de Noël',
        description: `Une boule de Noël qu'on n'accroche pas au sapin – on l'allume. Avec un relief de flocons de neige, en bleu ou en or.

Coulée en plâtre et peinte à la main en Suisse. La partie supérieure s'enlève : à l'intérieur, une bougie en cire de soja au parfum de votre choix. Ensuite, la boule reste comme petite boîte ou décoration de Noël.

Idéale pour un échange de cadeaux, un calendrier de l'Avent ou comme décoration de table.

BON À SAVOIR
• Figurine en plâtre, coulée et peinte à la main en Suisse
• La partie supérieure s'enlève comme un couvercle
• Couleurs : bleu, or
• Bougie en cire de soja, parfum au choix (voir ci-dessous)
• Taille : env. 7 × 8 cm
• Chaque pièce est unique, de petites variations font partie de son charme`,
      },
      de: {
        name: 'Weihnachtskugel-Kerze',
        description: `Eine Christbaumkugel, die man nicht an den Baum hängt, sondern anzündet. Mit Schneeflocken-Relief, in Blau oder Gold.

Gegossen aus Gips und von Hand bemalt in der Schweiz. Der obere Teil lässt sich abnehmen: darin steckt eine Kerze aus Sojawachs mit dem Duft Ihrer Wahl. Danach bleibt die Kugel als kleine Dose oder Weihnachtsdeko.

Ideal als Wichtelgeschenk, für den Adventskalender oder als Tischdeko.

GUT ZU WISSEN
• Gipsfigur, von Hand gegossen und bemalt in der Schweiz
• Oberer Teil als abnehmbarer Deckel
• Farben: Blau, Gold
• Kerze aus Sojawachs, Duft nach Wahl (siehe unten)
• Grösse: ca. 7 × 8 cm
• Jedes Stück ist ein Unikat, kleine Abweichungen gehören dazu`,
      },
      ru: {
        name: 'Свеча «Новогодний шар»',
        description: `Ёлочный шар, который не вешают на ёлку, а зажигают. Со снежинками в рельефе, синий или золотой.

Отлит из гипса и расписан вручную в Швейцарии. Верхняя часть снимается, а внутри – свеча из соевого воска с ароматом на ваш выбор. Потом шар останется маленькой шкатулкой или ёлочным декором.

Отличный подарок для «Тайного Санты», адвент-календаря или украшение праздничного стола.

ПОЛЕЗНО ЗНАТЬ
• Гипсовая фигурка, отлита и расписана вручную в Швейцарии
• Верхняя часть снимается как крышка
• Цвета: синий, золотой
• Свеча из соевого воска, аромат на выбор (см. ниже)
• Размер: ок. 7 × 8 см
• Каждая фигурка уникальна, небольшие отличия неизбежны`,
      },
    },
  },

  {
    id:            'candle-mouse-king-red',
    category:      'candle',
    images:        [
      'images/products/candles/scenes/mouse-king-1b.webp',
      'images/products/candles/scenes/mouse-king-2b.webp',
      'images/products/candles/scenes/mouse-king-size-b.webp',
      'images/products/candles/mouse_king4.mp4',
    ],
    price:         59.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 15 × 20 cm',
    translations: {
      en: {
        name: 'Mouse King Candle — Red',
        description: `The Mouse King from «The Nutcracker» – in a red uniform with golden buttons, a ruff and a crown. At 20 cm our largest piece and a real eye-catcher at Christmas.

Cast in plaster and painted by hand in Switzerland. The top part lifts off: inside is a soy wax candle in the scent of your choice. Afterwards the Mouse King stays on as a collector's figure.

For anyone who loves The Nutcracker, ballet or unusual Christmas decor.

GOOD TO KNOW
• Plaster figure, hand-cast and hand-painted in Switzerland
• Top part lifts off as a lid
• Soy wax candle, scent of your choice (see below)
• Size: approx. 15 × 20 cm
• Every piece is one of a kind, small variations are part of its charm`,
      },
      fr: {
        name: 'Bougie Roi des Souris — Rouge',
        description: `Le Roi des souris de «Casse-Noisette» – en uniforme rouge à boutons dorés, avec fraise et couronne. Avec ses 20 cm, notre plus grande pièce et un vrai point de mire à Noël.

Coulé en plâtre et peint à la main en Suisse. La partie supérieure s'enlève : à l'intérieur, une bougie en cire de soja au parfum de votre choix. Ensuite, le Roi des souris reste comme figurine de collection.

Pour tous ceux qui aiment Casse-Noisette, le ballet ou les décorations de Noël originales.

BON À SAVOIR
• Figurine en plâtre, coulée et peinte à la main en Suisse
• La partie supérieure s'enlève comme un couvercle
• Bougie en cire de soja, parfum au choix (voir ci-dessous)
• Taille : env. 15 × 20 cm
• Chaque pièce est unique, de petites variations font partie de son charme`,
      },
      de: {
        name: 'Mäusekönig-Kerze — Rot',
        description: `Der Mäusekönig aus dem «Nussknacker» – in roter Uniform mit goldenen Knöpfen, Halskrause und Krone. Mit 20 cm unser grösstes Stück und ein echter Blickfang zur Weihnachtszeit.

Gegossen aus Gips und von Hand bemalt in der Schweiz. Der obere Teil lässt sich abnehmen: darin steckt eine Kerze aus Sojawachs mit dem Duft Ihrer Wahl. Danach bleibt der Mäusekönig als Sammlerfigur.

Für alle, die den Nussknacker, das Ballett oder aussergewöhnliche Weihnachtsdeko lieben.

GUT ZU WISSEN
• Gipsfigur, von Hand gegossen und bemalt in der Schweiz
• Oberer Teil als abnehmbarer Deckel
• Kerze aus Sojawachs, Duft nach Wahl (siehe unten)
• Grösse: ca. 15 × 20 cm
• Jedes Stück ist ein Unikat, kleine Abweichungen gehören dazu`,
      },
      ru: {
        name: 'Свеча «Мышиный Король» — Красный',
        description: `Мышиный король из «Щелкунчика» – в красном мундире с золотыми пуговицами, жабо и короной. 20 см в высоту – наша самая большая фигурка и главный акцент рождественского интерьера.

Отлит из гипса и расписан вручную в Швейцарии. Верхняя часть снимается, а внутри – свеча из соевого воска с ароматом на ваш выбор. Потом Мышиный король останется коллекционной фигуркой.

Для всех, кто любит «Щелкунчика», балет или необычный новогодний декор.

ПОЛЕЗНО ЗНАТЬ
• Гипсовая фигурка, отлита и расписана вручную в Швейцарии
• Верхняя часть снимается как крышка
• Свеча из соевого воска, аромат на выбор (см. ниже)
• Размер: ок. 15 × 20 см
• Каждая фигурка уникальна, небольшие отличия неизбежны`,
      },
    },
  },
  {
    id:            'candle-matryoshka',
    category:      'candle',
    images:        [
      'images/products/candles/scenes/nevalyashka-1.webp',
      'images/products/candles/scenes/nevalyashka-2.webp',
      'images/products/candles/scenes/nevalyashka-3.webp',
      'images/products/candles/scenes/nevalyashka-size.webp',
    ],
    price:         49.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 10 × 15 cm',
    translations: {
      en: {
        name: 'Roly-Poly Doll Candle',
        description: `Rosy cheeks, big blue eyes and a little heart on her cheek: our roly-poly doll is inspired by the much-loved toy of childhood.

Each doll is cast in plaster and painted by hand in Switzerland – so every one has her own expression. The top part lifts off: inside is a soy wax candle in the scent of your choice. Once it has burned down, the doll stays on as a keepsake box or winter decoration on the windowsill.

A warm, nostalgic gift for Christmas or a new home.

GOOD TO KNOW
• Plaster figure, hand-cast and hand-painted in Switzerland
• Top part lifts off as a lid
• Soy wax candle, scent of your choice (see below)
• Size: approx. 10 × 15 cm
• Every piece is one of a kind, small variations are part of its charm`,
      },
      fr: {
        name: 'Bougie Culbuto',
        description: `Joues roses, grands yeux bleus et un petit cœur sur la joue : notre culbuto s'inspire du jouet préféré de l'enfance.

Chaque poupée est coulée en plâtre et peinte à la main en Suisse – chacune a donc son propre visage. La partie supérieure s'enlève : à l'intérieur, une bougie en cire de soja au parfum de votre choix. Une fois consumée, la poupée reste comme boîte à trésors ou décoration d'hiver sur le rebord de fenêtre.

Un cadeau chaleureux et nostalgique pour Noël ou une pendaison de crémaillère.

BON À SAVOIR
• Figurine en plâtre, coulée et peinte à la main en Suisse
• La partie supérieure s'enlève comme un couvercle
• Bougie en cire de soja, parfum au choix (voir ci-dessous)
• Taille : env. 10 × 15 cm
• Chaque pièce est unique, de petites variations font partie de son charme`,
      },
      de: {
        name: 'Stehaufmännchen-Kerze',
        description: `Rosige Wangen, grosse blaue Augen und ein kleines Herz auf der Wange: unser Stehaufmännchen ist dem Spielzeug aus Kindertagen nachempfunden.

Jede Puppe wird in der Schweiz aus Gips gegossen und von Hand bemalt – darum hat jede ihren eigenen Gesichtsausdruck. Der obere Teil lässt sich abnehmen: darin steckt eine Kerze aus Sojawachs mit dem Duft Ihrer Wahl. Ist sie abgebrannt, bleibt die Puppe als Schatzdose oder Winterdeko auf der Fensterbank.

Ein warmes, nostalgisches Geschenk zu Weihnachten oder zum Einzug.

GUT ZU WISSEN
• Gipsfigur, von Hand gegossen und bemalt in der Schweiz
• Oberer Teil als abnehmbarer Deckel
• Kerze aus Sojawachs, Duft nach Wahl (siehe unten)
• Grösse: ca. 10 × 15 cm
• Jedes Stück ist ein Unikat, kleine Abweichungen gehören dazu`,
      },
      ru: {
        name: 'Свеча «Неваляшка»',
        description: `Румяные щёки, большие голубые глаза и сердечко на щеке – наша неваляшка навеяна любимой игрушкой из детства.

Каждую куклу мы отливаем из гипса и расписываем вручную в Швейцарии, поэтому у каждой своё выражение лица. Верхняя часть снимается, а внутри – свеча из соевого воска с ароматом на ваш выбор. Когда свеча догорит, неваляшка останется шкатулкой для сокровищ или зимним украшением подоконника.

Тёплый ностальгический подарок на Рождество или новоселье.

ПОЛЕЗНО ЗНАТЬ
• Гипсовая фигурка, отлита и расписана вручную в Швейцарии
• Верхняя часть снимается как крышка
• Свеча из соевого воска, аромат на выбор (см. ниже)
• Размер: ок. 10 × 15 см
• Каждая фигурка уникальна, небольшие отличия неизбежны`,
      },
    },
  },
  {
    id:            'candle-hyacinth',
    category:      'candle',
    images:        [
      'images/products/candles/photos/hyacinth-scene-1.webp',
      'images/products/candles/photos/hyacinth-scene-size.webp',
      'images/products/candles/hyacinth4.mp4',
    ],
    price:         29.00,
    originalPrice: null,
    onSale:        false,
    size: '≈ 6 × 9 cm',
    translations: {
      en: {
        name: 'Hyacinth Candle',
        description: `A hyacinth with dense, delicate clusters of blossoms – the first hello of spring for the windowsill, Easter table or bedside.

Cast in plaster and painted by hand in Switzerland. The top part lifts off: inside is a soy wax candle in the scent of your choice. Afterwards the hyacinth stays on as spring decor that never wilts.

A small gift for a birthday, for Easter or just because.

GOOD TO KNOW
• Plaster figure, hand-cast and hand-painted in Switzerland
• Top part lifts off as a lid
• Soy wax candle, scent of your choice (see below)
• Size: approx. 6 × 9 cm
• Every piece is one of a kind, small variations are part of its charm`,
      },
      fr: {
        name: 'Bougie Jacinthe',
        description: `Une jacinthe aux grappes de fleurs denses et délicates – le premier salut du printemps pour le rebord de fenêtre, la table de Pâques ou la table de chevet.

Coulée en plâtre et peinte à la main en Suisse. La partie supérieure s'enlève : à l'intérieur, une bougie en cire de soja au parfum de votre choix. Ensuite, la jacinthe reste comme décoration de printemps qui ne fane jamais.

Un petit cadeau pour un anniversaire, pour Pâques ou simplement pour faire plaisir.

BON À SAVOIR
• Figurine en plâtre, coulée et peinte à la main en Suisse
• La partie supérieure s'enlève comme un couvercle
• Bougie en cire de soja, parfum au choix (voir ci-dessous)
• Taille : env. 6 × 9 cm
• Chaque pièce est unique, de petites variations font partie de son charme`,
      },
      de: {
        name: 'Hyazinthen-Kerze',
        description: `Eine Hyazinthe mit dichten, zarten Blütendolden – der erste Frühlingsgruss für Fensterbank, Ostertisch oder Nachttisch.

Gegossen aus Gips und von Hand bemalt in der Schweiz. Der obere Teil lässt sich abnehmen: darin steckt eine Kerze aus Sojawachs mit dem Duft Ihrer Wahl. Danach bleibt die Hyazinthe als Frühlingsdeko, die nie verblüht.

Ein kleines Geschenk zum Geburtstag, zu Ostern oder einfach so.

GUT ZU WISSEN
• Gipsfigur, von Hand gegossen und bemalt in der Schweiz
• Oberer Teil als abnehmbarer Deckel
• Kerze aus Sojawachs, Duft nach Wahl (siehe unten)
• Grösse: ca. 6 × 9 cm
• Jedes Stück ist ein Unikat, kleine Abweichungen gehören dazu`,
      },
      ru: {
        name: 'Свеча «Гиацинт»',
        description: `Гиацинт с пышными нежными соцветиями – первый привет весны для подоконника, пасхального стола или прикроватной тумбочки.

Отлит из гипса и расписан вручную в Швейцарии. Верхняя часть снимается, а внутри – свеча из соевого воска с ароматом на ваш выбор. Потом гиацинт останется весенним украшением, которое никогда не завянет.

Небольшой подарок на день рождения, на Пасху или просто так.

ПОЛЕЗНО ЗНАТЬ
• Гипсовая фигурка, отлита и расписана вручную в Швейцарии
• Верхняя часть снимается как крышка
• Свеча из соевого воска, аромат на выбор (см. ниже)
• Размер: ок. 6 × 9 см
• Каждая фигурка уникальна, небольшие отличия неизбежны`,
      },
    },
  },

  // ── ADD NEW PRODUCTS BELOW ────────────────────────────────────────────
  //
  // {
  //   id:            'dragon-kit-1',
  //   category:      'dragon',
  //   images:        ['images/dragon1.webp', 'images/dragon2.webp'],
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
