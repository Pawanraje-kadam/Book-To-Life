import { Zap, Target, ShieldAlert, LineChart, ArrowRight, BookOpen, Clock, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const displayFont = { fontFamily: "'Instrument Serif', serif" };

const features = [
  { icon: Zap, title: "Actionable Wins", tag: "30 days", desc: "Micro-habits you can start today, directly extracted from your book's core principles." },
  { icon: LineChart, title: "5-Year Trajectory", tag: "Long-term", desc: "See compounding effects on your career and life — not motivational fluff, real projections." },
  { icon: ShieldAlert, title: "Risk Analysis", tag: "Honest", desc: "Predict real tradeoffs and failure points before they blindside you." },
  { icon: Target, title: "Personalized Roadmap", tag: "Your data", desc: "Tailored to your exact age, role, available hours, and specific goal." },
];

const steps = [
  { icon: BookOpen, step: "01", title: "Enter your book", desc: "Tell us the book you're applying and a bit about your current situation." },
  { icon: Clock, step: "02", title: "Set your goal", desc: "Define what you want to achieve and how many hours per day you can commit." },
  { icon: Brain, step: "03", title: "Get your report", desc: "Receive a brutally honest AI projection of your next 30 days, 6 months, 1 year, and 5 years." },
];

export function Features() {
  return (
    <div className="bg-[hsl(201,100%,8%)]">

      {/* ── What You Get ── */}
      <section id="features" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-widest uppercase text-white/35 mb-4 font-medium">What you get</p>
            <h2 className="text-4xl md:text-5xl font-normal text-white" style={displayFont}>
              Not motivation.{" "}
              <span className="text-white/35">Prediction.</span>
            </h2>
            <p className="text-white/45 text-base mt-5 max-w-md mx-auto leading-relaxed">
              A brutally honest AI report — no fluff, no generic advice, built around your specific goal.
            </p>
          </div>

          {/* White cards on dark — maximum contrast */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 hover:scale-[1.02] transition-transform flex flex-col">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[hsl(201,80%,25%)] bg-[hsl(201,80%,93%)] rounded-full px-3 py-1 self-start mb-5">
                  {f.tag}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[hsl(201,100%,8%)] flex items-center justify-center mb-5">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-[hsl(201,100%,8%)] mb-2" style={displayFont}>
                  {f.title}
                </h3>
                <p className="text-sm text-[hsl(201,40%,35%)] leading-relaxed flex-grow">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 px-6 border-t border-white/[0.07]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-widest uppercase text-white/35 mb-4 font-medium">Process</p>
            <h2 className="text-4xl md:text-5xl font-normal text-white" style={displayFont}>
              Three steps to{" "}
              <span className="text-white/35">clarity.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-normal text-white/10" style={displayFont}>{s.step}</span>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.07] flex items-center justify-center">
                    <s.icon className="h-4 w-4 text-white/60" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/create"
              className="inline-flex items-center gap-2 bg-white text-[hsl(201,100%,8%)] rounded-full px-10 py-4 text-sm font-semibold hover:scale-[1.03] transition-transform shadow-lg"
            >
              Generate My Report <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-xs text-white/25 mt-4">Free · No signup required · Results in seconds</p>
          </div>
        </div>
      </section>
    </div>
  );
}
