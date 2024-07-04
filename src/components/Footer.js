import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col>
          <h5>About Us</h5>
          <p>Learn more about GamePlan and our mission.</p>
        </Col>
        <Col>
          <h5>Contact Us</h5>
          <p>Have any questions? Get in touch with us.</p>
        </Col>
        <Col>
          <h5>Terms of Service</h5>
          <p>Read our terms of service.</p>
        </Col>
        <Col>
          <h5>Privacy Policy</h5>
          <p>Learn how we handle your data.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
