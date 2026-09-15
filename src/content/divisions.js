// The three Infynix divisions, and which services belong to each.
//
// The site previously presented all ~26 services as one flat list, so nothing
// told a visitor, or a language model, that Infynix is three business units.
// Every service entry already carries a `category`, so the hierarchy is derived
// from that rather than from a hand-maintained slug list, which means it stays
// correct as services are added or removed and works unchanged across the
// India, UK and UAE repos even though their service sets differ.

import { solutionsData } from '../lib/contentData.js';

export const DIVISIONS = [
  {
    slug: 'infynix-agency',
    name: 'Infynix Agency',
    short: 'Agency',
    tagline: 'Performance and digital marketing',
    summary:
      'Paid media, search, social and the measurement underneath them. The side of the business that creates demand and proves where it came from.',
    categories: ['Marketing', 'Branding'],
  },
  {
    slug: 'infynix-growth-solutions',
    name: 'Infynix Growth Solutions',
    short: 'Growth Solutions',
    tagline: 'Software, ERP and business systems',
    summary:
      'Custom web applications, CRM and ERP development, business automation, cloud infrastructure and AI vision systems. The engineering practice.',
    categories: ['Development', 'Production', 'Surveillance'],
  },
  {
    slug: 'infynix-media',
    name: 'Infynix Media',
    short: 'Media',
    tagline: 'Content, film and production',
    summary:
      'Brand films, photography, motion graphics and short-form social content, produced in house.',
    categories: ['Media'],
  },
];

const BY_SLUG = Object.fromEntries(DIVISIONS.map((d) => [d.slug, d]));

/** The division a service belongs to, or null for the division hubs themselves. */
export const divisionForSlug = (slug) => {
  if (BY_SLUG[slug]) return null; // a hub is not inside itself
  const entry = solutionsData[slug];
  if (!entry) return null;
  return DIVISIONS.find((d) => d.categories.includes(entry.category)) || null;
};

/** Every service inside a division, excluding the hub pages. */
export const servicesInDivision = (divisionSlug) => {
  const division = BY_SLUG[divisionSlug];
  if (!division) return [];
  return Object.entries(solutionsData)
    .filter(([slug, entry]) => !BY_SLUG[slug] && division.categories.includes(entry.category))
    .map(([slug, entry]) => ({ slug, title: entry.title, description: entry.description }));
};

export const isDivision = (slug) => Boolean(BY_SLUG[slug]);
export const getDivision = (slug) => BY_SLUG[slug] || null;

/** Divisions that actually have services, for grouped listings. */
export const populatedDivisions = () =>
  DIVISIONS.map((d) => ({ ...d, services: servicesInDivision(d.slug) })).filter(
    (d) => d.services.length > 0
  );
