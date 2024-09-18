import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.webp";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Header for Desktop */}
      <div className="header-desktop-view">
        <Link to="/" className="header-desktop-logo">
          <img src={Logo} alt="Logo" />
          <h1>SHREE</h1>
        </Link>
        <div className="header-desktop-items">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/services">
            <h1>Services</h1>
          </Link>
          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
          <Link to="/about">
            <h1>About</h1>
          </Link>
          <Link to="/register">
            <h1>Register/Login</h1>
          </Link>
        </div>
      </div>

      {/* Header for Mobile */}
      <div className="header-mobile-view">
        <div className="header-mobile-logo">
          <img src={Logo} alt="Logo" />
          <h1>SHREE</h1>
        </div>
        <div className="header-mobile-menu" onClick={toggleSidebar}>
          <span>&#9776;</span> {}
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-header">
            <span className="close-btn" onClick={closeSidebar}>
              ×
            </span>
          </div>
          <Link to="/" onClick={closeSidebar}>
            <h1>Home</h1>
          </Link>
          <Link to="/services" onClick={closeSidebar}>
            <h1>Services</h1>
          </Link>
          <Link to="/contact" onClick={closeSidebar}>
            <h1>Contact</h1>
          </Link>
          <Link to="/about" onClick={closeSidebar}>
            <h1>About</h1>
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
