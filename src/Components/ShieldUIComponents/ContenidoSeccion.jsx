import React from "react";
import "./ContenidoSeccion.css";
import Pokedex from "./Secciones/Pokedex";

const ContenidoSeccion = () => {
  return (
    <>
      <div
        className="contenidoSeccionPokedex"
        style={{ height: "700px", border: "solid black", borderRadius: "10px" }}
      >
<Pokedex />

      </div>
    </>
  );
};

export default ContenidoSeccion;
