import { Zap, Target, ShieldAlert, LineChart } from "lucide-react";

export function Features() {
  const features = [
    { icon: Zap, title: "Actionable Wins", desc: "Identify immediate micro-habits." },
    { icon: LineChart, title: "5-Year Trajectory", desc: "Compounding effects on your career." },
    { icon: ShieldAlert, title: "Risk Analysis", desc: "Predict tradeoffs and failures." },
    { icon: Target, title: "Personalized Roadmap", desc: "Tailored to your available hours." },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-background p-8 rounded-3xl border hover:border-primary/50 transition-colors group"
          >
            <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
