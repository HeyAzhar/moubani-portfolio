import { motion } from "framer-motion";
import Footer from "../../Components/Footer";

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

      <Footer />
    </div>
  );
};

export default Home;
