import React from "react";
import "./Footer.css";
import Logo from "../../../assets/logo.webp";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="home-hr" />

      <div className="footer-data">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Logo} alt="" />
            <h1>SHREE</h1>
          </div>
          <h2>
            Innovative solutions, exceptional quality,
            <br /> and unwavering commitment to your <br />
            success.
          </h2>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="footer-facebook" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoTwitter className="footer-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="footer-linkedin" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="footer-instagram" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h2>Services</h2>
          <ul>
            <Link to="/websiteDesigning">Website Development</Link>
            <Link to="/softwareDevelopment">Software Development</Link>
            <Link to="/appDevelopment">App Development</Link>
            <Link to="/uiDesign">Website Designing</Link>
            <Link to="/paidMarketing">Paid Marketing</Link>
            <Link to="/searchEngine">Search Engine Optimization</Link>
            <Link to="/socialMedia">Social Media Marketing</Link>
          </ul>
        </div>
        <div className="footer-links">
          <h2>Company</h2>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About Us</Link>
          </ul>
        </div>
      </div>
      <hr className="home-hr" />
      <div className="footer-copyright">
        <p>© 2024 - Shree Ji House | All rights reserved.</p>
        <p>
          Privacy Policy <span>Cookie Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
