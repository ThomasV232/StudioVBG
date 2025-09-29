import { legalPages } from '../data/content.js';

function PrivacyPolicy() {
  const content = legalPages.privacy;
  return (
    <div className="page legal">
      <header className="page__header container">
        <h1>{content.title}</h1>
        <p>Comprenez comment STUDIO VBG traite vos données personnelles.</p>
      </header>
      <section className="section container">
        {content.sections.map((section) => (
          <article key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default PrivacyPolicy;
