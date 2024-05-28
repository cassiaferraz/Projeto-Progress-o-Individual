import { BrowserRouter, Routes, Route } from "react-router-dom";


import Desafios from '../components/Desafios/Desafios';
import Perfil from "../components/meu-perfil/Perfil/Perfil";
import Missoes from '../components/Missoes/Missoes';
import Recompensas from '../components/Recompensas/Recompensas';
import Login from "../components/pages/Login/Login";
import Update from "../components/pages/Update/Update"
import Config from '../components/meu-perfil/Config/Config'
import LaudosPendentes from "../components/meu-perfil/LaudosPendentes/LaudosPendentes";
import AutoAvaliacao from "../components/meu-perfil/Habilidades/AutoAvaliacao";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path= "/" element={<Home />} /> */}
                <Route path= "/" element={<Login />} />
                <Route path= "/Missoes" element={<Missoes />} />
                <Route path= "/Desafios" element={<Desafios />} />
                <Route path= "/Recompensas" element={<Recompensas />} />
                <Route path= "/Perfil" element={<Perfil />} />
                <Route path= "/Update" element={<Update />} />
                <Route path= "/Config" element={<Config />} />
                <Route path= "/LaudosPendentes" element={<LaudosPendentes />} />
                <Route path= "/AutoAvaliacao" element={<AutoAvaliacao />} />

            </Routes>
        </BrowserRouter>
    )
}








