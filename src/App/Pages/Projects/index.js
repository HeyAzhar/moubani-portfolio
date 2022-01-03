import { useContext } from "react";
import ProjectCard from "../../Components/ProjectCard";
import Footer from "../../Components/Footer";
import { BlogsContext } from "../../utils/context";
import "./styles.css";

const Projects = () => {
  const blogs = useContext(BlogsContext);

  console.log({ blogs });

  return (
    <>
      <div className='project__container'>
        <div className='project__title'>
          <h1>
            Taking briefs to collaborating, ideating on the paper presenting
            final projects, I thoroughly{" "}
            <span>enjoy every step of the process</span>
          </h1>

          <h3>Projects</h3>
        </div>

        {blogs?.map((item) => (
          <ProjectCard
            key={item.guid}
            title={item.title}
            thumbnail={item.thumbnail}
            description={item.description}
            content={item.content}
            timestamp={item.pubDate}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
