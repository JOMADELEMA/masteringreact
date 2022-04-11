import { useState, useEffect } from "react";

const posicionInicial = { x: null, y: null };

const useMousePosition = () => {
  const [posicion, setPosicion] = useState(posicionInicial);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosicion({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return posicion;
};

export default useMousePosition;
