import React from "react";
import "./DestinationStyles.css";
import ikigai from "../../assets/ikigai.jpg";
import ycw from "../../assets/ycw.jpg";
import iewu from "../../assets/iewu.jpg";
import mtl from "../../assets/mtl.jpg";
import atm from "../../assets/atm.jpg";

function Destination() {
  return (
    <div className="destinations">
      <div className="container">
        <h1>Best Selling Books of 2021</h1>
        <div className="img-container">
          <img src={iewu} alt="" />
          <img src={ycw} alt="" />
          <img src={ikigai} alt="" />
          <img src={mtl} alt="" />
          <img src={atm} alt="" />
        </div>
      </div>
    </div>

  )
}

export default Destination;
