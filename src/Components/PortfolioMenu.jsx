import React from "react";
import "./PortfolioMenu.css";
import { Link } from "react-router-dom";

const PortfolioMenu = () => {
  return (
    <>
      <h1> PortfolioMenu </h1>

      <div className="contenedorGrid">
        <div className="contenedorHijoGrid">
          <Link to="/shieldui" className="cardLink">
            Shield UI
          </Link>
        </div>
        <div className="contenedorHijoGrid">Test UI 2</div>
        <div className="contenedorHijoGrid">Test UI 3</div>
        <div className="contenedorHijoGrid">Test UI 4</div>
        <div className="contenedorHijoGrid">Test UI 5</div>
        <div className="contenedorHijoGrid">Test UI 6</div>
      </div>
    </>
  );
};

export default PortfolioMenu;
