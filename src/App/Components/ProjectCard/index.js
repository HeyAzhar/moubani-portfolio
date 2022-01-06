import { useNavigate } from "react-router-dom";
import "./styles.css";

const ProjectCard = ({ title, timestamp, thumbnail }) => {
  const navigate = useNavigate();

  const openBlog = () => {
    navigate(`/blog/${title}`);
    window.scrollTo(0, 0);
  };

  return (
    <div onClick={openBlog} className='projectCard__container'>
      <img className='projectCard__img' src={thumbnail} alt='' />

      <div className='projectCard__header'>
        <h1>{title}</h1>
        <p>{new Date(timestamp).toDateString()}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
