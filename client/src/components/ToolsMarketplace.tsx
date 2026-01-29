import { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

type Tool = {
  id: string;
  title: string;
  description: string;
  category: 'exploracion' | 'pareja' | 'cuidado' | 'educacion' | 'reconexion';
  image: string;
  url: string;
  price: string;
  featured?: boolean;
};

const tools: Tool[] = [
  {
    id: '1',
    title: 'Guía de Autodescubrimiento',
    description: 'Ejercicios para explorar tu cuerpo y deseos de manera segura y consciente.',
    category: 'exploracion',
    image: '/images/tools/autodescubrimiento.jpg',
    url: '#',
    price: 'Gratis',
    featured: true,
  },
  {
    id: '2',
    title: 'Kit de Masaje para Parejas',
    description: 'Aceites y guía para mejorar la conexión a través del tacto.',
    category: 'pareja',
    image: '/images/tools/masaje.jpg',
    url: '#',
    price: '$45.99',
  },
  {
    id: '3',
    title: 'Libro: Educación Sexual Integral',
    description: 'Guía completa sobre sexualidad saludable para adultos.',
    category: 'educacion',
    image: '/images/tools/libro-educacion.jpg',
    url: '#',
    price: '$29.99',
  },
  {
    id: '4',
    title: 'Juego de Cartas Íntimas',
    description: 'Preguntas y actividades para profundizar la conexión en pareja.',
    category: 'pareja',
    image: '/images/tools/cartas-intimas.jpg',
    url: '#',
    price: '$34.99',
  },
  {
    id: '5',
    title: 'Aceite de Masaje Sensitivo',
    description: 'Fórmula hipoalergénica para masajes íntimos.',
    category: 'cuidado',
    image: '/images/tools/aceite-masaje.jpg',
    url: '#',
    price: '$24.99',
  },
  {
    id: '6',
    title: 'Curso Online: Reconexión Sensorial',
    description: 'Videolecciones para redescubrir el placer a través de los sentidos.',
    category: 'reconexion',
    image: '/images/tools/curso-online.jpg',
    url: '#',
    price: '$79.99',
    featured: true,
  },
];

const categories = [
  { id: 'all', name: 'Todas las categorías' },
  { id: 'exploracion', name: 'Exploración Corporal' },
  { id: 'pareja', name: 'Pareja y Conexión' },
  { id: 'cuidado', name: 'Cuidado Íntimo' },
  { id: 'educacion', name: 'Educación Sexual' },
  { id: 'reconexion', name: 'Reconexión Sensorial' },
];

export default function ToolsMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleExternalLink = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    const confirmed = window.confirm('Estás a punto de salir de nuestro sitio. ¿Deseas continuar?');
    if (confirmed) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="herramientas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Herramientas para tu bienestar</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Productos y recursos cuidadosamente seleccionados para complementar tu proceso terapéutico.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar herramientas..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredTools.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No se encontraron herramientas que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                >
                  {tool.featured && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Recomendado
                    </div>
                  )}
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={tool.image}
                      alt={tool.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                      <span className="bg-red-50 text-red-700 text-sm font-medium px-2.5 py-0.5 rounded">
                        {tool.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
                        {categories.find(c => c.id === tool.category)?.name}
                      </span>
                      <a
                        href={tool.url}
                        onClick={(e) => handleExternalLink(tool.url, e)}
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        Ver más <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                <ExternalLink className="inline-block h-4 w-4 mb-1 mr-1" />
                Los enlaces de compra son externos y se abrirán en una nueva pestaña.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
