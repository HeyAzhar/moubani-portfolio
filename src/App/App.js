import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
