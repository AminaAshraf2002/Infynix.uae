import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './LandingPage.css';

import Seo from '../seo/Seo';
import { getLandingPage, landingPageBySlug } from '../content/landingPages';
import { sameCityPages, solutionsForService, sisterServiceLinks } from '../content/crossLinks.js';
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

// Four steps, by practice. These give each page a scannable spine instead of
// three stacked paragraphs. Deliberately describes method, not outcomes, so
// nothing here claims a result we cannot evidence.
const APPROACH = {
  marketing: [
    ['Audit', 'Tracking, rankings and spend, measured before anything changes.'],
    ['Fix', 'Technical and structural blockers first, because content cannot outrun them.'],
    ['Run', 'Campaigns and content shipped against a defined cost per qualified lead.'],
    ['Compound', 'What works gets more budget. What does not gets cut, in writing.'],
  ],
  technology: [
    ['Discover', 'A paid discovery phase producing a scoped roadmap you own outright.'],
    ['Architect', 'Data model, integrations and infrastructure agreed before code.'],
    ['Build', 'Fortnightly demos, working software, no black box.'],
    ['Hand over', 'Your repositories, your infrastructure, documented.'],
  ],
  media: [
    ['Brief', 'What the content has to do, and for whom, before a camera comes out.'],
    ['Produce', 'Shot by our own team, on location, not assembled from stock.'],
    ['Edit', 'Cut for the platform it will live on, in the language it will be watched in.'],
    ['Distribute', 'Published with paid amplification behind whatever performs.'],
  ],
};

export default function LandingPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const page = getLandingPage(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) return <NotFoundPage />;

  const path = `/${page.slug}`;
  // A page carries LocalBusiness only when its city is the one this entity
  // actually occupies (Kochi for India, Dagenham / Greater London for the UK,
  // Ajman for the UAE). Asserting a physical presence elsewhere is what gets
  // Google Business Profiles suspended.
  const office = BUSINESS.address;
  const hasOffice =
    page.city === office.locality ||
    page.city === office.region ||
    (office.region || '').endsWith(` ${page.city}`);
  const heroImage = heroImageFor(page);
  const localImage = localImageFor(page);

  const schema = [
    organizationSchema(),
    hasOffice ? localBusinessSchema() : null,
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
        {/* The opening line carries the argument, so it gets the weight. The
            rest sits in two columns rather than a third stacked paragraph. */}
        <p className="lp-lead">{page.intro[0]}</p>
        {page.intro.length > 1 && (
          <div className="lp-intro-cols">
            {page.intro.slice(1).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}
      </section>

      <section className="lp-section lp-approach">
        <h2 className="lp-h2">How we work</h2>
        <ol className="lp-steps">
          {(APPROACH[page.category] || APPROACH.technology).map(([name, detail], i) => (
            <li key={name} className="lp-step">
              <span className="lp-step-n">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="lp-step-h">{name}</h3>
              <p>{detail}</p>
            </li>
          ))}
        </ol>
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

      {page.capabilities?.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">{page.capabilitiesHeading || 'What we deliver'}</h2>
          <div className="lp-cap-grid">
            {page.capabilities.map((cap) => (
              <article key={cap.name} className="lp-cap">
                <h3 className="lp-h3">{cap.name}</h3>
                <p>{cap.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {page.specs?.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">{page.specsHeading || 'Formats and delivery'}</h2>
          <div className="lp-table-scroll">
            <table className="lp-table">
              <thead>
                <tr>{page.specsColumns.map((c) => <th key={c}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {page.specs.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {page.useCases?.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">{page.useCasesHeading || 'Who this is for'}</h2>
          <div className="lp-grid">
            {page.useCases.map((u) => (
              <article key={u.name} className="lp-card">
                <h3 className="lp-h3">{u.name}</h3>
                <p>{u.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {page.engagements?.length > 0 && (
        <section className="lp-section">
          <h2 className="lp-h2">{page.engagementsHeading || 'How we work together'}</h2>
          <div className="lp-cap-grid">
            {page.engagements.map((e) => (
              <article key={e.name} className="lp-cap">
                <h3 className="lp-h3">{e.name}</h3>
                <p>{e.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {page.detail?.length > 0 && page.detail.map((block) => (
        <section className="lp-section" key={block.heading}>
          <h2 className="lp-h2">{block.heading}</h2>
          {block.body.map((para, i) => (
            <p key={i} className="lp-body">{para}</p>
          ))}
          {block.points?.length > 0 && (
            <div className="lp-cap-grid" style={{ marginTop: '22px' }}>
              {block.points.map((pt) => (
                <article key={pt.name} className="lp-cap">
                  <h3 className="lp-h3">{pt.name}</h3>
                  <p>{pt.desc}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="lp-section lp-local">
        <div className="lp-local-text">
          <h2 className="lp-h2">{page.localHeading}</h2>
          <p className="lp-pull">{page.localBody[0]}</p>
          {page.localBody.slice(1).map((paragraph, i) => (
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
          {page.faqs.map((faq) => (
            <details key={faq.question} className="lp-faq">
              {/* The answer stays in the DOM whether or not the item is open, so
                  crawlers read it and the FAQPage markup matches visible content. */}
              <summary>
                <h3 className="lp-h3">{faq.question}</h3>
              </summary>
              <p>{faq.answer}</p>
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

      {/* Same-city cluster, the service page this page sells, and the same
          service on the sister sites. Every landing page therefore links to and
          is linked from its city and its service, not only from a hand-picked
          related list. */}
      {(() => {
        const cityPages = sameCityPages(page, page.related || []);
        const services = solutionsForService(page.service);
        const sisters = services.length ? sisterServiceLinks(services[0].slug) : [];
        if (!cityPages.length && !services.length && !sisters.length) return null;
        return (
          <section className="lp-section">
            {cityPages.length > 0 && (
              <>
                <h2 className="lp-h2">More from Infynix in {page.city}</h2>
                <ul className="lp-related">
                  {cityPages.map((p) => (
                    <li key={p.slug}>
                      <Link to={`/${p.slug}`}>{p.h1}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {services.length > 0 && (
              <>
                <h2 className="lp-h2">The service behind this page</h2>
                <ul className="lp-related">
                  {services.map((svc) => (
                    <li key={svc.slug}>
                      <Link to={`/solutions/${svc.slug}`}>{svc.title}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {sisters.length > 0 && (
              <>
                <h2 className="lp-h2">{page.service} in our other markets</h2>
                <ul className="lp-related">
                  {sisters.map((sis) => (
                    <li key={sis.url}>
                      <a href={sis.url}>{services[0].title} in {sis.market}</a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        );
      })()}

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
