import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const displayFont = { fontFamily: "'Instrument Serif', serif" };

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-40 pb-40">

        {/* Badge */}
        <div className="animate-fade-rise liquid-glass rounded-full px-4 py-1.5 text-xs text-[hsl(240,4%,66%)] mb-10 tracking-widest uppercase">
          AI-Powered Life Projections
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal max-w-5xl leading-[0.95] tracking-[-2px] text-white"
          style={displayFont}
        >
          Your next chapter{" "}
          <em className="not-italic text-[hsl(240,4%,66%)]">starts with</em>
          <br />
          <em className="not-italic text-[hsl(240,4%,66%)]">a single book.</em>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-rise-delay text-[hsl(240,4%,66%)] text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          Tell us which book you&apos;re reading, your goal, and how much time you have.
          Our AI predicts exactly how your life will change — 30 days, 6 months, 1 year, 5 years out.
        </p>

        {/* CTA */}
        <Link
          to="/create"
          className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 hover:scale-[1.03] transition-transform flex items-center gap-2"
        >
          Generate My Projection <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Scroll hint */}
        <p className="animate-fade-rise-delay-3 text-xs text-[hsl(240,4%,50%)] mt-16 tracking-widest uppercase">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
