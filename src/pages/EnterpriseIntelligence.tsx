import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Database, Network, FileSearch, ArrowRight, CheckCircle, Shield } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "Retrieval-Augmented Generation (RAG)",
    description: "Connect your AI to vast corporate knowledge bases, enabling precise, context-aware responses grounded in your organization's data.",
  },
  {
    icon: Network,
    title: "Knowledge Graph Construction",
    description: "Map complex relationships across your enterprise data, revealing hidden patterns and enabling sophisticated reasoning.",
  },
  {
    icon: Brain,
    title: "Executive Decision Support",
    description: "AI-powered insights tailored for C-suite decision-making, transforming data complexity into strategic clarity.",
  },
  {
    icon: Database,
    title: "Enterprise Data Integration",
    description: "Seamlessly connect disparate data sources into a unified intelligence layer accessible across your organization.",
  },
];

const benefits = [
  "Reduce decision-making time by up to 60%",
  "Access institutional knowledge instantly",
  "Maintain complete data sovereignty",
  "Scale intelligence across departments",
  "Ensure regulatory compliance",
  "Enable knowledge preservation",
];

const EnterpriseIntelligence = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Enterprise Intelligence</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Data Into{" "}
              <span className="gradient-text text-glow-cyan">Strategic Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Harness the power of RAG systems and Knowledge Graphs to unlock enterprise-wide 
              intelligence. Make decisions backed by your complete organizational knowledge.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Schedule Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Technical Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Core <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enterprise-grade AI solutions designed for complex organizational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="glass-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="gradient-text">Enterprise AI</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our enterprise solutions are built for organizations that demand excellence,
                security, and measurable results.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-secondary" />
                  <span className="font-display font-semibold text-foreground">Security First</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  All Enterprise AI deployments are designed with data sovereignty at their core.
                  Your sensitive information never leaves your control.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    On-premise deployment options
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Omani data center hosting
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Regulatory compliance guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EnterpriseIntelligence;
