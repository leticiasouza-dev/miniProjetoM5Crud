import Header from "./Components/Header/Header";
import { createGlobalStyle } from "styled-components";

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
    <Header/>
      
    </>
  )
}

export default App
