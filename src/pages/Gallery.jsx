import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WaveDivider from "../components/WaveDivider";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import image15 from "../assets/image15.webp";
import image22 from "../assets/image22.jpg";
import image23 from "../assets/image23.webp";
import image24 from "../assets/image24.webp";
import image26 from "../assets/image26.jpg";
import image27 from "../assets/image27.webp";
import image28 from "../assets/image28.jpg";
import image29 from "../assets/image29.jpg";
import image30 from "../assets/image30.webp";
import image31 from "../assets/image31.webp";
import image32 from "../assets/image32.webp";
import image33 from "../assets/image33.jpg";

const galleryItems = [
  { id: 1, src: image15, category: "Weddings", caption: "Golden hour vows", aspect: "4/5"  },
  { id: 2, src: image24, category: "Weddings", caption: "Better Together", aspect: "4/3"  },
  { id: 3, src: image29, category: "Modeling", caption: "Studio elegance", aspect: "3/4"  },
  { id: 4, src: image30, category: "Kids", caption: "Pure joy", aspect: "1/1" },
  { id: 5, src: image33, category: "Weddings", caption: "Bridal glow", aspect: "7/5"  },
  { id: 6, src: image28, category: "Modeling", caption: "Bold pose", aspect: "4/5"  },
  { id: 7, src: image31, category: "Kids", caption: "Innocent laughter", aspect: "1/1"  },
  { id: 8, src: image23, category: "Weddings", caption: "Twilight ceremony", aspect: "7/10" },
  { id: 9, src: image27, category: "Modeling", caption: "Natural light editorial", aspect: "10/7" },
  { id: 10, src: image32, category: "Kids", caption: "Curious explorer", aspect: "3/4"  },
  { id: 11, src: image22, category: "Weddings", caption: "Bridal portrait", aspect: "8/11" },
  { id: 12, src: image26, category: "Modeling", caption: "Fashion edge", aspect: "2/3"  },
];

const categories = ["All", "Weddings", "Modeling", "Kids"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  const lightboxSlides = filtered.map((item) => ({ src: item.src, alt: item.caption }));

  return (
    <div className="min-h-screen bg-dark-base overflow-x-hidden">
      <Navbar />

      {/* Page hero */}
      <section className="relative pt-36 pb-20 bg-gradient-hero overflow-hidden">
        <div className="glow-top" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="label-tag mb-5"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="heading-display text-5xl md:text-7xl text-warm mb-6"
          >
            Our <span className="text-sage">Gallery</span>
          </motion.h1>
          <div className="sage-line w-20 mx-auto mt-4" />
        </div>
      </section>

      <WaveDivider />

      <section className="relative py-20 bg-gradient-section overflow-hidden">
        <div className="glow-top" />
        <div className="max-w-7xl mx-auto px-6">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-7 py-3 text-xs uppercase tracking-widest font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "glass-card border-sage/40 text-sage shadow-sage-glow"
                    : "border border-transparent text-warm-muted hover:text-warm hover:border-sage/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <AnimatePresence>
            <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.45, delay: idx * 0.04 }}
                  className="relative overflow-hidden rounded-xl break-inside-avoid group cursor-pointer"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className={`w-full object-cover transition-transform duration-700
                        ${item.id === 9 ? "scale-130 group-hover:scale-135" : "group-hover:scale-105"}
                    `}
                    style={{ aspectRatio: item.aspect }}
                  />
                  <div className="absolute inset-0 overlay-dark opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
                    <span className="label-tag text-[9px] mb-1">{item.category}</span>
                    <span className="font-serif text-warm text-sm">{item.caption}</span>
                  </div>
                  <div className="absolute inset-0 rounded-xl border border-sage/0 group-hover:border-sage/25 transition-colors duration-400 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-warm-muted py-20">
              More timeless stories coming soon...
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />

      <WaveDivider flip />
      <Footer />
    </div>
  );
};

export default Gallery;
