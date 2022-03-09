import React, { useState } from "react";
import Menu from "../../components/Menu-place/Menu";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import places from "../../placesApi";
import "./Destinations.css";

function Destinations() {
  // uniqueList ------> for sidebar
  // uniqueTitle & uniqueDescription ------> for sidebar

  const uniqueList = [
    ...new Set(
      places.map((curElem) => {
        return curElem.catagory;
      })
    ),
    "All",
  ];

  const uniqueTitle = [
    ...new Set(
      places.map((curElem) => {
        return curElem.catagory;
      })
    ),
    "India",
  ];

  const uniqueDescription = [
    ...new Set(
      places.map((curElem) => {
        return curElem.description;
      })
    ),
    "There are some parts of the world that, once visited, get into your heart and won’t go. For me, India is such a place. When I first visited, I was stunned by the richness of the land, by its lush beauty and exotic architecture, by its ability to overload the senses with the pure, concentrated intensity of its colors, smells, tastes, and sounds… I had been seeing the world in black & white and, when brought face-to-face with India, experienced everything re-rendered in brilliant technicolor. — Keith Bellows, National Geographic Society",
  ];

  const [placeData, setPlaceData] = useState(places);
  const [placeTitle, setPlaceTitle] = useState(
    uniqueTitle[uniqueTitle.length - 1]
  );
  const [placeDescription, setPlaceDescription] = useState(
    uniqueDescription[uniqueDescription.length - 1]
  );

  // for classes
  const [sidebar, showSidebar] = useState(false);

  const filterItem = (catagory) => {
    showSidebar(!sidebar);
    console.log("All clicked");
    if (catagory === "All") {
      setPlaceData(places);
      setPlaceDescription(uniqueDescription[uniqueDescription.length - 1]);
      setPlaceTitle(uniqueTitle[uniqueTitle.length - 1]);
      return;
    } else {
      const updatedList = places.filter((curElem) => {
        return curElem.catagory === catagory;
      });

      const uniqueData = places.filter((curElem) => {
        if (curElem.catagory === catagory) {
          return curElem;
        }
      });

      const updatedDescription = [
        ...new Set(
          uniqueData.map((curElem) => {
            return curElem.description;
          })
        ),
      ];

      const updatedTitle = [
        ...new Set(
          uniqueData.map((curElem) => {
            return curElem.catagory;
          })
        ),
      ];

      console.log(updatedDescription);
      console.log(updatedTitle);

      setPlaceData(updatedList);
      setPlaceTitle(updatedTitle);
      setPlaceDescription(updatedDescription);

      return;
    }
  };

  return (
    <div className="destinations-container ">
      <Navbar />

      <div className="main-container container-fluid  ">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <Sidebar
              uniqueList={uniqueList}
              filterItem={filterItem}
              sidebar={sidebar}
              showSidebar={showSidebar}
            />
            <Menu
              // title={title}
              placeTitle={placeTitle}
              // description={description}
              placeDescription={placeDescription}
              placeData={placeData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
