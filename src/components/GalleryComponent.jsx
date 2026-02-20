import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.webp";
import image15 from "../assets/image15.webp";
import image16 from "../assets/image16.jpg";
import image17 from "../assets/image17.jpg";
import image18 from "../assets/image18.webp";

const galleryItems = [
  { id: 1, src: image14, category: "Wedding",  caption: "Reception Glow", aspect: "4/5" },
  { id: 2, src: image15,  category: "Wedding",  caption: "Golden Day", aspect: "4/3" },
  { id: 3, src: image16,  category: "Modeling", caption: "Studio elegance", aspect: "3/4" },
  { id: 4, src: image17,  category: "Kids", caption: "Pure joy", aspect: "1/1" },
  { id: 5, src: image18, category: "Kids",  caption: "Little Happiness", aspect: "7/5" },
  { id: 6, src: image13, category: "Modeling", caption: "Bold pose", aspect: "4/5" },
];

const categories = ["All", "Wedding", "Modeling", "Kids"];

const GalleryComponent = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <section className="relative py-28 bg-gradient-section overflow-hidden">
      <div className="glow-top" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="label-tag mb-4">Portfolio</p>
          <h2 className="heading-display text-4xl md:text-5xl text-warm mb-5">
            Captured <span className="text-sage">Moments</span>
          </h2>
          <div className="sage-line w-20 mx-auto" />
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer px-6 py-2.5 text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "glass-card border-sage/40 text-sage shadow-sage-glow"
                  : "border border-transparent text-warm-muted hover:text-warm hover:border-sage/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="columns-2 md:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.45 }}
                className="relative overflow-hidden rounded-xl break-inside-avoid group cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ aspectRatio: item.aspect }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 overlay-dark opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                  <span className="label-tag text-[9px] mb-1">{item.category}</span>
                  <span className="font-serif text-warm text-base">{item.caption}</span>
                </div>
                <div className="absolute inset-0 rounded-xl border border-sage/0 group-hover:border-sage/20 transition-colors duration-400 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-9 py-4 glass-card-hover text-sage text-sm uppercase tracking-widest font-medium"
          >
            View Full Gallery <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryComponent;
