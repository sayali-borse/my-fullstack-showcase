import { motion } from "framer-motion";
import { Code2, Server, Palette } from "lucide-react";

const cards = [
  {
    icon: <Code2 className="text-primary" size={28} />,
    title: "Frontend",
    desc: "Building responsive, accessible interfaces with HTML, CSS, JavaScript and modern frameworks.",
  },
  {
    icon: <Server className="text-primary" size={28} />,
    title: "Backend",
    desc: "Designing APIs, databases and server-side logic for scalable, secure applications.",
  },
  {
    icon: <Palette className="text-primary" size={28} />,
    title: "UI / UX",
    desc: "Creating intuitive user experiences with clean aesthetics and thoughtful interactions.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Passionate About <span className="text-gradient-pink">Web Development</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a fullstack web developer with a love for creating elegant digital experiences.
              With expertise in JavaScript, HTML, and Tailwind CSS, I build applications that are
              fast, accessible, and beautiful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's a dynamic single-page app or a complex backend system, I approach every
              project with attention to detail and a commitment to clean, maintainable code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: "3+", label: "Years Experience" },
              { num: "25+", label: "Projects Completed" },
              { num: "15+", label: "Happy Clients" },
              { num: "99%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-6 border border-border text-center">
                <p className="text-3xl font-bold text-gradient-pink">{s.num}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-glow transition-all group"
            >
              <div className="mb-4">{c.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
