import { useNavigate } from "react-router-dom";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";
import "./styles.css";

const ProjectCard = ({ title, timestamp, thumbnail }) => {
  const navigate = useNavigate();

  const openBlog = () => {
    navigate(`/blog/${title}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={variants}
      onClick={openBlog}
      className='projectCard__container'
    >
      <img className='projectCard__img' src={thumbnail} alt='' />

      <motion.div variants={variants} className='projectCard__header'>
        <h1 variants={variants}>{title}</h1>
        <p variants={variants}>{new Date(timestamp).toDateString()}</p>
      </motion.div>
    </motion.div>
  );
};
export default ProjectCard;
