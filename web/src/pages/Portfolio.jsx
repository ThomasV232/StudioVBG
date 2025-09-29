import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioFilters, portfolioItems, processShort } from '../data/content.js';

function Portfolio() {
  const [filter, setFilter] = useState('Toutes');
  const filteredProjects = useMemo(() => {
    if (filter === 'Toutes') return portfolioItems;
    return portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="page portfolio">
      <header className="page__header container">
        <h1>Réalisations</h1>
        <p>
          Explorez nos campagnes vidéo classées par univers. Aucun tarif n’est affiché : nous mettons l’accent sur le résultat,
          les usages et la méthode Brief → Pré-production → Tournage → Post-production & Livraison.
        </p>
      </header>

      <section className="section container" aria-labelledby="filters">
        <div className="section__header">
          <h2 id="filters">Filtrer par univers</h2>
          <p>Choisissez le secteur qui correspond à votre besoin.</p>
        </div>
        <div className="filter-bar" role="tablist" aria-label="Catégories de réalisations">
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'Toutes'}
            className={filter === 'Toutes' ? 'is-active' : ''}
            onClick={() => setFilter('Toutes')}
          >
            Toutes
          </button>
          {portfolioFilters.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              className={filter === category ? 'is-active' : ''}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="projects">
        <div className="container">
          <div className="section__header">
            <h2 id="projects">Projets récents</h2>
            <p>Chaque fiche inclut un storyboard, un plan de diffusion et un schéma VideoObject prêt à publier.</p>
          </div>
          <div className="grid grid--portfolio">
            {filteredProjects.map((item) => (
              <article key={item.slug} className="card card--portfolio" id={item.slug}>
                <div className="card__meta">
                  <span className="tag">{item.category}</span>
                  <span>{item.duration}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="card__tags">{item.tags.join(' · ')}</p>
                <details>
                  <summary aria-label={`Voir le schéma VideoObject pour ${item.title}`}>Détails techniques & SEO</summary>
                  <pre aria-live="polite">
{`{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "${item.title}",
  "description": "${item.description}",
  "thumbnailUrl": "${item.videoUrl}",
  "uploadDate": "2024-09-01",
  "duration": "PT${item.duration.replace(' ', '').replace('min', 'M').replace(':', 'M')}S",
  "contentUrl": "${item.videoUrl}",
  "embedUrl": "${item.videoUrl}"
}`}
                  </pre>
                </details>
                <Link to="/contact" className="card__link">
                  Projet similaire ? Demander un devis
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="mini-process">
        <div className="section__header">
          <h2 id="mini-process">Notre méthode en 4 étapes</h2>
          <p>Synthèse actionable pour cadrer chaque projet de réalisation.</p>
        </div>
        <ol className="process-short">
          {processShort.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.copy}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--accent" aria-labelledby="cta-portfolio">
        <div className="container">
          <h2 id="cta-portfolio">Prêt à écrire la prochaine histoire ?</h2>
          <p>
            Répondez à 8 questions clés sur /contact pour recevoir un plan d’action vidéo personnalisé en moins de 24 h.
          </p>
          <Link to="/contact" className="btn btn--light">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
