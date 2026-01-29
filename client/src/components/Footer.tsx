import { Link } from "wouter";
import { Instagram, Facebook, Mail, MapPin, MessageSquare } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding and Description */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-red-600">
              SEXOLOGÍA PAVLOV
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Terapia sexual profesional para ayudarte a reconectar con tu sexualidad de manera saludable y placentera.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/pavlov_sexologia?igsh=ZXg4dmc2ZXV6d3Zz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:pablovsexologia@gmail.com" 
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Enviar correo electrónico"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Navegación</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/#bienvenida" className="hover:text-red-400 transition-colors">Inicio</Link></li>
              <li><a href="/#proceso" onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("proceso");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }
              }} className="hover:text-red-400 transition-colors">Proceso Terapéutico</a></li>
              <li><a href="/blog" className="hover:text-red-400 transition-colors">Blog</a></li>
              <li><a href="https://catalogopavlov.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">Herramientas</a></li>
              <li><Link href="/#contacto" className="hover:text-red-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Ubicaciones</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Consultorio Calderón</p>
                  <p className="text-sm text-gray-300">Av. Calderón y Panamericana</p>
                  <p className="text-xs text-gray-400">Edificio Torre Médica, Piso 3</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Consultorio La Colón</p>
                  <p className="text-sm text-gray-300">Av. Colón y Av. 6 de Diciembre</p>
                  <p className="text-xs text-gray-400">Edificio Colón 2000, Oficina 502</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Consultorio Estadio</p>
                  <p className="text-sm text-gray-300">Av. Atahualpa y Av. 10 de Agosto</p>
                  <p className="text-xs text-gray-400">Edificio Medical Center, Piso 2</p>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-300">
              <span className="text-red-400 font-medium">¡También sesiones en línea!</span> Atendemos a pacientes de todo Ecuador y Latinoamérica.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Correo Electrónico</p>
                  <a 
                    href="mailto:pablovsexologia@gmail.com" 
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                  >
                    pablovsexologia@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 mt-0.5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">WhatsApp</p>
                  <a 
                    href="https://wa.me/593992523747?text=Hola%20Pablo,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                  >
                    +593 992523747
                  </a>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="text-sm font-medium text-white mb-2">Horario de Atención</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span>9:00 - 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 - 13:00</span>
                </li>
                <li className="text-gray-400 text-xs mt-2">* Horario de oficina, previa cita</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left text-gray-400 text-xs mb-4 md:mb-0">
              © {currentYear} Sexología Pavlov. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              <a 
                href="/politica-privacidad" 
                className="text-xs text-gray-400 hover:text-red-400 transition-colors"
              >
                Política de Privacidad
              </a>
              <a 
                href="/terminos" 
                className="text-xs text-gray-400 hover:text-red-400 transition-colors"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Este sitio web no reemplaza el asesoramiento profesional. Si necesitas ayuda inmediata, por favor contacta con un profesional de la salud.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
