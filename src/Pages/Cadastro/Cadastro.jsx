import * as S from './Style';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';

import CampoInput from '../../Components/CampoInput/Input';
import Botoes from '../../Components/Botoes/Botoes';

const Cadastro = () => {
    return(
        <>
            <Header/>

            <S.MainCadastro>

                <S.SessaoCadastro>
                    <S.ContainerCadastro>
                        <h1>Cadastre-se</h1>

                        <p>Seja bem-vindo ao sistema de cadastro de médicos especializado em doação de sangue. Esta plataforma foi criada para facilitar o registro e a interação de médicos com as instituições de doação, promovendo um gerenciamento eficiente e seguro das informações.</p>

                        <S.FormularioCadastro>
                            <label htmlFor="">Nome</label>
                            <CampoInput type="text" />

                            <label htmlFor="">Email</label>
                            <CampoInput type="email" />

                            <label htmlFor="">Telefone</label>
                            <CampoInput type="tel" />

                            <label htmlFor="">Especialidade</label>
                            <CampoInput type="text" />

                            <label htmlFor="">Hospital</label>
                            <CampoInput type="text" />

                        </S.FormularioCadastro>

                        <Botoes nome='Cadastre-se' background="Black" largura='100%' type='submit'/>

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