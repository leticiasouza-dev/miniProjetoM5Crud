import styled from "styled-components";

const Container = styled.div`
    background-color: red;
    width: 250px;
`

const ContainerBotoes = ({children}) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default ContainerBotoes;