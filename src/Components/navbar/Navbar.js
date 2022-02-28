import React from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="brand">
          <div className="container">ExTour</div>
          <div className="toggle"></div>
        </div>

        <ul>
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
        <div className="right">
          <p>Become a host</p>
          <BsGlobe id="globe" />

          <div className="user">
            <AiOutlineMenu />
            <IoPersonCircleSharp id="person" />
          </div>
        </div>
      </nav>
    </>
  );
}
