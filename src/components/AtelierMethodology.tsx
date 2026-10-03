import React from 'react';
import patternLayoutImg from '../assets/images/pattern_layout_markers_1791055329302.jpg';
import atelierTableImg from '../assets/images/atelier_cutting_table_1791055349690.jpg';
import { CheckSquare, ArrowUpRight } from 'lucide-react';

export const AtelierMethodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 md:py-36 bg-[#FCFBF8] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header matching screenshot typography */}
        <div className="max-w-3xl mb-14">
          <div className="text-xl sm:text-2xl font-black tracking-widest text-[#B5AFA6] uppercase mb-4 select-none">
            Ingeniería de Taller
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#161618] tracking-tight uppercase leading-[1.02] mb-6">
            Metodología de Manufactura
            <span className="block font-medium text-[#403C37]">
              El Rigor del Oficio y la Precisión Mecánica
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A544C] font-normal leading-relaxed">
            Formamos patronistas y confeccionistas que comprenden la física de la caída textil, la tensión de la puntada y la arquitectura interior de las prendas estructuradas.
          </p>
        </div>

        {/* 2-Column Split: Image + Numbered Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Atelier Photo Card with box shadow only, no borders */}
          <div className="lg:col-span-6">
            <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-[0_20px_50px_rgba(22,22,24,0.06)]">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#0E0E10]">
                <img
                  src={patternLayoutImg}
                  alt="Mesa de corte con patrones de papel kraft y tijera de sastre sobre algodón crudo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 pt-5 text-xs font-mono font-bold text-[#6B655D] flex items-center justify-between">
                <span>Herramientas Tradicionales de Patronaje</span>
                <span className="text-[#161618]">ATELIER TIZA</span>
              </div>
            </div>
          </div>

          {/* Editorial numbered steps matching screenshot typography */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <div className="font-sans text-2xl font-black uppercase text-[#161618] tracking-tight">
                01. Antropometría y Desahogo
              </div>
              <p className="text-sm text-[#5A544C] leading-relaxed">
                El cuerpo humano no es un cilindro estático. Entrenamos el ojo y la cinta métrica para interpretar lordosis, asimetrías de hombro y proporciones óseas, adaptando el patrón base sin deformar las líneas armónicas.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-sans text-2xl font-black uppercase text-[#161618] tracking-tight">
                02. La Verdad del Hilo y el Plano de Corte
              </div>
              <p className="text-sm text-[#5A544C] leading-relaxed">
                Un desfase de 1.5 grados en la orientación de la urdimbre provocará torsión helicoidal en perneras o desbocamiento de solapas. En nuestra mesa de corte cada aplomo milimétrico se comprueba rigurosamente.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-sans text-2xl font-black uppercase text-[#161618] tracking-tight">
                03. Arquitectura Interior y Conformado con Vapor
              </div>
              <p className="text-sm text-[#5A544C] leading-relaxed">
                Una prenda de alto rango se construye desde su esqueleto interior: plastrones en crin de caballo, entretelas al bies y modelado tridimensional con plancha pesada antes de unir la primera costura.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Signature Dark Card for Workshop Facilities matching screenshot */}
        <div className="bg-[#161618] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_25px_65px_rgba(0,0,0,0.22)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#0E0E10] shadow-2xl">
                <img
                  src={atelierTableImg}
                  alt="Espacio amplio de taller con grandes mesas de corte iluminadas"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-widest text-[#8A867E] font-mono font-bold">
                Instalaciones de Taller
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tight">
                Mesas Continuas de Corte Industrial
              </h3>
              <p className="text-sm text-[#A8A49C] leading-relaxed font-light">
                Contamos con mesas de tizado continuo de 3.50 metros de largo, iluminación cenital calibrada a 5000K, maquinaria industrial Juki de última generación y maniquíes Stockman Paris.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-white text-[#161618] flex items-center justify-center shrink-0">
                    <CheckSquare className="w-4 h-4 fill-[#161618] text-white" />
                  </div>
                  <span className="text-sm font-bold text-white">Puesto individual de confección</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-white text-[#161618] flex items-center justify-center shrink-0">
                    <CheckSquare className="w-4 h-4 fill-[#161618] text-white" />
                  </div>
                  <span className="text-sm font-bold text-white">Grupos reducidos (máx. 8 alumnos)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => alert('Para agendar una visita guiada al taller, utiliza el botón de Admisiones en la barra superior.')}
                  className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-black tracking-widest uppercase text-white bg-transparent border-2 border-white rounded-xl hover:bg-white hover:text-[#161618] transition-all group"
                >
                  <span>Conocer Instalaciones</span>
                  <div className="w-5 h-5 border border-current rounded flex items-center justify-center text-[10px] group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
