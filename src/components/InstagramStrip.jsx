import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const images = Array.from({ length: 6 }, (_, i) =>
  `https://picsum.photos/seed/insta${i + 10}/400/400`
);

const InstagramStrip = () => {
  return (
    <section className="relative py-16 bg-gradient-dark overflow-hidden">
      <div className="glow-center" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="label-tag mb-2">Instagram</p>
          <h3 className="font-serif text-2xl text-warm">Follow Our Journey</h3>
          <div className="sage-line w-25 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {images.map((img, idx) => (
            <motion.a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl aspect-square group"
            >
              <img
                src={img}
                alt={`Instagram post ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark-base/0 group-hover:bg-dark-base/50 transition-all duration-400 flex items-center justify-center">
                <FaInstagram className="text-warm text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
              <div className="absolute inset-0 rounded-xl border border-sage/0 group-hover:border-sage/20 transition-colors duration-400 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramStrip;
