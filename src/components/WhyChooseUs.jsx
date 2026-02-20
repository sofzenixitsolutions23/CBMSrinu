import { motion } from "framer-motion";

const features = [
  {
    icon: "🎬",
    title: "Cinematic Storytelling",
    desc: "Every frame is crafted like a scene from a film — deliberately composed and emotionally resonant.",
  },
  {
    icon: "💫",
    title: "Emotion-Driven Photography",
    desc: "We don't just photograph moments. We preserve the feeling that filled the room.",
  },
  {
    icon: "👑",
    title: "Luxury Visual Experience",
    desc: "Premium equipment, meticulous editing, and a refined aesthetic sets our work apart.",
  },
  {
    icon: "🎨",
    title: "Creative Direction & Styling",
    desc: "From posing to lighting direction, we guide every detail to achieve timeless results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-28 bg-gradient-dark overflow-hidden">
      <div className="glow-top" />
      <div className="glow-bottom-right" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label-tag mb-4">Why Choose Us</p>
          <h2 className="heading-display text-4xl md:text-5xl text-warm">
            Crafted with <span className="text-sage">Passion & Precision</span>
          </h2>
          <div className="sage-line w-20 mx-auto mt-5" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="glass-card-hover p-7 flex gap-5 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl glass-card flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-serif text-lg text-warm mb-2">{feature.title}</h3>
                <p className="text-warm-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
