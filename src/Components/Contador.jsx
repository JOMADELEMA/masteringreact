import React, { useState } from "react";
import {Refresh, Plus, Minus } from "tabler-icons-react";

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function reducir() {
    setContador(contador - 1);
  }

  function restablecer() {
    setContador(0);
  }

  return (
    <>
      <div className="container text-center">
        <div className="container border w-50 bg-light shadow rounded p-5 opacity">
          <h1>Contador</h1>

          <div className="row">
            <div className="col-12">
              <p className="display-2 "><strong>{contador}</strong></p>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-danger m-3" onClick={() => reducir()}>
                <Minus size={25}/>
              </button>
              <button
                className="btn btn-success m-3"
                onClick={() => aumentar()}
              >
                <Plus size={25}/>
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-primary m-3"
                onClick={() => restablecer()}
              >
                <Refresh size={25}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contador;
