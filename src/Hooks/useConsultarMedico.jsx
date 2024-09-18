import axios from "axios";

const API_URL = 'https://projetofinalm4-22ux.onrender.com/api/medico/all';

export const useConsultarMedico = () => {
    
    const consultaMedico = async (email, telefone) => {
        try {
            //obtendo todos os médicos
            const response = await axios.get(API_URL);
            const medicos = response.data; 

            const medicoEncontrado = medicos.find(medico => 
                medico.Email === email && medico.Telefone === telefone
            );

            if (medicoEncontrado) {
                return medicoEncontrado;
            } else {
                return null; // Se não encontrou nenhum médico
            }
        } catch (error) {
            console.error('Erro ao consultar médico:', error);
            return null; // Em caso de erro, retorna null
        }
    };

    return { consultaMedico };
};
