import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-base/90 backdrop-blur-md border-b border-sage/10 shadow-sage-card"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <img 
            src={logo}
            className="h-15 md:h-20 object-contain"
          />
          <span className="hidden sm:block font-serif text-lg tracking-wide text-warm">
            CBMS
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `nav-link text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${
                  isActive ? "text-sage nav-link-active" : "text-warm-muted hover:text-warm"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-warm-muted hover:text-sage transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-card border-t border-sage/10 mx-4 mb-4 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-8 py-4 text-sm uppercase tracking-widest transition-colors ${
                      isActive ? "text-sage" : "text-warm-muted hover:text-warm"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
