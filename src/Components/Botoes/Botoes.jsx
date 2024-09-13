import styled from "styled-components";

const Botao = styled.a`
    background-color: ${props => props.background || 'white'};
    color: ${props => props.color || 'white'};

    padding: 10px 25px;

    cursor: pointer;

    border: 1px solid black;
    text-decoration: none;

    

`

const Botoes = ({nome, background, color}) => {
    return(
        <Botao href="" background={background} color={color} >
            {nome}
        </Botao>
    )
}

export default Botoes