import React from "react";
import { Modal, Container, Button } from "react-bootstrap";

export function SignUpModal({
  show,
  handleClose
}) {
  return <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <form action="#" className='ancho'>

                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">Email:</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" autoComplete='off' />
                </div>
                <div class="mb-3">
                  <label for="date" class="form-label">¿Cuándo naciste?</label>
                  <input type="date" class="form-control" id="date" placeholder="Enter fecha nacimiento" name="fecha_nacimiento" />

                </div>
                <div class="mb-3">
                  <label for="pwd" class="form-label">Password:</label>
                  <input type="password" class="form-control" id="pwd" placeholder="contraseña" name="password" />
                </div>


                <div class="form-check mb-3">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" name="remember" /> Acepto los terminos y condiciones
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </Container>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>;
}
  