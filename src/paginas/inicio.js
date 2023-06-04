import React from 'react'
import { BarraNavegacion } from '../navbar/barra-navegacion';
import { Container, Row, Col } from 'react-bootstrap';

export default function Inicio() {
  return (
    <>

      <BarraNavegacion />

      <Container>
        <Row>
          <Col>
            <h1 className='display-1 text-center'>Book Corner</h1>
            <p className='lead text-center'>El mejor lugar para encontrar tus libros favoritos</p>
          </Col>
        </Row>

        <Row>
          <Col>

            <h2>Filtros</h2>
            <p className='lead'>¿No sabes exactamente lo que buscas? ¡nuestros filtros te pueden ayudar!</p>
            <ul style={{listStyle: "none"}}>
              <li>
                Puedes buscar por autor o genero.
              </li>

              <li>
                Tambien podras ver una lista de autores y generos disponibles.
              </li>
            </ul>

          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Personalizacion</h2>
            <p>Si te registras en Book Corner podras tener acceso a los siguientes beneficios:</p>
            <ul style={{listStyle: "none"}}>
              <li>Calificar libros</li>
              <li>Guardar tus libros favoritos</li>
              <li>Escribir reseñas de los libros que hayas leido</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
