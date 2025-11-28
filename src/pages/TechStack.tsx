import { Layout } from "@/components/layout/Layout";
import { Shield, Users, Cloud, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TechStack = () => {
  const { t } = useLanguage();

  const sections = [
    {
      icon: Shield,
      title: t.techPage.sections.security.title,
      items: t.techPage.sections.security.items,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: t.techPage.sections.partners.title,
      items: t.techPage.sections.partners.items,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Cloud,
      title: t.techPage.sections.cloud.title,
      items: t.techPage.sections.cloud.items,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5" />
        <div className="absolute inset-0 geometric-pattern" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t.techPage.heroTitle}</span>
            </h1>
            <p className="text-xl text-primary font-medium mb-4">
              {t.techPage.heroSubtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.techPage.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="glass-card rounded-2xl p-8">
                <div className={`w-14 h-14 rounded-xl ${section.bgColor} flex items-center justify-center mb-6`}>
                  <section.icon className={`w-7 h-7 ${section.color}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechStack;
