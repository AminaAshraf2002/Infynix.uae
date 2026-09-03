import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';
import gsap from 'gsap';

// Helper component for counting numbers
const AnimatedStat = ({ endValue, suffix = '', label }) => {
  const numRef = useRef(null);
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate with GSAP
          const obj = { val: 0 };
          gsap.to(obj, {
            val: endValue,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              if (numRef.current) {
                const isFloat = endValue % 1 !== 0;
                if (isFloat) {
                  numRef.current.innerText = obj.val.toFixed(1);
                } else {
                  numRef.current.innerText = Math.floor(obj.val).toLocaleString();
                }
              }
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [endValue, hasAnimated]);

  return (
    <div className="stat-card" ref={containerRef}>
      <div className="stat-number-wrapper">
        <span className="stat-number" ref={numRef}>0</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        
        <div className="stats-header" data-aos="fade-up">
          <h2>Every system we engineer is built on data, not guesswork.</h2>
        </div>

        <div className="stats-grid">
          <AnimatedStat endValue={30} suffix="+" label="Growth systems engineered" />
          <AnimatedStat endValue={80} suffix="%" label="Average automation achieved" />
          <AnimatedStat endValue={9} suffix="+" label="Industries served" />
        </div>

      </div>
    </section>
  );
};

export default StatsSection;