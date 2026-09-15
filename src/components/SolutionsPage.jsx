import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { solutionsData, caseStudiesData } from '../lib/contentData';
import Seo from '../seo/Seo';
import { divisionForSlug, isDivision, getDivision, servicesInDivision } from '../content/divisions';
import { SITE_URL } from '../seo/siteConfig';
import { organizationSchema, serviceSchema, breadcrumbSchema } from '../seo/schema';
import defaultHeroBg from '../assets/hero_bg_abstract.jpg';
import capImg1 from '../assets/cap_img_1.jpg';
import capImg2 from '../assets/cap_img_2.jpg';
import capImg3 from '../assets/cap_img_3.jpg';
import caseStudy1 from '../assets/menucard.jpeg';
import caseStudy2 from '../assets/case_study_2.jpg';
import caseStudy3 from '../assets/visiting.jpeg';
import caseStudyDevImg from '../assets/case-study-development.jpg';
import caseStudyAgency from '../assets/case-study-agency.jpg';
import caseStudyLoop from '../assets/case-study-loop.jpg';
import caseStudyTask from '../assets/tms.jpeg';
import caseStudyMenucard from '../assets/case-study-menucard.jpg';
import caseStudyCampaign from '../assets/case-study-campaign.jpg';
import caseStudyVisiting from '../assets/case-study-visiting.jpg';
import salonImg from '../assets/salon.jpeg';
import tmsImg from '../assets/tms.jpeg';
import aiImg from '../assets/serv.png';

// Import images for main layer pages
import agencyBg from '../assets/mark.png';
import mediaBg from '../assets/media.png';
import growthBg from '../assets/marketing.png';

const bgMap = {
  'infynix-agency': agencyBg,
  'infynix-media': mediaBg,
  'infynix-growth-solutions': growthBg
};

// SVG Icons
const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M7 17L17 7M7 7H17V17" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 12H19M12 5L19 12L12 19" />
  </svg>
);

const PlusMinus = ({ isOpen }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
    {!isOpen && <path d="M12 5V19" />}
    <path d="M5 12H19" />
  </svg>
);

// --- Component: Custom Accordion ---
const CapabilitiesAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const images = [capImg1, capImg2, capImg3];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const num = String(idx + 1).padStart(2, '0');
        const bgImg = images[idx % images.length];
        
        return (
          <div key={idx} className="solutions-accordion-row" style={{ borderBottom: '1px solid #eaeaea', padding: '32px 0', gap: '40px', alignItems: 'flex-start' }}>
            
            {/* Left Side: Icon or Image */}
            <div className="solutions-accordion-left" style={{ flexShrink: 0, cursor: 'pointer' }} onClick={() => setOpenIndex(isOpen ? -1 : idx)}>
              {isOpen ? (
                <div style={{ 
                  width: '240px', 
                  height: '240px', 
                  backgroundImage: `url(${bgImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                </div>
              ) : (
                <div style={{ width: '240px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a7d600" strokeWidth="1.5">
                       <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="rgba(167,214,0,0.2)"/>
                     </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Number, Title, Text */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div 
                style={{ display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer' }}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#555', fontFamily: 'var(--ix-font-body)' }}>{num}</span>
                <h3 style={{ fontFamily: '"PP Neue Montreal", sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', fontWeight: 400, margin: 0, color: '#111', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {item.title}
                </h3>
              </div>

              <div style={{
                height: isOpen ? 'auto' : 0,
                overflow: 'hidden',
                opacity: isOpen ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}>
                <div style={{ paddingTop: '16px', paddingLeft: '40px' }}>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: '#999', margin: 0, maxWidth: '600px', fontFamily: 'var(--ix-font-body)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>

            </div>

          </div>
        );
      })}
    </div>
  );
};


const MarqueeCard = ({ title, slug }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link 
      to={`/solutions/${slug}`}
      style={{
        flex: '0 0 auto',
        width: '280px',
        height: '90px',
        background: isHovered ? '#f4f4f4' : '#fafafa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
        padding: '0 20px',
        textAlign: 'center',
        textDecoration: 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#999', fontSize: '1rem', fontFamily: 'var(--ix-font-body)' }}>
          View Service <ArrowRight />
        </div>
      ) : (
        <span style={{ fontSize: '1.05rem', fontWeight: 500, color: '#111', fontFamily: 'var(--ix-font-body)' }}>
          {title}
        </span>
      )}
    </Link>
  );
};

const SolutionsPage = () => {
  const { slug } = useParams();
  const activeSlug = slug || 'website-development';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSlug]);

  const data = solutionsData[activeSlug];
  // Division context: either this page is one of the three hubs, or it sits
  // inside one. Flat service lists gave visitors and language models no way to
  // tell that Infynix is three business units.
  const parentDivision = divisionForSlug(activeSlug);
  const thisDivision = isDivision(activeSlug) ? getDivision(activeSlug) : null;
  const childServices = thisDivision ? servicesInDivision(activeSlug) : [];
  if (!data) return <div style={{ padding: '20vh 5%', textAlign: 'center', fontSize: '2rem' }}>Solution not found.</div>;

  const currentHeroBg = bgMap[activeSlug] || defaultHeroBg;

  // Use specific capabilities if available, otherwise adapt blueprint data
  const capabilities = data.capabilities || [
    { title: 'The Challenge', desc: data.challenge },
    { title: 'Our Insight', desc: data.insight },
    { title: 'The Solution', desc: data.solution },
    { title: 'The Outcome', desc: data.outcome },
    { title: 'Scale & Optimize', desc: 'Continuous testing, optimizations, and cloud scaling alerts to ensure long-term, sustainable growth.' }
  ];

  // Map specific steps for the "How We Work" section if available, otherwise use fallback
  const workingSteps = data.workingSteps || [
    { num: '01', title: 'Measure', desc: 'We audit your current systems, marketing, and funnels.' },
    { num: '02', title: 'Design', desc: 'We architect a custom strategy bridging your exact gaps.' },
    { num: '03', title: 'Build', desc: 'We deploy the tech, content, and pipelines required.' },
    { num: '04', title: 'Launch', desc: 'We seamlessly roll out the solution with zero downtime.' },
    { num: '05', title: 'Re-Measure', desc: 'We track every metric to ensure it meets our strict KPIs.' },
    { num: '06', title: 'Scale', desc: 'We optimize the winning channels to compound your returns.' }
  ];

  // Get 3 random case studies or first 3
  const relatedCases = caseStudiesData.slice(0, 3);
  
  const agencyServices = [
    "Performance Advertising", "SEO & Content Marketing", "Social Media Management",
    "Marketing Automation & CRM", "Analytics & Reporting", "Brand Strategy & Positioning"
  ];
  const mediaServices = [
    "Photography & Videography", "Short-Form & Social Content", "Brand Films & Commercials",
    "AI-Assisted Production", "Motion Graphics & Animation", "Podcast & Audio Production"
  ];
  const growthServices = [
    "Custom Web & App Development", "AI-Native Product Development", "Marketing & Business Automation",
    "IoT & Connected Systems", "Data Platforms & Dashboards", "API & Systems Integration"
  ];

  let displayServices = mediaServices;
  if (data.category === 'Agency' || data.category === 'Marketing' || data.category === 'Branding') {
    displayServices = agencyServices;
  } else if (data.category === 'Growth' || data.category === 'Development') {
    displayServices = growthServices;
  }

  return (
    <div style={{ background: '#fff', color: '#111' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .solutions-hero-section {
            background-size: 100% auto !important;
            background-position: top center !important;
            background-repeat: no-repeat !important;
            background-color: #111 !important;
            padding-top: calc(100vw * 0.56 + 10px) !important;
            min-height: auto !important;
            padding-bottom: 10px !important;
          }
          .solutions-hero-overlay {
            background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(17,17,17,1) calc(100vw * 0.56)) !important;
          }
        }
      `}} />
      <Seo
        title={`${data.title} | Infynix Solutions`}
        description={data.description || data.subtitle}
        path={`/solutions/${activeSlug}`}
        schema={[
          organizationSchema(),
          {
            ...serviceSchema({
              name: data.title,
              description: data.description || data.subtitle,
              path: `/solutions/${activeSlug}`,
              areaServed: ['Kerala', 'India', 'United Arab Emirates', 'United Kingdom'],
            }),
            // A hub advertises the services it owns; a service points back at
            // its hub. That is what turns a flat list into an entity hierarchy
            // a machine can follow.
            ...(childServices.length
              ? {
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: `${data.title} services`,
                    itemListElement: childServices.map((c) => ({
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: c.title,
                        url: `${SITE_URL}/solutions/${c.slug}`,
                      },
                    })),
                  },
                }
              : {}),
            ...(parentDivision
              ? { isRelatedTo: { '@id': `${SITE_URL}/solutions/${parentDivision.slug}#service` } }
              : {}),
          },
          breadcrumbSchema(
            parentDivision
              ? [
                  { name: 'Home', path: '/' },
                  { name: 'Solutions', path: '/solutions' },
                  { name: parentDivision.name, path: `/solutions/${parentDivision.slug}` },
                  { name: data.title, path: `/solutions/${activeSlug}` },
                ]
              : [
                  { name: 'Home', path: '/' },
                  { name: 'Solutions', path: '/solutions' },
                  { name: data.title, path: `/solutions/${activeSlug}` },
                ]
          ),
        ]}
      />

      {/* Division context. A service page names the business unit it belongs to;
          a hub page lists the services it owns. Without this the site reads as
          one flat catalogue of ~26 services rather than three divisions. */}
      {parentDivision && (
        <div style={{ background: '#0a0a0a', color: '#fff', padding: '14px 5%', fontSize: '0.82rem', letterSpacing: '0.04em' }}>
          <span style={{ opacity: 0.6, textTransform: 'uppercase', fontWeight: 600, fontSize: '0.72rem' }}>Part of</span>{' '}
          <Link to={`/solutions/${parentDivision.slug}`} style={{ color: 'rgb(198, 232, 74)', textDecoration: 'none', fontWeight: 700 }}>
            {parentDivision.name}
          </Link>
          <span style={{ opacity: 0.55 }}>{' '}&middot; {parentDivision.tagline}</span>
        </div>
      )}

      {thisDivision && childServices.length > 0 && (
        <section style={{ background: '#f7f8f7', padding: '72px 5%' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00654e', margin: '0 0 10px' }}>
              {thisDivision.tagline}
            </p>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 14px', color: '#10201a' }}>
              What {thisDivision.name} delivers
            </h2>
            <p style={{ maxWidth: '68ch', color: '#4b5563', lineHeight: 1.7, margin: '0 0 30px' }}>
              {thisDivision.summary}
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', listStyle: 'none', margin: 0, padding: 0 }}>
              {childServices.map((c) => (
                <li key={c.slug}>
                  <Link to={`/solutions/${c.slug}`} style={{ display: 'block', padding: '18px 20px', background: '#fff', border: '1px solid #e5e7eb', borderLeft: '3px solid #00654e', borderRadius: '12px', textDecoration: 'none', color: '#10201a' }}>
                    <span style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.96rem', marginBottom: '6px' }}>{c.title}</span>
                    <span style={{ display: 'block', fontSize: '0.86rem', color: '#6b7c74', lineHeight: 1.55 }}>{(c.description || '').slice(0, 110)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ══ 1. HERO SECTION ══ */}
      <section className="solutions-hero-section" style={{
        backgroundImage: `url(${currentHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '200px 5% 100px 5%',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        color: '#fff' // Update text color to white for better contrast on dark metallic bg
      }}>
        <div className="solutions-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }}></div> {/* Overlay for readability */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#eaeaea', marginBottom: '1.5rem', fontFamily: 'var(--ix-font-body)' }}>
            <Link to="/" style={{ color: '#eaeaea', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link to="/solutions" style={{ color: '#eaeaea', textDecoration: 'none' }}>Services</Link>
            <span>/</span>
            <span style={{ color: '#fff', fontWeight: 500 }}>{data.title}</span>
          </div>

          <h1 data-aos="fade-up" style={{ 
            fontFamily: '"PP Neue Montreal", sans-serif', 
            fontWeight: 400, 
            fontSize: 'clamp(1.8rem, 5vw, 4rem)', 
            color: '#fff', 
            lineHeight: 1, 
            margin: 0, 
            letterSpacing: '-0.03em',
            maxWidth: '1200px'
          }}>
            {data.title}
          </h1>
        </div>
      </section>

      {/* ══ 2. INTRO SECTION (Split Column) ══ */}
      <section className="solutions-intro-section" style={{ padding: '120px 5% 120px 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="solutions-intro-grid" style={{ display: 'grid', gap: '6rem' }}>
            
            {/* Left: Bold Statement */}
            <div style={{ paddingRight: '2rem' }}>
              <h2 data-aos="fade-up" style={{ 
                fontFamily: '"PP Neue Montreal", var(--ix-font-display)', 
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
                lineHeight: 1.1, 
                margin: 0,
                letterSpacing: '-0.02em'
              }}>
                <span style={{ color: '#888', fontWeight: 400 }}>At Infynix,</span> <span style={{ color: '#111', fontWeight: 400 }}>we craft growth engines that inspire and endure.</span>
              </h2>
            </div>

            {/* Right: Description & CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <p data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1.05rem', color: '#888', lineHeight: 1.7, margin: 0 }}>
                {data.description} {data.challenge} {data.insight}
              </p>
              
              <div data-aos="fade-up" data-aos-delay="200" style={{ marginTop: '1rem' }}>
                <Link to="/contact" style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  width: '240px',
                  background: 'transparent', 
                  color: '#111', 
                  padding: '14px 20px', 
                  textDecoration: 'none', 
                  fontWeight: 500, 
                  fontFamily: 'var(--ix-font-body)',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  border: '1px solid #111'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111'; }}
                >
                  <span>Get My Growth Plan</span> <ArrowRight />
                </Link>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* ══ 3. CAPABILITIES ACCORDION ══ */}
      <section className="solutions-accordion-section" style={{ padding: '80px 5% 120px 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
          
          {/* Left: Sticky Label */}
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ position: 'sticky', top: '120px' }}>
              <p style={{ 
                fontFamily: 'var(--ix-font-body)', 
                fontSize: '0.85rem', 
                letterSpacing: '0.02em', 
                lineHeight: 1.5, 
                margin: 0,
                textTransform: 'uppercase'
              }}>
                <span style={{ color: '#999', fontWeight: 500 }}>OUR </span> 
                <span style={{ color: '#111', fontWeight: 600 }}>CAPABILITIES IN</span><br/>
                <span style={{ color: '#111', fontWeight: 600 }}>{data.title}</span>
              </p>
            </div>
          </div>

          {/* Right: Accordion */}
          <div style={{ flex: '2 1 600px' }}>
            <CapabilitiesAccordion items={capabilities} />
          </div>

        </div>
      </section>

      {/* ══ 4. HOW WE WORK (Dark Grid) ══ */}
      <section style={{ background: '#0a0a0a', color: '#fff', padding: '120px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontFamily: '"PP Neue Montreal", var(--ix-font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: 0, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#888', fontWeight: 400 }}>How</span> <span style={{ fontWeight: 500, color: '#fff' }}>We Work</span>
            </h2>
          </div>

          {/* 3x2 Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px'
          }}>
            {workingSteps.map((step, idx) => (
              <div key={idx} style={{ 
                background: 'transparent', 
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontFamily: 'var(--ix-font-body)', fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>
                    {step.num}
                  </span>
                  <h3 style={{ fontFamily: 'var(--ix-font-display)', fontSize: '1.2rem', fontWeight: 600, margin: 0, color: '#fff' }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{ fontFamily: 'var(--ix-font-body)', fontSize: '1.05rem', color: '#888', margin: 0, lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ 5. CASE STUDY (Replica) ══ */}
      <section style={{ padding: '120px 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontFamily: '"PP Neue Montreal", sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#aaa' }}>Case</span> <span style={{ color: '#111' }}>study</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            
            {(() => {
              const devCaseStudies = [
                { title: 'Salon OS', label1: 'Development', label2: 'SaaS', img: salonImg, slug: 'beyond-demands' },
                { title: 'Agency OS', label1: 'Development', label2: 'Platform', img: caseStudyAgency, slug: 'agency-os' },
                { title: 'AI Surveillance Security System', label1: 'Development', label2: 'AI Security', img: aiImg, slug: 'ai-surveillance' },
                { title: 'Task Management System', label1: 'Development', label2: 'Management', img: tmsImg, slug: 'task-management-system' }
              ];
            
              const defaultCaseStudies = [
                { title: 'Salon Service Menu', label1: 'Media', label2: 'Menucard', img: caseStudy1, slug: 'salon-branding-menucard' },
                { title: 'Campaign', label1: 'Marketing', label2: 'Campaign', isVideo: false, img: caseStudyCampaign, slug: 'performance-ad-campaign' },
                { title: 'Salon Visiting Card', label1: 'Branding', label2: 'Visiting Card', img: caseStudy3, slug: 'corporate-brand-identity' }
              ];
            
              const caseStudiesToDisplay = (data.category === 'Growth' || data.category === 'Development') ? devCaseStudies : defaultCaseStudies;

              return caseStudiesToDisplay.map((cs, i) => (
                <Link key={i} to={cs.slug ? `/case-studies/${cs.slug}` : '/case-studies'} style={{ textDecoration: 'none', position: 'relative', aspectRatio: '3/4', overflow: 'hidden', display: 'block' }}>
                  {cs.isVideo ? (
                    <video autoPlay loop muted playsInline poster={cs.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <img src={cs.img} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', padding: '40px 20px 20px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h3 style={{ margin: 0, color: '#fff', fontFamily: 'var(--ix-font-display)', fontSize: '1.4rem', fontWeight: 500, letterSpacing: '-0.01em' }}>
                      {cs.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', color: '#fff', padding: '6px 12px', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'var(--ix-font-body)' }}>{cs.label1}</span>
                      <span style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', color: '#fff', padding: '6px 12px', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'var(--ix-font-body)' }}>{cs.label2}</span>
                    </div>
                  </div>
                </Link>
              ));
            })()}

          </div>

        </div>
      </section>

      {/* ══ 6. EXPLORE ALL SERVICES ══ */}
      <section style={{ padding: '60px 5% 120px 5%', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: '"PP Neue Montreal", sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, margin: 0, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#aaa' }}>Explore</span> <span style={{ color: '#111' }}>all services</span>
            </h2>
          </div>
          
          <div className="hide-scrollbar" style={{ display: 'flex', overflowX: 'auto', gap: '20px', background: '#fff', paddingBottom: '20px' }}>
            {displayServices.map((svcTitle, index) => {
              const bgImages = [capImg1, capImg2, capImg3, defaultHeroBg];
              return (
                <div key={index} style={{
                  flex: '0 0 auto',
                  width: '320px',
                  background: '#f4f4f4',
                  backgroundImage: `url(${bgImages[index % bgImages.length]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  aspectRatio: '1/1',
                  padding: '40px 30px',
                  color: '#111',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="explore-card"
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 100%)', transition: 'opacity 0.3s' }} className="explore-overlay"></div>
                  
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    
                    <h3 style={{ fontFamily: '"PP Neue Montreal", sans-serif', fontSize: '1.8rem', fontWeight: 400, margin: '0 0 20px 0', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                      {svcTitle}
                    </h3>
                    
                    <Link to={`/solutions/${svcTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--ix-font-body)', borderBottom: '1px solid #111', paddingBottom: '4px', width: 'fit-content', textTransform: 'uppercase', textDecoration: 'none', color: '#111', marginTop: 'auto' }}>
                      Learn More <ArrowUpRight />
                    </Link>

                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
            <Link to="/solutions" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              width: '240px',
              background: 'transparent', 
              color: '#111', 
              padding: '14px 20px', 
              textDecoration: 'none', 
              fontWeight: 500, 
              fontFamily: 'var(--ix-font-body)',
              fontSize: '1rem',
              transition: 'all 0.3s',
              border: '1px solid #111'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111'; }}
            >
              <span>View All Services</span> <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 7. INFINITE MARQUEE ══ */}
      <section style={{ background: '#fff', padding: '0 0 120px 0', overflow: 'hidden' }}>
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
          {/* We render the track twice for seamless infinite looping */}
          {[1, 2].map(trackIndex => (
            <div key={trackIndex} className="marquee-track" style={{ display: 'flex', animation: 'marquee 60s linear infinite' }}>
              {[
                "Performance Advertising", "SEO & Content Marketing", "Social Media Management",
                "Marketing Automation & CRM", "Analytics & Reporting", "Brand Strategy & Positioning",
                "Photography & Videography", "Short-Form & Social Content", "Brand Films & Commercials",
                "AI-Assisted Production", "Motion Graphics & Animation", "Podcast & Audio Production",
                "Custom Web & App Development", "AI-Native Product Development", "Marketing & Business Automation",
                "IoT & Connected Systems", "Data Platforms & Dashboards", "API & Systems Integration"
              ].map((title, i) => {
                const titleSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                return <MarqueeCard key={`m${trackIndex}-${i}`} title={title} slug={titleSlug} />
              })}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SolutionsPage;
