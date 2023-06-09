import React from "react";
import { Modal, Container, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLogin } from "./hooks/useLogin";

export function LoginModal({ show, handleClose }) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='formGroupEmail'>
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='formGroupPassword'
                        >
                            <Form.Label>Contraseña</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Password'
                                    value={password}
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
                            Login
                        </Button>
                        {error && <div>{error}</div>}
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    );
}
