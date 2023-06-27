import React from 'react'
import { BarraNavegacion } from '../navbar/barra-navegacion';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "../paginas/Footer.js"
import './inicio.css';
import rrr from "../img/divider.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
{/* Le agregé iconos a las listas del inicio :) danna*/}


{/* Anadi un css para que se vea mas bonito :) danna*/}

export default function Inicio() {
  return (
    <>
       
      <BarraNavegacion />
      
      <div className='contenedorindex'>
      <Container>
        <Row>
          <Col>
            <h1 className='display-1 text-center'>Book Corner</h1>
            <img src={rrr} className='miseparador'/>
          {/* <p className='lead text-center'>El mejor lugar para encontrar tus libros favoritos</p> */}
          </Col>
        </Row>

        <Row>
          <Col>

            <h2>Filtros</h2>
            <p className='lead'>¿No sabes exactamente lo que buscas? ¡nuestros filtros te pueden ayudar!</p>
            <ul style={{listStyle: "none"}}>
              <li>
              <FontAwesomeIcon icon={faCheck} />  Puedes buscar por autor o genero.
              </li>

              <li>
              <FontAwesomeIcon icon={faCheck} />  Tambien podras ver una lista de autores y generos disponibles.
              </li>
            </ul>

          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Personalizacion</h2>
            <p>Si te registras en Book Corner podras tener acceso a los siguientes beneficios:</p>
            <ul style={{listStyle: "none"}}>
              <li> <FontAwesomeIcon icon={faCheck} />  Calificar libros</li>
              <li><FontAwesomeIcon icon={faCheck} />  Guardar tus libros favoritos</li>
              <li><FontAwesomeIcon icon={faCheck} />  Escribir reseñas de los libros que hayas leido</li>
            </ul>
            
          </Col>
        </Row>
      </Container>
      </div>
  
   <Footer/>
    </>
  );
}
