import * as S from './Style';
import Header from "../../Components/Header/Header";
import ContainerBotoes from '../../Components/ContainerBotoes/ContainerBotoes';
import Botoes from '../../Components/Botoes/Botoes';

const Login = () => {
    return(
        <>
            <Header>
                <p>Não tem uma Conta?<a href="">Sign up</a></p>
            </Header>

            <S.Sessao>
                <S.ContainerFormulario>
                    <h1>Login in</h1>

                    <p>Por favor, faça login para acessar e gerenciar as informações de médicos de forma segura e prática.</p>

                    <S.Formulario>
                        <label htmlFor="">Email</label>
                        <input type="email" />

                        <label htmlFor="">Telefone</label>
                        <input type="tel" />
                    </S.Formulario>
        
                </S.ContainerFormulario>

                <ContainerBotoes>
                    <Botoes nome="Login" background="Black"/>
                </ContainerBotoes>
            </S.Sessao>

        </>
        
    )
}

export default Login;