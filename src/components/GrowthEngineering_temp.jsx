import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEOManager from './SEOManager';
import './InfynixDesign.css';

/* â”€â”€ DATA â”€â”€ */
const stages = [
  { n: '01', title: 'Discover', body: 'Identify bottlenecks in your customer acquisition, data latency, and engineering flows.' },
  { n: '02', title: 'Diagnose', body: 'Audit system logs, conversion paths, and technical gaps across software systems.' },
  { n: '03', title: 'Engineer', body: 'Blueprint dynamic integrations, speed optimizations, and CRM databases.' },
  { n: '04', title: 'Build',    body: 'Write clean, scalable, production-ready code with continuous integration.' },
  { n: '05', title: 'Deploy',   body: 'Seamlessly push integrations complete with GA4 and lead attribution analytics.' },
  { n: '06', title: 'Optimize', body: 'Tune load speeds, run conversion rate optimization audits, and fix user drops.' },
  { n: '07', title: 'Scale',    body: 'Introduce self-evolving AI automation models to handle high volumes.' },
];

const marqueeItems = [
  'Discover', 'Diagnose', 'Engineer', 'Build', 'Deploy', 'Optimize', 'Scale',
  'Discover', 'Diagnose', 'Engineer', 'Build', 'Deploy', 'Optimize', 'Scale',
];

const stats = [
  { num: '7Ã—',   label: 'Stage Method' },
  { num: '3Ã—',   label: 'Avg. Revenue Lift' },
  { num: '98%',  label: 'Client Retention' },
  { num: '150+', label: 'Systems Built' },
];

/* â”€â”€ HOOKS â”€â”€ */
function useIxReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.ix-reveal, .ix-reveal-left, .ix-reveal-right, .ix-reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('ix-visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* â”€â”€ ACCORDION â”€â”€ */
function Accordion({ items, dark }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          className={dark ? 'ix-accordion-item ix-accordion-item--dark' : 'ix-accordion-item'}
        >
          <button
            className="ix-accordion-btn"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className={dark ? 'ix-accordion-q ix-accordion-q--dark' : 'ix-accordion-q'}>
              {item.q}
            </span>
            <span className={`ix-accordion-icon${dark ? ' ix-accordion-icon--dark' : ''}${open === i ? ' open' : ''}`}>+</span>
          </button>
          <div className={`ix-accordion-body${open === i ? ' open' : ''}`}>
            <p className={dark ? 'ix-accordion-a ix-accordion-a--dark' : 'ix-accordion-a'}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* â”€â”€ ARROW ICON â”€â”€ */
const Arrow = () => (
  <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   MAIN COMPONENT
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const GrowthEngineering = () => {
  useIxReveal();

  const [activeWhyTab, setActiveWhyTab] = useState(0);

  const whyTabsData = [
    {
      title: "Fragmented Data Silos",
      heading: "Unify your business architecture",
      body: "When systems don't talk, teams are left guessing. We engineer unified data pipelines that bring your CRM, website, and marketing analytics into one single source of truth.",
      mockupIcon: "🔄",
      mockupTitle: "Data Architecture",
      mockupStats: [
        { label: "Data latency", val: "0.2s" },
        { label: "Integration errors", val: "None" }
      ]
    },
    {
      title: "Manual Process Bottlenecks",
      heading: "Automate routine operations",
      body: "Repetitive tasks drain your team's most valuable resource: time. We deploy custom business automation frameworks and AI agents that handle operations seamlessly in the background.",
      mockupIcon: "⚡",
      mockupTitle: "Process Automation",
      mockupStats: [
        { label: "Manual input", val: "-85%" },
        { label: "Throughput", val: "+300%" }
      ]
    },
    {
      title: "Lack of Real-Time Telemetry",
      heading: "See your growth in real-time",
      body: "Standard reporting looks backward. We build live telemetry dashboards that capture customer friction points the second they happen, allowing for instant conversion rate optimization.",
      mockupIcon: "📊",
      mockupTitle: "Live Telemetry",
      mockupStats: [
        { label: "Data drops", val: "Identified" },
        { label: "Resolution", val: "Instant" }
      ]
    },
    {
      title: "Unscalable Architectures",
      heading: "Engineered to scale effortlessly",
      body: "Systems that work for 100 users break at 10,000. We design dynamic, load-balancing architectures and serverless functions that naturally scale alongside your growth trajectory.",
      mockupIcon: "🚀",
      mockupTitle: "Scale Engine",
      mockupStats: [
        { label: "System Load", val: "Optimal" },
        { label: "Capacity", val: "Infinite" }
      ]
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Growth Engineering',
    'provider': { '@type': 'Organization', 'name': 'Infynix', 'url': 'https://infynix.com' },
    'description': 'Category page describing the Infynix Growth Engineering Method: Attract, Engage, Convert, Optimize, Scale.',
    'serviceType': 'Growth Engineering',
  };

  return (
    <>
      <SEOManager
        title="Growth Engineering Company | Infynix"
        description="Businesses don't struggle because they lack ambition. They struggle because technology, marketing, operations and data operate independently. Infynix engineers these into one system."
        canonicalUrl="https://infynix.com/growth-engineering"
        schemaData={schema}
      />

      {/* â•â• HERO â•â• */}
      <section style={{
        background: 'var(--ix-black)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(80px, 12vw, 160px) clamp(20px, 8vw, 120px) clamp(48px, 7vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated blobs */}
        <div className="ix-blob-container ix-noise">
          <div className="ix-blob ix-blob-1" />
          <div className="ix-blob ix-blob-2" />
          <div className="ix-blob ix-blob-3" />
        </div>

        {/* Grid lines */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px' }}>
          <span className="ix-eyebrow" data-aos-delay="100" data-aos="fade-up">The Discipline</span>

          <h1 style={{
            fontFamily: 'var(--ix-font-display)',
            fontWeight: 800,
            fontSize: 'clamp(3.5rem, 9vw, 9rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: 'var(--ix-white)',
            marginBottom: '2.5rem',
          }}>
            <span data-aos-delay="100" data-aos="fade-up" style={{ display: 'block' }}>Growth</span>
            <span data-aos-delay="200" data-aos="fade-up" style={{ display: 'block', color: 'var(--ix-lime)' }}>Engineering</span>
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'flex-end' }}>
            <p data-aos-delay="300" data-aos="fade-up" style={{
              fontFamily: 'var(--ix-font-body)',
              fontSize: 'clamp(0.92rem, 1.3vw, 1.1rem)',
              color: 'var(--ix-muted)',
              lineHeight: 1.7,
              maxWidth: '460px',
              flex: '0 0 auto',
            }}>
              Unifying technology, marketing, operations and data into one intelligent system that attracts, engages, converts, and scales.
            </p>

            <div data-aos-delay="400" data-aos="fade-up" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="ix-btn-primary">
                Book Discovery Call <Arrow />
              </Link>
              <a href="#method" className="ix-btn-outline">View Method</a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: 'clamp(20px, 8vw, 120px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.35,
        }}>
          <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, transparent, var(--ix-lime))' }} />
          <span style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className="ix-marquee-wrapper">
        <div className="ix-marquee-track">
          {marqueeItems.map((item, i) => (
            <span className="ix-marquee-item" key={i}>
              {item}
              <span className="ix-marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ══ WHY SECTION (ZENDESK-STYLE) ══ */}
      <section className="ix-section" style={{ background: '#fff' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ 
            background: 'var(--dark)', 
            borderRadius: '24px', 
            padding: 'clamp(40px, 6vw, 80px)', 
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}>
            {/* Header part */}
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 data-aos="fade-up" style={{
                fontFamily: 'var(--ix-font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                lineHeight: 1.12,
                color: '#fff',
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}>
                Why Businesses <em style={{ fontFamily: 'var(--ix-font-serif)', fontWeight: 400, fontStyle: 'italic' }}>Stop Growing</em>
              </h2>
              <p data-aos-delay="100" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Businesses don't struggle because they lack ambition. They struggle because technology, marketing, customer experience, operations and data often operate independently.
              </p>
              <div data-aos-delay="200" data-aos="fade-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link to="/contact" style={{ 
                  background: 'var(--ix-lime)', 
                  color: '#000', 
                  padding: '14px 28px', 
                  borderRadius: '100px', 
                  textDecoration: 'none', 
                  fontWeight: 600,
                  fontFamily: 'var(--ix-font-body)',
                  transition: 'background 0.3s'
                }}>Start the Conversation</Link>
                <Link to="/about" style={{ 
                  border: '1px solid rgba(255,255,255,0.3)', 
                  color: '#fff', 
                  padding: '14px 28px', 
                  borderRadius: '100px', 
                  textDecoration: 'none', 
                  fontWeight: 500,
                  fontFamily: 'var(--ix-font-body)',
                  transition: 'background 0.3s'
                }}>Learn more</Link>
              </div>
            </div>

            {/* Tabs grid layout */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: 'clamp(2rem, 4vw, 4rem)',
              marginTop: '1rem'
            }}>
              {/* Left Column: Tabs */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {whyTabsData.map((tab, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveWhyTab(idx)}
                    style={{
                      background: activeWhyTab === idx ? 'rgba(0,0,0,0.15)' : 'transparent',
                      border: 'none',
                      borderLeft: activeWhyTab === idx ? '3px solid var(--ix-lime)' : '3px solid transparent',
                      padding: '1.5rem',
                      textAlign: 'left',
                      color: '#fff',
                      cursor: 'pointer',
                      fontFamily: 'var(--ix-font-body)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      borderBottom: idx !== whyTabsData.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none'
                    }}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Right Column: Tab Content */}
              <div style={{ 
                background: 'rgba(0,0,0,0.15)', 
                borderRadius: '16px', 
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '380px',
                position: 'relative'
              }}>
                <div key={activeWhyTab} style={{ 
                  background: '#fff', 
                  borderRadius: '16px', 
                  padding: '2rem', 
                  color: '#000',
                  width: '100%',
                  maxWidth: '460px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  position: 'relative',
                  zIndex: 2,
                  animation: 'ix-fade-up 0.4s ease-out forwards'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(0,122,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                      {whyTabsData[activeWhyTab].mockupIcon}
                    </div>
                    <h3 style={{ margin: 0, fontFamily: 'var(--ix-font-display)', fontWeight: 700, fontSize: '1.2rem' }}>{whyTabsData[activeWhyTab].mockupTitle}</h3>
                  </div>
                  
                  <div style={{ padding: '1.2rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
                    <p style={{ margin: 0, fontFamily: 'var(--ix-font-body)', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                      {whyTabsData[activeWhyTab].body}
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {whyTabsData[activeWhyTab].mockupStats.map((stat, sIdx) => (
                      <div key={sIdx}>
                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.3rem', fontFamily: 'var(--ix-font-body)' }}>{stat.label}</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{stat.val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div key={`heading-${activeWhyTab}`} style={{ marginTop: '2.5rem', textAlign: 'center', maxWidth: '500px', animation: 'ix-fade-up 0.5s ease-out forwards' }}>
                  <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1.05rem', color: '#fff', lineHeight: 1.5, margin: 0 }}>
                    {whyTabsData[activeWhyTab].heading}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â•â• FULL-BLEED IMAGE â•â• */}
      <section style={{ height: 'clamp(300px, 45vw, 560px)', overflow: 'hidden', position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80"
          alt="Integrated growth structures"
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.85) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: 'clamp(20px, 8vw, 120px)' }}>
          <blockquote style={{
            fontFamily: 'var(--ix-font-serif)',
            fontSize: 'clamp(1.3rem, 2.5vw, 2.2rem)',
            fontStyle: 'italic',
            color: '#fff',
            maxWidth: 680,
            lineHeight: 1.45,
          }}>
            "Growth Engineering is the discipline of designing, building and continuously improving interconnected business systems that create sustainable growth."
            <cite style={{ display: 'block', fontFamily: 'var(--ix-font-body)', fontStyle: 'normal', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ix-lime)', marginTop: '1.2rem' }}>â€” Infynix Growth Engineers</cite>
          </blockquote>
        </div>
      </section>

      {/* â•â• COST OF DISCONNECTION â•â• */}
      <section className="ix-section" style={{ background: 'var(--ix-dark)', position: 'relative', overflow: 'hidden' }}>
        <div className="ix-blob-container">
          <div className="ix-blob ix-blob-1" style={{ opacity: 0.08 }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span className="ix-eyebrow" data-aos="fade-up" style={{ textAlign: 'center' }}>The Problem</span>
          <h2 data-aos-delay="100" data-aos="fade-up" style={{
            fontFamily: 'var(--ix-font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.6rem)',
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}>
            The Cost of<br />
            <em style={{ color: 'var(--ix-lime)', fontFamily: 'var(--ix-font-serif)', fontWeight: 400 }}>Disconnected Systems</em>
          </h2>
          <p data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 700, margin: '0 auto 2.5rem' }}>
            Fragmentations in client checkout pages, manual inventory updates, and delayed sales lead alerts. We solve these friction points by designing custom Growth Systems frameworks that focus on resilient system metrics and secure data routing, moving far beyond standard cloud configurations.
          </p>
          <Link to="/contact" className="ix-btn-primary" data-aos-delay="300" data-aos="fade-up" style={{ textDecoration: 'none' }}>
            Book a Consultation <Arrow />
          </Link>
        </div>
      </section>

      {/* â•â• 7-STAGE METHOD â•â• */}
      <section id="method" className="ix-section" style={{ background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="ix-lime-bar" />
            <h2 data-aos="fade-up" style={{
              fontFamily: 'var(--ix-font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              color: '#0a0a0a',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}>
              The Infynix Growth<br />
              <em style={{ fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontWeight: 400 }}>Engineering Method</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 20, overflow: 'hidden' }}>
            {stages.map((stage, i) => (
              <div
                key={stage.n}
                className={`ix-d${Math.min(i + 1, 7)} data-aos="fade-up"`}
                style={{
                  background: '#fff',
                  padding: '2.2rem',
                  transition: 'background 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--ix-black)'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                onMouseEnterCapture={e => {
                  const title = e.currentTarget.querySelector('.ge-title');
                  const body = e.currentTarget.querySelector('.ge-body');
                  const num = e.currentTarget.querySelector('.ge-num');
                  if (title) title.style.color = '#fff';
                  if (body) body.style.color = 'rgba(255,255,255,0.5)';
                  if (num) num.style.color = 'var(--ix-lime)';
                }}
                onMouseLeaveCapture={e => {
                  const title = e.currentTarget.querySelector('.ge-title');
                  const body = e.currentTarget.querySelector('.ge-body');
                  const num = e.currentTarget.querySelector('.ge-num');
                  if (title) title.style.color = '#0a0a0a';
                  if (body) body.style.color = '#666';
                  if (num) num.style.color = 'rgba(0,0,0,0.18)';
                }}
              >
                <div className="ge-num" style={{ fontFamily: 'var(--ix-font-display)', fontSize: '3rem', fontWeight: 800, color: 'rgba(0,0,0,0.08)', lineHeight: 1, marginBottom: '1rem', transition: 'color 0.25s' }}>{stage.n}</div>
                <h3 className="ge-title" style={{ fontFamily: 'var(--ix-font-display)', fontWeight: 700, fontSize: '1.05rem', color: '#0a0a0a', marginBottom: '0.6rem', transition: 'color 0.25s' }}>{stage.title} Stage</h3>
                <p className="ge-body" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.88rem', color: '#666', lineHeight: 1.7, transition: 'color 0.25s' }}>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â• CONNECT FORM â•â• */}
      <section id="download" className="ix-section" style={{ background: 'var(--ix-black)', position: 'relative', overflow: 'hidden' }}>
        <div className="ix-blob-container">
          <div className="ix-blob ix-blob-2" style={{ opacity: 0.1 }} />
        </div>
        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="ix-eyebrow" data-aos="fade-up">Work With Us</span>
          <h2 data-aos-delay="100" data-aos="fade-up" style={{
            fontFamily: 'var(--ix-font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: '#fff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Connect With<br />
            <em style={{ color: 'var(--ix-lime)', fontFamily: 'var(--ix-font-serif)', fontStyle: 'italic', fontWeight: 400 }}>Our Engineers</em>
          </h2>
          <p data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Speak directly with our senior technologists. We will perform a thorough technical audit of your landing pages, database latency, and lead sync workflows.
          </p>

          <div className="ix-glass" data-aos-delay="300" data-aos="fade-up" style={{ padding: '2.5rem', borderRadius: 20 }}>
            <h3 style={{ fontFamily: 'var(--ix-font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '2rem' }}>Schedule a Session</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2rem' }}>
              {[
                { label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                { label: 'Work Email', type: 'email', placeholder: 'jane@company.com' },
                { label: 'Phone Number', type: 'tel', placeholder: '+1 555 000 0000' },
                { label: 'Company Name', type: 'text', placeholder: 'Acme Corp' },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label style={{ display: 'block', fontFamily: 'var(--ix-font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 10,
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontFamily: 'var(--ix-font-body)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              ))}
            </div>
            <button className="ix-btn-primary" style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }}>
              Book Discovery Session <Arrow />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowthEngineering;

