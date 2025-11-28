import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/LanguageContext";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t.contactPage.form.success,
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute inset-0 geometric-pattern" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t.contactPage.heroTitle}</span>
            </h1>
            <p className="text-xl text-primary font-medium mb-4">
              {t.contactPage.heroSubtitle}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.contactPage.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {t.contactPage.form.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contactPage.form.name}
                  </label>
                  <Input 
                    required 
                    placeholder={t.contactPage.form.name}
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contactPage.form.email}
                  </label>
                  <Input 
                    type="email" 
                    required 
                    placeholder={t.contactPage.form.email}
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contactPage.form.company}
                  </label>
                  <Input 
                    placeholder={t.contactPage.form.company}
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contactPage.form.interest}
                  </label>
                  <select className="w-full h-10 px-3 rounded-md bg-muted/50 border border-input text-foreground">
                    {t.contactPage.form.interests.map((interest, index) => (
                      <option key={index} value={interest}>{interest}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t.contactPage.form.message}
                  </label>
                  <Textarea 
                    rows={4}
                    placeholder={t.contactPage.form.message}
                    className="bg-muted/50"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : t.contactPage.form.submit}
                  <Send className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                {t.contactPage.info.title}
              </h2>
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">{t.contactPage.info.address}</p>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href={`mailto:${t.contactPage.info.email}`} className="text-primary hover:underline">
                      {t.contactPage.info.email}
                    </a>
                  </div>
                </div>
                <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">{t.contactPage.info.phone}</p>
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

export default Contact;
