import { Link } from 'react-router-dom';
import { processDetailed, serviceDetails } from '../data/content.js';

const overviewSections = [
  {
    title: 'Vidéo d’entreprise',
    description: serviceDetails.entreprise.description,
    link: serviceDetails.entreprise.slug,
    process: [
      'Brief stratégique co-animé',
      'Script & storyboard',
      'Tournage agile HQ',
      'Montage narratif',
      'Activation sales kit',
    ],
    packs: serviceDetails.entreprise.tarifs,
  },
  {
    title: 'Vidéos événementielles',
    description: serviceDetails.evenementiel.description,
    link: serviceDetails.evenementiel.slug,
    process: [
      'Brief objectifs & sponsors',
      'Plan caméra & logistique',
      'Captation multi-cam',
      'Montage teaser/aftermovie',
      'Diffusion partenaires',
    ],
    packs: serviceDetails.evenementiel.tarifs,
  },
  {
    title: 'Vidéo immobilière',
    description: serviceDetails.immobilier.description,
    link: serviceDetails.immobilier.slug,
    process: [
      'Brief commercial',
      'Repérage lumière',
      'Tournage drone + slider',
      'Montage immersif',
      'Activation annonces',
    ],
    packs: serviceDetails.immobilier.tarifs,
  },
  {
    title: 'Film de mariage',
    description: serviceDetails.mariage.description,
    link: serviceDetails.mariage.slug,
    process: [
      'Brief émotion',
      'Planning discret',
      'Captation double boîtier',
      'Montage cinématique',
      'Galerie privée & coffret',
    ],
    packs: serviceDetails.mariage.tarifs,
  },
  {
    title: 'Contenus social-first',
    description: 'Séries verticales, UGC premium, capsules ads pilotées KPI.',
    link: '/contact',
    process: [
      'Calendrier éditorial 30 jours',
      'Écriture hooks & scripts courts',
      'Tournage studio mobile',
      'Montage batché & sous-titres',
      'Analyse KPI + recommandations',
    ],
    packs: [
      { pack: 'Batch 4 vidéos', price: 'À partir de 1 200 € HT', contenu: '1 journée tournage, 4 vidéos verticales, 2 ratios' },
      { pack: 'Batch 8 vidéos', price: 'À partir de 1 950 € HT', contenu: '2 journées tournage, 8 vidéos, kit copy' },
      { pack: 'Sur demande', price: 'Sur devis', contenu: 'Programme always-on, reporting mensuel' },
    ],
  },
  {
    title: 'Offre Express J+2',
    description: 'Capturez vos annonces chaudes en un temps record.',
    link: '/contact',
    process: [
      'Brief flash 30 min',
      'Pré-prod template',
      'Tournage 1 jour',
      'Montage nuit + sous-titres',
      'Livraison J+2',
    ],
    packs: [
      { pack: 'Annonce produit', price: 'À partir de 950 € HT', contenu: '1 vidéo 60 s 16:9 + déclinaison 9:16' },
      { pack: 'Pack événement', price: 'À partir de 1 400 € HT', contenu: 'Teaser 30 s + récap 60 s' },
      { pack: 'Sur demande', price: 'Sur devis', contenu: 'Déploiement multi-sites, motion avancé' },
    ],
  },
];

function Services() {
  return (
    <div className="page services">
      <section className="hero hero--service" aria-label="Services et tarifs">
        <div className="hero__media">
          <video
            className="hero__video"
            src={serviceDetails.overview.hero.video.src}
            poster={serviceDetails.overview.hero.video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <track kind="captions" src="/assets/services/overview.srt" srcLang="fr" label="Sous-titres" default />
          </video>
        </div>
        <div className="hero__content container">
          <h1>{serviceDetails.overview.hero.headline}</h1>
          <p>{serviceDetails.overview.hero.subhead}</p>
          <div className="hero__cta">
            <Link to="/contact" className="btn btn--primary">
              Demander un devis
            </Link>
            <Link to="/portfolio" className="btn btn--ghost">
              Voir les réalisations
            </Link>
          </div>
          <ul className="hero__usp" aria-label="Engagements">
            <li>🎥 Signature Solstice premium</li>
            <li>🗓️ Délais garantis J+5</li>
            <li>💼 Interlocuteur unique</li>
            <li>📊 KPI & reporting 30 jours</li>
          </ul>
        </div>
      </section>

      <section className="section container" aria-labelledby="services-grid">
        <div className="section__header">
          <h2 id="services-grid">Comparez nos offres</h2>
          <p>Chaque pack inclut le socle méthodologique STUDIO VBG et peut s’adapter à vos contraintes.</p>
        </div>
        <div className="grid grid--services-detail">
          {overviewSections.map((section) => (
            <article key={section.title} className="card card--service-detail">
              <header>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </header>
              <ol>
                {section.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <table>
                <thead>
                  <tr>
                    <th>Pack</th>
                    <th>À partir de</th>
                  </tr>
                </thead>
                <tbody>
                  {section.packs.map((pack) => (
                    <tr key={`${section.title}-${pack.pack}`}>
                      <td>{pack.pack}</td>
                      <td>{pack.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="microcopy">{section.packs[0].contenu}</p>
              <Link to={section.link} className="card__link">
                Détails & livrables
              </Link>
            </article>
          ))}
        </div>
        <p className="microcopy">
          Pour les questions sur droits musicaux, révisions ou livrables, consultez nos articles dédiés sur <Link to="/blog">/blog</Link>.
        </p>
      </section>

      <section className="section section--muted" aria-labelledby="process-detailed">
        <div className="container">
          <div className="section__header">
            <h2 id="process-detailed">Méthode STUDIO VBG</h2>
            <p>Un accompagnement visionnaire, orienté ROI.</p>
          </div>
          <ul className="process-detailed">
            {processDetailed.map((item) => (
              <li key={item.step}>
                <strong>{item.step}</strong>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container" aria-labelledby="cta-services">
        <div className="section__header">
          <h2 id="cta-services">Besoin d’un accompagnement hybride ?</h2>
          <p>Planifiez un appel découverte pour bâtir votre roadmap vidéo trimestrielle.</p>
        </div>
        <div className="cta-panel">
          <p>Réservez un créneau visio sur /contact ou envoyez-nous vos objectifs via le formulaire avancé.</p>
          <Link to="/contact" className="btn btn--primary">
            Planifier un appel
          </Link>
          <p className="microcopy">Réponse sous 24 h. Vos données sont protégées et hébergées en France.</p>
        </div>
      </section>
    </div>
  );
}

export default Services;
