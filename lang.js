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
      /* Divers */
      'map.title':  'Carte de Westeros',
      'map.sub':    'Lieux — Toutes les Époques',
      'gdn.title':  'La Garde de Nuit',
      'nord.marcheurs':  'Marcheurs Blancs',
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
      'chrono.sub':      'From the Dawn of Ages to the Iron Throne',
      'frise.label':     'Timeline',
      'frise.hint':      '⟵ drag · click an era to filter ⟶',
      'frise.reduce':    'Collapse',
      'frise.expand':    'Expand',
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
      /* Misc */
      'map.title':  'Map of Westeros',
      'map.sub':    'Locations — All Eras',
      'gdn.title':  "The Night's Watch",
      'nord.marcheurs':  'White Walkers',
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
    document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(t[k]!==undefined)el.textContent=t[k];});
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
