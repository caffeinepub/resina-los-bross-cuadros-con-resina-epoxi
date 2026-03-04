import { Award, Heart, Users, Zap } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Artesanal",
      description:
        "Producción 100% artesanal, cada pieza hecha a mano en Córdoba",
    },
    {
      icon: Award,
      title: "Calidad",
      description:
        "Resina epoxi cristal de 2 mm con acabado espejo en cada trabajo",
    },
    {
      icon: Users,
      title: "A Medida",
      description:
        "Diseños completamente personalizados según tu espacio y gusto",
    },
    {
      icon: Zap,
      title: "Nacional",
      description: "Distribuimos y enviamos a todas las provincias del país",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-muted-foreground">
              El arte de aplicar resina epoxi sobre cuadros de lienzo
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-center text-foreground/80 text-lg leading-relaxed mb-8">
              En{" "}
              <span className="font-semibold text-primary">
                Resina Los Bross
              </span>
              , somos especialistas en producción artesanal con resina epoxi,
              ubicados en Córdoba Capital, Argentina. Nuestra especialidad son
              las mesas a medida, mesas ratonas de living y cuadros decorativos
              únicos —incluyendo composiciones con fragmentos de botellas de
              licor premium encapsulados en resina cristal.
            </p>
            <p className="text-center text-foreground/80 text-lg leading-relaxed">
              Cada pieza es hecha a mano con materiales seleccionados y acabado
              artesanal profesional. Aplicamos resina epoxi de 2 mm en cada
              trabajo, logrando una superficie brillante y profunda tipo espejo.
              Trabajamos con diseños completamente personalizados y distribuimos
              a todas las provincias del país.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
