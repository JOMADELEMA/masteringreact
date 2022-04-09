import React from "react";
import ConProps from "./ConProps";

function PadreProps() {
  const objetoPrueba = {
    id: 0,
    nombre: "Objeto de prueba 1",
    descripcion:
      "Objeto de prueba instanciado solamente para hacer pruebas usando props en el componente.",
    estado: true,
  };

  const objetoPrueba2 = {
    id: 1,
    nombre: "Objeto de prueba 2",
    descripcion:
      "Objeto de prueba instanciado solamente para hacer pruebas usando props en el componente.",
    estado: true,
  };

  const objetoPrueba3 = {
    id: 1,
    nombre: "Objeto de prueba 3",
    descripcion:
      "Objeto de prueba instanciado solamente para hacer pruebas usando props en el componente.",
    estado: true,
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
          <ConProps
            className=""
            texto="Hola"
            objeto={objetoPrueba}
            variante="btn btn-primary"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
          <ConProps
            className=""
            texto="Hola"
            objeto={objetoPrueba2}
            variante="btn btn-success"
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-2">
          <ConProps
            className=""
            texto="Hola"
            objeto={objetoPrueba3}
            variante="btn btn-secondary"
          />
        </div>
      </div>
    </>
  );
}

export default PadreProps;
