import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../Pages/Index";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

const crearRutas = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default crearRutas;
