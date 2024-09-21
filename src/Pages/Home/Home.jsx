import * as S from './Style';
import Header from "../../Components/Header/Header";
import ContainerBotoes from "../../Components/ContainerBotoes/ContainerBotoes";
import Botoes from "../../Components/Botoes/Botoes";

import { Link } from 'react-router-dom';

import imgMedicos from '../../assets/Doctors-amico.svg'

const Home = () => {
    return(
        <>
            <Header>
                <ContainerBotoes>
                    <Botoes nome="Login" color='Black' to='/login'/>
                    <Botoes nome="Cadastre-se" background="Black" to='/cadastro'/>
                </ContainerBotoes>
            </Header>

            <S.MainHome>
                <S.PrimeiraSessao>
                    <S.ContainerTexto>
                        <h1>Bem-vindo (a) ao Sistema de Cadastro de Médicos!</h1>

                        <p> Uma plataforma inovadora projetada especialmente para médicos e profissionais de saúde. 
                            Desenvolvido com um foco claro em facilitar o trabalho dos médicos que gerenciam e 
                            supervisionam o processo de doação de sangue, nosso sistema visa otimizar todas as etapas do 
                            processo, desde o cadastro até a doação efetiva.
                        </p>

                        <ContainerBotoes>
                            <Botoes nome="Login" background="Black" to='/login'/>
                            <Botoes nome="Cadastre-se" color='Black' to='/cadastro'/>
                        </ContainerBotoes>
                    </S.ContainerTexto>

                    <S.Figure>
                        <img src={imgMedicos} alt="" />
                    </S.Figure>
                </S.PrimeiraSessao>
            </S.MainHome>
        </>
    )
}


export default Home;