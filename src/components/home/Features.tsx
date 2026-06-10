import { Zap, Target, ShieldAlert, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const displayFont = { fontFamily: "'Instrument Serif', serif" };

export function Features() {
  const features = [
    { icon: Zap, title: "Actionable Wins", desc: "Identify immediate micro-habits you can start today based on your book's core principles." },
    { icon: LineChart, title: "5-Year Trajectory", desc: "See the compounding effects on your career and life over the long term." },
    { icon: ShieldAlert, title: "Risk Analysis", desc: "Predict tradeoffs and failure points before they derail your progress." },
    { icon: Target, title: "Personalized Roadmap", desc: "Every projection is tailored to your available hours, role, and specific goal." },
  ];

  return (
    <section className="py-32 px-6" style={{ background: 'hsl(201, 100%, 8%)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs tracking-widest uppercase text-[hsl(240,4%,66%)] mb-4">What you get</p>
          <h2 className="text-4xl md:text-5xl font-normal text-white" style={displayFont}>
            Not motivation.{" "}
            <em className="not-italic text-[hsl(240,4%,66%)]">Prediction.</em>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="liquid-glass rounded-3xl p-8 hover:scale-[1.02] transition-transform group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/30 transition-colors">
                <f.icon className="h-5 w-5 text-[hsl(240,4%,66%)] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl text-white mb-3" style={displayFont}>{f.title}</h3>
              <p className="text-sm text-[hsl(240,4%,66%)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-2xl md:text-3xl text-white mb-8 font-normal" style={displayFont}>
            Ready to see your future?
          </p>
          <Link
            to="/create"
            className="liquid-glass rounded-full px-10 py-4 text-sm text-white hover:scale-[1.03] transition-transform inline-block"
          >
            Generate My Report
          </Link>
        </div>
      </div>
    </section>
  );
}
