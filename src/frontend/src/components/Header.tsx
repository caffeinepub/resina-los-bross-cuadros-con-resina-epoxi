import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Galería", id: "gallery" },
    { label: "Productos", id: "products" },
    { label: "Gastronómico", id: "gastronomico" },
    { label: "Proceso", id: "proceso" },
    { label: "Nosotros", id: "about" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(10,6,2,0.97)",
        borderBottom: "1px solid rgba(200,146,42,0.2)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.6)",
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            {/* Resin drop icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #c8922a 0%, #e8b84b 60%, #f5d07a 100%)",
                boxShadow: "0 0 18px rgba(200,146,42,0.45)",
              }}
            >
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 1C10 1 2 9.5 2 14a8 8 0 0016 0C18 9.5 10 1 10 1z"
                  fill="#1a0f00"
                  fillOpacity="0.85"
                />
                <path
                  d="M7 14.5a3.5 3.5 0 005.5-2.9"
                  stroke="#e8b84b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            <div className="text-left">
              <h1
                className="text-xl font-bold leading-none tracking-tight"
                style={{
                  background:
                    "linear-gradient(135deg, #e8b84b, #f5d07a, #c8922a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Resina Los Bross
              </h1>
              <p
                className="text-xs font-medium leading-none mt-0.5"
                style={{ color: "rgba(200,170,100,0.65)" }}
              >
                Arte en Resina Epoxi · Córdoba
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 group"
                style={{ color: "rgba(220,190,140,0.75)" }}
                data-ocid={`nav.${item.id}.link`}
              >
                <span className="relative z-10 group-hover:text-amber-300 transition-colors duration-200">
                  {item.label}
                </span>
                {/* Hover underline */}
                <span
                  className="absolute bottom-0.5 left-3 right-3 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                  style={{
                    background: "linear-gradient(90deg, #c8922a, #e8b84b)",
                  }}
                />
              </button>
            ))}

            {/* CTA Button */}
            <a
              href="https://wa.me/542974189779?text=Hola!%20Quiero%20consultar%20sobre%20un%20trabajo%20en%20resina%20epoxi."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                color: "#1a0f00",
                boxShadow: "0 0 12px rgba(200,146,42,0.3)",
              }}
              data-ocid="nav.whatsapp.button"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                style={{ color: "#e8b84b" }}
                data-ocid="nav.mobile_menu.button"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              style={{
                background: "#0a0602",
                borderLeft: "1px solid rgba(200,146,42,0.2)",
              }}
            >
              <div className="flex flex-col gap-1 mt-8">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4 px-3"
                  style={{ color: "rgba(200,146,42,0.5)" }}
                >
                  Navegación
                </p>
                {navItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-3 py-3 rounded-lg text-base font-medium transition-all duration-150 hover:bg-amber-900/20"
                    style={{ color: "rgba(220,190,140,0.9)" }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-6 px-3">
                  <a
                    href="https://wa.me/542974189779?text=Hola!%20Quiero%20consultar%20sobre%20un%20trabajo%20en%20resina%20epoxi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm"
                    style={{
                      background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                      color: "#1a0f00",
                    }}
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
