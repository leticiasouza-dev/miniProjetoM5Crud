import * as S from './Style';

import Botoes from '../Botoes/Botoes';

const MenuLateral = ({excluir, sair}) => {
    return(
        <S.MenuLateral>
            <S.Lista>
                <Botoes nome="Editar cadastro" background='black' largura="100%"/>
                <Botoes nome ='Excluir usuário' background="black" largura="100%" onClick={excluir}/>
                <Botoes nome ="Sair" background="black" largura="100%" onClick={sair}/>
            </S.Lista>
        </S.MenuLateral>
    )
}

export default MenuLateral;