import { useContext } from "react";
import { BlogsContext } from "../../utils/context";
import ProjectCard from "../../Components/ProjectCard";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";
import "./styles.css";

const UxPractice = () => {
  const blogsData = useContext(BlogsContext);
  const blogs = blogsData.filter((v) => v.type === "ux");

  return (
    <>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='uxPractice__container'
      >
        <motion.div variants={variants} className='uxPractice__title'>
          <motion.h1 variants={variants}>
            Designing experiences that guide, accommodate, are relevant and
            inclusive, in collaboration with diverse teams.
          </motion.h1>

          <h3>MA UX STUDIO PRACTICES</h3>
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
            width={Math.floor((index - 1) / 2) % 2 ? "wide" : "narrow"}
          />
        ))}
      </motion.div>
    </>
  );
};

export default UxPractice;
