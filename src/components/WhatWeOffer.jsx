import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import {
  TrendingUp,
  Search,
  Share2,
  Workflow,
  Palette,
  Film,
  Box,
  Camera,
  Code2,
  Bot,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { SITE_URL } from '../seo/siteConfig';
import './WhatWeOffer.css';

// Register GSAP plugins safely in client environments
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Flip);
}

// Clean inline SVG Instagram Icon to ensure zero missing icon dependencies
const InstagramIcon = ({ size = 14, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'agency', label: 'Infynix Agency' },
  { id: 'media', label: 'Infynix Media' },
  { id: 'development', label: 'Infynix Development' },
];

const DEPARTMENT_CONTACTS = {
  agency: {
    title: 'Infynix Agency',
    label: 'Agency Direct Desk',
    phone: '+91 99959 11173',
    phoneDisplay: '+91 99959 11173',
    tel: 'tel:+919995911173',
    instagram: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
    instagramHandle: '@infynix_agency',
  },
  media: {
    title: 'Infynix Media',
    label: 'Media Studio Desk',
    phone: '+91 99959 11196',
    phoneDisplay: '+91 99959 11196',
    tel: 'tel:+919995911196',
    instagram: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
    instagramHandle: '@infynixmediahouse',
  },
};

const SERVICES = [
  // ── Infynix Agency ──
  {
    title: 'Performance Advertising & PPC',
    link: '/solutions/performance-advertising',
    division: 'Infynix Agency',
    categoryId: 'agency',
    description:
      'Data-driven Meta, Google & LinkedIn ad campaigns engineered for maximum ROAS and qualified lead capture.',
    hasDirectContact: true,
    phoneDisplay: '+91 99959 11173',
    phoneTel: 'tel:+919995911173',
    instagramUrl: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
    instagramHandle: '@infynix_agency',
    IconComponent: TrendingUp,
  },
  {
    title: 'SEO & Search Infrastructure',
    link: '/solutions/seo-services',
    division: 'Infynix Agency',
    categoryId: 'agency',
    description:
      'Technical search architectures, keyword supremacy, and fast prerendering to dominate organic search rankings.',
    hasDirectContact: true,
    phoneDisplay: '+91 99959 11173',
    phoneTel: 'tel:+919995911173',
    instagramUrl: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
    instagramHandle: '@infynix_agency',
    IconComponent: Search,
  },
  {
    title: 'Social Media & Brand Growth',
    link: '/solutions/social-media-management',
    division: 'Infynix Agency',
    categoryId: 'agency',
    description:
      'Full-funnel social content strategy, community acceleration, and organic reach scaling across platforms.',
    hasDirectContact: true,
    phoneDisplay: '+91 99959 11173',
    phoneTel: 'tel:+919995911173',
    instagramUrl: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
    instagramHandle: '@infynix_agency',
    IconComponent: Share2,
  },
  {
    title: 'Marketing Automation & CRM',
    link: '/solutions/marketing-automation-crm',
    division: 'Infynix Agency',
    categoryId: 'agency',
    description:
      'Automated nurture funnels, lead scoring, and CRM pipeline workflows that convert prospects on autopilot.',
    hasDirectContact: true,
    phoneDisplay: '+91 99959 11173',
    phoneTel: 'tel:+919995911173',
    instagramUrl: 'https://www.instagram.com/infynix_agency?stkn=OWZvbGllcDd3bmpq',
    instagramHandle: '@infynix_agency',
    IconComponent: Workflow,
  },

  // ── Infynix Media ──
  {
    title: 'UI/UX Design & Brand Styling',
    link: '/solutions/ui-ux-design',
    division: 'Infynix Media',
    categoryId: 'media',
    description:
      'Bespoke digital design systems, user-centric interfaces, and prestigious brand styling that commands authority.',
    hasDirectContact: true,
    phoneDisplay: '+91 99959 11196',
    phoneTel: 'tel:+919995911196',
    instagramUrl: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
    instagramHandle: '@infynixmediahouse',
    IconComponent: Palette,
  },
  {
    title: 'Cinematic Brand Films',
    link: '/solutions/brand-films-commercials',
    division: 'Infynix Media',
    categoryId: 'media',
    description:
      'High-end commercial films, corporate documentaries, and visual storytelling shot with cinematic excellence.',
    hasDirectContact: true,
    phoneDisplay: '+91 99959 11196',
    phoneTel: 'tel:+919995911196',
    instagramUrl: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
    instagramHandle: '@infynixmediahouse',
    IconComponent: Film,
  },
  {
    title: '3D Motion Graphics & Animation',
    link: '/solutions/motion-graphics-animation',
    division: 'Infynix Media',
    categoryId: 'media',
    description:
      'CGI product visualizations, 3D kinetic typography, and fluid visual animations that captivate audiences.',
    hasDirectContact: true,
    phoneDisplay: '+91 99959 11196',
    phoneTel: 'tel:+919995911196',
    instagramUrl: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
    instagramHandle: '@infynixmediahouse',
    IconComponent: Box,
  },
  {
    title: 'Studio Photography & Media',
    link: '/solutions/photography-videography',
    division: 'Infynix Media',
    categoryId: 'media',
    description:
      'High-resolution editorial photography, corporate portraiture, and commercial product visual assets.',
    hasDirectContact: true,
    phoneDisplay: '+91 99959 11196',
    phoneTel: 'tel:+919995911196',
    instagramUrl: 'https://www.instagram.com/infynixmediahouse?stkn=bDM5eHFydGVpZWQy',
    instagramHandle: '@infynixmediahouse',
    IconComponent: Camera,
  },

  // ── Infynix Development ──
  {
    title: 'Custom Web & App Engineering',
    link: '/solutions/custom-web-app-development',
    division: 'Infynix Development',
    categoryId: 'development',
    description:
      'Modern web platforms, enterprise React/Next.js architectures, and ultra-fast resilient cloud applications.',
    hasDirectContact: false,
    IconComponent: Code2,
  },
  {
    title: 'AI Agents & Business Workflows',
    link: '/solutions/ai-agents-automation',
    division: 'Infynix Development',
    categoryId: 'development',
    description:
      'Autonomous multi-agent systems, LLM integrations, and intelligent workflow automation built for enterprise efficiency.',
    hasDirectContact: false,
    IconComponent: Bot,
  },
  {
    title: 'Mobile App Development',
    link: '/solutions/mobile-app-development',
    division: 'Infynix Development',
    categoryId: 'development',
    description:
      'Native and cross-platform iOS & Android mobile applications engineered for high performance and smooth UX.',
    hasDirectContact: false,
    IconComponent: Smartphone,
  },
  {
    title: 'Cloud Infrastructure & Cyber Security',
    link: '/solutions/cloud-infrastructure-security',
    division: 'Infynix Development',
    categoryId: 'development',
    description:
      'Scalable multi-cloud environments, automated CI/CD pipelines, zero-trust network defenses, and threat monitoring.',
    hasDirectContact: false,
    IconComponent: ShieldCheck,
  },
];

// Rich JSON-LD ItemList + Service Schema covering UK, UAE, and India regions
const whatWeOfferSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Infynix Solutions Capabilities & Services',
  description:
    'Explore our connected ecosystem of digital marketing, creative media, and software engineering solutions.',
  itemListElement: SERVICES.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      '@id': `${SITE_URL}${service.link}#service`,
      name: service.title,
      description: service.description,
      url: `${SITE_URL}${service.link}`,
      provider: {
        '@type': 'Organization',
        name: 'Infynix Solutions',
        url: `${SITE_URL}/`,
      },
      areaServed: [
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'India' },
      ],
    },
  })),
};

export default function WhatWeOffer({ className = '', style = {} }) {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const accentLineRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaBtnRef = useRef(null);
  const contactBarRef = useRef(null);

  // GSAP ScrollTrigger Entrance Animation
  useGSAP(
    () => {
      if (typeof window === 'undefined') return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) {
        // Immediate display for users requesting reduced motion
        gsap.set(
          [
            '.what-we-offer-eyebrow',
            '.heading-word',
            '.what-we-offer-accent-line',
            '.what-we-offer-subtitle',
            '.what-we-offer-tabs-container',
            '.service-card-wrapper',
            '.what-we-offer-bottom-cta-wrap',
          ],
          { opacity: 1, y: 0, rotateX: 0 }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // 1. Eyebrow
      tl.fromTo(
        '.what-we-offer-eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );

      // 2. 3D Staggered Heading Words
      tl.fromTo(
        '.heading-word',
        { opacity: 0, y: 35, rotateX: 45, transformOrigin: '50% 100%' },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        },
        '-=0.3'
      );

      // 3. Green Gradient Accent Underline
      tl.fromTo(
        accentLineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

      // 4. Subtitle
      tl.fromTo(
        '.what-we-offer-subtitle',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );

      // 5. Category Tabs
      tl.fromTo(
        '.what-we-offer-tabs-container',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      );

      // 6. Cards Staggered Reveal
      tl.fromTo(
        '.service-card-wrapper.is-visible',
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power2.out',
        },
        '-=0.3'
      );

      // 7. Bottom CTA Button
      tl.fromTo(
        '.what-we-offer-bottom-cta-wrap',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      );
    },
    { scope: sectionRef }
  );

  // Handle Tab Switch with GSAP Flip
  const handleTabChange = (newTabId) => {
    if (newTabId === activeTab) return;

    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setActiveTab(newTabId);
      return;
    }

    // Capture layout state before filter
    const visibleCards = gridRef.current
      ? gridRef.current.querySelectorAll('.service-card-wrapper:not(.is-filtered-out)')
      : [];
    const state = Flip.getState(visibleCards);

    setActiveTab(newTabId);

    // Apply Flip animation right after state update
    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.45,
        ease: 'power2.out',
        scale: true,
        stagger: 0.03,
      });

      // Animate contact bar entrance if newly active
      if (contactBarRef.current && (newTabId === 'agency' || newTabId === 'media')) {
        gsap.fromTo(
          contactBarRef.current,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
        );
      }
    });
  };

  // Interactive 3D Tilt on Card Mousemove
  const handleCardMouseMove = (e, cardEl) => {
    if (!cardEl) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    gsap.to(cardEl, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    const specular = cardEl.querySelector('.card-specular-glare');
    if (specular) {
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      gsap.to(specular, {
        opacity: 1,
        background: `radial-gradient(circle at ${px}% ${py}%, rgba(0, 168, 128, 0.12) 0%, rgba(255, 255, 255, 0) 65%)`,
        duration: 0.2,
      });
    }
  };

  const handleCardMouseLeave = (cardEl) => {
    if (!cardEl) return;
    gsap.to(cardEl, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.45)',
      overwrite: 'auto',
    });

    const specular = cardEl.querySelector('.card-specular-glare');
    if (specular) {
      gsap.to(specular, { opacity: 0, duration: 0.35 });
    }
  };

  // Magnetic Cursor Tracking for Bottom CTA
  const handleMagneticMouseMove = (e) => {
    const btn = ctaBtnRef.current;
    if (!btn) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(btn, {
      x: x * 0.26,
      y: y * 0.26,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMagneticMouseLeave = () => {
    const btn = ctaBtnRef.current;
    if (!btn) return;
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.35)',
    });
  };

  const activeContact = DEPARTMENT_CONTACTS[activeTab] || null;

  return (
    <section
      id="what-we-offer"
      ref={sectionRef}
      className={`what-we-offer-section ${className}`}
      style={style}
      aria-label="What We Offer — Infynix Solutions Capabilities"
    >
      {/* Strict SEO: Output ItemList + Service Schema covering UK, UAE, India */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(whatWeOfferSchema)}
        </script>
      </Helmet>

      <div className="what-we-offer-container">
        {/* ── 1. SECTION HEADER ── */}
        <div className="what-we-offer-header" ref={headerRef}>
          <span className="what-we-offer-eyebrow">OUR CAPABILITIES</span>

          <h2 className="what-we-offer-title">
            <span className="heading-word">What</span>{' '}
            <span className="heading-word">We</span>{' '}
            <span className="heading-word">Offer</span>
          </h2>

          <div
            className="what-we-offer-accent-line"
            ref={accentLineRef}
            aria-hidden="true"
          />

          <p className="what-we-offer-subtitle">
            Explore our connected ecosystem of digital marketing, creative media, and
            software engineering solutions.
          </p>

          {/* ── 2. CATEGORY FILTER TABS ── */}
          <div className="what-we-offer-tabs-container">
            <div
              className="what-we-offer-tabs"
              role="tablist"
              aria-label="Filter service capabilities"
            >
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    className={`what-we-offer-tab-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Direct Department Contacts Bar (Agency / Media) */}
            {activeContact && (
              <div
                className="what-we-offer-contact-bar"
                ref={contactBarRef}
                role="region"
                aria-label={`${activeContact.title} Direct Contact`}
              >
                <div className="contact-bar-badge">
                  <span className="contact-bar-dot" />
                  <span className="contact-bar-label">{activeContact.label}:</span>
                </div>

                <div className="contact-bar-actions">
                  <a
                    href={activeContact.tel}
                    className="contact-bar-action-btn phone-action"
                    aria-label={`Call ${activeContact.title} desk at ${activeContact.phoneDisplay}`}
                  >
                    <Phone size={13} className="contact-btn-icon" />
                    <span>{activeContact.phoneDisplay}</span>
                  </a>

                  <a
                    href={activeContact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-bar-action-btn instagram-action"
                    aria-label={`Visit ${activeContact.title} on Instagram`}
                  >
                    <InstagramIcon size={13} className="contact-btn-icon" />
                    <span>{activeContact.instagramHandle}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── 3. RESPONSIVE 3D SERVICE GRID ── */}
        {/* Strict SEO: ALL 12 cards remain rendered in the DOM without display:none */}
        <div className="what-we-offer-grid" ref={gridRef}>
          {SERVICES.map((service, index) => {
            const isVisible =
              activeTab === 'all' || service.categoryId === activeTab;

            return (
              <div
                key={service.slug || service.title}
                className={`service-card-wrapper ${
                  isVisible ? 'is-visible' : 'is-filtered-out'
                }`}
                data-category={service.categoryId}
                aria-hidden={!isVisible}
              >
                <div
                  className="service-card"
                  ref={(el) => (cardsRef.current[index] = el)}
                  onClick={() => navigate(service.link)}
                  role="button"
                  tabIndex={isVisible ? 0 : -1}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate(service.link);
                    }
                  }}
                  onMouseMove={(e) =>
                    handleCardMouseMove(e, cardsRef.current[index])
                  }
                  onMouseLeave={() =>
                    handleCardMouseLeave(cardsRef.current[index])
                  }
                  aria-label={`${service.title} — ${service.division}`}
                >
                  {/* Soft light specular glare reflection element */}
                  <div className="card-specular-glare" aria-hidden="true" />

                  {/* Card Top Row: Gradient Circle Icon + Category Pill */}
                  <div className="card-top-row">
                    <div
                      className="card-icon-circle"
                      aria-hidden="true"
                    >
                      <service.IconComponent
                        size={22}
                        className="card-lucide-icon"
                      />
                    </div>
                    <span className="card-division-pill">
                      {service.division}
                    </span>
                  </div>

                  {/* Card Body: Title & 1-2 line description */}
                  <h3 className="card-service-title">{service.title}</h3>
                  <p className="card-service-desc">{service.description}</p>

                  {/* In-Card Direct Contact Chips (Agency & Media) */}
                  {service.hasDirectContact && (
                    <div
                      className="card-direct-contact-chips"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={service.phoneTel}
                        className="card-contact-chip"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Call ${service.title} at ${service.phoneDisplay}`}
                      >
                        <Phone size={12} className="chip-icon" />
                        <span>{service.phoneDisplay}</span>
                      </a>
                      <a
                        href={service.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-contact-chip"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Visit ${service.title} on Instagram`}
                      >
                        <InstagramIcon size={12} className="chip-icon" />
                        <span>{service.instagramHandle}</span>
                      </a>
                    </div>
                  )}

                  {/* Card Footer: Learn more link with slide arrow */}
                  <div className="card-footer-row">
                    <Link
                      to={service.link}
                      className="card-learn-more-link"
                      onClick={(e) => e.stopPropagation()}
                      tabIndex={isVisible ? 0 : -1}
                    >
                      <span>Learn more</span>
                      <ArrowRight size={15} className="learn-more-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 4. BOTTOM CTA WITH MAGNETIC TRACKING ── */}
        <div className="what-we-offer-bottom-cta-wrap">
          <Link
            to="/contact"
            ref={ctaBtnRef}
            className="what-we-offer-cta-button"
            onMouseMove={handleMagneticMouseMove}
            onMouseLeave={handleMagneticMouseLeave}
            aria-label="Get a Free Consultation"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight size={18} className="cta-button-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
