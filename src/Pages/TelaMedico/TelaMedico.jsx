import * as S from './Style';
 import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header'
import MenuLateral from '../../Components/MenuLateral/MenuLateral';

import iconeSino from '../../assets/bell.svg'
import avatar from '../../assets/Avatar Image.svg'
import { useContext} from 'react'; // Adicione useContext

import { UserContext } from '../../UserContext';

const TelaMedico = () => {
   
    const { medico } = useContext(UserContext);
    console.log(medico)

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