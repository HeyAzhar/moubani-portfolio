import Axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import BlogPage from "./Pages/BlogPage";
import Embrace from "./Pages/Embrace";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import UxPractice from "./Pages/UxPractice";
import { BlogsContext } from "./utils/context";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const uxPracticeUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@roychoudhury-moubani";

  const projectsUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@moubaniroychoudhury";

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(uxPracticeUrl);
      const _result = await Axios(projectsUrl);

      const convertLinksToVideo = (data) => {
        const replaceLinkWithVideo = (match, offset, string) => {
          let hrefData = match.match(/href=('|")\s*.*("|')/g)[0];
          let indexes = [];
          for (let i = hrefData.length - 1; i >= 0; i--) {
            if (hrefData[i] === '/')
              indexes.push(i);
          }
          let id = hrefData.slice(indexes[1] + 1, indexes[0]);
          let source = `https://drive.google.com/uc?id=${id}&export=download`;
          return (`<video controls><source src=${source} type='video/mp4'></source></video>`);
        }
        return {
          ...data,
          content: data.content.replaceAll(/<a href=('|")\s*.*drive.google.com\s*.*("|')>\s*.*<\/a>/g, replaceLinkWithVideo)
        };
      }

      setBlogs([
        ...result?.data?.items.map(convertLinksToVideo),
        ..._result?.data?.items.map(convertLinksToVideo)
      ]);
    };

    fetchData();
  }, []);

  return (
    <>
      <BlogsContext.Provider value={blogs}>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='ux-practice' element={<UxPractice />} />
          <Route path='embrace' element={<Embrace />} />
          <Route path='about' element={<About />} />
          <Route path='blog/:title' element={<BlogPage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </BlogsContext.Provider>
    </>
  );
};

export default App;

const NoPage = () => {
  return (
    <div className='noPage'>
      <h2>
        Feeling lost? <Link to='/'>Go home</Link>
      </h2>
    </div>
  );
};
