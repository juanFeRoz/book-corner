import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React from 'react'

export default  function Home() {
 return (
<div className="App">
      <Navbar bg="dark" expand="lg" variant="dark" >
        <Container fluid>
          <Navbar.Brand href="/">Book Corner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/inicio">Inicio</Nav.Link>
              <Nav.Link href="/buscar">Buscar</Nav.Link>
              <NavDropdown title="Filtros" id="basic-nav-dropdown">
                <NavDropdown.Item href="/autores">Autores</NavDropdown.Item>
                <NavDropdown.Item href="/generos">Generos</NavDropdown.Item>
                <NavDropdown.Item href="/fechaPublica">Fecha Publicacion</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar Libros"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Buscar</Button>
            </Form>
            <Nav>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>

      </Container>
    </div>
     );
 }