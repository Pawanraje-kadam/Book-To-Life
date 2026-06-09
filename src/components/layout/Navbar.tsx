import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl tracking-tight">Book to Life</span>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/"
            className="hidden md:block text-sm font-medium hover:text-primary transition-colors"
          >
            How it works
          </Link>
          <ThemeToggle />
          <Link
            to="/create"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
