import Navbar from "../components/Navbar";
import Shape01 from "../assets/images/shape01.png";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-screen h-screen bg-[#F5F5F5]">
        <motion.img
          initial={{ opacity: 0, scale: 0, x: 200, }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="fixed -right-80 h-full z-10"
          src={Shape01}
          alt="Shape01"
        ></motion.img>
      </div>
    </div>
  );
};

export default Hero;
