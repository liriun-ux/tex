import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { Course } from '../types';
import { ArrowUpRight, CheckSquare } from 'lucide-react';

interface CourseCatalogProps {
  onSelectCourse: (course: Course) => void;
  onOpenInquiry: (courseTitle: string) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ onSelectCourse, onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCourses = activeCategory === 'all'
    ? COURSES
    : COURSES.filter((c) => c.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Todos los Programas' },
    { id: 'base', label: 'Patronaje Base' },
    { id: 'sastreria', label: 'Sastrería Clásica' },
    { id: 'confeccion', label: 'Confección & Acabados' },
    { id: 'digital', label: 'Patronaje Digital' },
    { id: 'drapeado', label: 'Drapeado & Moulage' }
  ];

  return (
    <section id="cursos" className="py-24 md:py-36 bg-[#FCFBF8] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header matching screenshot typography */}
        <div className="max-w-3xl mb-14">
          <div className="text-xl sm:text-2xl font-black tracking-widest text-[#B5AFA6] uppercase mb-4 select-none">
            Currículo de Formación
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#161618] tracking-tight uppercase leading-[1.02] mb-6">
            Programas Académicos
            <span className="block font-medium text-[#403C37]">
              Especialización en Corte y Confección
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A544C] font-normal leading-relaxed">
            Formación presencial y técnica orientada al dominio de la mesa de corte, la geometría del plano textil y los estándares de confección de alta costura e industria.
          </p>
        </div>

        {/* Filter buttons in technical style */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-black tracking-wider uppercase rounded-xl transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#161618] text-white shadow-md'
                  : 'bg-white text-[#736C63] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:text-[#161618]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid - CARDS WITH BOX-SHADOW ONLY, ZERO SOLID BORDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredCourses.map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden flex flex-col justify-between shadow-[0_15px_45px_rgba(22,22,24,0.06)] hover:shadow-[0_25px_60px_rgba(22,22,24,0.12)] transition-all duration-300 group"
            >
              {/* Card visual banner */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0E0E10]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Technical badge */}
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-mono font-bold bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-[#161618] shadow-sm">
                  {course.categoryLabel}
                </div>
              </div>

              {/* Card content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed metadata line with typographic separators */}
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8A867E] uppercase mb-3">
                    <span>{course.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.modality}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.level}</span>
                  </div>

                  <h3 className="font-sans text-xl sm:text-2xl font-black uppercase text-[#161618] leading-tight group-hover:text-[#A3704C] transition-colors mb-3">
                    {course.title}
                  </h3>

                  <p className="text-sm text-[#5A544C] leading-relaxed line-clamp-3 mb-6">
                    {course.description}
                  </p>

                  {/* Highlights with square checkboxes matching screenshot */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#F0ECE4]">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A867E] font-bold">
                      Competencias Clave:
                    </div>
                    {course.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#2C2A28] font-bold">
                        <div className="w-4 h-4 rounded bg-[#161618] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <CheckSquare className="w-3 h-3 fill-white text-[#161618]" />
                        </div>
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A867E] block font-bold">Inversión</span>
                    <span className="text-xl font-sans font-black text-[#161618] tabular-nums">{course.price}</span>
                  </div>

                  {/* Technical Outline Button matching screenshot */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-black tracking-widest uppercase text-[#161618] bg-white border-2 border-[#161618] rounded-xl hover:bg-[#161618] hover:text-white transition-all group/btn"
                    >
                      <span>Ver Programa</span>
                      <div className="w-4 h-4 border border-current rounded flex items-center justify-center text-[9px] group-hover/btn:rotate-45 transition-transform">
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
