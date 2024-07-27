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
import BoxPerfil from "../components/meu-perfil/BoxPerfil/BoxPerfil";

export default function Router() {
    
    const [user, setUser] = useState(null);

    const port = '3000'
    const ipAddress = '192.168.15.56';
    const serverIP = `http://${ipAddress}:${port}`;

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login serverIP={serverIP} />} />
                    <Route path="/Missoes" element={<Missoes serverIP={serverIP} />} />
                    <Route path="/Desafios" element={<Desafios />} />
                    <Route path="/Recompensas" element={<Recompensas />} />
                    <Route path="/Perfil" element={<Perfil serverIP={serverIP} />} />
                    <Route path="/Update" element={<Update serverIP={serverIP} />} />
                    <Route path="/BoxPerfil" element={<BoxPerfil serverIP={serverIP} />} />
                    <Route path="/Config" element={<Config />} />
                    <Route path="/LaudosPendentes" element={<LaudosPendentes serverIP={serverIP} />} />
                    <Route path="/PreenchimentoLaudo" element={<PreenchimentoLaudo serverIP={serverIP} />} />
                    <Route path="/AutoAvaliacao" element={<AutoAvaliacao serverIP={serverIP} />} />
                    <Route path="/UserContext" element={<UserContext  />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

