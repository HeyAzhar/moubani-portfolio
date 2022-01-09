import { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../Components/ProjectCard";
import { motion } from "framer-motion";
import { variants } from "../../utils/animations";
import { BlogsContext } from "../../utils/context";

import "./styles.css";

const Home = () => {
  const blogsData = useContext(BlogsContext);
  const projectBlogs = blogsData.filter(
    (v) => ![...v.categories].includes("ux-studio-practices")
  );
  const uxPracticeBlogs = blogsData.filter((v) =>
    [...v.categories].includes("ux-studio-practices")
  );

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className='home__container'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='home__hero'
      >
        <motion.h1 variants={variants}>Creative Thinker</motion.h1>
        <motion.h1 variants={variants}>Problem Solver</motion.h1>

        <motion.p variants={variants}>
          Hi, I'm{" "}
          <Link
            to='/about'
            style={{ color: "var(--primary)", textDecoration: "none" }}
          >
            Moubani Roy Choudhury
          </Link>
          , a user experience and digital product designer.
        </motion.p>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='home__horizontalLine'
      ></motion.div>

      <div className='home__cardContainer'>
        <Link
          style={{ textDecoration: "none" }}
          onClick={scrollToTop}
          to='projects'
        >
          <h3>Projects</h3>
        </Link>

        <div className='home__cards'>
          {projectBlogs?.slice(0, 4).map((item) => (
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
      </div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='home__horizontalLine'
      ></motion.div>

      <div className='home__cardContainer'>
        <Link
          style={{ textDecoration: "none" }}
          onClick={scrollToTop}
          to='ux-practice'
        >
          <h3>UX Studio Practices</h3>
        </Link>

        <div className='home__cards'>
          {uxPracticeBlogs?.slice(0, 4).map((item) => (
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
      </div>

      <motion.div variants={variants} className='homeFooter__container'>
        <motion.p variants={variants}>
          I also{" "}
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className='noLink'
            to='embrace'
          >
            <b style={{ color: "var(--primary)" }}>embrace</b>
          </Link>{" "}
          branding, designing advertisements and making posters.
        </motion.p>

        <motion.p variants={variants}>
          <Link
            className='noLink'
            onClick={() => window.scrollTo(0, 0)}
            style={{ color: "var(--primary)" }}
            to='embrace'
          >
            see more
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
