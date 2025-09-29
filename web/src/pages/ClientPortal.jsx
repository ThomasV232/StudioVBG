import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Projets',
    description:
      'Suivez chaque étape du brief à la livraison : scripts, plans de tournage, validations montage.',
    features: ['Timeline en 4 étapes', 'Checklist partagée', 'Commentaires horodatés']
  },
  {
    title: 'Livrables & fichiers',
    description:
      'Accédez aux exports HD, versions sociales et archives de tournage via transfert sécurisé.',
    features: ['Téléchargements 4K', 'Versions verticales & carrées', 'Historique des mises à jour']
  },
  {
    title: 'Factures & devis',
    description:
      'Consultez vos devis signés, factures et preuves de paiement en un clin d’œil.',
    features: ['Paiement en ligne', 'Export PDF', 'Suivi des échéances']
  },
  {
    title: 'Paramètres',
    description:
      'Gérez les accès utilisateurs, notifications et préférences de diffusion.',
    features: ['Gestion des rôles', 'Alertes email', 'Préférences de sous-titrage']
  }
];

function ClientPortal() {
  return (
    <div className="section">
      <header>
        <h1>Espace client Solstice</h1>
        <p>
          Centralisez vos projets vidéo dans un tableau de bord sécurisé. Chaque mission est organisée
          selon le parcours Brief → Pré-production → Tournage → Post-production &amp; Livraison.
        </p>
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
          Votre contact dédié vous active un compte dès la signature du devis. Besoin d’une démo ?
          <Link to="/contact">Écrivez-nous</Link> pour planifier une session.
        </p>
      </section>
    </div>
  );
}

export default ClientPortal;
