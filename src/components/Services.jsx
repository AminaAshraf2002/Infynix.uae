import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const useAnimateOnScroll = (threshold = 0.12) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll('.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-scale')
        .forEach((t) => observer.observe(t));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
};

// --- Exact UK Website SVG Wireframe Icons ---
const TargetArrowIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" style={{ width: '100%', height: '100%' }}>
    {/* Outer dashed/solid concentric rings */}
    <circle cx="50" cy="50" r="34" stroke="#007A5E" strokeWidth="1.6" strokeDasharray="4 3" />
    <circle cx="50" cy="50" r="23" stroke="#007A5E" strokeWidth="1.6" />
    <circle cx="50" cy="50" r="12" stroke="#007A5E" strokeWidth="1.6" />
    <circle cx="50" cy="50" r="5" fill="#007A5E" />
    {/* Diagonal arrow pointing top-right */}
    <line x1="50" y1="50" x2="74" y2="26" stroke="#A7D600" strokeWidth="2.2" strokeLinecap="round" />
    <polyline points="60,26 74,26 74,40" fill="none" stroke="#A7D600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FilmCameraIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" style={{ width: '100%', height: '100%' }}>
    {/* Two circular film reels on top */}
    <circle cx="36" cy="27" r="9" stroke="#007A5E" strokeWidth="1.6" />
    <circle cx="36" cy="27" r="3" fill="#007A5E" />
    <circle cx="56" cy="27" r="9" stroke="#007A5E" strokeWidth="1.6" />
    <circle cx="56" cy="27" r="3" fill="#007A5E" />
    {/* Camera rectangular body */}
    <rect x="25" y="38" width="42" height="32" rx="4" stroke="#007A5E" strokeWidth="1.6" />
    <circle cx="46" cy="54" r="7" stroke="#A7D600" strokeWidth="1.6" />
    {/* Lens cone on right */}
    <polygon points="67,45 83,35 83,63 67,53" stroke="#A7D600" strokeWidth="1.6" strokeLinejoin="round" />
    {/* Stand base lines */}
    <line x1="38" y1="70" x2="33" y2="80" stroke="#007A5E" strokeWidth="1.6" />
    <line x1="54" y1="70" x2="59" y2="80" stroke="#007A5E" strokeWidth="1.6" />
  </svg>
);

const CodeBrowserIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" style={{ width: '100%', height: '100%' }}>
    {/* Browser window */}
    <rect x="18" y="24" width="64" height="46" rx="6" stroke="#007A5E" strokeWidth="1.6" />
    <line x1="18" y1="36" x2="82" y2="36" stroke="#007A5E" strokeWidth="1.6" />
    {/* 3 top dots */}
    <circle cx="26" cy="30" r="2" fill="#A7D600" />
    <circle cx="32" cy="30" r="2" fill="#A7D600" />
    <circle cx="38" cy="30" r="2" fill="#A7D600" />
    {/* Code brackets </ > */}
    <path d="M37 46L29 53L37 60" stroke="#A7D600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="47" y1="62" x2="53" y2="44" stroke="#007A5E" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M63 46L71 53L63 60" stroke="#A7D600" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Stand base below */}
    <line x1="50" y1="70" x2="50" y2="78" stroke="#007A5E" strokeWidth="1.6" />
    <line x1="38" y1="78" x2="62" y2="78" stroke="#007A5E" strokeWidth="1.6" />
  </svg>
);

const services = [
  {
    icon: <TargetArrowIcon />,
    title: 'Infynix Agency',
    layerPrefix: 'Layer 01',
    layerName: 'Distribution',
    desc: 'Performance marketing agency for UAE brands, built to put the finished system in front of the right people.',
    link: '/solutions/infynix-agency',
  },
  {
    icon: <FilmCameraIcon />,
    title: 'Infynix Media',
    layerPrefix: 'Layer 02',
    layerName: 'Content',
    desc: 'Media production for UAE companies, built to fill the systems layer with something worth looking at.',
    link: '/solutions/infynix-media',
  },
  {
    icon: <CodeBrowserIcon />,
    title: 'Infynix Development',
    layerPrefix: 'Layer 03',
    layerName: 'Systems',
    desc: 'AI-native software for UAE businesses, built to run everything above it in the stack.',
    link: '/solutions/infynix-growth-solutions',
  }
];

const Services = () => {
  const containerRef = useAnimateOnScroll();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState(services[0]);
  const [fade, setFade] = useState(false);

  // IntersectionObserver to monitor active service scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('.service-item');
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger near middle of viewport
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(items).indexOf(entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [containerRef]);

  // Smoothly fade left content out, change tagline, and fade back in
  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      setActiveLayer(services[activeIndex]);
      setFade(false);
    }, 300); // match transition speed

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section id="services" ref={containerRef} aria-label="Services">
      <div className="services-wrap">
        {/* Left Sticky Column */}
        <div className="services-left">
          <span className="svc-label">The Growth Stack</span>
          <h2 className={`svc-tagline ${fade ? 'hidden' : ''}`}>
            {activeLayer.layerPrefix}
            <br />
            {activeLayer.layerName}
          </h2>
        </div>

        {/* Right Scrolling Column */}
        <div className="services-right">
          {services.map((svc, i) => {
            const words = svc.title.split(' ');
            const secondPart = words.pop();
            const firstPart = words.join(' ');

            return (
              <div
                key={svc.title}
                className="service-item anim-fade-up"
              >

                <div 
                  className="svc-icon" 
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    marginBottom: '2rem', 
                    transition: 'transform 0.8s ease'
                  }}
                >
                  {svc.icon}
                </div>
                <div className="svc-name-wrap">
                  <span className="svc-name-bold">{firstPart}</span>
                  <span className="svc-name-italic">{secondPart}</span>
                </div>
                <p className="svc-desc">{svc.desc}</p>
                <Link to={svc.link} className="svc-btn" aria-label={`Learn more about ${svc.title}`}>
                  Learn More
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 13L13 1M13 1H5M13 1v8" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
