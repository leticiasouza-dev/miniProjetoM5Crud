import * as S from './Style';
 import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header'
import MenuLateral from '../../Components/MenuLateral/MenuLateral';

import iconeSino from '../../assets/bell.svg'
import avatar from '../../assets/Avatar Image.svg'
import { useContext} from 'react'; // Adicione useContext
import { useDeletarMedico } from '../../Hooks/UseDeletarMedico';

import { MedicoProvider, UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import FormularioEdicao from '../../Components/FormularioEdicao/FormularioEdicao';

const TelaMedico = () => {
   
    const { medico, setMedico } = useContext(UserContext);
    const {deletarMedico} = useDeletarMedico();
    const navigate = useNavigate();

    const [mostrarFormularioEdicao, setMostrarFormularioEdicao] = useState(false)

    const handleSair = () => {
        setMedico(null)

        localStorage.removeItem('medico');
        navigate('/');
    }

    const deletarMedicoId = async () => {
        console.log("clicou")
        try {
            await deletarMedico(medico.MedicoId); 
            
            localStorage.removeItem('medico');
            navigate("/login");

        } catch (error) {
            console.error('Erro ao deletar médico:', error);
        }
    };

    useEffect(() => {
        const medicoLogin = localStorage.getItem('medico');
        if (medicoLogin) {
            setMedico(JSON.parse(medicoLogin));
        } else {
            navigate("/login");
        }

        const apagarSessaoAoRecarregar = () => {
            localStorage.removeItem('medico')
        }

        window.addEventListener('beforeunload', apagarSessaoAoRecarregar);

        return () => {
            window.removeEventListener('beforeunload', apagarSessaoAoRecarregar)
        }


    }, [navigate, setMedico]);

    return(
        <>
            <Header>

                <S.ContainerIcons>
                    <img src={iconeSino} alt="" />
                    <img src={avatar} alt="" />
                </S.ContainerIcons>
            </Header>

            <S.MainTelaMedico>
                <MenuLateral excluir={deletarMedicoId} sair={handleSair} setMostrarFormularioEdicao={setMostrarFormularioEdicao}/>

                {mostrarFormularioEdicao ? (
                    <FormularioEdicao acaoCancelar={() => setMostrarFormularioEdicao(false)}/>
                ) : (
                    <p>oiiii</p>
                )
                }

                

                {/* {medico ? (
                <>
                <p>Bem-vindo, {medico.Nome}</p>
                <p>{medico.MedicoId}</p>
                </>
                ) : (
                <p>Nenhum usuário logado.</p>
                )} */}
                    
                
                
            </S.MainTelaMedico>
        </>
    )
}

export default TelaMedico;