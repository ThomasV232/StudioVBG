import { Link } from 'react-router-dom';

const testimonials = [
  {
    quote:
      '« Studio VBG a transformé notre lancement produit en un film clair et percutant. L\'équipe a su guider nos équipes jusqu\'au bout. »',
    author: 'Lina C. – Responsable communication, AtlasTech'
  },
  {
    quote:
      '« Réactivité et créativité, le reportage de notre festival a doublé notre reach social. »',
    author: 'Marc D. – Directeur événementiel, UrbanPulse'
  },
  {
    quote: '« Tournage fluide, montage élégant. On sent le souci du détail à chaque étape. »',
    author: 'Sarah L. – Fondatrice, Maison Serene'
  }
];

function About() {
  return (
    <div className="section">
      <header>
        <h1>À propos</h1>
        <p>
          Studio VBG est le studio vidéo fondé par Valentin B. à Lyon. Nous accompagnons les marques,
          collectivités, associations et particuliers qui veulent des contenus lisibles, émotionnels et
          performants.
        </p>
      </header>

      <section aria-labelledby="bio">
        <h2 id="bio">Bio &amp; ADN</h2>
        <p>
          Après 10 ans à produire des formats pour des marques tech et culture, Valentin a lancé Studio
          VBG pour offrir une approche sur-mesure : stratégie, direction artistique et production
          réunies dans un même interlocuteur.
        </p>
        <p>
          Nous travaillons en collectif agile : réalisateurs, cadreurs, motion designers, ingénieurs du
          son et spécialistes IA pour répondre à toutes les configurations.
        </p>
      </section>

      <section aria-labelledby="processus">
        <h2 id="processus">Notre processus</h2>
        <p>🔍 Brief → 📝 Pré-production → 🎥 Tournage → 🎬 Post-production &amp; Livraison.</p>
        <p>
          Ce fil conducteur garantit que chaque tournage et chaque montage restent alignés sur vos
          objectifs business ou narratifs.
        </p>
      </section>

      <section aria-labelledby="temoignages">
        <h2 id="temoignages">Témoignages complets</h2>
        <div className="testimonials">
          {testimonials.map((item) => (
            <blockquote key={item.author}>
              <p>{item.quote}</p>
              <cite>{item.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Contact &amp; devis</h2>
        <p>
          Besoin d'un accompagnement ? Partagez votre brief, nous revenons vers vous sous 24h ouvrées
          avec une proposition de cadrage.
        </p>
        <Link className="button" to="/contact">
          Nous écrire
        </Link>
      </section>

      <section aria-labelledby="liens">
        <h2 id="liens">Aller plus loin</h2>
        <ul>
          <li>
            <Link to="/services">Découvrir nos services détaillés</Link>
          </li>
          <li>
            <Link to="/portfolio">Voir les dernières réalisations</Link>
          </li>
          <li>
            <Link to="/blog">Lire nos conseils et études de cas</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
