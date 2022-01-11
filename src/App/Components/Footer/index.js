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
      <div>
        <a
          className='footer__resume'
          rel='noreferrer'
          href='https://moubani.com/resume.pdf'
          target='_blank'
        >
          Resume
        </a>
        <a
          className='noLink'
          style={{ color: "var(--dark)" }}
          href='mailto:roychoudhury.moubani@gmail.com'
        >
          Contact me
        </a>
        <button onClick={() => window.scrollTo(0, 0)}>Go to top</button>
      </div>
      <p style={{ color: "var(--grey)" }}>
        Copyrights reserved &copy; {new Date().getFullYear()} By Moubani
      </p>
    </motion.div>
  );
};

export default Footer;
