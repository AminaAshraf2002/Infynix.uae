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

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We run deep-dive discovery workshops to fully understand your business, goals, technical landscape, and user needs before writing a single line of code.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Our architects and UX designers create a detailed blueprint — system design, data models, API contracts, and interactive prototypes for stakeholder sign-off.',
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Agile sprints with bi-weekly demos, continuous integration, rigorous code reviews, and automated testing ensure on-time, on-quality delivery.',
  },
  {
    num: '04',
    title: 'Scale & Support',
    desc: 'Post-launch we monitor, optimise, and iterate. SRE-led operations, proactive alerting, and dedicated support teams keep you running at peak performance.',
  },
];

const Process = () => {
  const ref = useAnimateOnScroll();

  return (
    <section className="process-section section--white" id="process" ref={ref} aria-labelledby="process-heading">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="micro-label">How We Work</span>
          <h2 className="section-title" id="process-heading">
            Our Engagement <span>Model</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A proven, repeatable process honed over 12 years and 150+ projects — designed to reduce risk and maximise value at every stage.
          </p>
        </div>

        <div className="process-steps" role="list">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`process-stepdelay-${i + 1} data-aos="fade-up"`}
              role="listitem"
              aria-label={`Step ${step.num}: ${step.title}`}
            >
              <div className="process-step-num" aria-hidden="true">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
