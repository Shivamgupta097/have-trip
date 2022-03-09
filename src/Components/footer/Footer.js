import React from "react";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";
// import {Link} from react-router-dom;
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        {/* <div className="justify-content-sm-center"> */}
        <span className=" copy">
          Travelz
          <AiOutlineCopyrightCircle />
          2022
        </span>
        <ul className="links_group ">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/service" className="link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/destinations" className="link">
              Destinations
            </Link>
          </li>
        </ul>
        <ul className="social_links">
          <li>
            <BsLinkedin className="link" />
          </li>
          <li>
            <BsFacebook className="link" />
          </li>
          <li>
            <AiFillInstagram className="link" />
          </li>
          <li>
            <FaTwitter className="link" />
          </li>
        </ul>
        {/* </div> */}
      </footer>
    </>
  );
}
