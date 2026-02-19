import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    text: "Exceptional work! The website exceeded our expectations. Clean code, fast delivery, and great communication throughout the project.",
  },
  {
    name: "Mike Chen",
    role: "Product Manager, DigitalFlow",
    text: "A true professional. The attention to detail and technical expertise resulted in a product that our users love. Highly recommended!",
  },
  {
    name: "Emily Davis",
    role: "Founder, CreativeHub",
    text: "Working with this developer was a game-changer. They transformed our vision into a stunning, high-performance web application.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            What Clients <span className="text-gradient-pink">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-xl p-8 border border-border relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={32} />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
