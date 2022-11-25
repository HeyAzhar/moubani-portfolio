import ProjectCard from "../../Components/ProjectCard";
import { useContext } from "react";
import { BlogsContext } from "../../utils/context";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";
import "./styles.css";

const Fmp = () => {
  const blogsData = useContext(BlogsContext);
  const blogs = blogsData.filter((v) => v.type === "fmp");

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
            As a part of my Final project at UAL, I explored the use of smell as
            a design medium and designed a toolkit for expression and creation
            of (collective) memory archives.
          </motion.h1>

          <h3>FINAL MAJOR PROJECT</h3>
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

export default Fmp;
