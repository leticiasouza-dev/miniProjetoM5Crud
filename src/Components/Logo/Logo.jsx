import styled from "styled-components";

import logoGotaSangue from '../../assets/logoGotaDeSangue.png';

const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    animation: fadeIn 1s ease forwards;

    @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

    img{
        width: 80px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    @media screen and (max-width: 428px){
        img{
            width: 50px;
        }
    }

    &:hover img {
        transform: scale(1.1); /* Aumenta ligeiramente a logo */
    };
`

const ContainerTexto = styled.div`
    p{
        font-size: 1.5rem;
        font-weight: bold;
        color: #ffcc00;
        opacity: 0;
        animation: slideIn 1s ease forwards 0.5s;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
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