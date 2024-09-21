import axios from "axios";

const API_URL = 'https://projetofinalm4-22ux.onrender.com/api/medico/update';

export const useEditarMedico = () => {
    
    const editarMedico = async (medicoId, medicoAtualizado) => {
        try{
            const response = await axios.put(`${API_URL}/${medicoId}`, medicoAtualizado);

            alert('Dados atualizado com sucesso')
            return response.data;
        } catch (erro) {
            alert('Erro ao atualizar dados')
        }
    }

    return {editarMedico}
}