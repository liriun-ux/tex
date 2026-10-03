import React, { useState } from 'react';
import { BLUEPRINT_PIECES } from '../data/courses';
import { BlueprintPiece } from '../types';
import { CheckSquare, ArrowUpRight, Compass, Scissors, Layers } from 'lucide-react';
import garmentPlanImg from '../assets/images/garment_construction_plan_1791055339661.jpg';

export const BlueprintViewer: React.FC = () => {
  const [selectedPiece, setSelectedPiece] = useState<BlueprintPiece>(BLUEPRINT_PIECES[0]);
  const [viewMode, setViewMode] = useState<'schematic' | 'blueprint'>('schematic');
  const [showGrainlines, setShowGrainlines] = useState(true);
  const [showSeamAllowance, setShowSeamAllowance] = useState(true);
  const [showNotches, setShowNotches] = useState(true);
  const [showDimensions, setShowDimensions] = useState(true);

  return (
    <section id="planos" className="py-24 md:py-36 bg-[#FCFBF8] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header matching screenshot typography */}
        <div className="max-w-3xl mb-14">
          <div className="text-xl sm:text-2xl font-black tracking-widest text-[#B5AFA6] uppercase mb-4 select-none">
            Ingeniería de Trazado
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#161618] tracking-tight uppercase leading-[1.02] mb-6">
            Planos de Corte y Tizado
            <span className="block font-medium text-[#403C37]">
              Despiece Anatómico de Alta Precisión
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A544C] font-normal leading-relaxed">
            El plano de corte o tizado es el esquema de ingeniería textil sobre el que se fundamenta toda prenda impecable. Cada línea de aplomo, piquete de ensamble y margen calibrado garantiza estabilidad dimensional y rendimiento de materia prima.
          </p>
        </div>

        {/* Toolbar in dark industrial style */}
        <div className="bg-[#161618] text-white rounded-2xl p-5 mb-10 shadow-[0_15px_40px_rgba(0,0,0,0.18)] flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[#8A867E] mr-1 hidden sm:inline font-bold">Modo:</span>
            <button
              onClick={() => setViewMode('schematic')}
              className={`px-4 py-2 text-xs font-black tracking-wider uppercase rounded-xl transition-all ${
                viewMode === 'schematic'
                  ? 'bg-white text-[#161618] shadow-md'
                  : 'bg-[#26262A] text-[#B5B0A6] hover:bg-[#323238]'
              }`}
            >
              Trazado Vectorial CAD
            </button>
            <button
              onClick={() => setViewMode('blueprint')}
              className={`px-4 py-2 text-xs font-black tracking-wider uppercase rounded-xl transition-all ${
                viewMode === 'blueprint'
                  ? 'bg-white text-[#161618] shadow-md'
                  : 'bg-[#26262A] text-[#B5B0A6] hover:bg-[#323238]'
              }`}
            >
              Mesa de Tizado Real
            </button>
          </div>

          {/* Toggle layers with square check icons */}
          {viewMode === 'schematic' && (
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <button
                onClick={() => setShowGrainlines(!showGrainlines)}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                  showGrainlines ? 'bg-[#26262A] text-white font-bold' : 'text-[#8A867E] hover:bg-[#202024]'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center ${showGrainlines ? 'bg-white text-[#161618]' : 'border border-[#555]'}`}>
                  {showGrainlines && <CheckSquare className="w-3.5 h-3.5 fill-[#161618] text-white" />}
                </div>
                <span>Hilo de Urdimbre</span>
              </button>

              <button
                onClick={() => setShowSeamAllowance(!showSeamAllowance)}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                  showSeamAllowance ? 'bg-[#26262A] text-white font-bold' : 'text-[#8A867E] hover:bg-[#202024]'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center ${showSeamAllowance ? 'bg-white text-[#161618]' : 'border border-[#555]'}`}>
                  {showSeamAllowance && <CheckSquare className="w-3.5 h-3.5 fill-[#161618] text-white" />}
                </div>
                <span>Márgenes Costura</span>
              </button>

              <button
                onClick={() => setShowNotches(!showNotches)}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                  showNotches ? 'bg-[#26262A] text-white font-bold' : 'text-[#8A867E] hover:bg-[#202024]'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center ${showNotches ? 'bg-white text-[#161618]' : 'border border-[#555]'}`}>
                  {showNotches && <CheckSquare className="w-3.5 h-3.5 fill-[#161618] text-white" />}
                </div>
                <span>Piquetes / Aplomos</span>
              </button>

              <button
                onClick={() => setShowDimensions(!showDimensions)}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
                  showDimensions ? 'bg-[#26262A] text-white font-bold' : 'text-[#8A867E] hover:bg-[#202024]'
                }`}
              >
                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center ${showDimensions ? 'bg-white text-[#161618]' : 'border border-[#555]'}`}>
                  {showDimensions && <CheckSquare className="w-3.5 h-3.5 fill-[#161618] text-white" />}
                </div>
                <span>Cotas Técnicas</span>
              </button>
            </div>
          )}
        </div>

        {/* 2-Column Split: Vector CAD Board + Dark Technical Specs Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Visualizer (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(28,25,23,0.06)] overflow-hidden">
            {viewMode === 'schematic' ? (
              <div className="relative">
                <div className="flex items-center justify-between pb-4 mb-4 text-xs font-mono font-bold text-[#6B655D] border-b border-[#F0ECE4]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#161618]">ANCHO TEJIDO: 1500 MM</span>
                    <span aria-hidden="true">·</span>
                    <span>TOLERANCIA ± 0.5 MM</span>
                  </div>
                  <span>CAD VER. 4.2 · ESCALA 1:10</span>
                </div>

                {/* SVG Blueprint Board */}
                <div className="relative w-full aspect-[16/10] bg-[#FAF8F5] rounded-2xl overflow-hidden p-4 select-none bg-blueprint-grid">
                  <svg
                    viewBox="0 0 1000 520"
                    className="w-full h-full"
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    <defs>
                      <marker
                        id="arrow-grain"
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 2 L 8 5 L 0 8 z" fill="#161618" />
                      </marker>
                      <marker
                        id="arrow-grain-rev"
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto"
                      >
                        <path d="M 10 2 L 2 5 L 10 8 z" fill="#161618" />
                      </marker>
                    </defs>

                    {/* Selvedge lines */}
                    <rect
                      x="10"
                      y="10"
                      width="980"
                      height="500"
                      fill="none"
                      stroke="#161618"
                      strokeDasharray="4 4"
                      strokeWidth="1.2"
                    />
                    <text x="20" y="30" fill="#6B655D" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      ORILLO DEL TEJIDO (SELVEDGE) — ALINEACIÓN DE URDIMBRE 0.0°
                    </text>
                    <text x="20" y="500" fill="#6B655D" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      DOBLEZ AL LOMO (FOLD LINE ENCARADO)
                    </text>

                    {/* PIECE 1: DELANTERO */}
                    <g
                      onClick={() => setSelectedPiece(BLUEPRINT_PIECES[0])}
                      className="cursor-pointer transition-all duration-200"
                    >
                      {showSeamAllowance && (
                        <path
                          d="M 40 50 L 160 50 L 175 140 L 255 190 L 235 340 L 245 460 L 50 460 Z"
                          fill="none"
                          stroke="#3B6E8C"
                          strokeWidth="1.2"
                          strokeDasharray="3 3"
                        />
                      )}
                      <path
                        d="M 50 60 L 150 60 L 165 145 L 240 195 L 225 335 L 235 450 L 60 450 Z"
                        fill={selectedPiece.id === 'delantero' ? '#EAE5DC' : '#FFFFFF'}
                        stroke="#161618"
                        strokeWidth={selectedPiece.id === 'delantero' ? '3' : '1.8'}
                      />
                      <path d="M 235 240 L 160 270 L 230 300" fill="none" stroke="#161618" strokeWidth="1.5" />
                      <polygon points="120,310 125,370 130,310" fill="none" stroke="#161618" strokeWidth="1.5" />

                      {showGrainlines && (
                        <g>
                          <line
                            x1="140"
                            y1="110"
                            x2="140"
                            y2="410"
                            stroke="#161618"
                            strokeWidth="1.8"
                            markerEnd="url(#arrow-grain)"
                            markerStart="url(#arrow-grain-rev)"
                          />
                          <text x="145" y="260" fill="#161618" fontSize="9" fontFamily="monospace" fontWeight="bold">
                            HILO (x2)
                          </text>
                        </g>
                      )}

                      {showNotches && (
                        <g stroke="#C25B4E" strokeWidth="2">
                          <line x1="160" y1="140" x2="168" y2="140" />
                          <line x1="222" y1="330" x2="228" y2="330" />
                        </g>
                      )}

                      {showDimensions && (
                        <text x="65" y="440" fill="#161618" fontSize="9" fontFamily="monospace" fontWeight="bold">
                          DELANTERO · T38
                        </text>
                      )}
                    </g>

                    {/* PIECE 2: ESPALDA */}
                    <g
                      onClick={() => setSelectedPiece(BLUEPRINT_PIECES[1])}
                      className="cursor-pointer transition-all duration-200"
                    >
                      {showSeamAllowance && (
                        <path
                          d="M 285 50 L 400 50 L 415 130 L 475 190 L 460 340 L 470 460 L 285 460 Z"
                          fill="none"
                          stroke="#3B6E8C"
                          strokeWidth="1.2"
                          strokeDasharray="3 3"
                        />
                      )}
                      <path
                        d="M 295 60 L 390 60 L 405 135 L 460 195 L 450 335 L 460 450 L 295 450 Z"
                        fill={selectedPiece.id === 'espalda' ? '#EAE5DC' : '#FFFFFF'}
                        stroke="#161618"
                        strokeWidth={selectedPiece.id === 'espalda' ? '3' : '1.8'}
                      />
                      <path d="M 345 60 L 350 100 L 355 60" fill="none" stroke="#161618" strokeWidth="1.5" />
                      <polygon points="360,260 365,360 370,260" fill="none" stroke="#161618" strokeWidth="1.5" />

                      {showGrainlines && (
                        <g>
                          <line
                            x1="365"
                            y1="110"
                            x2="365"
                            y2="410"
                            stroke="#161618"
                            strokeWidth="1.8"
                            markerEnd="url(#arrow-grain)"
                            markerStart="url(#arrow-grain-rev)"
                          />
                          <text x="370" y="220" fill="#161618" fontSize="9" fontFamily="monospace" fontWeight="bold">
                            HILO (x2)
                          </text>
                        </g>
                      )}

                      {showNotches && (
                        <g stroke="#C25B4E" strokeWidth="2">
                          <line x1="400" y1="130" x2="408" y2="130" />
                          <line x1="400" y1="134" x2="408" y2="134" />
                        </g>
                      )}

                      {showDimensions && (
                        <text x="305" y="440" fill="#161618" fontSize="9" fontFamily="monospace" fontWeight="bold">
                          ESPALDA · T38
                        </text>
                      )}
                    </g>

                    {/* PIECE 3: MANGA SUPERIOR */}
                    <g
                      onClick={() => setSelectedPiece(BLUEPRINT_PIECES[2])}
                      className="cursor-pointer transition-all duration-200"
                    >
                      <path
                        d="M 510 80 Q 570 45 630 80 L 620 420 L 525 420 Z"
                        fill={selectedPiece.id === 'manga-hoja-alta' ? '#EAE5DC' : '#FFFFFF'}
                        stroke="#161618"
                        strokeWidth={selectedPiece.id === 'manga-hoja-alta' ? '3' : '1.8'}
                      />
                      {showGrainlines && (
                        <line
                          x1="570"
                          y1="85"
                          x2="570"
                          y2="395"
                          stroke="#161618"
                          strokeWidth="1.8"
                          markerEnd="url(#arrow-grain)"
                          markerStart="url(#arrow-grain-rev)"
                        />
                      )}
                      {showDimensions && (
                        <text x="535" y="410" fill="#161618" fontSize="9" fontFamily="monospace" fontWeight="bold">
                          MANGA SUP.
                        </text>
                      )}
                    </g>

                    {/* PIECE 4: MANGA INFERIOR */}
                    <g
                      onClick={() => setSelectedPiece(BLUEPRINT_PIECES[3])}
                      className="cursor-pointer transition-all duration-200"
                    >
                      <path
                        d="M 680 120 Q 730 100 780 120 L 760 420 L 695 420 Z"
                        fill={selectedPiece.id === 'manga-hoja-baja' ? '#EAE5DC' : '#FFFFFF'}
                        stroke="#161618"
                        strokeWidth={selectedPiece.id === 'manga-hoja-baja' ? '3' : '1.8'}
                      />
                      {showGrainlines && (
                        <line
                          x1="730"
                          y1="130"
                          x2="730"
                          y2="390"
                          stroke="#161618"
                          strokeWidth="1.8"
                          markerEnd="url(#arrow-grain)"
                          markerStart="url(#arrow-grain-rev)"
                        />
                      )}
                      {showDimensions && (
                        <text x="705" y="410" fill="#161618" fontSize="9" fontFamily="monospace" fontWeight="bold">
                          MANGA INF.
                        </text>
                      )}
                    </g>

                    {/* PIECE 5: CUELLO */}
                    <g
                      onClick={() => setSelectedPiece(BLUEPRINT_PIECES[4])}
                      className="cursor-pointer transition-all duration-200"
                    >
                      <path
                        d="M 825 60 L 950 60 L 935 150 L 840 150 Z"
                        fill={selectedPiece.id === 'cuello-tirilla' ? '#EAE5DC' : '#FFFFFF'}
                        stroke="#161618"
                        strokeWidth={selectedPiece.id === 'cuello-tirilla' ? '3' : '1.8'}
                      />
                      <text x="850" y="110" fill="#161618" fontSize="9" fontFamily="monospace" fontWeight="bold">
                        CUELLO AL LOMO
                      </text>
                    </g>

                    {/* PIECE 6: VISTAS */}
                    <g
                      onClick={() => setSelectedPiece(BLUEPRINT_PIECES[5])}
                      className="cursor-pointer transition-all duration-200"
                    >
                      <path
                        d="M 830 200 L 945 200 L 945 310 L 830 310 Z"
                        fill={selectedPiece.id === 'vistas-interiores' ? '#EAE5DC' : '#FFFFFF'}
                        stroke="#161618"
                        strokeWidth={selectedPiece.id === 'vistas-interiores' ? '3' : '1.8'}
                      />
                      <text x="845" y="260" fill="#161618" fontSize="9" fontFamily="monospace" fontWeight="bold">
                        VISTAS & FORNITURA
                      </text>
                    </g>
                  </svg>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#6B655D]">
                  <span>INTERACTIVO: SELECCIONA CUALQUIER PIEZA PARA REVISAR SU TOLERANCIA</span>
                  <span className="font-bold text-[#161618]">EFICIENCIA TEXTIL: 91.4%</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#0E0E10] shadow-xl">
                  <img
                    src={garmentPlanImg}
                    alt="Plano de construcción y despiece de corte sastre"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-xs font-mono uppercase tracking-widest text-[#B5B0A6] mb-1 font-bold">
                        Archivo de Taller · Tizado Técnico Maestro
                      </div>
                      <p className="text-lg font-bold uppercase tracking-tight">
                        Lana sastre peinada Super 120s con desahogos calibrados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Dark Signature Card matching the screenshot */}
          <div className="lg:col-span-4 bg-[#161618] text-white rounded-3xl p-7 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.22)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#8A867E] pb-4 mb-5 border-b border-[#26262A] font-mono font-bold">
              <span>Ficha Técnica</span>
              <span className="text-white">{selectedPiece.type}</span>
            </div>

            <h3 className="font-sans text-2xl font-black uppercase text-white leading-tight mb-5">
              {selectedPiece.name}
            </h3>

            {/* Checkbox-styled specs */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-white text-[#161618] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckSquare className="w-4 h-4 fill-[#161618] text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8A867E] font-bold">Corte Requerido</div>
                  <div className="text-sm font-bold text-white">{selectedPiece.piecesCount} piezas (par simétrico)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-white text-[#161618] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckSquare className="w-4 h-4 fill-[#161618] text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8A867E] font-bold">Alineación de Hilo</div>
                  <div className="text-sm font-bold text-white">{selectedPiece.grainline}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-white text-[#161618] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckSquare className="w-4 h-4 fill-[#161618] text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8A867E] font-bold">Márgenes de Costura</div>
                  <div className="text-xs font-mono text-[#D6D2CA] mt-0.5">{selectedPiece.seamAllowance}</div>
                </div>
              </div>

              <div className="p-4 bg-[#202024] rounded-2xl text-xs text-[#B5B0A6] leading-relaxed mt-4">
                <div className="text-[11px] uppercase tracking-wider text-white font-bold mb-1">Protocolo de Armado:</div>
                <p>{selectedPiece.notes}</p>
              </div>
            </div>

            {/* Piece buttons list */}
            <div className="mt-6 pt-5 border-t border-[#26262A]">
              <div className="text-xs uppercase tracking-wider text-[#8A867E] font-bold mb-3">
                Despiece del Plano:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {BLUEPRINT_PIECES.map((piece) => (
                  <button
                    key={piece.id}
                    onClick={() => setSelectedPiece(piece)}
                    className={`p-2.5 rounded-xl text-left text-xs font-bold uppercase transition-all ${
                      selectedPiece.id === piece.id
                        ? 'bg-white text-[#161618] shadow-sm'
                        : 'bg-[#26262A] text-[#B5B0A6] hover:bg-[#323238]'
                    }`}
                  >
                    <div className="truncate">{piece.name.split(' ')[0]} {piece.name.split(' ')[1] || ''}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Button matching screenshot */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => alert(`Generando especificación técnica CAD para ${selectedPiece.name}...`)}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 text-xs font-black tracking-widest uppercase text-white bg-transparent border-2 border-white rounded-xl hover:bg-white hover:text-[#161618] transition-all group"
              >
                <span>Descargar DXF / CAD</span>
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
