import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import g from "../img/g.png"
import p from "../img/p.png"
import t from "../img/t.png"
import l from "../img/l.png"
import { Link } from "react-router-dom";
import Nosotros from "../paginas/Nosotros.js"
import NavLink from "react-bootstrap";

const Footer =() => {
    return (
        <footer className="text-white py-5 bg-dark">
                <Container >
                    <Row>
                    
                    <h2>Encuentranos en nuestras redes sociales 
                        <br/>
                        <Nav.Link href="/Nosotros">Inicio
                        Conoce sobre nosotros
                            </Nav.Link>
                            <br/>
                            <Link to="https://github.com/juanFeRoz/book-corner/tree/contenido-pagina-principal">
                             <img src={g} className="mx-2 m-auto" />
                             </Link>

                             <Link to="https://es-la.facebook.com/">
                             <img src={p} className="mx-2 m-auto" />
                             </Link>

                             <Link to="https://twitter.com/github?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                             <img src={t} className="mx-2  m-auto" />
                             </Link>
                             <Link to="https://www.linkedin.com/company/github">
                             <img src={l} className="mx-2  m-auto" />
                             </Link>

                             </h2>
                    </Row>
                </Container>
            </footer>

    )

}
export default Footer;