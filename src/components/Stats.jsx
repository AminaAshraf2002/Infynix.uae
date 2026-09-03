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

const stats = [
  { num: '80%', label: 'Average Automation Achieved' },
  { num: '9+', label: 'Industries Served' },
  { num: '30+', label: 'Growth Systems Engineered' },
  { num: '2x', label: 'Faster Time to Scale' },
];

const Stats = () => {
  const ref = useAnimateOnScroll(0.2);

  return (
    <section className="stats-section" ref={ref} aria-label="Company statistics">
      <div className="container">
        <div className="stats-grid" role="list">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-item delay-${i + 1}`}
              role="listitem"
            >
              <div className="stat-number" aria-label={s.num}>{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;