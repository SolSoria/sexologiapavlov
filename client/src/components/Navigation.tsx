import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#sobre-mi", label: "Sobre Mí" },
    { href: "/blog", label: "Blog" },
  ];

  const isHome = location === "/";

  // Helper to handle anchor links on home page vs navigating from other pages
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      
      if (element) {
        // Prevent default behavior
        event?.preventDefault();
        
        // Smooth scroll to element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else if (!isHome) {
        // If not on home page and element doesn't exist, navigate to home first
        window.location.href = href;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight text-primary">
            Terapeuta Sexual
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    const targetId = link.href.replace("/#", "");
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                      });
                    }
                  }
                }}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#agendar"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("agendar");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }
              }}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Agendar Sesión
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-8 space-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.href.startsWith("/#")) {
                      e.preventDefault();
                      const targetId = link.href.replace("/#", "");
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start"
                        });
                      }
                    }
                  }}
                  className="block px-3 py-4 text-lg font-medium text-foreground hover:bg-secondary/50 rounded-xl"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#agendar"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const element = document.getElementById("agendar");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    });
                  }
                }}
                className="block w-full text-center mt-4 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-bold shadow-lg shadow-primary/20"
              >
                Agendar Sesión
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
