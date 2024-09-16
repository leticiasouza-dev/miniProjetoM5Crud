import * as S from './Style';

import Header from '../../Components/Header/Header'
import MenuLateral from '../../Components/MenuLateral/MenuLateral';

import iconeSino from '../../assets/bell.svg'
import avatar from '../../assets/Avatar Image.svg'

const TelaMedico = () => {
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


                kkkkkkkkkk
            </S.MainTelaMedico>
        </>
    )
}

export default TelaMedico;