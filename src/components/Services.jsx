import "./Services.css";

const services = [
  {
    title: ["Personal", "Development"],
    text: "Discover new ways to reach your true potential by finding your inner self, adopting a positive mindset, getting rid of negative habits and building new, positive ones and to change your life.",
    img: "/services-icons/personal-development.png",
    boundary: 0.547,
  },
  {
    title: ["Employee to", "Entrepreneur"],
    text: "Are you bored of your job? Then Entrepreneurship is for you. The journey of entrepreneurship is a hard ride to take. If you want to work on your passion and dreams, abbasi.im is your guide.",
    img: "/services-icons/employee-to-entrepreneur.png",
    boundary: 0.56,
  },
  {
    title: ["Difficult Life", "Choices"],
    text: "Are you stuck? Is your mind cluttered? You’re not the only one! Seek help from friend, mentor and guide abbasi.im and to find the right direction.",
    img: "/services-icons/difficult-life-choices.png",
    boundary: 0.554,
  },
  {
    title: ["Connecting", "People"],
    text: "“Your network is your net worth” - a saying that holds true no matter what field of work you’re in. Connecting you to the right people at the right time is what you need to grow",
    img: "/services-icons/connecting-people.png",
    boundary: 0.571,
  },
];

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h1 className="section-title services__title">
          A Friend For All Who <span className="accent">Need Help</span>
        </h1>
        <p className="services__subtitle">
          Parvez Abbasi, as an experienced professional, helps you find the best
          version of yourself.
        </p>

        <div className="services__grid">
          {services.map((s) => (
            <article className="service-card" key={s.title.join(" ")}>
              {/* The icon image already contains the white/navy split, so it
                  blends seamlessly: white area sits over the white section,
                  navy area sits over the navy card. */}
              <div
                className="service-card__art"
                style={{ "--boundary": s.boundary }}
              >
                <img src={s.img} alt={`${s.title.join(" ")} icon`} />
              </div>
              <h3 className="service-card__title">
                {s.title[0]}
                <br />
                {s.title[1]}
              </h3>
              <p className="service-card__text">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
