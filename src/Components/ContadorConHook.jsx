import React from 'react'
import useCounter from '../hooks/useCounter'
import {Refresh, Plus, Minus } from "tabler-icons-react";

function ContadorConHook() {

    //const [contador, incrementar, decrementar, resetear] = useCounter(); este es sin definir valor inicial
    const [contador, incrementar, decrementar, resetear] = useCounter(10);


  return (
    <>
      <div className="container text-center">
        <div className="container border w-50 bg-light shadow rounded p-5 opacity">
          <h1>Contador con Hook Personalizado</h1>

          <div className="row">
            <div className="col-12">
              <p className="display-2 "><strong>{contador}</strong></p>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-danger m-3" onClick={decrementar}>
                <Minus size={25}/>
              </button>
              <button
                className="btn btn-success m-3"
                onClick={incrementar}
              >
                <Plus size={25}/>
              </button>
            </div>
            <div className="col">
              <button
                className="btn btn-primary m-3"
                onClick={resetear}
              >
                <Refresh size={25}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContadorConHook