import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="page espace-client">
      <section className="section nebula container" aria-labelledby="connexion">
        <header>
          <h1 id="connexion">Connexion Solstice</h1>
          <p>Accédez à l’espace client Nebula pour suivre vos projets, valider les livrables et télécharger vos exports.</p>
        </header>
        <form className="nebula-form" aria-describedby="helper">
          <label htmlFor="login-email">Email professionnel</label>
          <input id="login-email" type="email" placeholder="prenom@entreprise.com" required />
          <label htmlFor="login-password">Mot de passe</label>
          <input id="login-password" type="password" placeholder="••••••••" required />
          <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
            Se connecter
          </button>
          <p id="helper" className="microcopy">
            Mot de passe oublié ? <Link to="/contact">Contactez votre interlocuteur</Link> pour réinitialiser votre accès.
          </p>
        </form>
        <p className="microcopy">
          Nouvel utilisateur ? Vous recevez votre invitation dès la signature du devis et la validation RGPD.
        </p>
      </section>
    </div>
  );
}

export default Login;
