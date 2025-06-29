import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg max-w-4xl mx-auto mt-6 rounded-2xl px-8 ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
          <a href="#hero" className="logo">
         Startups By Saqib
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group">
                  <a href={link}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50"
            onClick={toggleMobileMenu}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Desktop Contact Button */}
          <a href="#contact" className="contact-btn group hidden lg:flex">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </header>

      {/* Full Screen Mobile Navigation Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>
        
        {/* Menu Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <nav className="text-center">
            <ul className="space-y-8">
              {navLinks.map(({ link, name }) => (
                <li key={name}>
                  <a 
                    href={link} 
                    className="text-white text-3xl font-semibold hover:text-purple-400 transition-all duration-300 block py-4"
                    onClick={closeMobileMenu}
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="pt-8">
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-bold rounded-xl hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-300 text-xl"
                  onClick={closeMobileMenu}
                >
                  Contact me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
