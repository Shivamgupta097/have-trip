import React from "react";
import "./Main.css";
// import ladakh from "../../assets/images/background.jpg";

export default function Main() {
  // let explore = "";
  return (
    <>
      <section className="container-fluid main_bar">
        <div className="row justify-content-sm-space-arround">
          <div className="content">
            <span>Places to Explore while work from home</span>
            <p>Not sure where to go in India? Perfect.</p>

            <div className=" search_container row justify-content-sm-center ">
              <div className="search  ">
                <input
                  type="text"
                  placeholder="Search your location"
                  className=" col-sm-12 col-7"
                />
                <input
                  type="submit"
                  value="Explore Now"
                  className="col-sm-4 col-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
