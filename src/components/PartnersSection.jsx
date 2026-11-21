import React from 'react';
import { useIxReveal } from './WhoWeAre';
import atmosotLogo from '../assets/logosvgs/ATMOSOT LOGO.svg';
import hairStudioLogo from '../assets/logosvgs/HAIR-STUDIO.svg';
import interioPlusLogo from '../assets/logosvgs/interio-plus.svg';
import miracleMeditationLogo from '../assets/logosvgs/miracle-meditation-loGO.svg';
import lyvinLogo from '../assets/logosvgs/Lyvin-logo.svg';
import miniBelleLogo from '../assets/logosvgs/MINI-BELLE-logo.svg';
import nluxLogo from '../assets/logosvgs/nlux.svg';
import lstudioLogo from '../assets/logosvgs/L-STUDIO_LOGO-WHITE.svg';
import insightBimLogo from '../assets/logosvgs/INSIGHT-BIM-LOGO.svg';
import lumoraLogo from '../assets/logosvgs/lumora-LOGO-WHITE.svg';
import capricornLogo from '../assets/logosvgs/Capricorn-logo-02.svg';
import eccLogo from '../assets/logosvgs/ECC-LOGO.svg';

const PartnersSection = () => {
  useIxReveal();
  const partners = [
    { name: 'ATMOSOT', src: atmosotLogo },
    { name: 'Hair Studio', src: hairStudioLogo },
    { name: 'Interio Plus', src: interioPlusLogo },
    { name: 'Miracle Meditation', src: miracleMeditationLogo },
    { name: 'Lyvin', src: lyvinLogo },
    { name: 'Mini Belle', src: miniBelleLogo },
    { name: 'NLUX', src: nluxLogo },
    { name: 'L Studio', src: lstudioLogo },
    { name: 'Insight BIM', src: insightBimLogo },
    { name: 'Lumora', src: lumoraLogo },
    { name: 'Capricorn', src: capricornLogo },
    { name: 'ECC', src: eccLogo }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="partners-inner">
        <h2 className="partners-h2" data-aos="fade-up">Our Trusted <em>Partners</em></h2>
        <div className="partners-marquee" data-aos="fade-up" role="list" aria-label="Partner logos">
          <div className="partners-track">
            {[0, 1].map((setIndex) => (
              <div className="partners-logo-set" key={setIndex} aria-hidden={setIndex === 1 ? 'true' : undefined}>
                {partners.map((partner) => (
                  <div className="partner-logo" role={setIndex === 0 ? 'listitem' : undefined} key={`${setIndex}-${partner.name}`}>
                    <img src={partner.src} alt={setIndex === 0 ? partner.name : ''} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;