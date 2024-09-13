import { createGlobalStyle } from "styled-components";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

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
      {/* <Home/> */}
      <Login/>
      
    </>
  )
}

export default App;
