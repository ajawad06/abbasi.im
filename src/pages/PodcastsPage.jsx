import { useState } from 'react';
import './PodcastsPage.css';

const CHANNEL_URL = 'https://www.youtube.com/@abbasiim';

const videos = [
  { id: 'xs_M5G1r9FQ', title: 'Breaking Down Business Growth' },
  { id: 'RZZbaZ0oZyo', title: 'Revolutionizing the Startup Game at NIC' },
  { id: 'EPNNWT03nI8', title: 'Mr. Parvez Abbasi — Project Director, NIC' },
  { id: 'J-QpkBYoJOw', title: 'Project Director NIC — Podcast' },
  { id: 'uOjMu49MGKY', title: 'Pride of Pakistan — Parvez Abbasi' },
  { id: 'jpk5hjBPw5M', title: 'In Conversation with Parvez Abbasi' },
  { id: 'oe6qdXGdyiY', title: 'Rise & Fall of Startups in Pakistan' },
];

function LiteYouTube({ id, title }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="pod-card__media">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="pod-card__media pod-card__thumb"
      onClick={() => setPlaying(true)}
      aria-label={`Play: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        }}
      />
      <span className="pod-card__play">
        <svg viewBox="0 0 68 48" aria-hidden="true">
          <path
            className="pod-card__play-bg"
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
          />
          <path d="M45 24 27 14v20z" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}

export default function PodcastsPage() {
  return (
    <div className="podcasts">
      <section className="pod-hero">
        <div className="container">
          <h1 className="pod-hero__title">Podcasts</h1>
          <p className="pod-hero__sub">
            Conversations on entrepreneurship, leadership and building the future —
            featuring Parvez Abbasi.
          </p>
          <div className="pod-hero__divider" />
        </div>
      </section>

      <section className="pod-grid-section">
        <div className="container">
          <div className="pod-grid">
            {videos.map((v) => (
              <article className="pod-card" key={v.id}>
                <LiteYouTube id={v.id} title={v.title} />
              </article>
            ))}
          </div>

          <div className="pod-subscribe">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-orange"
            >
              Subscribe to My Youtube Channel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
