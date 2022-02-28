import React from "react";
import "./Navbar.css";

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
        <button>Connect</button>
      </nav>
    </>
  );
}
