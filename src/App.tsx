import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import PodcastsPage from './pages/PodcastsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import ArticleBootstrapping from './pages/ArticleBootstrapping';
import ArticleNetworking from './pages/ArticleNetworking';
import ArticlePurpose from './pages/ArticlePurpose';
import ArticlePotential from './pages/ArticlePotential';
import ArticleMustHaves from './pages/ArticleMustHaves';
import ArticleNIC from './pages/ArticleNIC';
import NotFound from './pages/NotFound';
import { usePageMeta } from './pageMeta';

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
