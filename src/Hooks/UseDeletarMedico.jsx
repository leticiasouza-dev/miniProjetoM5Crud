import axios from "axios";
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const API_URL = 'https://projetofinalm4-22ux.onrender.com/api/medico/id';

export const useDeletarMedico = () => {
    const deletarMedico = async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/${id}`, {
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao deletar médico:', error);
            throw error;
        }
    };

    return { deletarMedico };
};
