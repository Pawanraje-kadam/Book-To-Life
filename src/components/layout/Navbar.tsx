import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="relative z-10 w-full">
      <div className="flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-3xl tracking-tight text-white no-underline"
        >
          Book to Life<sup className="text-xs">®</sup>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-white transition-colors">
            Home
          </Link>
          <Link to="/create" className="text-sm text-[hsl(240,4%,66%)] hover:text-white transition-colors">
            Generate
          </Link>
          <Link to="/" className="text-sm text-[hsl(240,4%,66%)] hover:text-white transition-colors">
            How It Works
          </Link>
          <Link to="/" className="text-sm text-[hsl(240,4%,66%)] hover:text-white transition-colors">
            About
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/create"
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
