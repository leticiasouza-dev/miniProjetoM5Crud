
import styled from "styled-components";

const Campo = styled.input`
    height: 35px;

    margin-bottom: 20px;

    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #ffcc00;
        outline: none;
    }
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