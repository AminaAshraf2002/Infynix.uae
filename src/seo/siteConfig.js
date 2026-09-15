// Single source of truth for every absolute URL, canonical tag, sitemap entry and
// schema @id on the site.

export const SITE_URL = 'https://www.infynixsolutions.ae';

export const SITE_NAME = 'Infynix Solutions';

export const DEFAULT_TITLE =
  'Growth Engineering Agency Dubai | Infynix Solutions';

export const DEFAULT_DESCRIPTION =
  'Infynix is a growth engineering agency serving Dubai and the UAE — web development, AI automation, CRM integration and performance marketing.';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

// Canonical business details for UAE
export const BUSINESS = {
  legalName: 'Infynix Solutions',
  email: 'office@infynixsolutions.ae',
  telephone: '+971 54 257 5702',
  address: {
    street: 'C1 Building - Office C1 1F-SF6540, Free Zone',
    locality: 'Al Butain',
    region: 'Ajman',
    postalCode: '',
    country: 'AE',
  },
  geo: { latitude: 25.4052, longitude: 55.4419 },
  openingHours: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '09:00',
    closes: '18:00',
  },
  areaServed: [
    'United Arab Emirates',
    'Dubai',
    'Abu Dhabi',
    'Sharjah',
    'United Kingdom',
    'India',
  ],
};

export const GOOGLE_BUSINESS_PROFILE = 'https://share.google/ey1Jfvouw3GLkRGzF';

export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/company/infynix-solutions-uae/',
  'https://www.instagram.com/infynixsolutions.ae/',
  'https://www.facebook.com/people/Infynix-Solutions-UAE/61584754534164/',
  GOOGLE_BUSINESS_PROFILE,
];

export const absoluteUrl = (path = '/') => {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
