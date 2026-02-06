// import HeroStack from "@/components/home/HeroStack";
import WhyEcoDosth from "@/components/home/WhyEcoDosth";
import BestSellers from "@/components/home/BestSellers";
import SustainabilityImpact from "@/components/home/SustainabilityImpact";
import ManufacturingPreview from "@/components/home/ManufacturingPreview";
import Testimonials from "@/components/home/Testimonials";
import ProductCategories from "@/components/home/ProductCategories";
import GlobalShipping from "@/components/home/GlobalShipping";
import DualCTA from "@/components/home/DualCTA";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ProductCategories />
      <WhyEcoDosth />
      <BestSellers />
      <SustainabilityImpact />
      <ManufacturingPreview />
      <Testimonials />
      {/* <Certifications /> */}
      <GlobalShipping />
      <DualCTA />
    </div>
  );
}
