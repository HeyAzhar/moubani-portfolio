import { motion } from "framer-motion";
import "./styles.css";

const Navbar = () => {
  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: -10,
      transition: {
        duration: 0.5,
        type: "tween",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className='navbar__container'>
      {/* LOGO */}

      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        className='navbar__logo'
      >
        <motion.h2>M O U B A N I</motion.h2>
      </motion.div>

      {/* MENU */}

      <motion.ul
        initial='hidden'
        animate='visible'
        variants={variants}
        className='navbar__menuList'
      >
        <motion.li variants={variants}>Projects</motion.li>
        <motion.li variants={variants}>UK Studio Practices</motion.li>
        <motion.li variants={variants}>Embrace</motion.li>
        <motion.li variants={variants}>About</motion.li>
        <motion.li variants={variants}>Resume</motion.li>
        <motion.li variants={variants} className='navbar__contactBtn'>
          Contact me
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
