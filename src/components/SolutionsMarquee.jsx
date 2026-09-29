import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { solutionsData } from '../lib/contentData';
import { isDivision } from '../content/divisions';

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 12H19M12 5L19 12L12 19" />
  </svg>
);

const MarqueeCard = ({ title, slug }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link 
      to={`/solutions/${slug}`}
      style={{
        flex: '0 0 auto',
        width: '280px',
        height: '90px',
        background: isHovered ? '#f4f4f4' : '#fafafa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.3s ease',
        padding: '0 20px',
        textAlign: 'center',
        textDecoration: 'none',
        border: '1px solid #eaeaea',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#999', fontSize: '1rem', fontFamily: "'Montserrat', Arial, sans-serif" }}>
          View Service <ArrowRight />
        </div>
      ) : (
        <span style={{ fontSize: '1.05rem', fontWeight: 500, color: '#111', fontFamily: "'Montserrat', Arial, sans-serif" }}>
          {title}
        </span>
      )}
    </Link>
  );
};

const SolutionsMarquee = ({
  showHeading = true,
  heading = 'What We Offer',
  subheading = 'Explore our connected ecosystem of digital marketing, creative media, and software engineering solutions.',
  className = '',
  style = {},
}) => {
  const filteredSolutions = Object.entries(solutionsData).filter(([slug]) => !isDivision(slug));

  return (
    <section
      className={`solutions-marquee-section ${className}`}
      style={{
        background: '#fff',
        padding: showHeading ? 'clamp(60px, 8vw, 100px) 0 70px 0' : '0 0 100px 0',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        ...style,
      }}
    >
      {showHeading && (
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto 24px',
            padding: '0 5%',
            textAlign: 'center',
            boxSizing: 'border-box',
          }}
        >
          <span
            style={{
              fontFamily: "'Albert Sans', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#007A5E',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            OUR CAPABILITIES
          </span>
          <h2
            style={{
              fontFamily: "'Albert Sans', sans-serif",
              fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
              fontWeight: 600,
              color: '#0f172a',
              letterSpacing: '-0.025em',
              margin: '0 0 16px 0',
              lineHeight: 1.18,
            }}
          >
            {heading}
          </h2>
          {subheading && (
            <p
              style={{
                fontFamily: "'Montserrat', Arial, sans-serif",
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: '#64748b',
                maxWidth: '680px',
                margin: '0 auto 24px auto',
                lineHeight: 1.6,
              }}
            >
              {subheading}
            </p>
          )}

          {/* Central Dot Indicator */}
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              border: '1px solid rgba(0, 122, 94, 0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              background: 'rgba(0, 122, 94, 0.04)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#007A5E',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}

      {/* ══ INFINITE MARQUEE ══ */}
      <div
        className="marquee-container"
        style={{ display: 'flex', width: 'max-content', whiteSpace: 'nowrap' }}
        onMouseEnter={e => {
          const tracks = e.currentTarget.querySelectorAll('.marquee-track');
          tracks.forEach(t => (t.style.animationPlayState = 'paused'));
        }}
        onMouseLeave={e => {
          const tracks = e.currentTarget.querySelectorAll('.marquee-track');
          tracks.forEach(t => (t.style.animationPlayState = 'running'));
        }}
      >
        {/* We render the track twice for seamless infinite looping */}
        {[1, 2].map(trackIndex => (
          <div
            key={trackIndex}
            className="marquee-track"
            style={{ display: 'flex', animation: 'marquee 60s linear infinite' }}
          >
            {filteredSolutions.map(([slug, entry], i) => (
              <MarqueeCard key={`m${trackIndex}-${i}`} title={entry.title} slug={slug} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsMarquee;
