// Imagery for the location landing pages — UAE edition.
// Reusing the same optimised WebP images from the shared asset pool.

import marketing from '../assets/lp/lp-marketing.webp';
import marketing2x from '../assets/lp/lp-marketing@2x.webp';
import media from '../assets/lp/lp-media.webp';
import media2x from '../assets/lp/lp-media@2x.webp';
import technology from '../assets/lp/lp-technology.webp';
import technology2x from '../assets/lp/lp-technology@2x.webp';
import regions from '../assets/lp/lp-regions.webp';
import regions2x from '../assets/lp/lp-regions@2x.webp';

const IMAGES = {
  marketing: {
    src: marketing,
    srcSet: `${marketing} 640w, ${marketing2x} 1120w`,
    alt: 'Infynix marketing dashboards and campaign reporting',
  },
  media: {
    src: media,
    srcSet: `${media} 640w, ${media2x} 1120w`,
    alt: 'Content production with camera, ring light and video editing timeline',
  },
  technology: {
    src: technology,
    srcSet: `${technology} 640w, ${technology2x} 1120w`,
    alt: 'Connected devices and systems visualised as a single linked platform',
  },
  regions: {
    src: regions,
    srcSet: `${regions} 640w, ${regions2x} 1120w`,
    alt: 'Map showing the regions Infynix Solutions delivers into across the UAE',
  },
};

/** Lead image for the page hero, chosen from what the page is actually about. */
export const heroImageFor = (page) => {
  if (!page) return IMAGES.marketing;

  if (page.heroImage && IMAGES[page.heroImage]) {
    return IMAGES[page.heroImage];
  }

  if (/social|media/i.test(page.service)) return IMAGES.media;
  return page.category === 'technology' ? IMAGES.technology : IMAGES.marketing;
};

/** Supporting image for the "why this place" section. */
export const localImageFor = (page) => IMAGES.regions;

export default IMAGES;
