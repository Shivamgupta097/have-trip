import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Recommended from "./Components/Recommended";
import Footer from "./Components/Footer";
// import Recommended from "./Components/Recommended";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      <Recommended />
      <Footer />
    </>
  );
}

export default App;
