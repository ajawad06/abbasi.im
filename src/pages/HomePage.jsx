import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import RecentActivities from '../components/RecentActivities.jsx';
import LatestNews from '../components/LatestNews.jsx';
import Testimonials from '../components/Testimonials.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Services />
        <RecentActivities />
        <LatestNews />
        <Testimonials />
      </main>
    </>
  );
}
