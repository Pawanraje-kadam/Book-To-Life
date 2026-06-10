export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-8" style={{ background: 'hsl(201, 100%, 8%)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p
          className="text-xl text-white tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Book to Life<sup className="text-xs">®</sup>
        </p>
        <p className="text-xs text-[hsl(240,4%,66%)]">
          © {new Date().getFullYear()} Book to Life. Don't just read. Evolve.
        </p>
      </div>
    </footer>
  );
}
