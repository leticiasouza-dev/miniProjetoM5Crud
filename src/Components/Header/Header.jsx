import styled from "styled-components";

import Logo from "../Logo/Logo";
import Botoes from "../Botoes/Botoes";
import ContainerBotoes from "../ContainerBotoes/ContainerBotoes";

const ContainerHeader = styled.header`
    position: fixed;
    width: 100%;
    z-index: 1000;

    display: flex;
    justify-content: space-between;

    padding: 5px 35px;
`

const Header = ({children}) => {
    return(
        <ContainerHeader>
            <Logo/>

            {children}
            

            
        </ContainerHeader>
    )
}

export default Header