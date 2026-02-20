import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "💍",
    title: "Wedding Photography",
    desc: "Timeless wedding storytelling captured with elegance, emotion, and artistic precision.",
  },
  {
    icon: "✨",
    title: "Modeling Photography",
    desc: "Editorial-style portraits crafted to highlight personality, confidence, and presence.",
  },
  {
    icon: "🌿",
    title: "Kids Photography",
    desc: "Playful and heartwarming moments preserved in a natural and candid style.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="relative py-28 bg-gradient-dark overflow-hidden">
      {/* Top glow */}
      <div className="glow-top" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label-tag mb-4">Our Services</p>
          <h2 className="heading-display text-4xl md:text-5xl text-warm mb-5">
            Capturing Moments{" "}
            <span className="text-sage">With Artistic Vision</span>
          </h2>
          <div className="sage-line w-20 mx-auto" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="glass-card-hover p-8 flex flex-col gap-5"
            >
              <div className="text-3xl">{service.icon}</div>

              <h3 className="font-serif text-xl text-warm">{service.title}</h3>

              <div className="sage-line" />

              <p className="text-warm-muted leading-relaxed text-sm">
                {service.desc}
              </p>

              <Link
                to="/gallery"
                className="mt-auto inline-flex items-center gap-2 text-sage text-xs uppercase tracking-widest font-medium hover:gap-3 transition-all duration-300"
              >
                Explore <span>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
