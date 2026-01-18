import { Link } from "wouter";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-6 text-white">
              Terapeuta Sexual
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Acompañando procesos desde un enfoque humano, libre de juicios y centrado en tu bienestar integral.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:hola@terapeuta.com" className="text-white/60 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Explorar</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/#servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link href="/#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Aviso Legal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Consultorio Privado<br/>Quito, Ecuador<br/>(Previa Cita)</span>
              </li>
              <li>
                <a href="mailto:info@terapeuta.com" className="hover:text-primary transition-colors underline decoration-primary/30">
                  info@terapeuta.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-xs">
          © 2026 Terapeuta Sexual. Todos los derechos reservados. Diseño con propósito.
        </div>
      </div>
    </footer>
  );
}
