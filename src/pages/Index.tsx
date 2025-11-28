import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicePillars } from "@/components/home/ServicePillars";
import { SecuritySection } from "@/components/home/SecuritySection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicePillars />
      <SecuritySection />
    </Layout>
  );
};

export default Index;
