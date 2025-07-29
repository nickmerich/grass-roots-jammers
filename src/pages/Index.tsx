import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PerksTable from "@/components/PerksTable";
import RequirementsSection from "@/components/RequirementsSection";
import CounterSection from "@/components/CounterSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <PerksTable />
      <RequirementsSection />
      <CounterSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
