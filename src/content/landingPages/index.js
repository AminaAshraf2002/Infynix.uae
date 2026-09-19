import { dubaiPages } from './dubai.js';
import { abuDhabiPages } from './abu-dhabi.js';
import { sharjahPages } from './sharjah.js';
import { dubaiLongTailPages } from './dubai-longtail.js';
import { abuDhabiSharjahLongTailPages } from './abu-dhabi-sharjah-longtail.js';

export const landingPages = [
  ...dubaiPages,
  ...abuDhabiPages,
  ...sharjahPages,
  ...dubaiLongTailPages,
  ...abuDhabiSharjahLongTailPages,
];

export const landingPageBySlug = Object.fromEntries(
  landingPages.map((page) => [page.slug, page])
);

export const getLandingPage = (slug) => landingPageBySlug[slug] || null;
