import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudiesData } from '../lib/contentData';
import SEOManager from './SEOManager';
import "./FutureOfRetail.css";

import salonImg from '../assets/salon.jpeg';
import tmsImg from '../assets/tms.jpeg';
import agencyImg from '../assets/case-study-agency.jpg';
import loopImg from '../assets/case-study-loop.jpg';
import aiImg from '../assets/serv.png';
import menucardImg from '../assets/menucard.jpeg';
import visitingImg from '../assets/visiting.jpeg';
import campaignImg from '../assets/case-study-campaign.jpg';

const GREEN = "#007A5E";
const LIGHT_BG = "#f4f8f6"; 
const TEXT_DARK = "#1F2937";

const caseImages = {
  'beyond-demands': { desktop: salonImg, mobile: null },
  'task-management-system': { desktop: tmsImg, mobile: null },
  'agency-os': { desktop: agencyImg, mobile: null },
  'loop-loyalty': { desktop: loopImg, mobile: null },
  'ai-surveillance': { desktop: aiImg, mobile: null },
  'salon-branding-menucard': { desktop: menucardImg, mobile: null },
  'restaurant-branding-menucard': { desktop: menucardImg, mobile: null },
  'corporate-brand-identity': { desktop: visitingImg, mobile: null },
  'performance-ad-campaign': { desktop: campaignImg, mobile: null }
};

function useReveal(dependency) {
  useEffect(() => {
    const els = document.querySelectorAll(".static-reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [dependency]);
}

const categories = ['All', 'Development', 'Media', 'Agency'];

const CaseStudiesPage = () => {
  const { slug } = useParams();
  const activeSlug = slug || caseStudiesData[0].slug;
  const targetStudy = caseStudiesData.find((item) => item.slug === activeSlug) || caseStudiesData[0];
  
  const [currentStudy, setCurrentStudy] = useState(targetStudy);
  const [selectedCategory, setSelectedCategory] = useState(targetStudy.category || 'All');
  const [slideState, setSlideState] = useState('idle');

  useReveal(currentStudy.slug);

  const animatingSlugRef = useRef(currentStudy.slug);

  useEffect(() => {
    if (targetStudy.slug !== animatingSlugRef.current) {
      animatingSlugRef.current = targetStudy.slug;
      setSlideState('sliding-out');

      const timer1 = setTimeout(() => {
        setCurrentStudy(targetStudy);
        if (targetStudy.category) setSelectedCategory(targetStudy.category);
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

  const filteredStudies = selectedCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(s => s.category === selectedCategory);

  const pageImages = caseImages[currentStudy.slug] || { desktop: salonImg, mobile: null };
  const techTags = currentStudy.technology ? currentStudy.technology.split(',').map(t => t.trim()) : [];

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
        title={slug
          ? `${currentStudy.client} Case Study | Infynix Solutions`
          : 'Case Studies | Software, Media & Growth Projects | Infynix Solutions'}
        description={slug
          ? `How Infynix delivered results for ${currentStudy.client}. ${currentStudy.objectives.slice(0, 110)}`
          : 'Case studies from Infynix Solutions across Development, Media, and Agency services delivered for clients worldwide.'}
        canonicalUrl={slug ? `/case-studies/${currentStudy.slug}` : '/case-studies'}
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

      {/* ── BACKGROUND SHAPE ── */}
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
        
        {/* ── SLIDE TRANSITION WRAPPER ── */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={transitionStyle}>

            {/* ── 1. HERO / HEADER CONTAINER ── */}
            <div className="case-page-section" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px', alignItems: 'center', marginBottom: '40px' }}>
              
              <div style={{ padding: '20px 20px 20px 0' }}>
                {/* Category Pill Tag */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(0, 122, 94, 0.1)', color: GREEN, borderRadius: '100px', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
                  <i className="fa-solid fa-layer-group"></i> {currentStudy.category || 'Development'}
                </div>

                {/* Title & Client Name */}
                <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, color: TEXT_DARK, margin: '0 0 15px', lineHeight: 1.15, textWrap: 'balance' }}>
                  <span style={{ fontFamily: 'var(--ix-font-display)' }}>{currentStudy.title}</span>
                </h1>

                <h3 style={{ fontSize: '1.2rem', color: GREEN, fontWeight: '700', marginBottom: '20px', fontFamily: 'var(--ix-font-serif)' }}>
                  {currentStudy.clientFull || currentStudy.client}
                </h3>

                <p style={{ color: '#555', fontSize: '0.98rem', lineHeight: '1.75', marginBottom: '30px' }}>
                  {currentStudy.description}
                </p>

                <Link to="/contact" className="nav-cta" style={{ textDecoration: 'none', padding: '14px 32px', background: GREEN, color: '#fff', borderRadius: '100px', display: 'inline-flex', fontWeight: 'bold', fontSize: '0.88rem', boxShadow: '0 6px 20px rgba(0, 122, 94, 0.25)' }}>
                  Book Discovery Session ↗
                </Link>
              </div>

              {/* Showcase Image */}
              <div style={{ position: 'relative', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {pageImages.desktop && (
                  <div style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '8px solid #1c1c1e',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.18)',
                    background: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxHeight: '360px',
                    maxWidth: '100%'
                  }}>
                    <img src={pageImages.desktop} alt={`${currentStudy.client} Interface`} style={{ maxHeight: '344px', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }} />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ── 2. CATEGORY TABS & CASE STUDY FILTER SELECTION ── */}
        <div style={{ marginTop: '20px', marginBottom: '50px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '24px' }}>
          
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  const firstInCat = cat === 'All' ? caseStudiesData[0] : caseStudiesData.find(s => s.category === cat);
                  if (firstInCat && firstInCat.slug !== currentStudy.slug) {
                    // Navigate if needed or update selection
                  }
                }}
                style={{
                  padding: '10px 24px',
                  borderRadius: '100px',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  background: selectedCategory === cat ? GREEN : '#fff',
                  color: selectedCategory === cat ? '#fff' : '#64748B',
                  boxShadow: selectedCategory === cat ? '0 4px 14px rgba(0, 122, 94, 0.3)' : '0 1px 3px rgba(0,0,0,0.05)',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat} {cat !== 'All' ? `(${caseStudiesData.filter(s => s.category === cat).length})` : ''}
              </button>
            ))}
          </div>

          {/* Case Studies Sub-navigation Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px dashed #CBD5E1', paddingTop: '20px' }}>
            {filteredStudies.map((item) => (
              <Link
                key={item.slug}
                to={`/case-studies/${item.slug}`}
                style={{
                  textDecoration: 'none',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  background: activeSlug === item.slug ? '#1F2937' : '#fff',
                  color: activeSlug === item.slug ? '#fff' : '#475569',
                  border: activeSlug === item.slug ? '1px solid #1F2937' : '1px solid #E2E8F0',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: activeSlug === item.slug ? GREEN : '#CBD5E1' }}></span>
                {item.client}
              </Link>
            ))}
          </div>
        </div>

        {/* ── SLIDE TRANSITION WRAPPER FOR DETAILS ── */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={transitionStyle}>

            {/* ── 3. BEFORE & AFTER DETAILED COMPARISON (Matching Screenshot Layout) ── */}
            {(currentStudy.before || currentStudy.after) && (
              <div className="case-page-section" style={{ margin: '20px 0 50px' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '1.5px', color: GREEN, textTransform: 'uppercase' }}>OPERATIONAL TRANSFORMATION</span>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: TEXT_DARK, margin: '6px 0 0', fontFamily: 'var(--ix-font-serif)' }}>
                    Before & After Comparison
                  </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                  
                  {/* BEFORE BOX */}
                  <div style={{
                    background: '#FAF9F6',
                    border: '1.5px solid #E5E7EB',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.02)'
                  }}>
                    <div style={{
                      borderBottom: '2px solid #D1D5DB',
                      paddingBottom: '12px',
                      marginBottom: '20px'
                    }}>
                      <span style={{
                        fontSize: '0.9rem',
                        fontWeight: '900',
                        letterSpacing: '2px',
                        color: '#6B7280',
                        textTransform: 'uppercase'
                      }}>
                        BEFORE
                      </span>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#4B5563', fontSize: '0.93rem', lineHeight: '1.8' }}>
                      {currentStudy.before?.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '12px' }}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* AFTER BOX */}
                  <div style={{
                    background: '#F0FDF4',
                    border: '2px solid #007A5E',
                    borderRadius: '16px',
                    padding: '32px',
                    boxShadow: '0 6px 24px rgba(0, 122, 94, 0.1)'
                  }}>
                    <div style={{
                      borderBottom: '2px solid #007A5E',
                      paddingBottom: '12px',
                      marginBottom: '20px'
                    }}>
                      <span style={{
                        fontSize: '0.9rem',
                        fontWeight: '900',
                        letterSpacing: '2px',
                        color: GREEN,
                        textTransform: 'uppercase'
                      }}>
                        AFTER
                      </span>
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: '#166534', fontSize: '0.93rem', lineHeight: '1.8' }}>
                      {currentStudy.after?.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '12px', fontWeight: '500' }}>{item}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            )}

            {/* ── 4. CLIENT QUOTE CARD (Matching Screenshot) ── */}
            {currentStudy.quote && (
              <div className="case-page-section" style={{
                background: '#F8FAFC',
                borderLeft: '5px solid #007A5E',
                border: '1px solid #E2E8F0',
                borderLeftWidth: '6px',
                borderRadius: '16px',
                padding: '35px 40px',
                margin: '40px 0 60px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                position: 'relative'
              }}>
                <p style={{
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: '#1F2937',
                  lineHeight: '1.75',
                  marginBottom: '18px',
                  fontWeight: '500'
                }}>
                  "{currentStudy.quote}"
                </p>
                <div style={{ fontSize: '0.95rem', fontWeight: '800', color: GREEN }}>
                  {currentStudy.quoteAuthor || currentStudy.client}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginTop: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  These outcomes reflect how the {currentStudy.client} team uses the system day to day.
                </div>
              </div>
            )}

            {/* ── 5. HIGHLIGHTS CARDS ROW ── */}
            <div className="case-page-section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
              <div style={{ border: '1px solid #eee', borderRadius: '16px', padding: '30px', background: '#fff', textAlign: 'center' }}>
                <div style={{ color: GREEN, fontSize: '2rem', marginBottom: '15px' }}>
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 10px', fontSize: '1.1rem', fontFamily: 'var(--ix-font-serif)' }}>Objectives</h3>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  {currentStudy.objectives}
                </p>
              </div>

              <div style={{ border: '1px solid #eee', borderRadius: '16px', padding: '30px', background: '#fff', textAlign: 'center' }}>
                <div style={{ color: GREEN, fontSize: '2rem', marginBottom: '15px' }}>
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 10px', fontSize: '1.1rem', fontFamily: 'var(--ix-font-serif)' }}>Strategy</h3>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  {currentStudy.strategy}
                </p>
              </div>

              <div style={{ border: '1px solid #eee', borderRadius: '16px', padding: '30px', background: '#fff', textAlign: 'center' }}>
                <div style={{ color: GREEN, fontSize: '2rem', marginBottom: '15px' }}>
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 10px', fontSize: '1.1rem', fontFamily: 'var(--ix-font-serif)' }}>Execution</h3>
                <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  {currentStudy.execution}
                </p>
              </div>
            </div>

            {/* ── 6. PILL TAGS GRID ── */}
            {techTags.length > 0 && (
              <div className="case-page-section" style={{ borderTop: '1px dashed #eee', paddingTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {techTags.map((tag) => (
                  <span key={tag} style={{ border: '1px solid #e0e6ed', color: '#555', padding: '8px 18px', borderRadius: '8px', fontSize: '0.8rem', background: '#fff', fontWeight: '500' }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* ── 7. MEASURABLE OUTCOME BOX ── */}
            <div className="case-page-section" style={{ background: LIGHT_BG, borderRadius: '24px', padding: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginTop: '60px' }}>
              <div>
                <h4 style={{ margin: '0 0 8px', fontSize: '0.9rem', fontWeight: 'bold', color: TEXT_DARK, letterSpacing: '1px', textTransform: 'uppercase' }}>MEASURABLE OUTCOME</h4>
                <p style={{ margin: 0, color: GREEN, fontWeight: '900', fontSize: '1.6rem', fontFamily: 'var(--ix-font-display)' }}>{currentStudy.results}</p>
              </div>
              <Link to="/contact" className="outline-btn" style={{ border: `1.5px solid ${GREEN}`, color: GREEN, padding: '12px 30px', fontSize: '0.85rem', fontWeight: 'bold', textDecoration: 'none', background: '#fff', borderRadius: '100px' }}>
                Book Discovery Session ↗
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudiesPage;