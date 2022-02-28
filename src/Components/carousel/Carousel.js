import { React, useState } from "react";
import "./Carousel.css";
import tajmahal from "../assets/images/tajmahal.jpg";
import goldentemple from "../assets/images/goldentemple.jpg";
import kerla from "../assets/images/kerla.jpg";
import manali from "../assets/images/manali.jpg";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Carousel() {
  const images = [tajmahal, goldentemple, kerla, manali];
  const [current, setCurrent] = useState(0);
  return (
    <div className="carousel">
      <FaArrowAltCircleLeft className="left-arrow" id="arrow" />
      <FaArrowAltCircleRight className="right-arrow" id="arrow" />
      {images.map((slide, index) => {
        return (
          <div className="image">
            <p>{index}</p>
            <img src={slide} alt="images not avalaible" />
          </div>
        );
      })}
    </div>
  );
}
