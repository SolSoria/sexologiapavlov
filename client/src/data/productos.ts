import { Categorias, Objetivos, Niveles, Producto } from '../types/filtros';

export const productos: Producto[] = [
  {
    id: '1',
    nombre: 'Kit de Conexión Íntima',
    categoria: Categorias.PAREJA,
    imagen: '/images/herramientas/juego-masaje-parejas.jpg',
    descripcion: 'Set completo para masajes sensoriales que fomentan la conexión y la intimidad en pareja. Incluye guía de ejercicios y aceite natural.',
    procesosRecomendados: [Objetivos.COMUNICACION, Objetivos.DESEO, Objetivos.RECONEXION],
    nivel: Niveles.INTERMEDIO,
    precio: 45.99,
    destacado: true
  },
  {
    id: '2',
    nombre: 'Diario de Autodescubrimiento',
    categoria: Categorias.EDUCACION,
    imagen: '/images/herramientas/guia-autoconocimiento.jpg',
    descripcion: 'Cuaderno de ejercicios reflexivos para explorar la propia sexualidad de manera consciente y respetuosa.',
    procesosRecomendados: [Objetivos.AUTOCONOCIMIENTO, Objetivos.RECONEXION],
    nivel: Niveles.BASICO,
    precio: 22.50
  },
  {
    id: '3',
    nombre: 'Aceite Sensorial Relajante',
    categoria: Categorias.EXPLORACION,
    imagen: '/images/herramientas/aceite-masaje.jpg',
    descripcion: 'Aceite natural para masajes, hipoalergénico con aroma suave de lavanda y almendra para la exploración sensorial.',
    procesosRecomendados: [Objetivos.RECONEXION, Objetivos.COMUNICACION],
    nivel: Niveles.BASICO,
    precio: 28.75,
    destacado: true
  },
  {
    id: '4',
    nombre: 'Guía Ilustrada de Anatomía',
    categoria: Categorias.EDUCACION,
    imagen: '/images/herramientas/educacion-sexual.jpg',
    descripcion: 'Material didáctico visual para comprender mejor la anatomía y fisiología sexual humana.',
    procesosRecomendados: [Objetivos.AUTOCONOCIMIENTO, Objetivos.EDUCACION],
    nivel: Niveles.BASICO,
    precio: 34.99
  },
  {
    id: '5',
    nombre: 'Juego de Cartas para Parejas',
    categoria: Categorias.PAREJA,
    imagen: '/images/herramientas/juego-pareja.jpg',
    descripcion: '50 cartas con actividades guiadas para fortalecer la conexión, comunicación y deseo en pareja.',
    procesosRecomendados: [Objetivos.COMUNICACION, Objetivos.DESEO, Objetivos.RECONEXION],
    nivel: Niveles.INTERMEDIO,
    precio: 32.99,
    destacado: true
  },
  {
    id: '6',
    nombre: 'Guía de Meditación Táctil',
    categoria: Categorias.RECONEXION,
    imagen: '/images/herramientas/meditacion-tactil.jpg',
    descripcion: 'Ejercicios de atención plena y respiración para reconectar con las sensaciones corporales y el placer.',
    procesosRecomendados: [Objetivos.RECONEXION, Objetivos.AUTOCONOCIMIENTO],
    nivel: Niveles.INTERMEDIO,
    precio: 26.50
  },
  {
    id: '7',
    nombre: 'Set de Exploración Sensorial',
    categoria: Categorias.EXPLORACION,
    imagen: '/images/herramientas/masaje-parejas-2.jpg',
    descripcion: 'Kit completo con diferentes texturas y temperaturas para la exploración sensorial individual o en pareja.',
    procesosRecomendados: [Objetivos.RECONEXION, Objetivos.AUTOCONOCIMIENTO, Objetivos.DESEO],
    nivel: Niveles.AVANZADO,
    precio: 52.99,
    destacado: true
  },
  {
    id: '8',
    nombre: 'Juego de Preguntas Íntimas',
    categoria: Categorias.PAREJA,
    imagen: '/images/herramientas/juego-pareja-2.jpg',
    descripcion: '100 preguntas para profundizar en la conexión emocional y el conocimiento mutuo en pareja.',
    procesosRecomendados: [Objetivos.COMUNICACION, Objetivos.RECONEXION],
    nivel: Niveles.BASICO,
    precio: 24.99
  },
  {
    id: '9',
    nombre: 'Cuaderno de Ejercicios Corporales',
    categoria: Categorias.AUTOCONOCIMIENTO,
    imagen: '/images/herramientas/guia-autoconocimiento-2.jpg',
    descripcion: 'Ejercicios prácticos para el autoconocimiento corporal y la exploración del placer.',
    procesosRecomendados: [Objetivos.AUTOCONOCIMIENTO, Objetivos.RECONEXION],
    nivel: Niveles.INTERMEDIO,
    precio: 27.50
  },
  {
    id: '10',
    nombre: 'Guía de Educación Sexual Integral',
    categoria: Categorias.EDUCACION,
    imagen: '/images/herramientas/educacion-sexual-2.jpg',
    descripcion: 'Manual completo sobre salud sexual, relaciones y consentimiento con enfoque inclusivo.',
    procesosRecomendados: [Objetivos.EDUCACION, Objetivos.AUTOCONOCIMIENTO],
    nivel: Niveles.INTERMEDIO,
    precio: 38.99
  },
  {
    id: '11',
    nombre: 'Kit de Meditación Guiada',
    categoria: Categorias.RECONEXION,
    imagen: '/images/herramientas/meditacion-tactil-2.jpg',
    descripcion: 'Sesiones de meditación guiada para la conexión mente-cuerpo y el autodescubrimiento.',
    procesosRecomendados: [Objetivos.RECONEXION, Objetivos.AUTOCONOCIMIENTO],
    nivel: Niveles.BASICO,
    precio: 29.99,
    destacado: true
  }
];
