/**
 * lang.js — Moteur i18n FR/EN — Game of Thrones Encyclopédie
 * Sessions 1 à 4 complètes
 */
(function () {
  'use strict';

  var FLAGS = {
    fr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="26" height="17" style="border-radius:2px;display:block"><rect width="1" height="2" fill="#002395"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ED2939"/></svg>',
    en: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="26" height="17" style="border-radius:2px;display:block"><rect width="60" height="30" fill="#012169"/><path d="M0,0l60,30M60,0L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0l60,30M60,0L0,30" stroke="#C8102E" stroke-width="4"/><path d="M30,0v30M0,15h60" stroke="#fff" stroke-width="10"/><path d="M30,0v30M0,15h60" stroke="#C8102E" stroke-width="6"/></svg>'
  };

  var T = {
    fr: {
      /* S1 — SEO */
      'meta.title':          'Game of Thrones Encyclopédie : Personnages, Carte Westeros, Garde de Nuit, Marcheurs Blancs',
      'meta.description':    'Encyclopédie complète Game of Thrones : personnages, carte interactive de Westeros, organigramme Garde de Nuit, origine Marcheurs Blancs, House of the Dragon, Feu et Sang, résumés 5 livres.',
      'og.title':            'Game of Thrones Encyclopédie — Personnages, Carte Westeros, Garde de Nuit',
      'og.description':      'Encyclopédie interactive GoT : personnages des 5 tomes, carte de Westeros, Garde de Nuit, Marcheurs Blancs, House of the Dragon, quiz.',
      'twitter.title':       'Game of Thrones — Encyclopédie Complète',
      'twitter.description': 'Personnages, carte de Westeros, Garde de Nuit, Marcheurs Blancs, House of the Dragon — tout l\'univers de George R.R. Martin.',
      /* S1 — Header */
      'header.title':    'Le Trône de Fer',
      'header.subtitle': 'Encyclopédie Ultime',
      'header.desc':     'Encyclopédie de Game of Thrones permettant de classifier les personnages et les évènements de manière à faciliter la compréhension de l\'œuvre globale.',
      'header.quiz':     'QUIZ — Teste tes connaissances sur GoT',
      'spoiler.text':    'Attention — Ce site contient des spoilers majeurs sur l\'intégralité de l\'œuvre de George R.R. Martin',
      /* S1 — Onglets */
      'tab.chrono':    '🗓 Chronologie',
      'tab.list':      '📜 Personnages',
      'tab.map':       '🗺 Carte',
      'tab.feu':       '🔥 Feu & Sang',
      'tab.hotd':      '🐉 House of the Dragon',
      'tab.dunk':      '🛡 Chevalier Errant',
      'tab.nord':      '❄ Au-delà du Mur',
      'tab.resume':    '📖 Le Trône de Fer',
      'tab.tv':        '🎬 Séries TV',
      'tab.bestiaire': '🐉 Bestiaire',
      'tab.avis':      '⭐ Avis',
      'search.placeholder': 'Chercher un personnage…',
      /* S2 — Chronologie */
      'chrono.title':    'Chronologie de Westeros',
      'chrono.sub':      'De l\'Aube des Âges au Trône de Fer',
      'frise.label':     'Frise chronologique',
      'frise.hint':      '⟵ faites glisser · cliquez une ère pour filtrer ⟶',
      'frise.reduce':    'Réduire',
      'frise.expand':    'Développer',
      'era.label':       'Ère :',
      'era.all':         'Toutes',
      'era.aube':        'Aube des Âges',
      'era.hiver':       'Long Hiver',
      'era.heros':       'Âge des Héros',
      'era.andal':       'Invasion Andal',
      'era.valyria':     'Valyria',
      'era.conquete':    'Conquête d\'Aegon',
      'era.targaryen':   'Rois Targaryen',
      'era.danse':       'Danse des Dragons',
      'era.aptargaryen': 'Targaryen tardif',
      'era.rebellion':   'Rébellion de Robert',
      'era.got':         'Le Trône de Fer',
      /* S2 — Mentions légales */
      'legal.title':         'Mentions légales et Conditions d\'utilisation',
      'legal.rights':        'Tous droits réservés',
      'legal.p1':            'Tout contenu publié sur ce site est protégé par le droit d\'auteur.',
      'legal.p2':            'Reproduction interdite sans autorisation écrite.',
      'legal.p3':            'Toute citation doit inclure un lien vers ce site.',
      'legal.licence.title': 'Licence',
      'legal.licence.intro': 'Ce contenu est partagé sous licence CC BY-NC-ND :',
      'legal.licence.li1':   'Autorisation de partage avec mention de l\'auteur',
      'legal.licence.li2':   'Pas de modification',
      'legal.licence.li3':   'Pas d\'usage commercial',
      'btn.back':  '← Retour',
      'btn.close': 'Fermer',
      /* S3 — Personnages interface */
      'filter.all.chars':  'Tous',
      'filter.garde':      'Garde de Nuit',
      'filter.feusang':    'Feu & Sang',
      'filter.dunk':       'Chev. Errant',
      'filter.autres':     'Autres',
      'filter.sauvageons': 'Sauvageons',
      'chars.count.one':   'personnage',
      'chars.count.many':  'personnages',
      'chars.empty':       'Aucun personnage ne correspond.',
      'card.type.hero':    'Héros',
      'card.type.noble':   'Noble',
      'card.type.royal':   'Targaryen',
      'card.type.other':   'Autre',
      'card.appears':      'Apparaît dans :',
      'nord.freefolk.intro': '<strong>Les Gens Libres</strong> — ainsi se nomment eux-mêmes les peuples vivant au-delà du Mur. Ils refusent les lois, les rois et les murs. Mance Rayder a réussi à les unir pour la première fois depuis des millénaires — non par conquête, mais par persuasion.',
      /* S4 — Card labels */
      'card.status.alive':   'En vie',
      'card.status.dead':    'Mort(e)',
      'card.status.undead':  'Ressuscité(e)',
      'card.status.unknown': 'Sort inconnu',
      'card.meta.chrono':    'Chronologie',
      'card.meta.loc':       'Localisation',
      'card.meta.traits':    'Traits de caractère',
      /* S3 — Bestiaire */
      'besti.title':             'Bestiaire de Westeros',
      'besti.sub':               'Dragons · Loups-garous · Créatures de Westeros & d\'Essos',
      'besti.search':            'Rechercher une créature…',
      'besti.filter.serie':      'Série :',
      'besti.filter.cat':        'Catégorie :',
      'besti.series.all':        'Toutes',
      'besti.cat.all':           'Toutes',
      'besti.cat.dragon':        '🐉 Dragons',
      'besti.cat.loup':          '🐺 Loups-garous',
      'besti.cat.fantastique':   '✨ Fantastique',
      'besti.cat.animal':        '🦁 Animaux',
      'besti.cat.fantastique.long': '✨ Créatures Fantastiques',
      'besti.cat.animal.long':   '🦁 Animaux Notables',
      'besti.empty':             'Aucune créature trouvée pour cette recherche…',
      'besti.count.one':         'créature',
      'besti.count.many':        'créatures',
      /* Paragraphes statiques */
      'p.resume.intro':    'Saga épique de George R.R. Martin se déroulant dans un monde médiéval-fantastique où les nobles maisons se disputent le Trône de Fer, tandis qu\'une menace surnaturelle grandit au-delà du Mur et que les dragons renaissent de leurs cendres après un siècle d\'extinction.',
      'p.tv.intro':        'Trois séries adaptent l\'univers de George R.R. Martin sur HBO : <em>Game of Thrones</em> (2011–2019), <em>House of the Dragon</em> (2022–) et <em>A Knight of the Seven Kingdoms</em> (2025–). Chacune explore une époque différente de l\'histoire de Westeros.',
      'p.got.divergences': '<strong>Divergences majeures livres / série :</strong> À partir de la saison 5, la série dépasse le matériau source publié. Les saisons 7 et 8 ont été créées sur la base de notes générales fournies par Martin à Benioff et Weiss. De nombreux personnages sont absents (Lady Stoneheart, Aegon Targaryen, Arianne Martell…). La fin controversée pourrait différer de celle que Martin écrira.',
      'p.hotd.fidelite':   '<strong>Fidélité au matériau source :</strong> House of the Dragon est généralement plus fidèle à <em>Feu &amp; Sang</em> que Game of Thrones ne l\'était aux romans. La saison 1 couvre ~30 ans de l\'histoire en 10 épisodes, nécessitant des ellipses importantes. La saison 3 (prévue) devrait couvrir les dernières batailles de la Danse des Dragons et la mort d\'Aegon II.',
      'p.akotsk.intro':    'Adaptation télévisée des novellas <em>Dunk et Egg</em> de George R.R. Martin, diffusée sur HBO. Deux saisons confirmées, couvrant <em>Le Chevalier Errant</em> et <em>L\'Épée Lige</em>. Peter Claffey incarne Dunk, Dexter Sol Ansell joue Egg.',
      'p.akotsk.contexte': '<strong>Contexte :</strong> La série se déroule environ 90 ans avant Game of Thrones. Elle adapte les trois novellas publiées : <em>Le Chevalier Errant</em> (1998), <em>L\'Épée Lige</em> (2003) et <em>Le Chevalier Mystérieux</em> (2010). Une quatrième novella, <em>Le Chevalier de Winterfell</em>, était en cours d\'écriture. La série est attendue comme un retour aux histoires de chevalerie et d\'honneur, loin de la grande politique.',
      'p.feu.intro':       'Trois cents ans avant les événements du Trône de Fer, la maison Targaryen règne sur les Sept Couronnes avec ses dragons. <em>Feu &amp; Sang</em> retrace l\'histoire dynastique des rois Targaryen, de la Conquête d\'Aegon I<sup>er</sup> jusqu\'à la Danse des Dragons — la guerre civile qui déchirera la maison à feu et à sang, et dont <em>House of the Dragon</em> est l\'adaptation télévisée.',
      'p.hotd.series':     '<strong style="color:var(--gold-l)">House of the Dragon</strong> adapte la Danse des Dragons, la guerre civile Targaryen qui se déroule environ 170 ans avant les événements du Trône de Fer. La saison 1 (2022, 10 épisodes) couvre les débuts du règne de Viserys I<sup>er</sup> et les tensions croissantes entre Rhaenyra et Alicent. La saison 2 (2024) plonge dans la guerre ouverte entre les Noirs (Rhaenyra) et les Verts (Aegon II). Les personnages clés : <em>Rhaenyra Targaryen</em> (Emma D\'Arcy / Milly Alcock), <em>Daemon Targaryen</em> (Matt Smith), <em>Alicent Hightower</em> (Olivia Cooke / Emily Carey), <em>Otto Hightower</em> (Rhys Ifans), <em>Viserys I</em> (Paddy Considine). La série est saluée pour sa fidélité au matériau source et la profondeur de ses personnages féminins.',
      'p.hotd.guerre':     'La guerre civile Targaryen, connue sous le nom de <em>Danse des Dragons</em>, éclate lors de la dispute successorale entre Rhaenyra Targaryen — désignée héritière par son père Viserys I<sup>er</sup> — et son demi-frère Aegon II. C\'est la seule guerre où des dragons se sont affrontés entre eux, et elle scellera le destin de la maison au dragon pour toujours.',
      'p.dunk.intro':      'Trois novellas suivant Ser Duncan le Grand (Dunk), chevalier errant sans le sou, et son écuyer Egg — en réalité le prince Aegon Targaryen, futur roi Aegon V. Ces histoires se déroulent environ 90 ans avant le Trône de Fer, sous les règnes d\'Aerys I<sup>er</sup> et de Maekar Ier, dans un Westeros encore peuplé de dragons et de rejetons Targaryen.',
      /* Divers */
      'map.title':  'Carte de Westeros',
      'map.sub':    'Lieux — Toutes les Époques',
      'map.houses':  'MAISONS',
      'gdn.title':  'La Garde de Nuit',
      'nord.marcheurs':  'Marcheurs Blancs',
      /* S6 — Au-delà du Mur */
      'nord.sub':               'Au-delà du Mur · Les Terres du Grand Hiver',
      'nord.title':             'Au-delà du Mur',
      'nord.intro':             'Au nord du Mur de glace s\'étend un territoire immense et inhospitalier — domaine des <em>gens libres</em> (les sauvageons) et des créatures légendaires des temps anciens. Quand l\'hiver revient, une menace millénaire se réveille : les Marcheurs Blancs, ou <em>les Autres</em>, mènent une armée de morts vers le sud.',
      'nord.stab.marcheurs':    '❄ Marcheurs Blancs',
      'nord.stab.sauvageons':   '🏹 Les Sauvageons',
      'nord.stab.gardenuit':    '⚔ Garde de Nuit',
      'nord.section.sauvageons':'🏹 Les Gens Libres — Les Sauvageons',
      'gdn.h3':                 '⚔ La Garde de Nuit — Organigramme',
      'gdn.intro':              'Ordre millénaire chargé de défendre le Mur. Cliquez sur un grade pour découvrir son rôle et ses membres notables.',
      'gdn.leg.cmd':            'Commandement',
      'gdn.leg.rangers':        'Rangers',
      'gdn.leg.stewards':       'Intendance',
      'gdn.leg.builders':       'Constructeurs',
      'gdn.leg.maesters':       'Mestres & Clercs',
      'gdn.detail.grade':       'Grade & Fonction',
      'gdn.detail.resp':        'Responsabilités',
      'gdn.detail.members':     'Membres notables',
      /* S6 — Avis */
      'avis.title':             'Avis & Notes',
      'avis.intro':             'Partagez votre expérience de l\'encyclopédie. Vos retours nous aident à améliorer le site.',
      'avis.form.title':        '✍ Laisser un avis',
      'avis.form.pseudo':       'Votre pseudo',
      'avis.form.pseudo.ph':    'Ex : Tyrion le Sage…',
      'avis.form.note':         'Note',
      'avis.form.label':        'Votre avis',
      'avis.form.ph':           'Votre commentaire…',
      'avis.form.submit':       'Envoyer ⚔',
      /* S6 — Footer */
      'footer.text':            'George R.R. Martin · Le Trône de Fer · Feu &amp; Sang · Chevalier Errant · Pygmalion · 1996–2018',
      /* S7 — Carte */
      'map.sb.title':    'Lieux — Toutes les Époques',
      'map.epoch.label': 'Époque',
      'map.epoch.all':   'Tout',
      'map.epoch.conq':  'Conquête',
      'map.epoch.danse': 'Danse des Dragons',
      'map.epoch.dunk':  'Dunk & Egg',
      'map.epoch.tdf':   'Trône de Fer',
      'map.hint':        'Cliquez sur un lieu ou un marqueur pour voir les personnages et l\'histoire du lieu.',
      /* S7 — Quiz */
      'quiz.title':      '⚔ Le Trône de Fer — Quiz ⚔',
      'quiz.sub':        'Choisis ton niveau et prouve ta valeur',
      'quiz.lvl.debutant':     'Débutant',
      'quiz.lvl.intermediaire':'Intermédiaire',
      'quiz.lvl.expert':       'Expert',
      'quiz.start':      'Commencer →',
      'quiz.next':       'Suivant →',
      'quiz.results':    'Voir mes résultats →',
      'quiz.restart':    '↺ Changer de niveau',
      'quiz.ok':         '✓ Bonne réponse — ',
      'quiz.ko':         '✗ Mauvaise réponse — ',
      'quiz.v5':         'Vous pouvez vous asseoir sur le trône !',
      'quiz.v4':         'Bravo ! Vous êtes digne de diriger une maison !',
      'quiz.v3':         'Bravo ! Vous êtes digne de diriger une maison !',
      'quiz.v2':         'Vous êtes un déserteur de la Garde de Nuit ! Attention à votre tête !',
      'quiz.v1':         'Vous êtes un déserteur de la Garde de Nuit ! Attention à votre tête !',
      'quiz.v0':         'On va vous jeter au-delà du Mur manu militari !',
      'nord.sauvageons': 'Sauvageons',
      'nord.gardenuit':  'Garde de Nuit',
    },

    en: {
      /* S1 — SEO */
      'meta.title':          'Game of Thrones Encyclopedia: Characters, Westeros Map, Night\'s Watch, White Walkers',
      'meta.description':    'Complete Game of Thrones encyclopedia: characters, interactive Westeros map, Night\'s Watch org chart, White Walkers origin, House of the Dragon, Fire & Blood, summaries of the 5 A Song of Ice and Fire books.',
      'og.title':            'Game of Thrones Encyclopedia — Characters, Westeros Map, Night\'s Watch',
      'og.description':      'Interactive GoT encyclopedia: characters from 5 volumes, Westeros map, Night\'s Watch org chart, White Walkers, House of the Dragon, quiz.',
      'twitter.title':       'Game of Thrones — Complete Encyclopedia',
      'twitter.description': 'Characters, Westeros map, Night\'s Watch, White Walkers, House of the Dragon — the entire universe of George R.R. Martin.',
      /* S1 — Header */
      'header.title':    'Game of Thrones',
      'header.subtitle': 'Ultimate Encyclopedia',
      'header.desc':     'Game of Thrones encyclopedia classifying characters and events to facilitate understanding of George R.R. Martin\'s complete work.',
      'header.quiz':     'QUIZ — Test your knowledge of GoT',
      'spoiler.text':    'Warning — This site contains major spoilers for the entire work of George R.R. Martin',
      /* S1 — Tabs */
      'tab.chrono':    '🗓 Timeline',
      'tab.list':      '📜 Characters',
      'tab.map':       '🗺 Map',
      'tab.feu':       '🔥 Fire & Blood',
      'tab.hotd':      '🐉 House of the Dragon',
      'tab.dunk':      '🛡 A Knight of the Seven Kingdoms',
      'tab.nord':      '❄ Beyond the Wall',
      'tab.resume':    '📖 A Song of Ice and Fire',
      'tab.tv':        '🎬 TV Series',
      'tab.bestiaire': '🐉 Bestiary',
      'tab.avis':      '⭐ Reviews',
      'search.placeholder': 'Search for a character…',
      /* S2 — Timeline */
      'chrono.title':    'Westeros Timeline',
      'chrono.sub':      'From the Dawn of Ages to Game of Thrones',
      'frise.label':     'Timeline',
      'frise.hint':      '⟵ drag · click an era to filter ⟶',
      'frise.reduce':    'Collapse',
      'frise.expand':    'Expand',
      'era.label':       'Era:',
      'era.all':         'All',
      'era.aube':        'Dawn of Ages',
      'era.hiver':       'Long Night',
      'era.heros':       'Age of Heroes',
      'era.andal':       'Andal Invasion',
      'era.valyria':     'Valyrian Freehold',
      'era.conquete':    'Aegon\'s Conquest',
      'era.targaryen':   'Targaryen Kings',
      'era.danse':       'Dance of the Dragons',
      'era.aptargaryen': 'Late Targaryen',
      'era.rebellion':   'Robert\'s Rebellion',
      'era.got':         'Game of Thrones',
      /* S2 — Legal */
      'legal.title':         'Legal Notice and Terms of Use',
      'legal.rights':        'All rights reserved',
      'legal.p1':            'All content published on this site is protected by copyright.',
      'legal.p2':            'Reproduction prohibited without written permission.',
      'legal.p3':            'Any quotation must include a link to this site.',
      'legal.licence.title': 'Licence',
      'legal.licence.intro': 'This content is shared under the CC BY-NC-ND licence:',
      'legal.licence.li1':   'Sharing permitted with author credit',
      'legal.licence.li2':   'No modifications',
      'legal.licence.li3':   'No commercial use',
      'btn.back':  '← Back',
      'btn.close': 'Close',
      /* S3 — Characters interface */
      'filter.all.chars':  'All',
      'filter.garde':      "Night's Watch",
      'filter.feusang':    'Fire & Blood',
      'filter.dunk':       'Hedge Knight',
      'filter.autres':     'Others',
      'filter.sauvageons': 'Free Folk',
      'chars.count.one':   'character',
      'chars.count.many':  'characters',
      'chars.empty':       'No characters found.',
      'card.type.hero':    'Hero',
      'card.type.noble':   'Noble',
      'card.type.royal':   'Targaryen',
      'card.type.other':   'Other',
      'card.appears':      'Appears in:',
      'nord.freefolk.intro': '<strong>The Free Folk</strong> — as they call themselves, the peoples living Beyond the Wall. They refuse laws, kings and walls. Mance Rayder managed to unite them for the first time in millennia — not by conquest, but by persuasion.',
      /* S4 — Card labels */
      'card.status.alive':   'Alive',
      'card.status.dead':    'Dead',
      'card.status.undead':  'Undead',
      'card.status.unknown': 'Fate unknown',
      'card.meta.chrono':    'Timeline',
      'card.meta.loc':       'Location',
      'card.meta.traits':    'Character Traits',
      /* S3 — Bestiary */
      'besti.title':             'Bestiary of Westeros',
      'besti.sub':               'Dragons · Direwolves · Creatures of Westeros & Essos',
      'besti.search':            'Search for a creature…',
      'besti.filter.serie':      'Series:',
      'besti.filter.cat':        'Category:',
      'besti.series.all':        'All',
      'besti.cat.all':           'All',
      'besti.cat.dragon':        '🐉 Dragons',
      'besti.cat.loup':          '🐺 Direwolves',
      'besti.cat.fantastique':   '✨ Fantastical',
      'besti.cat.animal':        '🦁 Animals',
      'besti.cat.fantastique.long': '✨ Fantastical Creatures',
      'besti.cat.animal.long':   '🦁 Notable Animals',
      'besti.empty':             'No creature found for this search…',
      'besti.count.one':         'creature',
      'besti.count.many':        'creatures',
      /* S5 — Summaries / TV / Fire&Blood / HotD / Dunk */
      'resume.title':    'A Song of Ice and Fire',
      'tv.title':        'The Targaryen Universe Series',
      'tv.stab.got':     '⚔ Game of Thrones',
      'tv.stab.hotd':    '🐉 House of the Dragon',
      'tv.stab.akotsk':  '🛡 A Knight of the Seven Kingdoms',
      'tv.akotsk.badge': 'New series · 2025',
      'feu.title':       'Fire &amp; Blood — The Origins of Game of Thrones',
      'feu.dragons':     '🐉 The Great Dragons',
      'feu.hotd.link':   '🎬 House of the Dragon — The HBO Adaptation (2022–)',
      'hotd.sub':        'House of the Dragon · The Dance of the Dragons · ~170 years before Game of Thrones',
      'hotd.title':      'House of the Dragon',
      'hotd.factions':   '⚔ The Two Sides',
      'hotd.chars':      '👑 Main Characters',
      'hotd.dragons':    '🐉 The Dragons of the Dance',
      'hotd.bridge':     '🔗 Connections to Game of Thrones',
      'dunk.sub':        'The Tales of Dunk and Egg · 90 years before Game of Thrones',
      'dunk.title':      'The Tales of Dunk and Egg',
      'dunk.chars':      '⚔ Characters of the Chronicles',
      'dunk.bridge':     '🔗 Connections to Game of Thrones',
      /* Paragraphes statiques */
      'p.resume.intro':    'George R.R. Martin\'s epic saga set in a medieval-fantasy world where noble houses vie for the Iron Throne, while a supernatural threat grows beyond the Wall and dragons are reborn from their ashes after a century of extinction.',
      'p.tv.intro':        'Three series adapt George R.R. Martin\'s universe on HBO: <em>Game of Thrones</em> (2011–2019), <em>House of the Dragon</em> (2022–) and <em>A Knight of the Seven Kingdoms</em> (2025–). Each explores a different era of Westerosi history.',
      'p.got.divergences': '<strong>Major book/show divergences:</strong> From Season 5 onward, the show surpasses the published source material. Seasons 7 and 8 were written based on general notes provided by Martin to Benioff and Weiss. Many characters are absent (Lady Stoneheart, Aegon Targaryen, Arianne Martell…). The controversial ending may differ from what Martin will write.',
      'p.hotd.fidelite':   '<strong>Faithfulness to the source:</strong> House of the Dragon is generally more faithful to <em>Fire &amp; Blood</em> than Game of Thrones was to the novels. Season 1 covers ~30 years of history in 10 episodes, requiring significant time jumps. Season 3 (planned) should cover the final battles of the Dance of the Dragons and the death of Aegon II.',
      'p.akotsk.intro':    'A television adaptation of George R.R. Martin\'s <em>Dunk and Egg</em> novellas, airing on HBO. Two seasons confirmed, covering <em>The Hedge Knight</em> and <em>The Sworn Sword</em>. Peter Claffey plays Dunk, Dexter Sol Ansell plays Egg.',
      'p.akotsk.contexte': '<strong>Context:</strong> The series takes place approximately 90 years before Game of Thrones. It adapts the three published novellas: <em>The Hedge Knight</em> (1998), <em>The Sworn Sword</em> (2003) and <em>The Mystery Knight</em> (2010). A fourth novella, <em>The Knight of Winterfell</em>, was in progress. The series is expected to be a return to stories of chivalry and honour, far from high politics.',
      'p.feu.intro':       'Three hundred years before the events of Game of Thrones, House Targaryen rules the Seven Kingdoms with its dragons. <em>Fire &amp; Blood</em> chronicles the dynastic history of the Targaryen kings, from Aegon I\'s Conquest to the Dance of the Dragons — the civil war that will tear the house apart, adapted for television as <em>House of the Dragon</em>.',
      'p.hotd.series':     '<strong style="color:var(--gold-l)">House of the Dragon</strong> adapts the Dance of the Dragons, the Targaryen civil war set approximately 170 years before Game of Thrones. Season 1 (2022, 10 episodes) covers the early reign of Viserys I and the growing tensions between Rhaenyra and Alicent. Season 2 (2024) plunges into open war between the Blacks (Rhaenyra) and the Greens (Aegon II). Key cast: <em>Rhaenyra Targaryen</em> (Emma D\'Arcy / Milly Alcock), <em>Daemon Targaryen</em> (Matt Smith), <em>Alicent Hightower</em> (Olivia Cooke / Emily Carey), <em>Otto Hightower</em> (Rhys Ifans), <em>Viserys I</em> (Paddy Considine). The series is praised for its faithfulness to the source and the depth of its female characters.',
      'p.hotd.guerre':     'The Targaryen civil war, known as the <em>Dance of the Dragons</em>, erupts over the succession dispute between Rhaenyra Targaryen — named heir by her father Viserys I — and her half-brother Aegon II. It is the only war in which dragons fought each other, and it will seal the fate of House Targaryen forever.',
      'p.dunk.intro':      'Three novellas following Ser Duncan the Tall (Dunk), a penniless hedge knight, and his squire Egg — in truth Prince Aegon Targaryen, the future King Aegon V. These stories take place approximately 90 years before Game of Thrones, under the reigns of Aerys I and Maekar I, in a Westeros still home to dragons and Targaryen offspring.',
      /* Misc */
      'map.title':  'Map of Westeros',
      'map.sub':    'Locations — All Eras',
      'map.houses':  'HOUSES',
      'gdn.title':  "The Night's Watch",
      'nord.marcheurs':  'White Walkers',
      /* S6 — Beyond the Wall */
      'nord.sub':               'Beyond the Wall · The Lands of the Great Winter',
      'nord.title':             'Beyond the Wall',
      'nord.intro':             'North of the Wall of ice lies a vast and inhospitable land — home to the <em>Free Folk</em> (the wildlings) and legendary creatures of ancient times. When winter returns, an age-old threat awakens: the White Walkers, or <em>the Others</em>, lead an army of the dead southward.',
      'nord.stab.marcheurs':    '❄ White Walkers',
      'nord.stab.sauvageons':   '🏹 The Free Folk',
      'nord.stab.gardenuit':    '⚔ Night\'s Watch',
      'nord.section.sauvageons':'🏹 The Free Folk — The Wildlings',
      'gdn.h3':                 '⚔ The Night\'s Watch — Org Chart',
      'gdn.intro':              'An ancient order sworn to defend the Wall. Click on a rank to discover its role and notable members.',
      'gdn.leg.cmd':            'Command',
      'gdn.leg.rangers':        'Rangers',
      'gdn.leg.stewards':       'Stewards',
      'gdn.leg.builders':       'Builders',
      'gdn.leg.maesters':       'Maesters & Clerks',
      'gdn.detail.grade':       'Rank & Function',
      'gdn.detail.resp':        'Responsibilities',
      'gdn.detail.members':     'Notable Members',
      /* S6 — Reviews */
      'avis.title':             'Reviews & Ratings',
      'avis.intro':             'Share your experience of the encyclopedia. Your feedback helps us improve the site.',
      'avis.form.title':        '✍ Leave a review',
      'avis.form.pseudo':       'Your username',
      'avis.form.pseudo.ph':    'E.g.: Tyrion the Wise…',
      'avis.form.note':         'Rating',
      'avis.form.label':        'Your review',
      'avis.form.ph':           'Your comment…',
      'avis.form.submit':       'Submit ⚔',
      /* S6 — Footer */
      'footer.text':            'George R.R. Martin · Game of Thrones · Fire &amp; Blood · A Knight of the Seven Kingdoms · Bantam Books · 1996–2018',
      /* S7 — Map */
      'map.sb.title':    'Locations — All Eras',
      'map.epoch.label': 'Era',
      'map.epoch.all':   'All',
      'map.epoch.conq':  'Conquest',
      'map.epoch.danse': 'Dance of the Dragons',
      'map.epoch.dunk':  'Dunk & Egg',
      'map.epoch.tdf':   'Game of Thrones',
      'map.hint':        'Click on a location or marker to see its characters and history.',
      /* S7 — Quiz */
      'quiz.title':      '⚔ Game of Thrones — Quiz ⚔',
      'quiz.sub':        'Choose your level and prove your worth',
      'quiz.lvl.debutant':     'Beginner',
      'quiz.lvl.intermediaire':'Intermediate',
      'quiz.lvl.expert':       'Expert',
      'quiz.start':      'Start →',
      'quiz.next':       'Next →',
      'quiz.results':    'See my results →',
      'quiz.restart':    '↺ Change level',
      'quiz.ok':         '✓ Correct — ',
      'quiz.ko':         '✗ Wrong — ',
      'quiz.v5':         'You may sit upon the throne!',
      'quiz.v4':         'Well done! You are worthy of leading a great house!',
      'quiz.v3':         'Well done! You are worthy of leading a great house!',
      'quiz.v2':         'You are a deserter of the Night\'s Watch! Mind your head!',
      'quiz.v1':         'You are a deserter of the Night\'s Watch! Mind your head!',
      'quiz.v0':         'You shall be cast beyond the Wall at once!',
      'nord.sauvageons': 'Free Folk',
      'nord.gardenuit':  "Night's Watch",
    }
  };

  var _lang = 'fr';

  function _detect() {
    try { var p=new URLSearchParams(window.location.search).get('lang'); if(p==='fr'||p==='en')return p; } catch(e){}
    try { var s=localStorage.getItem('got_lang'); if(s==='fr'||s==='en')return s; } catch(e){}
    var nav=(navigator.language||navigator.userLanguage||'fr').toLowerCase();
    return nav.startsWith('en')?'en':'fr';
  }

  function _apply(lang) {
    if(lang!=='fr'&&lang!=='en')lang='fr';
    _lang=lang;
    try{localStorage.setItem('got_lang',lang);}catch(e){}
    document.documentElement.lang=lang;
    var t=T[lang];
    document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(t[k]!==undefined)el.innerHTML=t[k];});
    document.querySelectorAll('[data-i18n-ph]').forEach(function(el){var k=el.getAttribute('data-i18n-ph');if(t[k]!==undefined)el.placeholder=t[k];});
    document.title=t['meta.title']||document.title;
    _meta('meta[name="description"]','content',t['meta.description']);
    _meta('meta[property="og:title"]','content',t['og.title']);
    _meta('meta[property="og:description"]','content',t['og.description']);
    _meta('meta[name="twitter:title"]','content',t['twitter.title']);
    _meta('meta[name="twitter:description"]','content',t['twitter.description']);
    try{var url=new URL(window.location.href);if(lang==='en'){url.searchParams.set('lang','en');}else{url.searchParams.delete('lang');}history.replaceState(null,'',url.toString());}catch(e){}
    var btn=document.getElementById('got-lang-btn');
    if(btn){var tgt=lang==='fr'?'en':'fr';btn.innerHTML=FLAGS[tgt];btn.title=lang==='fr'?'Switch to English':'Passer en Français';btn.setAttribute('aria-label',btn.title);}
    /* Re-render characters if visible */
    if(typeof render==='function'){try{render();}catch(e){}}
    /* Re-render bestiary */
    if(typeof applyFilters==='function'){try{applyFilters();}catch(e){}}
    if(typeof applyTimelineTranslations==='function'){try{applyTimelineTranslations();}catch(e){}}
    if(typeof refreshFrise==='function'){try{refreshFrise();}catch(e){}}
    var reRenders=['renderMap','renderFeu','renderNord','renderDunk','renderHotD','renderTV','renderResume','gdnRender','renderAll'];
    reRenders.forEach(function(fn){if(typeof window[fn]==='function'){try{window[fn]();}catch(e){}}});
  }

  function _meta(sel,attr,val){if(!val)return;var el=document.querySelector(sel);if(el)el.setAttribute(attr,val);}
  function _toggle(){_apply(_lang==='fr'?'en':'fr');}

  function _inject(){
    if(document.getElementById('got-lang-sw'))return;
    var header=document.querySelector('header');if(!header)return;
    var sw=document.createElement('div');sw.id='got-lang-sw';
    var btn=document.createElement('button');btn.id='got-lang-btn';
    btn.innerHTML=FLAGS['en'];btn.title='Switch to English';btn.setAttribute('aria-label','Switch to English');
    btn.onclick=function(){window.GOT_I18N.toggle();};
    sw.appendChild(btn);header.appendChild(sw);
  }

  function _init(){_inject();_apply(_detect());}

  window.GOT_I18N={toggle:_toggle,set:_apply,get:function(){return _lang;},t:function(k){return(T[_lang]||{})[k]||k;}};

  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',_init);}else{_init();}
}());
