export enum Categorias {
  EXPLORACION = 'Exploración corporal',
  PAREJA = 'Pareja y conexión',
  CUIDADO = 'Cuidado íntimo',
  EDUCACION = 'Educación sexual',
  RECONEXION = 'Reconexión sensorial',
  AUTOCONOCIMIENTO = 'Autoconocimiento'
}

export enum Objetivos {
  DESEO = 'Deseo',
  COMUNICACION = 'Comunicación',
  DOLOR = 'Dolor',
  AUTOCONOCIMIENTO = 'Autoconocimiento',
  RECONEXION = 'Reconexión',
  EDUCACION = 'Educación'
}

export enum Niveles {
  BASICO = 'Básico',
  INTERMEDIO = 'Intermedio',
  AVANZADO = 'Avanzado'
}

export interface Producto {
  id: string;
  nombre: string;
  categoria: Categorias;
  imagen: string;
  descripcion: string;
  procesosRecomendados?: Objetivos[];
  nivel?: Niveles;
  precio?: number;
  destacado?: boolean;
}
