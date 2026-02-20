import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import ContactCTA from "../components/ContactCTA";
import InstagramStrip from "../components/InstagramStrip";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import GalleryComponent from "../components/GalleryComponent";
import WaveDivider from "../components/WaveDivider";


const Home = () => {
  return (
    <div className="min-h-screen bg-dark-base overflow-x-hidden">
      <Navbar />
      <Hero />
      <WaveDivider />
      <About />
      <WaveDivider />
      <GalleryComponent />
      <WaveDivider />
      <Service />
      <WaveDivider />
      <ContactCTA />
      <WaveDivider />
      <InstagramStrip />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
