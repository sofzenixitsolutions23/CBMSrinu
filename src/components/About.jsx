import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image19 from "../assets/image19.jpg";
import image20 from "../assets/image20.webp";

const About = () => {
  return (
    <section className="relative py-28 overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(150 32% 5%) 0%, hsl(150 28% 8%) 40%, hsl(152 30% 6%) 100%)"
    }}>
      {/* Multi-layered radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 60% at -10% 30%, hsl(153 35% 45% / 0.18) 0%, transparent 60%)"
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 50% 50% at 110% 70%, hsl(153 30% 40% / 0.12) 0%, transparent 60%)"
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 40% 30% at 50% 0%, hsl(153 25% 35% / 0.08) 0%, transparent 60%)"
      }} />

      {/* Floating orb */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(153 40% 45% / 0.08) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />

      {/* Diagonal light streak */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[600px] h-[2px] rotate-[30deg] origin-left" style={{
          background: "linear-gradient(90deg, transparent, hsl(153 30% 55% / 0.5), transparent)"
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT — stacked images */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 rounded-full pointer-events-none" style={{
            background: "radial-gradient(circle at 40% 50%, hsl(153 35% 45% / 0.2) 0%, transparent 60%)",
            filter: "blur(30px)"
          }} />

          {/* Decorative rings */}
          <div className="absolute top-4 left-4 w-72 h-72 md:w-80 md:h-80 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute top-8 left-8 w-64 h-64 md:w-72 md:h-72 rounded-full border border-white/50 pointer-events-none" />

          {/* Large image */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-image-depth border-2 border-sage/25">
            <img src={image19} className="w-full h-full object-cover scale-150" />
            <div className="absolute inset-0 rounded-full" style={{
              boxShadow: "inset 0 0 50px hsl(150 40% 3% / 0.6)"
            }} />
          </div>

          {/* Small overlapping image */}
          <div className="absolute -bottom-6 -right-4 md:right-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-image-depth border-2 border-sage/25"
            style={{ background: "hsl(var(--dark-base))" }}>
            <img src={image20} className="w-full h-full object-cover scale-140" />
            <div className="absolute inset-0 rounded-full" style={{
              boxShadow: "inset 0 0 30px hsl(150 40% 3% / 0.5)"
            }} />
          </div>

          
        </motion.div>

        {/* RIGHT — content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <p className="label-tag">About Us</p>

          <h2 className="heading-display text-4xl md:text-5xl text-warm leading-tight">
            Fascinating Clicks <br />
            <span className="text-sage">by Mr. Srinu</span>
          </h2>

          <div className="sage-line w-16" />

          <p className="text-warm-muted text-lg leading-relaxed font-light">
            We capture the little moments you'll treasure for a lifetime.
          </p>

          <p className="text-warm-muted leading-relaxed">
            Enter a space where every look, smile, and fleeting moment becomes a
            lasting memory. Combining candid moments with creative artistry, our
            team transforms your wedding day into a stunning visual experience.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 glass-card-hover text-sage text-sm uppercase tracking-widest font-medium"
            >
              Contact Us
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
