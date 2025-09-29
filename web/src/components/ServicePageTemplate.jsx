import { Link } from 'react-router-dom';
import { processDetailed, serviceDetails } from '../data/content.js';

function ServicePageTemplate({ serviceKey }) {
  const data = serviceDetails[serviceKey];
  if (!data) {
    return (
      <div className="container">
        <p>Page en cours de production.</p>
      </div>
    );
  }

  return (
    <div className="page service">
      <section className="hero hero--service" aria-label={`Hero ${data.name}`}>
        <div className="hero__media">
          <video
            className="hero__video"
            src={data.hero.video.src}
            poster={data.hero.video.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <track kind="captions" src="/assets/services/hero-placeholder.srt" srcLang="fr" label="Sous-titres" default />
          </video>
        </div>
        <div className="hero__content container">
          <h1>{data.hero.headline}</h1>
          <p>{data.hero.subhead}</p>
          <div className="hero__cta">
            <Link to="/contact" className="btn btn--primary">
              Demander un devis
            </Link>
            <Link to="/portfolio" className="btn btn--ghost">
              Voir les réalisations
            </Link>
          </div>
          <ul className="hero__usp" aria-label="Preuves de valeur">
            {data.usps.map((usp) => (
              <li key={usp}>{usp}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container" aria-labelledby="problem-solution">
        <div className="section__header">
          <h2 id="problem-solution">Problème → Solution → Résultat</h2>
          <p>Identifions les blocages, activons la bonne réponse, mesurons l’impact.</p>
        </div>
        <div className="tri-columns">
          <div>
            <h3>Problèmes courants</h3>
            <ul className="bullet-list">
              {data.problems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Notre réponse</h3>
            <ul className="bullet-list">
              {data.solutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Résultats livrés</h3>
            <ul className="bullet-list">
              {data.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="formats">
        <div className="container">
          <div className="section__header">
            <h2 id="formats">Formats & offres</h2>
            <p>Des configurations modulables, pensées pour vos objectifs.</p>
          </div>
          <div className="grid grid--formats">
            {data.formats.map((format) => (
              <article key={format.title} className="card">
                <h3>{format.title}</h3>
                <p>{format.description}</p>
                <ul>
                  {format.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="processus">
        <div className="section__header">
          <h2 id="processus">Processus dédié</h2>
          <p>Une feuille de route précise, adaptée à votre secteur.</p>
        </div>
        <ol className="process-steps">
          {data.process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="section section--muted" aria-labelledby="livrables">
        <div className="container">
          <div className="section__header">
            <h2 id="livrables">Livrables</h2>
            <p>Formats optimisés pour chaque plateforme, accessibles et prêts à diffuser.</p>
          </div>
          <ul className="bullet-list bullet-list--inline">
            {data.livrables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="options">
            <h3>Options & add-ons</h3>
            <ul>
              {data.options.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="microcopy">
              Consultez nos précisions budgétaires sur <Link to="/blog">/blog</Link> (droits musicaux, révisions, délais,
              livrables).
            </p>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="tarifs">
        <div className="section__header">
          <h2 id="tarifs">Tarifs indicatifs</h2>
          <p>Des repères pour cadrer votre investissement. Chaque devis reste sur-mesure.</p>
        </div>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Pack</th>
              <th>À partir de</th>
              <th>Contenu</th>
            </tr>
          </thead>
          <tbody>
            {data.tarifs.map((item) => (
              <tr key={item.pack}>
                <td>{item.pack}</td>
                <td>{item.price}</td>
                <td>{item.contenu}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="microcopy">
          Besoin d’un accompagnement longue durée ? Parlons abonnement de contenus social-first.
        </p>
      </section>

      <section className="section section--accent" aria-labelledby="cta-service">
        <div className="container">
          <h2 id="cta-service">Prêt à lancer le projet ?</h2>
          <p>Remplissez le formulaire avancé pour recevoir un plan d’action détaillé en 24 h.</p>
          <Link to="/contact" className="btn btn--light">
            Demander un devis
          </Link>
          <p className="microcopy">Délais standard : J+5 · Option express J+2 selon complexité.</p>
        </div>
      </section>

      <section className="section container" aria-labelledby="faq-service">
        <div className="section__header">
          <h2 id="faq-service">Mini-FAQ</h2>
          <p>Questions fréquentes sur cette offre spécifique.</p>
        </div>
        <div className="accordion">
          {data.faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="temoignages-service">
        <div className="container">
          <div className="section__header">
            <h2 id="temoignages-service">Preuves sociales</h2>
            <p>Ce qu’en disent nos clients.</p>
          </div>
          <ul className="testimonials">
            {data.testimonials.map((quote) => (
              <li key={quote}>{quote}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container" aria-labelledby="process-detaillé">
        <div className="section__header">
          <h2 id="process-detaillé">Détails méthode STUDIO VBG</h2>
          <p>Le socle commun à tous nos projets.</p>
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
      </section>
    </div>
  );
}

export default ServicePageTemplate;
