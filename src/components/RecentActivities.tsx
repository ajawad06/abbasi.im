import './RecentActivities.css';

// Image file extension for the activity photos in /public/activities.
const EXT = 'png';

const activities = [
  {
    title: 'Millennium Incubation Center',
    text: 'Abbasi.im inaugurating The Millennium Incubation Center, Islamabad, where he also gave a talk to students mentioning the importance of passion, entrepreneurship and how entrepreneurship can help them create wealth and jobs.',
  },
  {
    title: 'Mentoring Deaf Tawk',
    text: 'Being a firm believer of inclusivity in entrepreneurship, it has been a pleasure for abbasi.im to mentor “Deaf Tawk” through their one year journey to help them achieve considerable milestones.',
  },
  {
    title: 'IIUI – Entrepreneurship as a Career',
    text: '"Youth can and will change the destiny of this nation." says abbasi.im, who gave an inspiring talk on "Entrepreneurship as a Career Choice" at International Islamic University Islamabad.',
  },
  {
    title: 'TeamUp Youth Session',
    text: 'abbasi.im believes that children are an asset to the country. In an interactive session organized by TeamUp, abbasi.im taught the youngsters about being passionate and how to take necessary bold steps in life.',
  },
  {
    title: 'PTV – Breakfast At Home',
    text: "The right attitude determines a startup's success, says abbasi.im during PTV's morning show Breakfast At Home hosted by Touseeq Haider. For Details Click Here.",
  },
  {
    title: 'World Radio Day',
    text: '"Radio can connect people across different backgrounds, genders, diversities and different experiences," says abbasi.im on the occasion of World Radio Day.',
  },
  {
    title: 'Diamond Challenge Pakistan',
    text: 'abbasi.im was part of the judging panel at the Diamond Challenge Pakistan held at KNCT HUB. Children as young as 14-18 years of age were part of the competition.',
  },
  {
    title: 'CUST – Innovation Seminar',
    text: 'abbasi.im led a seminar on “Entrepreneurship and Innovation” at Capital University of Science & Technology, he stressed upon the need for future technologies and the role of entrepreneurship in shaping today’s youth.',
  },
  {
    title: 'TMUC – Digitalization & Entrepreneurship',
    text: 'TMUC Islamabad hosted an interactive session on "Connecting Digitalization and Entrepreneurship" having Entrepreneur, mentor abbasi.im. for more details Click here.',
  },
];

export default function RecentActivities() {
  return (
    <section className="activities section">
      <div className="container">
        <h2 className="section-title">Recent Activities</h2>
        <div className="activities__divider" />

        <div className="activities__slider">
          <div className="activities__track">
            {activities.map((a, i) => (
              <article className="activity-card" key={i}>
                <div className="activity-card__media">
                  <img
                    src={`/activities/activity-${i + 1}.${EXT}`}
                    alt={a.title}
                    loading="lazy"
                  />
                </div>
                <div className="activity-card__body">
                  <h3 className="activity-card__title">{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
