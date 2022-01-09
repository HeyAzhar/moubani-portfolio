import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../../../Assets/logo.svg";
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

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className='navbar__container'>
      {/* LOGO */}

      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        className='navbar__logo'
      >
        <Link onClick={scrollToTop} className='noLink' to='/'>
          <img className='navbar__logoImg' alt='' src={logo} />
        </Link>
      </motion.div>

      {/* MENU */}

      <motion.ul
        initial='hidden'
        animate='visible'
        variants={variants}
        className='navbar__menuList'
      >
        <motion.li variants={variants}>
          <Link onClick={scrollToTop} className='noLink' to='projects'>
            Projects
          </Link>
        </motion.li>
        <motion.li variants={variants}>
          <Link onClick={scrollToTop} className='noLink' to='ux-practice'>
            UX Studio Practices
          </Link>
        </motion.li>
        <motion.li variants={variants}>
          <Link onClick={scrollToTop} className='noLink' to='embrace'>
            Embrace
          </Link>
        </motion.li>
        <motion.li variants={variants}>
          <Link onClick={scrollToTop} className='noLink' to='about'>
            About
          </Link>
        </motion.li>
        <motion.li variants={variants} className='navbar__contactBtn'>
          <a
            onClick={scrollToTop}
            className='noLink'
            rel='noreferrer'
            href='https://moubani.com/resume.pdf'
            target={"_blank"}
          >
            Resume
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
