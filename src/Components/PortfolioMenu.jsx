import React from "react";
import "./PortfolioMenu.css";
import { Link } from "react-router-dom";

const PortfolioMenu = () => {
  return (
    <>
      <h1> PortfolioMenu </h1>

      <div className="contenedorGrid">
        <Link to="/shieldui" className="cardLink shield">
          <div className="contenedorHijoGrid shield">{/* Shield UI */}</div>
        </Link>
        <Link to="/photography1" className="cardLink photos">
          <div className="contenedorHijoGrid bg-fondo-flower bg-cover text-5xl">
            Photograhy 1
          </div>
        </Link>
        <Link to="/photography2" className="cardLink photos">
          <div className="contenedorHijoGrid text-5xl bg-fondo-volcan bg-cover">
            Photography 2
          </div>
        </Link>
        <Link to="/photography3" className="cardLink photos">
          <div className="contenedorHijoGrid text-5xl bg-fondo-antigua bg-cover">
            Photography 3
          </div>
        </Link>
        <Link to="/photography4" className="cardLink photos">
          <div className="contenedorHijoGrid text-5xl bg-green-500">
            Photography 4
          </div>
        </Link>

        {/* <div className="contenedorHijoGrid">Test UI 5</div>
        <div className="contenedorHijoGrid">Test UI 6</div> */}
      </div>
    </>
  );
};

export default PortfolioMenu;
