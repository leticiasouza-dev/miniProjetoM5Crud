import * as S from './Style';
 import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header'
import MenuLateral from '../../Components/MenuLateral/MenuLateral';

import iconeSino from '../../assets/bell.svg'
import avatar from '../../assets/Avatar Image.svg'
import { useContext} from 'react'; // Adicione useContext
import { useDeletarMedico } from '../../Hooks/UseDeletarMedico';

import { MedicoProvider, UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

const {deletarMedico} = useDeletarMedico();

const TelaMedico = () => {
   
    const { medico, setMedico } = useContext(UserContext);
    const navigate = useNavigate();

    // const handleSair = (e) => {
    //     // localStorage.removeItem('medico')
    //     navigate('/');
    // }

    const deletarMedicoId = async () => {
        console.log("clicou")
        try {
            await deletarMedico(medico.id); // Passe o ID do médico como argumento
            // Lógica adicional após a deleção (se necessário)
        } catch (error) {
            console.error('Erro ao deletar médico:', error);
        }
    };

    useEffect(() => {
        const medicoLogin = localStorage.getItem('medico');
        if (medicoLogin) {
            setMedico(JSON.parse(medicoLogin));
        } else {
            navigate("/login");
        }

        const apagarSessaoAoRecarregar = () => {
            localStorage.removeItem('medico')
        }

        window.addEventListener('beforeunload', apagarSessaoAoRecarregar);

        return () => {
            window.removeEventListener('beforeunload', apagarSessaoAoRecarregar)
        }


    }, [navigate, setMedico]);

    return(
        <>
            <Header>
                <input type="text" />

                <S.ContainerIcons>
                    <img src={iconeSino} alt="" />
                    <img src={avatar} alt="" />
                </S.ContainerIcons>
            </Header>

            <S.MainTelaMedico>
                <MenuLateral onClick={deletarMedicoId}/>

                {medico ? (
                <p>Bem-vindo, {medico.Nome}</p> // ajuste conforme os dados do usuário
                ) : (
                <p>Nenhum usuário logado.</p>
                )}
                    
                
                
            </S.MainTelaMedico>
        </>
    )
}

export default TelaMedico;