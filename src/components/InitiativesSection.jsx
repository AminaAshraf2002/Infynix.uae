import { useIxReveal } from './WhoWeAre';

const InitiativesSection = () => {
  useIxReveal();
  return (
    <section className="initiatives-section" id="initiatives">
      <div className="initiatives-inner">
        {/* Left Side */}
        <div className="init-left" data-aos="fade-up">
          <h1 className="init-h1">
            Strategic<br />
            <em>Pillars</em>
          </h1>
          <p className="init-desc">
            We are pioneering the next frontier of growth engineering, focusing on conversion-driven architectures, automated marketing systems, and intelligent digital experiences.
          </p>
          <p className="init-desc">
            Our core strategic pillars are designed to build scalable, high-performance engines that accelerate user acquisition and retention. By merging data analytics with technical innovation, we prepare leading brands for sustainable digital growth.
          </p>
        </div>

        {/* Right Side Grid */}
        <div className="init-right">
          {/* Card 1: High-Velocity Experimentation */}
          <div className="init-card" data-aos-delay="100" data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2.5rem' }}>
            <div style={{ color: '#007A5E' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#111' }}>High-Velocity Experimentation</h3>
            <p className="init-card-desc" style={{ margin: 0, marginTop: '0.5rem' }}>
              Building environments for rapid A/B testing and continuous performance iteration at scale.
            </p>
          </div>

          {/* Card 2: Data-Driven Architecture */}
          <div className="init-card" data-aos-delay="200" data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2.5rem' }}>
            <div style={{ color: '#007A5E' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#111' }}>Data-Driven Architecture</h3>
            <p className="init-card-desc" style={{ margin: 0, marginTop: '0.5rem' }}>
              Developing robust analytics pipelines and CDP integrations to fuel real-time business decisions.
            </p>
          </div>

          {/* Card 3: Scalable Growth Systems */}
          <div className="init-card" data-aos-delay="300" data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2.5rem' }}>
            <div style={{ color: '#007A5E' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" y1="22" x2="12" y2="12" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#111' }}>Scalable Growth Systems</h3>
            <p className="init-card-desc" style={{ margin: 0, marginTop: '0.5rem' }}>
              Engineering resilient microservices and automated workflows built to handle exponential user acquisition.
            </p>
          </div>

          {/* Card 4: Conversion Engineering */}
          <div className="init-card" data-aos-delay="400" data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2.5rem' }}>
            <div style={{ color: '#007A5E' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#111' }}>Conversion Engineering</h3>
            <p className="init-card-desc" style={{ margin: 0, marginTop: '0.5rem' }}>
              Designing high-fidelity, optimized funnels and dynamic personalization for maximum ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
