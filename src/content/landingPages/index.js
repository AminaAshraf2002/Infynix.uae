import { dubaiPages } from './dubai.js';
import { abuDhabiPages } from './abu-dhabi.js';
import { sharjahPages } from './sharjah.js';

export const landingPages = [
  ...dubaiPages,
  ...abuDhabiPages,
  ...sharjahPages,
];

export const landingPageBySlug = Object.fromEntries(
  landingPages.map((page) => [page.slug, page])
);

export const getLandingPage = (slug) => landingPageBySlug[slug] || null;
