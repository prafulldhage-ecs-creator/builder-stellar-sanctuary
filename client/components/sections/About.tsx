import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">
          About Me
        </h2>
        <div className="space-y-4 text-white/80 leading-relaxed">
          <p>
            I’m <strong>Prafull Dhage</strong>, a 2nd‑year E&CS student at
            Atharva College. I love crafting clean, user‑first experiences
            across UI/UX and the web.
          </p>
          <p>
            Committee Member at <strong>GDGC</strong> and{" "}
            <strong>Webmaster Assistant Head at IEEE Techithon</strong>.
            Exploring Python and building impactful projects with great teams.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
