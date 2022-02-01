import { Link } from "react-router-dom";
import Me from "../../../Assets/about.jpg";
import cook from "../../../Assets/Icons/cook.svg";
import music from "../../../Assets/Icons/music.svg";
import driving from "../../../Assets/Icons/driving.svg";
import teaTale from "../../../Assets/Icons/tea.svg";
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
                style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}
                to='/ux-practice'
              >
                user experience
              </Link>{" "}
              and{" "}
              <Link
                style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}
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
            I've always been creative and curious. I started my diverse journey in 2015 as an intern in Child Rights and You (CRY) where I helped them with posters and submitted a research paper. After this, I worked managerial role in a tea auction house where I trained and led a team of 6. I also developed marketing strategies and recruited team members. 
            <br /><br />In 2017, I launched my design brand Mbony India and the overwhelming response encouraged me to become a full-time designer. I started as an art director, and then went on to design UI projects. Currently I'm a UX designer, creating meaningful products and experiences.
            <br /><br />With a multitude of interests and creative pursuits in life, I have found in UX design the possibility to blend my passions for design, technology, and business, with my deep curiosity for human behavior.
          </motion.p>
        </motion.div>

        {/* APPROACH */}

        <motion.div variants={variants} className='about__data'>
          <h3>APPROACH</h3>

          <motion.p variants={variants}>
          My range of experiences across social work, management, entrepreneurship, graphic design, and UI/UX design enables me to bring multiple lenses into my design orientation. As a person of color who has studied Sociology and travelled to another continent, I think about how inclusiveness can be mainstreamed within the industry.
          <br /><br />I like to present the experience as prototypes, mockups, case studies and am comfortable with academic writing. 
          </motion.p>
        </motion.div>

        {/* VALUES */}

        <motion.div variants={variants} className='about__data'>
          <h3>VALUES</h3>

          <motion.p variants={variants}>
          I am an empathetic extrovert and enjoy collaborating with diverse teams. I thrive on learning, exploring, and mastering new skills and I'm happiest when I'm bringing disparate ideas together in creative ways to solve problems that create impact.
          <br /><br />I enjoy exploring diverse mediums and my user-centered design approach has taken me from exploring tangible interactions to designing experiential environments.
          <br /><br />When not working, I can be found talking to my plants, painting, cooking new recipes or doodling on my bullet journal.
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
