import React, { useState } from "react";
import "../App.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="vh-100 w-100"
        style={{
          background: `url(/images/droom-first.png) center / cover no-repeat`,
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container">
            <a className="navbar-brand" href="https://droom.in/">
              <img
                loading="lazy"
                src="/images/Logo.png"
                alt="Logo"
                className="logo"
                loading="lazy"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
            >
              <span
                className={
                  isOpen ? "navbar-toggler-icon open" : "navbar-toggler-icon"
                }
              ></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link white fnt-14">Celebrating 10 Years</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link white fnt-14">Achievements</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link white fnt-14">Chief Guests</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link white fnt-14">Supply Chain</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link white fnt-14">Partners & Sponsors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link white fnt-14">Brand Recognition</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link white fnt-14">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
