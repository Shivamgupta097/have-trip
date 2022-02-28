import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Recommended from "./components/recommended/Recommended";
import Footer from "./components/footer/Footer";
// import Carousel from "./components/carousel/Carousel";
// import Carousel from "./Components/Carousel";

// import Recommended from "./Components/Recommended";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      <Recommended />
      {/* <Carousel /> */}
      <Footer />
    </>
  );
}

export default App;
