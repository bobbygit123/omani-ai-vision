import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Eye, Cpu, Factory, Building2, ArrowRight, Video, Scan, Cog } from "lucide-react";

const useCases = [
  {
    icon: Video,
    title: "Video Analytics",
    description: "Real-time video analysis for security, traffic monitoring, and crowd management with sub-second latency.",
  },
  {
    icon: Scan,
    title: "Object Detection",
    description: "Advanced computer vision for identifying, tracking, and classifying objects across diverse environments.",
  },
  {
    icon: Factory,
    title: "Industry 4.0 Automation",
    description: "Smart manufacturing solutions with predictive maintenance, quality control, and process optimization.",
  },
  {
    icon: Building2,
    title: "Smart City Applications",
    description: "Integrated urban intelligence for transportation, utilities, and public safety management.",
  },
];

const applications = [
  {
    title: "Port & Maritime",
    items: ["Container tracking", "Vessel monitoring", "Safety compliance"],
  },
  {
    title: "Oil & Gas",
    items: ["Pipeline monitoring", "Safety detection", "Equipment inspection"],
  },
  {
    title: "Urban Infrastructure",
    items: ["Traffic optimization", "Parking management", "Emergency response"],
  },
  {
    title: "Retail & Commercial",
    items: ["Footfall analysis", "Queue management", "Inventory tracking"],
  },
];

const RealtimeIntelligence = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-[120px]" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
              <Eye className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">Edge AI & Automation</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Intelligence at the{" "}
              <span className="gradient-text text-glow-violet">Edge</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-2">
              Deploy real-time AI processing where it matters most. From video analytics to
              industrial automation, our edge solutions deliver instant intelligence.
            </p>

            {/* <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Explore Solutions
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg">
                View Case Studies
              </Button>
            </div> */}


          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Real-Time <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Processing at the speed of business, where milliseconds matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="glass-card rounded-2xl p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <useCase.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Industry <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tailored solutions for Oman's key economic sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div
                key={app.title}
                className="glass-card rounded-xl p-6 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-display font-semibold text-foreground mb-4">{app.title}</h4>
                <ul className="space-y-2">
                  {app.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Enterprise-Grade <span className="gradient-text">Edge Infrastructure</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our edge AI solutions are built on robust, scalable infrastructure designed
                for 24/7 operation in demanding environments.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Cpu className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      Hardware Agnostic
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Deploy on NVIDIA Jetson, Intel OpenVINO, or custom hardware configurations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Cog className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      Seamless Integration
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Connect with existing SCADA, ERP, and operational systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl glass-card border border-border/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-16 h-16 text-secondary/50 mx-auto mb-4 animate-pulse-glow" />
                    <p className="text-muted-foreground">Real-time Processing Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RealtimeIntelligence;
