import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";

import {
  IndexPage,
  AboutMe,
  Contacto,
  Proyectos,
  ShieldUI,
  NotFoundPage,
  Photography1,
  Photography2,
  Photography3,
  Photography4,
  GridPage,
} from "../Pages";

const crearRutas = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route path="/app" element={<App />} />
          <Route path="/aboutus" element={<AboutMe />} />
          <Route path="/contactus" element={<Contacto />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/shieldui" element={<ShieldUI />} />
          <Route path="/photography1" element={<Photography1 />} />
          <Route path="/photography2" element={<Photography2 />} />
          <Route path="/photography3" element={<Photography3 />} />
          <Route path="/photography4" element={<Photography4 />} />
          <Route path="/grid" element={<GridPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default crearRutas;
