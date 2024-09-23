import * as S from './Style';

import Botoes from '../Botoes/Botoes';

const MenuLateral = ({editar, setMostrarFormularioEdicao, excluir, sair, }) => {
    return(
        <S.MenuLateral>
            <S.Lista>
                <Botoes nome="Home" background='#4ecca3' largura="100%"/>
                <Botoes nome="Editar cadastro" background='#4ecca3' largura="100%" onClick={() => setMostrarFormularioEdicao(true)}/>
                <Botoes nome ='Excluir usuário' background="#4ecca3" largura="100%" onClick={excluir}/>
                <Botoes nome ="Sair" background="#4ecca3" largura="100%" onClick={sair}/>
            </S.Lista>
        </S.MenuLateral>
    )
}

export default MenuLateral;