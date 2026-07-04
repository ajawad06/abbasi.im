import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import "./LatestNews.css";

// Article thumbnail extension for files in /public/articles.
const EXT = "png";

const commentLabel = (n: number) =>
  !n ? "No Comments" : `${n} Comment${n > 1 ? "s" : ""}`;

const posts = [
  {
    title: "Why Bootstrapping Beats Funding",
    date: "March 9, 2025",
    href: "/blog/why-bootstrapping-beats-funding",
  },
  {
    title: "Unlocking Success: The Art of Building a Powerful Network",
    date: "April 2, 2024",
    href: "/blog/unlocking-success-the-art-of-building-a-powerful-network",
  },
  {
    title:
      "Unveiling Your Purpose: A Journey to Self-Improvement and Passion Discovery",
    date: "April 2, 2024",
    href: "/blog/unveiling-your-purpose-a-journey-to-self-improvement-and-passion-discovery",
  },
  {
    title:
      "Unleash Your Potential: Discover Purpose and Passion to Become Your Best Self",
    date: "March 28, 2024",
    href: "/blog/unleash-your-potential-discover-purpose-and-passion-to-become-your-best-self",
  },
  {
    title: "5 Must-Haves for a Good Entrepreneur",
    date: "March 28, 2024",
    href: "/blog/5-must-haves-for-a-good-entrepreneur",
  },
  {
    title:
      "Pervez Abbasi Founder & Project Director, National Incubation Center",
    date: "March 18, 2024",
    href: "/blog/pervez-abbasi-founder-project-director-national-incubation-center",
  },
];

export default function LatestNews({ showMore = true }: { showMore?: boolean }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!supabase) return;
    let active = true;
    supabase
      .from("public_comments")
      .select("article_slug")
      .then(({ data }) => {
        if (!active || !data) return;
        const tally: Record<string, number> = {};
        data.forEach((r: { article_slug: string }) => {
          tally[r.article_slug] = (tally[r.article_slug] || 0) + 1;
        });
        setCounts(tally);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="news section">
      <div className="container">
        <h2 className="section-title">Latest News &amp; Articles</h2>
        <div className="news__divider" />

        <div className="news__grid">
          {posts.map((p, i) => {
            const img = (
              <img
                src={`/articles/article-${i + 1}.${EXT}`}
                alt={p.title}
                loading="lazy"
              />
            );
            return (
              <article className="news-card" key={i}>
                <div className="news-card__media">
                  {p.href ? <Link to={p.href}>{img}</Link> : img}
                </div>
                <div className="news-card__body">
                  <h3 className="news-card__title">
                    {p.href ? <Link to={p.href}>{p.title}</Link> : p.title}
                  </h3>
                  <div className="news-card__meta">
                    <span>{p.date}</span>
                    <span className="dot">•</span>
                    <span>{commentLabel(p.href ? counts[p.href] : 0)}</span>
                  </div>
                  {p.href ? (
                    <Link to={p.href} className="news-card__link">
                      Read More &raquo;
                    </Link>
                  ) : (
                    <a href="#" className="news-card__link">
                      Read More &raquo;
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {showMore && (
          <div className="news__more">
            <a href="/blog" className="btn btn-orange">
              More
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
