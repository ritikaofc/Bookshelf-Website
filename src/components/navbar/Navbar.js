import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./NavbarStyles.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import {Link} from 'react-scroll'


function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "Logo dark" : "Logo"}>
        <h1>BOOKSHELF</h1>
      </div>
      <ul className="nav-menu">
        {/* <Link to=''><li>Home</li></Link>
        <Link to=''><li>Categories</li></Link>
        <Link to=''><li>Buy Books</li></Link>
        <Link to=''><li>Sell Books</li></Link> */}
        <li>Home</li>
        <li>Contact Us</li>
        <li>Categories</li>
        <li>Login/Sign up</li>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose
            className="icon"
            style={{ color: "#000", border: "1px solid black" }}
          />
        )}
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
          <li>Login/Sign up</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button className="btn">Search</button>
            <button className="btn">Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
