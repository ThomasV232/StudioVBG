import { Link } from 'react-router-dom';

const filters = ['Entreprise', 'Événementiel', 'Immobilier', 'Mariage', 'Réseaux sociaux', 'Motion Design / IA'];

const projects = [
  {
    title: 'AtlasTech – Film de lancement',
    category: 'Entreprise',
    duration: '2:10',
    summary:
      "Brief : clarifier l'offre B2B. Pré-prod : script et interviews. Tournage : multi-cam en usine. Post-prod : montage narratif et habillage graphique.",
    link: '/portfolio/atlastech-film-lancement'
  },
  {
    title: 'UrbanPulse Festival – Aftermovie',
    category: 'Événementiel',
    duration: '1:45',
    summary:
      'Brief : booster les ventes early bird. Pré-prod : feuille de route live. Tournage : équipe mobile multi-cam. Post-prod : aftermovie dynamique + teaser 30s.',
    link: '/portfolio/urbanpulse-aftermovie'
  },
  {
    title: 'Villa Alba – Visite immersive',
    category: 'Immobilier',
    duration: '1:30',
    summary:
      'Brief : séduire les investisseurs. Pré-prod : repérage lumière & plan drone. Tournage : travelling stabilisé + drone homologué. Post-prod : montage immersif & retouche colorimétrie.',
    link: '/portfolio/villa-alba'
  },
  {
    title: 'Maison Serene – Film mariage',
    category: 'Mariage',
    duration: '7:30',
    summary:
      'Brief : raconter le jour J avec discrétion. Pré-prod : coordination prestataires. Tournage : prises multi-cam cérémonie. Post-prod : film 6-8 min + capsule social.',
    link: '/portfolio/maison-serene-mariage'
  },
  {
    title: 'BloomLab – Série social media',
    category: 'Réseaux sociaux',
    duration: '0:45',
    summary:
      'Brief : nourrir la cadence hebdomadaire. Pré-prod : plan de diffusion et scripts courts. Tournage : éclairage léger, formats verticaux. Post-prod : montages snackables & sous-titres auto.',
    link: '/portfolio/bloomlab-serie-sociale'
  },
  {
    title: 'NovaData – Capsule motion design',
    category: 'Motion Design / IA',
    duration: '1:20',
    summary:
      'Brief : vulgariser des données IA. Pré-prod : moodboard + storyboard. Production : animation & intégration assets IA. Post-prod : sound design & exports digitaux.',
    link: '/portfolio/novadata-motion'
  }
];

function Portfolio() {
  return (
    <div className="section">
      <header>
        <h1>Portfolio</h1>
        <p>
          Sélectionnez une catégorie pour explorer les films livrés par Studio VBG. Chaque projet suit
          notre méthode en quatre temps : Brief → Pré-production → Tournage → Post-production &
          Livraison.
        </p>
      </header>

      <section aria-labelledby="filtres">
        <h2 id="filtres">Filtres</h2>
        <div className="cards-grid">
          {filters.map((filter) => (
            <span key={filter} className="badge">
              {filter}
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="liste-projets">
        <h2 id="liste-projets">Réalisations</h2>
        <div className="cards-grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>
                <strong>Catégorie :</strong> {project.category} • <strong>Durée :</strong> {project.duration}
              </p>
              <p>{project.summary}</p>
              <Link to={project.link}>Voir la fiche projet</Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="cta-contact">
        <h2 id="cta-contact">Besoin d'une vidéo ?</h2>
        <p>
          Racontez-nous votre projet, nous vous aidons à cadrer le brief et à prévoir la logistique.
        </p>
        <Link className="button" to="/contact">
          Accéder au formulaire
        </Link>
      </section>
    </div>
  );
}

export default Portfolio;
