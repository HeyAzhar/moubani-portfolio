import Axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import BlogPage from "./Pages/BlogPage";
import Embrace from "./Pages/Embrace";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import UxPractice from "./Pages/UxPractice";
import { BlogsContext } from "./utils/context";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const blogUrl = "https://api.rss2json.com/v1/api.json";

  // mxstq0gcn3wonh7obydazmjyrddpvyyzcfgkebde;

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(
        blogUrl,
        JSON.stringify({
          count: 20,
          api_key: "mdorksgay5osxqgfhootowcaurgiwmvedtecclq1",
          rss_url: "https://medium.com/feed/@moubaniroychoudhury",
        })
      );

      setBlogs([...result?.data?.items]);
    };

    fetchData();
  }, []);

  console.table(blogs);

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
