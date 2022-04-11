import React, { useState, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";

const MouseApp = () => {
  const posicion = useMousePosition();

  return (
    <>
      {posicion.x > window.innerWidth / 2 ? (
        <div className="container bg-primary rounded p-5">
          <pre className="display-6">
            {JSON.stringify(posicion, null, 2)}
          </pre>
        </div>
      ) : (
        <div className="container bg-success rounded p-5">
          <pre className="display-6">
            {JSON.stringify(posicion, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
};

export default MouseApp;
