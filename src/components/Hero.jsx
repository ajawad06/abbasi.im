import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <h2 className="hero__title">
          <span className="hero__title--bold">HELPING YOU</span>
          <span className="hero__title--light">HELPING YOURSELF</span>
        </h2>
        <a
          href="https://calendly.com/parvez120665/30min?month=2026-06"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-orange hero__cta"
        >
          Book a Free Discovery Call
        </a>
      </div>
    </section>
  );
}
