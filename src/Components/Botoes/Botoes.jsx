import { Link } from "react-router-dom";
import styled from "styled-components";

const Botao = styled(Link)`
    background-color: ${props => props.background || 'white'};
    color: ${props => props.color || 'white'};

    padding: 10px 25px;

    cursor: pointer;

    border: 1px solid black;
    text-decoration: none;
`

const Botoes = ({nome, background, color, to}) => {
    return(
        <Botao href="" background={background} color={color} to={to}>
            {nome}
        </Botao>
    )
}

export default Botoes