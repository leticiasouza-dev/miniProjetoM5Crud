import styled from "styled-components";

export const MenuLateral = styled.aside`
    width: 250px;
    padding: 120px 30px 20px 30px;
    border-right: 1px solid #e0e0e0;
    background-color: #1a1a2e; 
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;

    transition: width 0.3s ease;

    &:hover {
        width: 270px; 
    }

    @media screen and (max-width: 428px){
        width: 150px;
        padding: 120px 10px 20px 10px;
    }


`

export const Lista = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px
    
`