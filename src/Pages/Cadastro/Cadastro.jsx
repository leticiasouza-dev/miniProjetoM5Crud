import * as S from './Style';

import Header from '../../Components/Header/Header';

const Cadastro = () => {
    return(
        <>
            <Header/>

            <S.MainCadastro>

                <S.SessaoCadastro>
                    <S.ContainerCadastro>
                        <h2>Cadastre-se</h2>

                        <S.FormularioCadastro>
                            <label htmlFor="">Nome</label>
                            <input type="text" />

                            <label htmlFor="">Email</label>
                            <input type="email" />

                            <label htmlFor="">Telefone</label>
                            <input type="tel" />

                            <label htmlFor="">Especialidade</label>
                            <input type="text" />

                            <label htmlFor="">Hospital</label>
                            <input type="text" />

                        </S.FormularioCadastro>
                    </S.ContainerCadastro>
                </S.SessaoCadastro>

                <S.SessaoInformações>
                    <p>Estamos felizes em tê-lo aqui. Este é o primeiro passo para se integrar ao nosso sistema, que foi projetado para facilitar e otimizar o gerenciamento de informações dos profissionais de saúde.

Para começar, por favor, preencha o formulário abaixo com suas informações pessoais e profissionais. Isso nos ajudará a garantir que todas as suas informações sejam registradas corretamente e permitir que você aproveite todos os recursos que nosso sistema tem a oferecer.</p>
                </S.SessaoInformações>

            </S.MainCadastro>

            
        </>
        
    )
}

export default Cadastro;