import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { industriesData } from '../lib/contentData';
import SEOManager from './SEOManager';
import './InfynixDesign.css';

const industryImages = {
  'healthcare':            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
  'education':             'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
  'construction':          'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80',
  'real-estate':           'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
  'manufacturing':         'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
  'retail':                'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
  'hospitality':           'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
  'professional-services': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
};

const defaultPlaceholders = {
  feature1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  feature2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  feature3: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  integrations: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80"
};

function useIxReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.ix-reveal, .ix-reveal-left, .ix-reveal-right, .ix-reveal-scale, [data-aos]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) e.target.classList.add('aos-animate'); 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const Arrow = () => (
  <svg viewBox="0 0 14 14" fill="none" width="14" height="14" style={{ marginLeft: 6 }}>
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IndustriesPage = () => {
  const { slug } = useParams();
  const industryKey = slug && industriesData[slug] ? slug : 'healthcare';
  const data = industriesData[industryKey];
  const pageImage = industryImages[industryKey] || industryImages['healthcare'];

  useIxReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div style={{ background: '#fff', color: '#1F2937', fontFamily: 'var(--ix-font-body)', overflowX: 'hidden' }}>
      <SEOManager
        title={`${data.name} Solutions | Infynix`}
        description={data.challenge}
        canonicalUrl={`https://infynix.com/industries/${industryKey}`}
      />

      <style>{`
        .ind-section { padding: clamp(100px, 12vw, 140px) clamp(24px, 5vw, 64px); }
        .ind-eyebrow { font-size: 0.8rem; font-weight: 700; color: #007A5E; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem; display: block; }
        .ind-h1 { font-family: var(--ix-font-display); font-size: clamp(3rem, 5vw, 4rem); font-weight: 700; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.02em; color: #111; }
        .ind-h2 { font-family: var(--ix-font-display); font-size: clamp(2.2rem, 4vw, 3rem); font-weight: 700; line-height: 1.15; margin-bottom: 1.5rem; letter-spacing: -0.02em; color: #111; }
        .ind-p { font-size: 1.125rem; color: #4B5563; line-height: 1.7; margin-bottom: 2rem; max-width: 600px; }
        .ind-btn-primary { background: #007A5E; color: #fff; padding: 1rem 2rem; border-radius: 50px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; transition: background 0.3s; border: none; cursor: pointer; }
        .ind-btn-primary:hover { background: #0F5C4C; }
        .ind-btn-outline { background: transparent; color: #111; padding: 1rem 2rem; border-radius: 50px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; transition: background 0.3s, border-color 0.3s; border: 1.5px solid #E5E7EB; cursor: pointer; }
        .ind-btn-outline:hover { background: #F9FAFB; border-color: #D1D5DB; }
        .ind-btn-text { color: #007A5E; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; font-size: 1.1rem; }
        .ind-btn-text:hover { text-decoration: underline; }
        .ind-glow { position: absolute; bottom: -50px; right: 0; width: 800px; height: 250px; background: radial-gradient(ellipse at center, rgba(0, 122, 94, 0.7) 0%, rgba(204, 255, 0, 0.25) 55%, rgba(255,255,255,0) 85%); filter: blur(90px); pointer-events: none; z-index: 0; }
        .ind-img { border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); object-fit: cover; width: 100%; display: block; }
        .ind-card { background: #fff; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); padding: 2rem; transition: transform 0.3s, box-shadow 0.3s; }
        .ind-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .ind-icon-badge { width: 56px; height: 56px; border-radius: 50%; background: #F0FDF4; color: #007A5E; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="ind-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div className="ind-glow" style={{ right: '-200px' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%' }}>
          <div data-aos="fade-up">
            <span className="ind-eyebrow">Infynix For {data.name}</span>
            <h1 className="ind-h1">Sell smarter with AI-powered growth systems.</h1>
            <p className="ind-p">{data.opportunity || `Modernize your ${data.name.toLowerCase()} operations with intelligent workflows and seamless digital integration.`}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="ind-btn-primary">Contact Sales</Link>
              <a href="#demo" className="ind-btn-outline">View Demo</a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img src={pageImage} alt={data.name} className="ind-img" style={{ maxWidth: '90%', aspectRatio: '4/5' }} />
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="ind-section" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            <span className="ind-eyebrow">How Infynix AI Works</span>
            <h2 className="ind-h2" style={{ maxWidth: 700, margin: '0 auto' }}>AI that works as hard as your team.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="ind-icon-badge"><CheckIcon /></div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Intelligent Automation</h3>
              <p style={{ color: '#6B7280', lineHeight: 1.6 }}>We identify bottlenecks in your workflow and automate redundant tasks to save thousands of hours.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="ind-icon-badge"><ActivityIcon /></div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Real-time Analytics</h3>
              <p style={{ color: '#6B7280', lineHeight: 1.6 }}>Connect all your data sources into a single pane of glass for predictive and actionable insights.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="ind-icon-badge"><UsersIcon /></div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Seamless Collaboration</h3>
              <p style={{ color: '#6B7280', lineHeight: 1.6 }}>Empower your team with tools that sync instantly across all platforms and devices natively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURE BLOCK 1 (Text Left, Image Right) */}
      <section className="ind-section" style={{ overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div data-aos="fade-right">
            <span className="ind-eyebrow">AI Agents</span>
            <h2 className="ind-h2">Resolve inquiries instantly from day one.</h2>
            <p className="ind-p">Bring together customer conversations from all channels into one unified inbox. Let AI handle routine questions while your agents focus on high-value interactions.</p>
            <Link to="/contact" className="ind-btn-text">Discover AI Agents <Arrow /></Link>
          </div>
          <div data-aos="fade-left" style={{ position: 'relative' }}>
            <img src={defaultPlaceholders.feature1} alt="AI Agents Interface" className="ind-img" style={{ width: '120%', maxWidth: 'none', marginLeft: '0%' }} />
          </div>
        </div>
      </section>

      {/* 4. FEATURE BLOCK 2 (Image Left, Text Right) */}
      <section className="ind-section" style={{ overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div data-aos="fade-right" style={{ position: 'relative' }}>
            <img src={defaultPlaceholders.feature2} alt="Omnichannel Support" className="ind-img" style={{ width: '120%', maxWidth: 'none', marginLeft: '-20%' }} />
          </div>
          <div data-aos="fade-left">
            <span className="ind-eyebrow">Omnichannel</span>
            <h2 className="ind-h2">Meet your customers exactly where they are.</h2>
            <p className="ind-p">Deploy seamless experiences across web, mobile, social, and email. Maintain full context as users switch devices or platforms without losing a beat.</p>
            <Link to="/contact" className="ind-btn-text">Explore Omnichannel <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL/STATS CAROUSEL */}
      <section className="ind-section" style={{ background: '#F9FAFB', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto 3rem' }}>
          <h2 className="ind-h2" data-aos="fade-up">Trusted by {data.name} leaders</h2>
        </div>
        <div className="hide-scrollbar" style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '1rem clamp(24px, 5vw, calc((100vw - 1280px)/2 + 24px)) 3rem', snapType: 'x mandatory' }}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="ind-card" style={{ minWidth: 380, flexShrink: 0, scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111', marginBottom: '2rem' }}>COMPANY LOGO</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#007A5E', lineHeight: 1 }}>82%</div>
                  <div style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: '0.5rem' }}>One-touch resolution</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#007A5E', lineHeight: 1 }}>3x</div>
                  <div style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: '0.5rem' }}>Faster onboarding</div>
                </div>
              </div>
              <p style={{ fontStyle: 'italic', color: '#4B5563', fontSize: '1rem', lineHeight: 1.6, flexGrow: 1 }}>
                "Infynix completely transformed how we handle our internal processes. We've cut operational drag in half while scaling up."
              </p>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ fontWeight: 700, color: '#111' }}>Sarah Jenkins</div>
                <div style={{ fontSize: '0.9rem', color: '#6B7280' }}>VP of Operations</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FEATURE BLOCK 3 (Internal Use Case) */}
      <section className="ind-section" style={{ overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div data-aos="fade-right">
            <span className="ind-eyebrow">Employee Experience</span>
            <h2 className="ind-h2">Empower your team with a modern workspace.</h2>
            <p className="ind-p">Internal systems shouldn't look like they were built in the 90s. We craft intuitive portals that employees actually want to use, boosting adoption and morale.</p>
            <Link to="/contact" className="ind-btn-text">See Internal Portals <Arrow /></Link>
          </div>
          <div data-aos="fade-left" style={{ position: 'relative' }}>
            <img src={defaultPlaceholders.feature3} alt="Employee Portal" className="ind-img" style={{ width: '120%', maxWidth: 'none', marginLeft: '0%' }} />
          </div>
        </div>
      </section>

      {/* 7. INTEGRATIONS BLOCK */}
      <section className="ind-section" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span className="ind-eyebrow" data-aos="fade-up">Integrations</span>
          <h2 className="ind-h2" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: 600 }}>Plays perfectly with the tools you already use.</h2>
          <p className="ind-p" data-aos="fade-up" data-aos-delay="200" style={{ marginBottom: '4rem' }}>No need to rip and replace. Our systems connect securely to your existing ERP, CRM, and communication platforms via robust APIs.</p>
          <div data-aos="zoom-in" data-aos-delay="300" style={{ width: '80%', maxWidth: 900 }}>
            <img src={defaultPlaceholders.integrations} alt="Integrations" className="ind-img" style={{ width: '100%' }} />
          </div>
        </div>
      </section>

      {/* 8. ADDITIONAL RESOURCES GRID */}
      <section className="ind-section" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 className="ind-h2" style={{ marginBottom: '3rem' }} data-aos="fade-up">Additional Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[1, 2, 3].map((item) => (
              <a href="#resource" key={item} className="ind-card" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', display: 'block', border: '1px solid #E5E7EB' }} data-aos="fade-up" data-aos-delay={item * 100}>
                <div style={{ height: 200, background: '#E5E7EB' }}>
                  <img src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80`} alt="Resource thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#007A5E', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem', display: 'block' }}>
                    {item === 1 ? 'Trend Report' : item === 2 ? 'Webinar' : 'Case Study'}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', lineHeight: 1.4 }}>The future of {data.name.toLowerCase()} operations and digital scaling.</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA BAND */}
      <section className="ind-section" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="ind-glow" style={{ left: '50%', transform: 'translateX(-50%)', bottom: '-150px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }} data-aos="zoom-in">
          <h2 className="ind-h1" style={{ marginBottom: '2rem' }}>Ready to transform your {data.name} systems?</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="ind-btn-primary">Contact Sales</Link>
            <a href="#demo" className="ind-btn-outline">View Demo</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
