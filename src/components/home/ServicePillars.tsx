import { Link } from "react-router-dom";
import { Brain, Eye, TrendingUp, ArrowRight, Database, Cpu, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "enterprise",
    href: "/enterprise-intelligence",
    icon: Brain,
    accentIcon: Database,
    title: "Enterprise AI",
    subtitle: "Intelligence at Scale",
    description: "RAG systems, Knowledge Graphs, and AI-powered decision support for C-suite executives. Transform your enterprise data into actionable intelligence.",
    features: ["Retrieval-Augmented Generation", "Knowledge Graph Construction", "Executive Decision Support"],
    gradient: "from-primary/20 to-primary/5",
    glowClass: "group-hover:shadow-primary/20",
    iconColor: "text-primary",
  },
  {
    id: "edge",
    href: "/realtime-intelligence",
    icon: Eye,
    accentIcon: Cpu,
    title: "Edge AI",
    subtitle: "Real-Time Intelligence",
    description: "Video Analytics, Object Detection, and Industry 4.0 automation for smart cities and industrial operations. Intelligence at the edge.",
    features: ["Video Analytics & Detection", "I-4.0 Automation", "Smart City Applications"],
    gradient: "from-secondary/20 to-secondary/5",
    glowClass: "group-hover:shadow-secondary/20",
    iconColor: "text-secondary",
  },
  {
    id: "data",
    href: "/predictive-power",
    icon: TrendingUp,
    accentIcon: BarChart3,
    title: "Data Science",
    subtitle: "Predictive Power",
    description: "Time-Series Forecasting, Regression Models, and business optimization. Turn historical data into future-ready strategies.",
    features: ["Time-Series Forecasting", "Regression Modeling", "Business Optimization"],
    gradient: "from-primary/15 via-secondary/10 to-primary/5",
    glowClass: "group-hover:shadow-primary/15",
    iconColor: "text-primary",
  },
];

export const ServicePillars = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Three Pillars of <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive AI solutions designed for Oman's digital transformation,
            built with security and sovereignty at their core.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={service.href}
              className={cn(
                "group relative rounded-2xl overflow-hidden transition-all duration-500",
                "glass-card border border-border/50 hover:border-primary/30",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Background */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                service.gradient
              )} />

              <div className="relative p-8 lg:p-10">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center",
                    "bg-muted/50 group-hover:bg-muted transition-colors duration-300"
                  )}>
                    <service.icon className={cn("w-8 h-8 transition-all duration-300", service.iconColor)} />
                  </div>
                  <service.accentIcon className={cn(
                    "absolute -bottom-2 -right-2 w-6 h-6 opacity-30 group-hover:opacity-60 transition-opacity",
                    service.iconColor
                  )} />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <p className={cn("text-sm font-medium mb-1", service.iconColor)}>
                    {service.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={cn("w-1.5 h-1.5 rounded-full", service.iconColor.replace('text-', 'bg-'))} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                "shadow-2xl",
                service.glowClass
              )} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
