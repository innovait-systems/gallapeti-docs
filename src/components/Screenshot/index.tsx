import React from 'react';

type ScreenshotProps = {
  /** Path under static/img/, e.g. "customers/add-customer-2.png". */
  src?: string;
  /** Caption + alt text describing what the shopkeeper sees. */
  alt: string;
};

/**
 * Placeholder-aware screenshot. While guides are authored text-first, pass only
 * `alt` to render a labelled placeholder box; drop the real capture into
 * static/img/<path> later and add `src` — no prose changes needed.
 */
export default function Screenshot({src, alt}: ScreenshotProps): React.JSX.Element {
  if (!src) {
    return (
      <figure className="ss-figure">
        <div className="ss-placeholder" role="img" aria-label={alt}>
          <span className="ss-placeholder__badge">Screenshot</span>
          <span className="ss-placeholder__text">{alt}</span>
        </div>
      </figure>
    );
  }
  return (
    <figure className="ss-figure">
      <img className="ss-image" src={`/img/${src}`} alt={alt} loading="lazy" />
      <figcaption className="ss-caption">{alt}</figcaption>
    </figure>
  );
}
