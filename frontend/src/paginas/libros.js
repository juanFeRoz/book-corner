import { useEffect, useState } from "react";
import React from 'react'
import { BarraNavegacion } from '../navbar/barra-navegacion';
import Accordion from "react-bootstrap/Accordion";


function Librotes() {

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
        <div>
            <BarraNavegacion />
            {books &&
                books.map((Book) => (
                    <div className="cajita">
                        <h2>{Book.title}</h2>
                        <div className="imagen">
                            <img
                                src={Book.portada}
                                alt=''
                            />
                        </div>
                        <div className="sinopsis">
                        <h3>Sinopsis</h3>
                        {Book.summary}
                        </div>
                        <div>
                        <h3>Autor</h3>
                        {Book.author}
                        </div>

                        <div>
                        <h3>Género</h3>
                        el hgneero {Book.genre}
                        </div>

                        <div>
                        <h3>Link</h3>
                        {Book.download}
                        </div>

                    </div>
                     
                ))}

        </div>
    );
}

export default Librotes;