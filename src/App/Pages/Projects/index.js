import ProjectCard from "../../Components/ProjectCard";
import Footer from "../../Components/Footer";
import { useContext } from "react";
import { BlogsContext } from "../../utils/context";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";
import "./styles.css";

const Projects = () => {
  const blogsData = useContext(BlogsContext);
  const blogs = blogsData.filter(
    (v) => ![...v.categories].includes("ux-studio-practices")
  );

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
      </motion.div>
      <Footer />
    </>
  );
};

export default Projects;
