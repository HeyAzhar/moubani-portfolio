import { useContext } from "react";
import { BlogsContext } from "../../utils/context";
import ProjectCard from "../../Components/ProjectCard";
import Footer from "../../Components/Footer";
import "./styles.css";

const UxPractice = () => {
  const blogs = useContext(BlogsContext);

  return (
    <>
      <div className='uxPractice__container'>
        <div className='uxPractice__title'>
          <h1>
            At the <span>University of the Arts London</span>, we worked on
            various collaborative studiio projects.
          </h1>

          <h3>MA UX STUDIO PRACTICES</h3>
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

export default UxPractice;
