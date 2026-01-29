import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: '/images/hero-1.jpg',
    alt: 'Pareja abrazándose en un ambiente cálido y acogedor',
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Manos entrelazadas en un gesto de conexión y apoyo',
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Persona en postura de relajación y bienestar',
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="bienvenida" className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Carousel */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm hover:bg-black/50"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm hover:bg-black/50"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
            Recupera tu bienestar sexual
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Terapia sexual profesional para ayudarte a reconectar con tu sexualidad de manera saludable y placentera.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://calendly.com/pavlov-sexologia/consulta-inicial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-red-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-red-500/20 transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              Agendar sesión
            </a>
            <a
              href="https://wa.me/593XXXXXXXXX?text=Hola%20Pablo,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios%20de%20terapia%20sexual"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
