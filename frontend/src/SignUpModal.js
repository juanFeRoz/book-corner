import React from "react";
import { Modal, Container, Button, Form, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export function SignUpModal({ show, handleClose }) {
    // Estado para controlar la visibilidad de la contraseña
    const [showPassword, setShowPassword] = useState(false);
    // Estado para almacenar el valor de la contraseña
    const [password, setPassword] = useState("");

    // Función para validar la contraseña
    const validate = (password) => {
        if (password.length < 5)
            return "Contraseña debe tener al menos 5 caracteres";
        return null;
    };

    // Obtener el mensaje de error de validación
    const errorMessage = validate(password);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form className='ancho'>
                        <Form.Group className='mb-3 mt-3'>
                            <Form.Label htmlFor='email'>Email:</Form.Label>
                            <Form.Control
                                type='email'
                                className='form-control'
                                id='email'
                                placeholder='Enter email'
                                name='email'
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label htmlFor='date'>
                                ¿Cuándo naciste?
                            </Form.Label>
                            <Form.Control
                                type='date'
                                className='form-control'
                                id='date'
                                placeholder='Enter fecha nacimiento'
                                name='fecha_nacimiento'
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <InputGroup>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    className='form-control'
                                    placeholder='contraseña'
                                    value={password}
                                    id='pwd'
                                    name='password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <Button
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                            </InputGroup>
                            {/* Mostrar mensaje de error si existe */}
                            {errorMessage && <p>{errorMessage}</p>}
                        </Form.Group>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    );
}
