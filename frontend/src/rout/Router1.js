import {Routes,Route} from "react-router-dom"
import Inicio from "../paginas/inicio"
import Autores from "../paginas/autores"
import Generos from "../paginas/generos"
import Error404 from "../paginas/error404"
import Recuperacion from "../paginas/recuperacion"
import Router2 from "./Router2"
import Nosotros from "../paginas/Nosotros";


const Router1 = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/Autores" element={<Autores />} />
        <Route path="/generos" element={<Generos />} />
        <Route path="/recuperacion" element={<Recuperacion />} />
        <Route path="/*" element={<Router2/>}/>
        <Route path="*" element={<Error404 />} />
        <Route path="/Nosotros" element={<Nosotros />} />
    </Routes>
    </>
  )
}

export default Router1