import Shape02 from "../assets/images/shape02.png";
import { motion } from "framer-motion";
import StudentGroup03 from "../assets/images/StudentGroup03.png";

const HeroAlt = () => {
  return (
    <div className="relative p-0 m-0 flex items-center justify-center w-screen h-screen bg-[#F5F5F5]">
      <img className="absolute opacity-50 left-0 bottom-0 h-full" src={Shape02} />

      <div className="flex max-w-[1376px] w-full h-screen">
        <div className="z-10 side1 flex flex-col h-screen w-[40%] p-2 justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, scale: 1, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.66, delay: 1.5 }}
            className="ork text-7xl font-bold w-[600px]"
          >
            Your Gateway to{" "}
            <span className="ppa text-7xl">Exceptional English</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 1, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.66, delay: 2 }}
            className="ppa mt-10 text-3xl w-[600px] leading-[1.5]"
          >
            We empower students to achieve their goals with{" "}
            <span className="underline">confidence and purpose.</span>
          </motion.p>
        </div>
        <div className="side2 flex flex-col h-screen w-[60%] p-2 justify-center items-center">
          <div className="relative flex justify-center bg-[#AB364D] rounded-b-3xl rounded-tl-full">
            <img src={StudentGroup03} className="w-[90%]" alt="Student Group" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAlt;
