import { SOCIAL_PROFILES, GOOGLE_BUSINESS_PROFILE } from '../seo/siteConfig';

// One source of truth for the social icons: the same list that feeds the
// Organization sameAs graph, so the footer, the contact page and the schema
// can never disagree about which profiles are ours.
const ICONS = [
  ['linkedin.com', 'fa-brands fa-linkedin-in', 'LinkedIn'],
  ['instagram.com', 'fa-brands fa-instagram', 'Instagram'],
  ['facebook.com', 'fa-brands fa-facebook-f', 'Facebook'],
  ['youtube.com', 'fa-brands fa-youtube', 'YouTube'],
  ['x.com', 'fa-brands fa-x-twitter', 'X'],
];

export default function SocialLinks({ className = 'footer-socials', linkClassName = '' }) {
  const links = SOCIAL_PROFILES
    .filter((url) => url !== GOOGLE_BUSINESS_PROFILE)
    .map((url) => {
      const match = ICONS.find(([host]) => url.includes(host));
      return match ? { url, icon: match[1], label: match[2] } : null;
    })
    .filter(Boolean);

  if (!links.length) return null;

  return (
    <div className={className}>
      {links.map(({ url, icon, label }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          aria-label={`Infynix Solutions on ${label}`}
        >
          <i className={icon} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
}
