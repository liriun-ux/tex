import { Course, BlueprintPiece } from '../types';
import garmentPlanImg from '../assets/images/garment_construction_plan_1791055339661.jpg';
import cuttingBlueprintImg from '../assets/images/cutting_pattern_blueprint_1791055317140.jpg';
import patternLayoutImg from '../assets/images/pattern_layout_markers_1791055329302.jpg';
import atelierTableImg from '../assets/images/atelier_cutting_table_1791055349690.jpg';

export const COURSES: Course[] = [
  {
    id: 'patronaje-industrial-base',
    title: 'Patronaje Industrial y Trazado Anatómico',
    category: 'base',
    categoryLabel: 'Patronaje Base',
    duration: '80 horas lectivas',
    modality: 'Presencial',
    level: 'Inicial',
    description: 'Aprende los fundamentos del trazado técnico de patrones sobre papel kraft y mesa de tizado. Dominio del cuerpo base, faldas, pantalones y traslados de pinzas con rigor milimétrico.',
    highlights: [
      'Toma precisa de 24 puntos antropométricos',
      'Construcción del cuerpo base y manga anatómica',
      'Despiece técnico y márgenes de costura normalizados',
      'Optimización de plano de corte con mínimo desperdicio textil'
    ],
    blueprintTitle: 'Plano de Despiece: Cuerpo Base y Pinza Camaleón',
    blueprintDetail: 'Escala 1:1 con líneas de aplomo, piquetes de montaje y holguras de confort (4cm pecho, 2cm cintura).',
    image: garmentPlanImg,
    schedule: 'Martes y Jueves, 10:00 – 13:30',
    price: '€680',
    modules: [
      {
        week: 'Bloque 01',
        title: 'Antropometría y Herramientas del Patronista',
        description: 'Manejo de reglas curvas francesas, sables, ruletas de tizado y tablas de medidas estandarizadas.'
      },
      {
        week: 'Bloque 02',
        title: 'Bases de Falda y Pantalón Clásico',
        description: 'Trazado de tiro, caja, curvas de cadera y cálculo de pinzas de ajuste posterior.'
      },
      {
        week: 'Bloque 03',
        title: 'Transformaciones y Pivote de Pinzas',
        description: 'Técnica de corte y pliegue, cortes princesa, canesú y cuellos camiseros con tirilla.'
      },
      {
        week: 'Bloque 04',
        title: 'Tizado y Plano de Corte Definitivo',
        description: 'Disposición sobre tejido de prueba (retor de algodón) para verificación de caída y aplomo.'
      }
    ],
    materialsProvided: [
      'Juego de reglas de patronaje (curva francesa y escuadra sastre)',
      'Rollo de papel Kraft 80g para patronaje',
      'Ruleta de calcar dentada y cinta métrica textil',
      '5 metros de tejido retor de algodón crudo para pruebas'
    ]
  },
  {
    id: 'sastreria-clasica-chaqueta',
    title: 'Sastrería Clásica y Chaqueta Estructurada',
    category: 'sastreria',
    categoryLabel: 'Sastrería Tradicional',
    duration: '120 horas lectivas',
    modality: 'Presencial',
    level: 'Avanzado',
    description: 'El cenit de la confección artesanal. Construcción de chaqueta sastre con plastrón de entretela de crin de caballo picado a mano, solapas enrolladas y hombreras modeladas con vapor.',
    highlights: [
      'Plano de corte con case de rayas o cuadros ingleses',
      'Picado a mano de plastrones y solapas',
      'Mangas sastre de dos hojas con corona embebida',
      'Ojales artesanales en punto milanés'
    ],
    blueprintTitle: 'Plano de Corte: Chaqueta Masculina Entallada',
    blueprintDetail: 'Desglose de delantero, costadillo, espada, cuello quebrado y manga de sastre en tejido de lana 100% de 1.50m de ancho.',
    image: cuttingBlueprintImg,
    schedule: 'Lunes y Miércoles, 16:30 – 20:30',
    price: '€1.150',
    modules: [
      {
        week: 'Bloque 01',
        title: 'Arquitectura Interior de la Chaqueta',
        description: 'Corte de plastrones en crin de caballo, entretelas de lana y forro de acetato al bies.'
      },
      {
        week: 'Bloque 02',
        title: 'Tizado y Corte en Tejido Principal',
        description: 'Técnicas de sujeción para que el grano de la lana no sufra deformación durante el corte.'
      },
      {
        week: 'Bloque 03',
        title: 'Modelado con Plancha de Hierro y Vapor',
        description: 'Dando forma curva a las piezas planas antes de la primera costura de unión.'
      },
      {
        week: 'Bloque 04',
        title: 'Montaje de Cuello, Solapa y Mangas',
        description: 'Embebido exacto de la copa de la manga y acabado invisible de vivos interiores.'
      }
    ],
    materialsProvided: [
      'Entretela de crin vegetal y crin de caballo tejida',
      'Hilo de torzal de seda Gutermann para ojales',
      'Cojín de sastre y planchador de mangas',
      'Fieltro de solapa de primera calidad'
    ]
  },
  {
    id: 'corte-tejidos-delicados',
    title: 'Corte y Tizado de Tejidos Fluidos y Delicados',
    category: 'confeccion',
    categoryLabel: 'Confección & Acabados',
    duration: '45 horas lectivas',
    modality: 'Híbrido',
    level: 'Intermedio',
    description: 'Domina los materiales más exigentes: gasas de seda, crepés, satén al bies, terciopelos de seda y voiles. Métodos de inmovilización de mesa y corte sin deslizamiento.',
    highlights: [
      'Fijación en mesa mediante papel seda y pesas de corte',
      'Patronaje y corte de prendas al sesgo (bies a 45°)',
      'Costuras francesas milimétricas y dobladillo pañuelo',
      'Control de tensión en máquinas de arrastre fino'
    ],
    blueprintTitle: 'Plano de Corte: Vestido Lencero al Bies',
    blueprintDetail: 'Disposición geométrica a 45 grados exactos respecto a la orilla del tejido para drapeado fluido natural.',
    image: patternLayoutImg,
    schedule: 'Viernes, 15:00 – 19:30',
    price: '€490',
    modules: [
      {
        week: 'Bloque 01',
        title: 'Comportamiento Físico del Hilo de Seda',
        description: 'Diferencia entre trama, urdimbre y ángulo de estiramiento al sesgo.'
      },
      {
        week: 'Bloque 02',
        title: 'Protocolos de Corte con Cuchilla Rotativa',
        description: 'Evitar el tironeo de fibras y marcado con tiza sastre en polvo de talco.'
      },
      {
        week: 'Bloque 03',
        title: 'Costuras Cerradas e Invisibles',
        description: 'Costura inglesa, costura francesa de 3mm y remate de esquinas pulidas.'
      }
    ],
    materialsProvided: [
      'Base de corte autocicatrizante y cúter rotatorio de 45mm',
      'Juego de pesas de corte forradas en cuero suave',
      'Agujas Microtex para sedas finas',
      'Muestrario de 8 tejidos nobles para prácticas'
    ]
  },
  {
    id: 'drapeado-moulage-atelier',
    title: 'Drapeado sobre Maniquí y Técnica Moulage',
    category: 'drapeado',
    categoryLabel: 'Drapeado & Alta Costura',
    duration: '65 horas lectivas',
    modality: 'Presencial',
    level: 'Intermedio',
    description: 'Creación tridimensional directa sin patrón plano preliminar. Esculpe pliegues, volúmenes escultóricos y escotes orgánicos sobre el busto para después trasladarlos a plano de papel.',
    highlights: [
      'Preparación de cintas de referencia sobre el maniquí',
      'Modelado de cuerpos drapeados en retor fino',
      'Extracción de piquetes y desglosado al plano bidimensional',
      'Graduación y comprobación de líneas de contorno'
    ],
    blueprintTitle: 'Conversión Tridimensional: Del Busto al Plano',
    blueprintDetail: 'Proceso de aplanamiento de piezas volumétricas con control de holguras y márgenes de costura.',
    image: atelierTableImg,
    schedule: 'Sábados intensivos, 09:30 – 14:30',
    price: '€620',
    modules: [
      {
        week: 'Bloque 01',
        title: 'Líneas Guía y Tensión de Maniquí',
        description: 'Colocación de bies de contraste en centro delantero, sisas y cintura.'
      },
      {
        week: 'Bloque 02',
        title: 'Drapeado Radial y Plisado de Atelier',
        description: 'Manipulación del tejido al hilo y al bies para conseguir caídas simétricas.'
      },
      {
        week: 'Bloque 03',
        title: 'Aplanado Técnico y Trazado Final',
        description: 'Paso de la tela al papel de patronaje manteniendo exactitud de aplomos.'
      }
    ],
    materialsProvided: [
      'Maniquí profesional de atelier durante las clases',
      'Caja de alfileres de cabeza de flor ultrafinos',
      'Cintas de hilván de colores contrastantes',
      '10 metros de retor de algodón para modelado'
    ]
  },
  {
    id: 'patronaje-digital-escalado',
    title: 'Patronaje Digital y Escalado Industrial',
    category: 'digital',
    categoryLabel: 'Patronaje Digital',
    duration: '50 horas lectivas',
    modality: 'Online en directo',
    level: 'Intermedio',
    description: 'Digitalización de patrones de mesa, edición vectorial CAD para moda, creación de nidos de escalado por tallas (XS a 3XL) y optimización algorítmica de tizadas industriales.',
    highlights: [
      'Digitalización precisa por fotografía y tabla digitalizadora',
      'Reglas de escalado proporcional de puntos nodales',
      'Cálculo de rendimiento de tejido porcentual automático',
      'Exportación en formato DXF-AAMA para corte por láser'
    ],
    blueprintTitle: 'Nido de Escalado Multitalla y Marcador CAD',
    blueprintDetail: 'Trazado comparativo de 6 tallas con gradación en puntos de sisa, hombro y largo de prenda.',
    image: garmentPlanImg,
    schedule: 'Lunes y Miércoles, 19:00 – 21:30',
    price: '€550',
    modules: [
      {
        week: 'Bloque 01',
        title: 'Entorno Vectorial de Patronaje',
        description: 'Herramientas de dibujo de curvas Bézier y tablas de medidas asociadas.'
      },
      {
        week: 'Bloque 02',
        title: 'Escalado Proporcional y Reglas Delta',
        description: 'Gradación en ejes X e Y para adaptar prendas a proporciones morfológicas variadas.'
      },
      {
        week: 'Bloque 03',
        title: 'Marcadores de Corte y Tizadas Automatizadas',
        description: 'Algoritmos de empaquetado de piezas textiles para reducir merma por debajo del 8%.'
      }
    ],
    materialsProvided: [
      'Licencia educacional del software CAD textil',
      'Librería de 30 patrones base editables en formato vectorial',
      'Plantillas de escalado según norma europea EN 13402'
    ]
  },
  {
    id: 'confeccion-acabados-atelier',
    title: 'Confección Integral y Acabados de Atelier',
    category: 'confeccion',
    categoryLabel: 'Confección & Acabados',
    duration: '60 horas lectivas',
    modality: 'Presencial',
    level: 'Todos los niveles',
    description: 'Transforma planos de corte en prendas impecables por dentro y por fuera. Montaje de cremalleras invisibles, forrados limpios sin costuras vistas, dobladillos ciegos y remates a mano.',
    highlights: [
      'Uso profesional de máquinas planas industriales y remalladoras',
      'Puntadas invisibles de sujeción manual (punto de cruz, escapulario)',
      'Técnicas de encintado al bies para vistas limpias',
      'Control de planchado intermedio en cada fase'
    ],
    blueprintTitle: 'Plano de Montaje: Secuencia de Armado',
    blueprintDetail: 'Hoja de ruta paso a paso para el ensamble estructural sin tensiones ni desajustes.',
    image: patternLayoutImg,
    schedule: 'Martes y Jueves, 17:00 – 20:30',
    price: '€590',
    modules: [
      {
        week: 'Bloque 01',
        title: 'Puesta a Punto de Maquinaria Textil',
        description: 'Tensión de hilos, enhebrado de remalladora de 4 hilos y elección de prensatelas especiales.'
      },
      {
        week: 'Bloque 02',
        title: 'Ensamble Estructural de Cuellos y Bolsillos',
        description: 'Bolsillos de ojal sastre, bolsillos franceses y colocación de cuello con pie.'
      },
      {
        week: 'Bloque 03',
        title: 'Forrado Completo y Remates Invisibles',
        description: 'Técnica de embolsado de prendas y planchado final de presentación.'
      }
    ],
    materialsProvided: [
      'Puesto individual con máquina de coser plana industrial Juki',
      'Kit de prensatelas profesionales (cremallera invisible, dobladillador, teflón)',
      'Muestrario de cremalleras YKK y botones de asta natural'
    ]
  }
];

export const BLUEPRINT_PIECES: BlueprintPiece[] = [
  {
    id: 'delantero',
    name: 'Delantero con Pinza de Pecho y Entalle',
    type: 'Pieza Principal',
    piecesCount: 2,
    grainline: 'Al hilo (urdimbre)',
    seamAllowance: '1.5 cm en costados y hombros; 1.0 cm en escote y sisa; 4.0 cm en bajo',
    notes: 'Alinear perfectamente la flecha de hilo con el orillo del tejido. Mantener la pinza orientada hacia el punto álgido del busto con holgura de 2cm.',
    coordinates: { x: 30, y: 40, width: 220, height: 420 }
  },
  {
    id: 'espalda',
    name: 'Espalda con Entalle Lumbar',
    type: 'Pieza Principal',
    piecesCount: 2,
    grainline: 'Al hilo (urdimbre)',
    seamAllowance: '1.5 cm en costados y hombros; 1.0 cm en escote y sisa; 4.0 cm en bajo',
    notes: 'Curva lumbar pronunciada para adaptación ergonómica a la columna. Piquete en altura de sisa posterior para encarar con manga.',
    coordinates: { x: 270, y: 40, width: 200, height: 420 }
  },
  {
    id: 'manga-hoja-alta',
    name: 'Manga Sastre (Hoja Superior)',
    type: 'Manga de Dos Piezas',
    piecesCount: 2,
    grainline: 'Al hilo (urdimbre)',
    seamAllowance: '1.5 cm en costura interna; 1.0 cm en copa con hilván flojo para embeber',
    notes: 'Copa calculada con 2.5cm de embebido distribuido en los cuadrantes superiores. Línea de aplomo centrada en la costura de hombro.',
    coordinates: { x: 490, y: 50, width: 170, height: 380 }
  },
  {
    id: 'manga-hoja-baja',
    name: 'Manga Sastre (Hoja Inferior)',
    type: 'Manga de Dos Piezas',
    piecesCount: 2,
    grainline: 'Al hilo (urdimbre)',
    seamAllowance: '1.5 cm en costuras laterales; 1.0 cm en copa inferior',
    notes: 'Proporciona la ergonomía natural del brazo en reposo ligeramente adelantado.',
    coordinates: { x: 680, y: 60, width: 130, height: 350 }
  },
  {
    id: 'cuello-tirilla',
    name: 'Cuello Solapa con Tirilla Anatómica',
    type: 'Complemento Estructural',
    piecesCount: 2,
    grainline: 'Al lomo (simétrico)',
    seamAllowance: '1.0 cm perimetral',
    notes: 'Corte sobre tejido doblado al lomo. Requiere entretela de sastrería al bies para evitar rigidez antiestética.',
    coordinates: { x: 830, y: 50, width: 130, height: 180 }
  },
  {
    id: 'vistas-interiores',
    name: 'Vistas Interiores y Bolsillo de Vivo',
    type: 'Vistas y Fornitura',
    piecesCount: 4,
    grainline: 'Al hilo (urdimbre)',
    seamAllowance: '1.0 cm de ensamble con forro de seda',
    notes: 'Asegura la solidez del canto frontal y el cierre de botones sin arrugas.',
    coordinates: { x: 830, y: 250, width: 130, height: 190 }
  }
];

export interface FabricPreset {
  id: string;
  name: string;
  baseLength140: number; // in meters for size 38
  baseLength150: number;
  complexity: 'Simple' | 'Media' | 'Alta';
  recommendedFabric: string;
  piecesCount: number;
  description: string;
}

export const FABRIC_PRESETS: FabricPreset[] = [
  {
    id: 'chaqueta-sastre',
    name: 'Chaqueta / Blazer Sastre Estructurado',
    baseLength140: 2.10,
    baseLength150: 1.85,
    complexity: 'Alta',
    recommendedFabric: 'Lana fría 100%, franela, sarga o tweed sastre',
    piecesCount: 14,
    description: 'Incluye delantero, costadillo, espalda, mangas de 2 hojas, cuello, tirilla y bolsillos de vivo.'
  },
  {
    id: 'pantalon-pinzado',
    name: 'Pantalón Clásico con Pinzas y Bolsillos',
    baseLength140: 1.60,
    baseLength150: 1.45,
    complexity: 'Media',
    recommendedFabric: 'Lino rústico, crepé de lana, gabardina de algodón',
    piecesCount: 8,
    description: 'Delanteros, traseros, pretina armada, vistas de bolsillo y pasadores.'
  },
  {
    id: 'vestido-camisero',
    name: 'Vestido Camisero Midi con Cinturón',
    baseLength140: 2.60,
    baseLength150: 2.30,
    complexity: 'Media',
    recommendedFabric: 'Popelín de algodón egipcio, tencel, lino lavado',
    piecesCount: 11,
    description: 'Cuerpo camisero, falda evasé con vuelo, cuello con pie y mangas largas con puño.'
  },
  {
    id: 'abrigo-overcoat',
    name: 'Abrigo Sastre de Invierno Overcoat',
    baseLength140: 3.20,
    baseLength150: 2.85,
    complexity: 'Alta',
    recommendedFabric: 'Paño de lana virgen, cashmere o alpaca pesada',
    piecesCount: 16,
    description: 'Prenda de gran empaque con solapas anchas, martingala posterior y cruce doble.'
  },
  {
    id: 'falda-tubo-evase',
    name: 'Falda Tubo o Evasé con Pretina',
    baseLength140: 1.10,
    baseLength150: 0.95,
    complexity: 'Simple',
    recommendedFabric: 'Crepé satén, algodón satinado o lana ligera',
    piecesCount: 4,
    description: 'Delantero al lomo, dos traseros con abertura para paso y cinturilla interior.'
  }
];
