import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+54 297 418 9779",
      link: "tel:+542974189779",
    },
    {
      icon: Mail,
      title: "Email",
      value: "magnociro1@gmail.com",
      link: "mailto:magnociro1@gmail.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Córdoba Capital, Argentina",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: SiInstagram,
      name: "Instagram",
      link: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      icon: SiFacebook,
      name: "Facebook",
      link: "https://facebook.com",
      color: "hover:text-blue-600",
    },
    {
      icon: SiWhatsapp,
      name: "WhatsApp",
      link: "https://wa.me/542974189779",
      color: "hover:text-green-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contáctanos
            </h2>
            <p className="text-lg text-muted-foreground">
              ¿Interesado en una obra personalizada? Nos encantaría crear algo
              único para ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.title}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-medium text-foreground mb-2">
              Distribuimos a todas las provincias del país
            </p>
            <p className="text-sm text-muted-foreground">
              Envíos seguros y garantizados a todas las provincias
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">
              Síguenos en Redes Sociales
            </h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="lg"
                    asChild
                    className={`transition-colors ${social.color}`}
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
