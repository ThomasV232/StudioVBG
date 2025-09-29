import { Link } from 'react-router-dom';
import QuickContactForm from '../components/QuickContactForm.jsx';
import { processShort } from '../data/content.js';

function Contact() {
  return (
    <div className="page contact">
      <header className="page__header container">
        <h1>Contact & prise de rendez-vous</h1>
        <p>Partagez votre besoin en quelques lignes ou réservez un créneau visio avec Vincent.</p>
      </header>

      <section className="section container" aria-labelledby="coordonnees">
        <div className="two-columns">
          <div>
            <h2 id="coordonnees">Coordonnées</h2>
            <p>
              Email : <a href="mailto:[[Email pro]]">[[Email pro]]</a>
              <br /> Téléphone : <a href="tel:[[Téléphone]]">[[Téléphone]]</a>
            </p>
            <p>
              Adresse de production : [[Ville / Zones]]. Déplacements possibles sur toute la France métropolitaine et pays
              francophones voisins.
            </p>
            <p>
              Calendrier visio : choisissez votre créneau sur <Link to="/contact">/contact</Link> (lien Calendly à intégrer).
            </p>
            <ul className="process-short">
              {processShort.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.copy}</span>
                </li>
              ))}
            </ul>
          </div>
          <QuickContactForm />
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="infos">
        <div className="container">
          <h2 id="infos">Informations pratiques</h2>
          <ul className="bullet-list">
            <li>Délais standard : J+5, option express J+2 (selon complexité).</li>
            <li>Les devis restent valables 30 jours.</li>
            <li>Vos données sont hébergées en France, pas de revente.</li>
            <li>Formulaire avancé disponible sur l’accueil et /a-propos.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Contact;
