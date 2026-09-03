import { useEffect, useRef } from 'react';

const PlatformSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.fade-up, .reveal-line').forEach((el) => {
              el.classList.add('in');
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const pills = [
    'AI & Machine Learning',
    'Cloud Architecture',
    'Data Engineering',
    'DevOps & SRE',
    'Cybersecurity',
    'Mobile Development',
  ];

  return (
    <section className="platform-section" id="platform" ref={ref}>
      <div className="platform-orb platform-orb-1" aria-hidden="true" />
      <div className="platform-orb platform-orb-2" aria-hidden="true" />

      <div className="platform-inner">
        <div>
          <div className="platform-label fade-up d1">Innovation Hub</div>
          <h2 className="platform-title">
            <span className="reveal-wrap">
              <span className="reveal-line d1">Intelligent</span>
            </span>
            <span className="reveal-wrap">
              <span className="reveal-line d2">Software Design</span>
            </span>
          </h2>
          <p className="platform-desc fade-up d3">
            Our dedicated innovation team researches and integrates emerging technologies —
            from generative AI to edge computing — so your products are built not just for today,
            but for the future.
          </p>

          <div className="platform-pills fade-up d3">
            {pills.map((p) => (
              <span className="platform-pill" key={p}>
                <span className="platform-pill-dot" aria-hidden="true" />
                {p}
              </span>
            ))}
          </div>

          <a href="#contact" className="btn-platform fade-up d4" id="platform-cta">
            Learn More
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Visual card */}
        <div className="platform-visual fade-up d2">
          <div className="platform-card">
            <div className="platform-card-header">
              <div className="pch-dot" style={{ background: '#F97316' }} />
              <div className="pch-dot" style={{ background: '#1A6FD4' }} />
              <div className="pch-dot" style={{ background: '#22C55E' }} />
            </div>
            <div className="platform-metrics">
              <div className="pm-item">
                <div className="pm-num">99.9<span>%</span></div>
                <div className="pm-label">Uptime SLA</div>
              </div>
              <div className="pm-item">
                <div className="pm-num">40<span>+</span></div>
                <div className="pm-label">Engineers</div>
              </div>
              <div className="pm-item">
                <div className="pm-num">150<span>+</span></div>
                <div className="pm-label">Projects</div>
              </div>
              <div className="pm-item">
                <div className="pm-num">12<span>yr</span></div>
                <div className="pm-label">Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
