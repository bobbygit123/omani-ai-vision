import { Link } from "react-router-dom";
import { Cpu, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border/30 overflow-hidden">
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      {/* CTA Section */}
      <div className="relative border-b border-border/30">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Enterprise?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how our AI solutions can accelerate your digital transformation
              with secure, localized systems built for Oman's future.
            </p>
            <Button variant="hero" size="xl" className="group">
              Request an AI Architecture Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Cpu className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-foreground">
                  INNOVEX
                </span>
                <span className="text-[10px] text-primary font-medium tracking-widest uppercase">
                  AI & Future Tech
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Deploying secure, localized AI systems that power decision-making
              and drive Oman's knowledge-based economy.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/enterprise-intelligence" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Enterprise AI
                </Link>
              </li>
              <li>
                <Link to="/realtime-intelligence" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Edge AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/predictive-power" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/vision-2040" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Vision 2040 Alignment
                </Link>
              </li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Focus Areas</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Data Sovereignty</li>
              <li>Secure Deployment</li>
              <li>Knowledge Graphs</li>
              <li>Smart City Solutions</li>
              <li>Industry 4.0</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span>Alqutoof Center, Floor 5, Office No A42, Ruwi, Muscat, Sultanate of Oman</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:sales@innovex.om" className="hover:text-primary transition-colors">
                  sales@innovex.om
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+968 90605550</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Innovex Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
