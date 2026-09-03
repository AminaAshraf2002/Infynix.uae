import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudiesData } from '../lib/contentData';
import SEOManager from './SEOManager';
import "./FutureOfRetail.css";

const GREEN = "#007A5E";
const LIGHT_BG = "#f4f8f6"; 
const TEXT_DARK = "#1F2937";

const caseImages = {
  'task-management-system': {
    desktop: '/tms_dashboard.png',
    mobile: '/tms_app.png'
  },
  'beyond-demands': {
    desktop: '/salon_dashboard.png',
    mobile: null
  }
};

function useReveal(dependency) {
  useEffect(() => {
    // Only target elements that are static (like the filter bar) to avoid React state-swap conflicts
    const els = document.querySelectorAll(".static-reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [dependency]);
}

const CaseStudiesPage = () => {
  const { slug } = useParams();
  const activeSlug = slug || 'task-management-system';
  const targetStudy = caseStudiesData.find((item) => item.slug === activeSlug) || caseStudiesData[0];
  
  // Custom states to animate slide transitions on content switch
  const [currentStudy, setCurrentStudy] = useState(targetStudy);
  const [slideState, setSlideState] = useState('idle'); // 'idle', 'sliding-out', 'sliding-in', 'entering'

  useReveal(currentStudy.slug);

  // Track the slug the animation is currently running for in a ref instead of
  // depending on `currentStudy` state directly. Previously this effect depended
  // on [targetStudy, currentStudy], but the effect itself calls setCurrentStudy()
  // inside timer1 — that state change re-triggered the effect mid-animation,
  // and React's cleanup ran before the re-run, clearing timer2/timer3 before
  // they fired. That left slideState stuck on 'sliding-in' (opacity: 0) forever,
  // i.e. the new case study content was invisible until a full page refresh
  // reset everything. Depending only on targetStudy.slug avoids that loop.
  const animatingSlugRef = useRef(currentStudy.slug);

  useEffect(() => {
    if (targetStudy.slug !== animatingSlugRef.current) {
      animatingSlugRef.current = targetStudy.slug;
      setSlideState('sliding-out');

      const timer1 = setTimeout(() => {
        setCurrentStudy(targetStudy);
        setSlideState('sliding-in');
      }, 300);

      const timer2 = setTimeout(() => {
        setSlideState('entering');
      }, 350);

      const timer3 = setTimeout(() => {
        setSlideState('idle');
      }, 650);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [targetStudy]);

  // Resolve the current page images based on the slug
  const pageImages = caseImages[currentStudy.slug] || caseImages['task-management-system'];
  const techTags = currentStudy.technology ? currentStudy.technology.split(',').map(t => t.trim()) : [];

  // Determine transition styles based on slide state
  let transitionStyle = { transform: 'none', opacity: 1, transition: 'none', width: '100%' };
  if (slideState === 'sliding-out') {
    transitionStyle = { transform: 'translateX(-80px)', opacity: 0, transition: 'transform 0.3s ease-in, opacity 0.3s ease-in', width: '100%' };
  } else if (slideState === 'sliding-in') {
    transitionStyle = { transform: 'translateX(80px)', opacity: 0, transition: 'none', width: '100%' };
  } else if (slideState === 'entering') {
    transitionStyle = { transform: 'translateX(0)', opacity: 1, transition: 'transform 0.3s ease-out, opacity 0.3s ease-out', width: '100%' };
  }

  return (
    <div style={{ background: '#fff', color: '#333', fontFamily: 'var(--ix-font-body)', position: 'relative', overflow: 'hidden', paddingBottom: '100px', minHeight: '100vh' }}>
      <SEOManager
        title={`${currentStudy.client} Systems Integration Case Study | Infynix`}
        description={`Learn how Infynix optimized operations for ${currentStudy.client}. Dynamic strategy: ${currentStudy.objectives.slice(0, 120)}`}
        canonicalUrl={`https://infynix.com/case-studies/${currentStudy.slug}`}
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          'headline': `${currentStudy.client} Case Study`,
          'description': currentStudy.challenge,
          'author': { '@type': 'Organization', 'name': 'Infynix' }
        }}
      />

      {/* ── BACKGROUND FAINT VERTICAL DASHED GRIDLINES ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', left: 'clamp(20px, 4vw, 60px)', top: 0, bottom: 0, borderLeft: '1.5px dashed rgba(0,0,0,0.11)' }} />
        <div style={{ position: 'absolute', right: 'clamp(20px, 4vw, 60px)', top: 0, bottom: 0, borderRight: '1.5px dashed rgba(0,0,0,0.11)' }} />
      </div>

      {/* ── EXACT CHRONOTEK BACKGROUND SHAPE (As shown in mockup image) ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '65%',
        height: '560px',
        background: LIGHT_BG,
        borderBottomRightRadius: '160px',
        borderTopRightRadius: '160px',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '120px 20px 20px', position: 'relative', zIndex: 1 }}>
        
        {/* ── SLIDE TRANSITION WRAPPER CLIP BOUNDARY ── */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={transitionStyle}>

            {/* ── 1. HERO / HEADER CONTAINER ── */}
            <div className="case-page-section" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '60px' }} data-aos="fade-up">
              
              <div style={{ padding: '40px 40px 40px 0' }}>
                {/* Tool icons row */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                  {['fa-gem', 'fa-code', 'fa-network-wired', 'fa-desktop'].map((icon, i) => (
                    <div key={i} style={{ width: '36px', height: '36px', border: '1px solid #ddd', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', fontSize: '0.85rem', color: '#666' }}>
                      <i className={`fa-solid ${icon}`}></i>
                    </div>
                  ))}
                </div>

                {/* Title & Tagline */}
                <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: TEXT_DARK, margin: '0 0 20px', lineHeight: 1.15, textWrap: 'balance' }}>
                  <span style={{ fontFamily: 'var(--ix-font-display)' }}>{currentStudy.client}</span>{' '}
                  <span style={{ color: GREEN, fontFamily: 'var(--ix-font-serif)', fontWeight: 600, fontStyle: 'italic', display: 'inline-block' }}>by Infynix</span>
                </h1>

                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '30px' }}>
                  {currentStudy.title}
                </p>

                <Link to="/contact" className="nav-cta" style={{ textDecoration: 'none', padding: '12px 30px', background: GREEN, color: '#fff', borderRadius: '100px', display: 'inline-flex', fontWeight: 'bold', fontSize: '0.85rem' }}>
                  Book Discovery Session ↗
                </Link>
              </div>

              {/* Overlapping perspective screens (Desktop + Mobile) */}
              <div style={{ position: 'relative', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {pageImages.desktop && (
                  <div style={{
                    position: 'absolute',
                    width: '420px',
                    height: '270px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '8px solid #1c1c1e',
                    borderBottomWidth: '14px',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.18)',
                    transform: pageImages.mobile ? 'translateX(-30px) translateY(-10px)' : 'translateX(0)',
                    zIndex: 1
                  }}>
                    <img src={pageImages.desktop} alt={`${currentStudy.client} Desktop Interface`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  </div>
                )}
                {pageImages.mobile && (
                  <div style={{
                    position: 'absolute',
                    width: '140px',
                    height: '290px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '6px solid #1c1c1e',
                    boxShadow: '0 25px 55px rgba(0,0,0,0.25)',
                    transform: pageImages.desktop ? 'translateX(160px) translateY(30px)' : 'translateX(0)',
                    zIndex: 2
                  }}>
                    <img src={pageImages.mobile} alt={`${currentStudy.client} Mobile App`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ── 2. FILTER BAR (BELOW HERO SECTION) ── */}
        <div role="navigation" aria-label="Case Studies Menu" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px', marginBottom: '40px', borderBottom: '1px solid #e0e6ed', paddingBottom: '20px' }}>
          {caseStudiesData.map((item) => (
            <Link
              key={item.slug}
              to={`/case-studies/${item.slug}`}
              style={{
                textDecoration: 'none',
                padding: '10px 22px',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                background: activeSlug === item.slug ? GREEN : '#f3f4f6',
                color: activeSlug === item.slug ? '#fff' : '#555',
                border: '1px solid #ddd',
                transition: 'all 0.3s ease'
              }}
            >
              {item.client} Case Study
            </Link>
          ))}
        </div>

        {/* ── SLIDE TRANSITION WRAPPER CLIP FOR BELOW SECTIONS ── */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={transitionStyle}>

            {/* ── 3. FEATURES HEADER SECTION ── */}
            <div className="case-page-section" style={{ textAlign: 'center', padding: '40px 0 60px', position: 'relative' }} data-aos="fade-up">
              <div style={{ fontSize: '1.5rem', color: '#aaa', marginBottom: '20px' }}>
                <i className="fa-solid fa-arrow-down-long"></i>
              </div>
              
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '40px' }}>
                {/* Droplet icon on top */}
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: `2px solid ${GREEN}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GREEN, margin: '0 auto 10px', background: '#fff' }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: '0.85rem' }}></i>
                </div>
                
                {/* Giant background watermark */}
                <span style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: 'clamp(3rem, 10vw, 6rem)',
                  fontWeight: 900,
                  color: 'rgba(0,0,0,0.02)',
                  letterSpacing: '5px',
                  margin: 0,
                  pointerEvents: 'none',
                  textTransform: 'uppercase'
                }}>
                  Overview
                </span>

                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: TEXT_DARK, margin: 0, position: 'relative', zIndex: 1, fontFamily: 'var(--ix-font-serif)' }}>
                  Case Overview
                </h2>
              </div>

              <p style={{ maxWidth: '800px', margin: '0 auto 50px', color: '#666', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {currentStudy.challenge}
              </p>
            </div>

            {/* ── 4. HIGHLIGHTS CARDS ROW ── */}
            <div className="case-page-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '80px' }}>
              <div data-aos="fade-up" data-aos-delay="100" style={{ border: '1px solid #eee', borderRadius: '16px', padding: '30px', background: '#fff', textAlign: 'center' }}>
                <div style={{ color: GREEN, fontSize: '2rem', marginBottom: '15px' }}>
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 10px', fontSize: '1.1rem', fontFamily: 'var(--ix-font-serif)' }}>Objectives</h3>
                <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                  {currentStudy.objectives}
                </p>
              </div>
              <div style={{ border: '1px solid #eee', borderRadius: '16px', padding: '30px', background: '#fff', textAlign: 'center' }}>
                <div style={{ color: GREEN, fontSize: '2rem', marginBottom: '15px' }}>
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 10px', fontSize: '1.1rem', fontFamily: 'var(--ix-font-serif)' }}>Strategy</h3>
                <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                  {currentStudy.strategy}
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" style={{ border: '1px solid #eee', borderRadius: '16px', padding: '30px', background: '#fff', textAlign: 'center' }}>
                <div style={{ color: GREEN, fontSize: '2rem', marginBottom: '15px' }}>
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 10px', fontSize: '1.1rem', fontFamily: 'var(--ix-font-serif)' }}>Execution</h3>
                <p style={{ color: '#555', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                  {currentStudy.execution}
                </p>
              </div>
            </div>

            {/* ── 5. PILL TAGS GRID ── */}
            <div className="case-page-section" style={{ borderTop: '1px dashed #eee', paddingTop: '60px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }} data-aos="fade-up">
              {techTags.map((tag) => (
                <span key={tag} style={{ border: '1px solid #e0e6ed', color: '#555', padding: '8px 18px', borderRadius: '8px', fontSize: '0.8rem', background: '#fff', fontWeight: '500' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Results Summary Box */}
            <div className="case-page-section" style={{ background: LIGHT_BG, borderRadius: '24px', padding: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginTop: '80px' }} data-aos="fade-up">
              <div>
                <h4 style={{ margin: '0 0 8px', fontSize: '1rem', fontWeight: 'bold', color: TEXT_DARK, fontFamily: 'var(--ix-font-serif)' }}>MEASURABLE OUTCOME</h4>
                <p style={{ margin: 0, color: GREEN, fontWeight: '900', fontSize: '1.8rem', fontFamily: 'var(--ix-font-display)' }}>{currentStudy.results}</p>
              </div>
              <Link to="/contact" className="outline-btn" style={{ border: `1.5px solid ${GREEN}`, color: GREEN, padding: '12px 30px', fontSize: '0.85rem', fontWeight: 'bold', textDecoration: 'none', background: 'transparent' }}>
                SEE MORE →
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudiesPage;