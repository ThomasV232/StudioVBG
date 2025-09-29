import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'entreprise',
    title: 'Entreprise',
    details: [
      "Brief : enjeux business, messages marque, interlocuteurs internes.",
      'Pré-production : écriture script corporate, repérages bureaux, plan interviews.',
      'Production : tournage en équipe réduite, interviews multi-cam, captation b-roll.',
      'Post-production : montage narration, habillage graphique, sous-titres multilingues.'
    ]
  },
  {
    id: 'evenementiel',
    title: 'Événementiel',
    details: [
      'Brief : objectifs (teaser/live), moments clés, planning.',
      "Pré-production : feuille de route, coordination organisateur, autorisations site.",
      'Production : captation multi-cam, audio mixte, interviews à chaud.',
      'Post-production : aftermovie dynamique, version teaser 30s, export rapide.'
    ]
  },
  {
    id: 'immobilier',
    title: 'Immobilier',
    details: [
      'Brief : type de bien, cible, délais commercialisation.',
      'Pré-production : repérage lumière, scénarisation visite, planning drone.',
      'Production : traveling stabilisé, drone homologué, prises 360° optionnelles.',
      'Post-production : montage immersif, retouche colorimétrie, voice-over si besoin.'
    ]
  },
  {
    id: 'mariage',
    title: 'Mariage',
    details: [
      'Brief : rituel, planning journée, préférences storytelling.',
      'Pré-production : liste moments forts, coordination photographe, tests audio.',
      'Production : équipe discrète, prises multi-cam cérémonie, captation ambiance.',
      'Post-production : film 6-8 min, capsule social 60s, livraison sécurisée.'
    ]
  },
  {
    id: 'reseaux-sociaux',
    title: 'Réseaux sociaux',
    details: [
      'Brief : plateforme cible, format, cadence publication.',
      'Pré-production : écriture formats courts, plan de diffusion, sélection lieux.',
      'Production : tournage agile, éclairage léger, tournage vertical/horizontal.',
      'Post-production : montage snackable, sous-titres auto, exports multi-ratios.'
    ]
  },
  {
    id: 'motion-design-ia',
    title: 'Motion Design / IA',
    details: [
      'Brief : messages clés, charte, données à vulgariser.',
      'Pré-production : moodboard, storyboard, script voix-off.',
      'Production : animation, intégration assets IA, synchronisation voix.',
      'Post-production : sound design, déclinaisons langues, livrables formats digitaux.'
    ]
  }
];

const packs = [
  {
    name: 'Pack Journée',
    description:
      "Une équipe resserrée pour couvrir un tournage d'une journée. Idéal pour interviews, témoignages ou captations live courtes."
  },
  {
    name: 'Pack Weekend',
    description:
      'Dispositif sur deux jours consécutifs pour couvrir événements, mariages ou projets nécessitant plusieurs décors.'
  },
  {
    name: 'Pack Sur Demande',
    description:
      'Conception sur-mesure : repérages avancés, motion design, diffusion live, voix-off, sous-titrage multilingue et plus encore.'
  }
];

function Services() {
  return (
    <div className="section">
      <header>
        <h1>Services &amp; tarifs</h1>
        <p>
          Studio VBG vous guide de la préparation à la livraison. Pour chaque catégorie, nous activons
          les quatre étapes clés : Brief, Pré-production, Tournage, Post-production &amp; Livraison.
        </p>
      </header>

      <section aria-labelledby="packs">
        <h2 id="packs">Nos packs</h2>
        <div className="cards-grid">
          {packs.map((pack) => (
            <article key={pack.name} className="card">
              <h3>{pack.name}</h3>
              <p>{pack.description}</p>
            </article>
          ))}
        </div>
        <p>
          Chaque pack est ajusté selon vos besoins de diffusion. Nous détaillons le devis après analyse
          du brief.
        </p>
        <p>
          Besoin d'aide pour estimer votre budget ? Consultez notre FAQ budgétaire dans le{' '}
          <Link to="/blog#faq-budget">blog</Link>.
        </p>
      </section>

      <section aria-labelledby="categories">
        <h2 id="categories">Catégories</h2>
        <div className="cards-grid">
          {categories.map((category) => (
            <article key={category.id} className="card" id={category.id}>
              <h3>{category.title}</h3>
              <ul>
                {category.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p>
                <Link to="/portfolio">Voir des projets associés</Link>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Prêt à cadrer votre projet ?</h2>
        <p>
          Partagez vos enjeux, nous revenons vers vous avec un plan d'action personnalisé et un devis
          détaillé.
        </p>
        <Link className="button" to="/contact#devis">
          Démarrer un devis
        </Link>
      </section>
    </div>
  );
}

export default Services;
