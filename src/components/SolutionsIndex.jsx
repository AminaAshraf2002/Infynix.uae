import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import capImg1 from '../assets/mark.png';
import capImg2 from '../assets/media.png';
import capImg3 from '../assets/marketing.png';
import heroBg from '../assets/hero_bg_solutions_index.jpg';

// Marquee Card (adapted for dark theme)
const MarqueeCard = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      style={{
        flex: '0 0 auto',
        width: '280px',
        height: '90px',
        background: isHovered ? '#1a1a1a' : '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
        padding: '0 20px',
        textAlign: 'center',
        border: '1px solid #333'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ccc', fontSize: '1rem', fontFamily: 'var(--ix-font-body)' }}>
          View Service <ArrowRight size={16} />
        </div>
      ) : (
        <span style={{ fontSize: '1.05rem', fontWeight: 500, color: '#fff', fontFamily: 'var(--ix-font-body)' }}>
          {title}
        </span>
      )}
    </div>
  );
};

const SolutionsIndex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const layers = [
    {
      num: "01",
      title: "Infynix Agency",
      desc: "Performance marketing, built to put the finished system in front of the right people.",
      img: capImg1,
      slug: "infynix-agency",
      services: [
        "Performance Advertising", "SEO & Content Marketing", "Social Media Management",
        "Marketing Automation & CRM", "Analytics & Reporting", "Brand Strategy & Positioning"
      ]
    },
    {
      num: "02",
      title: "Infynix Media",
      desc: "Brand narratives and visual communication that command attention.",
      img: capImg2,
      slug: "infynix-media",
      services: [
        "Photography & Videography", "Short-Form & Social Content", "Brand Films & Commercials",
        "AI-Assisted Production", "Motion Graphics & Animation", "Podcast & Audio Production"
      ]
    },
    {
      num: "03",
      title: "Infynix Growth Solutions",
      desc: "The technical foundation and systems that power scalable business growth.",
      img: capImg3,
      slug: "infynix-growth-solutions",
      services: [
        "Custom Web & App Development", "AI-Native Product Development", "Marketing & Business Automation",
        "IoT & Connected Systems", "Data Platforms & Dashboards", "API & Systems Integration"
      ]
    }
  ];

  const allSubCategories = [
    "Performance Advertising", "SEO & Content Marketing", "Social Media Management",
    "Marketing Automation & CRM", "Analytics & Reporting", "Brand Strategy & Positioning",
    "Photography & Videography", "Short-Form & Social Content", "Brand Films & Commercials",
    "AI-Assisted Production", "Motion Graphics & Animation", "Podcast & Audio Production",
    "Custom Web & App Development", "AI-Native Product Development", "Marketing & Business Automation",
    "IoT & Connected Systems", "Data Platforms & Dashboards", "API & Systems Integration"
  ];

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'var(--ix-font-body)' }}>
      <style dangerouslySetInnerHTML={{__html: `
        .service-card-left:hover .service-bg-img {
          transform: scale(1.05);
        }
        .solutions-index-hero {
          height: 90vh;
        }
        .solutions-index-h1 {
          font-size: clamp(3rem, 5vw, 5.5rem);
        }
        @media (max-width: 768px) {
          .solutions-index-hero {
            height: 75vh !important;
            background-position: top center !important;
          }
          .solutions-index-h1 {
            font-size: clamp(2.5rem, 8vw, 3.5rem) !important;
          }
        }
      `}} />
      
      {/* 1. HERO SECTION */}
      <section className="solutions-index-hero" style={{ 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'flex-end',
        padding: '5%',
        paddingBottom: '10%',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)' }}></div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', width: '100%' }}>
          <h1 className="solutions-index-h1" data-aos="fade-up" style={{ fontWeight: 400, margin: 0, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
            Expertise you <br />
            <span style={{ color: '#aaa' }}>can trust</span>
          </h1>
        </div>
      </section>

      {/* 2. INTRO TEXT */}
      <section style={{ padding: '120px 5%', borderBottom: '1px dashed #333' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 data-aos="fade-up" data-aos-delay="100" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 400, margin: 0, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#fff' }}>
            Crafting experiences shaping brands <br /> accelerated growth.
          </h2>
        </div>
      </section>

      {/* 3. SERVICES LIST (3 LAYERS) */}
      <section style={{ padding: '60px 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {layers.map((layer, idx) => (
            <div key={idx} className="solutions-layer-row" data-aos="fade-up" data-aos-delay={idx * 150} style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              background: '#111', // Card container background
              overflow: 'hidden' // Keeps the image clipped to bounds if needed
            }}>
              {/* Left Image Card */}
              <div 
                className="service-card-left solutions-layer-col"
                style={{ 
                  position: 'relative',
                  minHeight: '350px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '40px',
                  overflow: 'hidden'
                }}
              >
                {/* Background Image Element for zooming */}
                <div 
                  className="service-bg-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${layer.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                ></div>

                {/* Gradient for text readability like Phew */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)', zIndex: 1, pointerEvents: 'none' }}></div>
                <Link to={`/solutions/${layer.slug}`} style={{ position: 'relative', zIndex: 2, textDecoration: 'none' }}>
                  <h3 data-aos="fade-up" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.02em', color: '#fff' }}>
                    {layer.title}
                  </h3>
                </Link>
              </div>

              {/* Right Details Card */}
              <div className="solutions-layer-col" style={{ 
                background: '#151515', 
                display: 'flex',
                flexDirection: 'column',
                padding: '40px'
              }}>
                <div data-aos="fade-in" style={{ fontSize: '1rem', fontFamily: 'var(--ix-font-body)', fontWeight: 500, color: '#666', marginBottom: '20px' }}>
                  {layer.num}
                </div>
                
                {layer.desc && (
                  <p data-aos="fade-up" data-aos-delay="100" style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: 1.6, marginBottom: '20px', maxWidth: '400px', fontFamily: 'var(--ix-font-body)' }}>
                    {layer.desc}
                  </p>
                )}

                <div data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, justifyContent: 'center' }}>
                  {layer.services.map((svc, sIdx) => {
                    const svcSlug = svc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return (
                    <Link to={`/solutions/${svcSlug}`} key={sIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      textDecoration: 'none',
                      color: '#bbb',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#00A880'; e.currentTarget.querySelector('svg').style.transform = 'translate(2px, -2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#bbb'; e.currentTarget.querySelector('svg').style.transform = 'translate(0, 0)'; }}
                    >
                      <span style={{ fontSize: '1rem', fontWeight: 400 }}>{svc}</span>
                      <ArrowUpRight size={18} style={{ transition: 'transform 0.3s ease' }} />
                    </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INFINITE MARQUEE */}
      <section data-aos="fade-in" style={{ background: '#000', padding: '120px 0', overflow: 'hidden', borderBottom: '1px dashed #333' }}>
        <div className="marquee-container" style={{ display: 'flex', width: 'max-content', whiteSpace: 'nowrap' }}
             onMouseEnter={(e) => {
               const tracks = e.currentTarget.querySelectorAll('.marquee-track');
               tracks.forEach(t => t.style.animationPlayState = 'paused');
             }}
             onMouseLeave={(e) => {
               const tracks = e.currentTarget.querySelectorAll('.marquee-track');
               tracks.forEach(t => t.style.animationPlayState = 'running');
             }}
        >
          {[1, 2].map(trackIndex => (
            <div key={trackIndex} className="marquee-track" style={{ display: 'flex', animation: 'marquee 60s linear infinite' }}>
              {allSubCategories.map((title, i) => (
                <MarqueeCard key={`m${trackIndex}-${i}`} title={title} />
              ))}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SolutionsIndex;
