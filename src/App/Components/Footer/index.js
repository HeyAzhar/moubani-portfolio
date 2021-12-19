import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  );
};

export default Footer;
