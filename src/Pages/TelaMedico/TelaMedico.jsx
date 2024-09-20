import * as S from './Style';
 import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header'
import MenuLateral from '../../Components/MenuLateral/MenuLateral';

import iconeSino from '../../assets/bell.svg'
import avatar from '../../assets/Avatar Image.svg'
import { useContext} from 'react'; // Adicione useContext

import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

const TelaMedico = () => {
   
    const { medico, setMedico } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem
    }

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
                <MenuLateral/>

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