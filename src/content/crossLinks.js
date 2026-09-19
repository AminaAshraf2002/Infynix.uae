// Internal and cross-market linking.
//
// Three link sets that were missing:
//  1. landing page -> the service page it sells (and back), so the money
//     pages and the service pages reinforce each other instead of each
//     being linked only from an index;
//  2. landing page -> the other landing pages in the same city, so every
//     city cluster links to itself and no long-tail page is left with one
//     inbound link;
//  3. service page / landing page / article -> the same service or article
//     on the two sister sites, as deep contextual links rather than a
//     footer link to the sister homepage.
//
// This file is identical across the India, UK and UAE repos. The sister
// lists are hand-maintained: when a service slug is added to a site, add it
// here in all three repos so the other two can link to it.

import { SITE_URL } from '../seo/siteConfig.js';
import { solutionsData, insightsData } from '../lib/contentData.js';
import { landingPages } from './landingPages/index.js';

const ALL_SITES = [
  {
    key: 'in',
    market: 'India',
    url: 'https://www.infynixgrowthsolutions.com',
    services: ['infynix-agency', 'infynix-media', 'infynix-growth-solutions', 'ai-surveillance', 'performance-advertising', 'seo-content-marketing', 'social-media-management', 'marketing-automation-crm', 'custom-web-app-development', 'ai-native-product-development', 'photography-videography', 'brand-films-commercials', 'short-form-social-content', 'motion-graphics-animation', 'podcast-audio-production', 'website-development', 'mobile-app-development', 'performance-marketing', 'seo-services', 'artificial-intelligence', 'business-automation', 'crm-erp-development', 'ui-ux-design', 'cloud-solutions'],
  },
  {
    key: 'uk',
    market: 'United Kingdom',
    url: 'https://www.infynixsolutions.co.uk',
    services: ['infynix-agency', 'infynix-media', 'infynix-growth-solutions', 'ai-surveillance', 'performance-advertising', 'seo-content-marketing', 'social-media-management', 'marketing-automation-crm', 'custom-web-app-development', 'ai-native-product-development', 'photography-videography', 'short-form-social-content', 'brand-films-commercials', 'motion-graphics-animation', 'ui-ux-design', 'analytics-reporting', 'brand-strategy-positioning', 'website-development', 'mobile-app-development', 'seo-services', 'artificial-intelligence', 'business-automation', 'crm-erp-development', 'cloud-solutions', 'iot-connected-systems', 'api-systems-integration', 'data-platforms-dashboards', 'performance-marketing'],
  },
  {
    key: 'ae',
    market: 'United Arab Emirates',
    url: 'https://www.infynixsolutions.ae',
    services: ['infynix-agency', 'infynix-media', 'infynix-growth-solutions', 'ai-surveillance', 'social-media-management', 'marketing-automation-crm', 'photography-videography', 'short-form-social-content', 'brand-films-commercials', 'motion-graphics-animation', 'ui-ux-design', 'analytics-reporting', 'brand-strategy-positioning', 'website-development', 'mobile-app-development', 'seo-services', 'artificial-intelligence', 'business-automation', 'crm-erp-development', 'cloud-solutions', 'iot-connected-systems', 'api-systems-integration', 'data-platforms-dashboards', 'ai-assisted-production', 'podcast-audio-production', 'performance-marketing'],
  },
];

const norm = (t) => String(t || '').toLowerCase().replace(/[^a-z0-9]+/g, '');

/**
 * The service slug for a display title, or null if this site has no such
 * page. Several components used to slugify titles to build links, which
 * produced 404s wherever a title and its slug differ or the service does not
 * exist on this site. Resolve against the catalogue instead.
 */
export const solutionSlugForTitle = (title) => {
  const key = norm(title);
  for (const [slug, entry] of Object.entries(solutionsData)) {
    if (norm(entry.title) === key || norm(slug) === key) return slug;
  }
  return null;
};

export const THIS_SITE = ALL_SITES.find((s) => s.url === SITE_URL) || null;
export const SISTER_SITES = ALL_SITES.filter((s) => s.url !== SITE_URL);

// Landing page `service` label -> the service pages that sell it, in order of
// relevance. Filtered against solutionsData so a site without a slug simply
// links to the next one.
const SERVICE_TO_SOLUTIONS = {
  'Digital Marketing': ['infynix-agency', 'performance-advertising', 'performance-marketing'],
  SEO: ['seo-services', 'seo-content-marketing'],
  'Software Development': ['custom-web-app-development', 'infynix-growth-solutions'],
  'Web Design & Development': ['website-development'],
  'Web Design': ['website-development'],
  'E-Commerce Development': ['website-development'],
  'Mobile App Development': ['mobile-app-development'],
  'IT Services': ['infynix-growth-solutions', 'custom-web-app-development'],
  'Social Media Marketing': ['social-media-management'],
  'UI/UX Design': ['ui-ux-design'],
  'Performance Marketing': ['performance-marketing', 'performance-advertising'],
  'ERP Software': ['crm-erp-development'],
  'CRM Development': ['crm-erp-development', 'marketing-automation-crm'],
  'Video Production': ['infynix-media', 'brand-films-commercials'],
  'Video Editing': ['infynix-media', 'photography-videography'],
  'Video Post-Production': ['infynix-media', 'photography-videography'],
};

/** Service pages on this site for a landing page's service label. */
export const solutionsForService = (serviceLabel) =>
  (SERVICE_TO_SOLUTIONS[serviceLabel] || [])
    .filter((slug) => solutionsData[slug])
    .map((slug) => ({ slug, title: solutionsData[slug].title }));

/** Landing pages on this site that sell a given service page, grouped by city. */
export const landingPagesForSolution = (solutionSlug) =>
  landingPages.filter((p) => (SERVICE_TO_SOLUTIONS[p.service] || []).includes(solutionSlug));

/** The other landing pages in the same city, excluding the page itself. */
export const sameCityPages = (page, exclude = []) =>
  landingPages.filter(
    (p) => p.city === page.city && p.slug !== page.slug && !exclude.includes(p.slug)
  );

/** The same service page on each sister site that has it. */
export const sisterServiceLinks = (solutionSlug) =>
  SISTER_SITES.filter((s) => s.services.includes(solutionSlug)).map((s) => ({
    market: s.market,
    url: `${s.url}/solutions/${solutionSlug}`,
  }));

/** The same article on each sister site. Article slugs are shared across sites. */
export const sisterArticleLinks = (articleSlug) =>
  SISTER_SITES.map((s) => ({ market: s.market, url: `${s.url}/insights/${articleSlug}` }));

// Service page -> the Insights articles that support it, so each article is
// linked from the pages it is actually about rather than only from the index.
const SOLUTION_TO_ARTICLES = {
  'infynix-agency': ['what-is-growth-engineering'],
  'infynix-growth-solutions': ['what-is-growth-engineering'],
  'seo-services': ['what-is-growth-engineering'],
  'seo-content-marketing': ['what-is-growth-engineering'],
  'performance-marketing': ['what-is-growth-engineering'],
  'performance-advertising': ['what-is-growth-engineering'],
  'marketing-automation-crm': ['what-is-growth-engineering'],
  'crm-erp-development': ['what-is-growth-engineering'],
  'ai-surveillance': ['ai-surveillance-computer-vision-security'],
  'artificial-intelligence': ['ai-surveillance-computer-vision-security'],
  'iot-connected-systems': ['ai-surveillance-computer-vision-security'],
};

export const articlesForSolution = (solutionSlug) =>
  (SOLUTION_TO_ARTICLES[solutionSlug] || [])
    .map((slug) => insightsData.find((a) => a.slug === slug))
    .filter(Boolean)
    .map((a) => ({ slug: a.slug, title: a.title }));
