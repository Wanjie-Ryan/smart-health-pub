import React, { useState } from "react";
import "./nav.css";
import { BsChatDots, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
function Nav() {
  const [asideOpen, setAsideOpen] = useState(false);
  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <>
      <nav className="nav-main">
        <div className="nav-main__nav-inner">
          <div className="nav-main__left">
            <Link to="/" className="home-link">
              <h2>Smart Health Pub</h2>
            </Link>
          </div>

          <div className="nav-main__right">
            <div className="nav-main__right__dashboard">
              <Link to="/" className="link-dashboard">
                <p>Home</p>
              </Link>
            </div>

            <div className="nav-main__right__dashboard">
              <Link to="/about" title="chats" className="link-dashboard">
                <p>About</p>
              </Link>
            </div>

            <div className="nav-main__right__dashboard">
              <Link to="/service" title="chats" className="link-dashboard">
                <p>Service</p>
              </Link>
            </div>

            <div className="nav-main__right__dashboard">
              <Link to="/contact" title="chats" className="link-dashboard">
                <p>Contact</p>
              </Link>
            </div>

            <div className="nav-main__right__dashboard-menu">
              <BiMenu className="menu-icon" onClick={toggleAside} />
            </div>
          </div>
        </div>
      </nav>

      <aside className={`main-aside ${asideOpen ? "active" : ""}`}>
        <div className="main-aside__inner">
          <div className="main-aside__inner__top">
            <div className="main-aside__inner__top__title">
              <Link to="/" className="home-link">
                <h2>Smart Health Pub</h2>
              </Link>
            </div>

            <div className="main-aside__inner__top__close">
              <AiOutlineCloseCircle
                className="main-aside__inner__top-close"
                onClick={toggleAside}
              />
            </div>
          </div>

          <div className="main-aside__inner__botom">
            <div className="main-aside__inner__top__dashboard">
              <Link to="/home" className="link-dashboard">
                <p>Home</p>
              </Link>
            </div>

            <div className="main-aside__inner__top__dashboard">
              <Link to="/about" title="chats" className="link-dashboard">
                <p>About</p>
              </Link>
            </div>

            <div className="main-aside__inner__top__dashboard">
              <Link to="/service" title="chats" className="link-dashboard">
                <p>Service</p>
              </Link>
            </div>
            <div className="main-aside__inner__top__dashboard">
              <Link to="/contact" title="chats" className="link-dashboard">
                <p>Contact</p>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Nav;
