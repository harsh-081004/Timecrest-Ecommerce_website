import React from "react";
import "./Footer.css";
import { assets } from "../../assets/all_product";

const Footer = () => {
  return (
    <div id="Footer" className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo1} alt="" />
          <p>
            At TimeCrest, we are dedicated to bringing you exceptional
            timepieces that combine elegance, precision, and
            craftsmanship.Discover the perfect blend of luxury and functionality
            with TimeCrest, where every moment is timeless.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook} alt="" />
            <img src={assets.linkdin} alt="" />
            <img src={assets.instagram} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About-us</li>
            <li>Delivery</li>
            <li>Privacy-Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+1-212-365-9830</li>
            <li>timecrest0810@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-Copyright">
        Copyright 2024 @ TimeCrest.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
