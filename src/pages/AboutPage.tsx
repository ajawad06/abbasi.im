import type { ReactNode } from 'react';
import './AboutPage.css';

const stats = [
  { value: '25+', label: 'Years of experience' },
  { value: '$1B', label: 'Mobile Zone revenue' },
  { value: '13', label: 'Age of first venture' },
  { value: 'NIC', label: 'Director, Islamabad' },
];

const companies = [
  'BT', 'Nokia', 'Motorola', 'Orascom', 'Telenor',
  'Etisalat', 'Millicom', 'C&W', 'Samsung',
];

const icon = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero — intro + portrait */}
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__text">
            <span className="about-hero__eyebrow">About</span>
            <h1 className="about-hero__title">
              A Friend, Mentor and Coach <br />
              <span>Helping you Help Yourself</span>
            </h1>
            <p className="about-hero__lead">
              With the spirit to give back to Pakistan, Parvez Abbasi&rsquo;s aim
              is to promote entrepreneurship and life skills among the youth
              &ndash; everything from choosing a career, the right motivation and
              acquiring the required skills, to excelling at a job, starting and
              building a business and personal growth. It doesn&rsquo;t end here
              &ndash; given Parvez&rsquo;s unique experience of working in top
              management, he also conducts trainings for managers to help them
              with overcoming the hurdles that stand in the way of their personal
              and professional growth. Helping people make the transition from
              employee to entrepreneur is another area of great interest to
              Parvez.
            </p>
          </div>

          <div className="about-hero__media">
            <img
              className="about-hero__photo"
              src="/about/portrait.png"
              alt="Parvez Abbasi sitting in front of a 'If you can dream it, you can do it' Walt Disney quote"
            />
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="about-stats">
        <div className="container about-stats__grid">
          {stats.map((s) => (
            <div className="about-stat" key={s.label}>
              <span className="about-stat__value">{s.value}</span>
              <span className="about-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Story cards */}
      <section className="about-story">
        <div className="container about-story__grid">
          <article className="story-card">
            <span className="story-card__icon">
              {icon(<><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" /></>)}
            </span>
            <h2 className="story-card__title">A Lifelong Entrepreneur</h2>
            <p>
              Parvez has a long history of being an entrepreneur &ndash; starting
              from his first venture based out of his school tuck shop at the age
              of 13. This is where his love for entrepreneurship originated and he
              hasn&rsquo;t looked back since. His most successful entrepreneurial
              venture to date is &lsquo;Mobile Zone Company&rsquo;, which he
              co-founded &ndash; a company worth a billion dollars in revenue.
            </p>
          </article>

          <article className="story-card">
            <span className="story-card__icon">
              {icon(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>)}
            </span>
            <h2 className="story-card__title">Mentor &amp; Builder Today</h2>
            <p>
              Parvez is the co-founder of Teamup &ndash; currently managing the
              National Incubation Centre Islamabad in partnership with Jazz and
              the Ministry of Information and Technology, Pakistan. In his role of
              Director, he gets to do what he does best &ndash; mentoring
              entrepreneurs, especially youth to achieve their full potential to
              succeed personally and in business. He has also founded the Mobile
              Advantage Company and co-founded Teamup Advisory &ndash; the latter
              assists companies with making a transition from traditional to
              digital &ndash; starting with training and coaching senior
              management.
            </p>
          </article>
        </div>
      </section>

      {/* Global experience + company chips */}
      <section className="about-exp">
        <div className="container about-exp__grid">
          <div className="about-exp__copy">
            <span className="about-exp__eyebrow">Global Experience</span>
            <h2 className="about-exp__title">
              25 Years Across Three Continents
            </h2>
            <p>
              Behind all of this expertise is over 25 years of practical, high
              caliber, diversified experience stretching across Europe, the
              Middle East and Asia &ndash; from startup and greenfield to
              established market leaders. His extensive experience includes
              working with tier one companies such as:
            </p>
          </div>
          <div className="about-exp__chips">
            {companies.map((c) => (
              <span className="about-chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing pull-quote */}
      <section className="about-quote">
        <div className="container">
          <span className="about-quote__mark">&ldquo;</span>
          <p className="about-quote__text">
            In the numerous roles he plays in various companies, he is passionate
            about bringing out the best in people by showing them a new side of
            thinking.
          </p>
          <span className="about-quote__name">Parvez Abbasi</span>
        </div>
      </section>
    </div>
  );
}
