import Me from "../../../Assets/me.jpg";
import behance from "../../../Assets/Icons/behance.svg";
import linkedin from "../../../Assets/Icons/linkedin.svg";
import instagram from "../../../Assets/Icons/instagram.svg";
import cook from "../../../Assets/Icons/cook.svg";
import music from "../../../Assets/Icons/music.svg";
import driving from "../../../Assets/Icons/driving.svg";
import teaTale from "../../../Assets/Icons/tea.svg";
import "./styles.css";

const About = () => {
  return (
    <div className='about__container'>
      {/* ME */}

      <div className='about__me'>
        <div className='about__meText'>
          <h5>THAT'S ME</h5>
          <p>
            Hello, I'm Moubani Roy Choudhury, a user experience and visual
            designer who is currently doing her MA in UX design at the
            university of the arts London.
          </p>

          <div className='about__socialIconContainer'>
            <div className='about__socialIcon'>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.behance.net/IamMoubani'
              >
                <img style={{ marginBottom: "-24px" }} src={behance} alt='' />
              </a>
            </div>
            <div className='about__socialIcon'>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.linkedin.com/in/moubanircdesign'
              >
                <img src={linkedin} alt='' />
              </a>
            </div>
            <div className='about__socialIcon'>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.instagram.com/moubani.uxdesign'
              >
                <img style={{ marginBottom: "-26px" }} src={instagram} alt='' />
              </a>
            </div>
          </div>

          <div className='about_horizontalLine'></div>
        </div>

        <div className='about__meImage'>
          <img className='about__meImage' src={Me} alt='me' />
        </div>
      </div>

      {/* STORY */}

      <div className='about__story'>
        <h3>MY STORY</h3>

        <p>
          From the age of 14, I knew that design was my passion. Since then,
          (initially informally) and then for years now, I have been
          professionally active (working with startups to NGOs and Advertising
          agencies) with design being an inevitable part of my job. After
          completing my studies in Sociology(Honours), I started my diverse
          journey to (now) end up in my dream industry. After interning at Child
          Rights and You (CRY) and working in a managerial role in J Thomas and
          Co., I launched my first brand in 2017. Soon after, I started my first
          job as a graphic designer, followed by internships and then a job as a
          UX designer. Currently, I'm a postgraduate student of MA UX Design at
          the University of the Arts London where we seek to question the
          conventional and create a mindset that'll help me create meaningful
          products and experiences for all.
        </p>
      </div>

      {/* APPROACH */}

      <div className='about__approach'>
        <h3>APPROACH</h3>

        <p>
          My diverse background enables me to look beyond design. I am
          passionate about experimenting with various research methods and seek
          to create inclusive design solutions. I enjoy collaborating with
          diverse teams and I see great value in teamwork. I like to present the
          experience as prototypes, mockups, and case studies. During my career,
          I have taught myself to code in front-end languages. Generally, I know
          the possibilities and restrictions of user interfaces and I know how
          to co-operate with teams.
        </p>
      </div>

      {/* VALUES */}

      <div className='about__values'>
        <h3>VALUES</h3>

        <p>
          Empathetic, collaborative, committed, and a human-loving extrovert
          with a desire to learn more, have meaningful conversations, keeping an
          open mind.
        </p>
      </div>

      {/* LANG */}

      <div className='about__lang'>
        <h3>SPOKEN LANGUAGES</h3>

        <p>
          English (UK and US) | Spanish (Basic) | Hindi (Proficient) | Bengali
          (Native)
        </p>
      </div>

      <div className='about_horizontalLine'></div>

      {/* FUN FACTS */}

      <div className='about__funFact'>
        <h3>FUN FACTS</h3>

        <div>
          <FunFact
            icon={teaTale}
            title='Tea tales'
            description="I'm a certified tea taster with 3.5years of industry experience"
          />
          <FunFact
            icon={cook}
            title='Spice of life'
            description="I'm a food connoisseur and someday wish to have my own restaurant.
"
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
        </div>
      </div>
    </div>
  );
};

export default About;

const FunFact = ({ icon, title, description }) => {
  return (
    <div className='funFact__container'>
      <div className='funFact__icon'>
        <img src={icon} alt='' />
      </div>

      <div className='funFact__title'>
        <p>{title}</p>
      </div>

      <div className='funFact__description'>
        <p>{description}</p>
      </div>
    </div>
  );
};
