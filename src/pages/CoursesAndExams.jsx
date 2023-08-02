import { useState, useEffect } from "react";
import Shape02 from "../assets/images/Shape02.png";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  // switch pages automatic timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage === 0 ? 1 : 0));
    }, 20000); // 20 secs

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative snap-child w-screen h-screen bg-[#F5F5F5]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children[currentPage]}
      <div className="absolute top-4 left-4 flex space-x-2">
        <motion.button
          onClick={() => changePage(0)}
          className={`ppa text-xl px-3 py-2 ${
            currentPage === 0 ? "text-[#AB364D]" : "text-black"
          }`}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.15 }}
        >
          Courses
        </motion.button>
        <motion.button
          onClick={() => changePage(1)}
          className={`ppa text-xl px-3 py-2 ${
            currentPage === 1 ? "text-[#AB364D]" : "text-black"
          }`}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.15 }}
        >
          Exams
        </motion.button>
      </div>
    </motion.div>
  );
};

const CoursesPage = () => {
  return (
    <div className="w-full h-full z-10 flex flex-col justify-center items-center">
      <div className="opacity-60">
        <img
          className="absolute top-0 left-0 h-full z-0"
          src={Shape02}
          alt="Shape02"
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 1, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.66, delay: 1.5 }}
        className="ork text-7xl font-bold"
      >
        Courses for All Levels.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.66, delay: 2 }}
        className="ppa z-10 mt-10 text-3xl w-[700px] leading-[1.5]"
      >
        From kindergarten to company trainings, we help our students achieve
        theirspecific objectives through our varied courses.
      </motion.p>

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
  );
};

const ExamsPage = () => {
  return (
    <div className="w-full h-full z-10 flex flex-col justify-center items-center">
      <div className="opacity-60">
        <img
          className="absolute top-0 left-0 h-full z-0"
          src={Shape02}
          alt="Shape02"
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 1, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.66, delay: 1.5 }}
        className="ork text-7xl font-bold"
      >
        English & American Exams.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 1, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.66, delay: 2 }}
        className="ppa z-10 mt-10 text-3xl w-[700px] leading-[1.5]"
      >
        Not only we offer guidance and preparation for all Brittish exams, we
        can also help you get top grades at American exams such as TOEFL or
        IELTS.
      </motion.p>
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
  );
};

const CoursesAndExams = () => {
  return (
    <PageTransition>
      <CoursesPage />
      <ExamsPage />
    </PageTransition>
  );
};

export default CoursesAndExams;
