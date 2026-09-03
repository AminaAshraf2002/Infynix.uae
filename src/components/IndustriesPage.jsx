import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { industriesData } from '../lib/contentData';
import {
  HardHat, GraduationCap, Building2, ShoppingCart, Activity, Shield, Users, Globe, Building,
  Briefcase, Coffee, Factory, Cpu, Network, Monitor, Zap, Stethoscope, Sparkles,
  ClipboardList, ShieldCheck, MonitorPlay, BarChart, Home, CalendarCheck, TrendingUp,
  LineChart, Truck, ConciergeBell, Smartphone, RefreshCw, CreditCard, LayoutDashboard, Video
} from 'lucide-react';
import SEOManager from './SEOManager';
import './InfynixDesign.css';

const industryTestimonials = {
  'healthcare': [
    { quote: "By automating our patient intake and modernizing our records, we've seen a 40% drop in no-shows and doubled our daily consultation capacity.", name: "Dr. Sarah Jenkins", role: "Chief Medical Officer", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" },
    { quote: "The integration between our scheduling portal and clinical systems is entirely seamless. It feels like we finally have a connected hospital.", name: "Marcus Thorne", role: "Director of Operations", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" }
  ],
  'retail': [
    { quote: "We completely transformed our digital storefront. Load times are near-zero, and our cart abandonment dropped by 60% in the first quarter.", name: "Elena Rostova", role: "VP of E-Commerce", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" },
    { quote: "The headless architecture gave us the flexibility to scale across international markets instantly without rebuilding the core checkout.", name: "David Chen", role: "Head of Digital Strategy", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80" }
  ],
  'default': [
    { quote: "Infynix completely transformed how we handle our internal processes. We've cut operational drag in half while scaling up.", name: "Sarah Jenkins", role: "VP of Operations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
    { quote: "Our growth velocity has tripled since deploying their automation systems. The ROI was clear within the first 60 days of launch.", name: "Michael Chang", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
    { quote: "They didn't just give us software; they engineered a fundamental shift in how our entire organization operates.", name: "Amanda Lewis", role: "Director of Growth", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" }
  ]
};

const trustLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
];

const industryStats = {
  'healthcare': { stat1: '40%', label1: 'Fewer no-shows', stat2: '2x', label2: 'Faster intake' },
  'retail': { stat1: '3x', label1: 'Faster checkout', stat2: '60%', label2: 'Cart recovery' },
  'education': { stat1: '45%', label1: 'Higher retention', stat2: '24/7', label2: 'Student access' },
  'construction': { stat1: '30%', label1: 'Less waste', stat2: '2x', label2: 'Faster reporting' },
  'real-estate': { stat1: '5x', label1: 'Lead conversion', stat2: '100%', label2: 'MLS sync' },
  'manufacturing': { stat1: '99%', label1: 'Uptime', stat2: '40%', label2: 'Less downtime' },
  'hospitality': { stat1: '2x', label1: 'Direct bookings', stat2: '95%', label2: 'Guest satisfaction' },
  'professional-services': { stat1: '50%', label1: 'Less admin', stat2: '3x', label2: 'Faster billing' },
};

const iconMap = {
  'hard-hat': HardHat, 'graduation-cap': GraduationCap, 'building-2': Building2, 'shopping-cart': ShoppingCart,
  'activity': Activity, 'shield': Shield, 'users': Users, 'globe': Globe, 'building': Building,
  'briefcase': Briefcase, 'coffee': Coffee, 'factory': Factory, 'cpu': Cpu, 'network': Network,
  'monitor': Monitor, 'zap': Zap, 'stethoscope': Stethoscope, 'sparkles': Sparkles,
  'clipboard-list': ClipboardList, 'shield-check': ShieldCheck, 'monitor-play': MonitorPlay,
  'bar-chart': BarChart, 'home': Home, 'calendar-check': CalendarCheck, 'trending-up': TrendingUp,
  'line-chart': LineChart, 'truck': Truck, 'concierge-bell': ConciergeBell, 'smartphone': Smartphone,
  'refresh-cw': RefreshCw, 'credit-card': CreditCard, 'layout-dashboard': LayoutDashboard, 'video': Video
};

const industryImages = {
  'healthcare': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
  'education': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
  'construction': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80',
  'real-estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
  'manufacturing': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
  'retail': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
  'hospitality': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
  'professional-services': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
};

const defaultPlaceholders = {
  feature1: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  feature2: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
  feature3: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
  integrations: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
};

const resourceImages = [
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=600&q=80'
];

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
  const testimonials = industryTestimonials[industryKey] || industryTestimonials['default'];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useIxReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentTestimonial(0);
  }, [slug]);

  return (
    <div style={{ background: '#fff', color: '#1F2937', fontFamily: "'Montserrat', sans-serif", overflowX: 'hidden' }}>
      <SEOManager
        title={`${data.name} Solutions | Infynix`}
        description={data.challenge}
        canonicalUrl={`https://infynix.com/industries/${industryKey}`}
      />

      <style>{`
        /* ===== FIX: --section-px was used but never defined anywhere below.
           Without this, every "padding: 0 var(--section-px)" declaration was
           INVALID and got dropped by the browser, meaning .ind-container,
           .ind-container-lg, and the Final CTA band had ZERO side padding
           regardless of any other changes made. This is now fixed. ===== */
        :root {
          --section-px: clamp(20px, 5vw, 100px);
        }

        .ind-section { padding: clamp(40px, 8vw, 180px) 0; }
        .ind-eyebrow { font-size: 0.8rem; font-weight: 600; color: #007A5E; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem; display: block; }
        .ind-h1 { font-family: 'Montserrat', sans-serif; font-size: clamp(2.25rem, 4vw, 2.75rem); font-weight: 600; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.01em; color: #111; }
        .ind-h2 { font-family: 'Montserrat', sans-serif; font-size: clamp(1.75rem, 3vw, 2rem); font-weight: 600; line-height: 1.15; margin-bottom: 1.5rem; letter-spacing: -0.01em; color: #111; }
        .ind-p { font-size: clamp(0.9375rem, 2vw, 1rem); color: #4B5563; line-height: 1.7; margin-bottom: 2rem; max-width: 600px; }
        .ind-btn-primary { background: #007A5E; color: #fff; padding: 0.6rem 1.35rem; font-size: 0.85rem; border-radius: 50px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; transition: background 0.3s; border: none; cursor: pointer; }
        .ind-btn-primary:hover { background: #0F5C4C; }
        .ind-btn-outline { background: transparent; color: #111; padding: 0.6rem 1.35rem; font-size: 0.85rem; border-radius: 50px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; transition: background 0.3s, border-color 0.3s; border: 1.5px solid #E5E7EB; cursor: pointer; }
        .ind-btn-outline:hover { background: #F9FAFB; border-color: #D1D5DB; }
        .ind-btn-text { color: #007A5E; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; font-size: 1.1rem; }
        .ind-btn-text:hover { text-decoration: underline; }
        .ind-glow { position: absolute; bottom: -50px; right: 0; width: clamp(800px, 60vw, 1200px); height: clamp(250px, 20vw, 400px); background: radial-gradient(ellipse at center, rgba(0, 122, 94, 0.7) 0%, rgba(204, 255, 0, 0.25) 55%, rgba(255,255,255,0) 85%); filter: blur(90px); pointer-events: none; z-index: 0; }
        .ind-img { border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); object-fit: cover; width: 100%; display: block; }
        .ind-card { background: #fff; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); padding: 2rem; transition: transform 0.3s, box-shadow 0.3s; }
        .ind-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .ind-icon-badge { width: 56px; height: 56px; border-radius: 50%; background: linear-gradient(160deg, #005A46 0%, #007A5E 55%, #004d3a 100%); color: #ffffff; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .ind-container { max-width: 1140px; margin: 0 auto; padding: 0 var(--section-px); width: 100%; box-sizing: border-box; }
        .ind-container-sm { max-width: 1040px; margin: 0 auto; padding: 0 var(--section-px); width: 100%; box-sizing: border-box; }
        .ind-container-lg { max-width: 1200px; margin: 0 auto; padding: 0 var(--section-px); width: 100%; box-sizing: border-box; }

        /* Hero: text column sized to match image column, matching About page proportions.
           380px hard cap removed from text elements below so this gap value is meaningful. */
        .ind-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7rem; align-items: center; }
        .ind-feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .ind-works-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; }
        .ind-resources-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .ind-testimonial-grid { display: grid; grid-template-columns: 400px 1fr; gap: 4rem; align-items: center; }

        .ind-hero-text { max-width: 480px; }

        @media (min-width: 1024px) and (max-width: 1439px) {
          :root { --section-px: clamp(40px, 6vw, 80px); }
          .ind-section { padding: clamp(40px, 6vw, 80px) 0; }
          .ind-container { max-width: 960px; }
          .ind-container-sm { max-width: 900px; }
          .ind-container-lg { max-width: 1000px; }
          .ind-hero-grid { gap: 4rem; }
          .ind-feature-grid { gap: 3.5rem; }
          .ind-works-grid { gap: 2rem; }
          .ind-resources-grid { gap: 1.5rem; }
          .ind-testimonial-grid { grid-template-columns: 380px 1fr; gap: 3rem; }
          .ind-hero-text { max-width: 420px; }
        }

        @media (min-width: 1440px) {
          :root { --section-px: clamp(80px, 9vw, 180px); }
          .ind-section { padding: clamp(80px, 9vw, 180px) 0; }
          .ind-container { max-width: 1400px; }
          .ind-container-sm { max-width: 1300px; }
          .ind-container-lg { max-width: 1450px; }
          .ind-hero-grid { grid-template-columns: 1fr 1fr; gap: 8rem; }
          .ind-feature-grid { gap: 8rem; }
          .ind-testimonial-grid { grid-template-columns: 450px 1fr; gap: 6rem; }
          .ind-hero-text { max-width: 540px; }
        }

        @media (max-width: 1023px) {
          .ind-hero-grid { grid-template-columns: 1fr; gap: 3rem; }
          .ind-feature-grid { grid-template-columns: 1fr; gap: 3rem; }
          .ind-works-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .ind-resources-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .ind-testimonial-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .ind-hero-text { max-width: 100%; }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="ind-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center', marginTop: '60px' }}>
        <div className="ind-glow" style={{ right: '-200px' }} />
        <div className="ind-container ind-hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="ind-hero-text" data-aos="fade-up">
            <span className="ind-eyebrow">Industry Solutions</span>
            <h1 className="ind-h1">{data.heroTitle}</h1>
            <p className="ind-p">Businesses don't struggle because they lack ambition. They struggle because technology, marketing, operations, and data operate independently. We engineer intelligent systems that help {data.name} organizations attract, engage, convert, and scale.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="ind-btn-primary">Schedule a Discovery Call</Link>
              <Link to="/solutions" className="ind-btn-outline">Explore Our Solutions</Link>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={pageImage} alt={data.name} className="ind-img" style={{ width: '100%', maxWidth: '480px', height: 'auto', aspectRatio: '1/1', borderRadius: '32px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="ind-section" style={{ background: '#fff' }}>
        <div className="ind-container-sm">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            <span className="ind-eyebrow">How Infynix AI Works</span>
            <h2 className="ind-h2" style={{ maxWidth: 700, margin: '0 auto' }}>AI that works as hard as your team.</h2>
          </div>
          <div className="ind-works-grid">
            {data.howItWorks?.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Globe;
              return (
                <div key={idx} data-aos="fade-up" data-aos-delay={(idx + 1) * 100} style={{ textAlign: 'center' }}>
                  <div className="ind-icon-badge" style={{ margin: '0 auto 1.5rem' }}>
                    <IconComponent size={33} color="#ffffff" strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#000000' }}>{item.title}</h3>
                  <p style={{ color: '#000000ff', lineHeight: 1.6, fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)', fontWeight: 500, margin: '0 auto' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURE BLOCK 1 (Text Left, Image Right) */}
      <section className="ind-section" style={{ overflow: 'hidden' }}>
        <div className="ind-container ind-feature-grid">
          <div data-aos="fade-right">
            <span className="ind-eyebrow">The Challenge</span>
            <h2 className="ind-h2">The bottleneck in {data.name}.</h2>
            <p className="ind-p">{data.challenge}</p>
            <p className="ind-p" style={{ marginTop: '1rem' }}>Traditional approaches fall short because they treat symptoms rather than engineering the underlying business systems. Disconnected investments create disconnected growth.</p>
          </div>
          <div data-aos="fade-left" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={data.images?.feature1 || defaultPlaceholders.feature1} alt="Industry Challenge" className="ind-img" style={{ width: '100%', maxWidth: '480px', borderRadius: '24px', aspectRatio: '4/3' }} />
          </div>
        </div>
      </section>

      {/* 4. FEATURE BLOCK 2 (Image Left, Text Right) */}
      <section className="ind-section" style={{ overflow: 'hidden' }}>
        <div className="ind-container ind-feature-grid">
          <div data-aos="fade-right" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={data.images?.feature2 || defaultPlaceholders.feature2} alt="Industry Solution" className="ind-img" style={{ width: '100%', maxWidth: '480px', borderRadius: '24px', aspectRatio: '4/3' }} />
          </div>
          <div data-aos="fade-left">
            <span className="ind-eyebrow">The Solution</span>
            <h2 className="ind-h2">The {data.name} Opportunity.</h2>
            <p className="ind-p">{data.opportunity}</p>
            <p className="ind-p" style={{ marginTop: '1rem' }}>Infynix combines engineering thinking with business strategy to build systems that scale. We engineer growth through connected solutions.</p>
          </div>
        </div>
      </section>

      {/* 5. FEATURED TESTIMONIAL SLIDER */}
      {/* <section className="ind-section" style={{ background: '#F4F5F0', position: 'relative' }}>
        <div className="ind-container-lg ind-testimonial-grid">

          
          <button
            onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
            style={{ position: 'absolute', left: 'clamp(20px, 5vw, 60px)', top: '50%', transform: 'translateY(-50%)', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button
            onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
            style={{ position: 'absolute', right: 'clamp(20px, 5vw, 60px)', top: '50%', transform: 'translateY(-50%)', width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0,0,0,0.05)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div data-aos="fade-right">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              style={{ width: '100%', height: '460px', objectFit: 'cover', borderRadius: '24px' }}
            />
          </div>
          <div data-aos="fade-left">
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 400, color: '#111', lineHeight: 1.4, marginBottom: '2rem' }}>
              "{testimonials[currentTestimonial].quote}"
            </div>
            <div style={{ fontWeight: 700, fontSize: '16px', color: '#111', marginBottom: '4px' }}>
              {testimonials[currentTestimonial].name}
            </div>
            <div style={{ fontSize: '14px', color: '#6B7280' }}>
              {testimonials[currentTestimonial].role}
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '3rem' }}>
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  style={{ height: '3px', flex: 1, background: idx === currentTestimonial ? '#007A5E' : '#E5E7EB', transition: 'background 0.3s' }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="ind-container" style={{ margin: '4rem auto 0', paddingTop: '4rem', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', opacity: 0.5 }}>
          {trustLogos.map((logo, idx) => (
            <img key={idx} src={logo} alt="Partner Logo" style={{ height: '32px', filter: 'grayscale(100%)', objectFit: 'contain' }} />
          ))}
        </div>
      </section> */}

      {/* 6. FEATURE BLOCK 3 (Internal Use Case) */}
      <section className="ind-section" style={{ overflow: 'hidden' }}>
        <div className="ind-container ind-feature-grid">
          <div data-aos="fade-right">
            <span className="ind-eyebrow">The Outcome</span>
            <h2 className="ind-h2">Measurable Business Impact.</h2>
            <p className="ind-p">Growth isn't achieved through isolated services. It is built through connected systems, strategic thinking, and continuous improvement. We deliver tangible business outcomes, not just technical deliverables.</p>
            <p className="ind-p" style={{ marginTop: '1rem' }}>Technology × AI × Performance × Automation = Sustainable Business Growth.</p>
          </div>
          <div data-aos="fade-left" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={data.images?.feature3 || defaultPlaceholders.feature3} alt="Employee Portal" className="ind-img" style={{ width: '100%', maxWidth: '480px', borderRadius: '24px', aspectRatio: '4/3' }} />
          </div>
        </div>
      </section>

      {/* 6.5. RECOMMENDED SOLUTIONS */}
      {data.solutions && data.solutions.length > 0 && (
        <section className="ind-section" style={{ background: '#F9FAFB', overflow: 'hidden' }}>
          <div className="ind-container">
            <h2 className="ind-h2" data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>Recommended Solutions for {data.name}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {data.solutions.map((solution, idx) => (
                <div key={idx} className="ind-card" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem' }}>
                  <div style={{ color: '#007A5E', flexShrink: 0, marginTop: '2px' }}><CheckIcon /></div>
                  <span style={{ color: '#111', fontWeight: 500, lineHeight: 1.5 }}>{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. INTEGRATIONS BLOCK */}
      <section className="ind-section" style={{ background: '#fff' }}>
        <div className="ind-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span className="ind-eyebrow" data-aos="fade-up">Integrations</span>
          <h2 className="ind-h2" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: 600 }}>Plays perfectly with the tools you already use.</h2>
          <p className="ind-p" data-aos="fade-up" data-aos-delay="200" style={{ marginBottom: '4rem' }}>No need to rip and replace. Our systems connect securely to your existing ERP, CRM, and communication platforms via robust APIs.</p>
          <div data-aos="zoom-in" data-aos-delay="300" style={{ width: '100%', maxWidth: '720px', display: 'flex', justifyContent: 'center' }}>
            <img src={data.images?.integrations || defaultPlaceholders.integrations} alt="Integrations" className="ind-img" style={{ width: '100%', borderRadius: '24px', aspectRatio: '16/9' }} />
          </div>
        </div>
      </section>

      {/* 8. ADDITIONAL RESOURCES GRID */}
      {/* <section className="ind-section" style={{ background: '#fff' }}>
        <div className="ind-container">
          <h2 className="ind-h2" style={{ marginBottom: '3rem' }} data-aos="fade-up">Additional Resources</h2>
          <div className="ind-resources-grid">
            {[0, 1, 2].map((idx) => (
              <a href="#resource" key={idx} className="ind-card" style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', display: 'block', border: '1px solid #E5E7EB' }} data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                <div style={{ height: 160, background: '#E5E7EB' }}>
                  <img src={resourceImages[idx]} alt="Resource thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#007A5E', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem', display: 'block' }}>
                    {idx === 0 ? 'Trend Report' : idx === 1 ? 'Webinar' : 'Case Study'}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#111', lineHeight: 1.4 }}>The future of {data.name.toLowerCase()} operations and digital scaling.</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* 8.5. FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="ind-section" style={{ background: '#F9FAFB' }}>
          <div className="ind-container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
              <span className="ind-eyebrow">Frequently Asked Questions</span>
              <h2 className="ind-h2" style={{ maxWidth: 700, margin: '0 auto' }}>Common Questions About {data.name}.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 800, margin: '0 auto' }}>
              {data.faqs.map((faq, idx) => (
                <details key={idx} className="ind-card" style={{ padding: '1.5rem', cursor: 'pointer', outline: 'none' }} data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                  <summary style={{ fontSize: '1.15rem', fontWeight: 600, color: '#111', outline: 'none' }}>
                    {faq.q}
                  </summary>
                  <p style={{ marginTop: '1rem', color: '#4B5563', lineHeight: 1.6 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. FINAL CTA BAND */}
      <section className="ind-section" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="ind-glow" style={{ left: '50%', transform: 'translateX(-50%)', bottom: '-150px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '0 var(--section-px)' }} data-aos="zoom-in">
          <h2 className="ind-h1" style={{ marginBottom: '1.5rem' }}>Engineer Your Growth Strategy.</h2>
          <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: 650, margin: '0 auto 2.5rem' }}>
            Stop managing disjointed processes and start building a unified growth machine. Schedule a discovery call with Infynix to see how we can engineer your path to sustainable {data.name} leadership.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="ind-btn-primary">Schedule a Discovery Call</Link>
            <Link to="/solutions" className="ind-btn-outline">Explore Our Solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;