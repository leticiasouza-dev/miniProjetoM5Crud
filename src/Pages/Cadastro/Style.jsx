import styled from "styled-components";

export const MainCadastro = styled.main`
    margin-top: 100px; 
    display: flex;
    flex-wrap: wrap;

    height: 90vh;
`

export const SessaoCadastro = styled.section`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 428px){
        width: 100%;
    }
`

export const ContainerCadastro = styled.div`
    margin: auto;
    padding: 0 120px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        margin-top: 15px;
        font-size: 30px;
    }

    p{
        margin: 20px 0;
        text-align: center;
    }

    @media screen and (max-width: 428px){
        padding: 0 50px;
    }
`

export const FormularioCadastro = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const SessaoInformações = styled.section`
    width: 50%;

    background-color: #f4f4f4;

    @media screen and (max-width: 428px){
        display: none;
    }
`