import { createGlobalStyle } from "styled-components";

import Rotas from "./Routes/Rotas";


const EstilosGlobais = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Kanit", sans-serif;
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
