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
import Fmp from "./Pages/Fmp";
import { BlogsContext } from "./utils/context";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const projectsUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@roychoudhury-moubani";

  const uxPracticeUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@moubaniroychoudhury";

  const fmp =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@moubanifmp1";

  const fmp1 =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@moubanifmp";

  useEffect(() => {
    const fetchData = async () => {
      const uxResult = await Axios(uxPracticeUrl);
      const projectResult = await Axios(projectsUrl);
      const fmpResult = await Axios(fmp);
      const fmp1Result = await Axios(fmp1);

      const convertLinksToVideo = (data, type) => {
        const replaceLinkWithVideo = (match, offset, string) => {
          let hrefData = match.match(/href=('|")\s*.*("|')/g)[0];
          let indexes = [];
          for (let i = hrefData.length - 1; i >= 0; i--) {
            if (hrefData[i] === "/") indexes.push(i);
          }
          let id = hrefData.slice(indexes[1] + 1, indexes[0]);
          let source = `https://drive.google.com/uc?id=${id}&export=download`;
          return `<video controls><source src=${source} type='video/mp4'></source></video>`;
        };
        return {
          ...data,
          type,
          content: data.content.replaceAll(
            /<a href=('|")\s*.*drive.google.com\s*.*("|')>\s*.*<\/a>/g,
            replaceLinkWithVideo
          ),
        };
      };

      setBlogs([
        ...uxResult?.data?.items.map((data) => convertLinksToVideo(data, "ux")),
        ...projectResult?.data?.items.map((data) =>
          convertLinksToVideo(data, "project")
        ),
        ...fmpResult?.data?.items.map((data) =>
          convertLinksToVideo(data, "fmp")
        ),
        ...fmp1Result?.data?.items.map((data) =>
          convertLinksToVideo(data, "fmp")
        ),
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
          <Route path='digital' element={<Projects />} />
          <Route path='experiential' element={<UxPractice />} />
          <Route path='fmp' element={<Fmp />} />
          <Route path='more' element={<Embrace />} />
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
