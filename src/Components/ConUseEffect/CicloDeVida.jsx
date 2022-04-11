import { useState, useEffect } from "react";

const CicloDeVida = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //Efectos, estos se ejecutan solamente en el orden que se cargan.

  //el useEffect se ejectuda con cada renderización,
  //al cambiar un estado se renderiza nuevamente y por consecuente se activa useEffect.
  useEffect(() => {
    console.log("useEffect sin dependencia");
  });

  //este useEffect se ejecuta solamente en la primera carga del componente
  useEffect(() => {
    console.log("useEffect con arreglo vacio");
  }, []);

  /*Este efecto se ejecuta solamente al cargar y al cambiar el estado de la dependencia contador */
  useEffect(() => {
    console.log("useEffect contador1");
  }, [contador1]);

  useEffect(() => {
    console.log("useEffect contador2");
  }, [contador2]);

  //este se ejecuta cuando haya cambios en cualquiera de los dos contadores
  useEffect(()=>{
    console.log("useeffect ambos contadores");
  }, [contador1, contador2]);

  return (
    <>
      <div className="container bg-light rounded w-75 p-5">
        <h1 className="bg-light rounded w-75">Ciclo de Vida</h1>

        <h1>Clics C1: {contador1}</h1>
        <h1>Clics C2: {contador2}</h1>
        <button onClick={() => setContador1(contador1 + 1)}>
          Incrementar c1
        </button>
        <button onClick={() => setContador2(contador2 + 1)}>
          Incrementar c2
        </button>
      </div>
    </>
  );
};

export default CicloDeVida;
