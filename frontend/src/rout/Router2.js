import { Routes, Route } from "react-router-dom";
import Autores from "../paginas/autores";
import Generos from "../paginas/generos";
import Error404 from "../paginas/error404";
import MiLista from "../rpriv/milista";
import Inicio from "../paginas/inicio";
import Encuesta from "../paginas/encuesta";
import Nosotros from "../paginas/Nosotros";

const Router2 = () => {
    return (
        <>
            <Routes>
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/Autores' element={<Autores />} />
                <Route path='/generos' element={<Generos />} />
                <Route path='/miLista' element={<MiLista />} />
                <Route path='/encuesta' element={<Encuesta />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/Nosotros' element={<Nosotros />} />
            </Routes>
        </>
    );
};

export default Router2;
