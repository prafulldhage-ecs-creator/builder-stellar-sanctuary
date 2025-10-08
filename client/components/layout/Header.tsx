import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  return (
    <header className={cn("sticky top-0 z-40")}>
      <div className="glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 ring-glow" />
              <span className="text-sm font-semibold tracking-wider text-white/90 group-hover:text-white">
                Prafull Dhage
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a href="#projects">
                <Button
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 border-white/10"
                >
                  View My Work
                </Button>
              </a>
              <a href="#contact">
                <Button className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white ring-glow">
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
