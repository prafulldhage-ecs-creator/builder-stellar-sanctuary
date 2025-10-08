import { motion } from "framer-motion";
import { Brush, Code2, Github, Film, Brain } from "lucide-react";

const skills = [
  { title: "UI/UX Design", desc: "Figma, Wireframing, Prototyping", icon: Brush },
  { title: "Web Development", desc: "HTML, CSS, JavaScript, React (basics)", icon: Code2 },
  { title: "Python", desc: "Logic building, small automation projects", icon: Brain },
  { title: "Video Editing", desc: "CapCut, Adobe Premiere Pro", icon: Film },
  { title: "Git & GitHub", desc: "Version control, collaboration", icon: Github },
];

export const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gradient">Skills</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white ring-glow">
                <s.icon />
              </div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-white/70">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
