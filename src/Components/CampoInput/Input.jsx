
import styled from "styled-components";

const Campo = styled.input`
    height: 35px;

    margin-bottom: 20px;
`

const CampoInput = ({type}) => {
    return(
        <Campo type={type} required/>
    )
}

export default CampoInput;