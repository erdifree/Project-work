import { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api1/auth/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("jwtToken", data.token);
                navigate("/");
            } else {
                setError(data.message || "Invalid credentials");
            }
        } catch (error) {
            setError("Something went wrong, please try again.");
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card
                style={{
                    width: "100%",
                    maxWidth: "400px",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    border: "none",
                    boxShadow: "none",
                    padding: "20px",
                }}
            >
                <Card.Body>
                    <h2 className="text-center mb-4 text-white">Login</h2>
                    {error && <div style={{ color: "red", textAlign: "center" }}>{error}</div>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white">Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                                    color: "white",
                                    borderColor: "rgba(255, 255, 255, 0.5)",
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-white">Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                                    color: "white",
                                    borderColor: "rgba(255, 255, 255, 0.5)",
                                }}
                            />
                        </Form.Group>

                        <Button
                            variant="dark"
                            type="submit"
                            className="w-100"
                            style={{
                                padding: "8px",
                                fontSize: "14px",
                                backgroundColor: "#333",
                                borderColor: "#333",
                            }}
                        >
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
