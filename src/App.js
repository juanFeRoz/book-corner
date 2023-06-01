import Home from "./rpublicas/home";
import Signup from "./rpublicas/signup";
import Error404 from "./rpublicas/error404";
import Autores from "./rpublicas/autores";
import Generos from "./rpublicas/generos";
import Login from "./rpriv/login";
import { BrowserRoute, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/autores" element={<Autores />} />
        <Route path="/generos" element={<Generos />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
