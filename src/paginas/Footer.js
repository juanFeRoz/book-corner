import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import g from "../img/g.png"
import p from "../img/p.png"
import t from "../img/t.png"
import l from "../img/l.png"


const Footer =() => {
    return (
        <footer className="text-white py-5 bg-dark">
                <Container >
                    <Row>
                    
                    <h2>Encuentranos en nuestras redes sociales 
                        <br/>
                        <Nav.Link href="/Nosotros" className="text-primary">
                             {/* Cambia el color del enlace a azul  danna*/}
                        <a>Conoce sobre nosotros</a>
                            </Nav.Link>
                            <br/>
                            
                            {/* Cambié para que se vaya a otra pestaña cuando de en los iconos :) danna*/}
                             <a href="https://github.com/juanFeRoz/book-corner/tree/contenido-pagina-principal" target="_blank" rel="noopener noreferrer">
                                <img src={g} className="mx-2 m-auto" />
                            </a>

                            <a href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={p} className="mx-2 m-auto" />
                            </a>

                            <a href="https://twitter.com/github?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                                <img src={t} className="mx-2  m-auto" />
                            </a>

                            <a href="https://www.linkedin.com/company/github" target="_blank" rel="noopener noreferrer">
                                <img src={l} className="mx-2  m-auto" />
                            </a>

                            </h2>
                    </Row>
                </Container>
            </footer>

    )

}
export default Footer;