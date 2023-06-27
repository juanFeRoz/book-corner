import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faDiscord} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';



const Footer =() => {
    return (
        <footer className="text-white py-5 bg-black" >
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
                             <a href="https://github.com/juanFeRoz/book-corner/tree/contenido-pagina-principal" className="iconosfotter" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="iconosfotter" icon={faGithub} />
                            </a>

                            <a href="https://es-la.facebook.com/" className="iconosfotter" target="_blank" rel="noopener noreferrer">
                               <FontAwesomeIcon className="iconosfotter" icon={faFacebook} />
                            </a>

                            <a href="https://twitter.com/github?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="iconosfotter" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon  icon={faTwitter} />
                            </a>

                            <a href="https://www.linkedin.com/company/github" target="_blank" rel="noopener noreferrer" className="iconosfotter">
                                <FontAwesomeIcon  icon={faDiscord} />
                            </a>

                            </h2>
                    </Row>
                </Container>
            </footer>

    )

}
export default Footer;