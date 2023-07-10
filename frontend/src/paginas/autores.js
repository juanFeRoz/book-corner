import { useEffect, useState } from "react";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { BarraNavegacion } from "../navbar/barra-navegacion";

function BasicExample() {
    // hook para actualizar la lista de autores
    const [authors, setAuthors] = useState(null);

    // hook para traer los autores de la base de datos cuando cargue la pagina
    useEffect(() => {
        const fetchAutores = async () => {
            const response = await fetch("/authors");
            const json = await response.json();

            if (response.ok) {
                setAuthors(json);
            }
        };

        fetchAutores();
    }, []);

    return (
        <div>
            <BarraNavegacion />
            <Accordion defaultActiveKey='0'>
                {/* si la lista de autores es null no se mostrara nada, de lo contrario se muestran todos los autores en un acordeon */}
                {authors &&
                    authors.map((author) => (
                        <Accordion.Item eventKey={author._id}>
                            <Accordion.Header>{author.name}</Accordion.Header>
                            <Accordion.Body>{author.bio}</Accordion.Body>
                        </Accordion.Item>
                    ))}
            </Accordion>
        </div>
    );
}

export default BasicExample;
