import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useIxReveal } from './WhoWeAre';
import logo from '../assets/footer.png';
import ukLImage from '../assets/UKL.svg';
import dubaiImage from '../assets/dubai.svg';
import kochiImage from '../assets/kochi.svg';

const ClientsSection = () => {
  useIxReveal();
  
  const getClientLogo = (name, color) => {
    switch (name) {
      case 'IPSY':
        return (
          <svg viewBox="0 0 110 36" width="110" height="36">
            <text x="2" y="27" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="28" fill={color} letterSpacing="-0.03em">IPSY</text>
          </svg>
        );
      case 'KOHLER':
        return (
          <svg viewBox="0 0 130 36" width="130" height="36">
            <text x="2" y="27" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="22" fill={color} letterSpacing="0.15em">KOHLER</text>
          </svg>
        );
      case 'AZADEA':
        return (
          <svg viewBox="0 0 130 36" width="130" height="36">
            <text x="2" y="28" fontFamily="'Outfit', sans-serif" fontWeight="300" fontSize="26" fill={color} letterSpacing="0.05em">AZADEA</text>
          </svg>
        );
      case 'alo':
        return (
          <svg viewBox="0 0 70 36" width="70" height="36">
            <text x="2" y="28" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="30" fill={color} letterSpacing="-0.01em">alo</text>
          </svg>
        );
      case "Lowe's":
        return (
          <svg viewBox="0 0 140 36" width="140" height="36">
            <path d="M6 20 L14 10 L22 20 L22 30 L6 30 Z" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
            <path d="M10 24 L14 20 L18 24" fill="none" stroke={color} strokeWidth="1.5" />
            <text x="28" y="27" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="20" fill={color} letterSpacing="0.01em">LOWE'S</text>
          </svg>
        );
      case 'COACH':
        return (
          <svg viewBox="0 0 110 36" width="110" height="36">
            <text x="2" y="27" fontFamily="'Playfair Display', Georgia, serif" fontWeight="700" fontSize="24" fill={color} letterSpacing="0.07em">COACH</text>
          </svg>
        );
      case 'TATCHA':
        return (
          <svg viewBox="0 0 140 36" width="140" height="36">
            <circle cx="14" cy="18" r="11" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="14" cy="18" r="5" fill="none" stroke={color} strokeWidth="1" />
            <text x="32" y="25" fontFamily="'Playfair Display', Georgia, serif" fontWeight="600" fontSize="20" fill={color} letterSpacing="0.08em">TATCHA</text>
          </svg>
        );
      case 'tapestry':
        return (
          <svg viewBox="0 0 130 36" width="130" height="36">
            <text x="2" y="26" fontFamily="'Playfair Display', Georgia, serif" fontWeight="400" fontSize="22" fill={color} fontStyle="italic" letterSpacing="0.01em">tapestry</text>
          </svg>
        );
      default:
        return <span style={{ color }}>{name}</span>;
    }
  };

  const clients = [
    { name: 'IPSY' }, { name: 'KOHLER' }, { name: 'AZADEA' }, { name: 'alo' },
    { name: "Lowe's" }, { name: 'COACH' }, { name: 'TATCHA' }, { name: 'tapestry' },
  ];

  return (
    <section className="clients-section" id="clients" style={{ background: '#007A5E', paddingTop: '80px' }}>
      
      {/* Stats Section */}
      {/* <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 5%', marginBottom: '80px' }}>
        <h2 data-aos="fade-up" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem', maxWidth: '700px' }}>
          Over a decade helping enterprise businesses scale.
        </h2>
        
        <p data-aos-delay="100" data-aos="fade-up" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '800px', marginBottom: '4rem' }}>
          From idea validation to advanced growth, we combine strategic insight and modern tools to help your business make smarter decisions and scale faster in a rapidly changing market.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div data-aos-delay="100" data-aos="fade-up">
            <div style={{ color: '#fff', fontSize: '3.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>95%</div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontWeight: 500 }}>Complete customer satisfaction</div>
          </div>
          <div data-aos-delay="200" data-aos="fade-up">
            <div style={{ color: '#fff', fontSize: '3.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>150+</div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontWeight: 500 }}>Systems & scalable platforms shipped</div>
          </div>
          <div data-aos-delay="300" data-aos="fade-up">
            <div style={{ color: '#fff', fontSize: '3.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>$1B+</div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', fontWeight: 500 }}>Revenue unlocked for clients</div>
          </div>
        </div>
      </div> */}

      {/* White Logo Banner */}
      {/* <div data-aos="fade-up" style={{ background: '#fff', padding: '2.5rem 0', overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
        <div style={{ display: 'inline-flex', gap: '4rem', paddingLeft: '4rem', animation: 'ix-scroll-marquee 30s linear infinite' }}>
          {clients.concat(clients).map((client, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {getClientLogo(client.name, '#1F2937')}
            </div>
          ))}
        </div>
      </div> */}
      {/* CTA Card — "Let's create great things." */}
      <div className="cta-home-card" id="contact">
        <h2 className="cta-home-heading">
          Let's create <em>great things.</em>
        </h2>
        <a href="mailto:hello@infynix-solutions.com" className="cta-home-btn" id="cta-getintouch-btn">
          Get in touch
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 13L13 1M13 1H5M13 1v8" />
          </svg>
        </a>
      </div>

      {/* Footer — inside clients section */}
      <footer className="premium-footer spec-footer" style={{ padding: '80px 3rem 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Replica Locations Row */}
          <div className="footer-locations-grid">
            <div className="footer-brand-col">
              <Link to="/" className="footer-logo" style={{ textDecoration: 'none' }}>
                <img 
                  src={logo} 
                  alt="Infynix Logo" 
                  style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '8px' }} 
                />
              </Link>
              <p className="footer-brand-desc">
                Your Trusted Partner for Digital Transformation, Empowering Growth and Digital Operations Worldwide.
              </p>
            </div>

            <div className="footer-location-card">
              <img src={ukLImage} alt="UK London Office" className="footer-location-svg" />
              <div className="footer-location-title">UK - LONDON</div>
              <div className="footer-location-addr">
                1-75 Shelton St,<br />
                London, WC2H 9JQ
              </div>
            </div>

            <div className="footer-location-card">
              <img src={dubaiImage} alt="Dubai UAE Office" className="footer-location-svg" />
              <div className="footer-location-title">DUBAI - UAE</div>
              <div className="footer-location-addr">
                Business Bay,<br />
                Dubai, UAE
              </div>
            </div>

            <div className="footer-location-card">
              <img src={kochiImage} alt="Kochi India Office" className="footer-location-svg" />
              <div className="footer-location-title">INDIA - KOCHI</div>
              <div className="footer-location-addr">
                7th Floor, National Pearl Star Building,<br />
                next to Changampuzha Metro Station,<br />
                Devankulangara, Mamangalam, Edappally,<br />
                Ernakulam, Kochi, Kerala 682024
              </div>
            </div>
          </div>

          <hr className="footer-divider" style={{ margin: '40px 0' }} />

          {/* Bottom Links Row */}
          <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
            <div className="footer-nav-grid" style={{ width: '100%' }}>
              <div className="footer-nav-col">
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>ABOUT</span>
                <Link to="/about">Company</Link>
                <Link to="/case-studies">Featured Work</Link>
                <Link to="/insights">Insights</Link>
              </div>
              <div className="footer-nav-col">
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>SERVICES</span>
                <Link to="/solutions/infynix-agency">Infynix Agency</Link>
                <Link to="/solutions/infynix-media">Infynix Media</Link>
                <Link to="/solutions/infynix-growth-solutions">Infynix Growth</Link>
              </div>
              <div className="footer-nav-col">
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>INDUSTRIES</span>
                <Link to="/industries/retail">Retail & Commerce</Link>
                <Link to="/industries/healthcare">Healthcare</Link>
                <Link to="/industries/education">Education</Link>
              </div>
              <div className="footer-nav-col">
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>LEGAL</span>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-service">Terms of Use</Link>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">XML Sitemap</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', marginTop: '40px', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <p style={{ fontSize: '0.8rem', color: '#ffffff' }}>© 2026 Infynix Solutions UK. Engineered for Excellence.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ClientsSection;
