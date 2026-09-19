/**
 * Generates public/llms.txt from the same content data that feeds the sitemap.
 *
 * The previous llms.txt was a hand-written copy pasted between the three
 * regional repos. It described the divisions wrongly, listed services the
 * sites no longer offer, and every copy pointed at the India domain, so an
 * assistant reading the UK site was sent to India for "the main website".
 * Deriving it here means the file follows SITE_URL, the division map and the
 * live service and landing page catalogue without anyone remembering to edit it.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (rel) => import(pathToFileURL(path.join(root, rel)).href);

const { SITE_URL, SITE_NAME, BUSINESS, SOCIAL_PROFILES } = await load('src/seo/siteConfig.js');
const { populatedDivisions } = await load('src/content/divisions.js');
const { landingPages } = await load('src/content/landingPages/index.js');
const { industriesData, caseStudiesData, insightsData } = await load('src/lib/contentData.js');

// The three independent regional sites. The current one is listed as the
// site being described; the other two are cross-referenced as sister sites.
const REGIONAL_SITES = [
  { url: 'https://www.infynixgrowthsolutions.com', label: 'India' },
  { url: 'https://www.infynixsolutions.co.uk', label: 'United Kingdom' },
  { url: 'https://www.infynixsolutions.ae', label: 'United Arab Emirates' },
];
const here = REGIONAL_SITES.find((s) => s.url === SITE_URL);
const sisters = REGIONAL_SITES.filter((s) => s.url !== SITE_URL);

const abs = (p) => `${SITE_URL}${p.startsWith('/') ? p : `/${p}`}`;
const a = BUSINESS.address || {};
const addressLine = [a.street, a.locality, a.region, a.postalCode, a.country]
  .filter(Boolean)
  .join(', ');

const lines = [];
const push = (...xs) => lines.push(...xs);

push(`# ${SITE_NAME}${here ? ` (${here.label})` : ''}`);
push('');
push(
  `> ${SITE_NAME} is a Growth Engineering company: three divisions that build the marketing, media and business systems a company needs to attract, convert and scale. This file describes the ${here ? here.label : ''} site at ${SITE_URL}.`
);
push('');
push('## Business');
push(`- Legal name: ${BUSINESS.legalName}`);
if (addressLine) push(`- Office: ${addressLine}`);
if (BUSINESS.telephone) push(`- Telephone: ${BUSINESS.telephone}`);
if (BUSINESS.email) push(`- Email: ${BUSINESS.email}`);
if (Array.isArray(BUSINESS.areaServed) && BUSINESS.areaServed.length) {
  push(`- Areas served: ${BUSINESS.areaServed.join(', ')}`);
}
push(`- Contact page: ${abs('/contact')}`);
push('');

push('## Divisions');
for (const d of populatedDivisions()) {
  push(`### ${d.name} (${d.tagline})`);
  push(`${d.summary}`);
  push(`- Hub: ${abs(`/solutions/${d.slug}`)}`);
  for (const s of d.services) {
    push(`- [${s.title}](${abs(`/solutions/${s.slug}`)}): ${s.description}`);
  }
  push('');
}

if (landingPages.length) {
  push('## Location and service pages');
  for (const p of landingPages) {
    push(`- [${p.h1 || p.title}](${abs(`/${p.slug}`)})`);
  }
  push('');
}

const industries = Object.entries(industriesData || {});
if (industries.length) {
  push('## Industries');
  for (const [slug, ind] of industries) {
    push(`- [${ind.name || slug}](${abs(`/industries/${slug}`)})`);
  }
  push('');
}

if (Array.isArray(caseStudiesData) && caseStudiesData.length) {
  push('## Case studies');
  for (const c of caseStudiesData) {
    push(`- [${c.title}](${abs(`/case-studies/${c.slug}`)})`);
  }
  push('');
}

if (Array.isArray(insightsData) && insightsData.length) {
  push('## Insights');
  for (const p of insightsData) {
    push(`- [${p.title}](${abs(`/insights/${p.slug}`)})`);
  }
  push('');
}

push('## Site directory');
push(`- Home: ${SITE_URL}/`);
push(`- Growth Engineering: ${abs('/growth-engineering')}`);
push(`- Solutions: ${abs('/solutions')}`);
push(`- Industries: ${abs('/industries')}`);
push(`- Case studies: ${abs('/case-studies')}`);
push(`- Insights: ${abs('/insights')}`);
push(`- About: ${abs('/about')}`);
push(`- Contact: ${abs('/contact')}`);
push(`- Sitemap: ${abs('/sitemap.xml')}`);
push('');

push('## Sister sites');
push(
  'Infynix Solutions is registered separately in India, the United Kingdom and the United Arab Emirates. Each site describes the services and office of that entity.'
);
for (const s of sisters) push(`- ${s.label}: ${s.url}/`);
push('');

const profiles = (SOCIAL_PROFILES || []).filter((u) => !/wa\.me|whatsapp\.com/.test(u));
if (profiles.length) {
  push('## Profiles');
  for (const u of profiles) push(`- ${u}`);
  push('');
}

fs.writeFileSync(path.join(root, 'public', 'llms.txt'), `${lines.join('\n')}\n`, 'utf8');
console.log(`llms.txt: ${lines.length} lines written for ${SITE_URL}`);
