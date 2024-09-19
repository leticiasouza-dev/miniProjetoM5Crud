import axios from "axios";

const API_URL = 'https://projetofinalm4-22ux.onrender.com/api/medico/verificar';

export const useConsultarMedico = () => {
    
    const consultaMedico = async (email, telefone) => {
        try {
            const response = await axios.get(API_URL, {
                params: { email, telefone }  // Envia os parâmetros corretamente
            });

            return response.data;
        } catch (error) {
            console.error('Erro ao consultar médico:', error);
            return null;
        }
    };

    return { consultaMedico };
};
