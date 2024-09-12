import styled from "styled-components";

const Botao = styled.button`

`

const Botoes = ({nome}) => {
    return(
        <Botao>
            {nome}
        </Botao>
    )
}

export default Botoes