import { variants } from "../../utils/animations";
import { motion } from "framer-motion";

import "./styles.css";

const Embrace = () => {
  return (
    <>
      <div className='embrace__container'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={variants}
          className='embrace__title'
        >
          <motion.h1 variants={variants}>
            I enjoy telling stories through visual mediums.
          </motion.h1>
        </motion.div>

        <EmbraceCard
          title='ILLUSTRATIONS'
          description='I enjoy simple illustrations, paintings, embroideries, and DIY projects.'
          imageOne='/Assets/illustrations/one.png'
          imageTwo='/Assets/illustrations/two.png'
          imageThree='/Assets/illustrations/three.png'
          imageFour='/Assets/illustrations/four.png'
        />

        <EmbraceCard
          title='BRANDING'
          description='I started my own brand of hand-crafted home decor and lifestyle accessories such as kettles, lamps, clothes, jewelry, and stationery. From designing the brand identity to the products and exhibition layout, this has been my brainchild.'
          imageOne='/Assets/branding/one.png'
          imageTwo='/Assets/branding/two.jpg'
          imageThree='/Assets/branding/three.jpg'
          imageFour='/Assets/branding/four.jpg'
        />

        <EmbraceCard
          title='ADVERTISEMENTS'
          description='As an Art Direction at Inner Circle, I led and created many brand campaigns. I designed advertisements and social media posts for various brands.'
          imageOne='/Assets/advertising/one.jpg'
          imageTwo='/Assets/advertising/two.jpeg'
          imageThree='/Assets/advertising/three.jpg'
          imageFour='/Assets/advertising/four.jpg'
        />

        <EmbraceCard
          title='SOCIAL MEDIA MARKETING'
          description='For 8+ years, I have been volunteering for Child Rights and You (CRY) and helping them with their social media posters and campaign strategies. 
          Additionally, I have managed social media marketing for a few clients as a designer at both Idenisys IT consulting and Inner circle advertising.'
          imageOne='/Assets/socialMedia/one.jpg'
          imageTwo='/Assets/socialMedia/two.jpg'
          imageThree='/Assets/socialMedia/three.jpg'
          imageFour='/Assets/socialMedia/four.jpg'
        />
      </div>
    </>
  );
};

export default Embrace;

const EmbraceCard = ({
  title,
  description,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
}) => {
  return (
    <motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='embrace__project'
      >
        <motion.div variants={variants} className='embrace__description'>
          <h3>{title}</h3>

          <p>{description}</p>
        </motion.div>

        <motion.div variants={variants} className='embrace__images'>
          <img src={imageOne} alt='' />
          <img src={imageTwo} alt='' />
          <img src={imageThree} alt='' />
          <img src={imageFour} alt='' />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
