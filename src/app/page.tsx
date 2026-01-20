import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ProductsShowcase />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
