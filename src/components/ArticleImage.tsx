import { useState } from 'react';
import type { CSSProperties } from 'react';
import Placeholder from './Placeholder';

type ArticleImageProps = {
  src: string;
  label: string;
  ratio?: string;
  fit?: CSSProperties['objectFit'];
};

// Renders an <img>, but falls back to a clean grey placeholder (never a broken
// image icon) until the file exists in /public. Used for article images.
export default function ArticleImage({
  src,
  label,
  ratio = '16 / 9',
  fit = 'cover',
}: ArticleImageProps) {
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
