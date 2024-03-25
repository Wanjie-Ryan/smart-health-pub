import React from "react";
import "./contact.css";
import { BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";
function Contact() {
  return (
    <>
      <section style={{ width: "100%", minHeight: "60vh" }}>
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            Feel Free To Reach Us and Enquire, Your health is our Priority
          </p>

          <div style={{ marginTop: "30px" }}>
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

            <form
              style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="form-group"
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label htmlFor="name" style={{ fontWeight: "600" }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="input-type"
                />
              </div>

              <div
                className="form-group"
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label htmlFor="email" style={{ fontWeight: "600" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="input-type"
                />
              </div>

              <div
                className="form-group"
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label htmlFor="message" style={{ fontWeight: "600" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                  className="input-type"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-submit"
                  style={{
                    marginTop: "10px",
                    padding: "2px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
