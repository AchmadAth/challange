import CompanyOverview from "../components/CompanyOverview";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <Products />
      <Testimonials />
    </>
  );
}
