import React from 'react'
import { BarraNavegacion } from '../navbar/barra-navegacion';

import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Integrante 1</Accordion.Header>
        <Accordion.Body>
        Dylan Francisco Jimenez Sandoval <br/>
        Codigo : 2202049 <br/>
        Correo : dylan2202049@correo.uis.edu.co <br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Integrante 2</Accordion.Header>
        <Accordion.Body>
        Danna Valentina Prada Briceño <br/>
        Codigo : 2211334 <br/>
        Correo : danna2211334@correo.uis.edu.co <br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Integrante 3</Accordion.Header>
        <Accordion.Body>
        Andrey Felipe Leguizamo Cespedes <br/>
        Codigo : 2201998 <br/>
        Correo : andrey2201998@correo.uis.edu.co <br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Integrante 4</Accordion.Header>
        <Accordion.Body>
        Juan Felipe Rojas De La Hoz  <br/>
        Codigo : 2220070 <br/>
        Correo : juan2220070@correo.uis.edu.co <br/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;