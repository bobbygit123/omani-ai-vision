import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { TrendingUp, LineChart, BarChart3, Target, ArrowRight, Clock, Percent, DollarSign } from "lucide-react";

const capabilities = [
  {
    icon: LineChart,
    title: "Time-Series Forecasting",
    description: "Predict future trends with advanced temporal models. From demand forecasting to resource planning, stay ahead of market dynamics.",
  },
  {
    icon: BarChart3,
    title: "Regression Modeling",
    description: "Uncover relationships between variables to optimize pricing, resource allocation, and operational efficiency.",
  },
  {
    icon: Target,
    title: "Business Optimization",
    description: "AI-driven recommendations for strategic decisions, identifying opportunities and minimizing risks across your organization.",
  },
];

const metrics = [
  { icon: Clock, value: "40%", label: "Faster Forecasting" },
  { icon: Percent, value: "95%", label: "Prediction Accuracy" },
  { icon: DollarSign, value: "3x", label: "ROI Improvement" },
];

const industries = [
  "Energy & Utilities",
  "Financial Services",
  "Retail & E-commerce",
  "Manufacturing",
  "Healthcare",
  "Logistics & Supply Chain",
];

import { Link } from "react-router-dom";

const PredictivePower = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Data Science</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Turn Data Into{" "}
              <span className="gradient-text text-glow-cyan">Predictive Power</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Leverage advanced statistical modeling and machine learning to transform
              historical data into accurate forecasts and actionable business insights.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/contact-ai">
                  Start Analysis
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-card/30 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-4xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Analytical <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Advanced statistical methods combined with modern machine learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className="glass-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <cap.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Powering Decisions Across{" "}
                <span className="gradient-text">Industries</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our data science solutions adapt to the unique challenges and opportunities
                of each industry, delivering customized predictive models and insights.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="glass-card rounded-lg px-4 py-3 border border-border/50 text-foreground text-sm font-medium"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-2xl p-8 border border-border/50">
                <h4 className="font-display font-semibold text-foreground mb-6">
                  Our Methodology
                </h4>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Data Assessment", desc: "Evaluate data quality and availability" },
                    { step: "02", title: "Model Selection", desc: "Choose optimal algorithms for your use case" },
                    { step: "03", title: "Training & Validation", desc: "Rigorous testing for accuracy" },
                    { step: "04", title: "Deployment & Monitoring", desc: "Production-ready with ongoing optimization" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-display font-bold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <h5 className="font-display font-semibold text-foreground">{item.title}</h5>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PredictivePower;
