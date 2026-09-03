import { useEffect, useRef } from 'react';

const workItems = [
  {
    num: '01',
    category: 'E-Commerce',
    title: 'Headless Commerce Re-platform Driving 3× Conversion for Global Retailer',
    desc: 'Migrated a monolithic retail platform to composable headless architecture serving 5M+ monthly shoppers across 12 markets.',
    tags: ['Next.js', 'GraphQL', 'Shopify'],
    bg: 'linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)',
    icon: '🛒',
  },
  {
    num: '02',
    category: 'FinTech',
    title: 'Real-Time Trading Analytics Platform for Leading Investment Bank',
    desc: 'Built a high-throughput data pipeline processing 2M+ events/second with sub-100ms latency for live portfolio analytics.',
    tags: ['AWS', 'Kafka', 'React'],
    bg: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
    icon: '📊',
  },
  {
    num: '03',
    category: 'HealthTech',
    title: 'AI-Powered Patient Triage System Cutting ER Wait Times by 40%',
    desc: 'Deployed an ML triage engine across 12 hospitals integrating with legacy EMR systems and achieving full HIPAA compliance.',
    tags: ['Python', 'TensorFlow', 'HL7'],
    bg: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
    icon: '🏥',
  },
  {
    num: '04',
    category: 'Logistics',
    title: 'Fleet Management & Route Optimisation SaaS Platform',
    desc: 'Reduced last-mile delivery costs by 22% through AI-driven route optimisation and real-time fleet telemetry dashboards.',
    tags: ['Flutter', 'GCP', 'Maps API'],
    bg: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
    icon: '🚛',
  },
];

const WorkSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.fade-up, .reveal-line, .img-reveal').forEach((el) => {
              el.classList.add('in');
            });
          }
        });
      },
      { threshold: 0.08 }
    );

    const section = sectionRef.current;
    if (section) {
      // Observe each work strip individually
      section.querySelectorAll('.work-strip, .work-section-header').forEach((el) =>
        observer.observe(el)
      );
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="work-section" id="work" ref={sectionRef}>
      {/* Section header */}
      <div className="work-section-header">
        <div>
          <div className="work-section-label fade-up">What We Do</div>
          <h2 className="work-section-title">
            <span className="reveal-wrap">
              <span className="reveal-line d1">Crafting <em>Software</em></span>
            </span>
            <span className="reveal-wrap">
              <span className="reveal-line d2">Solutions That Scale</span>
            </span>
          </h2>
        </div>
        <a href="#contact" className="work-view-all fade-up d3">
          View all projects
          <span className="btn-arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Work strips */}
      {workItems.map((item, i) => (
        <a href="#contact" className="work-strip" key={item.num}>
          <div className="ws-number fade-up">{item.num}</div>

          <div className="ws-content">
            <div className="ws-category fade-up d1">{item.category}</div>
            <h3 className="ws-title fade-up d2">{item.title}</h3>
            <p className="ws-desc fade-up d3">{item.desc}</p>
            <div className="ws-meta fade-up d4">
              {item.tags.map((t) => (
                <span className="ws-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="ws-image img-reveal" style={{ background: item.bg }}>
            <div className="ws-image-inner">
              <span>{item.icon}</span>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default WorkSection;
