import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
// import Recommended from "../../components/recommended/Recommended";
import Footer from "../../components/footer/Footer.js";
import Speciality from "../../components/speciality/Speciality";
function Home() {
  return (
    <>
      <div className="background ">
        <Navbar />
        <Main />
      </div>

      <Speciality />

      <Footer />
    </>
  );
}

export default Home;
