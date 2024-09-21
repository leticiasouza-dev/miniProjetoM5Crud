import { useState, useEffect } from 'react';
import * as S from './Style'
import CampoInput from '../CampoInput/Input';
import Botoes from '../Botoes/Botoes';
import ContainerBotoes from '../ContainerBotoes/ContainerBotoes';
import { useContext} from 'react'; // Adicione useContext

import { UserContext } from '../../UserContext';
import { useEditarMedico } from '../../Hooks/useEditarMedico';

const FormularioEdicao = ({acaoCancelar}) => {
    const [novoNome, setNovoNome] = useState('')
    const [novoEmail, setNovoEmail] = useState('')
    const [novoTelefone, setNovoTelefone] = useState('')
    const [novaEspecialidade, setNovaEspecialidade] = useState('')
    const [novoHospital, setNovoHospital] = useState('')

    const {editarMedico} = useEditarMedico()
    const { medico, setMedico } = useContext(UserContext);

    useEffect(() => {
        if (medico) {
            setNovoNome(medico.nome || '');
            setNovoEmail(medico.email || ''); 
            setNovoTelefone(medico.telefone || '');
            setNovaEspecialidade(medico.especialidade || '');
            setNovoHospital(medico.hospital || '');
        }
    }, [medico]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const medicoAtualizado = {
            Nome: novoNome,
            Email: novoEmail,
            Telefone: novoTelefone,
            Especialidade: novaEspecialidade,
            Hospital: novoHospital,
        }

        editarMedico(medico.MedicoId, medicoAtualizado)
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
                <Botoes nome='cancelar' background='white' color='black' onClick={acaoCancelar}/>
            </ContainerBotoes>
            

        </S.formulario>
    )
}

export default FormularioEdicao;