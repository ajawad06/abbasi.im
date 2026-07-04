import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import ArticleImage from "./ArticleImage";
import { supabase } from "../supabase";
import "./ArticleShell.css";

const ABBASI_LINKEDIN = "https://www.linkedin.com/company/abbasi-im";

type CommentRow = {
  id: string | number;
  article_slug?: string;
  name: string;
  website?: string | null;
  body: string;
  created_at: string;
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const withProtocol = (url: string) =>
  /^https?:\/\//i.test(url) ? url : `https://${url}`;

function shareLinks(url: string) {
  const enc = encodeURIComponent(url);
  return [
    {
      name: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc}`,
      icon: (
        <svg viewBox="0 0 320 512" aria-hidden="true">
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${enc}`,
      icon: (
        <svg viewBox="0 0 448 512" aria-hidden="true">
          <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.2-157zM223.9 438.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.5-186.6 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.4-5-3.8-10.5-6.6z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}`,
      icon: (
        <svg viewBox="0 0 448 512" aria-hidden="true">
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          />
        </svg>
      ),
    },
  ];
}

function CommentForm({ slug }: { slug: string }) {
  const [comments, setComments] = useState<CommentRow[]>([]);
  const [c, setC] = useState({ body: "", name: "", email: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setC({ ...c, [e.target.name]: e.target.value });

  // Load existing comments for this article
  useEffect(() => {
    if (!supabase) return;
    let active = true;
    supabase
      .from("public_comments")
      .select("*")
      .eq("article_slug", slug)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (active && data) setComments(data);
      });
    return () => {
      active = false;
    };
  }, [slug]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Not configured yet → soft success so the UI still works before setup.
    if (!supabase) {
      setStatus("success");
      setC({ body: "", name: "", email: "", website: "" });
      return;
    }

    setStatus("sending");
    const { error } = await supabase.from("comments").insert({
      article_slug: slug,
      name: c.name,
      email: c.email,
      website: c.website || null,
      body: c.body,
    });
    if (error) {
      setStatus("error");
      return;
    }
    // show it immediately at the top
    setComments((prev) => [
      {
        id: `local-${Date.now()}`,
        name: c.name,
        website: c.website,
        body: c.body,
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
    setC({ body: "", name: "", email: "", website: "" });
    setStatus("success");
  };

  const count = comments.length;

  return (
    <section className="comments">
      <div className="comments__card">
        {count > 0 && (
          <>
            <h2 className="comments__title">
              Comment{count > 1 ? "s" : ""} ( {count} )
            </h2>
            <ul className="comment-list">
              {comments.map((cm) => (
                <li className="comment" key={cm.id}>
                  <div className="comment__head">
                    <span className="comment__name">
                      {cm.website ? (
                        <a
                          href={withProtocol(cm.website)}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          {cm.name}
                        </a>
                      ) : (
                        cm.name
                      )}
                    </span>
                    <span className="comment__date">
                      {fmtDate(cm.created_at)}
                    </span>
                  </div>
                  <p className="comment__body">{cm.body}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        <h2 className="comments__title">Leave a Comment</h2>
        <p className="comments__note">
          Your email address will not be published. Required fields are marked{" "}
          <span className="comments__req">*</span>
        </p>
        <form className="comments__form" onSubmit={submit}>
          <textarea
            name="body"
            className="comments__textarea"
            placeholder="Type here.."
            value={c.body}
            onChange={update}
            required
          />
          <div className="comments__row">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={c.name}
              onChange={update}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={c.email}
              onChange={update}
              required
            />
            <input
              type="url"
              name="website"
              placeholder="Website"
              value={c.website}
              onChange={update}
            />
          </div>
          <button
            type="submit"
            className="comments__submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Posting…" : "Post Comment"}
          </button>
          {status === "success" && (
            <p className="comments__thanks">
              Thanks! Your comment has been posted.
            </p>
          )}
          {status === "error" && (
            <p className="comments__error">
              Something went wrong — please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

type ArticleShellProps = {
  title: string;
  date: string;
  shareUrl: string;
  featuredSrc: string;
  next?: { title: string; href: string } | null;
  children: ReactNode;
};

export default function ArticleShell({
  title,
  date,
  shareUrl,
  featuredSrc,
  next,
  children,
}: ArticleShellProps) {
  const slug = useLocation().pathname;
  return (
    <article className="article">
      <div className="article__card">
        <h1 className="article__title">{title}</h1>
        <p className="article__byline">
          By{" "}
          <a href={ABBASI_LINKEDIN} target="_blank" rel="noopener noreferrer">
            abbasi.im
          </a>{" "}
          <span>/ {date}</span>
        </p>

        <div className="article__hero">
          <ArticleImage
            src={featuredSrc}
            label="Featured Image"
            ratio="16 / 9"
          />
        </div>

        <div className="article__share">
          {shareLinks(shareUrl).map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="share-btn"
            >
              <span className="share-btn__ic">{s.icon}</span>
              {s.name}
            </a>
          ))}
        </div>

        <div className="article__body">{children}</div>
      </div>

      {next && (
        <div className="article__nav">
          <Link to={next.href} className="article__next">
            <span className="article__navlabel">Next &rarr;</span>
            <span className="article__navtitle">{next.title}</span>
          </Link>
        </div>
      )}

      <CommentForm slug={slug} />
    </article>
  );
}
