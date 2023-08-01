import { motion } from "framer-motion";
import LogoSmall from "../assets/images/LogoSmall.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-8 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="logo-container">
          <img src={LogoSmall}></img>
          <h1 className="ork text-2xl font-bold">IACI</h1>
        </div>
        <ul className="ppa flex space-x-10 text-2xl font-semibold cursor-pointer">
          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
            Courses
          </motion.li>
          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
            Exams
          </motion.li>
          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
            Travel
          </motion.li>
          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
            About
          </motion.li>
          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
            Contact
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
