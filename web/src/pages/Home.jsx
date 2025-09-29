import { Link } from 'react-router-dom';

const recentProjects = [
  {
    title: 'AtlasTech – Film de lancement',
    tags: ['Entreprise', 'B2B', '2:10'],
    link: '/portfolio/atlastech-film-lancement',
    description:
      "Une narration claire pour mettre en avant l'innovation produit et embarquer les équipes commerciales."
  },
  {
    title: 'UrbanPulse Festival – Aftermovie',
    tags: ['Événementiel', '1:45'],
    link: '/portfolio/urbanpulse-aftermovie',
    description:
      "Aftermovie rythmé qui retranscrit l'énergie du festival et nourrit la stratégie social media."
  },
  {
    title: 'Villa Alba – Visite immersive',
    tags: ['Immobilier', '1:30'],
    link: '/portfolio/villa-alba',
    description:
      'Une mise en valeur lumineuse pour accélérer les visites qualifiées et rassurer les investisseurs.'
  }
];

const servicePreview = [
  {
    title: 'Entreprise',
    text:
      "Films corporate, interviews multi-cam et vidéos onboarding pour aligner vos messages clés.",
    link: '/services#entreprise'
  },
  {
    title: 'Événementiel',
    text: 'Captations live, aftermovies et teasers pour prolonger le rayonnement de vos événements.',
    link: '/services#evenementiel'
  },
  {
    title: 'Immobilier',
    text: 'Visites immersives, drone homologué et voix-off pour déclencher le coup de cœur.',
    link: '/services#immobilier'
  },
  {
    title: 'Mariage',
    text: 'Films sensibles et capsules sociales pour revivre les émotions du jour J.',
    link: '/services#mariage'
  },
  {
    title: 'Réseaux sociaux',
    text: 'Formats verticaux snackables, prêts à poster et optimisés pour chaque plateforme.',
    link: '/services#reseaux-sociaux'
  },
  {
    title: 'Motion Design / IA',
    text: 'Animations claires et dynamiques pour vulgariser vos données et vos produits innovants.',
    link: '/services#motion-design-ia'
  }
];

const testimonials = [
  {
    quote:
      '« Des vidéos claires, émotionnelles et efficaces. »',
    author: 'Lina, AtlasTech'
  },
  {
    quote:
      '« Réactivité et créativité, le reportage de notre festival a doublé notre reach social. »',
    author: 'Marc D., UrbanPulse'
  },
  {
    quote:
      '« Tournage fluide, montage élégant. On sent le souci du détail à chaque étape. »',
    author: 'Sarah L., Maison Serene'
  }
];

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <div>
            <p className="badge">Showreel 2024 – Production vidéo orientée performance</p>
            <h1>Vidéos qui portent vos histoires</h1>
            <p>
              Studio VBG accompagne marques, événements et particuliers de Lyon et de toute la région
              Rhône-Alpes avec des réalisations sur-mesure, prêtes à performer.
            </p>
            <p>Durée 90s • Projets récents</p>
            <div className="hero-actions">
              <Link className="button" to="/portfolio">
                Voir les réalisations
              </Link>
              <Link className="button secondary" to="/contact#devis">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="projets-recents">
        <h2 id="projets-recents">Projets récents</h2>
        <p>
          Découvrez trois réalisations marquantes. Filtrez l'intégralité du portfolio pour trouver
          l'inspiration.
        </p>
        <div className="cards-grid">
          {recentProjects.map((project) => (
            <article key={project.title} className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                {project.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </p>
              <Link to={project.link}>Voir le projet</Link>
            </article>
          ))}
        </div>
        <p style={{ marginTop: '2rem' }}>
          <Link className="button" to="/portfolio">
            Explorer le portfolio complet
          </Link>
        </p>
      </section>

      <section className="section" aria-labelledby="services-preview">
        <h2 id="services-preview">Services &amp; expertises</h2>
        <p>De la stratégie à la livraison, chaque catégorie suit un processus clair.</p>
        <div className="cards-grid">
          {servicePreview.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link to={service.link}>Découvrir la catégorie</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="processus">
        <h2 id="processus">Notre méthode</h2>
        <p>🔍 Brief → 📝 Pré-production → 🎥 Tournage → 🎬 Post-production &amp; Livraison.</p>
        <p>
          Chaque projet suit ces quatre étapes pour garantir des décisions créatives alignées sur vos
          objectifs.
        </p>
      </section>

      <section className="section" aria-labelledby="temoignages">
        <h2 id="temoignages">Témoignages</h2>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author}>
              <p>{testimonial.quote}</p>
              <cite>{testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="contact-devis">
        <h2 id="contact-devis">Contact &amp; devis</h2>
        <p>
          Vous avez un projet vidéo ? Partagez votre brief et nous revenons vers vous sous 24h
          ouvrées.
        </p>
        <Link className="button" to="/contact">
          Accéder au formulaire
        </Link>
      </section>
    </div>
  );
}

export default Home;
