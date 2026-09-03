import React from 'react';
import { useIxReveal } from './WhoWeAre';
import lstudioLogo from '../assets/LSTUDIO.png';
import lumoraLogo from '../assets/LUMORA LOGO.png';
import hairStudioLogo from '../assets/hair.png';
import lyvinLogo from '../assets/Lyvin-logo.png';

const PartnersSection = () => {
  useIxReveal();
  const partners = [
    { name: 'LSTUDIO', src: lstudioLogo },
    { name: 'LUMORA', src: lumoraLogo },
    { name: 'HAIR STUDIO', src: hairStudioLogo },
    { name: 'LYVIN', src: lyvinLogo }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-inner">
        <h2 className="partners-h2" data-aos="fade-up">Our Trusted <em>Partners</em></h2>
        <div className="partners-grid">
          {partners.map((partner, i) => (
            <div className={`partner-logo ix-d${(i % 4) + 1}`} data-aos="fade-up" key={i}>
              <img
                src={partner.src}
                alt={partner.name}
                style={{
                  height: '110px',
                  width: '240px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1) brightness(1.5)',
                  opacity: 1,
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.75';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;