import { motion } from "framer-motion";

const techs = ["JavaScript", "HTML", "Tailwind CSS", "TypeScript", "React", "Node.js"];

const TechSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Tech <span className="text-gradient-pink">Stack</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {techs.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-xl bg-card border border-border hover:border-glow text-foreground font-mono text-sm transition-all cursor-default"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
