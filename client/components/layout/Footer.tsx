import { Github, Linkedin, Instagram, Palette } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/60">“Blending creativity with code to design the future.”</p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Linkedin /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Instagram /></a>
          <a href="https://www.behance.net/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Palette /></a>
        </div>
      </div>
    </footer>
  );
};
