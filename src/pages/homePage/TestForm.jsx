import { motion } from "framer-motion";

const EnglishLevelPage = () => {
  return (
    <div className="grid place-items-center h-screen bg-gray-100 w-screen">
      <div className="max-w-lg text-center flex flex-col justify-center items-center">
        <h1 className="ork text-7xl font-bold w-[1000px]">
          Want to find out your<br />
          English level?
        </h1>
        <p className="ppa mt-10  text-3xl w-[700px] leading-[1.5] text-left">
          By having a better understanding of your
          English level, we ll be able to
          recommend the perfect course to you
        </p>
        <motion.div
        className="btn flex mt-8 py-2 px-4"
        initial={{ opacity: 0, scale: 1, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.66, delay: 2.5 }}
      >
        <button className="ppa hover:underline transition-all text-black font-bold text-lg">
          Learn More
        </button>
        <span className="material-symbols-outlined pl-2">arrow_outward</span>
      </motion.div>
      </div>
    </div>
  );
};

export default EnglishLevelPage;
