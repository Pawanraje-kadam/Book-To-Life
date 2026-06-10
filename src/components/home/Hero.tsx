import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

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

      {/* Dark overlay — strong enough for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/[0.65]" />

      {/* Bottom gradient fade into features */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[2]"
        style={{ background: 'linear-gradient(to bottom, transparent, hsl(201,100%,8%))' }}
      />

      {/* Hero content */}
      <div className="relative z-[3] flex flex-col items-center text-center px-6 pt-44 pb-48">

        {/* Badge */}
        <div className="animate-fade-rise flex items-center gap-2 liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/80 mb-8 tracking-wider uppercase">
          <Sparkles className="h-3 w-3 flex-shrink-0" />
          AI-Powered Life Projections
        </div>

        {/* Main headline */}
        <h1
          className="animate-fade-rise text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-normal max-w-4xl leading-[1.02] text-white"
          style={displayFont}
        >
          Don&apos;t just read.
          <br />
          <span className="text-white/45">Evolve.</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-rise-delay text-white/65 text-base sm:text-lg max-w-lg mt-7 leading-relaxed">
          Tell us your book, your goal, and your time.
          We predict exactly how your life changes — 30 days to 5 years out.
        </p>

        {/* CTAs */}
        <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Link
            to="/create"
            className="bg-white text-[hsl(201,100%,8%)] rounded-full px-10 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform flex items-center gap-2 shadow-lg"
          >
            Generate My Projection <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#how-it-works"
            className="liquid-glass rounded-full px-8 py-3.5 text-sm font-medium text-white hover:scale-[1.03] transition-transform"
          >
            See How It Works
          </a>
        </div>

        {/* Trust line */}
        <p className="animate-fade-rise-delay-3 text-[11px] text-white/25 mt-12 tracking-widest uppercase">
          Powered by Groq &middot; LLaMA 3.3 &middot; Free to use
        </p>
      </div>
    </section>
  );
}
