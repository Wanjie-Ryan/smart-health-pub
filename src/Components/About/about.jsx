import React from "react";
import "./about.css";
function About() {
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
          <h1
            style={{
              fontSize: "17px",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              margin: "2rem 0",
            }}
          >
            Our Team Members
          </h1>

          <div className="flex-wrappers">
            <div className="service-boxs  service3">
              <div className="service-contents">
                <h2>Akurathi Naga Sri Manasa</h2>
                <button className="more-buttons">More</button>
              </div>
            </div>

            <div className="service-boxs  service3">
              <div className="service-contents">
                <h2>Haripranay Peddagolla</h2>
                <button className="more-buttons">More</button>
              </div>
            </div>

            <div className="service-boxs  service3">
              <div className="service-contents">
                <h2>Chattala Vaishnavi</h2>
                <button className="more-buttons">More</button>
              </div>
            </div>
            <div className="service-boxs  service3">
              <div className="service-contents">
                <h2>Bobba Sri Sailaja</h2>
                <button className="more-buttons">More</button>
              </div>
            </div>
            <div className="service-boxs  service3">
              <div className="service-contents">
                <h2>Laxman Marsakatla</h2>
                <button className="more-buttons">More</button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h1
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
                // margin: "2rem 0",
              }}
            >
              Our Mission
            </h1>

            <p
              style={{ marginTop: "4px", fontWeight: "bold", fontSize: "21px" }}
            >
              To Secure The human Life
            </p>

            <h1
              style={{
                fontSize: "17px",
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Our Mission
            </h1>

            <p
              style={{
                marginTop: "4px",
                fontWeight: "bold",
                fontSize: "21px",
                marginBottom: "10px",
              }}
            >
              Your health is our priority
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
