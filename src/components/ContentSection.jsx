import { useEffect, useRef } from 'react';

const featured = {
  icon: '🤖',
  tag: 'AI & Engineering',
  title: 'How Generative AI Is Reshaping Enterprise Software Development',
  desc: `From AI pair-programmers to autonomous agents — we examine the tectonic shift happening inside engineering teams and what it means for business leaders who want to stay ahead.`,
  meta: 'June 2025 · 8 min read',
  bg: 'linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)',
};

const sideItems = [
  {
    icon: '☁️',
    tag: 'Cloud',
    title: 'Multi-Cloud vs Single-Cloud: Lessons from 150 Enterprise Deployments',
    meta: 'May 2025 · 6 min read',
    bg: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)',
  },
  {
    icon: '🔒',
    tag: 'Security',
    title: 'Zero-Trust Architecture: The Non-Negotiable for Modern SaaS',
    meta: 'May 2025 · 5 min read',
    bg: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
  },
  {
    icon: '📊',
    tag: 'Data',
    title: `Building a Real-Time Data Stack That Doesn't Break at 10× Scale`,
    meta: 'April 2025 · 7 min read',
    bg: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)',
  },
  {
    icon: '🚀',
    tag: 'DevOps',
    title: 'From 2-Week Releases to 20 Deploys a Day: A CI/CD Story',
    meta: 'April 2025 · 4 min read',
    bg: 'linear-gradient(135deg, #FFF1F2, #FFE4E6)',
  },
];

const ContentSection = () => {
  const ref = useRef(null);

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
      { threshold: 0.1 }
    );
    if (ref.current) {
      ref.current.querySelectorAll('.content-top, .content-card-featured, .content-item').forEach((el) =>
        observer.observe(el)
      );
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="content-section" id="insights" ref={ref}>
      <div className="content-inner">
        {/* Header */}
        <div className="content-top">
          <div>
            <div className="content-label fade-up">Insights & Thinking</div>
            <h2 className="content-heading">
              <span className="reveal-wrap">
                <span className="reveal-line d1">From Our <em>Engineering</em></span>
              </span>
              <span className="reveal-wrap">
                <span className="reveal-line d2">Team</span>
              </span>
            </h2>
          </div>
          <a href="#insights" className="work-view-all fade-up d3">
            All articles
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Grid: featured + side list */}
        <div className="content-grid">
          <article className="content-card-featured fade-up d1">
            <div className="cc-img" style={{ background: featured.bg }}>
              <div className="cc-img-inner">
                <span>{featured.icon}</span>
              </div>
            </div>
            <div className="cc-body">
              <div className="cc-episode">{featured.tag}</div>
              <h3 className="cc-title">{featured.title}</h3>
              <p className="cc-desc">{featured.desc}</p>
              <div className="cc-meta">{featured.meta}</div>
            </div>
          </article>

          <div className="content-side">
            {sideItems.map((item, i) => (
              <a href="#insights" className={`content-item fade-up d${i + 1}`} key={item.title}>
                <div className="ci-thumb" style={{ background: item.bg }}>
                  <div className="ci-thumb-inner">{item.icon}</div>
                </div>
                <div>
                  <div className="ci-category">{item.tag}</div>
                  <h3 className="ci-title">{item.title}</h3>
                  <div className="ci-meta">{item.meta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
