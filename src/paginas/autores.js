import React from 'react'
import { BarraNavegacion } from '../navbar/barra-navegacion';


import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Gabriel García Márquez</Accordion.Header>
        <Accordion.Body>
        Gabriel García Márquez. (6 de marzo de 1927, Aracataca, Colombia - 17 de abril de 2014, México D.F.). Escritor y periodista colombiano.
        Nace y pasa sus primeros años en una zona caribeña del norte de Colombia, que le marca especialmente por su contraste con Bogotá y otras zonas del país en las que vive más tarde. En 1947 empieza a estudiar Derecho, carrera que abandona para dedicarse al periodismo. Sus primeros artículos se publican en El Espectador y en El Heraldo y pasa a integrar el conocido como “Grupo de Barranquilla”, de cuya mano conoce la obra de los autores que más adelante le influenciarán: Faulkner, Virginia Woolf, Hemingway y Kafka, entre otros.
        Su primera obra, La hojarasca, se publica en 1955. En esa misma fecha viaja a Europa por primera vez y se queda allí cuatro años, viviendo en Ginebra, Roma y París. Durante su estancia en Francia, donde atraviesa dificultades económicas, escribe El coronel no tiene quien le escriba y La mala hora (publicadas en 1961 y 1962, respectivamente).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Miguel de Cervantes Saavedra</Accordion.Header>
        <Accordion.Body>
        (Alcalá de Henares, España, 1547 - Madrid, 1616) Escritor español, autor de Don Quijote de la Mancha (1605 y 1615), obra cumbre de la literatura universal. La inmensa fama de este libro inmortal, que parte de la parodia del género caballeresco para trazar un maravilloso retrato de los ideales y prosaísmos que cohabitan en el espíritu humano, ha hecho olvidar la existencia siempre precaria y azarosa del autor, al que ni siquiera sacó de la estrechez el fulgurante éxito del Quijote, compuesto en los últimos años de su vida.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
