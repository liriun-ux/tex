import React, { useState } from 'react';
import { FABRIC_PRESETS } from '../data/courses';
import { CheckSquare, ArrowUpRight, Scissors } from 'lucide-react';

export const FabricCalculator: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState(FABRIC_PRESETS[0].id);
  const [size, setSize] = useState<number>(38);
  const [fabricWidth, setFabricWidth] = useState<'140' | '150' | '110'>('150');
  const [fabricPattern, setFabricPattern] = useState<'plain' | 'plaid' | 'nap'>('plain');
  const [userHeight, setUserHeight] = useState<'standard' | 'tall' | 'petite'>('standard');

  const selectedPreset = FABRIC_PRESETS.find((p) => p.id === selectedPresetId) || FABRIC_PRESETS[0];

  const baseMeters = fabricWidth === '150'
    ? selectedPreset.baseLength150
    : fabricWidth === '140'
    ? selectedPreset.baseLength140
    : selectedPreset.baseLength140 * 1.35;

  const sizeFactor = 1 + (size - 38) * 0.035;
  const patternMultiplier = fabricPattern === 'plaid' ? 1.18 : fabricPattern === 'nap' ? 1.22 : 1.0;
  const heightMultiplier = userHeight === 'tall' ? 1.08 : userHeight === 'petite' ? 0.94 : 1.0;

  const finalMeters = (baseMeters * sizeFactor * patternMultiplier * heightMultiplier).toFixed(2);
  const estimatedYield = fabricPattern === 'plain' ? 88.5 : 79.2;

  return (
    <section id="calculadora" className="py-24 md:py-36 bg-[#FCFBF8] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header matching screenshot typography */}
        <div className="max-w-3xl mb-14">
          <div className="text-xl sm:text-2xl font-black tracking-widest text-[#B5AFA6] uppercase mb-4 select-none">
            Optimización Textil
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#161618] tracking-tight uppercase leading-[1.02] mb-6">
            Calculadora de Metraje
            <span className="block font-medium text-[#403C37]">
              Rendimiento y Planificación de Corte
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A544C] font-normal leading-relaxed">
            Una de las competencias nodales enseñadas en nuestros talleres es proyectar con rigor matemático el consumo de tejido para eliminar mermas costosas en mesa de corte.
          </p>
        </div>

        {/* 2-Column Grid: Form Card + Signature Dark Results Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Form Card (7 cols) - Box shadow, zero border */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 shadow-[0_15px_45px_rgba(22,22,24,0.06)]">
            <h3 className="font-sans text-2xl font-black uppercase text-[#161618] mb-6">
              Parámetros de la Prenda
            </h3>

            <div className="space-y-6">
              {/* Garment Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8A867E] font-bold mb-2">
                  Tipo de Prenda y Complejidad
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {FABRIC_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedPresetId(preset.id)}
                      className={`p-4 rounded-2xl text-left transition-all ${
                        selectedPresetId === preset.id
                          ? 'bg-[#161618] text-white shadow-md font-bold'
                          : 'bg-[#FAF8F5] text-[#554E46] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <div className="text-xs font-bold uppercase leading-snug">{preset.name}</div>
                      <div className={`text-[11px] mt-1 font-mono ${selectedPresetId === preset.id ? 'text-[#D9D1C5]' : 'text-[#8A8177]'}`}>
                        {preset.piecesCount} piezas · Nivel {preset.complexity}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Talla y Altura */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider text-[#8A867E] font-bold">
                      Talla Patrón: <span className="font-mono text-[#161618]">EU {size}</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F5] rounded-xl">
                    {[36, 38, 40, 42, 44, 46, 48].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg transition-colors ${
                          size === s
                            ? 'bg-[#161618] text-white shadow-sm'
                            : 'text-[#6E675F] hover:text-[#161618]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8A867E] font-bold mb-2">
                    Estatura de Referencia
                  </label>
                  <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F5] rounded-xl">
                    {[
                      { id: 'petite', label: '< 1.62 m' },
                      { id: 'standard', label: '1.63 – 1.74 m' },
                      { id: 'tall', label: '> 1.75 m' }
                    ].map((h) => (
                      <button
                        key={h.id}
                        onClick={() => setUserHeight(h.id as any)}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                          userHeight === h.id
                            ? 'bg-[#161618] text-white shadow-sm'
                            : 'text-[#6E675F] hover:text-[#161618]'
                        }`}
                      >
                        {h.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ancho del tejido */}
              <div className="pt-2">
                <label className="block text-xs uppercase tracking-wider text-[#8A867E] font-bold mb-2">
                  Ancho de Pieza en Rollo
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: '150', label: '150 cm', note: 'Lanas y sastrería' },
                    { id: '140', label: '140 cm', note: 'Algodones y linos' },
                    { id: '110', label: '110 cm', note: 'Sedas y Liberty' }
                  ].map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setFabricWidth(w.id as any)}
                      className={`p-3.5 rounded-xl text-left transition-all ${
                        fabricWidth === w.id
                          ? 'bg-[#161618] text-white shadow-md'
                          : 'bg-[#FAF8F5] text-[#554E46] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <div className="text-xs font-bold uppercase">{w.label}</div>
                      <div className={`text-[10px] mt-0.5 ${fabricWidth === w.id ? 'text-[#D9D1C5]' : 'text-[#8A8177]'}`}>
                        {w.note}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Case y motivos */}
              <div className="pt-2">
                <label className="block text-xs uppercase tracking-wider text-[#8A867E] font-bold mb-2">
                  Naturaleza y Case del Estampado
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'plain', label: 'Tejido Liso', note: 'Corte reversible' },
                    { id: 'plaid', label: 'Cuadros / Rayas', note: '+18% cuadre visual' },
                    { id: 'nap', label: 'Terciopelo / Pelo', note: '+22% dirección única' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setFabricPattern(p.id as any)}
                      className={`p-3.5 rounded-xl text-left transition-all ${
                        fabricPattern === p.id
                          ? 'bg-[#161618] text-white shadow-md'
                          : 'bg-[#FAF8F5] text-[#554E46] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <div className="text-xs font-bold uppercase">{p.label}</div>
                      <div className={`text-[10px] mt-0.5 ${fabricPattern === p.id ? 'text-[#D9D1C5]' : 'text-[#8A8177]'}`}>
                        {p.note}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary in Signature Dark Card matching screenshot (5 cols) */}
          <div className="lg:col-span-5 bg-[#161618] text-white rounded-3xl p-7 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.22)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#8A867E] pb-4 mb-6 border-b border-[#26262A] font-bold">
                <span>Cálculo de Tizado</span>
                <span className="text-white">TALLA {size} · {fabricWidth}CM</span>
              </div>

              {/* Big bold metric */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wider text-[#8A867E] font-bold block mb-1">
                  Metraje Total Estimado:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-5xl sm:text-6xl font-black text-white tracking-tight tabular-nums">
                    {finalMeters}
                  </span>
                  <span className="text-xl font-bold text-[#A8A49C] uppercase">metros</span>
                </div>
                <p className="mt-2 text-xs text-[#8A867E]">
                  Incluye margen de merma por encogimiento en vapor (+5%) y holguras de corte.
                </p>
              </div>

              {/* Checkbox list matching screenshot */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-white text-[#161618] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckSquare className="w-4 h-4 fill-[#161618] text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#8A867E] font-bold">Prenda Seleccionada</div>
                    <div className="text-sm font-bold text-white">{selectedPreset.name}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-white text-[#161618] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckSquare className="w-4 h-4 fill-[#161618] text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#8A867E] font-bold">Despiece Principal</div>
                    <div className="text-sm font-bold text-white">{selectedPreset.piecesCount} patrones de corte</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-white text-[#161618] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckSquare className="w-4 h-4 fill-[#161618] text-white" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#8A867E] font-bold">Eficiencia Textil</div>
                    <div className="text-sm font-bold text-white font-mono">~{estimatedYield}% superficie útil</div>
                  </div>
                </div>
              </div>

              {/* Technical Advice Box */}
              <div className="p-4 bg-[#202024] rounded-2xl text-xs text-[#B5B0A6] leading-relaxed mb-6">
                <div className="font-bold text-white mb-1 uppercase tracking-wider flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-white" />
                  <span>Protocolo de Corte en Mesa:</span>
                </div>
                {fabricPattern === 'nap' ? (
                  <p>
                    ATENCIÓN CRÍTICA: Cortar siempre con el pelo orientado en sentido descendente. Cualquier pieza invertida alterará la refracción lumínica.
                  </p>
                ) : fabricPattern === 'plaid' ? (
                  <p>
                    Alinear piquetes de sisa y centro delantero sobre la misma línea de repetición del cuadro antes de operar la cuchilla.
                  </p>
                ) : (
                  <p>
                    Disposición tradicional al lomo encarado para obtener pares simétricos de un solo corte continuo.
                  </p>
                )}
              </div>
            </div>

            {/* Technical Button matching screenshot */}
            <div className="pt-2">
              <button
                onClick={() => alert(`Exportando reporte de metraje para ${selectedPreset.name} (Talla ${size})...`)}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 text-xs font-black tracking-widest uppercase text-white bg-transparent border-2 border-white rounded-xl hover:bg-white hover:text-[#161618] transition-all group"
              >
                <span>Exportar Reporte de Tizado</span>
                <div className="w-5 h-5 border border-current rounded flex items-center justify-center text-[10px] group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
