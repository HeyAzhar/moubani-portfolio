import Axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const blogUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@roychoudhury-moubani";

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(blogUrl);

      setProjects(result?.data?.items);
    };

    fetchData();
  }, []);

  return (
    <div className='project__container'>
      {projects?.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          description={item.description}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Projects;

const ProjectCard = ({ title, content }) => {
  return (
    <div className='projectCard__container'>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
