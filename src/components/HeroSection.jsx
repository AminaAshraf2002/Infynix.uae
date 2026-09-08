import React from 'react';
import './HeroSection.css';
import heroBg from '../assets/newhero.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';

const SERVER_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function HeroSection({ data }) {
  // Use first slide or fallback to heroBg
  const staticSlide = data?.slides && data.slides.length > 0 ? data.slides[0] : { image: heroBg };

  const getImgUrl = (path) => {
    if (!path) return "";
    const formatted = path.replace(/\\/g, "/");
    if (formatted.startsWith("http") || formatted.startsWith("/") || formatted.startsWith("data:")) {
      return formatted;
    }
    return `${SERVER_URL}/${formatted}`;
  };

  const handlePrimaryClick = () => {
    window.location.href = "/contact";
  };

  return (
   <section className="hero-section">
  <div className="hero-bg-wrapper" style={{ backgroundImage: `url(${getImgUrl(staticSlide?.image)})` }}>
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <span className="hero-eyebrow" style={{ fontFamily: "'Montserrat', Arial, sans-serif", fontWeight: '700' }}>
        — GROWTH ENGINEERING COMPANY
      </span>
      <h1 className="hero-title" style={{ fontFamily: "'Montserrat', Arial, sans-serif", fontWeight: '700', fontSize: 'clamp(44px, 7.5vw, 88px)', letterSpacing: '-0.02em' }}>
        The Growth <span className="title-highlight">Engineering</span><br />
        Company
      </h1>
      <p className="hero-subtitle" style={{ fontFamily: "var(--ix-font-body, 'Montserrat', Arial, sans-serif)" }}>
        Software, AI vision, and retail growth systems.
      </p>
      <div className="hero-actions" style={{ marginTop: '30px' }}>
        <button
          className="btn btn-primary outline-btn-hover hero-btn"
          onClick={() => window.location.href = '/contact'}
          style={{ fontFamily: "'Montserrat', Arial, sans-serif", backgroundColor: 'rgb(214, 250, 86)', color: '#111', border: 'none', padding: '12px 24px', borderRadius: '100px', cursor: 'pointer', fontWeight: '700' }}
        >
          Book a Discovery Call
        </button>
        <button
          className="btn btn-secondary hero-btn"
          onClick={() => window.location.href = '/growth-engineering'}
          style={{ fontFamily: "'Montserrat', Arial, sans-serif", backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', padding: '12px 24px', borderRadius: '100px', cursor: 'pointer', fontWeight: '700' }}
        >
          Explore Growth Engineering
        </button>
      </div>
    </div>
  </div>
</section>
  );
}

export default HeroSection;
