import { useContext } from "react";
import { BlogsContext } from "../../utils/context";
import ProjectCard from "../../Components/ProjectCard";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";
import "./styles.css";

const UxPractice = () => {
  const blogsData = useContext(BlogsContext);
  const blogs = blogsData.filter((v) =>
    [...v.categories].includes("ux-studio-practices")
  );

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
            At the{" "}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.arts.ac.uk/about-ual/press-office/stories/ual-ranked-2nd-in-the-world-for-art-and-design-in-QS-world-university-rankings-2020-by-subject'
            >
              University of the Arts London
            </a>
            , we worked on various collaborative projects.
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
            width={Math.floor((index-1)/2)%2? 'wide' : 'narrow'}
          />
        ))}
      </motion.div>
    </>
  );
};

export default UxPractice;
