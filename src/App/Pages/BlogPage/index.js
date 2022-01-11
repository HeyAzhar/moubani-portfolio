import { useContext } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import { BlogsContext } from "../../utils/context";
import Footer from "../../Components/Footer";
import { useParams } from "react-router-dom";
import { variants } from "../../utils/animations";
import { motion } from "framer-motion";
import "./styles.css";

const BlogPage = () => {
  const blogsData = useContext(BlogsContext);
  const navigate = useNavigate();

  const { title } = useParams();

  const index = blogsData.findIndex((v) => v.title === title);

  const blog = blogsData[index];

  const prevBlog = blogsData[index - 1];
  const nextBlog = blogsData[index + 1];

  const goPrev = () => {
    if (!prevBlog) return;

    navigate(`/blog/${prevBlog.title}`);
    window.scrollTo(0, 0);
  };

  const goNext = () => {
    if (!nextBlog) return;

    navigate(`/blog/${nextBlog.title}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={variants}
        className='blogPage__container'
      >
        <motion.div variants={variants} className='blogPage__header'>
          <h1>{blog?.title}</h1>
          <p>{new Date(blog?.pubDate).toDateString()}</p>
        </motion.div>

        <motion.div
          variants={variants}
          className='blogPage__content'
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />

        <motion.div variants={variants} className='blogPage__navigation'>
          <motion.p
            onClick={goPrev}
            style={{ color: prevBlog ? "var(--dark)" : "var(--grey)" }}
            variants={variants}
          >
            <GrCaretPrevious style={{ marginRight: "1em" }} /> Previous
          </motion.p>
          <motion.p
            onClick={goNext}
            style={{ color: nextBlog ? "var(--dark)" : "var(--grey)" }}
            variants={variants}
          >
            Next <GrCaretNext style={{ marginLeft: "1em" }} />
          </motion.p>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default BlogPage;
