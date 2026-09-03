import { useEffect, useRef } from 'react';

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

const domains = [
  {
    icon: '🧠',
    title: 'Artificial Intelligence & ML',
    desc: 'LLM integrations, computer vision, AI surveillance systems, NLP pipelines, predictive models, and custom Company AI solutions built for production environments.',
  },
  {
    icon: '☁️',
    title: 'Cloud Architecture & SRE',
    desc: 'Multi-cloud strategy, serverless computing, Kubernetes orchestration, and Site Reliability Engineering for 99.99% uptime.',
  },
  {
    icon: '📊',
    title: 'Data Engineering & Analytics',
    desc: 'Modern data stacks, real-time streaming, Growth Marketing system metrics, data warehousing, and BI dashboards that drive decisions.',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    desc: 'DevSecOps integration, penetration testing, GDPR/ISO 27001/SOC2 compliance engineering, and zero-trust architecture.',
  },
  {
    icon: '📱',
    title: 'Mobile & Cross-Platform',
    desc: 'React Native and Flutter apps with offline-first architecture, push notifications, biometrics, and seamless backend integration.',
  },
  {
    icon: '⚡',
    title: 'Performance Engineering',
    desc: 'Growth Engineering, profiling, caching strategies, CDN optimisation, Growth systems, and architectural refactoring for extreme-scale performance.',
  },
];

const Expertise = () => {
  const ref = useAnimateOnScroll();

  return (
    <section className="section section--alt" id="expertise" ref={ref} aria-labelledby="expertise-heading">
      <div className="container">
        <div className="text-center" data-aos="fade-up" style={{ marginBottom: 16 }}>
          <span className="micro-label">Technical Domains</span>
          <h2 className="section-title" id="expertise-heading">
            Core <span>Competencies</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Deep expertise across the modern software engineering stack — from AI and cloud to security and mobile.
          </p>
        </div>

        <div className="expertise-grid">
          {domains.map((d, i) => (
            <article
              key={d.title}
              className={`expertise-carddelay-${(i % 3) + 1} data-aos="fade-up"`}
              aria-label={d.title}
            >
              <div className="expertise-icon" aria-hidden="true">{d.icon}</div>
              <div className="expertise-content">
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
