import React from 'react';
import { Course } from '../types';
import { X, CheckSquare, ArrowUpRight, Scissors } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, onEnroll }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_30px_80px_rgba(0,0,0,0.3)] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header visual */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#0E0E10]">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B5B0A6] mb-1 font-bold">
                {course.categoryLabel} · {course.level}
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-tight">
                {course.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[#161618] hover:bg-black text-white rounded-full shadow-md transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Quick info row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#F0ECE4] text-xs font-mono">
            <div>
              <span className="text-[#8A867E] uppercase tracking-wider block font-bold">Duración</span>
              <span className="font-bold text-[#161618] mt-0.5 block">{course.duration}</span>
            </div>
            <div>
              <span className="text-[#8A867E] uppercase tracking-wider block font-bold">Modalidad</span>
              <span className="font-bold text-[#161618] mt-0.5 block">{course.modality}</span>
            </div>
            <div>
              <span className="text-[#8A867E] uppercase tracking-wider block font-bold">Horario</span>
              <span className="font-bold text-[#161618] mt-0.5 block">{course.schedule}</span>
            </div>
            <div>
              <span className="text-[#8A867E] uppercase tracking-wider block font-bold">Inversión</span>
              <span className="text-base font-black text-[#161618] mt-0.5 block tabular-nums">{course.price}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#8A867E] font-bold mb-2">
              Descripción del Programa
            </h4>
            <p className="text-sm text-[#5A544C] leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Blueprint detail dark card */}
          <div className="bg-[#161618] text-white p-6 rounded-2xl shadow-md space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A8A49C] font-mono font-bold">
              <Scissors className="w-4 h-4 text-white" />
              <span>Plano Técnico de Taller Incluido</span>
            </div>
            <div className="text-base font-sans font-black uppercase text-white">
              {course.blueprintTitle}
            </div>
            <p className="text-xs text-[#B5B0A6] leading-relaxed">
              {course.blueprintDetail}
            </p>
          </div>

          {/* Modules breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#8A867E] font-bold mb-4">
              Bloques Lectivos de Formación
            </h4>
            <div className="space-y-3">
              {course.modules.map((m, idx) => (
                <div key={idx} className="p-4 bg-[#FAF8F5] rounded-2xl flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="text-xs font-mono font-bold text-[#161618] tracking-wider whitespace-nowrap">{m.week}</span>
                  <div>
                    <h5 className="text-sm font-bold uppercase text-[#161618]">{m.title}</h5>
                    <p className="text-xs text-[#5A544C] mt-1 leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Materials included with square checkmarks */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#8A867E] font-bold mb-3">
              Herramientas y Materiales Aportados por el Taller
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.materialsProvided.map((mat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-[#2C2A28]">
                  <div className="w-4 h-4 rounded bg-[#161618] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckSquare className="w-3 h-3 fill-white text-[#161618]" />
                  </div>
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal footer actions */}
          <div className="pt-6 border-t border-[#F0ECE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#8A867E]">
              Certificado técnico de aprovechamiento homologado.
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-3 text-xs tracking-wider uppercase font-bold text-[#6B655D] hover:text-[#161618] transition-colors"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  onClose();
                  onEnroll(course.title);
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-black tracking-widest uppercase text-white bg-[#161618] rounded-xl shadow-md hover:bg-[#2C2C30] transition-all"
              >
                <span>Solicitar Admisión</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
