import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";
import { variants } from "../../utils/animations";
import { BlogsContext } from "../../utils/context";
import { BsArrowRight } from "react-icons/bs";
import DottedBackground from "../../Components/DottedBackground";
import ProjectCard from "../../Components/ProjectCard";
import Self from "../../../Assets/self.svg";

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

  const TEXTS = [
    'Thinker',
    'Designer',
    'Story-Teller'
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

    // TODO: left align 'Hi I'm..'
    // TODO: try 'Image bubble'
    // TODO: left align all instances of see more
    // TODO: Put top arrow next to Go to Top, change font
    // TODO: About page: increase font-weight on links
    // TODO: Change subtitles of cards

  return (
    <div className='home__container'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='home__hero'
      >
        <motion.div className="home__top">
          <motion.div className="home__top__text">
            <motion.h1 variants={variants}>Creative&nbsp;
              <TextTransition
                inline={ true }
                text={ TEXTS[index % TEXTS.length] }
                springConfig={ presets.stiff }
                style= {{ width: "auto" }}
              />
            </motion.h1>
            <motion.h1 variants={variants}>Problem Solver</motion.h1>
            <motion.p variants={variants}>
              Hi, I'm{" "}
              <Link
                to='/about'
                style={{ fontWeight: 500, color: "var(--primary)", textDecoration: "none" }}
              >
                Moubani Roy Choudhury
              </Link>
              , a user experience<span><br/></span> and digital product designer, based in London.
            </motion.p>
          </motion.div>
          <motion.div variants={variants} className='home__meImage' /*data-quote={ TEXTS[index % TEXTS.length] }*/>
            <img className='home__meImage' src={Self} alt='self' />
          </motion.div>
        </motion.div>

        <DottedBackground />
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
          <h3>Recent Projects</h3>
        </Link>

        <div className='home__cards'>
          {projectBlogs?.slice(0, 4).map((item, index) => (
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
        </div>
        <motion.p variants={variants}>
          <Link
            className='noLink seeMore'
            onClick={() => window.scrollTo(0, 0)}
            style={{ color: "var(--primary)", marginBottom: "2em" }}
            to='projects'
          >
            see more <BsArrowRight />
          </Link>
        </motion.p>
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
          {uxPracticeBlogs?.slice(0, 4).map((item, index) => (
            <ProjectCard
              key={item.guid}
              title={item.title}
              thumbnail={item.thumbnail}
              description={item.description}
              content={item.content}
              timestamp={item.pubDate}
              width={Math.floor((index+1)/2)%2? 'wide' : 'narrow'}
            />
          ))}
        </div>
        <motion.p variants={variants}>
          <Link
            className='noLink seeMore'
            onClick={() => window.scrollTo(0, 0)}
            to='ux-practice'
          >
            see more <BsArrowRight />
          </Link>
        </motion.p>
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
            style={{
              display: "flex",
              width: "6.5em",
              justifyContent: "space-between",
              alignItems: "center",
              color: "var(--primary)",
            }}
            onClick={() => window.scrollTo(0, 0)}
            to='embrace'
          >
            see more <BsArrowRight />
          </Link>
        </motion.p>
        <DottedBackground />
      </motion.div>
    </div>
  );
};

export default Home;
