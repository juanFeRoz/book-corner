import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
// para que al dar atras despues del logout no permita acceder

export function BarraNavegacion() {
  const navegacion=useNavigate();
  const login =()=>{
    navegacion('/',{replace:true})
  }
  return <Navbar bg="dark" expand="lg" variant="dark">
    <Container fluid>
      <Navbar.Brand href="/">Book Corner</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/inicio">Inicio</Nav.Link>
          <Nav.Link href="/autores">Autores</Nav.Link>
          <Nav.Link href="/generos">Generos</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Buscar Libros" className="me-2" aria-label="Search" />
          <Button variant="outline-light">Buscar</Button>
        </Form>
        <Nav>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
  
}
