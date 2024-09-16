import styled from "styled-components";

import Logo from "../Logo/Logo";
import Botoes from "../Botoes/Botoes";
import ContainerBotoes from "../ContainerBotoes/ContainerBotoes";

const ContainerHeader = styled.header`
    background-color: white;
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
    left:0;

    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    padding: 5px 35px;

    @media screen and (max-width: 428px){
        padding: 5px 10px;
        justify-content: center;
    }
`

const Header = ({children}) => {
    return(
        <ContainerHeader>
            <Logo/>

            {children}
            

            
        </ContainerHeader>
    )
}

export default Header;