import { motion } from "framer-motion";

export const Contact = () => {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      form.reset();
      alert("Thanks! Your message has been sent.");
    } catch (err) {
      alert("Something went wrong. Please try again later.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gradient">Let’s Collaborate 🚀</h2>
        <p className="text-white/70 mt-2">Have an idea or opportunity? I’d love to hear from you.</p>
      </div>
      <motion.form
        onSubmit={onSubmit}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-6 sm:p-8 space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2 text-white/80">Name</label>
            <input name="name" required className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-white/20 text-white placeholder:text-white/40" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm mb-2 text-white/80">Email</label>
            <input name="email" type="email" required className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-white/20 text-white placeholder:text-white/40" placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-2 text-white/80">Message</label>
          <textarea name="message" rows={5} required className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-white/20 text-white placeholder:text-white/40" placeholder="Tell me about your project or idea..." />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:from-indigo-400 hover:to-violet-400 ring-glow">Send Message</button>
        </div>
        <div className="pt-2 text-center text-sm text-white/60">
          Or reach me on LinkedIn, GitHub, Behance, or Instagram.
        </div>
      </motion.form>
    </section>
  );
};
