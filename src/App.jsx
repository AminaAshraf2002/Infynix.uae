import './index.css';
import './App.css';

import { BrowserRouter, StaticRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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

// Location + service landing pages (SEO)
import LandingPage from './components/LandingPage';
import { landingPages } from './content/landingPages';
import Seo from './seo/Seo';
import { organizationSchema, websiteSchema, localBusinessSchema } from './seo/schema';
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from './seo/siteConfig';

function HomePage() {
  return (
    <>
      <Seo
        title={DEFAULT_TITLE}
        description={DEFAULT_DESCRIPTION}
        path="/"
        schema={[organizationSchema(), websiteSchema(), localBusinessSchema()]}
      />

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

            {/* Location + service landing pages. Flat slugs, matching the
                "{service} company in {city}" pattern that ranks in this market. */}
            {landingPages.map((page) => (
              <Route
                key={page.slug}
                path={`/${page.slug}`}
                element={<LandingPage slug={page.slug} />}
              />
            ))}

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

/**
 * `location` is supplied only by the prerenderer, which needs a StaticRouter.
 * `helmetContext` is how the prerenderer reads back the head tags each route
 * rendered, so title, meta, canonical and JSON-LD end up in the static HTML
 * rather than being applied after hydration.
 */
function App({ helmetContext = {}, location }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const content = <AppContent />;

  return (
    <HelmetProvider context={helmetContext}>
      {location ? (
        <StaticRouter location={location}>{content}</StaticRouter>
      ) : (
        <BrowserRouter>{content}</BrowserRouter>
      )}
    </HelmetProvider>
  );
}

export default App;
