import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Projets',
    description: 'Suivez chaque étape du brief à la livraison avec timeline pondérée et jalons assignés.',
    features: ['Timeline en 4 étapes', 'Checklist partagée', 'Commentaires horodatés'],
  },
  {
    title: 'Livrables & fichiers',
    description: 'Exports 4K, versions sociales et rushes sécurisés, avec historique de validation.',
    features: ['Téléchargements 4K', 'Versions verticales & carrées', 'Historique des mises à jour'],
  },
  {
    title: 'Factures & devis',
    description: 'Centralisez vos documents financiers, exportez vos preuves de paiement.',
    features: ['Paiement en ligne', 'Export PDF', 'Suivi des échéances'],
  },
  {
    title: 'Paramètres',
    description: 'Gérez les accès utilisateurs, notifications et préférences de diffusion.',
    features: ['Gestion des rôles', 'Alertes email', 'Préférences de sous-titrage'],
  },
];

function ClientPortal() {
  return (
    <div className="page espace-client">
      <section className="section nebula container" aria-labelledby="espace-client">
        <header>
          <h1 id="espace-client">Espace client Nebula</h1>
          <p>Tableau de bord temps réel : messages, progression, livrables et validations centralisés.</p>
        </header>
        <div className="cards-grid">
          {sections.map((section) => (
            <article key={section.title} className="card">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <ul>
                {section.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <section aria-labelledby="acces" style={{ marginTop: '3rem' }}>
          <h2 id="acces">Demander un accès</h2>
          <p>
            Votre interlocuteur active votre compte après signature. Besoin d’une démo ?{' '}
            <Link to="/contact">Contactez-nous</Link> pour planifier une session live.
          </p>
        </section>
      </section>
    </div>
  );
}

export default ClientPortal;
