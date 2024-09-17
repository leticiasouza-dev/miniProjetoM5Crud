import axios from "axios";

const API_URL = 'https://projetofinalm4-22ux.onrender.com/api/medico/new';

export const useCadastrarMedico = () => {

    const cadastrarMedico = async (medico) => {
        try{
            await axios.post(API_URL, medico)
            console.log(response.data)
            alert('sucesso')
        } catch{
            alert('erro');
        }

    }

    return {cadastrarMedico}
    
}