import Axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import BlogPage from "./Pages/BlogPage";
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

      setBlogs([...result?.data?.items, ..._result?.data?.items]);
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
          <Route path='blog/:title' element={<BlogPage />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BlogsContext.Provider>
    </>
  );
};

export default App;
