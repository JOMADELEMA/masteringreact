import React from "react";
import "./PortfolioMenu.css";
import { Link } from "react-router-dom";

const PortfolioMenu = () => {
  return (
    <>
      <h1> PortfolioMenu </h1>

      <div className="contenedorGrid">
        <Link to="/shieldui" className="cardLink shield">
          <div className="contenedorHijoGrid shield">
            {/* Shield UI */}
          </div>
        </Link>
        <Link to="/photography1" className="cardLink photos">
          <div className="contenedorHijoGrid">
            Photograhy 1
          </div>
        </Link>
        <div className="contenedorHijoGrid">Test UI 3</div>
        <div className="contenedorHijoGrid">Test UI 4</div>
        <div className="contenedorHijoGrid">Test UI 5</div>
        <div className="contenedorHijoGrid">Test UI 6</div>
      </div>
    </>
  );
};

export default PortfolioMenu;
