import React, { useState } from 'react';

const tabs = [
  { id: 'web_development', label: 'Website Development' },
  { id: 'mobile_app_development', label: 'Mobile App Development' },
  { id: 'performance_marketing', label: 'Performance Marketing' },
  { id: 'seo_services', label: 'SEO Services' },
  { id: 'artificial_intelligence', label: 'Artificial Intelligence' },
  { id: 'business_automation', label: 'Business Automation' },
  { id: 'crm_erp_development', label: 'CRM & ERP Development' },
  { id: 'ui_ux_design', label: 'UI/UX Design' },
];

const tabContent = {
  ai_surveillance: {
    title: 'AI & AI Surveillance',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.55 }}>
        <polygon points="32,8 56,26 32,44 8,26" stroke="#007A5E" strokeWidth="2" />
        <circle cx="32" cy="26" r="10" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Advanced computer vision pipelines for real-time video analytics.',
      'Object tracking, secure threat detection, and anomaly profiling.',
      'Edge computing deployments (NVIDIA Jetson, Google Coral) for privacy-first local processing.',
      'Custom predictive surveillance models trained on industrial activity patterns.',
      'Integration with legacy video management software and modern cloud notifications.',
    ],
    subSections: [],
  },
  growth_engineering: {
    title: 'Growth Engineering',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.55 }}>
        <rect x="8" y="16" width="12" height="32" fill="#007A5E" />
        <rect x="26" y="24" width="12" height="24" fill="#007A5E" />
        <rect x="44" y="8" width="12" height="40" fill="#007A5E" />
      </svg>
    ),
    items: [
      'High-performance backend growth stacks built for conversion rate optimization (CRO).',
      'Custom API endpoints and webhooks engineered for rapid experimentation.',
      'Data-driven personalization models adjusting content dynamically based on user intent.',
      'Comprehensive performance audits targeting page load speed and user funnel drop-offs.',
      'Pre-built integrations with top analytical tools and experimentation engines.',
    ],
    subSections: [],
  },
  growth_marketing: {
    title: 'Growth Marketing System',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.55 }}>
        <ellipse cx="32" cy="16" rx="20" ry="8" stroke="#007A5E" strokeWidth="2" />
        <ellipse cx="32" cy="32" rx="15" ry="6" stroke="#A7D600" strokeWidth="2" />
        <ellipse cx="32" cy="48" rx="8" ry="4" stroke="#007A5E" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Customer Data Platform (CDP) setup using Segment, Amplitude, or custom pipelines.',
      'Automated multi-channel messaging loops across email, push notifications, and SMS.',
      'Machine learning segmentation models to isolate and target high-value users.',
      'Real-time customer journey mapping and cohort retention analytics.',
      'Data dashboards tracking acquisition cost (CAC), lifetime value (LTV), and churn rates.',
    ],
    subSections: [],
  },
  growth_systems: {
    title: 'Growth Systems',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.55 }}>
        <circle cx="32" cy="32" r="18" stroke="#007A5E" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="32" cy="32" r="8" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Event-driven microservices architectures built for resilience and zero downtime.',
      'Kafka, RabbitMQ, and cloud-native message queuing solutions.',
      'Zero-trust service mesh setups ensuring encrypted and secure intra-service calls.',
      'Automated container orchestration via Kubernetes and serverless backends.',
      'Advanced Site Reliability Engineering (SRE) practices to monitor service health.',
    ],
    subSections: [],
  },
  app_development: {
    title: 'App Development',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.55 }}>
        <rect x="20" y="8" width="24" height="48" rx="4" stroke="#007A5E" strokeWidth="2" />
        <rect x="24" y="14" width="16" height="30" rx="1" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Native iOS (Swift) and Android (Kotlin) mobile applications.',
      'Cross-platform applications developed with React Native and Flutter.',
      'Offline-first databases and synchronization systems ensuring fluid usability.',
      'Optimized memory usage, hardware acceleration, and smooth animations.',
      'Secure payment processing, OAuth authentication, and deep-linking setups.',
    ],
    subSections: [],
  },
  crm_development: {
    title: 'CRM Software Development',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.55 }}>
        <polygon points="32,10 50,25 42,50 22,50 14,25" stroke="#007A5E" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="32" cy="30" r="6" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'Bespoke CRM architectures built from scratch or integrated into existing platforms.',
      'Automated pipeline tracking, lead scoring, and automated task assignments.',
      'Custom client portals, ticketing systems, and customer support desks.',
      'Syncing communication data across email, messaging, and sales dashboards.',
      'Advanced analytics on sales performance, rep activities, and deal velocity.',
    ],
    subSections: [],
  },
  web_development: {
    title: 'Web Development',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.55 }}>
        <rect x="10" y="14" width="44" height="36" rx="3" stroke="#007A5E" strokeWidth="2" />
        <line x1="10" y1="24" x2="54" y2="24" stroke="#A7D600" strokeWidth="2" />
      </svg>
    ),
    items: [
      'High-performance web applications using React, Next.js, and modern frameworks.',
      'Fully responsive layouts built with semantic HTML and optimized stylesheets.',
      'Search engine friendly server-side rendering (SSR) and static site generation (SSG).',
      'Secure CMS integrations, headless commerce setups, and inventory systems.',
      'Strict adherence to accessibility guidelines (WCAG) and security compliance.',
    ],
    subSections: [],
  },
  digital_marketing: {
    title: 'Digital Marketing & SEO',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56, opacity: 0.55 }}>
        <circle cx="32" cy="32" r="22" stroke="#007A5E" strokeWidth="2" />
        <circle cx="32" cy="32" r="14" stroke="#A7D600" strokeWidth="2" />
        <line x1="32" y1="4" x2="32" y2="60" stroke="#007A5E" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
    items: [
      'Comprehensive search engine optimization (SEO) audits, keyword mapping, and strategy.',
      'High-authority backlink building and programmatic content architecture.',
      'Paid advertising strategy (PPC) on Google, LinkedIn, Meta, and partner networks.',
      'Brand positioning guides, copywriting, and structured messaging frameworks.',
      'Comprehensive monthly analytics reporting mapping keyword rankings and conversion metrics.',
    ],
    subSections: [],
  },
};

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState('ai_surveillance');
  const content = tabContent[activeTab];

  return (
    <div className="wwd-page">

      {/* ── SECTION 1: HERO ── */}
      <section className="wwd-s1">
        <div className="wwd-s1-inner">
          <p className="wwd-eyebrow">What we do</p>
          <h1 className="wwd-h1">
            <em>Architecting</em> Growth Systems
          </h1>
          <p className="wwd-sub">
            We build high-performance software architectures and automated optimization pipelines. For your enterprise, this translates to rapid experimentation, data-driven personalization, and resilient platforms engineered for scalable growth.
          </p>
 
          <div className="wwd-pillars">
            <div className="wwd-pillar">
              <h3>High-Velocity Experimentation</h3>
              <p>Engineered environments for rapid A/B testing and performance iteration at scale.</p>
            </div>
            <div className="wwd-pillar">
              <h3>Data-Driven Architectures</h3>
              <p>Robust analytics pipelines and CDP integrations to fuel real-time decision making.</p>
            </div>
            <div className="wwd-pillar">
              <h3>Conversion Rate Engineering</h3>
              <p>Optimizing page performance, user funnels, and dynamic personalization for maximum ROI.</p>
            </div>
            <div className="wwd-pillar">
              <h3>Scalable Growth Systems</h3>
              <p>Resilient microservices and automated workflows built to handle exponential user acquisition.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── SECTION 2: DARK BANNER ── */}
      <section className="wwd-s2">
        <h2 className="wwd-s2-h2">
          Engineered to Accelerate<br />
          your Business<br />
          <em>Growth</em>
        </h2>
        <p className="wwd-s2-sub">Delivering high-performance backend stacks, conversion-optimized funnels, and scalable architectures that align with your strategic targets.</p>
        <div className="wwd-s2-line"></div>
      </section>

      {/* ── SECTION 3: ENGAGEMENT MODEL ── */}
      <section className="wwd-s3">
        <div className="wwd-s3-line-top"></div>
        <h2 className="wwd-s3-h2">Our Engagement Model</h2>
        <div className="wwd-cards">
          {/* Connecting dashed flow lines */}
          <svg className="wwd-flow-lines" viewBox="0 0 1200 220" preserveAspectRatio="none">
            {/* Horizontal trunk */}
            <path d="M 120 80 L 1080 80" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1" strokeDasharray="4,4" fill="none" />
            
            {/* Center vertical trunk going up */}
            <path d="M 600 0 L 600 80" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1" strokeDasharray="4,4" fill="none" />
            
            {/* Branch 1 (Discover - low card) */}
            <path d="M 120 80 L 120 160" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1" strokeDasharray="4,4" fill="none" />
            
            {/* Branch 2 (Design - high card) */}
            <path d="M 360 80 L 360 120" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1" strokeDasharray="4,4" fill="none" />
            
            {/* Branch 3 (Develop - low card) */}
            <path d="M 600 80 L 600 160" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1" strokeDasharray="4,4" fill="none" />
            
            {/* Branch 4 (Support - high card) */}
            <path d="M 840 80 L 840 120" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1" strokeDasharray="4,4" fill="none" />
            
            {/* Branch 5 (Innovation - low card) */}
            <path d="M 1080 80 L 1080 160" stroke="rgba(0, 0, 0, 0.15)" strokeWidth="1" strokeDasharray="4,4" fill="none" />
          </svg>

          {[
            { title: 'Analyze', desc: 'We partner with engineering and product leaders to identify system constraints and align technical requirements with business goals.' },
            { title: 'Architect', desc: 'We design robust, highly resilient software blueprints and data pipelines optimized for enterprise-grade performance.' },
            { title: 'Deploy', desc: 'Our senior developers integrate seamlessly with your core teams, implementing production-ready code with complete transparency.' },
            { title: 'Optimize', desc: 'We provide continuous Site Reliability Engineering (SRE), serverless monitoring, and performance tuning to ensure zero-downtime scalability.' },
            { title: 'Scale', desc: 'We implement self-evolving AI models and automated optimization loops to ensure your platforms grow ahead of consumer demand.' },
          ].map((card, i) => (
            <div
              key={card.title}
              className="wwd-card"
              style={{ marginBottom: [60, 100, 60, 100, 60][i] }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: CORE PRACTICE COMPETENCIES ── */}
      <section className="wwd-s4">
        <h2 className="wwd-s4-h2">
          Core Practice <em>Competencies</em>
        </h2>

        {/* Tabs */}
        <div className="wwd-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`wwd-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="wwd-panel" key={activeTab}>
          <div className="wwd-comp-icon">
            {content.icon || (
              <svg viewBox="0 0 64 64" fill="none" style={{ width: 56, height: 56, opacity: 0.5 }}>
                <circle cx="32" cy="32" r="20" stroke="#006EC0" strokeWidth="3" />
                <path d="M22 32h20M32 22v20" stroke="#006EC0" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
            <div className="wwd-comp-title">{content.title}</div>
          </div>

          <div className="wwd-comp-body">
            <ul className="wwd-list">
              {content.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {content.subSections && content.subSections.map((sub) => (
              <div className="wwd-sub-section" key={sub.heading}>
                <h4 className="wwd-sub-heading">{sub.heading}</h4>
                <ul className="wwd-list">
                  {sub.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a href="#contact" className="wwd-know-more">
            Know More
            <svg viewBox="0 0 14 14" fill="none" style={{ width: 12, height: 12 }}>
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
