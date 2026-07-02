import "./About.css";

export default function About() {
  return (
    <section className="about section">
      <div className="container about__grid">
        <div className="about__text">
          <h2 className="about__title">
            ABOUT <span>PARVEZ ABBASI</span>
          </h2>
          <p>
            With the spirit to give back to Pakistan, abbasi&rsquo;s aim is to
            promote entrepreneurship and life skills among the youth &ndash;
            everything from choosing a career, the right motivation and
            acquiring the required skills, to excelling at a job, starting and
            building a business and personal growth.
          </p>
          <p>
            It doesn&rsquo;t end here &ndash; given abbasi&rsquo;s unique
            experience of working in top management, he also conducts trainings
            for managers to help them with overcoming the hurdles that stand in
            the way of their personal and professional growth. Helping people
            make the transition from employee to entrepreneur is another area of
            great interest to abbasi.im.
          </p>
          <a href="/about" className="btn btn-orange">
            Read More
          </a>
        </div>

        <div className="about__media">
          <img
            className="about__photo"
            src="/about/portrait.png"
            alt="Parvez Abbasi sitting in front of a 'If you can dream it, you can do it' Walt Disney quote"
          />
        </div>
      </div>
    </section>
  );
}
