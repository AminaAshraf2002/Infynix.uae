import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './LandingPage.css';

import Seo from '../seo/Seo';
import { getLandingPage, landingPageBySlug } from '../content/landingPages';
import { BUSINESS, GOOGLE_BUSINESS_PROFILE } from '../seo/siteConfig';
import {
  organizationSchema,
  localBusinessSchema,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '../seo/schema';
import { NotFoundPage } from './UtilityPages';
import ServiceIcon from './LandingIcons';
import { heroImageFor, localImageFor } from '../content/landingImagery';

/**
 * Renders a location + service landing page.
 *
 * Heading contract, enforced by the markup rather than left to the content:
 *   h1  page.h1                     (exactly one)
 *   h2  section headings            (services, local context, FAQ, CTA)
 *   h3  individual services / FAQ questions
 * Nothing here is allowed to emit a second h1.
 */
export default function LandingPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const page = getLandingPage(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) return <NotFoundPage />;

  const path = `/${page.slug}`;
  const isDubai = page.city === 'Dubai';
  const heroImage = heroImageFor(page);
  const localImage = localImageFor(page);

  const schema = [
    organizationSchema(),
    // Only the Dubai pages carry LocalBusiness — that is the UAE address
    // Infynix actually occupies.
    isDubai ? localBusinessSchema() : null,
    serviceSchema({
      name: `${page.service} in ${page.city}`,
      description: page.description,
      path,
      areaServed: [page.city, page.cityAlt, page.region].filter(Boolean),
    }),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: page.h1, path },
    ]),
    faqSchema(page.faqs),
  ];

  return (
    <div className="lp">
      <Seo
        title={page.title}
        description={page.description}
        path={path}
        schema={schema}
      />

      {/* Deliberately a div, not a <nav>: index.css carries a global
          `nav { ... !important }` rule under 1024px for the site navbar, which
          would otherwise position this breadcrumb as a floating header. */}
      <div className="lp-breadcrumb" role="navigation" aria-label="Breadcrumb">
        <ol>
          <li><Link to="/">Home</Link></li>
          <li aria-current="page">{page.h1}</li>
        </ol>
      </div>

      <header className="lp-hero">
        <div className="lp-hero-text">
          <span className="lp-eyebrow">
            {page.service} · {page.city}
            {page.cityAlt ? ` (${page.cityAlt})` : ''}
          </span>
          <h1 className="lp-h1">{page.h1}</h1>
          <p className="lp-sub">{page.heroSubtitle}</p>
          <div className="lp-actions">
            <Link to="/contact" className="lp-btn lp-btn-primary">
              Book a Discovery Call
            </Link>
            <a href={`tel:${BUSINESS.telephone.replace(/[^+\d]/g, '')}`} className="lp-btn lp-btn-ghost">
              Call {BUSINESS.telephone}
            </a>
          </div>
        </div>

        <div className="lp-hero-media">
          {/* The only eager image on the page: it is the LCP candidate, so it
              carries dimensions to reserve space and avoid layout shift. */}
          <img
            src={heroImage.src}
            srcSet={heroImage.srcSet}
            sizes="(max-width: 900px) 100vw, 480px"
            alt={heroImage.alt}
            width="640"
            height="427"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </header>

      <section className="lp-section lp-intro">
        {page.intro.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      <section className="lp-section">
        <h2 className="lp-h2">{page.servicesHeading}</h2>
        <div className="lp-grid">
          {page.services.map((service) => (
            <article key={service.name} className="lp-card">
              <span className="lp-card-icon">
                <ServiceIcon label={service.name} />
              </span>
              <h3 className="lp-h3">{service.name}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section lp-local">
        <div className="lp-local-text">
          <h2 className="lp-h2">{page.localHeading}</h2>
          {page.localBody.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <figure className="lp-local-media">
          <img
            src={localImage.src}
            srcSet={localImage.srcSet}
            sizes="(max-width: 900px) 100vw, 420px"
            alt={localImage.alt}
            width="640"
            height="427"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>

      <section className="lp-section">
        <h2 className="lp-h2">Frequently Asked Questions</h2>
        <div className="lp-faqs">
          {page.faqs.map((faq, index) => (
            <details key={faq.question || faq.q || index} className="lp-faq">
              {/* The answer stays in the DOM whether or not the item is open, so
                  crawlers read it and the FAQPage markup matches visible content. */}
              <summary>
                <h3 className="lp-h3">{faq.question || faq.q}</h3>
              </summary>
              <p>{faq.answer || faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {page.related?.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">Related Services</h2>
          <ul className="lp-related">
            {page.related
              .filter((relatedSlug) => landingPageBySlug[relatedSlug])
              .map((relatedSlug) => (
                <li key={relatedSlug}>
                  <Link to={`/${relatedSlug}`}>
                    {landingPageBySlug[relatedSlug].h1}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      )}

      <section className="lp-section lp-cta">
        <h2 className="lp-h2">Talk to Infynix About {page.service} in {page.city}</h2>
        <p>
          Tell us what you are trying to grow and we will tell you honestly whether we
          are the right people for it.
        </p>
        <address className="lp-address">
          {BUSINESS.address.street}, {BUSINESS.address.locality},{' '}
          {BUSINESS.address.region} {BUSINESS.address.postalCode}
          <br />
          <a href={`tel:${BUSINESS.telephone.replace(/[^+\d]/g, '')}`}>{BUSINESS.telephone}</a>
          {' · '}
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
        </address>
        <div className="lp-actions lp-actions-centred">
          <Link to="/contact" className="lp-btn lp-btn-primary">Get in Touch</Link>
          <a
            href={GOOGLE_BUSINESS_PROFILE}
            className="lp-btn lp-btn-ghost"
            target="_blank"
            rel="noopener"
          >
            Find us on Google
          </a>
        </div>
      </section>
    </div>
  );
}
