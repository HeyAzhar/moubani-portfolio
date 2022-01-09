import { useContext } from "react";
import { BlogsContext } from "../../utils/context";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";
import "./styles.css";

const BlogPage = () => {
  const blogsData = useContext(BlogsContext);

  const { title } = useParams();

  const blog = blogsData.filter((v) => v.title === title);

  console.log(blog);

  return (
    <>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='blogPage__container'
      >
        <motion.div variants={variants} className='blogPage__header'>
          <h1>{blog[0]?.title}</h1>
          <p>{new Date(blog[0]?.pubDate).toDateString()}</p>
        </motion.div>

        <motion.div
          variants={variants}
          className='blogPage__content'
          dangerouslySetInnerHTML={{ __html: blog[0]?.content }}
        />
      </motion.div>
      <Footer />
    </>
  );
};

export default BlogPage;
