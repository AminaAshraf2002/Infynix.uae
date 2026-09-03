import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import healthcareIcon from '../assets/healthcare.png';
import educationIcon from '../assets/education.png';
import constructionIcon from '../assets/construction.png';
import realEstateIcon from '../assets/real-estate.png';
import manufacturingIcon from '../assets/manufacturing.png';
import retailIcon from '../assets/retail.png';
import hospitalityIcon from '../assets/hospitality.png';
import professionalServicesIcon from '../assets/professional-services.png';

const indLeft = [
  { path: '/industries/healthcare', icon: healthcareIcon, title: 'Healthcare', desc: 'Automate care, records, and compliance workflows.' },
  { path: '/industries/education', icon: educationIcon, title: 'Education', desc: 'Modernize enrollment, learning, and communication.' },
  { path: '/industries/construction', icon: constructionIcon, title: 'Construction', desc: 'Centralize project data, budgets, and site tracking.' },
  { path: '/industries/real-estate', icon: realEstateIcon, title: 'Real Estate', desc: 'CRM and automation built for faster deal closing.' }
];

const indRight = [
  { path: '/industries/manufacturing', icon: manufacturingIcon, title: 'Manufacturing', desc: 'Connect production, inventory, and supply chain data.' },
  { path: '/industries/retail', icon: retailIcon, title: 'Retail & Commerce', desc: 'Unify inventory, customers, and channels.' },
  { path: '/industries/hospitality', icon: hospitalityIcon, title: 'Hospitality', desc: 'Automate bookings, guest service, and operations.' },
  { path: '/industries/professional-services', icon: professionalServicesIcon, title: 'Professional Services', desc: 'Systems for billing, projects, and client experience.' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileIndOpen, setMobileIndOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const hoverTimeout = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, isMobile]);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    hoverTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
    setVisible(true);
  }, [location.pathname]);

  const [preHeaderVisible, setPreHeaderVisible] = useState(true);

  return (
    <>
      {preHeaderVisible && !scrolled && (
        <div className="pre-header-bar">
          <div className="pre-header-content">
            <div className="pre-header-left">
              <span><strong>Case Study:</strong> See how we helped a healthcare business unify systems and scale faster.</span>
            </div>
            <div className="pre-header-right">
              <Link to="/case-studies" className="pre-header-link">Read the Story</Link>
              <button className="pre-header-close" onClick={() => setPreHeaderVisible(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <nav 
        id="navbar" 
        className={`site-header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''} ${preHeaderVisible ? 'has-preheader' : ''}`}
        style={{
          transform: (visible || menuOpen) ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease, padding 0.3s ease, border-radius 0.3s ease'
        }}
      >
        <div className="nav-container-new">
          <div className="nav-top-row">
           
          </div>
          <div className="nav-main-row">
            <div className="nav-main-left">
              <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="Infynix Logo" />
              </Link>
            </div>
            
            <div className="nav-main-center">
              <ul className="nav-links-new">
                <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/growth-engineering" className="nav-link" onClick={() => setMenuOpen(false)}>Growth Engineering</Link></li>
                <li><Link to="/solutions" className="nav-link" onClick={() => setMenuOpen(false)}>Solutions</Link></li>
                <li 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                  style={{ position: 'relative', width: isMobile ? '100%' : 'auto' }}
                >
                  <div className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start', backgroundColor: dropdownOpen ? 'rgba(0,122,94,0.05)' : 'transparent', borderRadius: '8px', padding: '8px 12px', margin: '-8px -12px', cursor: 'pointer', width: isMobile ? '100%' : 'auto' }} onClick={() => { if(isMobile) { setMobileIndOpen(!mobileIndOpen); } else { setMenuOpen(false); } }}>
                    Industries
                    <svg style={{ marginLeft: '4px', transform: (isMobile ? mobileIndOpen : dropdownOpen) ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                  
                  {!isMobile && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: dropdownOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
                      width: '1060px',
                      backgroundColor: '#ffffff',
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                      padding: '40px 48px',
                      marginTop: '12px',
                      opacity: dropdownOpen ? 1 : 0,
                      visibility: dropdownOpen ? 'visible' : 'hidden',
                      transition: 'all 0.2s ease',
                      pointerEvents: dropdownOpen ? 'auto' : 'none',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1px 1fr',
                      gap: '40px',
                      cursor: 'default',
                      zIndex: 1000
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {indLeft.map((item, i) => (
                          <Link key={i} to={item.path} onClick={() => { setDropdownOpen(false); setMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '12px', textDecoration: 'none', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                            <img src={item.icon} alt={item.title} style={{ width: 40, height: 40, borderRadius: '10px', objectFit: 'cover' }} />
                            <div>
                              <div style={{ fontSize: '15px', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: '#111', marginBottom: '4px' }}>{item.title}</div>
                              <div style={{ fontSize: '14px', color: '#000', lineHeight: 1.4 }}>{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div style={{ backgroundColor: '#E5E7EB', width: '100%', height: '100%' }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {indRight.map((item, i) => (
                          <Link key={i} to={item.path} onClick={() => { setDropdownOpen(false); setMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '12px', textDecoration: 'none', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                            <img src={item.icon} alt={item.title} style={{ width: 40, height: 40, borderRadius: '10px', objectFit: 'cover' }} />
                            <div>
                              <div style={{ fontSize: '15px', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: '#111', marginBottom: '4px' }}>{item.title}</div>
                              <div style={{ fontSize: '14px', color: '#000', lineHeight: 1.4 }}>{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {isMobile && mobileIndOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px', width: '100%', padding: '0 16px' }}>
                      {[...indLeft, ...indRight].map((item, i) => (
                        <Link key={i} to={item.path} onClick={() => { setMobileIndOpen(false); setMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', borderRadius: '12px', backgroundColor: '#F9FAFB', textDecoration: 'none' }}>
                          <img src={item.icon} alt={item.title} style={{ width: 32, height: 32, borderRadius: '8px', objectFit: 'cover' }} />
                          <div style={{ fontSize: '14px', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: '#111' }}>{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <li><Link to="/case-studies" className="nav-link" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
                <li><Link to="/insights" className="nav-link" onClick={() => setMenuOpen(false)}>Insights</Link></li>
                <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link></li>
              </ul>
            </div>

            <div className="nav-main-right">
              <Link to="/contact" className="header-cta desktop-only">
                Contact Us
              </Link>
              {/* <button className="search-icon-btn" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button> */}
              <button 
                className={`nav-hamburger ${menuOpen ? 'open' : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                style={{ zIndex: 3000, position: 'relative' }}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      {isMobile && (
        <div className={`nav-mobile-overlay ${menuOpen ? 'open' : ''}`}>
          
          <div className="mobile-menu-inner">
            <div className="mobile-nav-links">
              <Link to="/" className="mobile-menu-link stagger-1" onClick={() => setMenuOpen(false)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span className="mobile-link-num">01</span>
                  <span className="mobile-link-text">Home</span>
                </div>
                <span className="mobile-link-arrow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </Link>
              <Link to="/growth-engineering" className="mobile-menu-link stagger-2" onClick={() => setMenuOpen(false)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span className="mobile-link-num">02</span>
                  <span className="mobile-link-text">Engineering</span>
                </div>
                <span className="mobile-link-arrow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </Link>
              <Link to="/solutions" className="mobile-menu-link stagger-3" onClick={() => setMenuOpen(false)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span className="mobile-link-num">03</span>
                  <span className="mobile-link-text">Solutions</span>
                </div>
                <span className="mobile-link-arrow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </Link>
              <Link to="/case-studies" className="mobile-menu-link stagger-4" onClick={() => setMenuOpen(false)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span className="mobile-link-num">04</span>
                  <span className="mobile-link-text">Case Studies</span>
                </div>
                <span className="mobile-link-arrow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </Link>
              <Link to="/insights" className="mobile-menu-link stagger-5" onClick={() => setMenuOpen(false)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span className="mobile-link-num">05</span>
                  <span className="mobile-link-text">Insights</span>
                </div>
                <span className="mobile-link-arrow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </Link>
              <Link to="/about" className="mobile-menu-link stagger-6" onClick={() => setMenuOpen(false)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span className="mobile-link-num">06</span>
                  <span className="mobile-link-text">About Us</span>
                </div>
                <span className="mobile-link-arrow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </Link>
            </div>

            <div className="mobile-menu-footer stagger-7">
              <Link to="/contact" className="mobile-menu-cta" onClick={() => setMenuOpen(false)}>
                Start a Project <span style={{ marginLeft: '8px' }}>→</span>
              </Link>
              <div className="mobile-socials">
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;