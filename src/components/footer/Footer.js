import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function FooterStyles() {
  return (
    <div className="footer">
        <div className="container">
            <div className="top">
                <h3>BOOKSHELF</h3>
                <div className="social">
                    <FaFacebook className="icon" />
                    <FaInstagram className="icon" />
                    <FaTwitter className="icon" />
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <ul>
                        <li>About Us</li>
                        <li>Sell Book</li>
                        <li>Track Your Order</li>
                        <li>Frequently Asked Questions</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Policies</li>
                        <li>Privacy</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterStyles;
