import Shape04 from "../assets/images/Shape04.png";
import { motion } from "framer-motion";
import Student01 from "../assets/images/Student01.png"

const Hero = () => {
  return (
    <div className="p-0 m-0">
      <div className="relative flex flex-col w-screen h-screen bg-[#F5F5F5]">
        {/* Background Image */}
        <div className="opacity-60">
          <motion.img
            initial={{ opacity: 0, scale: 1, x: 200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.33, delay: 0.5 }}
            className="absolute top-0 right-0 h-full z-0"
            src={Shape04}
            alt="Shape01"
          />
          <img className="absolute bottom-0 left-0 h-[500px]" src={Student01}/>
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
              className="ppa mt-10 text-3xl w-[700px] leading-[1.5]"
            >
              We empower students to achieve their goals with{" "}
              <span className="underline">confidence and purpose.</span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
