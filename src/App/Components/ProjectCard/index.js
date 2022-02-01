import { useNavigate } from "react-router-dom";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";
import cards from '../../../Assets/Cards';
import "./styles.css";

const ProjectCard = ({ title, timestamp, thumbnail, ...props }) => {
  const navigate = useNavigate();

  const openBlog = () => {
    navigate(`/blog/${title}`);
    window.scrollTo(0, 0);
  };

  const width = props.width && (
    props.width === 'wide' ? '40em': '24em'
  );

  Object.keys(cards).every(elem =>{
    if (title.toLowerCase().indexOf(cards[elem].text.toLowerCase()) !== -1){
      thumbnail = cards[elem].data;
      return false;
    }
    else 
      return true;
  });

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={variants}
      onClick={openBlog}
      className='projectCard__container'
      style = {{width: width}}
      whileHover={{
        scale: 1.02,
        transition: { 
          duration: 0.1
        },
      }}
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
