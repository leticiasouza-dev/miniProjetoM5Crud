import styled from "styled-components";

const Botao = styled.button`
    background-color: ${props => props.background || 'white'};
    color: ${props => props.color || 'white'};
    padding: 10px 25px;
`

const Botoes = ({nome, background, color}) => {
    return(
        <Botao background={background} color={color}>
            {nome}
        </Botao>
    )
}

export default Botoes