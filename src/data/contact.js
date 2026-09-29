export const CURRENT_SITE = 'ae'; // UAE site

export const BRAND_CONTACTS = [
  {
    id: 'infynix-agency',
    name: 'INFYNIX AGENCY',
    slug: 'infynix-agency',
    phone: '+919995911173',
    phoneDisplay: '+91 99959 11173',
    tel: 'tel:+919995911173',
    callAriaLabel: 'Call Infynix Agency desk at +91 99959 11173',
    instagram: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
    instagramHandle: '@infynix_agency',
    instagramAriaLabel: 'Visit Infynix Agency on Instagram',
    tagline: 'Performance and digital marketing',
  },
  {
    id: 'infynix-media',
    name: 'INFYNIX MEDIA HOUSE',
    slug: 'infynix-media',
    phone: '+919995911196',
    phoneDisplay: '+91 99959 11196',
    tel: 'tel:+919995911196',
    callAriaLabel: 'Call Infynix Media House studio desk at +91 99959 11196',
    instagram: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
    instagramHandle: '@infynixmediahouse',
    instagramAriaLabel: 'Visit Infynix Media House on Instagram',
    tagline: 'Content, film and creative production',
  },
];

export const SISTER_WEBSITES = [
  {
    id: 'uk',
    name: 'Infynix Solutions UK',
    url: 'https://www.infynixsolutions.co.uk/',
    title: 'Infynix Solutions UK — Digital Transformation & Growth Engineering',
  },
  {
    id: 'in',
    name: 'Infynix Growth Solutions',
    url: 'https://www.infynixgrowthsolutions.com/',
    title: 'Infynix Growth Solutions India — Engineering & Growth Partner',
  },
];

export function getSisterWebsites() {
  return SISTER_WEBSITES.filter(site => site.id !== CURRENT_SITE);
}
