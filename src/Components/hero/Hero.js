import React from "react";
import "./Hero.css";
import searchImage from "../../assets/images/search.jpg";

export default function Hero() {
  return (
    <>
      <section>
        <div className="background">
          <img src={searchImage} alt="" />
        </div>
        <div className="content">
          <h1>Places to Explore while work from home</h1>
          <p>
            Travelling can teach you more than any university course. You learn
            about the culture of the country you visit. If you talk to locals,
            you will likely learn about their thinking, habits, traditions and
            history as well.
          </p>

          <div className="search">
            <div className="container">
              <label for>Not sure where to go in India? Perfect.</label>
              <input type="text" placeholder="Search your location" />
            </div>
            <button>Explore Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
