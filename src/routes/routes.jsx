import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importar os componentes 
import Desafios from '../components/Desafios/Desafios';
import Perfil from '../components/meu-perfil/Perfil';
import Missoes from '../components/Missoes/Missoes';
import Recompensas from '../components/Recompensas/Recompensas';
import Home from "../components/Inicial/Home";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home />} />
                <Route path= "/Missoes" element={<Missoes />} />
                <Route path= "/Desafios" element={<Desafios />} />
                <Route path= "/Recompensas" element={<Recompensas />} />
                <Route path= "/Perfil" element={<Perfil />} />
                
            </Routes>
        </BrowserRouter>
    )
}








