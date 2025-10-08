import { motion } from "framer-motion";

const items = [
  {
    title: "Webmaster Assistant Head — IEEE Techithon, Atharva College",
    desc: "Managing and developing web platforms for tech events and leading the UI/UX design team.",
  },
  {
    title: "Committee Member — GDGC (Google Developer Group Campus)",
    desc: "Engaging with developer communities, learning new tech tools, and contributing to student tech culture.",
  },
  {
    title: "2nd Prize — Avinya’25 (Synergia: The Solar Piezo Powered Future)",
    desc: "Hybrid renewable energy system combining solar and piezoelectric power generation.",
  },
  {
    title: "Project in Progress — CPLD-Based Gas Leakage Detector",
    desc: "Safety project integrating sensors, CPLD logic, and embedded programming.",
  },
  {
    title: "MUN Participant (2 Times) — Indian Parliament Domain",
    desc: "Gained communication, leadership, and debate skills through active participation.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gradient">
        Experience & Achievements
      </h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 ring-glow" />
              <div className="glass rounded-xl p-5">
                <h3 className="font-semibold">{it.title}</h3>
                <p className="text-sm text-white/70 mt-1">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
