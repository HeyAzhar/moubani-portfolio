import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";

import logo from "../../../Assets/logo.svg";
import "./styles.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    window.scrollTo(0, 0);
    setToggle(!toggle);
  };

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
        <Link className='noLink' to='/'>
          <img
            onClick={() => {
              window.scrollTo(0, 0);
              setToggle(false);
            }}
            className='navbar__logoImg'
            alt=''
            src={logo}
          />
        </Link>
      </motion.div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        className='navbar__menuIcon'
        onClick={handleToggle}
      >
        {toggle ? <CgClose /> : <CgMenuRight />}
      </motion.div>

      {/* MENU */}

      <motion.ul
        initial='hidden'
        animate='visible'
        variants={variants}
        className={
          toggle ? "showNav navbar__menuList" : "hideNav navbar__menuList"
        }
      >
        <motion.li onClick={handleToggle} variants={variants}>
          <NavLink onClick={scrollToTop} className='noLink' to='projects'>
            PROJECTS
          </NavLink>
        </motion.li>
        <motion.li onClick={handleToggle} variants={variants}>
          <NavLink onClick={scrollToTop} className='noLink' to='ux-practice'>
            UX&nbsp;STUDIO
          </NavLink>
        </motion.li>
        <motion.li onClick={handleToggle} variants={variants}>
          <NavLink onClick={scrollToTop} className='noLink' to='embrace'>
            EMBRACE
          </NavLink>
        </motion.li>
        <motion.li onClick={handleToggle} variants={variants}>
          <NavLink onClick={scrollToTop} className='noLink' to='about'>
            ABOUT
          </NavLink>
        </motion.li>
        <motion.li
          onClick={handleToggle}
          variants={variants}
          className='navbar__contactBtn'
        >
          <a
            onClick={scrollToTop}
            className='noLink'
            rel='noreferrer'
            href='https://moubani.com/resume.pdf'
            target={"_blank"}
          >
            RESUME
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Navbar;

const NavLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link style={{ fontWeight: match ? "700" : "300" }} to={to} {...props}>
      {children}
    </Link>
  );
};
