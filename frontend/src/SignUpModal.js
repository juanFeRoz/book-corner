import React from "react";
import { Modal, Container, Button, Form, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useSignup } from "./hooks/useSignup";

export function SignUpModal({ show, handleClose }) {
    // Estado para controlar la visibilidad de la contraseña
    const [showPassword, setShowPassword] = useState(false);
    // Estado para almacenar el valor de la contraseña
    const [password, setPassword] = useState("");
    // Estado para el email
    const [email, setEmail] = useState("");

    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form
                        className='ancho'
                        onSubmit={handleSubmit}
                        name='signup'
                    >
                        <Form.Group className='mb-3 mt-3'>
                            <Form.Label htmlFor='email'>Email:</Form.Label>
                            <Form.Control
                                type='email'
                                className='form-control'
                                id='email'
                                placeholder='Enter email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                name='email'
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
                        </Form.Group>
                        <Button type='submit' disabled={isLoading}>
                            Sign up
                        </Button>
                        {error && <div>{error}</div>}
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    );
}
