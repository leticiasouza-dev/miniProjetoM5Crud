import { Link } from "react-router-dom";
import styled from "styled-components";

const Botao = styled(Link)`
    background-color: ${props => props.background || 'white'};
    color: ${props => props.color || 'white'};
    width: ${props => props.largura || '130px'};

    text-align: center;
    white-space: nowrap;
    padding: 10px 25px;

    cursor: pointer;

    border: 1px solid black;
    text-decoration: none;
`

const Botoes = ({nome, background, color, to, largura, type}) => {
    return(
        <Botao href="" background={background} color={color} largura={largura} to={to} type={type}>
            {nome}
        </Botao>
    )
}

export default Botoes