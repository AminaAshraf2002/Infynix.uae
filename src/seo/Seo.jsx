import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from './siteConfig';
import { buildGraph } from './schema';

/**
 * Renders head tags through Helmet so they exist in the prerendered HTML.
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  schema = [],
  children,
}) {
  const resolvedTitle = title || DEFAULT_TITLE;
  const resolvedDescription = description || DEFAULT_DESCRIPTION;
  const canonical = absoluteUrl(path);
  const graph = schema.length ? buildGraph(schema) : null;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-AE" />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={canonical} />
      {/* hreflang, homepage only. These three URLs are equivalents of each
          other, so the annotation is valid here. It is NOT valid on inner
          pages, where hreflang must point at the corresponding page. All three
          domains carry the same set, which is what makes it reciprocal. */}
      {path === '/' && (
        <link rel="alternate" hrefLang="en-IN" href="https://www.infynixgrowthsolutions.com/" />
      )}
      {path === '/' && (
        <link rel="alternate" hrefLang="en-AE" href="https://www.infynixsolutions.ae/" />
      )}
      {path === '/' && (
        <link rel="alternate" hrefLang="en-GB" href="https://www.infynixsolutions.co.uk/" />
      )}
      {path === '/' && (
        <link rel="alternate" hrefLang="x-default" href="https://www.infynixgrowthsolutions.com/" />
      )}

      <meta
        name="robots"
        content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={image} />

      {graph && (
        <script type="application/ld+json">{JSON.stringify(graph)}</script>
      )}
      {children}
    </Helmet>
  );
}

export { SITE_URL };
