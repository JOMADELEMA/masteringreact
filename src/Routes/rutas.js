import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../Pages/Index";
import AboutMe from "../Pages/AboutMe";
import Contacto from "../Pages/Contacto";
import Proyectos from "../Pages/Proyectos";
import ShieldUI from "../Pages/ShieldUI";
import NotFoundPage from "../Pages/NotFoundPage";
import Photography1 from "../Pages/Photography1";
import GridPage from "../Pages/GridPage";
import Photography2 from "../Pages/Photography2";
import Photography3 from "../Pages/Photography3";

const crearRutas = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/aboutus" element={<AboutMe />} />
          <Route path="/contactus" element={<Contacto />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/shieldui" element={<ShieldUI />} />
          <Route path="/photography1" element={<Photography1 />} />
          <Route path="/photography2" element={<Photography2 />} />
          <Route path="/photography3" element={<Photography3 />} />
          <Route path="/grid" element={<GridPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default crearRutas;
