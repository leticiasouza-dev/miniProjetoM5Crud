import axios from "axios";

const API_URL = 'https://projetofinalm4-22ux.onrender.com/api/medico/verificar';

export const useConsultarMedico = () => {
    
    const consultaMedico = async (email, telefone) => {
        try{
            const response = await axios.get(API_URL, {
                params: {
                    Email: email,
                    Telefone: telefone
                }
            });

            if (response.status === 200 && response.data.length > 0) {
                return response.data[0]; // Retorna o primeiro médico encontrado
            } else {
                return null; // Se não encontrou nenhum médico
            }
        }  catch{
            console.log('erro ao encontrar o médico')
        }
    } 

    return {consultaMedico};

}