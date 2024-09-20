import axios from "axios";

const API_URL = 'https://projetofinalm4-22ux.onrender.com/api/medico/new';

export const useCadastrarMedico = () => {

    const cadastrarMedico = async (medico) => {
        try {
            // Captura a resposta da requisição
            const response = await axios.post(API_URL, medico);
            alert('Cadastro realizado com sucesso!');
            console.log(response.data);
            
        } catch (erro) {
            alert('Erro ao cadastrar o médico: ' + erro.message);
            console.error(erro);
        }

    }

    return {cadastrarMedico}
    
}