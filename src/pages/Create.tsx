import { PredictionForm } from "@/components/features/PredictionForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Create() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'hsl(201, 100%, 8%)' }}>
      <Navbar />
      <main className="flex-grow pt-8 pb-20">
        <PredictionForm />
      </main>
      <Footer />
    </div>
  );
}
