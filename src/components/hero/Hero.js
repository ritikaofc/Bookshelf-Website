import React from "react";
import "./HeroStyles.css";
import Video from '../../assets/video.mp4'
import { AiOutlineSearch } from "react-icons/ai";


function Hero() {
  return (
    <div className="hero">
        <video autoPlay loop muted id="video">
            <source src={Video} type="video/mp4"/>
        </video>
        <div className="overlay"></div>
        <div className="content">
            <h1>Best Books At Lowest Prices!</h1>
            <h2>Free delivery for orders above 399.</h2>
            <form className="form">
                <div>
                    <input type="text" placeholder='Search Books'></input>
                </div>
                <div>
                    <button><AiOutlineSearch className="icon" style={{color:'black'}}/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero;
