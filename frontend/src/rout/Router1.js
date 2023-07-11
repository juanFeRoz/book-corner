import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Inicio from "../paginas/inicio";
import Autores from "../paginas/autores";
import Generos from "../paginas/generos";
import Error404 from "../paginas/error404";
import Recuperacion from "../paginas/recuperacion";
import Nosotros from "../paginas/Nosotros";
import Libros from "../paginas/libros";
import Encuesta from "../paginas/encuesta";
import MiLista from "../rpriv/milista";

const Router1 = () => {
    const { user } = useAuthContext();
    return (
        <>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/libros' element={<Libros />} />
                <Route
                    path='/encuesta'
                    element={user ? <Encuesta /> : <Inicio />}
                />
                <Route
                    path='/miLista'
                    element={user ? <MiLista /> : <Inicio />}
                />
                <Route path='/Autores' element={<Autores />} />
                <Route path='/generos' element={<Generos />} />
                <Route path='/recuperacion' element={<Recuperacion />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/Nosotros' element={<Nosotros />} />
            </Routes>
        </>
    );
};

export default Router1;
