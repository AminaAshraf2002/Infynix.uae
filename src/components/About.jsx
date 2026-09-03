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

const About = () => {
  const ref = useAnimateOnScroll();

  const features = [
    'Agile delivery with sprint-based execution and continuous feedback loops',
    'Dedicated senior engineers — no juniors on critical paths',
    'Transparent communication with real-time dashboards and weekly demos',
    'Post-launch support, monitoring, and iterative optimisation',
  ];

  const features2 = [
    'Cloud-native, microservices-first architecture by default',
    'Security-first design embedded throughout the development lifecycle',
    'Scalable infrastructure that grows as your business grows',
    'Proprietary tools and frameworks that accelerate delivery by 30%',
  ];

  return (
    <section className="about-section section--white" id="about" ref={ref} aria-labelledby="about-heading">
      <div className="container">
        {/* Block 1 — image left, text right */}
        <div className="about-inner">
          <div className="about-visual" data-aos="fade-left">
            <div className="about-img-placeholder">
              <span aria-hidden="true">💡</span>
              <span className="about-img-label">Innovation-First Culture</span>
            </div>
            <div className="about-accent-card" aria-hidden="true">
              <div>
                <div className="accent-num">12+</div>
                <div className="accent-text">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="about-content" data-aos="fade-right">
            <span className="micro-label">Who We Are</span>
            <h2 className="section-title" id="about-heading">
              Your Strategic <span>Software Engineering</span> Partner
            </h2>
            <p>
              Founded in 2012, Infynix Solutions is a specialist software company that partners with ambitious businesses to design, build, and scale digital products. We combine deep technical expertise with strategic thinking to deliver software that creates lasting competitive advantage.
            </p>
            <p>
              We are not a body-shop. We are a results-driven engineering house where senior talent, proven processes, and cutting-edge technology converge.
            </p>
            <div className="about-features">
              {features.map((f) => (
                <div className="about-feature-item" key={f}>
                  <div className="feature-check" aria-hidden="true">✓</div>
                  <p>{f}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary" id="about-cta-btn">
              Work With Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Block 2 — text left, image right */}
        <div className="about-inner" style={{ marginTop: '100px' }}>
          <div className="about-content" data-aos="fade-left">
            <span className="micro-label">Our Approach</span>
            <h2 className="section-title">
              Engineering for <span>Scale,</span> Built for the <span>Future</span>
            </h2>
            <p>
              Every line of code we write is an investment in your business's future. Our architecture decisions, technology choices, and engineering standards are all optimised for long-term scalability, maintainability, and performance.
            </p>
            <div className="about-features">
              {features2.map((f) => (
                <div className="about-feature-item" key={f}>
                  <div className="feature-check" aria-hidden="true">✓</div>
                  <p>{f}</p>
                </div>
              ))}
            </div>
            <a href="#case-studies" className="btn btn-outline" id="about-casestudies-btn">
              See Our Work <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="about-visual" data-aos="fade-right">
            <div className="about-img-placeholder">
              <span aria-hidden="true">🏗️</span>
              <span className="about-img-label">Architecture at Scale</span>
            </div>
            <div className="about-accent-card" aria-hidden="true">
              <div>
                <div className="accent-num">150+</div>
                <div className="accent-text">Projects Shipped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
