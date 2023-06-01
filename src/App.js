import  Buscar from "./rpublicas/buscar"; 
import Home from "./rpublicas/home";
import Inicio from "./rpublicas/inicio";
import Signup from "./rpublicas/signup";
import Error404 from "./rpublicas/error404";
import Autores from "./rpublicas/autores";
import Generos from "./rpublicas/generos";
import FechaPublica from "./rpublicas/fechaPublica";
import Login from "./rpriv/login";
import { BrowserRoute,Route,Routes,Navigate, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/buscar" element={<Buscar/>}/>
      <Route path="/inicio" element={<Inicio/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/autores" element={<Autores/>}/>
      <Route path="/generos" element={<Generos/>}/>
      <Route path="/fechaPublica" element={<FechaPublica/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="*" element={<Error404/>}/>
     
    
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;
