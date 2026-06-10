import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Home() {
  return (
    <div className="relative">
      {/* Navbar overlaid on hero */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
