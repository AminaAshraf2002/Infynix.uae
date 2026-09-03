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
      <span className="hero-eyebrow">GROWTH ENGINEERING COMPANY</span>
      <h1 className="hero-title" style={{ fontWeight: '500', fontSize: 'clamp(48px, 8vw, 95px)', letterSpacing: '0.05em' }}>
        Growth Engineering for<br />
        <span className="title-highlight">Businesses Built to Scale.</span>
      </h1>
      <p className="hero-subtitle">
        We engineer connected technology, marketing, and operations systems that turn disconnected growth into sustainable business growth.
      </p>
      <div className="hero-actions" style={{ marginTop: '30px' }}>
        <button
          className="btn btn-primary outline-btn-hover"
          onClick={() => window.location.href = '/contact'}
          style={{ backgroundColor: ' rgb(214, 250, 86)', color: '#111', border: 'none', padding: '12px 24px', borderRadius: '100px', cursor: 'pointer', fontWeight: '700' }}
        >
          Book a Discovery Call
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => window.location.href = '/growth-engineering'}
          style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', padding: '12px 24px', borderRadius: '100px', cursor: 'pointer', fontWeight: '500' }}
        >
          Learn About Growth Engineering
        </button>
      </div>
    </div>
  </div>
</section>
  );
}

export default HeroSection;
