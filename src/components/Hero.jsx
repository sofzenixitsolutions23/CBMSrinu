import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hero4 from "../assets/hero4.png";;

const slides = ["Wedding Photography", "Modeling Photography", "Kids Photography"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <img
        src={hero4}
        alt="Wedding photography hero"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.45) saturate(0.8)" }}
      />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base/60 via-dark-base/20 to-dark-base/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-base/70 via-transparent to-dark-base/50" />

      {/* Radial sage glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 40%, hsl(153 30% 45% / 0.14) 0%, transparent 70%)"
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 vignette pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center pt-25 px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="label-tag mb-8"
        >
          Fascinating Clicks by Mr. Srinu
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="heading-display text-5xl md:text-7xl text-warm mb-4"
        >
          We Create
        </motion.h1>

        {/* Animated changing text */}
        <div className="h-14 md:h-20 mb-6 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="heading-display text-3xl md:text-5xl text-sage absolute"
            >
              {slides[current]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-warm-muted text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Elegant storytelling crafted with emotion, artistry and timeless beauty.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="sage-line w-24 mx-auto mb-10"
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-9 py-4 glass-card text-sage text-sm uppercase tracking-widest font-medium hover:bg-sage/10 hover:border-sage/35 transition-all duration-350"
          >
            Explore Our Work
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-sage/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;
