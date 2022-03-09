import React from "react";
// import { FcMoneyTransfer } from "react-icons/fc";

function Speciality() {
  let splData = [
    {
      id: 1,
      title: "Best Discount",
      image:
        "https://cdn.pixabay.com/photo/2021/10/11/23/49/labels-6702048_960_720.png",
      brief: "Lorem34clkmfklmfdsklfmdklmdgmmfkmdklf",
    },
    {
      id: 2,
      title: "Best Discount",
      image:
        "https://cdn.pixabay.com/photo/2021/10/11/23/49/labels-6702048_960_720.png",
      brief: "Lorem34clkmfklmfdsklfmdklmdgmmfkmdklf",
    },
  ];
  return (
    <>
      <div className="speciality">
        {splData.map((special) => {
          <div className="data">
            <img src={special.image} alt="discount image" />
            <h3> {special.title}</h3>
            <p>{special.brief}</p>
            {console.log(special)}
          </div>;
        })}
      </div>
    </>
  );
}

export default Speciality;
