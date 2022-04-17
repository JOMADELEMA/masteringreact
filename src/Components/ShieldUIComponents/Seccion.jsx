import React from "react";
import { ChevronLeft } from "tabler-icons-react";
import ContenidoSeccion from "./ContenidoSeccion";

const Seccion = (props) => {
  const { nombre } = props;
  const nombreClase = `container-fluid background${nombre}Style`;

  return (
    <div className={nombreClase}>
      <a
        href="#contenedorMenu"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          color: "black",
        }}
      >
        <ChevronLeft size={35} />
        <h1 className="" id={nombre.toLowerCase()}>
          {nombre}
        </h1>
      </a>

        <ContenidoSeccion />
    </div>
  );
};

export default Seccion;