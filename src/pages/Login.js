import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with email: ${email}`);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="text-center">Login Page</h1>
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mr-2">
              Login
            </Button>
            <Button variant="link" href="/forgot-password">
              Forgot Password?
            </Button>
          </Form>
          <div className="mt-3">
            <p>Don't have an account? <a href="/signup">Sign up here</a></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
