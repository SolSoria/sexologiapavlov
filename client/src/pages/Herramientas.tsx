import { useState, useEffect } from 'react';
import { Filter, Search, ChevronDown, Heart, Star, Info } from 'lucide-react';
import { productos } from '../data/productos';
import { Categorias, Objetivos, Niveles, Producto } from '../types/filtros';

export default function Herramientas() {
  const [filtros, setFiltros] = useState({
    categoria: '',
    objetivo: '',
    nivel: '',
    busqueda: '',
  });
  const [filtrosActivos, setFiltrosActivos] = useState(false);
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]);

  useEffect(() => {
    // Apply filters
    const resultados = productos.filter(producto => {
      const coincideCategoria = !filtros.categoria || producto.categoria === filtros.categoria;
      const coincideObjetivo = !filtros.objetivo || 
        (producto.procesosRecomendados && producto.procesosRecomendados.includes(filtros.objetivo as Objetivos));
      const coincideNivel = !filtros.nivel || producto.nivel === filtros.nivel;
      const coincideBusqueda = !filtros.busqueda || 
        producto.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(filtros.busqueda.toLowerCase());
      
      return coincideCategoria && coincideObjetivo && coincideNivel && coincideBusqueda;
    });
    
    setProductosFiltrados(resultados);
  }, [filtros]);

  const limpiarFiltros = () => {
    setFiltros({
      categoria: '',
      objetivo: '',
      nivel: '',
      busqueda: '',
    });
  };

  const handleFiltroChange = (key: string, value: string) => {
    setFiltros(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getFiltrosActivosCount = () => {
    return Object.values(filtros).filter(Boolean).length - 1; // Excluimos búsqueda
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-light text-gray-900 mb-4">
              Herramientas recomendadas para el bienestar sexual
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Selección curada desde Sexología Pavlov como apoyo a procesos de educación y acompañamiento terapéutico.
            </p>
            <p className="text-sm text-gray-500 italic">
              No todas las personas necesitan estas herramientas. Cuando se recomiendan, se hace con criterio profesional.
            </p>
          </div>
        </div>
      </div>

      {/* Ethical Disclaimer */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-8 max-w-7xl mx-auto">
        <div className="flex">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-amber-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-amber-700">
              Estos productos no sustituyen la terapia ni garantizan resultados. Su uso depende de cada proceso individual y se recomienda acompañamiento profesional.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar herramientas..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                value={filtros.busqueda}
                onChange={(e) => handleFiltroChange('busqueda', e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setFiltrosActivos(!filtrosActivos)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtros {filtrosActivos ? '' : `(${getFiltrosActivosCount()})`}
              </button>
              {getFiltrosActivosCount() > 0 && (
                <button
                  onClick={limpiarFiltros}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>

          {/* Expanded Filters */}
          {filtrosActivos && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                  value={filtros.categoria}
                  onChange={(e) => handleFiltroChange('categoria', e.target.value)}
                >
                  <option value="">Todas las categorías</option>
                  {Object.values(Categorias).map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Objetivo</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                  value={filtros.objetivo}
                  onChange={(e) => handleFiltroChange('objetivo', e.target.value)}
                >
                  <option value="">Cualquier objetivo</option>
                  {Object.values(Objetivos).map((objetivo) => (
                    <option key={objetivo} value={objetivo}>
                      {objetivo}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nivel</label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                  value={filtros.nivel}
                  onChange={(e) => handleFiltroChange('nivel', e.target.value)}
                >
                  <option value="">Cualquier nivel</option>
                  {Object.values(Niveles).map((nivel) => (
                    <option key={nivel} value={nivel}>
                      {nivel}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Mostrando {productosFiltrados.length} de {productos.length} productos
          </p>
          <div className="flex items-center
          ">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">Ordenar por:</label>
            <select
              id="sort"
              className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
            >
              <option>Recomendados</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Nivel: básico a avanzado</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {productosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No se encontraron productos</h3>
            <p className="mt-1 text-sm text-gray-500">Intenta con otros filtros de búsqueda.</p>
            <button
              onClick={limpiarFiltros}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Limpiar todos los filtros
            </button>
          </div>
        )}
      </main>

      {/* Trust Badges */}
      <div className="bg-white mt-12 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900">Selección curada</h3>
              <p className="mt-1 text-sm text-gray-500">Productos recomendados por especialistas en salud sexual</p>
            </div>
            <div>
              <div className="flex justify-center">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900">Enfoque educativo</h3>
              <p className="mt-1 text-sm text-gray-500">Herramientas para el aprendizaje y crecimiento personal</p>
            </div>
            <div>
              <div className="flex justify-center">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-900">Acompañamiento</h3>
              <p className="mt-1 text-sm text-gray-500">Te guiamos en cada paso del proceso de compra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ producto }: { producto: Producto }) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleWhatsAppClick = () => {
    const message = `Hola, vi este producto recomendado en Sexología Pavlov y me gustaría recibir más información antes de comprarlo. Gracias.\n\nProducto: ${producto.nombre}\nPrecio: $${producto.precio?.toFixed(2) || 'Consultar'}\n\nTienes alguna pregunta sobre este producto?`;
    const phoneNumber = '1234567890'; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = '/images/herramientas/placeholder.jpg';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative">
        <div className="aspect-w-4 aspect-h-3 bg-gray-50">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="object-cover w-full h-48"
            onError={handleImageError}
            loading="lazy"
          />
        </div>
        {producto.destacado && (
          <div className="absolute top-2 right-2 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Star className="w-3 h-3 mr-1" fill="currentColor" />
            Destacado
          </div>
        )}
        <button
          type="button"
          className="absolute top-2 left-2 p-1.5 rounded-full bg-white/80 text-gray-400 hover:text-red-500 focus:outline-none"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} 
          />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{producto.nombre}</h3>
            <p className="text-sm text-gray-500">{producto.categoria}</p>
          </div>
          {producto.nivel && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              {producto.nivel}
            </span>
          )}
        </div>
        
        <p className="mt-2 text-sm text-gray-600 flex-grow">{producto.descripcion}</p>
        
        {producto.precio && (
          <div className="mt-2">
            <span className="text-lg font-medium text-gray-900">${producto.precio.toFixed(2)}</span>
          </div>
        )}
        
        {producto.procesosRecomendados && producto.procesosRecomendados.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-medium text-gray-700">¿Para qué proceso puede ser útil?</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {producto.procesosRecomendados.map((proceso) => (
                <span
                  key={proceso}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {proceso}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-4">
          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            👉 Comprar por WhatsApp
          </button>
          <p className="mt-1 text-xs text-center text-gray-500">
            Te atenderemos para resolver dudas antes de cualquier compra.
          </p>
        </div>
      </div>
    </div>
  );
}
