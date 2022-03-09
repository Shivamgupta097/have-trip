import React from "react";
import "./Navbar.css";

import logo from "../../assets/images/logotour.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
// import { BsGlobe } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
//
export default function Navbar() {
  return (
    <>
      <div className="main_nav">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <Link to="/" className="nav-brand">
              <img src={logo} alt="logo" className="logo_img" />
              <h3 className="logo_name">Travelz </h3>
            </Link>

            <button
              className="navbar-toggler"
              style={{ color: "red" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon  "
                style={{ color: "red" }}
              ></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link active">
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="destinations" className="nav-link active">
                    Destinations
                  </Link>
                </li>
              </ul>
              <div className="right">
                <p>Become a host</p>

                <div className="user">
                  <AiOutlineMenu />
                  <IoPersonCircleSharp id="person" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
