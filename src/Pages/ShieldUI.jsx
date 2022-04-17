import React from "react";
import "./ShieldUI.css";
import Seccion from "../Components/ShieldUIComponents/Seccion.jsx";
import ContenedorIconos from "../Components/ShieldUIComponents/ContenedorIconos.jsx";

const ShieldUI = () => {
  return (
    <>
      <div className="container-fluid backgroundStyle">
        <div id="contenedorMenu">
          <ContenedorIconos />
        </div>
      </div>

      <Seccion nombre="Pokedex" />
      <Seccion nombre="Pokemon" />
      <Seccion nombre="Bag" />
      <Seccion nombre="League-Card" />
      <Seccion nombre="Save" />
      <Seccion nombre="Town-Map" />
      <Seccion nombre="Pokemon-Camp" />
      <Seccion nombre="Mystery-Gift" />
      <Seccion nombre="VS" />
      <Seccion nombre="Options" />
    </>
  );
};

export default ShieldUI;
