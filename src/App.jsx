import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home/Home";

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
      <Home/>
      
    </>
  )
}

export default App;
