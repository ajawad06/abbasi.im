import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={close}>
          Abbasi<span>.im</span>
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`}>
          <ul className="navbar__menu">
            <li>
              <Link to="/expertise" onClick={close}>
                Expertise
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={close}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/podcasts" onClick={close}>
                Podcasts
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={close}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={close}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={close}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
