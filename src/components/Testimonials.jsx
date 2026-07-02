import './Testimonials.css';

const testimonials = [
  {
    quote:
      '"If the startup ecosystem had a nucleus, it would be abbasi.im. abbasi sb is a great mentor, enabler and connector who truly lives the ‘teamup’ ethos by connecting people, fostering connections and partnerships and bringing people together for purpose and business. I have received immense value and feel fortunate to be a part of his network and to have him as part of mine"',
    name: 'Saad Hamid',
    role: 'HR Manager, WeServe LLC.',
    avatar: '/testimonials/avatar-1.png',
    rating: 4,
  },
  {
    quote:
      '"Embracing ideas is the statement that comes to mind when I think about abbasi. I met with him to discuss an idea and from there on it has been a journey of encouragement, support and enthusiasm. He has been a mentor for me to support my startup and has done so by letting me experiment, make mistakes, correct them and then come back with a bigger bang. I hope he carries on being the beacon of light and guidance that he is for all youngsters like myself." Noorulain Zafer, CEO & Founder, Mind Works International"',
    name: 'Noor-ul-Ain Zafar',
    role: 'Fitness Instructor',
    avatar: '/testimonials/avatar-2.png',
    rating: 5,
  },
  {
    quote:
      '"Abbasi was the first one to believe in Hult Prize Pakistan. NIC hosted first ever National Event of Hult Prize in Jan 2017 even before the formal inaugural of NIC. If you want to make it big, if you want to dislodge the status quo, you need to work with abbasi.im. abbasi.im has been my inspiration and what I have learnt from him is that “Collaboration is the new Competition”. I am honored to have the opportunity of working with technology stalwart of his stature."',
    name: 'Imran Jattala',
    role: 'Nutrition Expert, Food Villa',
    avatar: '/testimonials/avatar-3.png',
    rating: 3,
  },
  {
    quote:
      '"Abbasi believes in giving people the opportunity to shine. This is one the rarest qualities and he shows this through action. He has an eye to identify talent and is willing to give time and effort with his mentees to show them the much needed direction. With his years of experience in both corporate and business world, a one-on-one session with him helps you answer questions about existing business problems as well as he gives you a broader future perspective. He has taught me to be patient in business and things will turn around if consistent effort is placed."',
    name: 'Madiha Hamid',
    role: 'Software Developer',
    avatar: '/testimonials/avatar-4.png',
    rating: 5,
  },
];

function Stars({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? 'star star--filled' : 'star'}>
          {n <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <p className="testimonials__eyebrow">Testimonials</p>
        <h2 className="section-title testimonials__title">
          What People Say About <span className="accent">Parvez Abbasi</span>
        </h2>
        <div className="testimonials__divider" />

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <blockquote>{t.quote}</blockquote>
              <figcaption className="testimonial-card__foot">
                <div className="testimonial-card__person">
                  <img
                    className="testimonial-card__avatar"
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                  />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
                <Stars rating={t.rating} />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
