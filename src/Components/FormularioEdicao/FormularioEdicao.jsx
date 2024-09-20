import { useState } from 'react';
import * as S from './Style'
import CampoInput from '../CampoInput/Input';
import Botoes from '../Botoes/Botoes';
import ContainerBotoes from '../ContainerBotoes/ContainerBotoes';

const FormularioEdicao = () => {
    const [novoNome, setNovoNome] = useState('')
    const [novoEmail, setNovoEmail] = useState('')
    const [novoTelefone, setNovoTelefone] = useState('')
    const [novaEspecialidade, setNovaEspecialidade] = useState('')
    const [novoHospital, setNovoHospital] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <S.formulario onSubmit={handleSubmit}>
            <h1>Formulario de Edição de Dados:</h1>

            <label htmlFor="">Nome</label>
            <CampoInput 
                type="text" 
                value={novoNome}   
                onChange={(e) => setNovoNome(e.target.value)} 
            />

            <label htmlFor="">Email</label>
            <CampoInput 
                type="email" 
                value={novoEmail}
                onChange={(e) => setNovoEmail(e.target.value)}
            />

            <label htmlFor="">Telefone</label>
            <CampoInput 
                type="tel" 
                value={novoTelefone}
                onChange={(e) => setNovoTelefone(e.target.value)}
            />

            <label htmlFor="">Especialidade</label>
            <CampoInput 
                type="text" 
                value={novaEspecialidade}
                onChange={(e) => setNovaEspecialidade(e.target.value)}
            />

            <label htmlFor="">Hospital</label>
            <CampoInput 
                type="text"
                value={novoHospital} 
                onChange={(e) => setNovoHospital(e.target.value)}
            />

            <ContainerBotoes>
                <Botoes nome='enviar' background='black'/>
                <Botoes nome='cancelar' background='white' color='black'/>
            </ContainerBotoes>
            

        </S.formulario>
    )
}

export default FormularioEdicao;