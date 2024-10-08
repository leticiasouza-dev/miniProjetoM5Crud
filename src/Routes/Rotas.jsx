import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Cadastro from "../Pages/Cadastro/Cadastro";
import TelaMedico from "../Pages/TelaMedico/TelaMedico";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>

                <Route path="/login" element={<Login/>}/>

                <Route path="/cadastro" element={<Cadastro/>}/>

                <Route path="/tela-médico" element={<TelaMedico/>}/>

                <Route path="*" element={<div>Página Não encontrada</div>}/>
            </Routes>

        </BrowserRouter>
    )
    
}

export default Rotas;