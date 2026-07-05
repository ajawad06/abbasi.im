import './Hero.css';

const CALENDLY = 'https://calendly.com/parvez120665/30min?month=2026-06';

export default function Hero() {
  return (
    <section className="hero">
      {/* Full hero image (the "HELPING YOU / HELPING YOURSELF" text is part of it). */}
      <img
        className="hero__img"
        src="/hero.png"
        alt="Parvez Abbasi speaking to an audience — Helping You, Helping Yourself"
      />
      {/* Real button placed exactly over the baked-in one → opens Calendly. */}
      <a
        className="hero__book"
        href={CALENDLY}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a Free Discovery Call
      </a>
    </section>
  );
}
