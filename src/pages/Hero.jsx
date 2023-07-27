import Navbar from "../components/Navbar";
import Shape01 from "../assets/images/shape01.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <Navbar />

      <div className="relative flex flex-col w-screen h-screen bg-[#F5F5F5]">
        {/* Background Image */}
        <div className="opacity-50">
          <motion.img
            initial={{ opacity: 0, scale: 1, x: 200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.33, delay: 0.5 }}
            className="absolute top-0 right-[-300px] h-full z-0"
            src={Shape01}
            alt="Shape01"
          />
        </div>

        <div className="w-full h-full z-10 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, scale: 1, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.66, delay: 1.5 }}
            className="ork text-7xl font-bold"
          >
            Your Gateway to{" "}
            <span className="ppa text-7xl">Exceptional English</span>
          </motion.h1>
          <div>
            {/* va por afuera este div, sacarlo luego */}
            <motion.p
              initial={{ opacity: 0, scale: 1, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.66, delay: 2 }}
              className="ppa mt-10 text-3xl"
            >
              At IACI, we Empower our students through English Education.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
