import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Login = () => {

  return (

    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button type='submit'>
          Login
        </Button>
      </Form>


    </Container>

  )
}

export default Login