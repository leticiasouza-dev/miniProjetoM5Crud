import * as S from './Style';
import Header from "../../Components/Header/Header";
import Botoes from '../../Components/Botoes/Botoes';
import { Link } from 'react-router-dom';
import CampoInput from '../../Components/CampoInput/Input';
import { useState } from 'react';
import { useConsultarMedico } from '../../Hooks/useConsultarMedico';

const Login = () => {
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('');
    const {consultaMedico} = useConsultarMedico();

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const medico = await consultaMedico(email, telefone);
            if(medico) {
                console.log('login efetivado')
            } else {
                console.log('Médico não encontrado');
                alert('Médico não encontrado com os dados fornecidos.');
            }

        } catch (erro){
            console.log('Médico não encontrado');
        }
    }

    return(
        <>
            <Header>
                <p>Não tem uma Conta?<Link to='/cadastro'>Cadastre-se</Link></p>
            </Header>

            <S.Sessao>
                <S.ContainerFormulario>
                    <h1>Login in</h1>

                    <p>Por favor, faça login para acessar e gerenciar as informações de médicos de forma segura e prática.</p>

                    <S.Formulario onSubmit={handleLogin}>
                        <label htmlFor="">Email</label>
                        <CampoInput 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="">Telefone</label>
                        <CampoInput 
                            type="tel"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />

                        <Botoes nome="Login" background="Black" largura='100%'/>
                    </S.Formulario>

                    
                    
                    
        
                </S.ContainerFormulario>

                
            </S.Sessao>

        </>
        
    )
}

export default Login;