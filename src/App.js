import React from "react";

import Home from "./pages/home/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destinations from "./pages/Destinations/Destinations.js";

// import Carousel from "./components/carousel/Carousel";
// import Carousel from "./Components/Carousel";

// import Recommended from "./Components/Recommended";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        {/* <Route path="services" element={<Destinations />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
