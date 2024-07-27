import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Desafios from '../components/Desafios/Desafios';
import Perfil from "../components/meu-perfil/Perfil/Perfil";
import Missoes from '../components/Missoes/Missoes';
import Recompensas from '../components/Recompensas/Recompensas';
import Login from "../components/pages/Login/Login";
import Update from "../components/pages/Update/Update"
import Config from '../components/meu-perfil/Config/Config'
import LaudosPendentes from "../components/meu-perfil/LaudosPendentes/LaudosPendentes";
import AutoAvaliacao from "../components/meu-perfil/Habilidades/AutoAvaliacao/AutoAvaliacao";
import PreenchimentoLaudo from '../components/meu-perfil/LaudosPendentes/PreenchimentoLaudo'
import UserContext from "../components/meu-perfil/BoxPerfil/UserContext";

export default function Router() {
    
    const [user, setUser] = useState(null);


    return(
        
        <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
            <Routes>
                <Route path= "/Login" element={<Login />} />
                <Route path= "/" element={<Missoes />} />
                <Route path= "/Desafios" element={<Desafios />} />
                <Route path= "/Recompensas" element={<Recompensas />} />
                <Route path= "/Perfil" element={<Perfil />} />
                <Route path= "/Update" element={<Update />} />
                <Route path= "/Config" element={<Config />} />
                <Route path= "/LaudosPendentes" element={<LaudosPendentes />} />
                <Route path= "/PreenchimentoLaudo" element={<PreenchimentoLaudo />} />
                <Route path= "/AutoAvaliacao" element={<AutoAvaliacao />} />
                <Route path= "/UserContext" element={<UserContext />} />

            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}








