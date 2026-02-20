import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  { icon: FaPhoneAlt, label: "Phone",    value: "+91 98765 43210" },
  { icon: FaEnvelope, label: "Email",    value: "studio@cbsm.com" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Hyderabad, India — Available Worldwide" },
];

const ContactForm = () => {
  return (
    <section className="relative py-28 bg-gradient-section overflow-hidden">
      {/* Glows */}
      <div className="glow-top" />
      <div className="glow-bottom-right" />

      {/* Soft warm background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 20% 80%, hsl(40 30% 40% / 0.05) 0%, transparent 60%)"
      }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="label-tag mb-4">Contact</p>
          <h2 className="heading-display text-4xl md:text-5xl text-warm">
            Let's Create Something{" "}
            <span className="text-sage">Beautiful Together</span>
          </h2>
          <div className="sage-line w-20 mx-auto mt-5" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="glass-card p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-sage flex-shrink-0">
                  <item.icon size={16} />
                </div>
                <div>
                  <p className="label-tag text-[9px] mb-1">{item.label}</p>
                  <p className="text-warm text-sm leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass-card p-8 flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="glass-input px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300 w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="glass-input px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300 w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Event Type (Wedding / Modeling / Kids)"
              className="glass-input px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300 w-full"
            />

            <textarea
              rows={4}
              placeholder="Tell us about your vision..."
              className="glass-input px-5 py-3.5 rounded-xl text-sm focus:outline-none transition-all duration-300 w-full resize-none"
            />

            <button
              type="submit"
              className="cursor-pointer mt-2 w-full py-4 rounded-xl bg-sage/15 hover:bg-sage/25 border border-sage/25 hover:border-sage/50 text-sage text-sm uppercase tracking-widest font-medium transition-all duration-350 shadow-sage-card"
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
