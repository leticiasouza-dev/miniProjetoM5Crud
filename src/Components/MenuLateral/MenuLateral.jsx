import * as S from './Style';

import Botoes from '../Botoes/Botoes';

const MenuLateral = () => {
    return(
        <S.MenuLateral>
            <S.Lista>
                <Botoes nome="Home" background='black' largura="100%"/>
                <Botoes nome="Editar cadastro" background='black' largura="100%"/>
                <Botoes nome ='Excluir usuário' background="black" largura="100%"/>
                <Botoes nome ="Sair" background="black" largura="100%"/>
            </S.Lista>
        </S.MenuLateral>
    )
}

export default MenuLateral;