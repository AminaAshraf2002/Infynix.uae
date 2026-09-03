import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEOManager from './SEOManager';
import EngineeringMethod from './EngineeringMethod';
import './InfynixDesign.css';

/* â”€â”€ DATA â”€â”€ */
const stages = [
  { n: '01', title: 'Discover', body: 'Identify bottlenecks in your customer acquisition, data latency, and engineering flows.' },
  { n: '02', title: 'Diagnose', body: 'Audit system logs, conversion paths, and technical gaps across software systems.' },
  { n: '03', title: 'Engineer', body: 'Blueprint dynamic integrations, speed optimizations, and CRM databases.' },
  { n: '04', title: 'Build', body: 'Write clean, scalable, production-ready code with continuous integration.' },
  { n: '05', title: 'Deploy', body: 'Seamlessly push integrations complete with GA4 and lead attribution analytics.' },
  { n: '06', title: 'Optimize', body: 'Tune load speeds, run conversion rate optimization audits, and fix user drops.' },
  { n: '07', title: 'Scale', body: 'Introduce self-evolving AI automation models to handle high volumes.' },
];

const marqueeItems = [
  'Discover', 'Diagnose', 'Engineer', 'Build', 'Deploy', 'Optimize', 'Scale',
  'Discover', 'Diagnose', 'Engineer', 'Build', 'Deploy', 'Optimize', 'Scale',
];

const stats = [
  { num: '7x', label: 'Stage Method' },
  { num: '3x', label: 'Avg. Revenue Lift' },
  { num: '98%', label: 'Client Retention' },
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

/* ── ARROW ICON ── */
const Arrow = () => (
  <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


/* ════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════════════ */
const GrowthEngineering = () => {
  useIxReveal();

  const [activeWhyTab, setActiveWhyTab] = useState(0);

  const whyTabsData = [
    {
      title: "Technology",
      mockupIcon: "fa-solid fa-diagram-project",
      body: "Websites, software and tools operate in isolation, forcing teams into manual work instead of growth.",
      heading: "When technology operates as one connected system, decisions get faster and execution gets sharper."
    },
    {
      title: "Marketing",
      mockupIcon: "fa-solid fa-bullhorn",
      body: "Campaigns run disconnected from the rest of the business, wasting budget and diluting the message before it reaches the right customer.",
      heading: "Marketing engineered as a system compounds results instead of resetting every month."
    },
    {
      title: "Customer Experience",
      mockupIcon: "fa-solid fa-comments",
      body: "When customer experience isn't connected across every touchpoint, prospects fall through the cracks instead of converting.",
      heading: "A connected customer experience turns every interaction into a reason to stay, not leave."
    },
    {
      title: "Operations",
      mockupIcon: "fa-solid fa-gears",
      body: "Manual processes and scattered tools slow down delivery and cap how much the business can take on.",
      heading: "Automated, connected operations let you scale without adding complexity or headcount."
    },
    {
      title: "Data",
      mockupIcon: "fa-solid fa-database",
      body: "When data lives in separate systems, decisions get made on guesses instead of evidence.",
      heading: "Unified data turns every decision — marketing, product, operations — into an informed one."
    }
  ];

  const [settled, setSettled] = useState(false);
  const [whyScrollProgress, setWhyScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const whyRef = useRef(null);
  const TRANSITION = "all 0.75s cubic-bezier(0.4, 0, 0.2, 1)";
  const TRANSITION_SLOW = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
  const GREEN = "#007A5E";

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSettled(-rect.top > 80);
      }
      if (whyRef.current) {
        const rect = whyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // The wrapper is 150vh tall. 
        // The sticky container is 100vh tall.
        // Therefore, we have 50vh of "pinned" scrolling time.
        const scrollDistance = windowHeight * 0.5;

        if (rect.top > 0) {
          setWhyScrollProgress(0);
        } else if (rect.top <= -scrollDistance) {
          setWhyScrollProgress(1);
        } else {
          const progress = -rect.top / scrollDistance;
          setWhyScrollProgress(progress);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      {/* ══ HERO SECTION ══ */}
      <section ref={sectionRef} style={{ position: "relative", height: "calc(100vh + 100px)" }}>
        <div style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#fff",
        }}>
          <div
            className="ge-hero-text-1" 
            style={{
            opacity: settled ? 0 : 1,
            transform: settled ? "translateY(-30px)" : "translateY(0px)",
            transition: TRANSITION,
            zIndex: 4,
            pointerEvents: "none",
          }}>
            <h1 className="ge-hero-h1" style={{
              fontFamily: '"Montserrat", Arial, sans-serif',
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 4.9vw, 4.7rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "#4d4c4c",
              whiteSpace: "nowrap",
            }}>
              Growth{" "}
              <em style={{
                fontFamily: "var(--ix-font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: GREEN,
              }}>
                Engineering
              </em>
            </h1>

            <h2 className="ge-hero-h2" style={{
              fontFamily: '"Montserrat", Arial, sans-serif',
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 3vw, 3.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "#353434",
            }}>
              Attract → Engage → Convert
              <br />
              <em style={{
                fontFamily: "var(--ix-font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#353434",
                marginTop: "10px",
                display: 'inline-block'
              }}>
                Optimize & Scale Systems
              </em>
            </h2>

            <p className="ge-hero-p" style={{ fontFamily: "var(--ix-font-body)", fontSize: "1.05rem", color: "#666", lineHeight: 1.6 }}>
              Unifying technology, marketing, operations and data into one intelligent system.
            </p>
          </div>

          <div
            className={`ge-hero-image ${settled ? 'settled' : ''}`}
            style={{
            transition: TRANSITION_SLOW,
            zIndex: 2,
          }}>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
              alt="Global tech network"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center 20%",
                display: "block",
              }}
            />
          </div>

          <div
            className="ge-hero-text-2"
            style={{
            opacity: settled ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
            zIndex: 3,
            pointerEvents: settled ? "auto" : "none",
          }}>
            <span style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: '1.5rem' }}>The Discipline</span>
            <h2 style={{
              fontFamily: "var(--ix-font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.2vw, 3.4rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "#424242",
              marginBottom: "0.8rem",
            }}>
              Engineering Intelligent
              <br />
              <em style={{
                fontFamily: "var(--ix-font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#424242",
              }}>
                Growth Blueprints
              </em>
            </h2>
            <p style={{ fontFamily: "var(--ix-font-body)", fontSize: "1.05rem", color: "#666", lineHeight: 1.6 }}>Engineering intelligent business systems that attract, engage, convert, and scale.</p>
          </div>

          <div style={{
            position: "absolute",
            left: "8vw",
            right: "8vw",
            top: settled ? "calc(66vh + 5vh)" : "calc(105vh)",
            opacity: settled ? 1 : 0,
            transform: settled ? "translateY(0px)" : "translateY(10px)",
            transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
            pointerEvents: settled ? "auto" : "none",
            zIndex: 3,
            marginTop: "40px",
          }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', background: '#f5f5f5', borderRadius: 16, padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.95rem', color: '#555', lineHeight: 1.6, flex: '1 1 500px', margin: 0 }}>
                Infynix engineers high-performance tech stacks, CRM dashboards, and AI agents that support long-term business growth.
              </p>
              <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1.5rem', background: '#fff', color: '#111', textDecoration: 'none', borderRadius: 30, border: '1px solid #ddd', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                Book a Discovery Call <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LIME QUOTE SECTION ══ */}
      <section className="ix-section ge-lime-section" data-aos="fade-up" style={{ position: "relative", background: 'rgb(198, 255, 109)', textAlign: 'left', padding: 'clamp(60px, 8vw, 100px) 20px', overflow: 'hidden' }}>
        <div className="ge-lime-quote-container" style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span style={{ position: 'absolute', top: -30, left: '-10px', fontSize: '5rem', color: 'var(--ix-lime)', lineHeight: 1, fontFamily: 'var(--font-display)', opacity: 0.8 }}>"</span>
          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: '#000000ff', lineHeight: 1.4, margin: '2rem 0' }}>
            Growth isn't achieved through isolated services. It is built through connected systems, strategic thinking, and continuous improvement. Technology × AI × Performance × Automation = Sustainable Business Growth.
          </blockquote>
          <p style={{ fontFamily: 'var(--ix-font-body)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0, 0, 0, 0.9)', marginTop: '3rem' }}>
            Infynix Growth Engineers
          </p>
          <span style={{ position: 'absolute', bottom: -10, right: '40px', fontSize: '5rem', color: 'var(--ix-lime)', lineHeight: 1, fontFamily: "'Playfair Display', serif", opacity: 0.8 }}>"</span>
        </div>
      </section>



      {/* ══ WHY SECTION (ZENDESK-STYLE PINNED SCROLL) ══ */}
      <div ref={whyRef} style={{ position: 'relative', height: '200vh' }}>
        <div style={{
          position: 'sticky',
          top: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '90px'
        }}>
          <section className="ix-section" style={{ padding: '0', display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div style={{
              width: whyScrollProgress === 1 ? '100%' : `calc(100% - ${40 * (1 - whyScrollProgress)}px)`,
              maxWidth: whyScrollProgress === 0 ? '1100px' : (whyScrollProgress === 1 ? '100%' : `calc(1100px + (100vw - 1100px) * ${whyScrollProgress})`),
              background: 'linear-gradient(160deg, #005A46 0%, #007A5E 55%, #004d3a 100%)',
              borderRadius: `${32 * (1 - whyScrollProgress)}px`,
              padding: 'clamp(24px, 3vw, 40px) clamp(20px, 4vw, 40px) clamp(24px, 3vw, 40px)',
              margin: '0 auto',
              boxShadow: whyScrollProgress < 1 ? '0 20px 40px rgba(0,0,0,0.2)' : 'none'
            }}>

              {/* Header part */}
              <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: '2.5rem' }}>
                <h2 data-aos="fade-up" style={{
                  fontFamily: '"Montserrat", Arial, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(2.1rem, 3.7vw, 2.3rem)',
                  lineHeight: 1.16,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}>
                  Why Businesses <em style={{
                    fontStyle: 'normal',
                    fontWeight: 600
                  }}>Stop Growing</em>
                </h2>
                <p data-aos-delay="100" data-aos="fade-up" style={{ fontFamily: '"Montserrat", Arial, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                  Businesses don't struggle because they lack ambition. They struggle because technology, marketing, customer experience, operations and data often operate independently.
                </p>
                <div data-aos-delay="200" data-aos="fade-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <Link to="/contact" style={{
                    background: 'rgb(167, 214, 0)',
                    color: '#000',
                    padding: '14px 28px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontFamily: '"Montserrat", Arial, sans-serif',
                    transition: 'background 0.3s'
                  }}>Start the Conversation</Link>
                  <Link to="/about" style={{
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: '#fff',
                    padding: '14px 28px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontFamily: '"Montserrat", Arial, sans-serif',
                    transition: 'background 0.3s'
                  }}>Learn more</Link>
                </div>
              </div>

              {/* Tabs grid container */}
              <div style={{
                background: 'rgba(0,0,0,0.15)',
                borderRadius: '24px',
                padding: 'clamp(0.8rem, 1.5vw, 1.5rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'clamp(1.5rem, 3vw, 3rem)',
                border: '1px solid rgba(255,255,255,0.05)',
                maxWidth: '800px',
                margin: '0 auto'
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
                        padding: '1rem',
                        textAlign: 'left',
                        color: '#fff',
                        cursor: 'pointer',
                        fontFamily: '"Montserrat", Arial, sans-serif',
                        fontSize: '0.95rem',
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
                  padding: 'clamp(1.2rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '320px',
                  position: 'relative'
                }}>
                  <div key={activeWhyTab} style={{
                    background: '#1b231c',
                    borderRadius: '24px',
                    padding: '8px',
                    width: '100%',
                    maxWidth: '240px',
                    height: '340px',
                    boxShadow: '0 0 60px rgba(167, 214, 0, 0.25)',
                    position: 'relative',
                    zIndex: 2,
                    animation: 'ix-fade-up 0.4s ease-out forwards',
                    fontFamily: '"Montserrat", Arial, sans-serif'
                  }}>
                    {/* Floating Icon */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '-16px',
                      transform: 'translateY(-50%)',
                      background: '#000',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      zIndex: 10
                    }}>
                      <i className={whyTabsData[activeWhyTab].mockupIcon}></i>
                    </div>

                    {/* Phone Screen */}
                    <div style={{
                      background: '#fff',
                      borderRadius: '16px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden'
                    }}>
                      <div style={{ padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* User Bubble */}
                        <div style={{ alignSelf: 'flex-end', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', maxWidth: '85%' }}>
                          <div style={{ fontSize: '0.65rem', color: '#555', fontWeight: 600 }}>Client</div>
                          <div style={{ background: '#f3f4f6', color: '#111', padding: '12px 14px', borderRadius: '16px 16px 4px 16px', fontSize: '0.8rem', lineHeight: 1.4 }}>
                            We're struggling with <span style={{ background: 'rgba(167, 214, 0, 0.3)', padding: '2px 4px', borderRadius: '4px' }}>{whyTabsData[activeWhyTab].title.toLowerCase()}</span>. Can you help?
                          </div>
                        </div>

                        {/* AI Agent Bubble */}
                        <div style={{ alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', maxWidth: '90%' }}>
                          <div style={{ fontSize: '0.65rem', color: '#555', fontWeight: 600 }}>Infynix AI</div>
                          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', color: '#111', padding: '12px 14px', borderRadius: '16px 16px 16px 4px', fontSize: '0.8rem', lineHeight: 1.5 }}>
                            {whyTabsData[activeWhyTab].body}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div key={`heading-${activeWhyTab}`} style={{ marginTop: '2.5rem', textAlign: 'center', maxWidth: '500px', animation: 'ix-fade-up 0.5s ease-out forwards' }}>
                    <p style={{ fontFamily: '"Montserrat", Arial, sans-serif', fontSize: '1.05rem', color: '#fff', lineHeight: 1.5, margin: 0 }}>
                      {whyTabsData[activeWhyTab].heading}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>



      {/* ══ 7-STAGE METHOD ══ */}
      <section id="method" className="ix-section" style={{ background: '#fff', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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

      {/* ══ FULL-BLEED IMAGE COMBINED ══ */}
      <section style={{ minHeight: '85vh', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', background: 'rgb(59, 34, 93)' }}>

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4rem', padding: '10vh 5vw', minHeight: '70vh' }}>

          {/* Top Left Content */}
          <div data-aos="fade-up" style={{ alignSelf: 'flex-start', maxWidth: '600px' }}>
            <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>
              <strong style={{ color: '#fff' }}>The Cost of Disconnected Systems:</strong> fragmentations in <br />client checkout
              pages, manual inventory updates, and <br /> delayed sales lead alerts. We solve these friction points <br /> by designing custom Growth Systems frameworks that <br /> focus on resilient system metrics and secure data routing,<br /> moving far beyond standard cloud configurations.
            </p>
          </div>

          {/* Bottom Right Content */}
          <div className="-right" data-aos="fade-up" style={{ alignSelf: 'flex-end', maxWidth: '700px', textAlign: 'left' }}>
            <blockquote style={{
              fontFamily: 'var(--ix-font-serif)',
              fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
              fontStyle: 'italic',
              color: '#fff',
              lineHeight: 1.4,
              margin: 0
            }}>
              "Growth Engineering is the discipline of <br />designing, building and continuously <br />improving interconnected business <br />systems that create sustainable growth."
            </blockquote>
          </div>

        </div>
      </section>

      {/* ══ CONNECT FORM (WHITE LAYOUT) ══ */}
      <section id="download" className="ix-section" style={{ background: '#fafafa', position: 'relative', overflow: 'hidden', padding: 'clamp(60px, 8vw, 100px) 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 data-aos-delay="100" data-aos="fade-up" style={{
            fontFamily: 'var(--ix-font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 2.5rem)',
            color: '#111',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Connect With Us
          </h2>
          <p data-aos-delay="200" data-aos="fade-up" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1rem', color: '#666', lineHeight: 1.6, marginBottom: '3.5rem', maxWidth: '800px' }}>
            Speak directly with our senior technologists. We will perform a thorough technical audit of your landing pages, database latency, and lead sync workflows.
          </p>

          <div data-aos-delay="300" data-aos="fade-up" style={{ padding: '0' }}>
            <h3 style={{ fontFamily: 'var(--ix-font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#111', marginBottom: '2.5rem' }}>Schedule a Session</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem 4rem' }}>
              {[
                { label: 'Name', type: 'text' },
                { label: 'Work Email', type: 'email' },
                { label: 'Phone Number', type: 'tel' },
                { label: 'Company Name', type: 'text' },
              ].map(({ label, type }) => (
                <div key={label}>
                  <input
                    type={type}
                    placeholder={label}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #ddd',
                      padding: '0.5rem 0',
                      color: '#333',
                      fontFamily: 'var(--ix-font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderBottom = '1px solid #111'}
                    onBlur={(e) => e.target.style.borderBottom = '1px solid #ddd'}
                  />
                </div>
              ))}
            </div>
            <button style={{
              marginTop: '4rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.85rem 1.8rem',
              background: '#fff',
              color: '#111',
              borderRadius: '30px',
              border: '1px solid #ddd',
              fontWeight: 600,
              fontSize: '0.95rem',
              fontFamily: 'var(--ix-font-body)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
              onMouseLeave={(e) => e.target.style.background = '#fff'}
            >
              Book Discovery Session <Arrow />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowthEngineering;

