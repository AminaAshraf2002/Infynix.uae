/**
 * Monoline icons for the landing page service cards.
 *
 * Inline SVG rather than an icon font or image sprite: it costs nothing to
 * download, inherits currentColor, and stays crisp at any density. The site
 * already pulls Font Awesome from a CDN, but adding 12 more glyph lookups for
 * decorative marks on 25 pages is not worth the render-blocking stylesheet.
 *
 * Matching is on keywords in the service name so new services pick up a sensible
 * icon without anyone maintaining a lookup table by hand.
 */

const paths = {
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-4.2-4.2',
  ads: 'M3 11v2a1 1 0 0 0 1 1h3l4 4V6L7 10H4a1 1 0 0 0-1 1ZM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12',
  social: 'M17 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM9.6 13.5l4.8 2.8M14.4 7.7L9.6 10.5',
  content: 'M5 3h9l5 5v13H5V3ZM14 3v5h5M8 13h8M8 17h5',
  automation: 'M12 3v3M12 18v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  analytics: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  code: 'M8 6 3 12l5 6M16 6l5 6-5 6',
  mobile: 'M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM11 19h2',
  cloud: 'M7 18a4 4 0 0 1 .6-8 6 6 0 0 1 11.3 2A3.5 3.5 0 0 1 18 18H7Z',
  design: 'M12 3 3 8v8l9 5 9-5V8l-9-5ZM3 8l9 5 9-5M12 13v8',
  commerce: 'M3 4h2l2.2 11h10L20 7H6M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  location: 'M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11ZM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  vision: 'M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  link: 'M10 13a4 4 0 0 0 5.7 0l3-3a4 4 0 1 0-5.7-5.7l-1.5 1.5M14 11a4 4 0 0 0-5.7 0l-3 3a4 4 0 1 0 5.7 5.7l1.5-1.5',
  system: 'M4 4h6v6H4V4ZM14 4h6v6h-6V4ZM4 14h6v6H4v-6ZM14 14h6v6h-6v-6Z',
};

// Ordered: first match wins, so put the more specific terms first.
const RULES = [
  [/\bseo\b|search engine|keyword|serp|technical seo|spelling/i, 'search'],
  [/google ads|advertis|paid|performance|ppc|campaign/i, 'ads'],
  [/social|influencer|creator|community|whatsapp/i, 'social'],
  [/content|copy|malayalam|bilingual|blog|brief/i, 'content'],
  [/automat|crm|erp|workflow|process/i, 'automation'],
  [/analytic|report|attribut|tracking|measure|data/i, 'analytics'],
  [/e-?commerce|store|shop|checkout|payment/i, 'commerce'],
  [/mobile|app|ios|android|native|flutter/i, 'mobile'],
  [/cloud|devops|infrastructure|hosting/i, 'cloud'],
  [/ui|ux|design|brand|interface|accessib/i, 'design'],
  [/local|map pack|google business|citation|review|profile/i, 'location'],
  [/ai|vision|surveillance|intelligen|schema|structured/i, 'vision'],
  [/link|backlink|pr\b|digital pr|outreach/i, 'link'],
  [/web|website|platform|custom|development|integrat|api|modernis/i, 'code'],
];

const iconFor = (label = '') => {
  for (const [pattern, key] of RULES) {
    if (pattern.test(label)) return key;
  }
  return 'system';
};

export default function ServiceIcon({ label, className = 'lp-icon' }) {
  const d = paths[iconFor(label)];

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}
