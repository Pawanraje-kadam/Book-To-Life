import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const displayFont = { fontFamily: "'Instrument Serif', serif" };

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-10 w-full">
      <div className="flex flex-row items-center justify-between px-6 md:px-8 py-5 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" style={displayFont} className="text-2xl tracking-tight text-white">
          Book to Life<sup className="text-xs align-super">®</sup>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-white transition-colors">Home</Link>
          <Link to="/create" className="text-sm font-medium text-white/55 hover:text-white transition-colors">Generate</Link>
          <a href="#how-it-works" className="text-sm font-medium text-white/55 hover:text-white transition-colors">How It Works</a>
          <a href="#features" className="text-sm font-medium text-white/55 hover:text-white transition-colors">Features</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/create"
            className="liquid-glass rounded-full px-5 py-2 text-sm font-medium text-white hover:scale-[1.03] transition-transform inline-block"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden liquid-glass mx-4 mb-4 rounded-2xl px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setOpen(false)} className="text-sm font-medium text-white">Home</Link>
          <Link to="/create" onClick={() => setOpen(false)} className="text-sm font-medium text-white/60">Generate</Link>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm font-medium text-white/60">How It Works</a>
          <a href="#features" onClick={() => setOpen(false)} className="text-sm font-medium text-white/60">Features</a>
          <Link
            to="/create"
            onClick={() => setOpen(false)}
            className="bg-white text-[hsl(201,100%,8%)] rounded-full px-4 py-2 text-sm font-semibold text-center mt-1"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
