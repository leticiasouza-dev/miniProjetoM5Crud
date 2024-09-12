import Header from "./Components/Header/Header";
import ContainerBotoes from "./Components/ContainerBotoes/ContainerBotoes";
import Botoes from "./Components/Botoes/Botoes";
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
      <Header>
            <ContainerBotoes>
                <Botoes nome="Login" color='Black'/>
                <Botoes nome="Cadastre-se" background="Black"/>
            </ContainerBotoes>
      </Header>
      
    </>
  )
}

export default App
