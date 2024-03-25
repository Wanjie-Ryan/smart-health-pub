import React, { useState, useEffect } from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="main">
        <div className="main-footer">
          <p className="footer-title">Smart Health Pub</p>

          <div className="footer-details">
            <div className="contact-details">
              <p className="contact-title">
                Reach us at any of the links below:
              </p>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icons-link"
              >
                <BsFacebook className="footer-icons" />
              </a>

              <a href="mailto:" className="footer-icons-link">
                <BiLogoGmail className="footer-icons" />
              </a>

              <a href="tel:" className="footer-icons-link">
                <AiTwotonePhone className="footer-icons" />
              </a>
            </div>

            <div className="quick-links">
              <p className="contact-title"> Quick Links </p>

              <Link to="/" className="footer-links-p">
                <p>Home</p>
              </Link>
              <Link to="/about" className="footer-links-p">
                <p>About</p>
              </Link>
              <Link to="/service" className="footer-links-p">
                <p>Service</p>
              </Link>
              <Link to="/contact" className="footer-links-p">
                <p>Contact</p>
              </Link>
            </div>
          </div>

          <p className="footer-dev">
            Developed by Group 15{" "}
            <a href="tel:" className="footer-icons-link-call">
              Group 15
            </a>
          </p>
          <p className="footer-rights">Copyright © {year} Smart Health Pub.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
