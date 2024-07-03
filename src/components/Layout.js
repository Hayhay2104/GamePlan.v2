// src/components/Layout.js
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">GamePlan</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/create-event">Create Event</Nav.Link>
        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
        <Nav.Link as={Link} to="/chat">Chat</Nav.Link>
      </Nav>
    </Navbar>
    <Container>
      {children}
    </Container>
  </div>
);

export default Layout;
