import ProjectCard from "../../Components/ProjectCard";
import { useContext } from "react";
import { BlogsContext } from "../../utils/context";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";
import "./styles.css";

const Projects = () => {
  const blogsData = useContext(BlogsContext);
  const blogs = blogsData.filter((v) => v.type === "project");

  return (
    <>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='project__container'
      >
        <motion.div variants={variants} className='project__title'>
          <motion.h1 variants={variants}>
            Taking briefs to collaborating, ideating on the paper to presenting
            final projects, I thoroughly{" "}
            <span>enjoy every step of the process.</span>
          </motion.h1>

          <h3>Projects</h3>
        </motion.div>

        {blogs?.map((item, index) => (
          <ProjectCard
            key={item.guid}
            title={item.title}
            thumbnail={item.thumbnail}
            description={item.description}
            content={item.content}
            timestamp={item.pubDate}
            subtitle={/(?:<.+?>)([^<>]*?)(?:<\/.*?>)/g.exec(item.content)[1]}
            width={Math.floor((index + 1) / 2) % 2 ? "wide" : "narrow"}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
