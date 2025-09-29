import { faqBudgetArticles } from '../data/content.js';

const categories = ['Budget & Devis', 'Tournage', 'Réseaux sociaux', 'Études de cas', 'Légal / RGPD'];

function Blog() {
  return (
    <div className="page blog">
      <header className="page__header container">
        <h1>Blog & FAQ budgets</h1>
        <p>
          Conseils concrets pour anticiper vos budgets vidéo : droits musicaux, révisions, délais, livrables. Les autres
          catégories complètent l’écosystème contenu.
        </p>
      </header>

      <section className="section container" aria-labelledby="categories">
        <h2 id="categories">Catégories</h2>
        <ul className="chip-list">
          {categories.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
      </section>

      <section className="section section--muted" aria-labelledby="faqs">
        <div className="container">
          <div className="section__header">
            <h2 id="faqs">FAQ budgétaire</h2>
            <p>4 articles pour répondre à vos questions financières les plus fréquentes.</p>
          </div>
          <div className="grid grid--blog">
            {faqBudgetArticles.map((article) => (
              <article key={article.slug} className="card card--blog" id={article.slug}>
                <header>
                  <h3>{article.title}</h3>
                  <p className="meta">Catégorie : {article.category}</p>
                </header>
                <p>{article.summary}</p>
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h4>{section.heading}</h4>
                    <p>{section.content}</p>
                  </section>
                ))}
                <div className="faq-list">
                  {article.faq.map((item) => (
                    <details key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
                <p className="microcopy">
                  Besoin d’aller plus loin ? Contactez-nous via /contact pour un plan d’action personnalisé.
                </p>
                <script type="application/ld+json">
                  {JSON.stringify(
                    {
                      '@context': 'https://schema.org',
                      '@type': 'FAQPage',
                      mainEntity: article.faq.map((item) => ({
                        '@type': 'Question',
                        name: item.question,
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text: item.answer,
                        },
                      })),
                    },
                    null,
                    2
                  )}
                </script>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
