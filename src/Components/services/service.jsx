import React from "react";
import "./service.css";
import Image1 from "../../Assets/image1.jpg";
import Image2 from "../../Assets/image2.jpg";
function Service() {
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
            Our Services
          </h1>

          <div className="flex-wrapper">
            <div className="service-box  service1">
              <div className="service-content">
                <h2>Personal Health Records</h2>
                <button className="more-button">More</button>
              </div>
            </div>

            <div className="service-box  service2">
              <div className="service-content">
                <h2>Appointement Scheduling</h2>
                <button className="more-button">More</button>
              </div>
            </div>

            <div className="service-box  service1">
              <div className="service-content">
                <h2>Symptom Checker</h2>
                <button className="more-button">More</button>
              </div>
            </div>
            <div className="service-box  service1">
              <div className="service-content">
                <h2>Medication Reminders</h2>
                <button className="more-button">More</button>
              </div>
            </div>
            <div className="service-box  service1">
              <div className="service-content">
                <h2>Health Forums</h2>
                <button className="more-button">More</button>
              </div>
            </div>
            <div className="service-box  service2">
              <div className="service-content">
                <h2>Secure Messaging</h2>
                <button className="more-button">More</button>
              </div>
            </div>
            <div className="service-box  service1">
              <div className="service-content">
                <h2>Health Analytics Dashboard</h2>
                <button className="more-button">More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
