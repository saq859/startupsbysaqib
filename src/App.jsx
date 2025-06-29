import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './Sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import LogoShowcase from './components/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Experience from './sections/Experience.jsx'
import TechStack from './sections/TechStack.jsx'
import TestimonialsSection from './sections/TestimonialsSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import Footer from './sections/Footer.jsx'
import Terms from './pages/Terms.jsx';

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
            <ShowcaseSection />
            <LogoShowcase />
            <FeatureCards />
            <Experience />
            <TechStack />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </>
        } />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App