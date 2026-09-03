import { useEffect, useRef } from 'react';

const useAnimateOnScroll = (threshold = 0.1) => {
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

const cases = [
  {
    icon: '🏦',
    tag: 'FinTech',
    bg: 'linear-gradient(135deg, #EEF4FF, #DBEAFE)',
    title: 'Real-Time Trading Analytics Platform for Leading Investment Bank',
    desc: 'Built a high-throughput data pipeline processing 2M+ events/second with sub-100ms latency for live portfolio analytics.',
    meta: 'AWS · Kafka · React',
  },
  {
    icon: '🏥',
    tag: 'HealthTech',
    bg: 'linear-gradient(135deg, #F0FFF4, #DCFCE7)',
    title: 'AI-Powered Patient Triage System Cutting ER Wait Times by 40%',
    desc: 'Deployed an ML triage engine across 12 hospitals, integrating with legacy EMR systems and achieving HIPAA compliance.',
    meta: 'Python · TensorFlow · HL7',
  },
  {
    icon: '🛒',
    tag: 'E-Commerce',
    bg: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
    title: 'Headless Commerce Re-platform Driving 3× Conversion Growth',
    desc: 'Migrated a monolithic retail platform to a composable, headless architecture serving 5M+ monthly shoppers globally.',
    meta: 'Next.js · Shopify · GraphQL',
  },
  {
    icon: '✈️',
    tag: 'Travel Tech',
    bg: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)',
    title: 'Intelligent Booking Engine with Dynamic Pricing and ML Recommendations',
    desc: 'Engineered a real-time pricing engine and personalisation layer that increased average booking value by 28%.',
    meta: 'Node.js · Redis · Elasticsearch',
  },
  {
    icon: '📦',
    tag: 'Logistics',
    bg: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
    title: 'Fleet Management & Route Optimisation SaaS Platform',
    desc: 'Reduced last-mile delivery costs by 22% through AI-driven route optimisation and real-time fleet telemetry dashboards.',
    meta: 'Flutter · GCP · Maps API',
  },
  {
    icon: '🎓',
    tag: 'EdTech',
    bg: 'linear-gradient(135deg, #FFF1F2, #FFE4E6)',
    title: 'Adaptive Learning Platform Personalised for 200K+ Students',
    desc: 'Built a content recommendation engine and live classroom infrastructure scaling to 50K concurrent learners.',
    meta: 'React · WebRTC · PostgreSQL',
  },
];

const CaseStudies = () => {
  const ref = useAnimateOnScroll();

  return (
    <section className="section section--alt" id="case-studies" ref={ref} aria-labelledby="cases-heading">
      <div className="container">
        <div className="case-studies-header">
          <div data-aos="fade-left">
            <span className="micro-label">Our Work</span>
            <h2 className="section-title" id="cases-heading">
              Client Success <span>Stories</span>
            </h2>
            <p className="section-subtitle" style={{ marginTop: 12 }}>
              From startups to Fortune 500s — real outcomes, delivered.
            </p>
          </div>
          <a href="#contact" className="btn btn-outline" data-aos="fade-right" id="all-cases-btn">
            View All Projects →
          </a>
        </div>

        <div className="case-studies-grid">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`case-carddelay-${(i % 3) + 1} data-aos="fade-up"`}
              aria-label={c.title}
            >
              <div className="case-card-image" style={{ background: c.bg }} aria-hidden="true">
                <span style={{ fontSize: 52 }}>{c.icon}</span>
              </div>
              <div className="case-card-body">
                <span className="case-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="case-card-footer">
                  <span className="case-card-meta">{c.meta}</span>
                  <div className="case-card-arrow" aria-hidden="true">→</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
