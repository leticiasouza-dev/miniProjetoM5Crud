import styled from "styled-components";

export const Sessao = styled.section`
    margin-top: 100px;

    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
   
`

export const ContainerFormulario = styled.div` 
    width: 30%;

    @media screen and (max-width: 428px){
        width: 80%; 
    }
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`