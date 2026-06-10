import { Link } from "react-router-dom";

const displayFont = { fontFamily: "'Instrument Serif', serif" };

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-10 px-6 bg-[hsl(201,100%,5%)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" style={displayFont} className="text-xl text-white tracking-tight">
          Book to Life<sup className="text-xs align-super">®</sup>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xs text-white/35 hover:text-white/70 transition-colors">Home</Link>
          <Link to="/create" className="text-xs text-white/35 hover:text-white/70 transition-colors">Generate</Link>
          <a href="#features" className="text-xs text-white/35 hover:text-white/70 transition-colors">Features</a>
          <a href="#how-it-works" className="text-xs text-white/35 hover:text-white/70 transition-colors">How It Works</a>
        </div>
        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Book to Life. Don&apos;t just read. Evolve.
        </p>
      </div>
    </footer>
  );
}
