import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero, { WorkSection } from './Sections/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import Terms from './pages/Terms.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import PhotoshootPackages from './sections/PhotoshootPackages.jsx';

// Lazy load all sections for better performance
const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection.jsx'))
const LogoShowcase = lazy(() => import('./components/LogoSection.jsx'))
const FeatureCards = lazy(() => import('./sections/FeatureCards.jsx'))
const Experience = lazy(() => import('./sections/Experience.jsx'))
const TechStack = lazy(() => import('./sections/TechStack.jsx'))
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection.jsx'))
const ContactSection = lazy(() => import('./sections/ContactSection.jsx'))
const Footer = lazy(() => import('./sections/Footer.jsx'))



function AppRoutes() {
  const location = useLocation();
  const isTermsPage = location.pathname === '/terms';
  return (
    <>
      {!isTermsPage && <NavBar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <WorkSection />
            <PhotoshootPackages />
            <Suspense fallback={<LoadingSpinner />}>
            <ShowcaseSection />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
            <LogoShowcase />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
            <FeatureCards />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
            <Experience />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
            <TechStack />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
            <TestimonialsSection />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
            <ContactSection />
            </Suspense>
            <Suspense fallback={<LoadingSpinner />}>
            <Footer />
            </Suspense>
          </>
        } />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <ErrorBoundary>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App