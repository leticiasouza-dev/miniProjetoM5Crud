import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Rotas from "./Routes/Rotas";
import TelaMedico from "./Pages/TelaMedico/TelaMedico";

const EstilosGlobais = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`
function App() {

  return (
    <>
    <EstilosGlobais/>
      <Rotas/>

      {/* <TelaMedico/> */}
    </>
  )
}

export default App;
