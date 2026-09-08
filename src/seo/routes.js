// The authoritative list of indexable URLs. Consumed by the prerenderer and the
// sitemap generator so the two can never drift apart.
//
// Derived from the content data rather than hand-listed: the old sitemap.xml had
// 8 URLs while the app actually served ~50, so every solution, industry, case
// study and insight page was invisible to search.

import { solutionsData, industriesData, caseStudiesData, insightsData } from '../lib/contentData.js';
import { landingPages } from '../content/landingPages/index.js';

const entry = (path, { priority = 0.7, changefreq = 'monthly' } = {}) => ({
  path,
  priority,
  changefreq,
});

export const staticRoutes = [
  entry('/', { priority: 1.0, changefreq: 'weekly' }),
  entry('/growth-engineering', { priority: 0.8 }),
  entry('/solutions', { priority: 0.8 }),
  entry('/industries', { priority: 0.7 }),
  entry('/case-studies', { priority: 0.7 }),
  entry('/insights', { priority: 0.7, changefreq: 'weekly' }),
  entry('/about', { priority: 0.6 }),
  entry('/contact', { priority: 0.8 }),
];

// Utility pages stay crawlable but are marked noindex in-page; they are kept out
// of the sitemap because a sitemap is a list of pages you want ranked.
export const noindexRoutes = ['/privacy-policy', '/terms-of-service'];

export const solutionRoutes = Object.keys(solutionsData).map((slug) =>
  entry(`/solutions/${slug}`, { priority: 0.8 })
);

export const industryRoutes = Object.keys(industriesData).map((slug) =>
  entry(`/industries/${slug}`, { priority: 0.7 })
);

export const caseStudyRoutes = caseStudiesData.map((study) =>
  entry(`/case-studies/${study.slug}`, { priority: 0.6 })
);

export const insightRoutes = insightsData.map((post) =>
  entry(`/insights/${post.slug}`, { priority: 0.6 })
);

// Location + service landing pages, the pages built to win the commercial
// "{service} company in {city}" queries.
export const landingRoutes = landingPages.map((page) =>
  entry(`/${page.slug}`, { priority: 0.9, changefreq: 'monthly' })
);

export const allRoutes = [
  ...staticRoutes,
  ...landingRoutes,
  ...solutionRoutes,
  ...industryRoutes,
  ...caseStudyRoutes,
  ...insightRoutes,
];

// Paths to prerender: everything indexable plus the utility pages, which still
// need real HTML so a crawler reading them does not see an empty shell.
export const prerenderPaths = [
  ...allRoutes.map((route) => route.path),
  ...noindexRoutes,
  '/404',
];
