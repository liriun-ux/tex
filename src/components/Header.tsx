import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: (courseTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#161618] text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Zone 1: Geometric Monogram + Bold Wordmark matching screenshot */}
        <a 
          href="#" 
          className="flex items-center gap-3 group"
        >
          {/* Geometric Faceted Hexagon / Cutting Blade Icon */}
          <div className="w-10 h-10 bg-white text-[#161618] flex items-center justify-center rounded-lg font-mono font-black tracking-tighter text-sm group-hover:bg-[#EAE5DC] transition-colors shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-sans text-xl font-extrabold tracking-widest text-white uppercase group-hover:text-[#EAE5DC] transition-colors">
            Atelier Tiza
          </span>
        </a>

        {/* Zone 2: Navigation Links with dropdown chevrons from screenshot */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest text-[#B5B0A6] uppercase">
          <a href="#capacidades" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
            <span>Capacidades</span>
            <ChevronDown className="w-3 h-3 text-[#78746D]" />
          </a>
          <a href="#cursos" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
            <span>Programas</span>
            <ChevronDown className="w-3 h-3 text-[#78746D]" />
          </a>
          <a href="#planos" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
            <span>Planos de Corte</span>
            <ChevronDown className="w-3 h-3 text-[#78746D]" />
          </a>
          <a href="#calculadora" className="hover:text-white transition-colors py-1">
            <span>Calculadora</span>
          </a>
          <a href="#metodologia" className="hover:text-white transition-colors py-1">
            <span>Metodología</span>
          </a>
          <button
            onClick={() => onOpenInquiry()}
            className="hover:text-white transition-colors py-1"
          >
            <span>Contacto</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => onOpenInquiry()}
            className="px-5 py-2.5 text-xs tracking-wider uppercase font-bold text-[#161618] bg-white rounded-lg hover:bg-[#EAE5DC] transition-colors whitespace-nowrap shadow-sm"
          >
            Admisiones
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white focus:outline-none"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161618] px-8 pt-4 pb-8 space-y-4 border-t border-[#26262A] animate-in fade-in duration-200">
          <a
            href="#capacidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider uppercase text-[#B5B0A6] hover:text-white transition-colors py-2"
          >
            Capacidades
          </a>
          <a
            href="#cursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider uppercase text-[#B5B0A6] hover:text-white transition-colors py-2"
          >
            Programas Académicos
          </a>
          <a
            href="#planos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider uppercase text-[#B5B0A6] hover:text-white transition-colors py-2"
          >
            Planos de Corte & Tizado
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider uppercase text-[#B5B0A6] hover:text-white transition-colors py-2"
          >
            Calculadora de Metraje
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold tracking-wider uppercase text-[#B5B0A6] hover:text-white transition-colors py-2"
          >
            Metodología de Taller
          </a>
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-xs tracking-wider uppercase font-bold text-[#161618] bg-white rounded-lg text-center"
            >
              Solicitar Admisión
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
