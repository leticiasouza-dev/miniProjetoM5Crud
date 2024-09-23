import styled from "styled-components";

export const ContainerIcons = styled.figure`
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* background-color: red; */
    width: 250px;
`

export const MainTelaMedico = styled.main`
    height: 90vh;
    margin-top: 90px;
    margin-left: 250px;
    background-color: #f4f4f4;

    @media screen and (max-width: 428px){
        
    }
`

export const DadosMedico = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2rem;
    margin: 1rem auto; 

    background-color: #fff;

    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

    width: 100%;
    max-width: 600px;
   
`

export const ParagrafoDados = styled.p`
    font-size: 1.5rem;
    color: #11111d; 
    font-weight: bold;
    background-color: #f0f0f0; 
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); 
    text-align: center;
    width: 100%;
    max-width: 400px; 
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 428px) {
        font-size: 1.2rem; 
        padding: 0.75rem;
    }
`