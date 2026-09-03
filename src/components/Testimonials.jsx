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

const testimonials = [
  {
    initials: 'MR',
    name: 'Marcus Reynolds',
    role: 'CTO, FinTrust Bank',
    text: `Infynix transformed our legacy trading infrastructure into a real-time analytics powerhouse. Their team's depth of knowledge in distributed systems is extraordinary — delivery was on time, on budget, and exceeded every KPI.`,
  },
  {
    initials: 'SP',
    name: 'Sophia Patel',
    role: 'VP Engineering, MediCore Systems',
    text: `Working with Infynix felt like having a co-founder. They understood our clinical requirements, navigated HIPAA compliance, and shipped an AI triage system that genuinely saves lives. Phenomenal partner.`,
  },
  {
    initials: 'JK',
    name: 'James Kowalski',
    role: 'CEO, RetailEdge',
    text: `Our e-commerce re-platform was the most complex project we'd ever undertaken. Infynix broke it into manageable sprints, kept us informed every step, and the result was a 3× uplift in conversion. Incredible work.`,
  },
];

const Testimonials = () => {
  const ref = useAnimateOnScroll();

  return (
    <section className="testimonials-section section--white" id="testimonials" ref={ref} aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <span className="micro-label">Client Voices</span>
          <h2 className="section-title" id="testimonials-heading">
            What Our <span>Clients Say</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We measure success by the outcomes we create for our clients — not just the code we ship.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`testimonial-carddelay-${i + 1} data-aos="fade-up"`}
              aria-label={`Testimonial from ${t.name}`}
            >
              <div className="testimonial-stars" aria-label="5 stars">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="star" aria-hidden="true">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
