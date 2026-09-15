import Seo from '../seo/Seo';
import { SITE_URL } from '../seo/siteConfig';

/**
 * Back-compatible wrapper so existing pages keep their <SEOManager ... /> calls.
 *
 * The original implementation wrote head tags in a useEffect, which meant they
 * only existed after hydration, a crawler reading the raw HTML saw the static
 * index.html title on every page and no canonical or JSON-LD at all. This now
 * delegates to Helmet so the tags are present in the prerendered HTML.
 *
 * New pages should use `src/seo/Seo.jsx` directly: it takes a `path` rather than
 * a full URL and builds the canonical from SITE_URL, so the domain lives in one
 * place. Passing an absolute canonicalUrl still works, only its pathname is used,
 * so a stale hostname in a caller cannot leak into a canonical tag.
 */
const toPath = (canonicalUrl) => {
  if (!canonicalUrl) return undefined;
  try {
    return new URL(canonicalUrl, SITE_URL).pathname;
  } catch {
    return canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`;
  }
};

const SEOManager = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  schemaData = null,
  noindex = false,
}) => (
  <Seo
    title={title}
    description={description}
    path={toPath(canonicalUrl) || '/'}
    ogType={ogType}
    noindex={noindex}
    schema={schemaData ? [schemaData] : []}
  />
);

export default SEOManager;
