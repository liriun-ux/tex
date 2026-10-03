import React, { useState } from 'react';
import { COURSES } from '../data/courses';
import { X, CheckSquare, Download, ArrowUpRight } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  preselectedCourse?: string;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  preselectedCourse,
  onClose
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(preselectedCourse || COURSES[0].title);
  const [schedulePref, setSchedulePref] = useState('morning');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (preselectedCourse) {
      setSelectedCourse(preselectedCourse);
    }
  }, [preselectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-8 sm:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.3)] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 text-[#8A867E] hover:text-[#161618] rounded-full transition-colors"
          aria-label="Cerrar formulario"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-14 h-14 bg-[#161618] text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <CheckSquare className="w-8 h-8 fill-white text-[#161618]" />
            </div>
            <h3 className="font-sans text-3xl font-black uppercase text-[#161618]">
              Solicitud Procesada
            </h3>
            <p className="text-sm text-[#5A544C] max-w-md mx-auto leading-relaxed">
              Gracias, <span className="font-bold text-[#161618]">{name}</span>. Te hemos remitido a <span className="font-bold text-[#161618]">{email}</span> el dossier técnico del curso con el calendario lectivo y los requisitos de mesa de corte.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  alert('Descargando Dossier Técnico y Plano de Trazado CAD en PDF...');
                }}
                className="w-full sm:w-auto px-6 py-3.5 text-xs tracking-wider uppercase font-black text-[#161618] bg-white border-2 border-[#161618] rounded-xl flex items-center justify-center gap-2 hover:bg-[#FAF8F5] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Dossier PDF</span>
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3.5 text-xs tracking-wider uppercase font-black text-white bg-[#161618] rounded-xl hover:bg-[#2C2C30] transition-colors"
              >
                Finalizar
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="text-xs font-mono uppercase tracking-widest text-[#8A867E] font-bold mb-2">
                Admisiones 2026
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-black uppercase text-[#161618] leading-tight">
                Solicitud de Admisión Técnica
              </h3>
              <p className="text-xs text-[#5A544C] mt-2">
                Completa tus datos para recibir el programa curricular detallado y disponibilidad de plaza en mesa de corte.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8A867E] font-bold mb-1.5">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Carmen Ortiz"
                  className="w-full px-4 py-3 text-sm bg-[#FAF8F5] rounded-xl text-[#161618] placeholder-[#9E988F] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#161618]/20 transition-all font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8A867E] font-bold mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="carmen@ejemplo.com"
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F5] rounded-xl text-[#161618] placeholder-[#9E988F] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#161618]/20 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8A867E] font-bold mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F5] rounded-xl text-[#161618] placeholder-[#9E988F] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#161618]/20 transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8A867E] font-bold mb-1.5">
                  Especialidad de Interés
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[#FAF8F5] rounded-xl text-[#161618] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#161618]/20 transition-all font-bold"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8A867E] font-bold mb-1.5">
                  Turno Horario
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'morning', label: 'Mañanas' },
                    { id: 'afternoon', label: 'Tardes' },
                    { id: 'weekend', label: 'Sábados' }
                  ].map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSchedulePref(s.id)}
                      className={`py-2 text-xs font-bold uppercase rounded-xl transition-all ${
                        schedulePref === s.id
                          ? 'bg-[#161618] text-white shadow-sm'
                          : 'bg-[#FAF8F5] text-[#6E675F] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8A867E] font-bold mb-1.5">
                  Observaciones o Nivel Previo
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detalla tu experiencia previa en patronaje o corte..."
                  className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] rounded-xl text-[#161618] placeholder-[#9E988F] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#161618]/20 transition-all resize-none font-medium"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-xs tracking-widest uppercase font-black text-white bg-[#161618] rounded-xl shadow-[0_8px_24px_rgba(22,22,24,0.25)] hover:bg-[#2C2C30] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Procesando...</span>
                  ) : (
                    <>
                      <span>Enviar Solicitud y Recibir Dossier</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
