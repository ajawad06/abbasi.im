import "./ExpertisePage.css";

const topics = [
  {
    num: "01",
    title: "Personal Development",
    lead: "Discover new ways to reach your true potential — find your inner self, adopt a positive mindset, break negative habits and build new, positive ones to change your life.",
    items: [
      {
        title: "Self-Improvement",
        text: "Continuous learning is the engine of success. Growth is a lifelong journey — become the best version of yourself through guidance and shared experience.",
      },
      {
        title: "Purpose & Passion",
        text: "Identify what truly drives you. Knowing your purpose is critical, and passion fuels the daily achievement that inspires others to do the same.",
      },
      {
        title: "Health & Wellness",
        text: "Real success needs physical well-being. Accomplished people protect their health and keep finding ways to improve and give more.",
      },
      {
        title: "Wealth Creation",
        text: "Learn the tactics and strategies to grow revenue and multiply your resources, drawing on principles used by established business leaders.",
      },
    ],
  },
  {
    num: "02",
    title: "Employee to Entrepreneur",
    lead: "Bored of your job? Entrepreneurship might be for you. It's a hard ride — but if you want to work on your passion and dreams, abbasi.im is your guide through the journey.",
    items: [
      {
        title: "Find Your Passion",
        text: "Turn what you genuinely love into the foundation of a business worth building.",
      },
      {
        title: "Take the Leap",
        text: "Practical guidance to move from the security of a salary to building a venture of your own.",
      },
      {
        title: "Survive the Early Days",
        text: "Support through the uncertain, demanding early stage where most new businesses struggle.",
      },
    ],
  },
  {
    num: "03",
    title: "Difficult Life Choices",
    lead: "Stuck? Is your mind cluttered? You're not the only one. Seek help from a friend, mentor and guide to find the right direction.",
    items: [
      {
        title: "Career Counseling",
        text: "Guidance on choosing the right career path while building the skills you need to advance.",
      },
      {
        title: "Retirement Plans",
        text: "Bridge the gap between knowing retirement planning matters and actually doing it — a real starting point for financial security.",
      },
    ],
  },
  {
    num: "04",
    title: "Connecting People",
    lead: "“Your network is your net worth.” Connecting you to the right people at the right time is exactly what you need to grow.",
    items: [
      {
        title: "Business",
        text: "Connections that open doors to growth and partnership.",
      },
      {
        title: "Multinationals",
        text: "Access to established companies and their networks.",
      },
      {
        title: "Startups",
        text: "Plug into the startup ecosystem and fellow founders.",
      },
      {
        title: "Investors",
        text: "Matchmaking with the right investors for your stage.",
      },
      {
        title: "Education",
        text: "Links to universities and educational institutions.",
      },
    ],
  },
];

const svg = (children) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const cardIcons = {
  'Self-Improvement': svg(
    <>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </>
  ),
  'Purpose & Passion': svg(
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  'Health & Wellness': svg(
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />
  ),
  'Wealth Creation': svg(
    <>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  'Find Your Passion': svg(<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />),
  'Take the Leap': svg(<polygon points="3 11 22 2 13 21 11 13 3 11" />),
  'Survive the Early Days': svg(
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  ),
  'Career Counseling': svg(
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </>
  ),
  'Retirement Plans': svg(<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />),
  Business: svg(
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  Multinationals: svg(
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  Startups: svg(
    <>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </>
  ),
  Investors: svg(
    <>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </>
  ),
  Education: svg(
    <>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </>
  ),
};

export default function ExpertisePage() {
  return (
    <div className="expertise">
      <section className="exp-hero">
        <div className="container">
          <h1 className="exp-hero__title">
            Areas of <span>Expertise</span>
          </h1>
          <p className="exp-hero__sub">
            A friend, mentor and guide — helping you find the best version of
            yourself across four key areas.
          </p>
          <div className="exp-hero__divider" />
        </div>
      </section>

      {topics.map((topic, i) => (
        <section
          className={`exp-topic ${i % 2 === 1 ? "exp-topic--alt" : ""}`}
          key={topic.num}
        >
          <div className="container">
            <div className="exp-topic__head">
              <span className="exp-topic__num">{topic.num}</span>
              <div>
                <h2 className="exp-topic__title">{topic.title}</h2>
                <p className="exp-topic__lead">{topic.lead}</p>
              </div>
            </div>

            <div className="exp-grid">
              {topic.items.map((it) => (
                <article className="exp-card" key={it.title}>
                  <div className="exp-card__head">
                    <span className="exp-card__icon">{cardIcons[it.title]}</span>
                    <h3>{it.title}</h3>
                  </div>
                  <p>{it.text}</p>
                  <span className="exp-card__glow" />
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="exp-cta">
        <div className="container">
          <div className="exp-cta__card">
            <span className="exp-cta__blob exp-cta__blob--1" />
            <span className="exp-cta__blob exp-cta__blob--2" />
            <div className="exp-cta__content">
              <h2>Ready to take the next step?</h2>
              <p>
                Book a free discovery call and let&rsquo;s find your direction
                together.
              </p>
              <a
                href="https://calendly.com/parvez120665/30min?month=2026-06"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                Book a Free Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
