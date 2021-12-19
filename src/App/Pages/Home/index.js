import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: -10,
      transition: {
        duration: 0.5,
        type: "tween",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

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

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={variants}
        className='home__footer'
      >
        <motion.p variants={variants}>
          I also <b>embrace</b> branding, designing advertisements and making
          posters.
        </motion.p>

        <motion.p variants={variants}>
          <Link className='noLink' to='/'>
            see more
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
