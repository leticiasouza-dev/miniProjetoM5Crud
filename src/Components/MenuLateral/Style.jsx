import styled from "styled-components";

export const MenuLateral = styled.aside`
    width: 250px;
    padding: 120px 30px 20px 30px;
    border-right: 1px solid black;
    position: fixed; /* Faz o menu ficar fixo na lateral */
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;

    @media screen and (max-width: 428px){
        width: 150px;
        padding: 120px 10px 20px 10px;
    }


`

export const Lista = styled.ul`

`