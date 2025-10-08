import { Github } from "lucide-react";

const projects = [
  {
    title: "Synergia: The Solar Piezo Powered Future",
    desc: "A hybrid renewable energy project combining solar and piezoelectric technologies to produce clean, decentralized power. Secured 2nd Prize at Avinya’25.",
    href: "#",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fcaaa4ede07ec445597e01b5c69a33caa%2F6f42e8ef20c44f7594bd806bb04c0f99?format=webp&width=800",
  },
  {
    title: "CPLD-Based Gas Leakage Detector",
    desc: "Hardware–software integrated system to detect gas leakage and trigger safety responses. Team-based project currently under development.",
    href: "#",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fcaaa4ede07ec445597e01b5c69a33caa%2Fbcdce6469efe44d6a41cf1cdc7299d4e?format=webp&width=800",
  },
  {
    title: "Portfolio Website",
    desc: "Designed and developed using React, Tailwind CSS, and Framer Motion to showcase my design and development work.",
    href: "#",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gradient">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel={p.href.startsWith("http") ? "noreferrer" : undefined}
            className="group relative overflow-hidden rounded-2xl glass block"
          >
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="aspect-[4/3] w-full object-cover"
              />
            ) : (
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-indigo-600/30 to-violet-600/30" />
            )}
            <div className="absolute inset-0 p-5 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-white/80 mt-1 line-clamp-3">
                {p.desc}
              </p>
              <div className="mt-3 flex items-center gap-2 text-white/80">
                <Github className="h-4 w-4" />{" "}
                <span className="text-sm">View on GitHub</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
