import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import RecentActivities from '../components/RecentActivities';
import LatestNews from '../components/LatestNews';
import Testimonials from '../components/Testimonials';

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
