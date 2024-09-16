import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>

                <Route path="/login" element={<Login/>}/>

                <Route path="*" element={<div>Página Não encontrada</div>}/>
            </Routes>

        </BrowserRouter>
    )
    
}

export default Rotas;