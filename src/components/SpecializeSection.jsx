import { useEffect, useRef } from 'react';
import { useIxReveal } from './WhoWeAre';
import { Link } from 'react-router-dom';

const SpecializeSection = () => {
  useIxReveal();
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const words = textRef.current?.querySelectorAll('.word');
    if (!words) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = (viewportHeight - rect.top) / (sectionHeight + viewportHeight);
      const progress = Math.max(0, Math.min(1, scrolled));

      const totalWords = words.length;
      const wordsToReveal = Math.floor(progress * totalWords * 1.5);

      words.forEach((word, i) => {
        if (i < wordsToReveal) {
          word.classList.add('active');
        } else {
          word.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text1 = "We build interconnected business systems that help you";
  const text2 = "Attract, Engage, Convert, Optimize,";
  const text3 = "and Scale.";

  return (
    <section className="specialize-section" id="specialize" ref={sectionRef} style={{ 
      background: 'black',
      color: '#fff',
      padding: 'clamp(80px, 10vw, 140px) 5%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorations */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0,122,94,0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,122,94,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <span className="ix-eyebrow ix-eyebrow--light" data-aos="fade-up">Our Expertise</span>
        
        <h2 className="specialize-text" ref={textRef} style={{ 
          fontFamily: '"Albert Sans", sans-serif', 
          fontWeight: 700, 
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          maxWidth: '1360px'
        }}>
          {text1.split(' ').map((w, i) => (
             <span className="word" key={`a-${i}`}>{w}</span>
           ))} 
           {' '}
           {text2.split(' ').map((w, i) => (
             <span className="word" style={{ color: 'rgb(167, 214, 0)' }} key={`b-${i}`}>{w}</span>
           ))}
           {' '}
           {text3.split(' ').map((w, i) => (
             <span className="word" key={`c-${i}`}>{w}</span>
           ))}
        </h2>
        
        {/* <p data-aos-delay="200" data-aos="fade-up" style={{
          fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '1000px',
          lineHeight: 1.7
        }}>
          Infynix Solutions delivers end-to-end Growth Engineering — combining custom software development, AI-driven automation, performance marketing, and enterprise-grade systems architecture into one connected growth engine. We help healthcare providers, educational institutions, real estate firms, manufacturers, and retail brands replace fragmented tools with intelligent, integrated systems that reduce operational overhead and accelerate measurable business outcomes. From AI Surveillance and Attendance Systems to custom CRM/ERP development, cloud infrastructure, and technical SEO, our engineering-first approach ensures every solution is built to scale alongside your business — not just today, but for the next stage of growth.
        </p> */}

        {/* <div data-aos-delay="250" data-aos="fade-up" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          marginTop: '1rem',
          marginBottom: '1rem'
        }}>
          {[
            { stat: '8+', label: 'Industries Served' },
            { stat: '20+', label: 'Custom Systems Engineered' },
            { stat: '40%', label: 'Avg. Reduction in Manual Operations' },
            { stat: '3x', label: 'Faster Deployment with Connected Architecture' }
          ].map((item, idx) => (
            <div key={idx} style={{ borderLeft: '2px solid rgb(167, 214, 0)', paddingLeft: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '0.25rem' }}>{item.stat}</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{item.label}</div>
            </div>
          ))}
        </div> */}

        <div data-aos-delay="300" data-aos="fade-up" style={{ marginTop: '1rem' }}>
          <Link to="/about" className="ix-btn-outline-wh">
            Explore Our Methodology
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecializeSection;