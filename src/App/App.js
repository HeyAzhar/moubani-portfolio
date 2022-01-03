import Axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import UxPractice from "./Pages/UxPractice";
import { BlogsContext } from "./utils/context";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const blogUrl =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@roychoudhury-moubani";

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(blogUrl);

      setBlogs(result?.data?.items);
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
          <Route path='about' element={<About />} />
        </Routes>
      </BlogsContext.Provider>
    </>
  );
};

export default App;
