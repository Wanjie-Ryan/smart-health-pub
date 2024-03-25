import React, { useState } from "react";
import "./reg.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const [errmsg, setErrormsg] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePwd = (e) => {
    setPwd(e.target.value);
  };

  //   const handleRegistration = async (e) => {
  //     e.preventDefault();
  //     if (!name || !email || !pwd) {
  //       toast.error("Please fill in all the fields");
  //       return;
  //     }

  //     setLoad(true);

  //     try {
  //       const data = {
  //         name: name,
  //         email: email,
  //         password: pwd,
  //       };

  //       const response = await axios.post(
  //         "http://localhost:3003/api/register",
  //         data
  //       );
  //       // console.log(response)

  //       toast.success("Registration Successful");

  //       setTimeout(() => {
  //         navigate("/login");
  //       }, 1000);
  //       setLoad(false);
  //     } catch (err) {
  //       // console.log(err);
  //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //       if (pwd.length < 5) {
  //         toast.error(
  //           "Password is too short. Please enter at least 5 characters."
  //         );
  //         setLoad(false);

  //         return;
  //       } else if (!emailRegex.test(email)) {
  //         toast.error("Invalid email address. Please enter a valid email.");
  //         setLoad(false);

  //         return;
  //       } else {
  //         setErrormsg(
  //           "There seems to be an error, refresh the page and try again!"
  //         );

  //         toast.error(errmsg);
  //         setLoad(false);
  //       }
  //     } finally {
  //       setLoad(false);
  //     }
  //   };

  return (
    <>
      <section className="registration">
        <form className="registration-form">
          <h2 style={{ marginTop: "100px", color: "white" }}>Registration</h2>

          <div style={{ marginTop: "20px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <label style={{ color: "white" }}>Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input"
                  value={name}
                  onChange={handleName}
                />
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <label style={{ color: "white" }}>Email Address</label>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <label style={{ color: "white" }}>Password</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  value={pwd}
                  onChange={handlePwd}
                />
              </div>
            </div>
          </div>

          <button
            style={{
              marginTop: "20px",
              padding: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {load ? (
              <AiOutlineLoading3Quarters className="loading-icon" />
            ) : (
              "Register"
            )}
          </button>
        </form>
      </section>
    </>
  );
}

export default Register;
