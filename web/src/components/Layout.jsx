import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
];

const legalLinks = [
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
  { to: '/politique-cookies', label: 'Politique cookies & RGPD' }
];

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <div className="header-inner">
          <Link to="/" className="logo" aria-label="Studio VBG">
            <strong>Studio VBG</strong>
          </Link>
          <nav className="nav-links" aria-label="Navigation principale">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {({ isActive }) => (
                  <span style={{ color: isActive ? '#0ea5e9' : undefined }}>{item.label}</span>
                )}
              </NavLink>
            ))}
            <Link to="/connexion" className="nav-cta">
              Connexion
            </Link>
          </nav>
        </div>
      </header>
      <main className="content">{children}</main>
      <footer>
        <div className="section" style={{ margin: '0 auto' }}>
          <p>
            © {new Date().getFullYear()} Studio VBG – Réalisateur vidéo freelance à Lyon.
            Tous droits réservés.
          </p>
          <p>
            <strong>Nous suivre :</strong> <a href="mailto:contact@studiovbg.com">contact@studiovbg.com</a>
          </p>
          <p style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {legalLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
