import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ExpertisePage from './pages/ExpertisePage.jsx';
import PodcastsPage from './pages/PodcastsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ArticleBootstrapping from './pages/ArticleBootstrapping.jsx';
import ArticleNetworking from './pages/ArticleNetworking.jsx';
import ArticlePurpose from './pages/ArticlePurpose.jsx';
import ArticlePotential from './pages/ArticlePotential.jsx';
import ArticleMustHaves from './pages/ArticleMustHaves.jsx';
import ArticleNIC from './pages/ArticleNIC.jsx';
import NotFound from './pages/NotFound.jsx';
import { usePageMeta } from './pageMeta.js';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  usePageMeta();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="/blog/why-bootstrapping-beats-funding"
          element={<ArticleBootstrapping />}
        />
        <Route
          path="/blog/unlocking-success-the-art-of-building-a-powerful-network"
          element={<ArticleNetworking />}
        />
        <Route
          path="/blog/unveiling-your-purpose-a-journey-to-self-improvement-and-passion-discovery"
          element={<ArticlePurpose />}
        />
        <Route
          path="/blog/unleash-your-potential-discover-purpose-and-passion-to-become-your-best-self"
          element={<ArticlePotential />}
        />
        <Route
          path="/blog/5-must-haves-for-a-good-entrepreneur"
          element={<ArticleMustHaves />}
        />
        <Route
          path="/blog/pervez-abbasi-founder-project-director-national-incubation-center"
          element={<ArticleNIC />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
