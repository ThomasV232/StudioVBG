import { Link, NavLink } from 'react-router-dom';
import { navigationLinks, solsticePalette } from '../data/content';

function Layout({ children }) {
  return (
    <div className="layout" style={{ backgroundColor: solsticePalette.background }}>
      <header className="topbar" style={{ backgroundColor: solsticePalette.surface }}>
        <div className="container topbar__inner">
          <Link to="/" className="logo" aria-label="Studio VBG, retour à l’accueil">
            <span className="logo__mark" aria-hidden="true">◎</span>
            <span className="logo__text">STUDIO VBG</span>
          </Link>
          <nav className="main-nav" aria-label="Navigation principale">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="topbar__cta">
            <Link to="/connexion" className="btn btn--ghost" aria-label="Accéder à l’espace client">
              Connexion
            </Link>
            <Link to="/contact" className="btn btn--primary">
              Demander un devis
            </Link>
          </div>
        </div>
      </header>
      <main className="content" id="contenu-principal">
        {children}
      </main>
      <footer className="footer" style={{ backgroundColor: solsticePalette.surface }}>
        <div className="container footer__grid">
          <div>
            <h2 className="footer__title">STUDIO VBG</h2>
            <p>Agence de production vidéo premium — [[Ville / Zones]]</p>
            <p>
              Contact : <a href="mailto:[[Email pro]]">[[Email pro]]</a> · <a href="tel:[[Téléphone]]">[[Téléphone]]</a>
            </p>
            <p>
              Suivez-nous : [[Liens IG/YouTube/Vimeo/LinkedIn]]
            </p>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul>
              {navigationLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/connexion">Connexion</Link>
              </li>
              <li>
                <Link to="/espace-client">Espace client</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Juridique</h3>
            <ul>
              <li>
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
              </li>
              <li>
                <Link to="/politique-cookies">Politique cookies & RGPD</Link>
              </li>
            </ul>
            <p className="footer__note">© {new Date().getFullYear()} STUDIO VBG — Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
