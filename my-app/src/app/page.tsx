import Hero from "@/components/home/Hero";
import ProductCategories from "@/components/home/ProductCategories";
import WhyEcoDosth from "@/components/home/WhyEcoDosth";
import BestSellers from "@/components/home/BestSellers";
import SustainabilityImpact from "@/components/home/SustainabilityImpact";
import ManufacturingPreview from "@/components/home/ManufacturingPreview";
import Testimonials from "@/components/home/Testimonials";
// import Certifications from "@/components/home/Certifications";
import GlobalShipping from "@/components/home/GlobalShipping";
import DualCTA from "@/components/home/DualCTA";

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
