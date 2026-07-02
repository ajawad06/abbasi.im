import { useState } from 'react';
import { WEB3FORMS_KEY } from '../config.js';
import './ContactPage.css';

const EMAIL = 'parvez@adventures.studio';
const GMAIL = (extra = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}${extra}`;


const stroke = (children) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 448 512" aria-hidden="true">
    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.2-157zM223.9 438.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.5-186.6 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.4-5-3.8-10.5-6.6z" />
  </svg>
);

const reachItems = [
  {
    label: 'WhatsApp',
    value: '+92 3008271133',
    href: 'https://wa.me/923008271133',
    icon: <WhatsAppIcon />,
  },
  {
    label: 'Email',
    value: EMAIL,
    href: GMAIL(),
    icon: stroke(
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
  {
    label: 'Schedule a call',
    value: 'calendly.com/parvez120665',
    href: 'https://calendly.com/parvez120665/30min?month=2026-06',
    icon: stroke(
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  },
  {
    label: 'Based in',
    value: 'Islamabad, Pakistan',
    href: 'https://www.google.com/maps/place/Islamabad',
    icon: stroke(
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

const socialIcons = {
  Facebook: (
    <svg viewBox="0 0 320 512" aria-hidden="true">
      <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 448 512" aria-hidden="true">
      <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 448 512" aria-hidden="true">
      <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 576 512" aria-hidden="true">
      <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
    </svg>
  ),
};

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/abbasi.iam' },
  { name: 'Instagram', href: 'https://www.instagram.com/abbasi.im/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/abbasi-im' },
  { name: 'YouTube', href: 'https://www.youtube.com/@abbasiim' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fallback: no key configured yet → open a pre-filled Gmail compose window.
    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      const su = encodeURIComponent(form.subject || `Message from ${form.name || 'a visitor'}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.open(GMAIL(`&su=${su}&body=${body}`), '_blank', 'noopener,noreferrer');
      return;
    }

    // Real delivery via Web3Forms → email lands in Parvez's inbox.
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          // reserved: sets the email's subject line (shows in the inbox)
          subject: form.subject
            ? `${form.subject} — from ${form.name}`
            : `New message from ${form.name}`,
          from_name: form.name,
          replyto: form.email,
          // visible rows in the email body:
          Name: form.name,
          Email: form.email,
          Subject: form.subject || '(none)',
          Message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <header className="contact__header">
          <span className="contact__eyebrow">We&rsquo;d love to hear from you</span>
          <h1 className="contact__title">Contact Us</h1>
          <div className="contact__divider" />
        </header>

        <div className="contact__grid">
          {/* Left — reach list + follow card */}
          <div className="contact__left">
            <div className="reach">
              <h4 className="reach__head">Reach Us Through</h4>
              <ul className="reach__list">
                {reachItems.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} target="_blank" rel="noopener noreferrer">
                      <span className="reach__ic">{c.icon}</span>
                      <span className="reach__text">
                        <span className="reach__label">{c.label}</span>
                        <span className="reach__value">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="follow-card">
              <span className="follow-card__head">Follow Along</span>
              <div className="follow-card__pills">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="follow-pill"
                  >
                    <span className="follow-pill__ic">{socialIcons[s.name]}</span>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form card */}
          <div className="form-card">
            <h2 className="form-card__title">Send a message</h2>
            <p className="form-card__sub">
              Prefer to write? Drop a note and Parvez will reply personally.
            </p>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={update}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={update}
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Tell Parvez a little about where you are..."
                value={form.message}
                onChange={update}
                required
              />
              <button
                type="submit"
                className="contact__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    Send message <span aria-hidden="true">&rarr;</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="contact__status contact__status--ok">
                  Thanks! Your message has been sent — Parvez will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="contact__status contact__status--err">
                  Something went wrong. Please try again or email {EMAIL} directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
