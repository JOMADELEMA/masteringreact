import "./App.css";
import Contador from "./Components/Contador";
import ContadorConHook from "./Components/ContadorConHook";
import PadreProps from "./Components/Props/PadreProps";

function App() {
  return (
    <>
      <h1>Hola React</h1>

      {/* <Contador /> */}
      {/* <PadreProps /> */}
      <ContadorConHook />
    </>
  );
}

export default App;
