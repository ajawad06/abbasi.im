import { useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import './GalleryPage.css';

type Video = { id: string; thumb?: string };

// Photo files live in /public/gallery. Change EXT to 'jpg' if needed, and add
// or remove entries to match how many photos are dropped in the folder.
const EXT = 'png';
const images = [
  `/gallery/photo-1.${EXT}`,
  `/gallery/photo-2.${EXT}`,
  `/gallery/photo-3.${EXT}`,
  `/gallery/photo-4.${EXT}`,
  `/gallery/photo-5.${EXT}`,
];

// Each video: { id, thumb? }. `thumb` overrides the auto YouTube thumbnail
// (drop the image in /public/gallery). Otherwise the YouTube thumbnail is used.
const videos: Video[] = [
  { id: 'yE32duncHK4' },
  { id: 'I8lq1Ypwp4Q' },
  { id: 'ZRS8o21_PxE' },
  { id: 'dlbh4eGyiOc' },
  { id: '4dtrlfm5uoM' },
];

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline
        points={dir === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LiteYouTube({ id, thumb }: { id: string; thumb?: string }) {
  const [playing, setPlaying] = useState(false);
  if (playing) {
    return (
      <iframe
        className="gallery-media"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
        title="Featured video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }
  return (
    <button
      type="button"
      className="gallery-media gallery-thumb"
      onClick={() => setPlaying(true)}
      aria-label="Play video"
    >
      <img
        src={thumb || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt="Featured video"
        onError={(e) => {
          e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        }}
      />
      <span className="gallery-play">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.35)" stroke="#fff" strokeWidth="1.4" />
          <path d="M10 8l6 4-6 4z" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}

function usePager(count: number) {
  const [idx, setIdx] = useState(0);
  return {
    idx,
    setIdx,
    prev: () => setIdx((i) => (i - 1 + count) % count),
    next: () => setIdx((i) => (i + 1) % count),
  };
}

type SliderProps = {
  variant?: string;
  count: number;
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
  prev: () => void;
  next: () => void;
  children: ReactNode;
};

function Slider({ variant, count, idx, prev, next, setIdx, children }: SliderProps) {
  return (
    <div className={`slider ${variant ? `slider--${variant}` : ''}`}>
      <div className="slider__frame">
        <div className="slider__stage">{children}</div>
        <button className="slider__arrow slider__arrow--prev" onClick={prev} aria-label="Previous">
          <Chevron dir="left" />
        </button>
        <button className="slider__arrow slider__arrow--next" onClick={next} aria-label="Next">
          <Chevron dir="right" />
        </button>
      </div>
      <div className="slider__dots">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`slider__dot ${i === idx ? 'is-active' : ''}`}
            onClick={() => setIdx(i)}
            aria-label={`Go to ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const pics = usePager(images.length);
  const vids = usePager(videos.length);

  return (
    <div className="gallery">
      <section className="gallery-section">
        <div className="container">
          <h2 className="gallery-title">Featured Pictures</h2>
          <Slider variant="pics" count={images.length} {...pics}>
            {/* all photos mounted (stacked) so they preload once; only the
                active one is visible → instant, fading switches */}
            {images.map((src, i) => (
              <img
                key={src}
                className={`gallery-media gallery-slide${
                  i === pics.idx ? " is-active" : ""
                }`}
                src={src}
                alt={`Featured picture ${i + 1}`}
              />
            ))}
          </Slider>
        </div>
      </section>

      <section className="gallery-section gallery-section--alt">
        <div className="container">
          <h2 className="gallery-title">Featured Videos</h2>
          <Slider variant="videos" count={videos.length} {...vids}>
            {/* key forces a remount on slide change so a playing video stops */}
            <LiteYouTube
              key={vids.idx}
              id={videos[vids.idx].id}
              thumb={videos[vids.idx].thumb}
            />
          </Slider>
        </div>
      </section>
    </div>
  );
}
