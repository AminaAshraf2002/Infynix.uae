import { useEffect, useRef } from 'react';

const CTA = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-home" id="contact">
      <div className="cta-home-card reveal" ref={cardRef}>
        <h2 className="cta-home-heading">
          Let's create <em>great things.</em>
        </h2>
        <a href="mailto:hello@infynix-solutions.com" className="cta-home-btn" id="cta-getintouch-btn">
          Get in touch
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 13L13 1M13 1H5M13 1v8" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CTA;
