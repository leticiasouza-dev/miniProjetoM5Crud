import { Link } from "react-router-dom";
import styled from "styled-components";

const Botao = styled.button`
    background-color: ${props => props.background || 'white'};
    color: ${props => props.color || 'white'};
    width: ${props => props.largura || '130px'};

    text-align: center;
    white-space: nowrap;
    padding: 10px 25px;

    cursor: pointer;

    border: 1px solid black;
    text-decoration: none;

    &:hover {
        opacity: 0.9;
        transform: scale(1.05);
        transition: all 0.3s ease;
    }

    &:active {
        transform: scale(0.95);
        transition: all 0.1s ease;
    }
`

const Botoes = ({nome, background, color, largura, to, onClick}) => {
    if(to){
        return (
            <Link to={to} style={{ textDecoration: 'none' }}>
                <Botao background={background} color={color} largura={largura} type="button">
                    {nome}
                </Botao>
            </Link>
        );
    }


    return(
        <Botao background={background} color={color} largura={largura} type='submit' onClick={onClick}>
            {nome}
        </Botao>
    )
}

export default Botoes