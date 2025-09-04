import React, { useState, useEffect} from "react";
import { Home, Code, User} from 'lucide-react'

import Header from "../components/Header";
import Hero from '../components/Hero';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const sections = [
    { id: 'home', title: 'Inicio', icon: Home },
    { id: 'about', title: 'Sobre', icon: User},
    { id: 'projects', title: 'Projetos', icon: Code }

  ];

  useEffect(() => {
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'})
      }
    }
  }

  return (
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950">
      <Header sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollY={scrollY} />

      <Hero />
    </div>
  );
};

export default Portfolio;