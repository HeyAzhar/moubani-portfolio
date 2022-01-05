import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../Components/ProjectCard";

import { variants } from "../../utils/animations";
import "./styles.css";

const Home = () => {
  const [projectBlogs, setProjectBlogs] = useState([]);
  const [uxPracticeBlogs, setUxPracticeBlogs] = useState([]);

  const projectBlogUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@moubaniroychoudhury";

  const uxPracticeBlogUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@roychoudhury-moubani";

  useEffect(() => {
    const fetchData = async () => {
      const projectResult = await axios(projectBlogUrl);
      const uxPracticeResult = await axios(uxPracticeBlogUrl);

      setProjectBlogs(projectResult?.data?.items);
      setUxPracticeBlogs(uxPracticeResult?.data?.items);
    };

    fetchData();
  }, []);
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
        <h3>Projects</h3>

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
        <h3>UX Studio Practices</h3>

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
          I also <b style={{ color: "var(--primary)" }}>embrace</b> branding,
          designing advertisements and making posters.
        </motion.p>

        <motion.p variants={variants}>
          <Link
            className='noLink'
            style={{ color: "var(--primary)" }}
            to='projects'
          >
            see more
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
