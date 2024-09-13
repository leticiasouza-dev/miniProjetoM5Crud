import styled from "styled-components";

export const Main = styled.main`
    margin-top: 100px;

    @media screen and (max-width: 428px){
        margin-top: 120px;
    }
`

export const PrimeiraSessao = styled.section`
    display: flex;
    
    align-items: center;

    @media screen and (max-width: 428px){
        flex-direction: column; 
    }

`

export const ContainerTexto = styled.div`
    width: 50%;

    padding: 0 70px;

    h1{
        font-size: 45px;
    }

    p{
        margin: 30px 0;
    }

    @media screen and (max-width: 428px){
        width: 100% ;

        padding: 0 40px;

        text-align: center;
    }
`

export const Figure = styled.figure`
    width: 50%;
    
    text-align: center;

    img{
        width: 90%;
        height: 600px;
    }

    @media screen and (max-width: 428px){
        img{
            display: none;
        }   
    }
`