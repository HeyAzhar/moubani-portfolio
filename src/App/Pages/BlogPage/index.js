import { useContext } from "react";
import { BlogsContext } from "../../utils/context";
import Footer from "../../Components/Footer";
import "./styles.css";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const blogsData = useContext(BlogsContext);

  const { title } = useParams();

  const blog = blogsData.filter((v) => v.title === title);

  console.log(blog);

  return (
    <>
      <div className='blogPage__container'>
        <div className='blogPage__header'>
          <h1>{blog[0]?.title}</h1>
          <p>{new Date(blog[0]?.pubDate).toDateString()}</p>
        </div>

        <div
          className='blogPage__content'
          dangerouslySetInnerHTML={{ __html: blog[0]?.content }}
        />
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
