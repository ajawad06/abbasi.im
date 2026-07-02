import { useState } from 'react';
import Placeholder from './Placeholder.jsx';

// Renders an <img>, but falls back to a clean grey placeholder (never a broken
// image icon) until the file exists in /public. Used for article images.
export default function ArticleImage({ src, label, ratio = '16 / 9', fit = 'cover' }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <Placeholder label={label} ratio={ratio} rounded />;
  return (
    <img
      className="article-img"
      style={{ aspectRatio: ratio, objectFit: fit }}
      src={src}
      alt={label}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
