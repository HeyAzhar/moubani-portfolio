import { motion } from "framer-motion";

import { variants } from "../../utils/animations";
import "./styles.css";

const Footer = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={variants}
      className='footer__container'
    >
      <a
        className='footer__resume'
        rel='noreferrer'
        href='https://moubani.com/resume.pdf'
        target='_blank'
      >
        Resume
      </a>
      <a className='noLink' href='mailto:roychoudhury.moubani@gmail.com'>
        Contact me
      </a>
      <button onClick={() => window.scrollTo(0, 0)}>Go to top</button>
    </motion.div>
  );
};

export default Footer;
