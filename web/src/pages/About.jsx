import { Link } from 'react-router-dom';
import AdvancedContactForm from '../components/AdvancedContactForm.jsx';
import { processShort, testimonials } from '../data/content.js';

function About() {
  const featuredTestimonials = testimonials.slice(0, 3);
  return (
    <div className="page about">
      <header className="page__header container">
        <h1>À propos</h1>
        <p>
          Je suis Vincent, réalisateur et stratège vidéo chez STUDIO VBG. J’accompagne les PME hexagonales à produire des
          contenus premium, social-first et orientés ROI.
        </p>
      </header>

      <section className="section container" aria-labelledby="bio">
        <div className="two-columns">
          <div>
            <h2 id="bio">Vision & parcours</h2>
            <p>
              10 ans de réalisation et direction de production pour des marques B2B, collectivités et maisons premium. Mon credo :
              une vision stratégique avant la caméra, un interlocuteur unique, une exécution millimétrée.
            </p>
            <ul className="bullet-list">
              <li>Expert vidéo social-first certifié Meta & YouTube.</li>
              <li>Formation UX Writing pour optimiser scripts et CTA.</li>
              <li>Interventions en écoles (EM Lyon, Gobelins) sur la narration ROI.</li>
            </ul>
            <p>
              Localisation : [[Ville / Zones]]. Déplacements France entière et Europe francophone selon projet.
            </p>
          </div>
          <figure className="portrait" aria-labelledby="bio">
            <img src="/assets/portrait-vincent.jpg" alt="Portrait du fondateur de STUDIO VBG" />
            <figcaption>Vincent — Réalisateur & stratège vidéo</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="usp">
        <div className="container">
          <h2 id="usp">Ce qui nous distingue</h2>
          <div className="grid grid--usp">
            <article>
              <h3>Un seul interlocuteur</h3>
              <p>Vous échangez directement avec le réalisateur, du brief au reporting.</p>
            </article>
            <article>
              <h3>Vision social-first</h3>
              <p>Chaque tournage intègre des déclinaisons verticales et sous-titres natifs.</p>
            </article>
            <article>
              <h3>Délais maîtrisés</h3>
              <p>Cadre J+5 par défaut, option express J+2 pour vos annonces prioritaires.</p>
            </article>
            <article>
              <h3>Créativité ROIste</h3>
              <p>Storyboard, KPI, activation : chaque livrable s’aligne sur vos objectifs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="testimonials">
        <div className="section__header">
          <h2 id="testimonials">Témoignages</h2>
          <p>Les clients parlent mieux de nous que nous-mêmes.</p>
        </div>
        <div className="grid grid--testimonials">
          {featuredTestimonials.map((item) => (
            <article key={item.name}>
              <p>“{item.quote}”</p>
              <p className="microcopy">
                {item.name} — {item.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="logos">
        <div className="container">
          <h2 id="logos">Ils nous font confiance</h2>
          <ul className="logo-grid" aria-label="Logos clients">
            <li aria-label="Logo NovaTech">NovaTech</li>
            <li aria-label="Logo Pulse Events">Pulse Events</li>
            <li aria-label="Logo HexaImmo">HexaImmo</li>
            <li aria-label="Logo Maison Lestelle">Maison Lestelle</li>
            <li aria-label="Logo Ville Harmonie">Ville Harmonie</li>
            <li aria-label="Logo Bloom Cosmetics">Bloom Cosmetics</li>
          </ul>
        </div>
      </section>

      <section className="section container" aria-labelledby="competences">
        <div className="section__header">
          <h2 id="competences">Compétences & matériel</h2>
          <p>Un setup premium, optimisé pour la flexibilité.</p>
        </div>
        <div className="grid grid--skills">
          <article>
            <h3>Compétences</h3>
            <ul>
              <li>Direction artistique & script doctoring</li>
              <li>Opérateur drone agréé DGAC</li>
              <li>Motion design & intégration IA générative</li>
              <li>Mixage audio broadcast et sous-titres accessibilité</li>
            </ul>
          </article>
          <article>
            <h3>Matériel</h3>
            <ul>
              <li>Caméras RED Komodo 6K & Sony FX6</li>
              <li>Optiques cinéma Sigma & Zeiss</li>
              <li>Gimbal Ronin RS3, slider motorisé Edelkrone</li>
              <li>Enregistreurs audio Sound Devices + micros HF Sennheiser</li>
              <li>Parcs LED Aputure (bi-color & RGB) + modificateurs</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="process">
        <div className="container">
          <h2 id="process">Notre processus en 4 temps</h2>
          <ol className="process-short">
            {processShort.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.copy}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container" aria-labelledby="contact-devis">
        <div className="section__header">
          <h2 id="contact-devis">Contact & devis</h2>
          <p>Partagez votre projet, nous répondons avec un plan d’action détaillé en 24 h ouvrées.</p>
        </div>
        <div className="contact-grid">
          <div>
            <p>
              Email : <a href="mailto:[[Email pro]]">[[Email pro]]</a>
              <br /> Téléphone : <a href="tel:[[Téléphone]]">[[Téléphone]]</a>
            </p>
            <p className="microcopy">Vos données sont traitées en interne, hébergées en France et supprimées sous 24 mois.</p>
            <p>Retrouvez notre calendrier en ligne sur <Link to="/contact">/contact</Link>.</p>
          </div>
          <AdvancedContactForm />
        </div>
      </section>
    </div>
  );
}

export default About;
