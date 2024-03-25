import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./Pages/Home/home";
import ContactComponent from "./Pages/contact/contact";
import ServiceComponent from "./Pages/services/service";
import AboutComponent from "./Pages/About/about";
import RegisterComponent from "./Pages/register/reg";
import LoginComponent from "./Pages/login/login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/service" element={<ServiceComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
