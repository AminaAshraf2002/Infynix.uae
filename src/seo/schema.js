import {
  SITE_URL,
  SITE_NAME,
  BUSINESS,
  SOCIAL_PROFILES,
  GOOGLE_BUSINESS_PROFILE,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from './siteConfig';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.locality,
  addressRegion: BUSINESS.address.region,
  postalCode: BUSINESS.address.postalCode,
  addressCountry: BUSINESS.address.country,
};

export const organizationSchema = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  legalName: BUSINESS.legalName,
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
  email: BUSINESS.email,
  telephone: BUSINESS.telephone,
  address: postalAddress,
  sameAs: SOCIAL_PROFILES,
});

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-AE',
});

export const localBusinessSchema = () => ({
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#localbusiness-dubai`,
  name: SITE_NAME,
  parentOrganization: { '@id': ORG_ID },
  url: `${SITE_URL}/`,
  image: DEFAULT_OG_IMAGE,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  priceRange: '$$',
  hasMap: GOOGLE_BUSINESS_PROFILE,
  address: postalAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: BUSINESS.openingHours.days,
      opens: BUSINESS.openingHours.opens,
      closes: BUSINESS.openingHours.closes,
    },
  ],
  areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'Place', name })),
});

export const breadcrumbSchema = (trail = []) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

export const faqSchema = (faqs = []) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question || faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer || faq.a },
  })),
});

export const serviceSchema = ({ name, description, path, areaServed = [] }) => ({
  '@type': 'Service',
  '@id': `${absoluteUrl(path)}#service`,
  name,
  description,
  provider: { '@id': ORG_ID },
  areaServed: areaServed.map((place) => ({ '@type': 'Place', name: place })),
});

export const buildGraph = (nodes = []) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.filter(Boolean).map(({ '@context': _ignored, ...node }) => node),
});
