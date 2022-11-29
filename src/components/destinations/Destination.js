import React from "react";
import "./DestinationStyles.css";
import Button from "react-bootstrap/Button";
import atm from "../../assets/atm.jpg";
import iewu from "../../assets/iewu.jpg";
import ikigai from "../../assets/ikigai.jpg";
import mtl from "../../assets/mtl.jpg";
import ta from "../../assets/ta.jpg";

function Destination() {
  return (
    <div className="destinations">
      <div className="container">
        <h1>Best Selling Books of 2021</h1>
        <div className="img-container">
          <img src={iewu} alt="" />
          <img src={ikigai} alt="" />
          <img src={atm} alt="" />
          <img src={mtl} alt="" />
          <img src={ta} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Destination

