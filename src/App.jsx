import './index.css';
import './App.css';

import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutInfynix from './components/AboutInfynix';
import TimelineSection from './components/TimelineSection';
import StatsSection from './components/StatsSection';
import SpecializeSection from './components/SpecializeSection';
import InitiativesSection from './components/InitiativesSection';
import RiversideChatSection from './components/RiversideChatSection';
import PartnersSection from './components/PartnersSection';
import ClientsSection from './components/ClientsSection';
import ServicesSection from './components/Services';
// import FeaturedWork from './components/FeaturedWork';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import FutureOfRetail from './components/FutureOfRetail';
import Footer from './components/Footer';
import News from './components/News';
import Contact from './components/Contact';


// Strategy v2.0 Page Imports
import GrowthEngineering from './components/GrowthEngineering';
import SolutionsPage from './components/SolutionsPage';
import SolutionsIndex from './components/SolutionsIndex';
import IndustriesPage from './components/IndustriesPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import InsightsPage from './components/InsightsPage';
import { PrivacyPolicy, TermsOfService, NotFoundPage } from './components/UtilityPages';

function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* About Infynix Section */}
      <AboutInfynix />
      {/* 2. "We Specialize" + CTA card + Footer (all inside) */}
      <SpecializeSection />

      {/* 3. Services */}
      <ServicesSection />
      
      {/* Timeline Section */}
      <TimelineSection />

      {/* Stats Section */}
      <StatsSection />

      

      {/* 4. Featured Work */}
      {/* <FeaturedWork /> */}



      {/* 5. Initiatives */}
      <InitiativesSection />

      {/* 6. Riverside Chat */}
      {/* <RiversideChatSection /> */}

      {/* 7. Trusted Partners */}
      <PartnersSection />

      {/* 8. Clients */}
      <ClientsSection />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ position: 'relative' }}>
        {/* Global Dashed Lines (handled via CSS pseudo-elements in index.css) */}

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/"                 element={<HomePage />} />
            <Route path="/growth-engineering" element={<GrowthEngineering />} />
            <Route path="/solutions/:slug"   element={<SolutionsPage />} />
            <Route path="/solutions"        element={<SolutionsIndex />} />
            <Route path="/industries/:slug" element={<IndustriesPage />} />
            <Route path="/industries"       element={<IndustriesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudiesPage />} />
            <Route path="/case-studies"      element={<CaseStudiesPage />} />
            <Route path="/insights/:slug"    element={<InsightsPage />} />
            <Route path="/insights"          element={<InsightsPage />} />
            <Route path="/about"             element={<WhoWeAre />} />
            <Route path="/who-we-are"        element={<Navigate to="/about" replace />} />
            <Route path="/contact"           element={<Contact />} />
            <Route path="/privacy-policy"    element={<PrivacyPolicy />} />
            <Route path="/terms-of-service"  element={<TermsOfService />} />
            
            {/* Legacy redirects */}
            <Route path="/what-we-do"        element={<Navigate to="/growth-engineering" replace />} />
            <Route path="/future-of-growth-systems" element={<Navigate to="/growth-engineering" replace />} />
            <Route path="/news"              element={<Navigate to="/insights" replace />} />
            <Route path="/services"          element={<Navigate to="/solutions" replace />} />
            <Route path="/portfolio"         element={<Navigate to="/case-studies" replace />} />
            <Route path="/about-us"          element={<Navigate to="/about" replace />} />
            <Route path="/contact-us"        element={<Navigate to="/contact" replace />} />
            
            {/* Fallback 404 */}
            <Route path="*"                  element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
      {/* Shared footer only on non-homepage routes */}
      {!isHomePage && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
