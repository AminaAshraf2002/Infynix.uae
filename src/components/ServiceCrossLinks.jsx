import { Link } from 'react-router-dom';
import './LandingPage.css';
import { landingPagesForSolution, sisterServiceLinks, articlesForSolution, THIS_SITE } from '../content/crossLinks.js';

// Rendered on every service page: the city landing pages that sell this
// service on this site, and the same service on the sister sites. Each link
// carries a descriptive anchor so it reads as a recommendation, not a sitemap.
export default function ServiceCrossLinks({ slug, title }) {
  const local = landingPagesForSolution(slug);
  const sisters = sisterServiceLinks(slug);
  const reading = articlesForSolution(slug);
  if (local.length === 0 && sisters.length === 0 && reading.length === 0) return null;

  return (
    <div className="lp service-depth" style={{ paddingTop: 0, paddingBottom: 40 }}>
      {local.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">Where we deliver {title}</h2>
          <ul className="lp-related">
            {local.map((p) => (
              <li key={p.slug}>
                <Link to={`/${p.slug}`}>{p.h1}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {reading.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">Further reading</h2>
          <ul className="lp-related">
            {reading.map((a) => (
              <li key={a.slug}>
                <Link to={`/insights/${a.slug}`}>{a.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {sisters.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">{title} in our other markets</h2>
          <p>
            Infynix Solutions is registered separately in India, the United Kingdom and the
            United Arab Emirates{THIS_SITE ? `. This page covers ${THIS_SITE.market}` : ''}.
            The same service, written for the other markets:
          </p>
          <ul className="lp-related">
            {sisters.map((s) => (
              <li key={s.url}>
                <a href={s.url}>
                  {title} in {s.market}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
