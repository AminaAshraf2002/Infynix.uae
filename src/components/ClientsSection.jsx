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
    <section className="clients-section" id="clients" style={{ background: '#007A5E', paddingTop: '10px' }}>
      {/* CTA Card — "Let's create great things." */}
      <div className="cta-home-card" id="contact" style={{ margin: '20px auto 40px' }}>
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
      <footer className="premium-footer spec-footer" style={{ padding: '40px 5% 30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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
              <img src={dubaiImage} alt="UAE Office" className="footer-location-svg" />
              <div className="footer-location-title">UAE</div>
              <div className="footer-location-addr">
                C1 Building - Office C1 1F-SF6540,<br />
                Free Zone, Al Butain,<br />
                Ajman, UAE
              </div>
            </div>

            <div className="footer-location-card">
              <a href="https://maps.google.com/?q=68+Endsleigh+Gardens,+Ilford+IG1+3EG,+United+Kingdom" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={ukLImage} alt="UK London Office" className="footer-location-svg" />
                <div className="footer-location-title">UK - LONDON ↗</div>
                <div className="footer-location-addr">
                  68 Endsleigh Gardens,<br />
                  Ilford IG1 3EG,<br />
                  United Kingdom
                </div>
              </a>
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

          <hr className="footer-divider" style={{ margin: '30px 0', borderColor: 'rgba(255,255,255,0.15)' }} />

          {/* Bottom Links Row */}
          <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}>
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
                <Link to="/industries">All Industries</Link>
                <Link to="/industries/retail">Retail & Commerce</Link>
                <Link to="/industries/healthcare">Healthcare</Link>
                <Link to="/industries/education">Education</Link>
              </div>
              <div className="footer-nav-col">
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>DUBAI</span>
                <Link to="/digital-marketing-agency-in-dubai">Digital Marketing in Dubai</Link>
                <Link to="/software-development-company-in-dubai">Software Development Dubai</Link>
                <Link to="/seo-company-in-dubai">SEO Company Dubai</Link>
                <Link to="/web-design-company-in-dubai">Web Design Dubai</Link>
              </div>
              <div className="footer-nav-col">
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>ABU DHABI</span>
                <Link to="/digital-marketing-agency-in-abu-dhabi">Digital Marketing in Abu Dhabi</Link>
                <Link to="/software-development-company-in-abu-dhabi">Software Development Abu Dhabi</Link>
                <Link to="/seo-company-in-abu-dhabi">SEO Company Abu Dhabi</Link>
                <Link to="/web-design-company-in-abu-dhabi">Web Design Abu Dhabi</Link>
              </div>
              <div className="footer-nav-col">
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>SHARJAH</span>
                <Link to="/digital-marketing-agency-in-sharjah">Digital Marketing in Sharjah</Link>
                <Link to="/seo-company-in-sharjah">SEO Company in Sharjah</Link>
                <Link to="/web-design-company-in-sharjah">Web Design Company Sharjah</Link>
                <Link to="/software-development-company-in-sharjah">Software Development Sharjah</Link>
              </div>
              <div className="footer-nav-col">
                <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>LEGAL</span>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-service">Terms of Use</Link>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">XML Sitemap</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '30px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            <p style={{ fontSize: '0.8rem', color: '#ffffff' }}>© 2026 Infynix Solutions. Engineered for Excellence.</p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/infynix-solutions-uae/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/infynixsolutions.ae/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Infynix-Solutions-UAE/61584754534164/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ClientsSection;
