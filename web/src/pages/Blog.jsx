import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Budget & Devis',
    description: 'Éclairages pour construire vos estimations et comprendre nos offres.',
    link: '#faq-budget'
  },
  {
    title: 'Tournage',
    description: 'Conseils pratiques pour préparer votre plateau, vos intervenants et la logistique.'
  },
  {
    title: 'Réseaux sociaux',
    description: 'Bonnes pratiques pour adapter vos vidéos aux plateformes et formats verticaux.'
  },
  {
    title: 'Études de cas',
    description: 'Décryptages des choix créatifs qui ont fait la différence pour nos clients.'
  },
  {
    title: 'Légal / RGPD',
    description: 'Checklist droits musicaux, autorisations de tournage et conformité données.'
  }
];

const faqBudget = [
  {
    question: 'Quels éléments influencent le budget d\'un tournage ? ',
    answer:
      'Le volume de préparation, la durée de tournage, la taille de l\'équipe et les options (drone, diffusion live, motion design) structurent l\'enveloppe. Nous ajustons chaque devis à ces facteurs.'
  },
  {
    question: 'Comment sont gérés les droits musicaux ?',
    answer:
      'Nous proposons des musiques sous licence adaptée à vos usages (web, social, TV). Les droits sont détaillés dans le devis afin d\'éviter toute surprise.'
  },
  {
    question: 'Combien de cycles de retours sont inclus ?',
    answer:
      'Deux allers-retours sont inclus pour chaque projet. Nous planifions les jalons de validation dès le brief pour fluidifier les échanges.'
  },
  {
    question: 'Quels sont les délais de livraison standards ?',
    answer:
      'Selon la complexité, comptez 7 à 14 jours ouvrés après tournage. Les urgences sont possibles avec ajustement du planning et du budget.'
  }
];

function Blog() {
  return (
    <div className="section">
      <header>
        <h1>Conseils vidéo</h1>
        <p>
          Retrouvez les guides Studio VBG pour préparer votre tournage, optimiser vos budgets et
          exploiter vos vidéos sur le long terme.
        </p>
      </header>

      <section aria-labelledby="categories">
        <h2 id="categories">Catégories</h2>
        <div className="cards-grid">
          {categories.map((category) => (
            <article key={category.title} className="card">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              {category.link ? <a href={category.link}>Aller à la FAQ budget</a> : null}
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="processus">
        <h2 id="processus">Notre boussole projet</h2>
        <p>
          Pour chaque mission : Brief → Pré-production → Tournage → Post-production &amp; Livraison. Cette
          séquence structure nos checklists éditoriales et techniques.
        </p>
      </section>

      <section aria-labelledby="faq-budget" id="faq-budget">
        <h2>FAQ budgétaire</h2>
        <div className="testimonials">
          {faqBudget.map((item) => (
            <article key={item.question} className="card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="ressources">
        <h2 id="ressources">Ressources utiles</h2>
        <ul>
          <li>
            <Link to="/services">Consulter nos packs et process détaillés</Link>
          </li>
          <li>
            <Link to="/portfolio">Explorer des cas concrets</Link>
          </li>
          <li>
            <Link to="/contact">Planifier un échange</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Blog;
