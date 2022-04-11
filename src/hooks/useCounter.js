import {useState} from 'react'

//const useCounter = () => { //definirlo sin valor inicial
const useCounter = (valorInicial) => {

    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
        setContador(contador +1);
    }

    const decrementar = () => {
        setContador(contador -1);
    }
    
    const resetear = () => {
        setContador(valorInicial);
    };


  return [
      contador, 
      incrementar, 
      decrementar, 
      resetear
  ]
}

export default useCounter