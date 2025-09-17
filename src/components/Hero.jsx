import React from 'react';

import fotoMatheus from '../images/matheus-oliveira.webp';
import { Eye, ArrowRight, User, Github, Linkedin } from 'lucide-react';

function Hero({ scrollToSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 bg-neutral-900">
 {/*
      <div className="absolute inset-0"> 
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        <div className="text-center lg:text-left order-2 lg:order-1">
        
        
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Olá, eu sou o
            <span className="block bg-gradient-to-b from-pink-100 via-pastel-100 to-pastel-600  bg-clip-text text-transparent animate-pulse">
              Matheus
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Desenvolvendo FullStack e solucionando problemas com criatividade 
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
            <button
              onClick={() => scrollToSection('Projects')}
              className="group flex items-center justify-center space-x-2 bg-pastel-100 text-neutral-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-pastel-200 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base min-h-[48px]"
            >
              <Eye size={18} className="sm:w-5 sm:h-5" />
              <span>Ver Projetos</span>
              <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('About')}
              className="group flex items-center justify-center space-x-2 border-2 border-pastel-100 text-pastel-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:border-pastel-200 hover:bg-pastel-200 hover:text-neutral-900 transition-all duration-300 hover:scale-105 text-sm sm:text-base min-h-[48px]"
            >
              <User size={18} className="sm:w-5 sm:h-5" />
              <span>Sobre Mim</span>
            </button>
          </div>

          {/* Contatos */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 justify-center lg:justify-start text-xs sm:text-sm text-neutral-600">
            <a 
              href="github.com/mathdfx/" 
              target="_blank" 
              className="flex text-white/95 items-center justify-center sm:justify-start space-x-2 hover:text-pastel-100 transition-colors group p-2 sm:p-0"
            >
              <Github size={20} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              <span>mathdfx</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mathdfx" 
              target="_blank" 
              className="flex text-white/95 items-center justify-center sm:justify-start space-x-2 hover:text-pastel-100 transition-colors group p-2 sm:p-0"
            >
              <Linkedin size={20} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              <span>Linkedin</span>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative">
            <div className="w-64 sm:w-80 lg:w-96 aspect-square bg-gradient-to-br from-neutral-800 to-pastel-900 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img 
                className="w-full h-full object-cover object-center"
                src={fotoMatheus} 
                alt="Matheus Oliveira"
                loading="eager"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
