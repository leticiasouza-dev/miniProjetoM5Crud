import styled from "styled-components";

export const Sessao = styled.section`
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContainerFormulario = styled.div` 
    width: 430px;
    height: 500px;

    margin: auto;
    padding: 0 20px;
    /* background-color: red; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 30px;
    }

    p{
        margin: 20px 0;
        text-align: center;
    }

    @media screen and (max-width: 428px){
        width: 80%; 
    }
`

export const Formulario = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    input{
        width: 100%;
    }
`