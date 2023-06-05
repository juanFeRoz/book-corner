import React from "react";
import { Modal, Container, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa"
 
export function LoginModal({
  show,
  handleClose,
  login
}) {

  const [showPassword, setShowPassword] = useState(false);

  return <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Contraseña</Form.Label>
            <InputGroup>
              <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" />
              <Button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye/> }
              </Button>
            </InputGroup>
          </Form.Group>

          <Button type='submit' onClick={login}>
            Login
          </Button>
        </Form>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>;
}
