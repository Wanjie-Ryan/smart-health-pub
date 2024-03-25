import React, { useState } from "react";
import "./home.css";
import team from "../../Assets/team.jpg";
import { FaCircleArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="blur-overlay"></div>
        <div className="content">
          <h1>Welcome to Smart Health Hub</h1>
          <p style={{ marginTop: "20px" }}>
            Your Health is our priority, where we care about your health
          </p>
          <div className="button-container">
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
            <Link to="/register">
              <button className="register-button">Register</button>
            </Link>
          </div>
          <div className="arrow bounce">
            <FaCircleArrowDown className="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
