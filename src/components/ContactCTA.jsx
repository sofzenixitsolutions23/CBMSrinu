import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero4 from "../assets/hero4.png";

const ContactCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${hero4})` }}>
      

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base/60 via-dark-base/40 to-dark-base/70" />
      <div className="absolute inset-0 bg-black/65" />


      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Label */}
          <span className="label-tag">Contact</span>

          {/* Decorative element */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="sage-line flex-1" />
            <div className="sage-dot" />
            <div className="sage-line flex-1" />
          </div>

          {/* Heading */}
          <h2 className="heading-display text-4xl md:text-6xl text-warm leading-tight">
            Looking for a{" "}
            <span className="text-sage">photographer</span>
            {" "}or videographer?
          </h2>

          {/* Sub text */}
          <p className="text-warm-muted text-base md:text-lg leading-relaxed max-w-xl">
            Let's create something timeless together. We capture emotion, elegance,
            and authenticity in every frame.
          </p>

          {/* Button */}
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-3 px-10 py-4 glass-card-hover text-sage text-sm uppercase tracking-widest font-medium shadow-sage-glow"
          >
            Get in Touch <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;