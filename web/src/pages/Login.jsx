import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="section">
      <header>
        <h1>Connexion client</h1>
        <p>
          Accédez à Solstice, notre espace sécurisé pour suivre vos projets, valider les livrables et
          récupérer vos fichiers finaux.
        </p>
      </header>

      <div className="card" style={{ maxWidth: '480px', margin: '0 auto', padding: '2rem' }}>
        <form>
          <label>
            Email professionnel
            <input type="email" name="email" required placeholder="prenom@entreprise.com" />
          </label>
          <label>
            Mot de passe
            <input type="password" name="password" required placeholder="••••••••" />
          </label>
          <button type="submit" className="button" style={{ width: '100%', textAlign: 'center' }}>
            Se connecter
          </button>
        </form>
        <p style={{ marginTop: '1rem' }}>
          Besoin d'aide ? <Link to="/contact">Contactez-nous</Link> pour réinitialiser votre accès.
        </p>
        <p>
          Nouvel utilisateur ? L'équipe vous envoie une invitation dès la signature du devis.
        </p>
      </div>

      <section aria-labelledby="acces-espace" style={{ marginTop: '3rem' }}>
        <h2 id="acces-espace">Découvrir l'espace client</h2>
        <p>
          Vous n'avez pas encore d'identifiants ? Explorez les fonctionnalités dans l'<Link to="/espace-client">espace client</Link>.
        </p>
      </section>
    </div>
  );
}

export default Login;
