export const solsticePalette = {
  background: '#f6f7f9',
  surface: '#ffffff',
  primary: '#0f172a',
  accent: '#6366f1',
  accentSoft: '#a855f7',
  text: '#1f2933',
  muted: '#4b5563',
  border: '#e2e8f0',
};

export const nebulaPalette = {
  background: '#05060f',
  surface: '#111827',
  primary: '#f8fafc',
  accent: '#22d3ee',
  accentSoft: '#38bdf8',
  text: '#e2e8f0',
  muted: '#94a3b8',
  border: '#1f2937',
};

export const navigationLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Réalisations', to: '/portfolio' },
  { label: 'Services & Tarifs', to: '/services' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export const processShort = [
  { title: 'Brief', copy: 'Clarification des objectifs, audiences et contraintes.' },
  { title: 'Pré-production', copy: 'Script, planning, repérages et casting si besoin.' },
  { title: 'Tournage', copy: 'Équipe agile, matériel 4K, direction précise.' },
  { title: 'Post-production & Livraison', copy: 'Montage rythmé, habillage, exports multi-formats.' },
];

export const processDetailed = [
  {
    step: 'Brief stratégique',
    bullets: [
      'Session visio de 45 min pour cadrer messages, audiences, KPIs.',
      'Audit express des assets existants pour identifier les manques.',
      'Roadmap éditoriale alignée sur vos échéances commerciales.',
    ],
  },
  {
    step: 'Pré-production',
    bullets: [
      'Storyboard shot-by-shot, moodboard palette « Solstice ».',
      'Repérages, autorisations de tournage, plan de transport.',
      'Plan de diffusion : ratios, sous-titres, versions social-first.',
    ],
  },
  {
    step: 'Tournage',
    bullets: [
      'Chef-op unique + assistant selon besoin, matériel cinéma 6K.',
      'Captation audio broadcast, lumière hybride LED + naturelle.',
      'Backups onsite + cloud, respect RGPD et droits à l’image.',
    ],
  },
  {
    step: 'Post-production',
    bullets: [
      'Montage narratif orienté conversion avec motion subtil.',
      'Étalonnage cinématique et mixage audio Loudness EU.',
      'Livraison multi-formats + sous-titres .srt en français/anglais.',
    ],
  },
  {
    step: 'Activation & suivi',
    bullets: [
      'Plan de mise en ligne + déclinaisons social-first 9:16.',
      'Dashboard KPI sur 30 jours, ajustements mineurs inclus.',
      'Option accompagnement média payant avec partenaires.',
    ],
  },
];

export const testimonials = [
  {
    name: 'Mélanie Dupuis',
    role: 'Directrice marketing, Maison Lestelle',
    quote:
      'Un partenaire ultra-fiable : brief clair, tournage discret, livrables impeccables. Notre campagne lancement a dépassé de 38 % les leads attendus.',
    photoAlt: 'Portrait de Mélanie Dupuis, directrice marketing de Maison Lestelle',
  },
  {
    name: 'Nicolas Garnier',
    role: 'CEO, NovaTech PME',
    quote:
      'Studio VBG a capté l’ADN de l’entreprise en 48 h. L’outil commercial est désormais notre meilleure carte de visite.',
    photoAlt: 'Portrait de Nicolas Garnier, CEO de NovaTech PME',
  },
  {
    name: 'Sophie Lemaitre',
    role: 'Responsable communication, Ville Harmonie',
    quote:
      'Process carré, options drône et motion gérées sans friction. Les élus ont validé du premier coup.',
    photoAlt: 'Portrait de Sophie Lemaitre, responsable communication Ville Harmonie',
  },
  {
    name: 'Julien Perez',
    role: 'Directeur événementiel, Pulse Events',
    quote:
      'Livraison express J+3 sur notre congrès. Les teasers social-first ont généré +62 % de vues qualifiées.',
    photoAlt: 'Portrait de Julien Perez, directeur événementiel Pulse Events',
  },
  {
    name: 'Camille Robert',
    role: 'Fondatrice, Atelier Céleste',
    quote:
      'Packs clairs, recommandations pertinentes, accompagnement jusqu’à la diffusion. Un vrai partenaire ROI.',
    photoAlt: 'Portrait de Camille Robert, fondatrice Atelier Céleste',
  },
  {
    name: 'Hugo Martin',
    role: 'Responsable patrimoine, Groupe HexaImmo',
    quote:
      'Visites 360° et vidéo immobilière prêtes en 5 jours. Les biens premium se réservent 2 fois plus vite.',
    photoAlt: 'Portrait de Hugo Martin, responsable patrimoine Groupe HexaImmo',
  },
];

export const testimonialSnippets = [
  '“Un partenaire ultra-fiable : briefs clairs, livrables impeccables.” — Mélanie, Maison Lestelle',
  '“Livraison express, vidéos social-first performantes.” — Julien, Pulse Events',
];

export const servicePreviews = [
  {
    title: 'Vidéo d’entreprise',
    description: 'Pitcher votre vision en 90 secondes, formats sales-ready et social-first.',
    to: '/services/video-entreprise',
  },
  {
    title: 'Vidéos événementielles',
    description: 'Aftermovie, teaser et captation multi-cam prêts en J+5.',
    to: '/services/videos-evenementielles',
  },
  {
    title: 'Vidéo immobilière',
    description: 'Mettez en lumière vos biens premium avec visites immersives.',
    to: '/services/video-immobiliere',
  },
  {
    title: 'Film de mariage',
    description: 'Un récit émotionnel, monté pour partager sur tous vos écrans.',
    to: '/services/film-mariage',
  },
  {
    title: 'Contenus social-first',
    description: 'Séries verticales, UGC pro et ads optimisés conversion.',
    to: '/services',
  },
  {
    title: 'Offre Express',
    description: 'Tournage agile 1 jour, montage J+2 pour vos temps forts.',
    to: '/services',
  },
];

export const portfolioFilters = [
  'Entreprises',
  'Événementiel',
  'Immobilier',
  'Mariage',
  'Réseaux sociaux',
  'Motion / IA',
];

export const portfolioItems = [
  {
    title: 'NovaTech — Vision 2030',
    category: 'Entreprises',
    duration: '1 min 45',
    tags: ['6K', 'Interviews', 'Social-first'],
    description:
      'Film corporate rythmé pour annoncer la nouvelle feuille de route NovaTech auprès des investisseurs et équipes France.',
    videoUrl: 'https://player.vimeo.com/video/00000001',
    coverAlt: 'Plan serré sur dirigeant NovaTech dans un bureau lumineux',
    slug: 'novatech-vision-2030',
  },
  {
    title: 'Pulse Events — Congrès Futuria',
    category: 'Événementiel',
    duration: '1 min 10',
    tags: ['Multi-cam', 'Aftermovie', 'Teaser'],
    description:
      'Aftermovie énergique livré en J+3 pour relancer les inscriptions Early Bird du congrès Futuria.',
    videoUrl: 'https://player.vimeo.com/video/00000002',
    coverAlt: 'Scène éclairée en violet avec public debout',
    slug: 'pulse-events-congres-futuria',
  },
  {
    title: 'HexaImmo — Villa Horizon',
    category: 'Immobilier',
    duration: '1 min 20',
    tags: ['Drone', 'Visite 360°', 'Voice-over'],
    description:
      'Présentation immersive d’une villa vue mer, combinant drone et travellings stabilisés.',
    videoUrl: 'https://player.vimeo.com/video/00000003',
    coverAlt: 'Vue drone sur villa en bord de mer au coucher du soleil',
    slug: 'heximmo-villa-horizon',
  },
  {
    title: 'Cérémonie Louise & Amir',
    category: 'Mariage',
    duration: '3 min 05',
    tags: ['Storytelling', 'Audio design', 'Emotion'],
    description:
      'Film de mariage tourné à Annecy, récit croisé des vœux et temps forts de la journée.',
    videoUrl: 'https://player.vimeo.com/video/00000004',
    coverAlt: 'Couple marchant près d’un lac entouré de montagnes',
    slug: 'louise-amir-mariage-annecy',
  },
  {
    title: 'Bloom Cosmetics — TikTok Series',
    category: 'Réseaux sociaux',
    duration: '0 min 30',
    tags: ['Vertical', 'UGC', 'Ads'],
    description:
      'Série verticale de 6 capsules pour booster la notoriété Bloom Cosmetics sur TikTok.',
    videoUrl: 'https://player.vimeo.com/video/00000005',
    coverAlt: 'Créatrice appliquant un sérum devant un miroir',
    slug: 'bloom-cosmetics-tiktok-series',
  },
  {
    title: 'ÉnergieNova — Motion IA',
    category: 'Motion / IA',
    duration: '0 min 50',
    tags: ['Motion', 'IA générative', 'DataViz'],
    description:
      'Capsule motion mixant assets IA et data visualisation pour expliquer la transition énergétique locale.',
    videoUrl: 'https://player.vimeo.com/video/00000006',
    coverAlt: 'Animation abstraite bleue représentant des flux énergétiques',
    slug: 'energienova-motion-ia',
  },
];

export const faqBudgetArticles = [
  {
    slug: 'droits-musicaux-video-pro',
    title: 'FAQ Budget : comment prévoir les droits musicaux ?',
    meta: 'Anticiper les droits musicaux pour vos vidéos sans mauvaise surprise.',
    category: 'Budget & Devis',
    summary:
      'Comprendre les licences, définir le périmètre d’exploitation et prévoir les coûts annexes pour une bande-son sécurisée.',
    sections: [
      {
        heading: 'Comprendre les licences musicales',
        content:
          'Nous travaillons avec des bibliothèques premium et proposons des compositions originales. Les licences varient selon la durée et le territoire. Pour une PME hexagonale, comptez généralement 60 à 220 € HT par piste.',
      },
      {
        heading: 'Définir votre périmètre d’exploitation',
        content:
          'Nous cadrons ensemble les supports (RS, site, events, ads). Cela évite les ré-licences coûteuses. Les usages TV/DOOH nécessitent une extension spécifique que nous gérons en amont.',
      },
      {
        heading: 'FAQ express',
        content:
          'Quelle durée ? 12 mois renouvelables par tacite reconduction. Peut-on changer de musique après livraison ? Oui, avec frais de montage selon complexité. Qui paie la SACEM ? Inclus lorsque la licence l’exige, sinon nous vous guidons.',
      },
    ],
    faq: [
      {
        question: 'Puis-je utiliser la même musique pour plusieurs films ?',
        answer:
          'Oui si la licence l’autorise. Nous vérifions les clauses et recommandons une licence multi-supports lorsque vous préparez une série de contenus.',
      },
      {
        question: 'Les réseaux sociaux sont-ils couverts ?',
        answer:
          'Les packs incluent Facebook, Instagram, LinkedIn et YouTube. Pour TikTok ou Ads payantes, une option peut s’ajouter selon la durée de campagne.',
      },
      {
        question: 'Que se passe-t-il en cas de réédition ?',
        answer:
          'Nous conservons les projets 12 mois. Les remplacements de piste sont facturés au temps passé, généralement 120 € HT par heure de montage.',
      },
    ],
  },
  {
    slug: 'revisions-video-pro',
    title: 'FAQ Budget : combien prévoir pour les révisions ?',
    meta: 'Planifier vos révisions vidéo pour maintenir qualité et maîtrise budgétaire.',
    category: 'Budget & Devis',
    summary:
      'Clarifions le nombre d’allers-retours inclus, la méthode collaborative et les coûts additionnels éventuels.',
    sections: [
      {
        heading: 'Nombre de versions incluses',
        content:
          'Chaque pack inclut 2 cycles de retours structurés. Nous utilisons Frame.io pour centraliser vos commentaires horodatés.',
      },
      {
        heading: 'Organisation des retours',
        content:
          'Une feuille de route précise qui cadencée les validations internes côté client. Les retours tardifs peuvent impacter la date de livraison.',
      },
      {
        heading: 'Budgeter les demandes hors cadre',
        content:
          'Les modifications lourdes (nouveau tournage, réécriture, motion avancé) sont devisées avant exécution. Comptez 80 à 120 € HT/h selon expertise mobilisée.',
      },
    ],
    faq: [
      {
        question: 'Peut-on ajouter un cycle de retours ?',
        answer:
          'Oui, nous proposons un forfait 290 € HT pour un cycle supplémentaire incluant montage et exports.',
      },
      {
        question: 'Comment éviter les retours tardifs ?',
        answer:
          'Nous recommandons de désigner un référent unique côté client et d’utiliser nos modèles de grille de validation partagée dès le brief.',
      },
      {
        question: 'Les révisions impactent-elles les délais ?',
        answer:
          'Les demandes sous 48 h sont intégrées dans le planning. Au-delà ou si elles sont hors périmètre, un nouvel ETA est validé ensemble.',
      },
    ],
  },
  {
    slug: 'delais-production-video',
    title: 'FAQ Budget : quels délais prévoir ?',
    meta: 'Visualiser les délais réalistes pour chaque étape de production vidéo.',
    category: 'Budget & Devis',
    summary:
      'Nous détaillons les jalons clés de la pré-prod à la livraison pour caler votre campagne sans stress.',
    sections: [
      {
        heading: 'Délai standard',
        content:
          'Notre cadence type : Brief J0, pré-prod J+1 à J+3, tournage J+4, montage J+5, livraison finale J+7. Option express J+2 disponible selon complexité.',
      },
      {
        heading: 'Facteurs d’allongement',
        content:
          'Disponibilité des lieux, validations internes, demandes de motion complexe. Nous proposons des checklists pour accélérer.',
      },
      {
        heading: 'Sécuriser les jalons critiques',
        content:
          'Contrats, autorisations, météo : nous anticipons via un plan B. Un tampon de 2 jours est intégré pour les tournages extérieurs.',
      },
    ],
    faq: [
      {
        question: 'Que garantit l’option express ?',
        answer:
          'Une équipe renforcée et un montage en parallèle. Livraison en J+2 avec exports principaux et teaser vertical.',
      },
      {
        question: 'Comment gérer plusieurs vidéos ?',
        answer:
          'Nous construisons un rétroplanning par lot et sécurisons des créneaux récurrents de tournage pour vos contenus réguliers.',
      },
      {
        question: 'Les délais incluent-ils les sous-titres ?',
        answer:
          'Oui, les fichiers .srt FR/EN sont fournis avec la livraison finale, sauf mention contraire dans le devis.',
      },
    ],
  },
  {
    slug: 'livrables-video-pro',
    title: 'FAQ Budget : quels livrables obtenir ?',
    meta: 'Anticiper vos livrables pour activer vos vidéos sur chaque canal.',
    category: 'Budget & Devis',
    summary:
      'Formats, ratios, masters et fichiers sources : faisons le point sur ce qui est inclus dans nos packs.',
    sections: [
      {
        heading: 'Livrables standards',
        content:
          'Chaque projet inclut un master 4K 16:9, une version social-first 1:1, un cut vertical 9:16, et les sous-titres .srt FR/EN.',
      },
      {
        heading: 'Fichiers sources & assets',
        content:
          'Les rushes bruts sont archivés 6 mois. Mise à disposition sur demande avec option stockage sécurisé.',
      },
      {
        heading: 'Plan de diffusion',
        content:
          'Checklist de diffusion + recommandations copywriting livrées. Nous proposons un pack activation social media en option.',
      },
    ],
    faq: [
      {
        question: 'Les fichiers projets sont-ils inclus ?',
        answer:
          'Les fichiers montages (Premiere Pro/DaVinci) peuvent être fournis via option dédiée, facturée au temps d’organisation.',
      },
      {
        question: 'Proposez-vous des déclinaisons supplémentaires ?',
        answer:
          'Oui, déclinaisons carrousel, GIF, bumper 6 s disponibles. Elles sont intégrées dans le devis initial selon vos objectifs.',
      },
      {
        question: 'Comment sont livrés les fichiers ?',
        answer:
          'Via espace client sécurisé : prévisualisation, téléchargement, statut de validation, historique des versions.',
      },
    ],
  },
];

export const legalPages = {
  mentions: {
    title: 'Mentions légales',
    sections: [
      {
        heading: 'Éditeur du site',
        content:
          'Studio VBG – [[Ville / Zones]] – [[Email pro]] – [[Téléphone]]. Entreprise individuelle immatriculée sous le n° SIREN [[SIREN]].',
      },
      {
        heading: 'Hébergement',
        content: 'Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.',
      },
      {
        heading: 'Propriété intellectuelle',
        content:
          'Tous les contenus (textes, images, vidéos) sont la propriété de Studio VBG. Toute reproduction sans autorisation est interdite.',
      },
    ],
  },
  privacy: {
    title: 'Politique de confidentialité',
    sections: [
      {
        heading: 'Traitement des données',
        content:
          'Les données collectées via les formulaires servent à répondre à vos demandes commerciales. Elles sont conservées 24 mois et stockées dans l’UE.',
      },
      {
        heading: 'Vos droits',
        content:
          'Conformément au RGPD, vous disposez de droits d’accès, de rectification et de suppression. Contactez [[Email pro]] pour toute demande.',
      },
      {
        heading: 'Sécurité',
        content:
          'Chiffrement TLS, accès restreint, audits réguliers. Les journaux sont conservés 12 mois.',
      },
    ],
  },
  cookies: {
    title: 'Politique cookies & RGPD',
    sections: [
      {
        heading: 'Cookies fonctionnels',
        content:
          'Nécessaires au fonctionnement : authentification espace client, conservation des préférences langue et thème.',
      },
      {
        heading: 'Mesure d’audience',
        content:
          'Matomo auto-hébergé, IP anonymisées, conservation 13 mois. Consentement requis avant dépôt.',
      },
      {
        heading: 'Gérer vos préférences',
        content:
          'Un bandeau permet d’accepter ou refuser par finalité. Vous pouvez modifier votre choix à tout moment depuis le pied de page.',
      },
    ],
  },
};

export const heroVideoGuidelines = {
  weight: '≤ 1,5 MB',
  formats: ['MP4 (H.264/HEVC)', 'WebM'],
  poster: 'Poster image 16:9 optimisée',
  preload: 'Preload si ≤ 1,5 MB sinon lazy-load',
};

export const serviceDetails = {
  entreprise: {
    slug: '/services/video-entreprise',
    name: 'Vidéo d’entreprise',
    description:
      'Un manifeste percutant pour incarner votre vision et soutenir vos cycles de vente B2B.',
    hero: {
      headline: 'Vidéo d’entreprise signature',
      subhead: 'Un pitch premium pour embarquer clients, partenaires et talents.',
      video: {
        src: '/assets/services/entreprise-hero.mp4',
        poster: '/assets/services/entreprise-hero.jpg',
      },
    },
    usps: ['Un seul interlocuteur du brief à la diffusion', 'Déclinaisons sales-ready', 'Storytelling orienté ROI'],
    problems: [
      'Messages corporate dilués',
      'Manque de vidéos commerciales à jour',
      'Difficulté à aligner COM/vente',
    ],
    solutions: [
      'Immersion terrain pour saisir votre culture',
      'Script narratif validé avec vos équipes',
      'Motion design subtil pour clarifier vos offres',
    ],
    results: [
      'Pitch vidéo 90 s sales-ready',
      'Teasers social-first',
      'Livrables sales kit + .srt FR/EN',
    ],
    formats: [
      {
        title: 'Film manifeste',
        description: 'Pour lancer une plateforme de marque ou un plan stratégique.',
        bullets: ['Interviews dirigeant', 'Plans métiers', 'Habillage motion data'],
      },
      {
        title: 'Portrait dirigeant',
        description: 'Humaniser votre leadership et rassurer vos prospects.',
        bullets: ['Interview immersive', 'B-roll contextuel', 'Version 60 s LinkedIn'],
      },
      {
        title: 'Témoignages clients',
        description: 'Convaincre par la preuve sociale B2B.',
        bullets: ['Interviews multi-sites', 'Captation audio broadcast', 'Cut verticaux par bénéfice'],
      },
    ],
    livrables: ['Master 4K 16:9', 'Version 1:1 LinkedIn', 'Cut 45 s vertical', 'Sous-titres .srt FR/EN', 'Miniatures optimisées'],
    options: ['Drone 4K certifié', 'Voix-off native', 'Pack motion data', 'Script copywriting sales'],
    process: [
      'Brief stratégique co-animé avec Direction & Sales',
      'Pré-production : script, storyboard, plan de diffusion',
      'Tournage agile sur site + interviews dirigeant',
      'Post-production : montage narratif, motion léger, mixage',
      'Activation : exports multi-formats, accompagnement diffusion',
    ],
    tarifs: [
      { pack: 'Journée', price: 'À partir de 950 € HT', contenu: '1 jour tournage, montage J+5, 2 versions' },
      { pack: 'Weekend (2 jours)', price: 'À partir de 1 500 € HT', contenu: 'Pré-prod avancée, 2 jours tournage, 3 versions' },
      { pack: 'Sur demande', price: 'Sur devis', contenu: 'Campagne multi-films, options internationales' },
    ],
    faq: [
      {
        q: 'Combien de temps dure la phase de pré-production ?',
        a: 'Comptez 3 jours ouvrés pour script, storyboard et validations internes. Option express 24 h disponible.'
      },
      {
        q: 'Peut-on tourner dans plusieurs villes ?',
        a: 'Oui, nous organisons des tournages multi-sites en optimisant les déplacements et autorisations.'
      },
      {
        q: 'Proposez-vous une version anglaise ?',
        a: 'Livraison .srt FR/EN incluse. Voix-off ou sous-titres supplémentaires sur devis.'
      },
      {
        q: 'Comment se passent les validations ?',
        a: 'Deux cycles de retours via plateforme collaborative sont inclus pour sécuriser vos ajustements.'
      },
    ],
    testimonials: [
      '“Un manifeste clair, adopté par 120 commerciaux en 2 semaines.” — Nicolas, NovaTech',
      '“Le film dirigeant a boosté nos demandes de RDV qualifiés.” — Camille, Atelier Céleste',
    ],
    concept: {
      objective: 'Attirer des leads B2B et embarquer vos équipes',
      audience: 'Comités de direction, prospects, nouveaux talents',
      hook: ['“Et si votre vision se vivait en 90 secondes ?”', '“Vos équipes connaissent la destination, montrons-leur la route.”', '“Une vidéo qui transforme vos slides en émotions.”'],
      concept:
        'Un manifeste tourné dans vos espaces stratégiques, mixant témoignages dirigeant, voix de collaborateurs et captations métiers ralenties, le tout rythmé par une bande-son cinématique.',
      script:
        '00-03 s : logo sting animé + hook dirigeant. 03-12 s : présentation enjeu, voix dirigeant. 12-30 s : plans métiers + citations collaborateurs. 30-45 s : chiffres clés animés. 45-70 s : preuve sociale client. 70-90 s : vision future + CTA.',
      storyboard: [
        { shot: 'Plan drone façade', action: 'Reveal siège, soleil levant', audio: 'Voix dirigeant “Notre vision...”', overlay: 'Logo subtil' },
        { shot: 'Plan slider atelier', action: 'Collaborateurs au travail', audio: 'Ambiance atelier + voix off', overlay: 'Texte KPI 2025' },
        { shot: 'Interview CEO', action: 'Medium shot caméra épaule', audio: 'CEO face caméra', overlay: 'Nom + fonction' },
        { shot: 'Collaboration', action: 'Réunion produit', audio: 'Ambiance légère', overlay: 'Valeur : Innovation' },
        { shot: 'Client utilisant produit', action: 'Cutaway', audio: 'Témoignage client', overlay: 'Citation clé' },
        { shot: 'Plan final équipe', action: 'Team shot en slow', audio: 'Montée musicale', overlay: 'CTA : Rejoignez-nous' },
      ],
      tournage: {
        duree: '1 à 2 jours',
        lieux: 'Siège + site de production',
        lumiere: 'LED bicolores + bounce naturel',
        son: 'Prises HF + micro canon',
        materiel: 'RED Komodo 6K, slider, drone mini 3 pro',
      },
      timeline: 'J0 brief · J+2 repérages · J+4 tournage · J+7 premier montage · J+10 livraison finale',
    },
  },
  evenementiel: {
    slug: '/services/videos-evenementielles',
    name: 'Vidéos événementielles',
    description: 'Aftermovies, teasers et captations multi-cam pour prolonger vos temps forts.',
    hero: {
      headline: 'Vidéos événementielles à fort impact',
      subhead: 'Capturer l’énergie de vos temps forts et relancer l’engagement dès J+1.',
      video: {
        src: '/assets/services/evenementiel-hero.mp4',
        poster: '/assets/services/evenementiel-hero.jpg',
      },
    },
    usps: ['Multi-cam synchronisé', 'Livraison teaser J+2', 'Workflow accréditations sécurisé'],
    problems: ['Captation amateur', 'Retours tardifs', 'Difficulté à alimenter les réseaux en temps réel'],
    solutions: ['Plan caméra par séquence', 'Équipe agile multi-profils', 'Station DIT sur place pour dérushage express'],
    results: ['Aftermovie 90 s', 'Teaser vertical 30 s', 'Clips thématiques pour sponsors'],
    formats: [
      {
        title: 'Teaser pré-event',
        description: 'Stimuler les inscriptions à J-30.',
        bullets: ['Motion léger', 'Images éditions précédentes', 'Countdown intégré'],
      },
      {
        title: 'Aftermovie',
        description: 'Revivez l’émotion en 90 s, prêt à partager.',
        bullets: ['Captation multi-cam', 'Interviews express', 'Montage rythmé'],
      },
      {
        title: 'Captation talks',
        description: 'Conservez vos conférences en replay premium.',
        bullets: ['Multi-cam 4K', 'Mixage son live', 'Chapitres exportés'],
      },
    ],
    livrables: ['Aftermovie 16:9', 'Teaser 9:16', 'Clips sponsors 1:1', 'Bibliothèque photos key frames', '.srt FR/EN'],
    options: ['Diffusion live multi-plateformes', 'Habillage sponsor', 'Plateau interview', 'Photographe dédié'],
    process: [
      'Brief captation + objectifs partenaires',
      'Pré-prod : plan caméra, accréditations, logistique',
      'Tournage multi-cam en mobilité',
      'Post-prod express : teaser J+2, aftermovie J+5',
      'Activation : kit sponsors, médias & réseaux',
    ],
    tarifs: [
      { pack: 'Journée', price: 'À partir de 1 500 € HT', contenu: 'Teaser + captation single cam, montage J+5' },
      { pack: 'Weekend (2 jours)', price: 'À partir de 2 400 € HT', contenu: 'Multi-cam, aftermovie, clips sponsors' },
      { pack: 'Sur demande', price: 'Sur devis', contenu: 'Tournée nationale, diffusion live, scénographie sur-mesure' },
    ],
    faq: [
      { q: 'Combien d’opérateurs sur site ?', a: 'Minimum 2 (réalisateur + opérateur audio), extensible selon nombre de scènes.' },
      { q: 'Pouvez-vous livrer un teaser pendant l’événement ?', a: 'Oui, dérushage live et montage express inclus dans l’option express.' },
      { q: 'Comment gérez-vous les droits musique ?', a: 'Bibliothèque premium ou DJ set fourni, clearance RGPD incluse.' },
      { q: 'Les sponsors peuvent-ils valider ?', a: 'Oui, accès visionneuse dédiée avec commentaires horodatés.' },
    ],
    testimonials: [
      '“Aftermovie livré en J+3, sponsor ravi.” — Julien, Pulse Events',
      '“Teaser vertical prêt dès la fin de la plénière.” — Sophie, Ville Harmonie',
    ],
    concept: {
      objective: 'Amplifier la portée de votre événement',
      audience: 'Participants, prospects, sponsors',
      hook: ['“Revivez votre événement avant même de rentrer chez vous.”', '“Un aftermovie prêt avant la reprise du lundi.”', '“Le teaser qui relance vos ventes early bird.”'],
      concept:
        'Captation multi-cam mobile, interviews pop-up et plans aériens pour restituer l’émotion et la valeur de vos temps forts.',
      script:
        '00-05 s : shots dynamiques + titre. 05-20 s : réactions public. 20-45 s : interventions clés. 45-70 s : coulisses & interviews. 70-90 s : highlight sponsors + CTA prochaine édition.',
      storyboard: [
        { shot: 'Plan steadicam entrée', action: 'Participants arrivent', audio: 'Bande-son électro', overlay: 'Logo event' },
        { shot: 'Cut speakers', action: 'Intervenants sur scène', audio: 'Ambiance live', overlay: 'Nom speaker' },
        { shot: 'Interview coulisse', action: 'Micro main', audio: 'Citation participant', overlay: 'Citation clé' },
        { shot: 'Plan drone', action: 'Vue globale lieu', audio: 'Musique montée', overlay: 'Statistique participation' },
        { shot: 'Networking', action: 'Slow-motion handshake', audio: 'Ambiance crowd', overlay: 'Sponsor principal' },
        { shot: 'Final', action: 'Confettis, applaudissements', audio: 'Climax musical', overlay: 'CTA inscription prochaine édition' },
      ],
      tournage: {
        duree: '1 à 2 jours',
        lieux: 'Centre de congrès, scènes, coulisses',
        lumiere: 'Mix lumières ambiantes + LED portatives',
        son: 'Enregistreur multi-pistes + liaisons HF',
        materiel: 'Sony FX6, FX3, stabilisateurs, drone indoor',
      },
      timeline: 'J0 repérage digital · J+0 tournage · J+2 teaser · J+5 aftermovie · J+7 clips sponsors',
    },
  },
  immobilier: {
    slug: '/services/video-immobiliere',
    name: 'Vidéo immobilière',
    description: 'Valoriser vos biens premium et accélérer les réservations.',
    hero: {
      headline: 'Vidéo immobilière haut de gamme',
      subhead: 'Rendre vos biens irrésistibles en quelques secondes.',
      video: {
        src: '/assets/services/immobilier-hero.mp4',
        poster: '/assets/services/immobilier-hero.jpg',
      },
    },
    usps: ['Détails architecturaux mis en scène', 'Drone homologué', 'Livraison J+5'],
    problems: ['Annonces peu engageantes', 'Photos sans relief', 'Difficulté à se projeter'],
    solutions: ['Repérage lumière golden hour', 'Plans stabilisés + FPV léger', 'Voix-off optionnelle inspirante'],
    results: ['Visite 4K 90 s', 'Cut vertical 30 s pour réseaux', 'Photos key frames'],
    formats: [
      {
        title: 'Visite guidée',
        description: 'Parcours immersif pièce par pièce.',
        bullets: ['Voice-over storytelling', 'Plans slider + drone', 'Plan de coupe détails matières'],
      },
      {
        title: 'Teaser express',
        description: 'Capsule 30 s pour réseaux sociaux.',
        bullets: ['Format 9:16', 'Titres dynamiques', 'Musique élégante'],
      },
      {
        title: 'Pack programmes neufs',
        description: 'Idéal pour VEFA et commerciaux.',
        bullets: ['Plans 3D + tournage', 'Interviews promoteur', 'Call-to-action discret'],
      },
    ],
    livrables: ['Master 4K', 'Version 1:1', 'Cut 9:16', 'Photos HDR', 'Plan de diffusion'],
    options: ['Visite 360°', 'Sous-titres multilingues', 'Scénographie virtuelle', 'Pack drone FPV'],
    process: [
      'Brief avec commercial et repérage lumière',
      'Pré-prod : parcours scénarisé, autorisations drone',
      'Tournage : slider, drone, détails textures',
      'Post-prod : montage immersif, étalonnage haut de gamme',
      'Activation : exports multi-ratios + kit annonce immobilière',
    ],
    tarifs: [
      { pack: 'Journée', price: 'À partir de 450 € HT', contenu: 'Visite 4K + cut vertical + 10 photos HDR' },
      { pack: 'Weekend (2 jours)', price: 'À partir de 750 € HT', contenu: 'Repérage + golden hour + déclinaisons multi-biens' },
      { pack: 'Sur demande', price: 'Sur devis', contenu: 'Programmes neufs, modules 3D, script commercial' },
    ],
    faq: [
      { q: 'Quelle est la durée idéale ?', a: 'Nous recommandons 60 à 90 secondes pour conserver l’attention et favoriser les prises de rendez-vous.' },
      { q: 'Pouvez-vous intégrer des plans 3D ?', a: 'Oui, nous mixons 3D et prises réelles pour valoriser les biens en construction.' },
      { q: 'Livrez-vous les photos ?', a: 'Oui, 10 photos HDR sont incluses dans chaque pack.' },
      { q: 'Quid des copropriétés ?', a: 'Nous gérons les autorisations drone et syndic, et fournissons un plan de communication aux copropriétaires.' },
    ],
    testimonials: [
      '“Les biens premium se réservent deux fois plus vite.” — Hugo, Groupe HexaImmo',
      '“La visite 360° rassure nos acquéreurs VEFA.” — Claire, Promoteur Urbain',
    ],
    concept: {
      objective: 'Accélérer les visites qualifiées et les réservations',
      audience: 'Acquéreurs premium, investisseurs, locataires corporate',
      hook: ['“Entrez avant tout le monde.”', '“Un bien d’exception mérite une visite cinématique.”', '“Rassurez vos clients dès le premier scroll.”'],
      concept:
        'Visite immersive alternant plans aériens, travellings fluides et focus sur les détails architecturaux sous une lumière dorée.',
      script:
        '00-05 s : plan drone arrivée. 05-20 s : salon et vue panoramique. 20-40 s : focus cuisine et matériaux. 40-60 s : suite parentale et spa. 60-80 s : extérieurs, piscine. 80-90 s : CTA contact commercial.',
      storyboard: [
        { shot: 'Drone arrival', action: 'Approche façade', audio: 'Ambiance douce', overlay: 'Nom du bien' },
        { shot: 'Slider salon', action: 'Mouvement latéral', audio: 'Musique piano', overlay: 'Surface + vue' },
        { shot: 'Detail marbre', action: 'Macro texture', audio: 'Ambiance', overlay: 'Matériaux premium' },
        { shot: 'Suite parentale', action: 'Travelling steady', audio: 'Voice-over inspirante', overlay: 'Suites & spa' },
        { shot: 'Extérieurs', action: 'Plans drone piscine', audio: 'Montée musicale', overlay: 'Jardin 800 m²' },
        { shot: 'Sunset', action: 'Time-lapse couché soleil', audio: 'Climax', overlay: 'CTA : Visite privée' },
      ],
      tournage: {
        duree: '0,5 à 1 jour',
        lieux: 'Bien à valoriser',
        lumiere: 'Golden hour + LED portatives',
        son: 'Ambiance + voix-off studio',
        materiel: 'Sony FX3, Ronin RS3, drone Mini 3 Pro',
      },
      timeline: 'J0 brief · J+1 repérage · J+2 tournage · J+4 dérush · J+5 livraison',
    },
  },
  mariage: {
    slug: '/services/film-mariage',
    name: 'Film de mariage',
    description: 'Immortaliser votre journée avec sensibilité et formats prêts à partager.',
    hero: {
      headline: 'Film de mariage poétique',
      subhead: 'Revivez chaque émotion dans un film haut de gamme.',
      video: {
        src: '/assets/services/mariage-hero.mp4',
        poster: '/assets/services/mariage-hero.jpg',
      },
    },
    usps: ['Discrétion absolue', 'Audio haute fidélité des vœux', 'Livrets vidéo optionnels'],
    problems: ['Vidéos amateurs tremblées', 'Son des vœux inaudible', 'Livraison tardive'],
    solutions: ['Préparation émotionnelle', 'Captation double boîtier', 'Montage cinématique + color grading pastel'],
    results: ['Film 6-8 min', 'Teaser 60 s', 'Capsules highlights'],
    formats: [
      {
        title: 'Film signature',
        description: 'Récit complet du jour J.',
        bullets: ['Préparatifs', 'Cérémonies', 'Soirée'],
      },
      {
        title: 'Teaser émotion',
        description: 'Capsule 60 s pour réseaux.',
        bullets: ['Format 9:16', 'Vœux audio', 'Moments forts'],
      },
      {
        title: 'Pack souvenirs',
        description: 'Coffret USB + livre photo optionnel.',
        bullets: ['Packaging haut de gamme', 'Galerie en ligne privée', 'Extraits bruts'],
      },
    ],
    livrables: ['Film 6-8 min 4K', 'Teaser 60 s 9:16', 'Capsules familles 1:1', 'Sous-titres FR', 'Coffret USB bois'],
    options: ['Second shooter', 'Drone cérémonie', 'Live diffusion', 'Album photo'],
    process: [
      'Brief émotion + repérage lieux',
      'Pré-prod : planning discret et coordination prestataires',
      'Tournage : double boîtier, son HF, drone selon lieu',
      'Post-prod : montage cinématique, sound design, color grading pastel',
      'Activation : galerie privée, teaser social, coffret souvenirs',
    ],
    tarifs: [
      { pack: 'Formule Cœur', price: 'À partir de 1 600 € TTC', contenu: '1 jour tournage, film 6-8 min, teaser 60 s' },
      { pack: 'Weekend', price: '2 100 € TTC', contenu: 'Préparatifs + brunch, double opérateur, coffret USB' },
      { pack: 'Sur demande', price: '2 600 € TTC', contenu: 'Destination wedding, drone, album sur-mesure' },
    ],
    faq: [
      { q: 'Combien de caméras utilisez-vous ?', a: 'Deux caméras en simultané, avec option second shooter pour les grands mariages.' },
      { q: 'Quand recevons-nous le film ?', a: 'Teaser livré en J+7, film complet sous 6 semaines maximum.' },
      { q: 'Pouvez-vous intégrer nos musiques ?', a: 'Oui, sous réserve de droits. Nous proposons une sélection de musiques libres de droits premium.' },
      { q: 'Comment partage-t-on le film ?', a: 'Galerie privée protégée, téléchargement HD, fichiers optimisés réseaux sociaux.' },
    ],
    testimonials: [
      '“Nous avons revécu chaque émotion, les vœux sont parfaits.” — Louise & Amir',
      '“Livraison rapide malgré un planning serré.” — Chloé & Martin',
    ],
    concept: {
      objective: 'Conserver un souvenir émotionnel et partageable',
      audience: 'Couples, familles, invités',
      hook: ['“Et si votre film racontait vos vœux en voix-off ?”', '“Une journée, mille émotions, un film signature.”', '“Parce que chaque détail mérite un ralenti.”'],
      concept:
        'Narration croisée des vœux et des réactions, tournage discret et lumineux pour restituer chaque émotion du jour J.',
      script:
        '00-05 s : lettre manuscrite, macro. 05-20 s : préparatifs, voix-off. 20-40 s : entrée cérémonie. 40-60 s : échange vœux. 60-80 s : cocktail & rires. 80-120 s : soirée dansante, slow-motion. 120-150 s : final feu d’artifice + CTA.',
      storyboard: [
        { shot: 'Macro alliances', action: 'Focus bague', audio: 'Ambiance piano', overlay: 'Date mariage' },
        { shot: 'Préparatifs', action: 'Plan serré maquillage', audio: 'Voix-off mariée', overlay: 'Citation vœux' },
        { shot: 'Allée centrale', action: 'Steadicam entrée', audio: 'Ambiance live', overlay: 'Lieu' },
        { shot: 'Échange vœux', action: 'Deux caméras', audio: 'Son direct', overlay: 'Promesses' },
        { shot: 'Cocktail', action: 'Slow-motion rires', audio: 'Musique douce', overlay: 'Moments complices' },
        { shot: 'Danse', action: 'Travelling piste', audio: 'Montée musicale', overlay: 'Final' },
      ],
      tournage: {
        duree: '1 à 2 jours',
        lieux: 'Préparatifs, cérémonies, soirée',
        lumiere: 'Naturelle + LED discrètes',
        son: 'Enregistreurs HF + micro d’appoint',
        materiel: 'Sony A7SIII, gimbal, enregistreurs Tascam',
      },
      timeline: 'J-30 repérage visio · J0 tournage · J+7 teaser · J+30 film complet',
    },
  },
  overview: {
    slug: '/services',
    name: 'Services & Tarifs',
    description: 'Comparez nos offres, packs et options selon votre besoin.',
    hero: {
      headline: 'Services & Tarifs 2025',
      subhead: 'Des packs lisibles, des délais garantis, un interlocuteur unique.',
      video: {
        src: '/assets/services/overview-hero.mp4',
        poster: '/assets/services/overview-hero.jpg',
      },
    },
  },
};
