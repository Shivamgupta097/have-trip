import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer>
        <span>Copyright & copy;2022 ExTour.All right reserved</span>
        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#recommended">Places</a>
          </li>
        </ul>
        <ul className="social_links">
          <li>
            <BsLinkedin />
          </li>
          <li>
            <BsFacebook />
          </li>
          <li>
            <AiFillInstagram />
          </li>
        </ul>
      </footer>
    </>
  );
}
