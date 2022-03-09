import React, { useState } from "react";
// import { Link } from "react-router-do  m";
import "./Sidebar.css";
import { BiMenu } from "react-icons/bi";

function Sidebar({ uniqueList, filterItem, sidebar, showSidebar }) {
  // console.log(places);,

  return (
    <>
      <div
        className={
          sidebar ? "sidebar_active col-lg-3 col-6" : "sidebar col-lg-1 col-2 "
        }
      >
        <div className="top-section">
          {/* <h3>Reccomended</h3> */}
          <BiMenu className="slider" onClick={() => showSidebar(!sidebar)} />
        </div>

        <ul id="side_container">
          {uniqueList.map((curElem, index) => {
            return (
              <li className="btn_group" key={index}>
                <button className="btn" onClick={() => filterItem(curElem)}>
                  {curElem}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
