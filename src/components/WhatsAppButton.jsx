import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "919268637583"; 


  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg">
            <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30"></span>
          <FaWhatsapp size={26} className="relative" />
        </div>

    </motion.a>
  );
};

export default WhatsAppButton;
