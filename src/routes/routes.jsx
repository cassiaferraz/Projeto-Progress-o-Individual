import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importar os componentes 
import Desafios from '../components/Desafios/Desafios';
import Perfil from '../components/meu-perfil/Perfil';
import Missoes from '../components/Missoes/Missoes';
import Recompensas from '../components/Recompensas/Recompensas';
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register"

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Login />} />
                <Route path= "/Missoes" element={<Missoes />} />
                <Route path= "/Desafios" element={<Desafios />} />
                <Route path= "/Recompensas" element={<Recompensas />} />
                <Route path= "/Perfil" element={<Perfil />} />
                <Route path= "/Register" element={<Register />} />
                
            </Routes>
        </BrowserRouter>
    )
}








