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
import {
  AiOutlineLinkedin,
  AiOutlineBehanceSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

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

  const TEXTS = ["Thinker", "Designer", "Story-Teller"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
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
        <motion.div className='home__top'>
          <motion.div className='home__top__text'>
            <motion.h1 variants={variants}>
              Creative&nbsp;
              <TextTransition
                inline={true}
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.stiff}
                style={{ width: "auto" }}
              />
            </motion.h1>
            <motion.h1 variants={variants}>Problem Solver</motion.h1>
            <motion.p variants={variants}>
              I'm{" "}
              <Link
                to='/about'
                style={{
                  fontWeight: 500,
                  color: "var(--primary)",
                  textDecoration: "none",
                }}
              >
                Moubani
              </Link>
              , a Product Designer, passionate about understanding people and
              connecting their stories with meaningful experiences through
              diverse mediums- be it{" "}
              <Link
                to='/digital'
                style={{
                  fontWeight: 500,
                  color: "var(--primary)",
                  textDecoration: "none",
                }}
              >
                digital
              </Link>{" "}
              ,{" "}
              <Link
                to='/experiential'
                style={{
                  fontWeight: 500,
                  color: "var(--primary)",
                  textDecoration: "none",
                }}
              >
                physical
              </Link>
              , or virtual.
              <br />
              <br />
              Before transitioning to UX, my background was in Sociology, art
              direction, entrepreneurship, and{" "}
              <Link
                to='/more'
                style={{
                  fontWeight: 500,
                  color: "var(--primary)",
                  textDecoration: "none",
                }}
              >
                visual design
              </Link>
              . I believe the best experiences are those that guide,
              accommodate, are relevant and inclusive.
            </motion.p>

            <motion.div
              variants={variants}
              className='about__socialIconContainer'
            >
              <motion.div variants={variants} className='about__socialIcon'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.behance.net/IamMoubani'
                >
                  <AiOutlineBehanceSquare
                    style={{ fontSize: "3em", color: "var(--dark)" }}
                  />
                </a>
              </motion.div>
              <motion.div variants={variants} className='about__socialIcon'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.linkedin.com/in/moubanircdesign'
                >
                  <AiOutlineLinkedin
                    style={{ fontSize: "3em", color: "var(--dark)" }}
                  />
                </a>
              </motion.div>
              <motion.div variants={variants} className='about__socialIcon'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.instagram.com/moubani.uxdesign'
                >
                  <AiOutlineInstagram
                    style={{ fontSize: "3em", color: "var(--dark)" }}
                  />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={variants}
            className='home__meImage' /*data-quote={ TEXTS[index % TEXTS.length] }*/
          >
            <img className='home__meImage' src={Self} alt='self' />
          </motion.div>

          {/* here */}
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
          to='digital'
        >
          <h3>Product Design</h3>
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
              subtitle={/(?:<.+?>)([^<>]*?)(?:<\/.*?>)/g.exec(item.content)[1]}
              width={Math.floor((index - 1) / 2) % 2 ? "wide" : "narrow"}
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
            Explore case studies <BsArrowRight />
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
          to='experiential'
        >
          <h3>Experience Design</h3>
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
              subtitle={/(?:<.+?>)([^<>]*?)(?:<\/.*?>)/g.exec(item.content)[1]}
              width={Math.floor((index + 1) / 2) % 2 ? "wide" : "narrow"}
            />
          ))}
        </div>
        <motion.p variants={variants}>
          <Link
            className='noLink seeMore'
            onClick={() => window.scrollTo(0, 0)}
            to='ux-practice'
          >
            Explore case studies <BsArrowRight />
          </Link>
        </motion.p>
      </div>

      <motion.div variants={variants} className='homeFooter__container'>
        <motion.p variants={variants}>
          Some{" "}
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className='noLink'
            to='more'
          >
            <b style={{ color: "var(--primary)" }}>more</b>
          </Link>{" "}
          areas that I have explored are illustrations, branding,
          advertisements, and handicrafts.
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
