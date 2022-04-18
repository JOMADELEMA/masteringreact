import React from "react";
import "./ShieldUI.css";
import Seccion from "../Components/ShieldUIComponents/Seccion.jsx";
import ContenedorIconos from "../Components/ShieldUIComponents/ContenedorIconos.jsx";

const ShieldUI = () => {
  return (
    <>
      <div className="container-fluid backgroundStyle">
        <div id="contenedorMenu" className="contenedorMenu">
          <ContenedorIconos />
        </div>
      </div>

      <Seccion nombre="Pokedex" />

      <Seccion nombre="Pokemon" />

      <Seccion nombre="Bag" />

      <Seccion nombre="League_Card" />

      <Seccion nombre="Save" />

      <Seccion nombre="Town_Map" />

      <Seccion nombre="Pokemon_Camp" />

      <Seccion nombre="Mystery_Gift" />

      <Seccion nombre="VS" />

      <Seccion nombre="Options" />
    </>
  );
};

export default ShieldUI;
