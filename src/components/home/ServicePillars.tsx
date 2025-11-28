import { Link } from "react-router-dom";
import { Brain, Eye, TrendingUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import enterpriseImg from "@/assets/enterprise-ai.jpg";
import edgeImg from "@/assets/edge-ai-port.jpg";
import dataImg from "@/assets/data-science.jpg";

export const ServicePillars = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    { id: "enterprise", href: "/enterprise-intelligence", icon: Brain, title: t.pillars.enterprise.title, subtitle: t.pillars.enterprise.subtitle, description: t.pillars.enterprise.description, features: t.pillars.enterprise.features, image: enterpriseImg, gradient: "from-primary/20 to-primary/5", iconColor: "text-primary" },
    { id: "edge", href: "/realtime-intelligence", icon: Eye, title: t.pillars.edge.title, subtitle: t.pillars.edge.subtitle, description: t.pillars.edge.description, features: t.pillars.edge.features, image: edgeImg, gradient: "from-secondary/20 to-secondary/5", iconColor: "text-secondary" },
    { id: "data", href: "/predictive-power", icon: TrendingUp, title: t.pillars.data.title, subtitle: t.pillars.data.subtitle, description: t.pillars.data.description, features: t.pillars.data.features, image: dataImg, gradient: "from-primary/15 via-secondary/10 to-primary/5", iconColor: "text-primary" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.pillars.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.pillars.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link key={service.id} to={service.href} className={cn("group relative rounded-2xl overflow-hidden transition-all duration-500 glass-card border border-border/50 hover:border-primary/30 animate-fade-in")} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={cn("absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent")} />
              </div>
              <div className="relative p-6">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-muted/50 mb-4 -mt-10 relative z-10 border border-border/50")}>
                  <service.icon className={cn("w-6 h-6", service.iconColor)} />
                </div>
                <p className={cn("text-xs font-medium mb-1", service.iconColor)}>{service.subtitle}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className={cn("w-1.5 h-1.5 rounded-full", service.iconColor.replace('text-', 'bg-'))} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
                  <span>{service.id === 'enterprise' ? t.pillars.enterprise.cta : service.id === 'edge' ? t.pillars.edge.cta : t.pillars.data.cta}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rtl-flip' : ''}`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
