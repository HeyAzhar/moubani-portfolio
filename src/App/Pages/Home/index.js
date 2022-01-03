import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { variants } from "../../utils/animations";
import "./styles.css";

const Home = () => {
  return (
    <div className='home__container'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='home__hero'
      >
        <motion.h1 variants={variants}>Creative Thinker</motion.h1>
        <motion.h1 variants={variants}>Problem Solver</motion.h1>

        <motion.p variants={variants}>
          Hi, I'm <b>Moubani Roy Choudhury</b>, a user experience and digital
          product designer.
        </motion.p>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='home__horizontalLine'
      ></motion.div>

      <motion.div variants={variants} className='homeFooter__container'>
        <motion.p variants={variants}>
          I also <b>embrace</b> branding, designing advertisements and making
          posters.
        </motion.p>

        <motion.p variants={variants}>
          <Link className='noLink' to='projects'>
            see more
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
