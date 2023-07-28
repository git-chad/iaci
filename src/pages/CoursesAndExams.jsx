import { useState, useEffect } from "react";
import Shape02 from "../assets/images/Shape02.png";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Function to switch pages after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage === 0 ? 1 : 0));
    }, 8000);

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
      <motion.button
        initial={{ opacity: 0, scale: 1, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.66, delay: 2.5 }}
        className="ppa mt-10  hover:underline transition-all text-black font-bold py-2 px-4"
      >
        Learn More
      </motion.button>
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
        English & American Courses.
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
      <motion.button
        initial={{ opacity: 0, scale: 1, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.66, delay: 2.5 }}
        className="ppa mt-10  hover:underline transition-all text-black font-bold py-2 px-4"
      >
        Learn More
      </motion.button>
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
