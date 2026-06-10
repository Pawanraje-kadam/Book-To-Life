import { PredictionForm } from "@/components/features/PredictionForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function Create() {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(201,100%,8%)]">
      <Navbar />
      <main className="flex-grow pt-6 pb-20">
        <PredictionForm />
      </main>
      <Footer />
    </div>
  );
}
