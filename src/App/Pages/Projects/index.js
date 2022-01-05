import { useState, useEffect } from "react";
import ProjectCard from "../../Components/ProjectCard";
import Footer from "../../Components/Footer";
import "./styles.css";
import Axios from "axios";

const Projects = () => {
  const [blogs, setBlogs] = useState([]);

  const blogUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@moubaniroychoudhury";

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(blogUrl);

      setBlogs(result?.data?.items);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='project__container'>
        <div className='project__title'>
          <h1>
            Taking briefs to collaborating, ideating on the paper to presenting
            final projects, I thoroughly{" "}
            <span>enjoy every step of the process</span>
          </h1>

          <h3>Projects</h3>
        </div>

        {blogs?.map((item) => (
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
      <Footer />
    </>
  );
};

export default Projects;
