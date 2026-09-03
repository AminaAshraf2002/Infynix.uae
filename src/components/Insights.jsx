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

const featured = {
  icon: '🤖',
  tag: 'AI & Future of Software',
  title: 'How Generative AI Is Reshaping Enterprise Software Development in 2025',
  desc: 'From AI pair-programmers to fully autonomous agents, we examine the tectonic shift happening inside engineering teams — and what it means for business leaders who want to stay ahead.',
  meta: 'June 2025 · 8 min read',
};

const sideItems = [
  {
    icon: '☁️',
    tag: 'Cloud',
    title: 'Multi-Cloud vs. Single-Cloud: What 150 Enterprise Deployments Taught Us',
    meta: 'May 2025 · 6 min read',
  },
  {
    icon: '🔒',
    tag: 'Security',
    title: 'Zero-Trust Architecture: The Non-Negotiable for Modern SaaS Companies',
    meta: 'May 2025 · 5 min read',
  },
  {
    icon: '📊',
    tag: 'Data Engineering',
    title: 'Building a Real-Time Data Stack That Doesn\'t Break at 10× Scale',
    meta: 'April 2025 · 7 min read',
  },
  {
    icon: '🚀',
    tag: 'DevOps',
    title: 'From 2-Week Releases to 20 Deploys a Day: A CI/CD Transformation Story',
    meta: 'April 2025 · 4 min read',
  },
];

const Insights = () => {
  const ref = useAnimateOnScroll();

  return (
    <section className="section section--alt" id="insights" ref={ref} aria-labelledby="insights-heading">
      <div className="container">
        <div className="insights-header">
          <div data-aos="fade-left">
            <span className="micro-label">Insights &amp; Thinking</span>
            <h2 className="section-title" id="insights-heading">
              From Our <span>Engineering</span> Team
            </h2>
            <p className="section-subtitle" style={{ marginTop: 12 }}>
              Deep dives, how-tos, and perspectives from the engineers building tomorrow's software today.
            </p>
          </div>
          <a href="#insights" className="btn btn-outline" data-aos="fade-right" id="all-articles-btn">
            All Articles →
          </a>
        </div>

        <div className="insights-grid">
          {/* Featured article */}
          <article className="insight-featured" data-aos="fade-left" aria-label={featured.title}>
            <div className="insight-featured-image" style={{ background: 'linear-gradient(135deg, #EEF4FF, #DBEAFE)' }} aria-hidden="true">
              <span style={{ fontSize: 60 }}>{featured.icon}</span>
            </div>
            <div className="insight-featured-body">
              <span className="case-tag">{featured.tag}</span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'var(--text-heading)', lineHeight: 1.35, marginBottom: 12 }}>
                {featured.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--text-body)', marginBottom: 20 }}>
                {featured.desc}
              </p>
              <span style={{ fontSize: 12.5, color: 'var(--text-light)', fontWeight: 500 }}>{featured.meta}</span>
            </div>
          </article>

          {/* Side list */}
          <div className="insight-list">
            {sideItems.map((item, i) => (
              <article
                key={item.title}
                className={`insight-itemdelay-${i + 1} data-aos="fade-right"`}
                aria-label={item.title}
              >
                <div className="insight-item-img" aria-hidden="true">{item.icon}</div>
                <div>
                  <span className="case-tag" style={{ marginBottom: 8, display: 'inline-block' }}>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <span className="insight-meta">{item.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
