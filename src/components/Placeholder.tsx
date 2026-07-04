import './Placeholder.css';

/**
 * Reusable image placeholder. Renders a grey box with a label and the
 * requested aspect ratio so layouts match the real design before real
 * images are dropped in.
 */
export default function Placeholder({ label = 'Image', ratio = '16 / 9', rounded = false }) {
  return (
    <div
      className={`placeholder ${rounded ? 'placeholder--rounded' : ''}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="placeholder__icon">🖼</span>
      <span className="placeholder__label">{label}</span>
    </div>
  );
}
