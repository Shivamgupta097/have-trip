import React from "react";
// import ReactDom from "react-dom";
import "./Recommended.css";
import tajmahal from "../../assets/images/tajmahal.jpg";
import goldentemple from "../../assets/images/goldentemple.jpg";
import kerla from "../../assets/images/kerla.jpg";
import manali from "../../assets/images/manali.jpg";
import { Link } from "react-router-dom";

export default function Recommended() {
  const data = [
    {
      id: 1,
      image: manali,
      title: "Manali",
      location: "Himachal Pardesh",
      subTitle:
        " Manali and its mountains will never cease to fascinate you. The hill town has blossomed into a paradise for the wandering heart and it also has some cultural gems that are unique to this part of the world.",
    },
    {
      id: 2,
      image: goldentemple,
      title: "Golden temple",
      location: "Amrtsar,Punjab",
      subTitle:
        "Golden Temple is a seamless blend of jaw-dropping architecture, warm hospitality and captivating peace. It attracts devotees from different corners of the globe who seek blessing and spiritual solace.",
    },
    {
      id: 3,
      image: kerla,
      title: "Kerla",
      location: "Kerla",
      subTitle:
        "Popularly referred to as 'God's Own Country', Kerala in southwestern India is arguably one of the most beautiful states in the country. Home to colourful festivals, traditions, attires and sumptuous food",
    },
    {
      id: 4,
      image: tajmahal,
      title: "Tajmahal",
      location: "Agra,U.P",
      subTitle:
        "One of the seven wonders of the world, Taj Mahal is located on the banks of River Yamuna in Agra. It was built by the Mughal Emperor Shah Jahan as a memorial for his third wife, Mumtaz Mahal.",
    },
  ];
  return (
    <>
      <section id="recommended">
        <h2>Explore your next destination</h2>
        <div className="destination">
          {data.map((destination) => {
            return (
              <div className="destination_info" key={destination.id}>
                <Link to="/Recommended">
                  {<img src={destination.image} alt="not avalable" />}
                  <h3>{destination.title}</h3>
                  <p>{destination.subTitle}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
