import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Page Not Found</h1>
        <p className="notfound__text">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
        </p>
        <Link to="/" className="btn btn-orange">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
