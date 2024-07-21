import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 

const Logout = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="text-center">Logout Page</h1>
          <p className="text-center">You have been logged out.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Logout;
