import * as S from './Style';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';

import CampoInput from '../../Components/CampoInput/Input';
import Botoes from '../../Components/Botoes/Botoes';
import { useState } from 'react';
import { useCadastrarMedico } from '../../Hooks/useCadastrarMedico';

const { cadastrarMedico } = useCadastrarMedico();

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [hospital, setHospital] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoMedico = 
        {   Nome: nome, 
            Email:email, 
            Telefone: telefone, 
            Especialidade: especialidade, 
            Hospital: hospital
        }
        
        console.log(novoMedico);
        cadastrarMedico(novoMedico)
    }

    return(
        <>
            <Header/>

            <S.MainCadastro>

                <S.SessaoCadastro>
                    <S.ContainerCadastro>
                        <h1>Cadastre-se</h1>

                        <p>Seja bem-vindo ao sistema de cadastro de médicos especializado em doação de sangue. Esta plataforma foi criada para facilitar o registro e a interação de médicos com as instituições de doação, promovendo um gerenciamento eficiente e seguro das informações.</p>

                        <S.FormularioCadastro onSubmit={handleSubmit}>
                            <label htmlFor="">Nome</label>
                            <CampoInput 
                                type="text" 
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />

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

                            <label htmlFor="">Especialidade</label>
                            <CampoInput 
                                type="text" 
                                value={especialidade}
                                onChange={(e) => setEspecialidade(e.target.value)}
                            />

                            <label htmlFor="">Hospital</label>
                            <CampoInput 
                                type="text" 
                                value={hospital}
                                onChange={(e) => setHospital(e.target.value)}
                            />

                            <Botoes nome='Cadastre-se' background="Black" largura='100%'/>
                        </S.FormularioCadastro>

                        <p>Já tem uma conta?<Link to='/login'>Login</Link></p>
                    </S.ContainerCadastro>
                </S.SessaoCadastro>

                <S.SessaoInformações>
                    <p>Estamos felizes em tê-lo aqui. Este é o primeiro passo para se integrar ao nosso sistema, 
                        que foi projetado para facilitar e otimizar o gerenciamento de informações dos 
                        profissionais de saúde.
                        Para começar, por favor, preencha o formulário abaixo com suas informações pessoais e 
                        profissionais. Isso nos ajudará a garantir que todas as suas informações sejam 
                        registradas corretamente e permitir que você aproveite todos os recursos que nosso 
                        sistema tem a oferecer.
                    </p>
                </S.SessaoInformações>

            </S.MainCadastro>

            
        </>
        
    )
}

export default Cadastro;