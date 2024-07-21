import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">GamePlan</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/calendar">My Calendar</Nav.Link>
          </Nav>
          <Form inline onSubmit={handleSearch} className="d-flex ml-auto">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="outline-light">Search</Button>
          </Form>
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
};

export default Layout;
