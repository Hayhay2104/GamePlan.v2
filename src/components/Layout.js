import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">GamePlan</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
          <Nav.Link as={Link} to="/calendar">My Calendar</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Button variant="outline-light" as={Link} to="/login" className="mr-2">Login</Button>
          <Button variant="outline-light" as={Link} to="/signup" className="mr-2">Signup</Button>
          <Button variant="light" as={Link} to="/profile" className="mr-2">Profile</Button>
          <Button variant="light" as={Link} to="/logout" className="mr-2">Logout</Button>
        </Nav>
      </Container>
    </Navbar>
    <Container className="App">
      {children}
    </Container>
    <Footer />
  </div>
);

export default Layout;
