import { useContext } from "react";
import { BlogsContext } from "../../utils/context";
import ProjectCard from "../../Components/ProjectCard";
import Footer from "../../Components/Footer";
import "./styles.css";

const UxPractice = () => {
  const blogsData = useContext(BlogsContext);
  const blogs = blogsData.filter((v) =>
    [...v.categories].includes("ux-studio-practices")
  );

  return (
    <>
      <div className='uxPractice__container'>
        <div className='uxPractice__title'>
          <h1>
            At the{" "}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.arts.ac.uk/about-ual/press-office/stories/ual-ranked-2nd-in-the-world-for-art-and-design-in-QS-world-university-rankings-2020-by-subject'
            >
              University of the Arts London
            </a>
            , we worked on various collaborative studio projects.
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
