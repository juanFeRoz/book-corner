import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark" >
        <Container fluid>
          <Navbar.Brand href="#home">Book Corner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Buscar</Nav.Link>
              <NavDropdown title="Filtros" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Autores</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Generos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fecha Publicacion</NavDropdown.Item>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>

      </Container>
    </div>
  );
}

export default App;
