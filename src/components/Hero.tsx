import React, { useState } from 'react';
import { ArrowUpRight, CheckSquare } from 'lucide-react';
import precisionToolsImg from '../assets/images/precision_tailor_tools_1791056038384.jpg';
import cncCuttingImg from '../assets/images/textile_cnc_cutting_1791056027227.jpg';
import cuttingBlueprintImg from '../assets/images/cutting_pattern_blueprint_1791055317140.jpg';
import garmentPlanImg from '../assets/images/garment_construction_plan_1791055339661.jpg';

interface HeroProps {
  onExploreCourses: () => void;
  onViewBlueprints: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onViewBlueprints }) => {
  const [activeTab, setActiveTab] = useState<'cnc' | 'sastreria' | 'cad'>('cnc');

  const capabilities = {
    cnc: {
      title: 'CORTE INDUSTRIAL Y TIZADO CNC',
      description: 'El corte automatizado de alta precisión con control numérico entrega geometrías textiles complejas en lanas sastre, sedas y tejidos técnicos. Desde aplomos milimétricos hasta despieces con merma mínima, transformamos patrones digitales en piezas cortadas a la perfección.',
      bullets: [
        'Tolerancia de corte de ± 0.5 mm',
        'Optimización algorítmica de tizado',
        'Lanas finas, sedas y tejidos técnicos'
      ],
      image: cncCuttingImg,
      buttonLabel: 'CONOCER PROGRAMA'
    },
    sastreria: {
      title: 'SASTRERÍA Y ARQUITECTURA TEXTIL',
      description: 'Construcción estructural de chaquetas y abrigos con entretelas de crin de caballo picadas a mano, solapas enrolladas y hombreras modeladas con vapor pesado. El cenit de la confección artesanal aplicado a la elegancia contemporánea.',
      bullets: [
        'Modelado tridimensional con plancha de vapor',
        'Picado manual de plastrones y solapas',
        'Mangas sastre de dos hojas con copa embebida'
      ],
      image: cuttingBlueprintImg,
      buttonLabel: 'VER ESPECIALIDAD'
    },
    cad: {
      title: 'PATRONAJE DIGITAL Y ESCALADO CAD',
      description: 'Desarrollo de mampostería vectorial para moda, digitalización de bases antropométricas y nidos de escalado multitalla (XS a 3XL) exportables a sistemas de corte láser industriales.',
      bullets: [
        'Gradación proporcional paramétrica',
        'Compatibilidad de archivo DXF-AAMA',
        'Rendimiento útil superior al 91%'
      ],
      image: garmentPlanImg,
      buttonLabel: 'EXPLORAR CAD'
    }
  };

  const currentCap = capabilities[activeTab];

  return (
    <section id="capacidades" className="pt-16 pb-28 md:pt-20 md:pb-36 bg-[#FCFBF8] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* TOP SECTION: Split Layout with Floating Object & Big Typography from Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 lg:mb-16">
          {/* Left Column: Prominent Isolated Precision Object (matching metal block from screenshot) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-square bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-3">
              <img
                src={precisionToolsImg}
                alt="Herramientas de alta precisión para patronaje y corte textil"
                className="w-full h-full object-contain object-center scale-95"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-sm flex items-center justify-between text-[11px] font-mono tracking-wider text-[#6B655D] uppercase">
                <span>Herramientas Grado Atelier</span>
                <span className="font-bold text-[#161618]">PRECISIÓN &plusmn; 0.5MM</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Typography matching the screenshot */}
          <div className="lg:col-span-7">
            {/* Watermark/Kicker: "QUÉ HACEMOS" matching "WHAT WE DO" from screenshot */}
            <div className="text-xl sm:text-2xl font-black tracking-widest text-[#B5AFA6] uppercase mb-4 select-none">
              Qué Hacemos
            </div>

            {/* Bold Headline matching screenshot typography */}
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#161618] tracking-tight uppercase leading-[1.02] mb-6">
              Capacidades de Patronaje
              <span className="block font-medium text-[#403C37]">
                Diseñadas para la Precisión
              </span>
            </h1>

            {/* Description matching screenshot structure */}
            <p className="text-base sm:text-lg text-[#5A544C] font-normal leading-relaxed max-w-2xl mb-8">
              Atelier Tiza proporciona formación técnica avanzada a través de tres métodos nucleares de manufactura textil. Cada capacidad está respaldada por maquinaria de taller industrial, experiencia en comportamiento de tejidos nobles y soporte técnico de patronaje para resolver los desafíos de confección más exigentes.
            </p>

            {/* Secondary links/buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreCourses}
                className="px-6 py-3 text-xs tracking-wider uppercase font-bold text-white bg-[#161618] rounded-xl shadow-[0_8px_20px_rgba(22,22,24,0.2)] hover:bg-[#2C2C30] transition-all"
              >
                Ver Catálogo de Programas
              </button>
              <button
                onClick={onViewBlueprints}
                className="px-6 py-3 text-xs tracking-wider uppercase font-bold text-[#161618] bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all"
              >
                Explorar Planos de Corte
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: The Signature Dark Feature Card from the Screenshot */}
        <div className="relative">
          {/* Capability Tabs above the card */}
          <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
            {[
              { id: 'cnc', label: 'Corte Industrial CNC' },
              { id: 'sastreria', label: 'Sastrería Estructurada' },
              { id: 'cad', label: 'Patronaje CAD Digital' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#161618] text-white shadow-md'
                    : 'bg-white text-[#736C63] hover:text-[#161618] shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Dark Card */}
          <div className="bg-[#161618] text-white rounded-3xl overflow-hidden shadow-[0_25px_65px_rgba(0,0,0,0.22)] p-8 sm:p-12 lg:p-14 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Card Left Column: Title, Description, Checkboxes, Button */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-snug">
                  {currentCap.title}
                </h2>

                <p className="text-sm sm:text-base text-[#A8A49C] leading-relaxed font-light">
                  {currentCap.description}
                </p>

                {/* Checkbox list matching screenshot */}
                <div className="space-y-3.5 pt-2">
                  {currentCap.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-white text-[#161618] flex items-center justify-center shrink-0">
                        <CheckSquare className="w-4 h-4 fill-[#161618] text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technical button with outline and corner glyph matching [LEARN MORE] in screenshot */}
                <div className="pt-4">
                  <button
                    onClick={onExploreCourses}
                    className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-black tracking-widest uppercase text-white bg-transparent border-2 border-white rounded-xl hover:bg-white hover:text-[#161618] transition-all group"
                  >
                    <span>{currentCap.buttonLabel}</span>
                    <div className="w-5 h-5 border border-current rounded flex items-center justify-center text-[10px] group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Card Right Column: High-Contrast Machinery Photography with subtle gradient fade */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#0E0E10] shadow-2xl">
                  <img
                    src={currentCap.image}
                    alt={currentCap.title}
                    className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
                  />
                  {/* Subtle edge vignette matching the screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#161618]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
