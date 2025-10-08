import { motion } from "framer-motion";

export const Resume = () => {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6 sm:p-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">Resume</h2>
        <p className="text-white/80">Want my latest resume? Head to the contact section and I’ll share it with you.</p>
        <div className="mt-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:from-indigo-400 hover:to-violet-400 ring-glow">Request via Contact</a>
        </div>
      </motion.div>
    </section>
  );
};
