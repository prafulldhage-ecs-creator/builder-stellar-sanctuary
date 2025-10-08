import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-widest text-white/60">Hey, I���m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-gradient">Prafull Dhage</span> <span className="inline-block">👋</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80">
            UI/UX Designer | Web Developer | GDGC & IEEE Member | Innovator
          </p>
          <motion.p
            className="text-white/70 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gradient font-semibold">Designing experiences.</span> Building ideas. Inspiring change.
          </motion.p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects"><Button size="lg" className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white ring-glow">🚀 View My Work</Button></a>
            <a href="#contact"><Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 border-white/10">📩 Contact Me</Button></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-3xl glass ring-glow animate-float group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fcaaa4ede07ec445597e01b5c69a33caa%2F13ec8db8329944ce9e32c797565c797c?format=webp&width=800"
              alt="Portrait of Prafull Dhage"
              className="absolute inset-0 h-full w-full object-cover rounded-3xl mix-blend-lighten rotate-90 scale-125 transition-transform duration-700"
            />
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-indigo-600/20 to-violet-600/20 blur-xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
