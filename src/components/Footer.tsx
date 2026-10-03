import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-16 bg-[#161618] text-[#B5B0A6] border-t border-[#26262A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand & philosophy (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white text-[#161618] flex items-center justify-center rounded-lg font-mono font-black text-sm">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-sans text-xl font-extrabold tracking-widest text-white uppercase">
                Atelier Tiza
              </span>
            </div>
            <p className="text-sm text-[#8A867E] max-w-sm leading-relaxed">
              Centro superior de patronaje industrial, corte textil automatizado y confección sastre de alta precisión técnica. Preservando el rigor del oficio con tecnología de manufactura contemporánea.
            </p>
            <div className="pt-2 text-xs font-mono text-[#8A867E]">
              Tolerancia de corte &plusmn; 0.5 mm · Mesas de 3.50 m · Puestos individuales
            </div>
          </div>

          {/* Programs links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-mono font-bold">
              Especialidades
            </div>
            <ul className="space-y-2.5 text-xs text-[#8A867E] font-medium">
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">Patronaje Industrial Base</a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">Sastrería Clásica de Chaqueta</a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">Corte de Tejidos Delicados</a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">Drapeado y Moulage de Atelier</a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition-colors">Patronaje CAD y Escalado</a>
              </li>
            </ul>
          </div>

          {/* Workshop & Location (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white font-mono font-bold">
              Instalaciones & Taller
            </div>
            <p className="text-xs text-[#8A867E] leading-relaxed">
              Calle de la Costura 14, Planta 2<br />
              Barrio de las Artes Textiles<br />
              28004 Madrid, España
            </p>
            <div className="pt-2 text-xs text-[#8A867E] space-y-1 font-mono">
              <div>Consultas: <span className="text-white">info@ateliertiza.es</span></div>
              <div>Teléfono: <span className="text-white">+34 912 345 678</span></div>
              <div>Horario: Lunes a Viernes, 09:30 – 20:30</div>
            </div>
          </div>
        </div>

        {/* Quiet bottom copyright */}
        <div className="pt-8 border-t border-[#26262A] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6E6B65] gap-4">
          <div>
            &copy; {new Date().getFullYear()} ATELIER TIZA TEXTILE ENGINEERING. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-white transition-colors">Normas de Taller</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
