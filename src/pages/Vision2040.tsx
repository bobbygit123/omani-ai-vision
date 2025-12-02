import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Users, Landmark, GraduationCap, ArrowRight, Building, Globe, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Building,
    title: "Economic Diversification",
    description: "AI-powered solutions supporting Oman's transition to a knowledge-based economy, reducing oil dependency through technological innovation.",
  },
  {
    icon: Users,
    title: "Omanization & Skills Transfer",
    description: "Every project includes comprehensive knowledge transfer programs, building local AI expertise and supporting national employment goals.",
  },
  {
    icon: GraduationCap,
    title: "Human Capital Development",
    description: "Partnerships with Omani universities and training institutions to develop the next generation of AI professionals.",
  },
  {
    icon: Landmark,
    title: "Government Digital Transformation",
    description: "Supporting e-governance initiatives with AI solutions that enhance public service delivery and citizen engagement.",
  },
];

const initiatives = [
  {
    title: "Local Data Centers",
    description: "Partnership with Omani data center providers ensuring all AI processing remains within national borders.",
  },
  {
    title: "University Collaboration",
    description: "Joint research programs with Sultan Qaboos University and other institutions advancing AI education.",
  },
  {
    title: "SME Enablement",
    description: "Accessible AI solutions designed to help Omani small and medium enterprises compete globally.",
  },
  {
    title: "Sector Focus",
    description: "Targeted solutions for tourism, logistics, healthcare, and manufacturing aligned with Vision 2040 priorities.",
  },
];

import { Link } from "react-router-dom";

const Vision2040 = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <div className="absolute inset-0 omani-border opacity-10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[150px]" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-secondary/20 mb-6">
              <Target className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">Vision 2040 Alignment</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Oman's{" "}
              <span className="gradient-text text-glow-cyan">AI Future</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our mission extends beyond technology deployment. We're committed to supporting
              Oman Vision 2040's goal of creating a diversified, knowledge-based economy
              powered by innovation and Omani talent.
            </p>

            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/contact-ai">
                Partner With Us
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Commitment</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every solution we deploy is designed with Oman's national objectives in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="glass-card rounded-2xl p-8 border border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Local Impact</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Active <span className="gradient-text">Initiatives</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're actively contributing to Oman's technological future through
                strategic partnerships and targeted programs.
              </p>

              <div className="space-y-6">
                {initiatives.map((initiative, index) => (
                  <div
                    key={initiative.title}
                    className="flex gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {initiative.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-2xl p-8 border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                  <span className="font-display font-semibold text-foreground">Our Promise</span>
                </div>
                <blockquote className="text-lg text-foreground italic mb-6 leading-relaxed">
                  "Technology should serve the nation's aspirations. Every AI system we deploy
                  strengthens Oman's technological sovereignty while building local expertise
                  for generations to come."
                </blockquote>
                <p className="text-muted-foreground text-sm">
                  — Innovex Group Leadership
                </p>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-display text-3xl font-bold gradient-text">100%</div>
                      <div className="text-muted-foreground text-sm">Data Sovereignty</div>
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold gradient-text">50+</div>
                      <div className="text-muted-foreground text-sm">Omani Professionals Trained</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Join Us in Building{" "}
              <span className="gradient-text">Tomorrow</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you're a government entity, enterprise, or educational institution,
              we're ready to collaborate on initiatives that advance Oman's Vision 2040.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="group">
                Discuss Partnership
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Download Vision Alignment Report
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision2040;
