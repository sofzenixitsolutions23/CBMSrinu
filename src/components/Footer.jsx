import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-footer pt-20 pb-8 px-6 overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/30 to-transparent" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl text-warm mb-4">CBMS</h2>
          <div className="sage-line w-12 mb-4" />
          <p className="text-warm-muted text-sm leading-relaxed">
            Capturing timeless stories through cinematic photography and
            artistic storytelling. Based in India, available worldwide.
          </p>
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-warm-muted hover:text-sage hover:border-sage/30 transition-all duration-300"
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="label-tag mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About", "Gallery", "Contact"].map((label) => (
              <li key={label}>
                <NavLink
                  to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className="text-warm-muted text-sm hover:text-sage transition-colors duration-300"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="label-tag mb-5">Services</h3>
          <ul className="space-y-3 text-warm-muted text-sm">
            {["Wedding Photography", "Pre-Wedding Shoots", "Modeling Photography", "Kids Photography"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="label-tag mb-5">Contact</h3>
          <ul className="space-y-3 text-warm-muted text-sm">
            <li>studio@cbsm.com</li>
            <li>+91 98765 43210</li>
            <li>Hyderabad, India</li>
            <li className="text-sage/80">Available Worldwide</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="sage-line mb-6" />
      <p className="text-center text-warm-muted text-xs tracking-widest">
        © {new Date().getFullYear()} CBMS. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
