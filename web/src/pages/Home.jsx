import { Link } from 'react-router-dom';
import AdvancedContactForm from '../components/AdvancedContactForm.jsx';
import { heroVideoGuidelines, portfolioItems, processShort, servicePreviews, testimonialSnippets } from '../data/content.js';

function Home() {
  const featuredPortfolio = portfolioItems.slice(0, 3);
  return (
    <div className="page home">
      <section className="hero" aria-label="Hero Studio VBG">
        <div className="hero__media">
          <video
            className="hero__video"
            src="/assets/showreel-solstice.mp4"
            poster="/assets/showreel-solstice-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <track kind="captions" src="/assets/showreel-solstice.srt" srcLang="fr" label="Français" default />
          </video>
          <p className="hero__meta">
            Showreel Solstice — {heroVideoGuidelines.weight}, formats{' '}
            {heroVideoGuidelines.formats.join(' + ')}.
          </p>
        </div>
        <div className="hero__content container">
          <h1>Studio vidéo visionnaire pour PME ambitieuses</h1>
          <p>
            STUDIO VBG orchestre vos campagnes vidéo social-first avec un seul interlocuteur dédié, des délais maîtrisés et une
            signature premium pensée pour la conversion.
          </p>
          <div className="hero__cta">
            <Link to="/portfolio" className="btn btn--primary">
              Voir les réalisations
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Demander un devis
            </Link>
          </div>
          <ul className="hero__usp" aria-label="Preuves clés">
            <li>⚡ Option express J+2</li>
            <li>🎯 KPI pilotés à 30 jours</li>
            <li>🤝 100 % social-first</li>
            <li>🛡️ Conformité RGPD & accessibilité AA</li>
          </ul>
        </div>
      </section>

      <section className="section container" aria-labelledby="section-services">
        <div className="section__header">
          <h2 id="section-services">Services phare</h2>
          <p>Des formats pensés pour attirer, convertir et fidéliser vos audiences.</p>
        </div>
        <div className="grid grid--services">
          {servicePreviews.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.to} className="card__link">
                Découvrir
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="section-portfolio">
        <div className="container">
          <div className="section__header">
            <h2 id="section-portfolio">Sélection de réalisations</h2>
            <p>Des projets récents pour des PME hexagonales : pas de tarifs, que du résultat.</p>
          </div>
          <div className="grid grid--portfolio">
            {featuredPortfolio.map((item) => (
              <article key={item.slug} className="card card--portfolio">
                <div className="card__meta">
                  <span className="tag">{item.category}</span>
                  <span>{item.duration}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="card__tags">{item.tags.join(' · ')}</p>
                <Link to={`/portfolio#${item.slug}`} className="card__link">
                  Voir le projet
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="section-process">
        <div className="section__header">
          <h2 id="section-process">Processus maîtrisé</h2>
          <p>Chaque étape est cadencée pour sécuriser votre message et votre délai.</p>
        </div>
        <ol className="process-short">
          {processShort.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.copy}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--muted" aria-labelledby="section-testimonials">
        <div className="container">
          <div className="section__header">
            <h2 id="section-testimonials">Ils en parlent</h2>
            <p>Deux retours clients, issus de campagnes livrées en 2024.</p>
          </div>
          <ul className="testimonials">
            {testimonialSnippets.map((snippet) => (
              <li key={snippet}>“{snippet.replace('“', '').replace('”', '')}”</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container" aria-labelledby="section-contact">
        <div className="section__header">
          <h2 id="section-contact">Contact & devis</h2>
          <p>Remplissez le formulaire détaillé pour recevoir un plan d’action vidéo personnalisé.</p>
        </div>
        <div className="contact-grid">
          <div>
            <h3>Ce que vous obtenez</h3>
            <ul className="bullet-list">
              <li>Audit express de vos contenus actuels.</li>
              <li>Recommandation de formats alignés sur vos objectifs business.</li>
              <li>Timeline claire et budget maîtrisé avant tournage.</li>
            </ul>
            <p className="microcopy">
              Délais standards : J+5. Option express : J+2 (selon complexité). Votre interlocuteur reste unique du brief à la
              livraison.
            </p>
            <p>
              Besoin d’une visio ? Réservez un créneau sur <Link to="/contact">/contact</Link>.
            </p>
          </div>
          <AdvancedContactForm />
        </div>
      </section>
    </div>
  );
}

export default Home;
