import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  );
};

export default App;
