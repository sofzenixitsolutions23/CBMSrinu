import { motion } from "framer-motion";
import image21 from "../assets/image21.webp";

const OurStory = () => {
  return (
    <section className="relative py-28 overflow-hidden" style={{
      background: "linear-gradient(180deg, hsl(150 30% 5%) 0%, hsl(152 26% 9%) 50%, hsl(150 30% 5%) 100%)"
    }}>
      {/* Central glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 75% 65% at 50% 50%, hsl(153 32% 42% / 0.15) 0%, hsl(153 25% 35% / 0.04) 50%, transparent 70%)"
      }} />

      {/* Top-right accent */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 45% 40% at 95% 5%, hsl(153 35% 45% / 0.12) 0%, transparent 60%)"
      }} />

      {/* Bottom-left accent */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 45% 40% at 5% 95%, hsl(153 30% 40% / 0.1) 0%, transparent 60%)"
      }} />

      {/* Animated floating orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(153 35% 42% / 0.07) 0%, transparent 70%)",
          filter: "blur(70px)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* Image with depth effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-image-depth"
        >
          {/* Glow behind the image frame */}
          <div className="absolute -inset-4 rounded-3xl pointer-events-none" style={{
            background: "radial-gradient(ellipse 80% 80% at 50% 50%, hsl(153 35% 42% / 0.18) 0%, transparent 70%)",
            filter: "blur(20px)"
          }} />

          <img
            src={image21}
            alt="Our story — wedding ceremony"
            className="w-full h-80 md:h-[420px] object-cover relative scale-150"
          />
          {/* Sage frame border */}
          <div className="absolute inset-0 rounded-2xl border border-sage/20 pointer-events-none" />
          {/* Inner vignette */}
          <div className="absolute inset-0 pointer-events-none" style={{boxShadow: "inset 0 0 80px hsl(150 40% 3% / 0.25)"}} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <p className="label-tag">Our Story</p>

          <h2 className="heading-display text-4xl md:text-5xl text-warm leading-tight">
            We believe every moment deserves to be remembered{" "}
            <span className="text-sage">beautifully.</span>
          </h2>

          <div className="sage-line w-16" />

          <p className="text-warm-muted leading-relaxed">
            Photography for us is not just capturing images — it is about
            preserving emotions, love, and memories that last beyond generations.
            With a cinematic and artistic approach, we craft stories that feel alive.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { value: "10+", label: "Weddings" },
              { value: "2+",   label: "Years" },
              { value: "1K+", label: "Photos" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(153 30% 50% / 0.1) 0%, transparent 70%)"
                }} />
                <div className="font-serif text-2xl text-sage relative z-10">{stat.value}</div>
                <div className="label-tag mt-1 text-[9px] relative z-10">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
