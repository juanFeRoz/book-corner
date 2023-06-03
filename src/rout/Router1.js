import {Routes,Route} from "react-router-dom"
import Inicio from "../paginas/inicio"
import Autores from "../paginas/autores"
import Generos from "../paginas/generos"
import Login from "../paginas/login"
import Signup from "../paginas/Signup"
import Error404 from "../paginas/error404"
import Recuperacion from "../paginas/recuperacion"
import { BarraNavegacion } from '../navbar/barra-navegacion';
import Router2 from "./Router2"

const Router1 = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<BarraNavegacion/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/Autores" element={<Autores />} />
        <Route path="/generos" element={<Generos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperacion" element={<Recuperacion />} />
        <Route path="/*" element={<Router2/>}/>
        <Route path="*" element={<Error404 />} />
    </Routes>
    </>
  )
}

export default Router1