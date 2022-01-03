import "./styles.css";

const ProjectCard = ({ title, timestamp, thumbnail }) => {
  return (
    <div className='projectCard__container'>
      <img className='projectCard__img' src={thumbnail} alt='' />

      <div className='projectCard__header'>
        <h1>{title}</h1>
        <p>{new Date(timestamp).toDateString()}</p>
      </div>

      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </div>
  );
};
export default ProjectCard;
