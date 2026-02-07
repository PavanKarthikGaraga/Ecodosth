import BestSellers from "@/components/home/BestSellers";
import Testimonials from "@/components/home/Testimonials";
import ProductCategories from "@/components/home/ProductCategories";
import GlobalShipping from "@/components/home/GlobalShipping";
import DualCTA from "@/components/home/DualCTA";
import Hero from "@/components/home/Hero";
import ComboPacks from "@/components/home/ComboPacks";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ProductCategories />
      <ComboPacks />
      <BestSellers />
      <Testimonials />
      {/* <Certifications /> */}
      <GlobalShipping />
      <DualCTA />
    </div>
  );
}
