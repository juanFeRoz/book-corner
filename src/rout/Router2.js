import {Routes,Route} from "react-router-dom"
import Autores from "../paginas/autores"
import Generos from "../paginas/generos"
import Error404 from "../paginas/error404"
import Favoritos from "../rpriv/favoritos";
import MiLista from "../rpriv/milista";
import Inicio from "../paginas/inicio";


const Router2 = () => {
  return (
    <>
    
    <Routes>
        
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/Autores" element={<Autores />} />
        <Route path="/generos" element={<Generos />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/miLista" element={<MiLista />} />
        <Route path="*" element={<Error404 />} />
        
    </Routes>
   
    </>
  )
}

export default Router2