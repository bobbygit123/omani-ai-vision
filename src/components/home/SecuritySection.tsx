import { Shield, Lock, Server, Globe } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Data Sovereignty",
    description: "All data processed and stored within Oman's borders, ensuring compliance with national data protection regulations.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Military-grade encryption protocols protecting your data at rest and in transit.",
  },
  {
    icon: Server,
    title: "On-Premise Deployment",
    description: "Flexible deployment options including fully isolated on-premise installations for maximum security.",
  },
  {
    icon: Globe,
    title: "Local Infrastructure",
    description: "Partnerships with Omani data centers ensuring low latency and regulatory compliance.",
  },
];

export const SecuritySection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 omani-border opacity-20" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">
                Security First Architecture
              </span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Built for{" "}
              <span className="gradient-text">Data Sovereignty</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              In an era of increasing data regulations and cyber threats, our AI solutions 
              are architected with security at their foundation. Every system we deploy 
              ensures your data never leaves Omani jurisdiction.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-border-glow" />
              
              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border border-secondary/20 animate-border-glow" style={{ animationDelay: '1s' }} />
              
              {/* Inner Ring */}
              <div className="absolute inset-16 rounded-full border border-primary/30 animate-border-glow" style={{ animationDelay: '2s' }} />
              
              {/* Center Shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center glass-card animate-pulse-glow">
                  <Shield className="w-16 h-16 text-primary" />
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border animate-float">
                <Lock className="w-6 h-6 text-secondary" />
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border animate-float" style={{ animationDelay: '2s' }}>
                <Server className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border animate-float" style={{ animationDelay: '1s' }}>
                <Globe className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
