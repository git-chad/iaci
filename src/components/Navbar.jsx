import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogoSmall from "../assets/images/LogoSmall.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-8 z-50">
      <div className="max-w-[1376px] mx-auto flex items-center justify-between">
        <Link to="/">
        <div  className="logo-container cursor-pointer">
          <img src={LogoSmall}></img>
          <h1 className="ork text-2xl font-bold">IACI</h1>
        </div>
        </Link>
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
          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.15 }}>
            <Link to= "/Highlights">Highlights</Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
