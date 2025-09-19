import React from "react";
import { Menu, X, Shrimp } from 'lucide-react';

const Header = ({ sections, activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen, scrollY }) => {
  return (
    <>
      <nav className={`fixed w-full top-0 sm:top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${scrollY > 50 ? 'hover:-translate-y-1' : ''}`}>
        <div className={`w-full sm:w-11/12 max-w-5xl mx-auto bg-neutral-900 backdrop-blur-xl sm:rounded-full px-6 py-3 shadow-lg shadow-neutral-900 transition-all duration-300 
          ${scrollY > 50 ? 'shadow-xl' : 'shadow-lg'} 
          hover:shadow-2xl hover:shadow-black`}>

          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4">

            {/* Logo */}
            <div
              onClick={() => scrollToSection('home')}
              className="cursor-pointer group relative"
            >
              <span className="text-xl font-bold text-pastel-100 md:text-white group-hover:text-pastel-200 transition-colors duration-300">
                MATH
              </span>
              <span className="absolute -top-1 font-bold text-pastel-100 md:text-white group-hover:text-pastel-100 transition-colors duration-300">
                <Shrimp />
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex justify-self-center justify-center gap-6">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href="#"
                  onClick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
                  className={`relative text-sm font-medium uppercase tracking-wider transition-all duration-300 py-2 group ${activeSection === section.id ? 'text-white' : 'text-white/70 hover:text-pastel-200'}`}
                >
                  {section.title.toUpperCase()}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pastel-100 via-pastel-300 to-pastel-500 transition-all duration-300 ${activeSection === section.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              ))}
            </div>


            <div className="col-start-3 justify-self-end">
              {/* Desktop CCT Button */}
              <button
                onClick={() => { scrollToSection('contact'); }}
                className="hidden md:flex px-8 bg-gradient-to-r from-pastel-100 to-pastel-200 text-neutral-900 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 hover:from-pastel-300 hover:to-pastel-500 active:translate-y-0"
              >
                Vamos Conversar
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-neutral-950/80 backdrop-blur-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-6 text-center">
              {sections.map((section) => {
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      scrollToSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-2xl font-semibold uppercase tracking-widest transition-all duration-300 ${activeSection === section.id
                      ? 'text-pastel-200'
                      : 'text-white/70 hover:text-white'
                      }`}
                  >
                    {section.title}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => {
                scrollToSection('contact');
                setMobileMenuOpen(false);
              }}
              className="absolute bottom-16 px-10 py-4 bg-gradient-to-r from-pastel-100 to-pastel-200 text-neutral-900 rounded-full text-base font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Vamos Conversar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
