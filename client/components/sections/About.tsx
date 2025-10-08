import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">About Me</h2>
        <div className="space-y-4 text-white/80 leading-relaxed">
          <p>
            I’m <strong>Prafull Dhage</strong>, a 2nd-year Electronics & Computer Science Engineering student at Atharva College of Engineering. I’m passionate about blending design, technology, and creativity to build modern, user-focused digital experiences.
          </p>
          <p>
            I currently serve as a <strong>Committee Member at GDGC (Google Developer Group Campus)</strong> and the <strong>Webmaster Assistant Head at IEEE Techithon</strong>, where I work on web design, UI improvement, and developer community initiatives.
          </p>
          <p>
            I’m also exploring Python programming and continuously improving my web development and UI/UX design skills. Apart from tech, I love video editing — I create and edit visual content using CapCut and Premiere Pro, combining creativity with storytelling.
          </p>
          <p>
            Recently, my team secured <strong>2nd Prize at Avinya’25</strong> for our project <em>“Synergia: The Solar Piezo Powered Future”</em> — a hybrid renewable energy concept combining solar and piezoelectric power for decentralized energy generation.
          </p>
          <p>
            I’ve also participated in two <strong>Model United Nations (MUNs)</strong> under the Indian Parliament domain, which helped me develop strong communication and leadership skills.
          </p>
          <p>
            Currently, I’m also working on a <strong>CPLD-Based Gas Leakage Detector</strong> — a safety innovation project integrating sensors, embedded logic, and real-time alerts.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
