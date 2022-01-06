import ProjectCard from "../../Components/ProjectCard";
import Footer from "../../Components/Footer";
import "./styles.css";
import { useContext } from "react";
import { BlogsContext } from "../../utils/context";

const Projects = () => {
  const blogsData = useContext(BlogsContext);
  const blogs = blogsData.filter(
    (v) => ![...v.categories].includes("ux-studio-practices")
  );

  return (
    <>
      <div className='project__container'>
        <div className='project__title'>
          <h1>
            Taking briefs to collaborating, ideating on the paper to presenting
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
