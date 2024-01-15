import Script from "next/script";
import CompanyOverview from "../components/CompanyOverview";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0YY71GGXKE"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0YY71GGXKE');
          `}
      </Script>
      <HeroSection />
      <CompanyOverview />
      <Products />
      <Testimonials />
    </>
  );
}
