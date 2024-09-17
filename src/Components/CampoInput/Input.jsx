
import styled from "styled-components";

const Campo = styled.input`
    height: 35px;

    margin-bottom: 20px;
`

const CampoInput = ({type, value, onChange}) => {
    return(
        <Campo 
            type={type} 
            required
            value={value}
            onChange={onChange}
        />
    )
}

export default CampoInput;