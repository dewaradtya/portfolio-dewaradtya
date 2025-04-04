"use client";

import Navbar from "@/components/navigation/Index";
import Hero from "@/components/hero/Index";
import About from "@/components/about/Index";
import Portfolio from "@/components/portfolio/Index";
import FAQ from "@/components/faq/Index";
import Footer from "@/components/footer/Index";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {  
  return (
    <div className="bg-white min-h-screen">
      <CustomCursor />
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About/>

      {/* Portfolio Section */}
      <Portfolio/>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
