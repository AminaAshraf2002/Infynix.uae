import React from 'react';
import { Link } from 'react-router-dom';
import SEOManager from './SEOManager';

export const PrivacyPolicy = () => {
  return (
    <div className="news-page" style={{ position: 'relative', background: '#F9FAFB', color: '#333', minHeight: '100vh', padding: '120px 80px 80px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-100px', left: '0', width: '100%', height: '250px', background: 'radial-gradient(ellipse at center, rgba(0, 122, 94, 0.4) 0%, rgba(204, 255, 0, 0.15) 55%, rgba(255,255,255,0) 85%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '0', width: '100%', height: '250px', background: 'radial-gradient(ellipse at center, rgba(0, 122, 94, 0.4) 0%, rgba(204, 255, 0, 0.15) 55%, rgba(255,255,255,0) 85%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      
      <div style={{ position: 'absolute', left: 'clamp(20px, 4vw, 60px)', top: 0, bottom: 0, borderLeft: '1.5px dashed rgba(0,0,0,0.11)', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'absolute', right: 'clamp(20px, 4vw, 60px)', top: 0, bottom: 0, borderRight: '1.5px dashed rgba(0,0,0,0.11)', pointerEvents: 'none', zIndex: 1 }} />

      <SEOManager title="Privacy Policy | Infynix" description="Learn how Infynix handles and protects your user and operational data." />
      <div className="news-article" style={{ position: 'relative', zIndex: 2, maxWidth: '860px', margin: '0 auto' }}>
        <h1 className="news-title" style={{ marginTop: 0 }}>Privacy Policy</h1>
        <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '30px' }}>Last updated: June 30, 2026</p>
        
        <div className="news-body">
          <div className="news-block">
            <h2 className="news-subheading">1. Introduction</h2>
            <p className="news-para">
              At Infynix — Growth Engineering Company, we prioritize the protection and security of your corporate and personal data. This privacy policy describes the types of info we collect, how it is stored, and the precautions we take to secure your transactions and interactions.
            </p>
          </div>

          <div className="news-block">
            <h2 className="news-subheading">2. Data Collection</h2>
            <p className="news-para">
              We collect standard analytics logs, form submission fields, and contact information to fulfill service inquiries and customize business platforms. This includes your email address, phone number, company name, and details about your development needs.
            </p>
          </div>

          <div className="news-block">
            <h2 className="news-subheading">3. How We Use Your Data</h2>
            <p className="news-para">
              We use collected information solely to build, optimize, and customize your software, CRM, and performance marketing workflows. We do not sell or rent data to third parties.
            </p>
          </div>

          <div className="news-block">
            <h2 className="news-subheading">4. Data Security</h2>
            <p className="news-para">
              We implement industry-standard encryption protocols (SSL/TLS) for data in transit and secure database storage systems with granular authorization levels.
            </p>
          </div>

          <div className="news-block">
            <h2 className="news-subheading">5. Cookies & Tracking</h2>
            <p className="news-para">
              Our website uses basic functional cookies to maintain sessions and analyze traffic trends. You can disable cookies in your browser settings at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TermsOfService = () => {
  return (
    <div className="news-page" style={{ position: 'relative', background: '#F9FAFB', color: '#333', minHeight: '100vh', padding: '120px 80px 80px', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-100px', left: '0', width: '100%', height: '250px', background: 'radial-gradient(ellipse at center, rgba(0, 122, 94, 0.4) 0%, rgba(204, 255, 0, 0.15) 55%, rgba(255,255,255,0) 85%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '0', width: '100%', height: '250px', background: 'radial-gradient(ellipse at center, rgba(0, 122, 94, 0.4) 0%, rgba(204, 255, 0, 0.15) 55%, rgba(255,255,255,0) 85%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      
      <div style={{ position: 'absolute', left: 'clamp(20px, 4vw, 60px)', top: 0, bottom: 0, borderLeft: '1.5px dashed rgba(0,0,0,0.11)', pointerEvents: 'none', zIndex: 1 }} />
      <div style={{ position: 'absolute', right: 'clamp(20px, 4vw, 60px)', top: 0, bottom: 0, borderRight: '1.5px dashed rgba(0,0,0,0.11)', pointerEvents: 'none', zIndex: 1 }} />

      <SEOManager title="Terms of Service | Infynix" description="Read the terms and conditions governing the use of Infynix web services." />
      <div className="news-article" style={{ position: 'relative', zIndex: 2, maxWidth: '860px', margin: '0 auto' }}>
        <h1 className="news-title" style={{ marginTop: 0 }}>Terms of Service</h1>
        <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '30px' }}>Last updated: June 30, 2026</p>
        
        <div className="news-body">
          <div className="news-block">
            <h2 className="news-subheading">1. Service Provision</h2>
            <p className="news-para">
              By accessing or using our websites, software models, or growth engineering systems, you agree to comply with and be bound by these Terms of Service.
            </p>
          </div>

          <div className="news-block">
            <h2 className="news-subheading">2. Use of Services</h2>
            <p className="news-para">
              You agree not to use our systems for any unlawful purposes, database mining, or network overloading. Infynix — Growth Engineering Company reserves the right to terminate API key access or hosting deployments in the event of clear violations.
            </p>
          </div>

          <div className="news-block">
            <h2 className="news-subheading">3. Intellectual Property</h2>
            <p className="news-para">
              All custom software structures and components designed specifically for client statements of work belong to the client upon full payment. General framework structures remain the property of Infynix.
            </p>
          </div>

          <div className="news-block">
            <h2 className="news-subheading">4. Liability Limits</h2>
            <p className="news-para">
              Infynix — Growth Engineering Company shall not be liable for indirect, incidental, or consequential damages resulting from system downtime, hosting provider failure, or third-party API changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NotFoundPage = () => {
  return (
    <div className="news-page" style={{ position: 'relative', background: '#fff', color: '#333', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '100px 80px' }}>
      <SEOManager title="Page Not Found | Infynix" description="The page you are looking for does not exist." />
      <h1 style={{ fontSize: '6rem', color: '#007A5E', fontWeight: 'bold', margin: 0, fontFamily: "'Albert Sans', sans-serif" }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#1F2937', margin: '10px 0 20px', fontFamily: "'Albert Sans', sans-serif" }}>Systems Check: Path Not Found</h2>
      <p style={{ color: '#666', maxWidth: '400px', lineHeight: '1.6', marginBottom: '30px' }}>
        The route you requested could not be resolved. Learn more about how we build resilient business systems.
      </p>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" className="nav-cta" style={{ textDecoration: 'none' }}>
          Go Home
        </Link>
        <Link to="/growth-engineering" style={{ padding: '0.65rem 1.7rem', border: '1px solid #1F2937', borderRadius: '100px', color: '#1F2937', textDecoration: 'none', fontWeight: 500, fontSize: '0.85rem' }}>
          Growth Engineering
        </Link>
      </div>
    </div>
  );
};
