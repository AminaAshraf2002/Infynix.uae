import React from 'react';
import './FeaturedWork.css';
import work1 from '../assets/green1.png';
import work2 from '../assets/webpage.png';
import work3 from '../assets/green2.png';
import work4 from '../assets/ai.png';
import work5 from '../assets/green3.png';
import work6 from '../assets/green4.png';

const featuredProjects = [
  {
    id: 1,
    title: 'Boncafé Middle East',
    category: 'Shopify • E-Commerce',
    image: work1,
    link: '#',
  },
  {
    id: 2,
    title: 'Al Faris Group',
    category: 'Corporate Website',
    image: work2,
    link: '#',
  },
  {
    id: 3,
    title: 'New National Medical Centre',
    category: 'Healthcare App',
    image: work3,
    link: '#',
  },
  {
    id: 4,
    title: 'OEL Group',
    category: 'Brand Identity',
    image: work4,
    link: '#',
  },
  {
    id: 5,
    title: 'Sharjah Wanderers',
    category: 'Platform Engineering',
    image: work5,
    link: '#',
  },
  {
    id: 6,
    title: 'Golf Oman',
    category: 'Digital Marketing',
    image: work6,
    link: '#',
  }
];

const FeaturedWork = () => {
  return (
    <section id="featured">
      <div className="featured-header">
        <div className="featured-eyebrow">Featured Work</div>
        <h2 className="featured-title">
          Our Work
        </h2>
        <p className="featured-subtitle">
          A snapshot of the brands and stores we've designed, built, and helped grow.
        </p>
      </div>

      <div className="fw-accordion-container" data-aos="fade-up" data-aos-duration="1000">
        {featuredProjects.map((project) => (
          <div className="fw-accordion-card" key={project.id}>
            <div className="fw-card-bg">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="fw-card-content">
              {/* Visible when collapsed */}
              <div className="fw-vertical-title">{project.title}</div>
              
              {/* Visible when hovered/expanded */}
              <div className="fw-expanded-content">
                <span className="fw-meta">{project.category}</span>
                <h3 className="fw-project-title">{project.title}</h3>
                <a href={project.link} className="fw-link">
                  Visit site
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
