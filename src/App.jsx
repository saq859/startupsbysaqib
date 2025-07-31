import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Terms from './pages/Terms.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';

// Import non-lazy components
import Hero, { WorkSection } from './sections/Hero.jsx';
import PhotoshootPackages from './sections/PhotoshootPackages.jsx';

// Lazy load all sections for better performance
const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection.jsx'));
const LogoShowcase = lazy(() => import('./components/LogoSection.jsx'));
const FeatureCards = lazy(() => import('./sections/FeatureCards.jsx'));
const Experience = lazy(() => import('./sections/Experience.jsx'));
const TechStack = lazy(() => import('./sections/TechStack.jsx'));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection.jsx'));
const ContactSection = lazy(() => import('./sections/ContactSection.jsx'));
const Footer = lazy(() => import('./sections/Footer.jsx'));

function AppRoutes() {
  const location = useLocation();
  const isTermsPage = location.pathname === '/terms';

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      {!isTermsPage && <NavBar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <WorkSection />
            <PhotoshootPackages />
            <Suspense fallback={<LoadingSpinner />}>
            <ShowcaseSection />
            <LogoShowcase />
            <FeatureCards />
            <Experience />
            <TechStack />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
            </Suspense>
          </>
        } />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

const App = () => {
  return (
    <ErrorBoundary>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;