import { Shield, Lock, Server, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import teamImg from "@/assets/team-oman.jpg";

export const SecuritySection = () => {
  const { t } = useLanguage();

  const securityFeatures = [
    { icon: Shield, title: t.security.features.sovereignty.title, description: t.security.features.sovereignty.description },
    { icon: Lock, title: t.security.features.secure.title, description: t.security.features.secure.description },
    { icon: Server, title: t.security.features.compliance.title, description: t.security.features.compliance.description },
    { icon: Globe, title: t.security.features.local.title, description: t.security.features.local.description },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 omani-border opacity-20" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">{t.security.title}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.security.subtitle}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={feature.title} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img src={teamImg} alt="Innovex Omani Team" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
