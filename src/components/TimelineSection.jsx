import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { HelpCircle, Target, Lightbulb, Settings, TrendingUp, CheckCircle } from 'lucide-react';
import './TimelineSection.css';

const timelineData = [
  {
    id: 1,
    icon: Target,
    badgeColor: 'rgb(254, 235, 126)',
    title: "1 Measure",
    pillText: "Stage 1",
    description: "Score the business across six pillars before recommending a single deliverable.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-header">
          <div className="tl-mockup-dots"><span></span><span></span><span></span></div>
          <span className="tl-mockup-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>Measurement Report</span>
        </div>
        <div className="tl-mockup-body" style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.03)', padding: '0.5rem', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.05)' }}>
             <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#333' }}>Marketing Tools</span>
             <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '2px 6px', borderRadius: '20px', background: '#ffebee', color: '#c62828' }}>Data Silo</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.03)', padding: '0.5rem', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.05)' }}>
             <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#333' }}>Sales CRM</span>
             <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '2px 6px', borderRadius: '20px', background: '#e6f4ea', color: '#1e8e3e' }}>Connected</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    icon: Lightbulb,
    badgeColor: '#e49a45ff',
    title: "2 Design",
    pillText: "Stage 2",
    description: "Map the stack layers that close the specific gaps the measurement found.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-header dark">
          <span className="tl-mockup-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>System Design Blueprint</span>
        </div>
        <div className="tl-mockup-body" style={{ display: 'flex', gap: '4px', padding: '0.75rem', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ padding: '6px', background: 'rgba(0,0,0,0.04)', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600 }}>Web Apps</div>
          <span style={{ color: 'var(--ix-primary)', fontSize: '0.9rem' }}>↔</span>
          <div style={{ padding: '6px', background: 'rgba(0,0,0,0.04)', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600 }}>CRM Systems</div>
          <span style={{ color: 'var(--ix-primary)', fontSize: '0.9rem' }}>↔</span>
          <div style={{ padding: '6px', background: 'rgba(0,0,0,0.04)', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600 }}>Automations</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    icon: Settings,
    badgeColor: '#77dbefff',
    title: "3 Build",
    pillText: "Stage 3",
    description: "Ship the system: content, campaigns, platforms, and the automation connecting them.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-body align-center" style={{ padding: '0.75rem' }}>
           <div className="tl-qa-card" style={{ width: '100%', padding: '0.75rem' }}>
              <div className="tl-qa-header" style={{ marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                Engineering Build Status
              </div>
              <div className="tl-qa-row" style={{ fontSize: '0.7rem', marginBottom: '0.25rem' }}>
                <span>AI Data Models</span>
                <span style={{ color: '#1e8e3e', fontWeight: 'bold' }}>Trained</span>
              </div>
              <div className="tl-qa-row" style={{ fontSize: '0.7rem' }}>
                <span>Mobile & Web Binaries</span>
                <span style={{ color: '#1e8e3e', fontWeight: 'bold' }}>Compiled</span>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    icon: TrendingUp,
    badgeColor: '#ae84e8ff',
    title: "4 Re-Measure",
    pillText: "Stage 4",
    description: "Score the business again, and adjust the system for the next cycle.",
    mockup: (
      <div className="tl-mockup">
        <div className="tl-mockup-header dark">
          <span className="tl-mockup-title">Re-Measurement Dashboard</span>
        </div>
        <div className="tl-mockup-body align-center">
          <div className="tl-chart-placeholder" style={{ height: '60px', paddingTop: '0.5rem' }}>
             <div className="tl-bar" style={{ height: '40%' }}></div>
             <div className="tl-bar" style={{ height: '70%' }}></div>
             <div className="tl-bar" style={{ height: '50%' }}></div>
             <div className="tl-bar" style={{ height: '90%' }}></div>
          </div>
          <div className="tl-card-footer" style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }}>
              <span className="tl-stat" style={{ fontSize: '1rem' }}>124%</span>
          </div>
        </div>
      </div>
    )
  }
];

const gapZones = [
  { icon: HelpCircle, color: '#FFC107' },
  ...timelineData.map(item => ({ icon: item.icon, color: item.badgeColor })),
  { icon: CheckCircle, color: '#007A5E' }
];


const TimelineSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [trackHeight, setTrackHeight] = useState(0);
  const [svgPath, setSvgPath] = useState("");
  const [ranges, setRanges] = useState({ input: [0, 1], output: [0, 0] });
  const [activeZone, setActiveZone] = useState(0);

  // Measure track height + each card's real center position
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackRect = trackRef.current.getBoundingClientRect();
      const height = trackRef.current.offsetHeight;
      setTrackHeight(height);

      if (height === 0) return;

      if (cardRefs.current.length > 0) {
        let path = "";
        const r = 24; 
        
        for (let i = 0; i < cardRefs.current.length; i++) {
          const card = cardRefs.current[i];
          if (!card) continue;
          const rect = card.getBoundingClientRect();
          
          const cx = (rect.left + rect.width / 2) - trackRect.left;
          const cy = (rect.top + rect.height / 2) - trackRect.top;
          
          if (i === 0) {
             path += `M ${cx} ${cy} `;
          } else {
             const prevCard = cardRefs.current[i-1];
             const prevRect = prevCard.getBoundingClientRect();
             const pcx = (prevRect.left + prevRect.width / 2) - trackRect.left;
             const pcy = (prevRect.top + prevRect.height / 2) - trackRect.top;
             
             if (Math.abs(cx - pcx) < 10) {
                // Mobile stacked layout: draw straight line down
                path += `L ${cx} ${cy} `;
             } else if (cx > pcx) {
                // Moving Left to Right
                path += `L ${cx - r} ${pcy} `;
                path += `A ${r} ${r} 0 0 1 ${cx} ${pcy + r} `;
                path += `L ${cx} ${cy} `;
             } else {
                // Moving Right to Left
                path += `L ${cx + r} ${pcy} `;
                path += `A ${r} ${r} 0 0 0 ${cx} ${pcy + r} `;
                path += `L ${cx} ${cy} `;
             }
          }
        }
        setSvgPath(path);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }
    
    // Also observe the cards themselves in case their internal content changes height
    cardRefs.current.forEach(card => {
      if (card) resizeObserver.observe(card);
    });

    measure();
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 30%", "end 30%"]
  });

  // Remove spring completely for 1:1 pixel-perfect scrolling
  const iconY = useTransform(scrollYProgress, [0, 1], [0, trackHeight]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (trackHeight === 0) return;
      const currentY = latest * trackHeight;
      let newZone = 0;

      if (!trackRef.current) return;
      
      const trackRect = trackRef.current.getBoundingClientRect();
      const trackTop = trackRect.top;

      // Zone logic based on real physical position using getBoundingClientRect:
      if (cardRefs.current[0]) {
        const firstCardTop = cardRefs.current[0].getBoundingClientRect().top - trackTop;
        if (currentY < firstCardTop - 20) {
          newZone = 0; // Above first card -> Start Zone
        } else {
          newZone = gapZones.length - 1; // Default to End Zone
          for (let i = 0; i < cardRefs.current.length; i++) {
            const card = cardRefs.current[i];
            if (!card) continue;
            
            const cardRect = card.getBoundingClientRect();
            const cardBottom = cardRect.bottom - trackTop;
            
            // If the icon is physically above the bottom of this card (plus a small gap)
            if (currentY < cardBottom + 60) {
              newZone = i + 1; // Card zones are indices 1-5
              break;
            }
          }
        }
      }

      // If we are physically at the very bottom padding, lock to End Zone
      if (currentY >= trackHeight - 40) {
        newZone = gapZones.length - 1;
      }

      setActiveZone(newZone);
    });
    return () => unsubscribe();
  }, [scrollYProgress, trackHeight]);

  const ActiveIcon = gapZones[activeZone].icon;
  const activeBadgeColor = gapZones[activeZone].color;
  const activeCardIndex = Math.max(0, activeZone - 1);

  return (
    <section className="timeline-section" ref={sectionRef}>
      <div className="timeline-header-section">
        <h2>
          Growth Engineering that gets <span style={{ color: '#007A5E' }}>smarter</span> with every system.
        </h2>
        <p>
          From website development and AI automation to CRM integration — Infynix's Growth Engineering Method connects every business system for measurable, sustainable growth.
        </p>
        <button className="timeline-cta-btn">
          Schedule a Discovery Call
        </button>
      </div>

      <div className="timeline-taller-wrapper">

        <div className="timeline-container">

          <div className="timeline-track-wrapper" ref={trackRef} style={{ pointerEvents: 'none' }}>
            <svg style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
               <path d={svgPath} fill="none" stroke="#E5E5E5" strokeWidth="1.5" strokeDasharray="6 6" />
               <motion.path 
                 d={svgPath} 
                 fill="none" 
                 stroke="#007A5E" 
                 strokeWidth="2" 
                 strokeDasharray="6 6"
                 style={{ pathLength: scrollYProgress }} 
               />
            </svg>
            <motion.div
              className="timeline-continuous-marker"
              style={{ 
                top: 0, 
                left: 0, 
                transform: "none",
                offsetPath: svgPath ? `path('${svgPath}')` : 'none',
                offsetDistance: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
                offsetRotate: '0deg'
              }}
            >
              <div
                className="timeline-small-badge"
                style={{
                  background: activeBadgeColor,
                  borderColor: activeBadgeColor,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeZone}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <ActiveIcon size={16} strokeWidth={2.5} color="#ffffff" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <div className="timeline-cards-continuous">
            {timelineData.map((item, index) => {
              const isActive = activeCardIndex === index;
              return (
                <div className="timeline-item-continuous" key={item.id}>
                  <div
                    className="timeline-card-wrapper"
                    ref={(el) => (cardRefs.current[index] = el)}
                  >
                    <div className={`timeline-card ${isActive ? 'active' : ''}`}>
                      <div className="timeline-card-pill">
                        <span>{item.pillText}</span>
                      </div>
                      <div className="timeline-card-content">
                        <div className="timeline-card-header">
                           <div className="timeline-card-icon" style={{ backgroundColor: item.badgeColor, color: '#111' }}>
                             <item.icon size={18} strokeWidth={2.5} />
                           </div>
                           <h3>{item.title}</h3>
                        </div>
                        <p>{item.description}</p>
                        {item.mockup && (
                           <div className="timeline-mini-mockup-wrapper">
                             {item.mockup}
                           </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TimelineSection;