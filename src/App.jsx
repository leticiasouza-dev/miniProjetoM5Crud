import Logo from "./Components/Logo/Logo"
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
    <Logo/>
      
    </>
  )
}

export default App
