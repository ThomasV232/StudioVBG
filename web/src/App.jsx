import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import ClientPortal from './pages/ClientPortal.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Cookies from './pages/Cookies.jsx';
import VideoEntreprise from './pages/services/VideoEntreprise.jsx';
import VideosEvenementielles from './pages/services/VideosEvenementielles.jsx';
import VideoImmobiliere from './pages/services/VideoImmobiliere.jsx';
import FilmMariage from './pages/services/FilmMariage.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/video-entreprise" element={<VideoEntreprise />} />
        <Route path="/services/videos-evenementielles" element={<VideosEvenementielles />} />
        <Route path="/services/video-immobiliere" element={<VideoImmobiliere />} />
        <Route path="/services/film-mariage" element={<FilmMariage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/espace-client" element={<ClientPortal />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="/politique-cookies" element={<Cookies />} />
      </Routes>
    </Layout>
  );
}

export default App;
