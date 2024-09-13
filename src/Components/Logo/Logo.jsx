import styled from "styled-components";

import logoGotaSangue from '../../assets/logoGotaDeSangue.png';

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 80px;
    }

    @media screen and (max-width: 428px){
        img{
            width: 50px;
        }
    }
`

const ContainerTexto = styled.div`

`

const Logo = () => {
    return(
        <ContainerLogo>
            <img src={logoGotaSangue} alt="" />

            <ContainerTexto>
                <p>Gotas de Sangue</p>
            </ContainerTexto>
        </ContainerLogo>
    )
}

export default Logo;