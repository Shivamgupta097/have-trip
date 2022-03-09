import React, { useState } from "react";
import "./Menu.css";
// import { GiAbstract016 } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

function Menu({ placeData, placeDescription, placeTitle }) {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  return (
    <div className="menu-container col-lg-9 col-sm-9">
      <div className="row justify-content-around">
        <div className="place-title col-12">
          <FaHome className="location_icon" />

          <h1 className="tittle">{placeTitle}</h1>
        </div>
      </div>
      <div className="row">
        <p className="description col-12">
          {isReadMoreShown
            ? placeDescription
            : placeDescription.toString().substring(0, 200)}
          <button
            className="readmore-btn"
            onClick={() => setReadMoreShown(!isReadMoreShown)}
          >
            Read More
          </button>
        </p>
      </div>

      {/* <img src="..\..\assets\images\ladakh\ladakh1.jpg" alt="" /> */}
      <div className="image_container row">
        {placeData.map((place) => {
          return (
            <div className="card-container" key={place.id}>
              <img src={place.image} alt="images is not" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
