import { Link } from "react-router-dom";
import Me from "../../../Assets/me.jpg";
import cook from "../../../Assets/Icons/cook.svg";
import music from "../../../Assets/Icons/music.svg";
import driving from "../../../Assets/Icons/driving.svg";
import teaTale from "../../../Assets/Icons/tea.svg";
import Footer from "../../Components/Footer";
import {
  AiOutlineLinkedin,
  AiOutlineBehanceSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";

import "./styles.css";

const About = () => {
  return (
    <>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='about__container'
      >
        {/* ME */}

        <motion.div variants={variants} className='about__me'>
          <motion.div variants={variants} className='about__meText'>
            <motion.h5 variants={variants}>THAT'S ME</motion.h5>
            <motion.p variants={variants}>
              I'm Moubani Roy Choudhury, a{" "}
              <Link
                style={{ color: "var(--primary)", textDecoration: "none" }}
                to='/ux-practice'
              >
                user experience
              </Link>{" "}
              and{" "}
              <Link
                style={{ color: "var(--primary)", textDecoration: "none" }}
                to='/projects'
              >
                digital product designer
              </Link>{" "}
              currently doing MA in UX Design at the University of the Arts
              London (2021-22).
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

            <motion.div
              variants={variants}
              className='about_horizontalLine'
            ></motion.div>
          </motion.div>

          <motion.div variants={variants} className='about__meImage'>
            <img className='about__meImage' src={Me} alt='me' />
          </motion.div>
        </motion.div>

        {/* STORY */}

        <motion.div variants={variants} className='about__data'>
          <h3>MY STORY</h3>

          <motion.p variants={variants}>
            <span style={{ color: "var(--primary)" }}>Born: </span>
            <b>Kolkata, India</b> <br />
            <span style={{ color: "var(--primary)" }}>Studied: </span>
            <b>
              University of the Arts London | St. Xavier's College, Kolkata
              (India)
            </b>
            <br />
            <span style={{ color: "var(--primary)" }}>Living: </span>
            <b>London, UK</b>
            <br />
            <br />
            From the age of 14, I knew that design was my passion. Since then, I
            have been professionally active (in startups, NGOs and Advertising
            agencies) with design being an inevitable part of my job. I started
            my motion.diverse journey in 2015. After interning at Child Rights
            and You (CRY) and working in a managerial role in J Thomas and Co. ,
            I launched my first brand in 2017. Soon after, I started my first
            job as a graphic designer, followed by internships and then a job as
            a UX designer. Now, as a postgraduate student of MA UX Design at the
            University of the Arts London, I seek to question the conventional
            and create a mindset that'll help me create meaningful products and
            experiences for all.
          </motion.p>
        </motion.div>

        {/* APPROACH */}

        <motion.div variants={variants} className='about__data'>
          <h3>APPROACH</h3>

          <motion.p variants={variants}>
            My motion.diverse backgrounds enables me to look beyond design. I am
            passionate about experimenting with various research methods and
            seek to create inclusive design solutions. I enjoy collaborating
            with motion.diverse teams and I see great value in team work. I like
            to present the experience as prototypes, mockups and case studies.
            During my career, I have taught myself to code in front-end
            languages. Generally I know the possibilities and restrictions of
            user interfaces and I know how to co-operate with teams.
          </motion.p>
        </motion.div>

        {/* VALUES */}

        <motion.div variants={variants} className='about__data'>
          <h3>VALUES</h3>

          <motion.p variants={variants}>
            Empathetic, collaborative and committed, human loving extrovert with
            a desire to learn more, have meaning conversations and keep an open
            mind.
          </motion.p>
        </motion.div>

        {/* LANG */}

        <motion.div variants={variants} className='about__lang'>
          <h3>SPOKEN LANGUAGES</h3>

          <motion.p variants={variants}>
            English (UK and US) | Spanish (Basic) | Hindi (Proficient) | Bengali
            (Native)
          </motion.p>
        </motion.div>

        <motion.div
          variants={variants}
          className='about_horizontalLine'
        ></motion.div>

        {/* FUN FACTS */}

        <motion.div variants={variants} className='about__funFact'>
          <h3>FUN FACTS</h3>

          <motion.div variants={variants}>
            <FunFact
              icon={teaTale}
              title='Tea tales'
              description="I'm a certified tea taster with 3.5years of industry experience"
            />
            <FunFact
              icon={cook}
              title='Spice of life'
              description="I'm a food connoisseur and someday wish to have my own restaurant."
            />
            <FunFact
              icon={driving}
              title='Go slow!'
              description='I was called Lady-Schumacher for my driving skills'
            />
            <FunFact
              icon={music}
              title='The sound of music'
              description="I grew up in a musical family and that's the way to my heart."
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;

const FunFact = ({ icon, title, description }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={variants}
      className='funFact__container'
    >
      <motion.div variants={variants} className='funFact__icon'>
        <img src={icon} alt='' />
      </motion.div>

      <motion.div variants={variants} className='funFact__title'>
        <motion.p>{title}</motion.p>
      </motion.div>

      <motion.div variants={variants} className='funFact__description'>
        <motion.p>{description}</motion.p>
      </motion.div>
    </motion.div>
  );
};
