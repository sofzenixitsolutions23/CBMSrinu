import OurStory from "../components/OurStory"
import WhyChooseUs from "../components/WhyChooseUs"
import ContactCTA from "../components/ContactCTA"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import WhatsAppButton from "../components/WhatsAppButton"
import {motion} from "framer-motion"
import WaveDivider from "../components/WaveDivider"


const About = () => {
    return (
        <div className="min-h-screen bg-dark-base overflow-x-hidden">
          <Navbar />

          {/* Page Hero */}
          <section className="relative pt-36 pb-24 bg-gradient-hero overflow-hidden">
            <div className="glow-top" />
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="label-tag mb-5"
              >
                Our Story
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="heading-display text-5xl md:text-7xl text-warm mb-6"
              >
                About <span className="text-sage">Us</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-warm-muted text-lg max-w-xl mx-auto"
              >
                Crafting Timeless Stories — one moment at a time.
              </motion.p>
              <div className="sage-line w-20 mx-auto mt-8" />
            </div>
          </section>
          <WaveDivider />
          <OurStory />
          <WaveDivider />
          <WhyChooseUs />
          <WaveDivider flip={true} />
          <ContactCTA />
          <WaveDivider />
          <Footer />
          <WhatsAppButton />
        </div>
    )
}

export default About;