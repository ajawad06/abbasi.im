import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "Parvez Abbasi";

// Per-route <title> + meta description. Keyed by pathname.
const META = {
  "/": {
    title: "Home - Helping You, Helping Yourself",
    desc: "Parvez Abbasi helps people make the transition from employee to entrepreneur — mentorship across personal development, entrepreneurship, difficult life choices and networking.",
  },
  "/expertise": {
    title: `Expertise - ${SITE}`,
    desc: "Four areas of expertise: personal development, employee to entrepreneur, difficult life choices, and connecting people.",
  },
  "/podcasts": {
    title: `Podcasts - ${SITE}`,
    desc: "Conversations on entrepreneurship, leadership and building the future, featuring Parvez Abbasi.",
  },
  "/about": {
    title: `About - ${SITE}`,
    desc: "A friend, mentor and coach. 25+ years across telecom and technology, co-founder of a billion-dollar company, and Project Director of the National Incubation Center.",
  },
  "/contact": {
    title: `Contact - ${SITE}`,
    desc: "Get in touch with Parvez Abbasi - WhatsApp, email, or book a free discovery call.",
  },
  "/gallery": {
    title: `Gallery - ${SITE}`,
    desc: "Featured pictures and videos of Parvez Abbasi.",
  },
  "/blog": {
    title: `Blog - ${SITE}`,
    desc: "Articles on entrepreneurship, networking, purpose and personal growth by Parvez Abbasi.",
  },
  "/blog/why-bootstrapping-beats-funding": {
    title: `Why Bootstrapping Beats Funding - ${SITE}`,
    desc: "Why bootstrapping lets you retain full ownership and build a business on your own terms.",
  },
  "/blog/unlocking-success-the-art-of-building-a-powerful-network": {
    title: `Unlocking Success: The Art of Building a Powerful Network - ${SITE}`,
    desc: "Practical tips for building a powerful, meaningful professional network.",
  },
  "/blog/unveiling-your-purpose-a-journey-to-self-improvement-and-passion-discovery":
    {
      title: `Unveiling Your Purpose - ${SITE}`,
      desc: "A journey to self-improvement and passion discovery.",
    },
  "/blog/unleash-your-potential-discover-purpose-and-passion-to-become-your-best-self":
    {
      title: `Unleash Your Potential - ${SITE}`,
      desc: "Discover purpose and passion to become your best self.",
    },
  "/blog/5-must-haves-for-a-good-entrepreneur": {
    title: `5 Must-Haves for a Good Entrepreneur - ${SITE}`,
    desc: "Five fundamental principles every good entrepreneur needs.",
  },
  "/blog/pervez-abbasi-founder-project-director-national-incubation-center": {
    title: `Parvez Abbasi - National Incubation Center - ${SITE}`,
    desc: "An interview on fueling Pakistan's startup ecosystem through the National Incubation Center and Teamup.",
  },
};

const FALLBACK = {
  title: `Page Not Found - ${SITE}`,
  desc: "The page you are looking for could not be found.",
};

export function usePageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = META[pathname] || FALLBACK;
    document.title = m.title;

    let tag = document.head.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", m.desc);
  }, [pathname]);
}
