export interface Course {
  id: string;
  title: string;
  category: 'base' | 'sastreria' | 'confeccion' | 'digital' | 'drapeado';
  categoryLabel: string;
  duration: string;
  modality: 'Presencial' | 'Online en directo' | 'Híbrido';
  level: 'Inicial' | 'Intermedio' | 'Avanzado' | 'Todos los niveles';
  description: string;
  highlights: string[];
  blueprintTitle: string;
  blueprintDetail: string;
  image: string;
  schedule: string;
  price: string;
  modules: {
    week: string;
    title: string;
    description: string;
  }[];
  materialsProvided: string[];
}

export interface BlueprintPiece {
  id: string;
  name: string;
  type: string;
  piecesCount: number;
  grainline: 'Al hilo (urdimbre)' | 'Al bies (45°)' | 'A contrahilo (trama)' | 'Al lomo (simétrico)';
  seamAllowance: string;
  notes: string;
  coordinates: { x: number; y: number; width: number; height: number };
}
