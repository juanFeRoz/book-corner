import React from "react";
import { BarraNavegacion } from "../navbar/barra-navegacion";
import { useEffect, useState } from "react";
import Footer from "../paginas/Footer.js"
import '../paginas/libros.css';


function Milista(){

     // hook para actualizar la lista de autores
     const [books, setBooks] = useState(null);

     useEffect(() => {
        const fetchLibros = async () => {
            const response = await fetch("/books");
            const json = await response.json();

            if (response.ok) {
                setBooks(json);
            }
        };

        fetchLibros();
    }, []);


    return (
        <>
            <BarraNavegacion />

            <div className="contenedor">
            
            
            <h1 className="titulo">Libros Favoritos</h1>
            
            <div className="contenedorcajitas">
                {books &&
                 books.filter((Book) => Book.favorite === true) // Filtrar los libros favoritos

                .map((Book) => (

                    
                    <div className="cajita">
                        <div className="titulocontenedor">
                            <h2>{Book.title}</h2>
                        </div>
                        <div className="imagen">
                            <img
                                src={Book.portada}
                                alt=''
                            />
                        </div>
                        <div className="contenedorinfo">



                            <div className="sinopsis">
                                <h6>Link:</h6>
                                <a href={Book.download}>DESCARGAR</a>
                            </div>

                            <div>
                                <h6>Autor:</h6>
                                {Book.author}
                            </div>

                            <div>
                                <h6>Género:</h6>
                                {Book.genre}
                            </div>

                            <div >
                                <h6>Sinopsis:</h6>
                               {Book.summary}
                            </div>

                        </div>

                    </div>

                    
                     
                ))}
            </div>   
         <div className="espacio"></div>
             <Footer/>   
        </div>      
        </>
    );
}
export default Milista;
